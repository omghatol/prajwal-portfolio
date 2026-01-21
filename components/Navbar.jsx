"use client";

import { useState } from "react";
import Image from "next/image";
import { FaDownload, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const [showResume, setShowResume] = useState(false);

  // REMOVED "Achievements" from this list
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About me", href: "#about" },
    { name: "Resume", href: "#resume" },
  ];

  const handleNavClick = (linkName, e) => {
    setActiveTab(linkName);
    if (linkName === "Resume") {
      e.preventDefault(); // Stop normal navigation
      setShowResume(true);
    }
  };

  return (
    <>
      {/* MAIN NAVBAR CONTAINER - FIXED POSITION */}
      <div className="fixed top-0 right-0 w-full lg:w-[calc(100%-400px)] z-50 hidden lg:flex justify-between items-center px-12 py-4 pointer-events-none">

        {/* 1. Gray Navigation Pill */}
        <nav className="glass-card p-1.5 rounded-[15px] border border-[#fff]/20 flex items-center pointer-events-auto bg-[#1c1c1c]/80 ">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(link.name, e)}
                  className={`
                                        px-6 py-3 rounded-[15px] fl3 transition-all duration-300 block text-sm font-medium
                                        ${activeTab === link.name
                      ? "bg-white !text-black shadow-sm" // Active State
                      : "text-gray-400 hover:text-white hover:bg-white/5" // Inactive State
                    }
                                    `}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 2. Floating "Let's Talk" Button */}
        <a
          href="#contact"
          className="flex items-center gap-2  px-6 py-4 bg-[#6F3FF5] hover:bg-[#5e35d4] rounded-[15px] fl2 transition-all shadow-lg shadow-purple-900/20 group pointer-events-auto"
        >
          Let’s Talk
          <div className="relative w-5 h-5 ml-1">
            <Image
              src="/icons/message.svg"
              alt="Message Icon"
              fill
              className="object-contain"
            />
          </div>
        </a>
      </div>

      {/* ------------------------- */}
      {/* RESUME POPUP MODAL LOGIC  */}
      {/* ------------------------- */}
      {showResume && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200">

          {/* Modal Card */}
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#1a1a1a] rounded-[24px] border border-[#333] flex flex-col shadow-2xl overflow-hidden">

            {/* A. Top Bar */}
            <div className="flex justify-between items-center p-5 border-b border-[#333] bg-[#222]">
              <h2 className="text-xl text-white font-semibold pl-2">Resume Preview</h2>

              <div className="flex gap-3">
                <a
                  href="/resume.pdf"
                  download="Prajwal_Resume.pdf"
                  className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                >
                  <FaDownload /> Download Resume
                </a>

                <button
                  onClick={() => setShowResume(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] text-white hover:bg-[#444] transition-colors"
                >
                  <FaTimes size={18} />
                </button>
              </div>
            </div>

            {/* B. PDF Viewer */}
            <div className="flex-1 w-full h-full bg-[#111]">
              <iframe
                src="/pdf/Parkme.pdf"
                className="w-full h-full border-none"
                title="Resume PDF"
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}