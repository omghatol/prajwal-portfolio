"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

// 1. DATA: Define your projects here
// Separated into 'recent' and 'more' to match the layout
const recentProjects = [
  {
    id: "tsecond",
    name: "T-Second",
    logo: "/images/projects/tsecond.png", // Replace with actual path
    pdf: "/pdf/tsecond.pdf",               // Replace with actual PDF path
    color: "text-blue-500"                 // Optional: for logo text color simulation
  },
  {
    id: "dhanyaayai",
    name: "Dhanyaayai",
    logo: "/images/projects/dhanyaayai.png",
    pdf: "/pdf/dhanyaayai.pdf",
    color: "text-green-400"
  }
];

const moreProjects = [
  { id: "uelement", name: "U-Element", logo: "/images/projects/UElement.png", pdf: "/pdf/uelement.pdf" },
  { id: "icici", name: "ICICI Bank", logo: "/images/projects/icici.png", pdf: "/pdf/icici.pdf" },
  { id: "teslabird", name: "Tesla Bird", logo: "/images/projects/tesla.png", pdf: "/pdf/teslabird.pdf" },
  { id: "parkme", name: "Park Me", logo: "/images/projects/parkme.png", pdf: "/pdf/parkme.pdf" },
  { id: "prajvault", name: "Praj Vault", logo: "/images/logo-main.png", pdf: "/pdf/prajvault.pdf" },
];

// 2. COMPONENT: Custom Arrow Icon (Matches your screenshot)
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

  // Helper to close modal
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="w-full min-h-screen py-2 px-8 lg:px-4">
      
      {/* --- SECTION 1: RECENT PROJECTS --- */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
            {/* Small Icon before title */}
            <div className="w-5 h-5 relative opacity-70">
                 <Image src="/icons/projects-icon.svg" alt="icon" fill className="object-contain" />
                 
                 
            </div>
            <h2 className="fl3">Projects</h2>
        </div>
         <h2 className="fl1 ">Recent Projects.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* --- SECTION 2: MORE PROJECTS --- */}
      <div>
        <h2 className="fl1  mb-8">More Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {moreProjects.map((project) => (
            <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      {/* --- PDF POPUP MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl h-[90vh] bg-[#1a1a1a] rounded-2xl border border-[#333] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#333] bg-[#222]">
              <h3 className="text-xl text-white font-semibold">{selectedProject.name} - Case Study</h3>
              <button onClick={closeModal} className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] text-white transition-colors">
                <FaTimes />
              </button>
            </div>

            {/* PDF Viewer */}
            <div className="flex-1 bg-[#111] relative">
               {/* Embed PDF */}
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

// 3. SUB-COMPONENT: Single Project Card
function ProjectCard({ project, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="group relative w-full h-[280px] bg-[#141414] border border-[#2a2a2a] rounded-[20px] cursor-pointer overflow-hidden transition-all duration-300 "
    >
        {/* Background Hover Gradient (Optional subtle effect) */}
        <div className="absolute inset-0 " />

        {/* 1. The Logo (Centered) */}
        <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full h-full">
                <Image 
                    src={project.logo} 
                    alt={project.name}
                    fill
                    className="object-contain  transition-all duration-500"
                />
            </div>
        </div>

        {/* 2. Top Right Arrow (Appears on Hover) */}
        <div className="absolute top-6 right-6 z-10">
            <ArrowIcon />
        </div>

        {/* 3. Bottom Left Text (View Case Study) */}
        <div className="absolute bottom-6 left-6 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-sm font-medium text-gray-400 group-hover:text-white">
                View Case Study
            </span>
        </div>
    </div>
  );
}