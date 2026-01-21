import Image from "next/image"; // Import Image component
import { FaChartBar, FaFileAlt } from "react-icons/fa";

export default function Hero() {
  return (
    // 'relative' allows us to place the image absolutely within this section
    // 'overflow-hidden' prevents the large circle from causing horizontal scrolling
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Content Container - Pushed to the left with padding */}
      <div className="w-full px-2 lg:px-4 z-10 flex flex-col items-start text-left">

        <span className="fl3 mb-6 block text-[#FFD700]">👋 Hey There!</span>

        <h1 className="fl1 mb-4 leading-tight">
          I'm Prajwal Gohad
        </h1>

        <h2 className="fl1 mb-10 text-gray-400">
          HFI-CUA™, UX/UI Designer and<br />
          Computer Science Engineer.
        </h2>

        {/* Buttons Row */}
        <div className="flex gap-6">
          
          {/* 1. Projects Button -> Links to #projects section */}
          <a 
            href="#projects" 
            className="flex items-center fl2 gap-3 px-4 py-2 border border-white rounded-[15px] hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer"
          >
            Projects
            <FaChartBar className="group-hover:scale-110 transition-transform" />
          </a>

          {/* 2. Download CV Button -> Downloads the PDF */}
          <a 
            href="/resume.pdf"             // Path to file in 'public' folder
            download="Prajwal_Resume.pdf"  // The name the file will have when downloaded
            className="flex items-center fl2 gap-3 px-4 py-2 border border-white rounded-[15px] hover:bg-white hover:text-black transition-all duration-300 group cursor-pointer"
          >
            Download CV
            <FaFileAlt className="group-hover:scale-110 transition-transform" />
          </a>
          
        </div>

        {/* <div className="absolute -right-20 top-1/5 -translate-y-1/5  z-0 opacity-80 ">
          <div className="relative w-[300px] h-[300px] ">
            <Image
              src="/images/Ellipse.png" // REPLACE with your actual image path
              alt="Decorative Background"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div> */}
      </div>

    </section>
  );
}