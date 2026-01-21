import Image from "next/image";

// --- DATA: Tools (Existing) ---
const designTools = [
  { name: 'Figma', icon: '/images/tools/figma.png' },
  { name: 'Adobe XD', icon: '/images/tools/xd.png' },
  { name: 'Photoshop', icon: '/images/tools/ps.png' },
  { name: 'Canva', icon: '/images/tools/canva.png' },
  { name: 'Lightroom', icon: '/images/tools/lr.png' },
];

// --- DATA: Experiences (New) ---
const experiences = [
  {
    id: 1,
    year: "2025- On Going",
    logo: "/images/projects/UElement.png", // Replace with U-Element white logo
    description: "I work as a UI/UX Designer, Product Owner, and Content Writer, bridging user needs with business goals. I design scalable digital products, define product strategy, and craft content that drives clarity and impact."
  },
  {
    id: 2,
    year: "2024-2025",
    logo: "/images/projects/tdtl.png", // Replace with DataTech Labs logo
    description: "As a UI/UX Designer Intern, I help transform complex ideas into intuitive digital solutions. I collaborate with teams to deliver meaningful, user-focused design outcomes."
  }
];

// --- DATA: Certificates (New) ---
const certificates = [
  {
    id: 1,
    title: "HFI-Certified Usability Analyst Certificate",
    image: "/images/hfi.png" // Replace with HFI certificate image
  },
  {
    id: 2,
    title: "Google UX Design Professional Certificate",
    image: "/images/google.png" // Replace with Google certificate image
  }
];

export default function About() {
  return (
    <section id="about" className="mb-24 px-4 lg:px-8">
      <div className="flex items-center gap-3 mb-4">
        {/* Small Icon before title */}
        <div className="w-5 h-5 relative opacity-70">
          <Image src="/icons/projects-icon.svg" alt="icon" fill className="object-contain" />
        </div>
        <h2 className="fl3">About me</h2>
      </div>

      {/* 1. INTRO TEXT */}
      <h3 className="fl1 mb-6">Know More About Me.</h3>
      <p className="fl2 mb-8 text-gray-300 leading-relaxed max-w-5xl">
        I believe that great design is not just about how a product looks—it is about how it works, how it scales, and how it drives business growth. As a UI/UX Architect at UElement, I bridge the critical gap between aesthetic vision and technical feasibility. My role is to architect digital ecosystems where user needs meet business goals seamlessly. I specialize in deconstructing complex workflows and rebuilding them into intuitive, high-performance web applications. If you are looking to elevate your digital presence or build a complex web application from the ground up, let's connect.
      </p>

      {/* 2. CARDS: What I Bring & Toolkit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        {/* Card 1: What I Bring */}
        <div className="bg-[#1a1a1a] p-8 rounded-[24px] border border-[#333]">
          <h4 className="fl2 mb-6 text-white">What I bring to the table:</h4>
          <ul className="space-y-4 fl3 !text-[#888] text-sm leading-relaxed">
            <li><strong className="text-white block mb-1">Holistic Architecture:</strong> Moving beyond screens to design complete user journeys and information structures.</li>
            <li><strong className="text-white block mb-1">Design-to-Code Synergy:</strong> Ensuring designs are not just beautiful, but viable for our web development teams to build efficiently.</li>
            <li><strong className="text-white block mb-1">Client Partnership:</strong> Acting as a consultant to help businesses understand the ROI of good experience design.</li>
          </ul>
        </div>

        {/* Card 2: Toolkit */}
        <div className="bg-[#1a1a1a] p-8 rounded-[24px] border border-[#333]">
          <h4 className="fl2 mb-6 text-white">My Design Toolkit:</h4>
          <div className="flex flex-wrap gap-4">
            {designTools.map((tool) => (
              <div
                key={tool.name}
                className="w-20 h-20 bg-[#181818] border border-[#333] rounded-[18px] flex items-center justify-center hover:bg-[#252525] transition-colors"
                title={tool.name}
              >
                <div className="relative w-10 h-10">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. VISUAL HIGHLIGHTS (Gitex & Employee of Month) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {/* Highlight 1 */}
        <div className="group">
          <div className="relative w-full  h-70 rounded-[15px] overflow-hidden mb-3">
            <Image src="/images/star.png" alt="Employee of the Month" fill className="object-fit" />
          </div>
          <p className="fl2  text-center">Employee of the Month – Driven by Impact</p>
        </div>

        {/* Highlight 2 */}
        <div className="group">
          <div className="relative w-full h-70 rounded-[15px] overflow-hidden  mb-3">
            <Image src="/images/gitex.png" alt="Gitex Dubai" fill className="object-cover " />
          </div>
          <p className="fl2 text-center">Representing Innovation at GITEX, Dubai.</p>
        </div>
      </div>

      {/* 4. EXPERIENCES & CERTIFICATES HEADER */}
      <h3 className="fl1 mb-12">Experiences And Certificates</h3>

      {/* 5. EXPERIENCE LIST */}
      <div className="flex flex-col gap-12 mb-20">
        {experiences.map((exp) => (
          <div key={exp.id} className="grid grid-cols-1 md:grid-cols-[150px_250px_1fr] gap-6 items-center border-b border-[#333] pb-12 last:border-0">
            {/* Year */}
            <span className="fl3 text-gray-500">{exp.year}</span>

            {/* Logo */}
            <div className="relative w-40 h-12">
              <Image src={exp.logo} alt="Company Logo" fill className="object-contain object-left" />
            </div>

            {/* Description */}
            <p className="fl3 ">
              {exp.description}
            </p>
          </div>
        ))}
      </div>

      {/* 6. CERTIFICATES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex flex-col gap-4">
            <div className="relative w-full aspect-[4/3] bg-[#111] border border-[#333] rounded-[20px] overflow-hidden p-2">
              <Image src={cert.image} alt={cert.title} fill className="object-contain" />
            </div>
            <p className="fl2 text-center">{cert.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
}