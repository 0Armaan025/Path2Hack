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
