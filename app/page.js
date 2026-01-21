import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row bg-[#1E1E1E] min-h-screen">
      {/* Sidebar - fixed on desktop, stacked first on mobile */}
      <div className="w-full lg:w-auto">
        <Sidebar />
      </div>

      {/* Scrollable Right Content */}
      <div className="flex-1 w-full lg:ml-[420px]">
        <div className="px-6 lg:px-16 py-8 max-w-6xl mx-auto space-y-24">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      </div>
    </main>
  );
}