import React from "react";
import { Button } from "@/components/ui/button";

import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[#1c1c1c] p-2 m-0">
      <div className="text-white font-bold">Path2Hack</div>
      <div className="flex justify-center" style={{ fontFamily: "Poppins" }}>
        <div className="text-white mx-4">Guide</div>
        <div className="text-white mx-4">Projects</div>
      </div>
      <div>
        <Button variant="secondary">Secondary</Button>
      </div>
    </nav>
  );
};

export default Navbar;
