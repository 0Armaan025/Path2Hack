"use client";
import React, { useState } from "react";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

// Random project data with sample image URLs
const projects = [
  {
    id: 1,
    name: "Project A",
    image:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Project B",
    image:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Project C",
    image:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Project D",
    image:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Project E",
    image:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww",
  },
];

const Dashboard = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-gray-100">
      <aside className="w-64 bg-gray-800 flex flex-col items-center py-8 px-4 shadow-xl">
        <h2
          className="text-3xl font-bold mb-8 tracking-wide text-white"
          style={{ fontFamily: "Poppins" }}
        >
          Dashboard
        </h2>
        <nav className="flex flex-col gap-4 w-full">
          <button className="w-full py-2 px-4 font-semibold  text-xl text-left text-gray-200 hover:bg-gray-700 rounded-[0.7rem] transition">
            Your Projects
          </button>
          <button className="w-full py-2 px-4 text-left text-red-400 text-xl  hover:bg-red-600 rounded-lg transition">
            Log Out
          </button>
        </nav>
      </aside>

      <main className="flex-grow px-8 py-2">
        <Navbar />
        <div className="p-8 bg-gray-800 rounded-lg shadow-2xl ring-1 ring-gray-700 transform transition-transform hover:scale-[1.01]">
          <h1 className="text-5xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff5e5e] to-[#169600]">
            Your Projects
          </h1>
          <p className="text-gray-400 mb-6 text-center text-lg">
            Click on any project to view more details or add new projects with
            the plus icon.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300 bg-gray-700 ring-2 ring-indigo-500/20 hover:ring-indigo-500/40"
                onClick={() => setSelectedProject(project.id)}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent text-center">
                  <h3 className="text-lg font-semibold text-white drop-shadow-lg">
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}

            <div
              onClick={() => alert("Open Add New Project Form")}
              className="relative flex items-center justify-center cursor-pointer rounded-lg shadow-xl bg-gray-700 hover:bg-indigo-500/80 transition-all duration-300 border-2 border-dashed border-gray-500 hover:border-indigo-500 ring-2 ring-indigo-400/40 hover:ring-indigo-400/60 group"
            >
              <div className="text-center">
                <div className="text-6xl text-indigo-400 group-hover:text-indigo-100 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-45">
                  +
                </div>
                <p className="mt-2 text-indigo-200 font-medium text-lg">
                  Add New Project
                </p>
              </div>
              <div className="absolute inset-0 animate-pulse bg-indigo-600/10 rounded-lg group-hover:bg-indigo-600/20 transition duration-300"></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Dashboard;
