import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";

type Project = {
  name: string;
  hackathon: string;
  title: string;
  description: string;
  image: string;
  devpostUrl: string;
  devfolioUrl: string;
  githubUrl: string;
  techStack: string[];
  owner: string;
};

const projectData: Project = {
  name: "AI Powered Task Manager",
  hackathon: "Hackathon 2024",
  title: "AI-Powered Task Manager for Efficient Workflow",
  description: `This project leverages AI to automate task prioritization and streamline the workflow in any team or individual project. The AI intelligently categorizes tasks based on urgency, complexity, and importance, helping users stay organized and productive. 
  It also integrates with popular project management tools to provide seamless collaboration and task tracking.`,
  image: "https://via.placeholder.com/600x400", // replace with actual image URL
  devpostUrl: "https://devpost.com/project/ai-powered-task-manager", // replace with actual Devpost link
  devfolioUrl: "https://devfolio.co/projects/ai-powered-task-manager", // replace with actual Devfolio link
  githubUrl: "https://github.com/username/ai-task-manager", // replace with actual GitHub link
  techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
  owner: "John Doe",
};

const ProjectPage = () => {
  return (
    <>
      <Navbar />{" "}
      <div className="min-h-screen bg-[#272222] text-gray-100 font-sans">
        <div className="max-w-4xl mx-auto p-8">
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-100">
              {projectData.title}
            </h1>
            <p className="text-xl text-gray-400 mt-2">
              {projectData.hackathon}
            </p>
          </header>

          {/* Project Image */}
          <div className="mb-8">
            <img
              src={projectData.image}
              alt={projectData.name}
              className="w-full h-72 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Project Info Section */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-lg font-medium text-gray-100">
                By <span className="font-bold">{projectData.owner}</span>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-100">
                Project Description:
              </h2>
              <p className="text-base text-gray-300">
                {projectData.description}
              </p>
            </div>

            {/* Tech Stack Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-100">
                Tech Stack:
              </h3>
              <ul className="flex space-x-4 text-sm text-gray-300">
                {projectData.techStack.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-gray-700 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Section */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a
                  href={projectData.devpostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200"
                >
                  View on Devpost
                </a>
                <a
                  href={projectData.devfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 text-lg text-white bg-green-600 rounded-md hover:bg-green-500 transition duration-200"
                >
                  View on Devfolio
                </a>
                <a
                  href={projectData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-6 text-lg text-white bg-gray-800 rounded-md hover:bg-gray-700 transition duration-200"
                >
                  View on GitHub
                </a>
              </div>

              {/* AI Suggestions Gradient Button */}
              <div>
                <a
                  href="#"
                  className="inline-block py-2 px-6 text-lg text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-md hover:from-purple-500 hover:via-indigo-500 hover:to-blue-500 transition duration-200"
                >
                  Get AI Suggestions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
