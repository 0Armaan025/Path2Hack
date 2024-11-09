import React from "react";
import "./Inspiration.css";

const GenerateIdea = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <textarea
        className="w-1/2 h-32 p-2 m-2 border-2 border-gray-300 rounded-lg"
        placeholder="Write a basic info of your project"
      ></textarea>
      <button className="bg-blue-500 text-white p-2 m-2 rounded-lg">
        Generate Brainstorming Idea
      </button>
      {/* <textarea
        className="w-1/2 h-32 p-2 m-2 border-2 border-gray-300 rounded-lg"
        placeholder="Generated Idea"
      ></textarea> */}
    </div>
  );
};

const Analyzer = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center ">
      <textarea
        className="w-1/2 h-32 p-2 m-2 border-2 border-gray-300 rounded-lg"
        placeholder="Write a basic info of your project"
      ></textarea>
      <button className="bg-blue-500 text-white p-2 m-2 rounded-lg">
        Analyze your Repositories
      </button>
    </div>
  );
};

const Inspiration = () => {
  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="heading">Get Equipped</h1>
      <div className="container">
        <GenerateIdea />
        <p className="font-sans text-violet-600 text-[20rem] z-2 p-0 leading-[0.5] font-extralight">
          /
        </p>
        <Analyzer />
      </div>
    </div>
  );
};

export default Inspiration;
