"use client";
import React from "react";
import "./middlepart.css";
import localFont from "next/font/local";
import FeaturesList from "@/components/featuresList/FeaturesList";
import { useUser } from "@auth0/nextjs-auth0/client";

const helvetica = localFont({ src: "../../app/fonts/Helvetica5.ttf" });

type Props = {};

const MiddlePart = (props: Props) => {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <center>
        <div className="middlePart mt-32 flex flex-col justify-center items-center">
          <h3
            className={`text-7xl font-semibold text-white ${helvetica.className}`}
          >
            Let's ace the hackathons 🔥
          </h3>
          <h4 className={`text-4xl text-[#3ecf8e] ${helvetica.className}`}>
            The Ultimate helper you deserve.
          </h4>
          <h5 className={`${helvetica.className}`}>
            Path2Hack is a website that will make getting ideas, forming teams,
            and winning hackathons a lot easier, it will help by providing
            roadmaps for the hackathon, teammate matching and a lot more!
          </h5>
          <br />
          <div className="buttonsDiv">
            <input
              type="button"
              className="dashboardBtn"
              value="Dashboard"
              onClick={() =>
                user != null
                  ? (window.location.href = "/dashboard")
                  : (window.location.href = "/api/auth/login")
              }
            />
            <input type="button" className="guideBtn" value="Guides" />
          </div>
        </div>
        <br />
        <FeaturesList />
      </center>
    </>
  );
};

export default MiddlePart;
