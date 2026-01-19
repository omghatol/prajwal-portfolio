import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="mb-24">
      <h3 className="font-display text-2xl mb-6">Know More About Me.</h3>
      <p className="text-gray-400 mb-8 max-w-3xl leading-relaxed">
        I believe that great design is not just about how a product looks—it is about how it works, how it scales, and how it drives business growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-card p-6 rounded-2xl border border-border">
            <h4 className="font-bold mb-4">What I bring to the table:</h4>
            <ul className="space-y-3 text-sm text-gray-400">
                <li><strong className="text-white">Holistic Architecture:</strong> Moving beyond screens to design complete user journeys.</li>
                <li><strong className="text-white">Design-to-Code Synergy:</strong> Ensuring designs are viable.</li>
                <li><strong className="text-white">Client Partnership:</strong> Acting as a consultant.</li>
            </ul>
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border">
            <h4 className="font-bold mb-4">My Design Toolkit:</h4>
            <div className="flex flex-wrap gap-3">
                {['Figma', 'Adobe', 'Ps', 'Canva', 'Lr'].map(tool => (
                    <span key={tool} className="px-4 py-2 bg-[#2a2a2a] rounded-lg text-sm">{tool}</span>
                ))}
            </div>
        </div>
      </div>

      {/* Experience Section */}
      <h3 className="font-display text-2xl mb-8">Experiences And Certificates</h3>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-border pb-8">
            <span className="text-sm text-gray-500 whitespace-nowrap">2025 - On Going</span>
            <div>
                <h4 className="text-xl font-bold mb-2">UELEMENT</h4>
                <p className="text-gray-400">I work as a UI/UX Designer, Product Owner, and Content Writer, bridging user needs with business goals.</p>
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 border-b border-border pb-8">
            <span className="text-sm text-gray-500 whitespace-nowrap">2024 - 2025</span>
            <div>
                <h4 className="text-xl font-bold mb-2">The DataTech Labs</h4>
                <p className="text-gray-400">As a UI/UX Designer Intern, I help transform complex ideas into intuitive digital solutions.</p>
            </div>
        </div>
      </div>
    </section>
  );
}