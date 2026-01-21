"use client"; // Required for the slider logic

import { useState, useEffect } from "react";
import Image from "next/image";

// Defined social links array
const socialLinks = [
    {
        id: 1,
        icon: "/icons/instagram.svg",
        href: "https://www.instagram.com/yourusername",
        alt: "Instagram"
    },
    {
        id: 2,
        icon: "/icons/facebook.svg",
        href: "https://www.facebook.com/yourusername",
        alt: "Facebook"
    },
    {
        id: 3,
        icon: "/icons/email.svg",
        href: "mailto:your@email.com",
        alt: "Email"
    },
    {
        id: 4,
        icon: "/icons/linkedin.svg",
        href: "https://www.linkedin.com/in/yourusername",
        alt: "LinkedIn"
    }
];

export default function Sidebar() {
    // 1. State to track the current active image
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Array of your profile images
    const profileImages = [
        "/images/prajwal.png",    // The black and white photo
        "/images/prajwal-ai.png"  // The AI/Cartoon version
    ];

    // 2. Timer to switch image every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === profileImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000); // 4000ms = 4 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [profileImages.length]);

    return (
        // Main Sidebar Container
        <aside className="w-full lg:w-[400px] lg:fixed lg:h-screen bg-[#1E1E1E] p-4 z-50 flex flex-col justify-center overflow-y-auto">

            {/* The Inner Card */}
            <div className="w-[350px] h-full max-h-[900px] bg-[#1a1a1a] rounded-[15px] border border-[#2a2a2a] py-4 px-8 flex flex-col justify-between glass-card">

                {/* Top Section: Logo & Image */}
                <div className="flex flex-col ">
                    {/* Logo Section */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-[120px] h-[60px]">
                            <Image
                                src="/images/logo-main.png"
                                alt="Praj Vault Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* --- NEW POP-OUT IMAGE SECTION START --- */}
                    <div className="relative w-full h-[280px] flex justify-center items-end">

                        {/* A. The Border Box (Shorter height to allow pop-out) */}
                        <div className="absolute  w-full h-[250px] border border-white rounded-[15px]  z-0"></div>

                        {/* B. The Image Slider (Taller height so head pops out) */}
                        <div className="absolute  w-full h-full z-10 pointer-events-none flex justify-center items-end">
                            {profileImages.map((src, index) => (
                                <div
                                    key={src}
                                    className={`absolute  w-auto h-[300px] transition-all duration-700 ease-in-out ${index === currentImageIndex
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-95"
                                        }`}
                                >
                                    <Image
                                        src={src}
                                        alt="Prajwal Gohad"
                                        width={200}
                                        height={300}
                                        className="object-contain h-full w-auto"
                                        priority
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* --- NEW POP-OUT IMAGE SECTION END --- */}
                </div>

                {/* Middle Section: Details */}
                <div className="flex flex-col gap-4 mt-2">
                    {/* Specialization */}
                    <div className="text-left">
                        <small className="fl3 block  mb-1">
                            Specialization:
                        </small>
                        <p className="fl2 ">
                            HFI-CUA™, UX/UI Designer <br /> and Client Interaction
                        </p>
                    </div>

                    {/* Based In */}
                    <div className="text-left">
                        <small className="fl3 block  mb-1">
                            Based in:
                        </small>
                        <p className="fl2 ">
                            Pune, Maharashtra, India
                        </p>
                    </div>
                </div>

                {/* Bottom Section: Socials & CTA */}
                <div className="flex flex-col gap-6 mt-4">
                    {/* Social Icons */}
                    <div className="flex justify-center items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.id}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-white hover:bg-white transition-all duration-300 group"
                            >
                                <div className="relative w-5 h-5">
                                    <Image
                                        src={social.icon}
                                        alt={social.alt}
                                        fill
                                        className="object-contain opacity-70 group-hover:opacity-100 group-hover:invert"
                                    />
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Button */}
                    <a
                        href="#contact"
                        className="w-full h-12 bg-[#6F3FF5] hover:bg-[#5e35d4] rounded-[15px] fl3 flex justify-center items-center text-white font-semibold tracking-wide transition-colors !text-[14px]"
                    >
                        Let’s Work Together!
                    </a>
                </div>
            </div>
        </aside>
    );
}