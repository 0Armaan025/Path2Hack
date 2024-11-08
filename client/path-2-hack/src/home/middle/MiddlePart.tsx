import React from "react";
import "./middlepart.css";

type Props = {};

const MiddlePart = (props: Props) => {
  return (
    <>
      <center>
        <div className="middlePart flex flex-col justify-center items-center">
          <h3 className="text-4xl text-white">Let's ace the hackathon</h3>
          <h4 className="text-3xl text-white">
            The ultimate guide to winning hackathons.
          </h4>
        </div>
      </center>
    </>
  );
};

export default MiddlePart;
