"use client";

import React from "react";
import { useState, useEffect } from "react";
import "./Inspiration.css";

const GenerateIdea = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <form>
        <textarea
          className="w-1/2 h-32 p-2 m-2 border-2 border-gray-300 rounded-lg"
          placeholder="Write a basic info of your project"
        ></textarea>
        <button className="text-[#2c0735] bg-[#858ae3] p-2 m-4 font-mono rounded-lg">
          Generate Brainstorming Idea
        </button>
      </form>
    </div>
  );
};

const Analyzer = () => {
  const [username, setUsername] = useState("");
  const [idea, setIdea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/projectIdea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      setIdea(data.idea);
    } catch (error) {
      console.error("Error fetching project idea:", error);
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center ">
      <form>
        <input
          type="text"
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button
          className="text-[#2c0735] bg-[#858ae3] p-2 m-4 font-mono rounded-lg"
          type="submit"
        >
          Get Project Idea (On Basis of Repositories)
        </button>
      </form>
    </div>
  );
};

const Inspiration = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="heading">Get Equipped</h1>
      <div className="container">
        <GenerateIdea />
        <p className="font-sans text-[#97dffc] text-[20rem] z-2 p-0 leading-[0.5] font-extralight select-none">
          /
        </p>
        <Analyzer />
      </div>
    </div>
  );
};

export default Inspiration;
