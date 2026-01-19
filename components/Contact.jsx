import { FaPaperPlane, FaAddressBook, FaArrowUp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pt-10 pb-20">
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <FaAddressBook /> <small>Contact me</small>
      </div>
      <h2 className="font-display text-4xl lg:text-5xl font-bold mb-12">
        Let's Make Something<br />Awesome Together!
      </h2>

      <form className="mb-20 space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name*" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent w-full" />
            <input type="text" placeholder="Company Name" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent w-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email Address*" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent w-full" />
            <input type="tel" placeholder="Mobile No.*" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent w-full" />
        </div>
        <textarea placeholder="Message" rows="4" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-accent w-full"></textarea>
        
        <button className="bg-accent px-8 py-3 rounded-full font-medium hover:bg-accent-hover transition-colors flex items-center gap-2">
            Send Message <FaPaperPlane />
        </button>
      </form>

      <div className="border-t border-border pt-12">
        <h2 className="font-display text-3xl mb-12">
            Want To Learn More About<br/>My Journey And Work?<br/>Let's connect.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
                <small className="text-gray-500 block mb-1">Location</small>
                <p>Pune, Maharashtra, India.</p>
            </div>
            <div>
                <small className="text-gray-500 block mb-1">Mobile No.</small>
                <p>+91-8600966331</p>
            </div>
            <div>
                <small className="text-gray-500 block mb-1">Email</small>
                <p>rudragohad51@gmail.com</p>
            </div>
        </div>

        <div className="flex justify-between items-end">
            <h3 className="font-display text-2xl">Thankyou!</h3>
            <a href="#home" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <FaArrowUp />
            </a>
        </div>
      </div>
    </section>
  );
}