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

const projectData: Project[] = [
  {
    name: "AI Powered Task Manager",
    hackathon: "Hackathon 2024",
    title: "AI-Powered Task Manager for Efficient Workflow",
    description: `This project leverages AI to automate task prioritization and streamline the workflow in any team or individual project.`,
    image: "https://via.placeholder.com/600x400",
    devpostUrl: "https://devpost.com/project/ai-powered-task-manager",
    devfolioUrl: "https://devfolio.co/projects/ai-powered-task-manager",
    githubUrl: "https://github.com/username/ai-task-manager",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    owner: "John Doe",
  },
  {
    name: "Smart Health Monitor",
    hackathon: "TechHack 2024",
    title: "AI-Powered Health Monitoring System",
    description: `A project that uses AI to monitor and analyze health data in real-time.`,
    image: "https://via.placeholder.com/600x400",
    devpostUrl: "https://devpost.com/project/smart-health-monitor",
    devfolioUrl: "https://devfolio.co/projects/smart-health-monitor",
    githubUrl: "https://github.com/username/smart-health-monitor",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    owner: "Jane Doe",
  },
  // Add more projects here...
];

const AllProjectsScreen = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#272222] text-gray-100 font-sans">
        <div className="max-w-6xl mx-auto p-8">
          {/* Header Section */}
          <header className="mb-8 text-center">
            <h1
              className="text-3xl font-bold text-gray-100"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              All Projects
            </h1>
            <p className="text-lg text-gray-400 mt-2">
              Explore the amazing projects from Hackathons.
            </p>
          </header>

          {/* Projects Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-[0.7rem] cursor-pointer overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />
                {/* Project Details */}
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {project.name}
                  </h3>
                  <p className="text-md text-gray-300 mt-2">
                    By {project.owner}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllProjectsScreen;
