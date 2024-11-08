import React from "react";
import "./homepage.css";
import Navbar from "@/components/navbar/Navbar";
import MiddlePart from "./middle/MiddlePart";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <MiddlePart />
    </>
  );
};

export default HomePage;
