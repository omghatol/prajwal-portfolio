import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex ">

      <div className=" ">
      <Sidebar />
      </div>

      {/* Scrollable Right Content */}
      <div className="flex-1 lg:ml-80 w-full bg-[#1E1E1E]">
        <div className="px-6 lg:px-16 py-8 max-w-6xl mx-auto">

    
          <Hero />

          <Projects />

          <About />

          <Contact />

        </div>
      </div>
    </main>
  );
}