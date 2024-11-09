import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import axios from "axios";
import { MongoClient } from "mongodb";
import { JSDOM } from "jsdom";
import multer from "multer";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

const app = express();
const uri = process.env.MONGODB_URI ||
  "";

const client = new MongoClient(uri);

const port = 3001;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Connect to MongoDB before handling requests
client.connect().then(() => {
  console.log("Connected to MongoDB");
});

const usersCollection = client.db("Path2Hack").collection("users");

app.post("/api/register", async (req, res) => {
  const { username, email } = req.body;

  try {
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ exists: true });
    }

    const newUser = { username, email };
    await usersCollection.insertOne(newUser);

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({ error: "Error registering user" });
  }
});

app.post("/api/githubProjectIdea", async (req, res) => {
  const { gitHubToken, ideaDesc } = req.body;

  try {
    const reposResponse = await fetch(
      `https://api.github.com/users/${gitHubToken}/repos`
    );
    const repos = await reposResponse.json();

    const languageCount = {};
    const topRepos = repos.slice(0, 20).map((repo) => {
      const { name, language } = repo;
      languageCount[language] = (languageCount[language] || 0) + 1;
      return { name, language };
    });

    const prompt = `A user whose top GitHub Repos consist of these languages : ${Object.keys(
      languageCount
    )
      .filter((language) => language !== "null")
      .join(
        ", "
      )}. Give review in about 1 line, idea description is ${ideaDesc} (Write a unique project idea in the format: Project Name: description: what makes it unique: tech stack: features: and another important things DO NOT WRITE ANYTHING ELSE OR USELESS)`;

    const result = await model.generateContent(prompt);
    const aiIdea = result.response.text();
    console.log(aiIdea);

    return res.status(200).json({ idea: aiIdea });
  } catch (error) {
    console.error("Error fetching GitHub repositories:", error);
    return res
      .status(500)
      .json({ error: "Error fetching GitHub repositories" });
  }
});

app.post("/api/projectIdea", async (req, res) => {
  const { description, theme, keywords } = req.body;

  try {
    const prompt = `Generate a unique project idea based on the following description, theme, and keywords:

    Description: ${description}
    Theme: ${theme}
    Keywords: ${keywords.join(", ")}
    
    Write a unique project idea in the format: Project Name: description: what makes it unique: tech stack: features: and another important things DO NOT WRITE ANYTHING ELSE OR USELESS`;

    const result = await model.generateContent(prompt);
    const aiIdea = result.response.text();
    console.log(aiIdea);

    return res.status(200).json({ idea: aiIdea });
  } catch (error) {
    console.error("Error generating project idea:", error);
    return res.status(500).json({ error: "Error generating project idea" });
  }
});

app.post("/api/scrapeAndReviewProject", async (req, res) => {
  const { url } = req.body;

  try {
    // Fetch the HTML content of the page
    const { data } = await axios.get(url);

    // Use jsdom to parse the HTML content
    const dom = new JSDOM(data);
    const document = dom.window.document;

    // Collect all visible text from the page
    let pageText = "";
    const bodyTextNodes = document.querySelectorAll("body *");

    bodyTextNodes.forEach((node) => {
      if (node.textContent && node.textContent.trim()) {
        pageText += node.textContent.trim() + " ";
      }
    });

    // Prepare prompt for Gemini with all collected page text
    const prompt = `
        Review the following project and provide feedback on areas of improvement.
        Rate the project on a scale of 1 to 10 based on creativity, technical challenge, and potential impact.
  
        Project Text Content: ${pageText}
  
        Provide feedback in the following format:
        Review: [Your Review]
        Improvements: [Suggested Improvements]
        Rating (1-10): [Your Rating]
      `;

    // Send data to Gemini for review
    const result = await model.generateContent(prompt);
    const reviewContent = result.response.text();

    return res.status(200).json({ review: reviewContent });
  } catch (error) {
    console.error("Error scraping and reviewing project:", error);
    return res
      .status(500)
      .json({ error: "Error scraping and reviewing project" });
  }
});

const projectsCollection = client.db("Path2Hack").collection("projects");

app.post("/api/createProject", upload.single("imageUrl"), async (req, res) => {
  const {
    projectName,
    hackathonName,
    devpostUrl,
    devfolioUrl,
    githubUrl,
    projectDescription,
    techStack,
    isProjectPublic,
    isWinner,
    userName,
  } = req.body;

  const imageUrl = req.file ? req.file.path : null; // Retrieve file path

  try {
    const existingProject = await projectsCollection.findOne({ projectName });
    if (existingProject) {
      return res
        .status(400)
        .json({ error: "Project with the same name already exists" });
    }

    const newProject = {
      projectName,
      imageUrl,
      hackathonName,
      devpostUrl,
      devfolioUrl,
      githubUrl,
      projectDescription,
      techStack: JSON.parse(techStack),
      isProjectPublic: isProjectPublic === "true",
      isWinner: isWinner === "true",
      userName,
    };

    await projectsCollection.insertOne(newProject);

    return res.status(201).json({ message: "Project created successfully" });
  } catch (error) {
    console.error("Error creating project:", error);
    return res.status(500).json({ error: "Error creating project" });
  }
});
