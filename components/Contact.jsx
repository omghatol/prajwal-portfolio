import { FaPaperPlane, FaAddressBook, FaArrowUp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pt-10 pb-20">
      <div className="flex items-center gap-2 fl3 mb-4">
        <FaAddressBook /> <h2>Contact me</h2>
      </div>
      <h2 className="fl1 mb-12">
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

        <button className="bg-[#6F3FF5] hover:bg-[#5e35d4] rounded-[15px] fl2 px-8 py-3  flex items-center gap-2">
          Send Message <FaPaperPlane />
        </button>
      </form>

      <div className="border-t border-border pt-12">
        <h2 className="fl1 mb-12">
          Want To Learn More About<br />My Journey And Work?<br />Let's connect.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <small className="fl3 block mb-1">Location</small>
            <p className="fl2">Pune, Maharashtra, India.</p>
          </div>
          <div>
            <small className="fl3 block mb-1">Mobile No.</small>
            <p className="fl2">+91-8600966331</p>
          </div>
          <div>
            <small className="fl3 block mb-1">Email</small>
            <p className="fl2">rudragohad51@gmail.com</p>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <h3 className="fl1">Thankyou!</h3>
          <a href="#home" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-white hover:text-black transition-colors">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </section>
  );
}