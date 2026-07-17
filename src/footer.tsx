import React from "react";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaPinterestP, 
  FaYoutube, 
  FaInstagram, 
  FaPhoneAlt, 
  FaWhatsapp 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-800 pt-20 pb-6 border-t border-neutral-100 font-sans tracking-wide">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* --- TOP SECTION (SUBSCRIBE & LOGO & LINKS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-100 items-start">
          
          {/* Left: Subscribe */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">
              Subscribe to our list
            </h4>
            <div className="relative flex items-center max-w-sm border-b border-neutral-400 pb-2">
              <input 
                type="email" 
                placeholder="email address" 
                className="w-full bg-transparent text-sm focus:outline-none placeholder-neutral-400 font-light"
              />
              <button className="bg-[#6B2D2D] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#522222] transition-colors">
                ➔
              </button>
            </div>
          </div>

          {/* Center: Brand Logo */}
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-neutral-400 flex items-center justify-center"></div>
              <div className="text-2xl font-serif tracking-[0.25em] font-light text-neutral-800">
                CASA EXOTIQUE
              </div>
            </div>
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400 block pl-2">
              LUXURY INTERIOR DESIGN STUDIO
            </span>
          </div>

          {/* Right: Company Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">Company</h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-light">
              <li><a href="/about" className="hover:text-neutral-900 transition-colors">Studio</a></li>
              <li><a href="/founder" className="hover:text-neutral-900 transition-colors">Founder</a></li>
              <li><a href="/contact" className="hover:text-neutral-900 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-500">Explore</h4>
            <ul className="space-y-2 text-xs text-neutral-600 font-light">
              <li><a href="/services" className="hover:text-neutral-900 transition-colors">Services</a></li>
              <li><a href="/projects" className="hover:text-neutral-900 transition-colors">Portfolio</a></li>
              <li><a href="/faq" className="hover:text-neutral-900 transition-colors">FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* --- MIDDLE SECTION (CONTACT & SOCIALS) --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 items-start text-xs text-neutral-600 leading-relaxed font-light">
          
          {/* Headquarter */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="font-medium text-neutral-800 uppercase tracking-wider text-[11px]">Headquarter</h5>
            <p className="max-w-xs">
              G-178, Sector 44, <br />
              Opposite Amity University, <br />
              Noida (NCR), Pin -201301, India
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2">
                <FaWhatsapp className="text-[#6B2D2D] text-sm" />
                <span>+91 9310359993</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#6B2D2D] text-sm" />
                <span>0120-4371060</span>
              </div>
            </div>
          </div>


          {/* Social Icons Right-aligned */}
          <div className="md:col-span-3 flex justify-start md:justify-end gap-3 pt-4 md:pt-0">
            {[
              { icon: <FaFacebookF />, url: "#" },
              { icon: <FaLinkedinIn />, url: "#" },
              { icon: <FaPinterestP />, url: "#" },
              { icon: <FaYoutube />, url: "#" },
              { icon: <FaInstagram />, url: "#" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                className="w-8 h-8 bg-[#6B2D2D] text-white flex items-center justify-center rounded text-sm hover:bg-[#522222] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* --- BOTTOM GIANT BACKGROUND TEXT --- */}
        <div className="w-full text-center overflow-hidden pointer-events-none select-none pt-6 mt-4">
          <h1 className="text-[11vw] font-serif leading-none tracking-widest uppercase font-light text-[#6B2D2D]/5 whitespace-nowrap translate-y-4">
            CASA EXOTIQUE
          </h1>
        </div>

      </div>
    </footer>
  );
}