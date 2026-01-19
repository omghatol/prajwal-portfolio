import { FaComment } from "react-icons/fa";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About me", href: "#about" },
    { name: "Resume", href: "#resume" },
  ];

  return (
    <nav className="hidden lg:flex justify-between items-center bg-[#1c1c1c] px-8 py-3 rounded-full border border-border sticky top-6 z-40 mb-16">
      <ul className="flex gap-8">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <a href="#contact" className="flex items-center gap-2 bg-accent px-5 py-2 rounded-full text-sm font-medium hover:bg-accent-hover transition-colors">
        Let's Talk <FaComment />
      </a>
    </nav>
  );
}