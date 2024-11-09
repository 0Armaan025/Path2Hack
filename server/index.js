import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config({ path: ".env.local" });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post("/api/projectIdea", async (req, res) => {
  const { gitHubToken, ideaDesc } = req.body;

  try {
    // Fetch GitHub repositories
    const reposResponse = await fetch(
      `https://api.github.com/users/${gitHubToken}/repos`
    );
    const repos = await reposResponse.json();

    // Process the repos data to get languages and top repos
    const languageCount = {};
    const topRepos = repos.slice(0, 20).map((repo) => {
      const { name, language } = repo;
      languageCount[language] = (languageCount[language] || 0) + 1;
      return { name, language };
    });

    // Generate a prompt for Gemini AI
    const prompt = `A user whose top GitHub Repos consist of these languages : ${Object.keys(
      languageCount
    )
      .filter((language) => language !== "null")
      .join(
        ", "
      )}. ${ideaDesc}(without any text decoration or any useless word, give 1 project idea in the format Project Name: Project Tech stack: Why is it unique?: and other things you find good to add, DO NOT ADD ANY TYPE OF DECORATION LIKE **`;

    // Call to Gemini AI
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
