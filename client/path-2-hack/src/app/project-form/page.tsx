"use client";
import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const ProjectForm = () => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState<File | null>(null);
  const [devpostUrl, setDevpostUrl] = useState("");
  const [devfolioUrl, setDevfolioUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [techStack, setTechStack] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [makePublic, setMakePublic] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Project Submitted Successfully!");
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
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Add a tech stack tag"
                  className="flex-grow px-4 py-3 bg-gray-700 text-gray-100 rounded-lg border-2 border-gray-600 focus:border-indigo-500 transition-all duration-300 placeholder-gray-400 outline-none"
                />
                <button
                  type="button"
                  onClick={handleTechStackAdd}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-blue-600 hover:to-indigo-500 text-white rounded-full font-semibold transition-all duration-300"
                >
                  Add
                </button>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-indigo-700 text-white px-3 py-1 rounded-full flex items-center gap-2"
                  >
                    {tech}
                    <button
                      onClick={() => handleTechRemove(tech)}
                      className="text-red-400 font-bold"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-indigo-300">
                Make Project Public?
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  id="public"
                  name="makePublic"
                  checked={makePublic}
                  onChange={() => setMakePublic(true)}
                  className="mr-2"
                />
                <label htmlFor="public" className="text-indigo-300">
                  Yes
                </label>
                <input
                  type="radio"
                  id="private"
                  name="makePublic"
                  checked={!makePublic}
                  onChange={() => setMakePublic(false)}
                  className="mr-2"
                />
                <label htmlFor="private" className="text-indigo-300">
                  No
                </label>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 rounded-full font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-400/50"
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
