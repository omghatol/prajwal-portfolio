"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

// 1. DATA: Define your projects here
const recentProjects = [
  {
    id: "tsecond",
    name: "T-Second",
    logo: "/images/projects/tsecond.png",
    pdf: "/pdf/TSecond.pdf",
   description:
      "Designed a modern corporate website for Tsecond.ai, a technology company delivering secure, high-volume data storage products for mission-critical industries such as filmmaking and defense, ensuring data safety, reliability and performance.",
  },
  {
    id: "dhanyaayai",
    name: "Dhanyaayai",
    logo: "/images/projects/dhanyaayai.png",
    pdf: "/pdf/Dhanyaayai.pdf",
   description:
      "Redesigned the Dhanyaayai corporate website with a futuristic, AI-inspired UI, incorporating neomorphism and interactive animations to enhance visual depth, usability and brand perception for an enterprise technology audience.",
  },
];

const moreProjects = [
  { id: "uelement", name: "U-Element", logo: "/images/projects/UElement.png", pdf: "https://uelement.in/" },
  { id: "icici", name: "ICICI Bank", logo: "/images/projects/icici.png", pdf: "/pdf/Icici-Bank.pdf" },
  { id: "teslabird", name: "Tesla Bird", logo: "/images/projects/tesla.png", pdf: "/pdf/Tesla-bird.pdf" },
  { id: "parkme", name: "Park Me", logo: "/images/projects/parkme.png", pdf: "/pdf/Parkme.pdf" },
  { id: "prajvault", name: "Praj Vault", logo: "/images/logo-main.png", pdf: "https://prajwal-portfolio-eta.vercel.app/" },
];

// 2. COMPONENT: Custom Arrow Icon
const ArrowIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
  >
    <circle cx="12" cy="12" r="11" stroke="white" strokeWidth="1" />
    <path
      d="M8 16L16 8M16 8H10M16 8V14"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const closeModal = () => setSelectedProject(null);

  return (
    // REMOVED: The bg-[#0a0a0a] class. Now uses your default background.
    <section id="projects" className="w-full min-h-screen py-2 px-8 lg:px-4">

      {/* --- SECTION 1: RECENT PROJECTS --- */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-5 h-5 relative opacity-70">
            <Image src="/icons/projects-icon.svg" alt="icon" fill className="object-contain" />
          </div>
          <h2 className="fl3">Projects</h2>
        </div>
        <h2 className="fl1 mb-8">Recent Projects.</h2>

        {/* 1 Column Grid for the Wide "Split" Layout */}
        <div className="grid grid-cols-1 gap-8">
          {recentProjects.map((project) => (
            <RecentProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* --- SECTION 2: MORE PROJECTS --- */}
      <div>
        <h2 className="fl1 mb-8">More Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moreProjects.map((project) => (
            <SimpleProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* --- PDF POPUP MODAL (UNCHANGED) --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl h-[90vh] bg-[#1a1a1a] rounded-2xl border border-[#333] flex flex-col shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-[#333] bg-[#222]">
              <h3 className="text-xl text-white font-semibold">{selectedProject.name} - Case Study</h3>
              <button onClick={closeModal} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] text-white transition-colors">
                <FaTimes />
              </button>
            </div>
            <div className="flex-1 bg-[#111] relative">
              <iframe
                src={selectedProject.pdf}
                className="w-full h-full border-none"
                title="Project PDF"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}

function RecentProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full min-h-[250px] bg-[#141414] border border-[#2a2a2a] rounded-[20px] cursor-pointer overflow-hidden transition-all duration-300 hover:border-[#444] flex flex-col lg:flex-row items-center p-8 lg:p-12 gap-8 lg:gap-12"
    >
      {/* Background Hover Gradient (Optional, keeping it subtle) */}
      <div className="absolute inset-0 pointer-events-none" />

      {/* Top Right Arrow (Restored your original hover behavior) */}
      <div className="absolute top-6 right-6 z-20">
        <ArrowIcon />
      </div>

      {/* LEFT: Logo */}
      <div className="w-full lg:w-[35%] flex justify-center lg:justify-start items-center relative">
         <div className="relative w-48 h-16 md:w-56 md:h-20">
          <Image
            src={project.logo}
            alt={project.name}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* MIDDLE: Vertical Divider (Visible on Desktop) */}
      <div className="hidden lg:block w-[1px] h-32 bg-[#2a2a2a]" />

      {/* RIGHT: Description Text */}
      <div className="w-full lg:w-[65%] text-center lg:text-left">
        <p className="fl2">
          {project.description}
        </p>
      </div>
    </div>
  );
}

// 4. OLD COMPONENT: SimpleProjectCard (For "More Projects")
function SimpleProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative w-full h-[280px] bg-[#141414] border border-[#2a2a2a] rounded-[20px] cursor-pointer overflow-hidden transition-all duration-300"
    >
      <div className="absolute inset-0" />

      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="relative w-full h-22">
          <Image
            src={project.logo}
            alt={project.name}
            fill
            className="object-contain transition-all duration-500"
          />
        </div>
      </div>

      {/* Arrow */}
      <div className="absolute top-6 right-6 z-10">
        <ArrowIcon />
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-sm font-medium text-gray-400 group-hover:text-white">
          View Case Study
        </span>
      </div>
    </div>
  );
}