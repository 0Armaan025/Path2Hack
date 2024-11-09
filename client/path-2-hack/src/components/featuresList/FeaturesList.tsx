import React from "react";
import "./FeaturesList.css";
import {
  FaDatabase,
  FaLock,
  FaCode,
  FaHdd,
  FaBolt,
  FaVectorSquare,
  FaServer,
} from "react-icons/fa";

type Feature = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    name: "Postgres Database",
    description: "Reliable, scalable, and highly available.",
    icon: <FaDatabase />,
  },
  {
    name: "Authentication",
    description: "Secure user signups and logins.",
    icon: <FaLock />,
  },
  {
    name: "Edge Functions",
    description: "Deploy custom code close to your users.",
    icon: <FaCode />,
  },
  {
    name: "Storage",
    description: "Store and serve large files with ease.",
    icon: <FaHdd />,
  },
  {
    name: "Realtime",
    description: "Enable real-time data synchronization.",
    icon: <FaBolt />,
  },
  {
    name: "Vector",
    description: "Store and search vector embeddings.",
    icon: <FaVectorSquare />,
  },
  {
    name: "Data APIs",
    description: "RESTful APIs ready to use out of the box.",
    icon: <FaServer />,
  },
];

const FeaturesList = () => {
  return (
    <div className="features-grid-container">
      {features.map((feature, index) => (
        <div key={index} className={`feature-tile feature-tile-${index + 1}`}>
          <div className="icon">{feature.icon}</div>
          <h3 className="feature-name">{feature.name}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
