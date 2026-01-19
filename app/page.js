import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-background text-white selection:bg-accent selection:text-white">

      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Scrollable Right Content */}
      <div className="flex-1 lg:ml-80 w-full">
        <div className="px-6 lg:px-16 py-8 max-w-6xl mx-auto">

          <Navbar />

          <Hero />

          <Projects />

          <About />

          <Contact />

        </div>
      </div>
    </main>
  );
}