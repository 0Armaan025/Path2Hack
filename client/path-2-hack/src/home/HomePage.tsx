import React from "react";
import "./homepage.css";
import Navbar from "@/components/navbar/Navbar";
import MiddlePart from "./middle/MiddlePart";
// import Upcoming from "@/components/upcoming/Upcoming";
// import Inspiration from "@/components/inspiration/Inspiration";
import Footer from "@/components/footer/Footer";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <MiddlePart />
      {/* <Upcoming /> */}
      {/* <Inspiration /> */}

      <Footer />
    </>
  );
};

export default HomePage;
