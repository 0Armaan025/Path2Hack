import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1b1919] text-white py-2">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="text-lg mb-4">© 2024 Path2Hack. All Rights Reserved.</p>
        <div className="flex space-x-6">
          <a
            href="/about"
            className="text-green-400 hover:text-green-300 text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            About
          </a>
          <a
            href="/contact"
            className="text-green-400 hover:text-green-300 text-sm"
            style={{ fontFamily: "Poppins" }}
          >
            Contact
          </a>
          <a
            href="/privacy"
            style={{ fontFamily: "Poppins" }}
            className="text-green-400 hover:text-green-300 text-sm"
          >
            Privacy
          </a>
          <br />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
