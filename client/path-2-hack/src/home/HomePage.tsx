"use client";
import React, { useEffect } from "react";
import "./homepage.css";
import Navbar from "@/components/navbar/Navbar";
import MiddlePart from "./middle/MiddlePart";
import { useUser } from "@auth0/nextjs-auth0/client";
import Cookies from "js-cookie";

// import Upcoming from "@/components/upcoming/Upcoming";
// import Inspiration from "@/components/inspiration/Inspiration";
import Footer from "@/components/footer/Footer";

type Props = {};

const HomePage = (props: Props) => {
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      fetch("http://localhost:3001/api/register", {
        method: "POST",
        body: JSON.stringify({
          name: user.name,
          email: user.email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Check if the user already exists in the database
          if (data.exists) {
            // If user exists, save the user name in cookies
            Cookies.set("username", user.name?.toString() ?? "", {
              expires: 7,
            }); // Cookie expires in 7 days
          }
        })
        .catch((error) => {
          console.error("Error checking user registration:", error);
        });
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <br />
      <br />
      <MiddlePart />
      <Footer />
    </>
  );
};

export default HomePage;
