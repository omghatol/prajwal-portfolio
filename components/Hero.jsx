import { FaChartBar, FaFileAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="py-20">
      <span className="text-yellow-400 text-lg mb-4 block">👋 Hey There!</span>
      <h1 className="font-display text-4xl lg:text-6xl font-bold mb-4 leading-tight">
        I'm Prajwal Gohad
      </h1>
      <h2 className="text-gray-400 text-xl lg:text-2xl font-light mb-8">
        HFI-CUA™, UX/UI Designer and<br />Computer Science Engineer.
      </h2>
      
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-card hover:border-accent transition-all">
          Projects <FaChartBar />
        </button>
        <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-card hover:border-accent transition-all">
          Download CV <FaFileAlt />
        </button>
      </div>
    </section>
  );
}