import Navbar from "@/components/navbar/Navbar";
import MiddlePart from "@/home/middle/MiddlePart";
import React from "react";
import IdeaGenMiddlepart from "./middlePart/MiddlePart";
import Footer from "@/components/footer/Footer";

const IdeaGeneratorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <IdeaGenMiddlepart />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default IdeaGeneratorPage;
