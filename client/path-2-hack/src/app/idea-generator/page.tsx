"use client";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const IdeaGeneratorPage = () => {
  const [tags, setTags] = useState<string[]>(["MongoDB", "Express", "React"]);
  const [gitHubToken, setGitHubToken] = useState<string>("demoUser");
  const [ideaDesc, setIdeaDesc] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [analyseRepo, setAnalyseRepo] = useState<string>("");
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [customTheme, setCustomTheme] = useState<string>("");
  const [customKeywords, setCustomKeywords] = useState<string[]>([]);

  const handleAddTag = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ((event.key === "Enter" || event.key === "Tab") && inputValue) {
      event.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // GitHub token-based idea generation
  async function handleAnalyseRepo(gitHubToken: string, ideaDesc: string) {
    try {
      const response = await fetch(
        "http://localhost:3001/api/githubProjectIdea",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ gitHubToken, ideaDesc }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAnalyseRepo(data.idea);
      } else {
        console.error("Error:", data.error || "Failed to fetch project idea");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  // Custom prompt-based idea generation
  async function handleCustomPromptGeneration() {
    try {
      const response = await fetch("http://localhost:3001/api/projectIdea", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          description: customPrompt,
          theme: customTheme,
          keywords: customKeywords,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setAnalyseRepo(data.idea);
      } else {
        console.error("Error:", data.error || "Failed to fetch project idea");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col lg:flex-row flex-grow p-6 lg:p-12 rounded-lg">
        {/* GitHub Token Based Section */}
        <div className="lg:w-1/2 flex flex-col items-center bg-[#c6c6c6] rounded-xl shadow-lg p-6 space-y-3">
          <h2
            className="text-2xl font-semibold text-gray-800"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Generate a New Idea
          </h2>
          <p className="text-gray-600 text-center">
            Enter the Github username here to get an idea based on what you can
            develop (after analyzing your GitHub repos).
          </p>
          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Github username
            </label>
            <input
              type="text"
              placeholder="Enter your Github username"
              className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setGitHubToken(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Idea Description (Optional)
            </label>
            <textarea
              placeholder="Describe your idea"
              className="w-full h-24 px-4 py-2 border rounded-[0.5rem] border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setIdeaDesc(e.target.value)}
            />
          </div>

          <button
            style={{ fontFamily: "Poppins" }}
            className="w-full px-4 py-2 bg-[#0b0909] text-white  font-semibold rounded-[0.5rem] hover:bg-[#211a1a] transition duration-200"
            onClick={() => handleAnalyseRepo(gitHubToken, ideaDesc)}
          >
            Create Idea
          </button>

          {analyseRepo && (
            <div className="w-full mt-4 p-4 bg-gray-200 rounded-lg">
              <h3
                className="text-lg font-semibold text-gray-800"
                style={{ fontFamily: "Poppins" }}
              >
                Generated Idea
              </h3>
               <ReactMarkdown
                
                remarkPlugins={[remarkGfm]}
              >{analyseRepo}</ReactMarkdown>
            </div>
          )}
        </div>

        <div className="hidden lg:block w-[5px] bg-gray-200 mx-8"></div>

        {/* Custom Prompt Based Section */}
        <div className="lg:w-1/2 flex flex-col items-center bg-[#c6c6c6] rounded-xl shadow-lg p-6 space-y-4">
          <h2
            className="text-2xl font-semibold text-gray-800"
            style={{ fontFamily: "Poppins" }}
          >
            Custom Prompt Idea
          </h2>
          <p className="text-gray-600 text-center">
            Enter a custom prompt here to generate a tailored idea without
            requiring a Github username.
          </p>
          <textarea
            placeholder="Describe what you would like to create"
            className="w-full h-32 px-4 py-2 border border-gray-600 rounded-[0.6rem] resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={customPrompt}
            onChange={(e) => setCustomPrompt(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter the theme"
            className="w-full px-4 py-2 border border-gray-300 rounded-[0.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={customTheme}
            onChange={(e) => setCustomTheme(e.target.value)}
          />

          <div className="w-full">
            <label className="block text-gray-700 text-md font-bold mb-2">
              Keywords/Tags
            </label>
            <div className="flex flex-wrap items-center border  rounded-md p-2 space-x-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-800 text-white font-semibold text-sm rounded-full px-3 py-1 mb-2 flex items-center"
                  style={{ fontFamily: "Poppins" }}
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="ml-1 text-white font-semibold hover:text-red-600 focus:outline-none"
                  >
                    &times;
                  </button>
                </span>
              ))}
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleAddTag}
                placeholder="Add a keyword and press Enter"
                className="flex-grow px-2 py-1 focus:outline-none rounded-[0.3rem]"
              />
            </div>
          </div>

          <button
            style={{ fontFamily: "Poppins" }}
            className="w-full px-4 py-2 bg-[#0b0909] text-white  font-semibold rounded-[0.5rem] hover:bg-[#211a1a] transition duration-200"
            onClick={handleCustomPromptGeneration}
          >
            Generate Idea
          </button>

          {analyseRepo && (
            <div className="w-full mt-4 p-4 bg-gray-200 rounded-lg">
              <h3
                className="text-lg font-semibold text-gray-800"
                style={{ fontFamily: "Poppins" }}
              >
                Generated Idea
              </h3>
              <ReactMarkdown
                
                remarkPlugins={[remarkGfm]}
              >{analyseRepo}</ReactMarkdown>
              
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default IdeaGeneratorPage;
