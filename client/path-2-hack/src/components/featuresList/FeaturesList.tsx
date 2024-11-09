import React from "react";
import "./FeaturesList.css";
import {
  FaBrain,
  FaRobot,
  FaProjectDiagram,
  FaRocket,
  FaMap,
  FaBook,
  FaSearch,
} from "react-icons/fa";

type Feature = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    name: "Project Analyzer",
    description:
      "Analyze GitHub repositories to generate project ideas and improvements based on your code.",
    icon: <FaBrain />,
  },
  {
    name: "AI Idea Generator",
    description:
      "Get creative project ideas by providing a prompt or based on your previous projects.",
    icon: <FaRobot />,
  },
  {
    name: "Hackathon Guide",
    description:
      "Step-by-step workflows and guides on what to expect and prepare for in a hackathon.",
    icon: <FaMap />,
  },
  {
    name: "Project Tracking",
    description:
      "Track your ongoing projects and hackathons, with detailed status updates and checklists.",
    icon: <FaProjectDiagram />,
  },
  {
    name: "AI Project Improvement",
    description:
      "Receive AI-powered suggestions to enhance your projects and make them more innovative.",
    icon: <FaRocket />,
  },
  {
    name: "Inspiration Library",
    description:
      "Explore a curated library of project ideas to spark inspiration for your next hack.",
    icon: <FaBook />,
  },
  {
    name: "Hack Search",
    description:
      "Discover upcoming hackathons and find events based on your interests and skills.",
    icon: <FaSearch />,
  },
];

const FeaturesList = () => {
  return (
    <div className="features-grid-container ">
      {features.map((feature, index) => (
        <div key={index} className="feature-tile">
          <div className="icon">{feature.icon}</div>
          <h3 className="feature-name">{feature.name}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
