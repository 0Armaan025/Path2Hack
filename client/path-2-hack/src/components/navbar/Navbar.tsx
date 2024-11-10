import React from "react";

import { Button } from "@/components/ui/button";

import "./navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#1c1c1c] p-2 m-0">
      <a href="/">
        <div className="text-white font-bold">
          <img
            src="./logo.svg"
            alt="LOGO"
            className="w-36 h-10 cursor-pointer"
          />
        </div>
      </a>
      <div className="flex justify-center" style={{ fontFamily: "Poppins" }}>
        <a href="/guide">
          <div className="text-white mx-4 cursor-pointer">Guide</div>
        </a>
        <a href="/projects">
          <div className="text-white mx-4 cursor-pointer">Projects</div>
        </a>
        <a href="/idea-generator">
          <div className="text-white mx-4 cursor-pointer">Generate Idea</div>
        </a>
      </div>
      <div>
        <Link href="/dashboard">
          <Button
            variant="secondary"
            size="sm"
            style={{ fontFamily: "Poppins" }}
            className="border-[1px] font-bold py-4 text-white px-4 bg-[#cecece2a] border-white rounded"
          >
            Dashboard
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
