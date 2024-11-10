"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Cookies from "js-cookie";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState<File | null>(null);

  const [devpostUrl, setDevpostUrl] = useState("");
  const [hackathonName, setHackathonName] = useState("");
  const [devfolioUrl, setDevfolioUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [makePublic, setMakePublic] = useState(false);
  const [win, setWin] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProjectImage(file || null);
  };

  const handleTechStackAdd = () => {
    if (techInput && !techStack.includes(techInput)) {
      setTechStack([...techStack, techInput]);
      setTechInput("");
    }
  };

  const handleTechRemove = (tag: string) => {
    setTechStack(techStack.filter((tech) => tech !== tag));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleTechStackAdd();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("projectName", projectName);
    formData.append("hackathonName", hackathonName);
    formData.append("devpostUrl", devpostUrl);
    formData.append("devfolioUrl", devfolioUrl);
    formData.append("githubUrl", githubUrl);
    formData.append("projectDescription", projectDescription);
    formData.append("techStack", JSON.stringify(techStack));
    formData.append("isProjectPublic", makePublic.toString());
    formData.append("isWinner", win.toString());
    formData.append("userName", Cookies.get("username")?.toString() || "");

    if (projectImage) {
      formData.append("imageUrl", projectImage as Blob);
    }

    try {
      const response = await fetch("http://localhost:3001/api/createProject", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Project Submitted Successfully!");
      } else {
        const errorData = await response.json();
        console.log("Error details:", errorData);
      }
    } catch (error) {
      console.error("Error submitting project:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <Navbar />
      <div className="flex-grow flex flex-col items-center px-8 py-12">
        <div className="w-full max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-xl ring-1 ring-gray-700 transform transition-all duration-300 hover:scale-[1.02] hover:ring-indigo-600">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Submit Your Project
          </h1>

          <p className="text-gray-400 text-center mb-8 text-lg">
            Fill in the details to showcase your project.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Project Name
              </label>
              <input
                type="text"
                name="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="Enter project name"
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Project Image
              </label>
              <input
                type="file"
                name="projectImage"
                onChange={handleImageUpload}
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 outline-none"
                accept="image/*"
              />
              {projectImage && (
                <p className="text-sm text-green-400 mt-2">
                  Image uploaded successfully.
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Hackathon Name
              </label>
              <input
                type="text"
                name="hackathonName"
                value={hackathonName}
                onChange={(e) => setHackathonName(e.target.value)}
                placeholder="Hack The Fall (Virtual) 2024"
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Devpost URL <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="url"
                value={devpostUrl}
                onChange={(e) => setDevpostUrl(e.target.value)}
                placeholder="https://devpost.com/your-project"
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Devfolio URL <span className="text-gray-500">(Optional)</span>
              </label>
              <input
                type="url"
                name="devfolioUrl"
                value={devfolioUrl}
                onChange={(e) => setDevfolioUrl(e.target.value)}
                placeholder="https://devfolio-url/your-project"
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                GitHub URL
              </label>
              <input
                type="url"
                name="githubUrl"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/your-repo"
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Project Description
              </label>
              <textarea
                value={projectDescription}
                name="projectDescription"
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Describe your project here..."
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none resize-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Tech Stack
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  name="techStack"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter a tech stack"
                  className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none"
                />
                <button
                  type="button"
                  onClick={handleTechStackAdd}
                  className="px-4 py-3 bg-indigo-600 text-gray-100 rounded-lg border-2 border-indigo-500 hover:bg-indigo-700 transition-all duration-300"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                {techStack.map((tag, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-indigo-600 text-gray-100 rounded-lg flex items-center gap-2"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleTechRemove(tag)}
                      className="text-red-500 text-lg"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <label className="flex items-center gap-2 text-lg text-indigo-300">
                <input
                  type="checkbox"
                  checked={makePublic}
                  onChange={() => setMakePublic(!makePublic)}
                  className="text-indigo-500 rounded"
                />
                Make Project Public
              </label>
              <label className="flex items-center gap-2 text-lg text-indigo-300">
                <input
                  type="checkbox"
                  checked={win}
                  onChange={() => setWin(!win)}
                  className="text-indigo-500 rounded"
                />
                I Won in Hackathon
              </label>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                onClick={handleSubmit}
                className="px-6 py-3 bg-indigo-600 text-gray-100 font-semibold text-lg rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Submit Project
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectForm;
