import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section } from "@/components/SiteLayout";
import { useState } from "react";

// --- ASSET IMPORT ---
import contactBanner from "@/assets/contact-banner.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Casa Exotique — Luxury Design-Build Studio, Gurgaon" },
      { name: "description", content: "Begin your luxury residential, hospitality, retail or developer project with Casa Exotique. Schedule a design consultation with the Gurgaon studio." },
      { property: "og:title", content: "Begin Your Project — Casa Exotique" },
      { property: "og:description", content: "Architecture, design and execution under one integrated vision." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{__html: `
        body, #app, main { 
          background-color: #ffffff !important; 
        }
        
        /* --- CLEAN GRADIENT STICKY NAVBAR (NO BOX LOOK) --- */
        header {
          position: fixed !important; 
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 100 !important;
          background: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          border-bottom: none !important;
          box-shadow: none !important;
          transition: transform 0.4s ease !important;
        }
        
        header a, header span, header button, nav a, nav span {
          color: #ffffff !important;
          text-shadow: 0 1px 3px rgba(0,0,0,0.4);
        }

        main {
          padding-top: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
        }

        /* --- PREMIUM TEXT ENTRANCE EFFECTS --- */
        @keyframes customFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-text-reveal {
          opacity: 0;
          animation: customFadeUp 1s cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
        }

        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
      `}} />

      {/* Main Structural Flow */}
      <div className="w-full min-h-screen bg-white text-neutral-900 flex flex-col overflow-hidden">
        
        {/* STEP 1: TOP BANNER - WITH OPTIMIZED HIGH VISIBILITY TEXT */}
        <div className="w-full h-screen relative overflow-hidden bg-neutral-950 flex items-center justify-center">
          <img 
            src={contactBanner} 
            alt="Casa Exotique Studio Interior Banner" 
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Subtle dark tint over the image to ensure high text contrast */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
          
          {/* High-Visibility Premium Banner Message */}
          <div className="relative z-10 text-center px-6 max-w-5xl animate-text-reveal">
            <h2 
              className="font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-none select-none"
              style={{ textShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)" }}
            >
              Let's Start Your Journey
            </h2>
            <div className="mt-6 w-16 h-[2px] bg-white/60 mx-auto shadow-sm" />
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-[0.65rem] uppercase tracking-[0.4em] font-semibold pointer-events-none animate-bounce">
            Scroll Down
          </div>
        </div>

        {/* STEP 2: BEGIN YOUR PROJECT SECTION */}
        <div className="w-full bg-white relative z-10 px-6 lg:px-16">
          
          {/* CONTENT HERO CONTAINER */}
          <div className="pt-28 pb-12 max-w-5xl mx-auto animate-text-reveal delay-1">
            <span className="text-[0.7rem] uppercase tracking-[0.35em] text-[#9e2a2b] font-bold block mb-5">— Contact</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight">
              Begin your project.
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-neutral-700 font-normal leading-relaxed max-w-3xl">
              Whether you are developing a luxury residence, hospitality concept, retail environment or large-scale turnkey project — Casa Exotique brings architecture, design and execution together under one vision.
            </p>
          </div>

          {/* STUDIO INFO & FORM GRID */}
          <Section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-28 border-b border-neutral-100 animate-text-reveal delay-2">
            
            {/* Left Side: Studio Info with Icons */}
            <div className="lg:col-span-5 space-y-12 pr-4">
              
              <div>
                <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block mb-4">— Studio</span>
                <div className="flex items-start gap-3">
                  <span className="text-xl text-[#9e2a2b] mt-1 flex-shrink-0">📍</span>
                  <p className="font-display text-xl lg:text-2xl leading-relaxed text-neutral-900 font-medium">
                    Design and Experience Center<br/>
                    <span className="text-neutral-600 text-lg font-normal">Plot No.110, Pace City 1, Sector 37, Gurgaon<br/>Haryana, India</span>
                  </p>
                </div>
              </div>

              <div>
                <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block mb-4">— Enquiries</span>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-[#9e2a2b] flex-shrink-0">📞</span>
                    <p className="text-2xl text-neutral-900 font-medium tracking-tight">+91 9999766655</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-[#9e2a2b] flex-shrink-0">✉️</span>
                    <p className="text-xl text-neutral-700 font-medium">info@casaexotique.com</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 mt-4 tracking-wide font-normal pl-8">For new projects, collaborations & press</p>
              </div>

              <div>
                <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block mb-3">— Hours</span>
                <p className="text-base text-neutral-600 leading-relaxed font-medium pl-8">
                  Monday — Saturday<br/>
                  <span className="text-sm text-neutral-800 font-semibold block mt-1">9:00 AM — 5:00 PM</span>
                  <span className="text-xs tracking-wider text-neutral-400 uppercase font-bold block mt-1">By appointment only</span>
                </p>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="lg:col-span-7 space-y-8 border-t border-neutral-200 lg:border-t-0 lg:pt-0 pt-10"
            >
              {sent ? (
                <div className="py-20 text-center bg-neutral-50 rounded-lg">
                  <span className="text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block">— Thank you</span>
                  <h3 className="mt-6 font-display text-3xl text-neutral-900 font-semibold">We've received your enquiry.</h3>
                  <p className="mt-4 text-neutral-600 text-sm font-normal">A member of our design studio will be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-10">
                    <Field label="Your Name" name="name" />
                    <Field label="Email" name="email" type="email" />
                    <Field label="Phone" name="phone" />
                    <Field label="City" name="city" />
                  </div>
                  <Field label="Project Type" name="type" placeholder="Residence · Hospitality · Retail · Developer" />
                  <Field label="Tell us about your project" name="message" textarea />
                  
                  <div className="pt-4">
                    {/* Premium Rich Maroon Button */}
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full lg:w-auto px-10 py-5 bg-[#800020] text-white hover:bg-[#5c0017] transition-all duration-300 active:scale-95 text-[0.75rem] uppercase tracking-[0.3em] font-bold mt-4 shadow-md rounded-none"
                    >
                      Schedule a Design Consultation
                    </button>
                  </div>
                </>
              )}
            </form>
          </Section>

        </div>

        {/* STEP 3: DYNAMIC MAP SECTION */}
        <section className="w-full h-[55vh] min-h-[450px] relative bg-neutral-100 border-t border-neutral-100 overflow-hidden shadow-inner animate-text-reveal delay-3">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2911563734992!2d77.00915147549385!3d28.440638275770056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d55b1d4b8d%3A0xf79816a4f0c34423!2sCasa%20Exotique%20-%20Best%20Home%20Interior%20Designer%20in%20Gurugram!5e0!3m2!1sen!2sin!4v1783495242424!5m2!1sen!2sin" 
            className="w-full h-full border-0 block"
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
            title="Casa Exotique Gurugram Location Map"
          />
        </section>

      </div>
    </SiteLayout>
  );
}

// Custom Premium Input Field Layout
function Field({
  label,
  name,
  type = "text",
  textarea,
  placeholder,
}: { label: string; name: string; type?: string; textarea?: boolean; placeholder?: string }) {
  const cls = "w-full bg-transparent border-b border-neutral-300 focus:border-[#9e2a2b] outline-none py-3 text-base text-neutral-900 font-medium placeholder:text-neutral-400 transition-all duration-300";
  return (
    <div className="block relative group">
      <span className="text-[0.65rem] uppercase tracking-[0.25em] text-neutral-500 font-bold block transition-colors group-focus-within:text-[#9e2a2b]">{label}</span>
      {textarea ? (
        <textarea name={name} rows={4} placeholder={placeholder} className={`${cls} resize-none mt-2`} />
      ) : (
        <input name={name} type={type} placeholder={placeholder} className={`${cls} mt-2`} />
      )}
    </div>
  );
}

export default ContactPage;