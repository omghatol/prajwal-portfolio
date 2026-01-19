"use client"; // Required for the slider logic

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

export default function Sidebar() {
  // 1. State to track the current active image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of your profile images
  const profileImages = [
    "/images/prajwal.png",    // The black and white photo
    "/images/prajwal-ai.png"  // The AI/Cartoon version
  ];

  // 2. Timer to switch image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [profileImages.length]);

  return (
    <aside className="w-full lg:w-80 lg:fixed lg:h-screen bg-[#121212] border-b lg:border-b-0 lg:border-r border-border p-8 flex flex-col gap-8 z-50 overflow-y-auto">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="relative w-12 h-12">
            {/* Replaced placeholder "P" with your actual Logo */}
            <Image 
                src="/images/logo-main.png" 
                alt="Praj Vault Logo" 
                fill
                className="object-contain"
            />
        </div>
        
      </div>

      {/* Profile Card Section */}
      <div className="bg-card p-4 rounded-3xl border border-border text-center">
        
        {/* Image Container with Slider Logic */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-800 mb-4 group">
            {profileImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <Image 
                        src={src} 
                        alt="Prajwal Gohad" 
                        fill 
                        className="object-cover"
                        priority
                    />
                </div>
            ))}
        </div>

        {/* Slider Indicator Dots (Matches your screenshot design) */}
        <div className="flex justify-center gap-2 mb-2">
            {profileImages.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                        ? "bg-white scale-110" 
                        : "bg-gray-600 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col gap-6">
        <div>
            <small className="text-gray-400 text-xs uppercase tracking-wider">Specialization:</small>
            <p className="font-medium mt-1">HFI-CUA™, UX/UI Designer and Client Interaction</p>
        </div>
        <div>
            <small className="text-gray-400 text-xs uppercase tracking-wider">Based in:</small>
            <p className="font-medium mt-1">Pune, Maharashtra, India</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4">
            {[FaInstagram, FaFacebookF, FaRegEnvelope, FaLinkedinIn].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:border-accent transition-all text-gray-400 hover:text-white">
                    <Icon />
                </a>
            ))}
        </div>

        <a href="#contact" className="w-full py-3 bg-accent hover:bg-accent-hover rounded-full text-center font-medium transition-colors">
            Let's Work Together!
        </a>
      </div>
    </aside>
  );
}