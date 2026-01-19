import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h3 className="font-display text-2xl mb-8">Recent Projects.</h3>
      
      {/* Large Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Project 1 */}
        <div className="relative group h-64 md:h-80 bg-card rounded-2xl overflow-hidden border border-border">
            {/* Add actual image paths here */}
            <div className="absolute inset-0 bg-gray-800" /> 
            <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-xl font-bold">T|SECOND</h3>
            </div>
            <a href="#" className="absolute top-5 right-5 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-accent transition-colors">
                <FaArrowUp className="transform rotate-45" />
            </a>
        </div>
        
        {/* Project 2 */}
        <div className="relative group h-64 md:h-80 bg-card rounded-2xl overflow-hidden border border-border">
            <div className="absolute inset-0 bg-gray-800" />
            <div className="absolute bottom-5 left-5 z-10">
                <h3 className="text-xl font-bold">DHANYAAYAI</h3>
            </div>
        </div>
      </div>

      <h3 className="font-display text-2xl mb-8">More Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
         {/* Small Project Cards */}
         {[1, 2, 3, 4].map((item) => (
             <div key={item} className="h-32 bg-card rounded-xl border border-border flex items-center justify-center hover:border-accent transition-colors">
                 <span className="text-gray-500">Logo {item}</span>
             </div>
         ))}
      </div>
    </section>
  );
}