import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/SiteLayout";
import { useEffect, useRef } from "react";

// --- IMAGES ---
import servicesBanner from "@/assets/services-banner.jpg"; 
import imgArch from "@/assets/services-arch.jpg";
import imgInterior from "@/assets/services-interior.jpg";
import imgHospitality from "@/assets/services-hospitality.jpg";
import imgRetail from "@/assets/services-retail.jpg";
import imgDeveloper from "@/assets/services-developer.jpg";
import imgTurnkey from "@/assets/services-turnkey.jpg";

import bannerArch from "@/assets/banner-arch.jpg";
import bannerInterior from "@/assets/banner-interior.jpg";
import bannerHospitality from "@/assets/banner-hospitality.jpg";
import bannerRetail from "@/assets/banner-retail.jpg";
import bannerDeveloper from "@/assets/banner-developer.jpg";
import bannerTurnkey from "@/assets/banner-turnkey.jpg";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
});

// Single Source of Truth for Data (No slug mismatch)
export const servicesData = [
  {
    slug: "iconic-architecture",
    t: "Architecture",
    d: "Thoughtfully designed architectural environments that balance spatial planning, natural light, materiality and long-term usability.",
    items: ["Luxury residences", "Villas", "Hospitality environments", "Boutique commercial spaces", "Developer-led architectural concepts"],
    img: imgArch, 
    innerBanner: bannerArch, 
  },
  {
    slug: "interior-design",
    t: "Luxury Residential Interiors",
    d: "Highly bespoke homes designed around the client's lifestyle, routines and emotional connection to space.",
    items: ["Penthouses", "Private villas", "High-end apartments", "Personal material narratives", "Timeless detailing"],
    img: imgInterior, 
    innerBanner: bannerInterior, 
  },
  {
    slug: "hospitality-design",
    t: "Hospitality Design",
    d: "Immersive hospitality environments that create emotional memory and elevate the guest experience.",
    items: ["Boutique hotels", "Cafés", "Restaurants & lounges", "Luxury dining concepts", "Experiential spaces"],
    img: imgHospitality, 
    innerBanner: bannerHospitality, 
  },
  {
    slug: "luxury-retail",
    t: "Luxury Retail Design",
    d: "Retail environments that increase engagement, customer experience and premium brand perception.",
    items: ["Flagship stores", "Brand boutiques", "Pop-up environments", "Showroom concepts", "Display & lighting design"],
    img: imgRetail, 
    innerBanner: bannerRetail, 
  },
  {
    slug: "developer-solutions",
    t: "Developer Solutions",
    d: "Emotionally persuasive environments that accelerate buyer confidence and enhance project positioning.",
    items: ["Sample apartments", "Sales galleries", "Experience centers", "Clubhouses & lobbies", "Amenity & investor environments"],
    img: imgDeveloper, 
    innerBanner: bannerDeveloper, 
  },
  {
    slug: "turnkey-execution",
    t: "Turnkey Project Execution",
    d: "End-to-end execution with complete project accountability — under a single, integrated system.",
    items: ["Civil & technical coordination", "Custom furniture", "Procurement & lighting", "Fit-outs & finishing", "Project management"],
    img: imgTurnkey, 
    innerBanner: bannerTurnkey, 
  },
];

function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          } else {
            entry.target.classList.remove("reveal-active");
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -4px 0px" }
    );

    const elements = containerRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{__html: `
        body, #app, main { background-color: #ffffff !important; }
        main { padding-top: 0 !important; margin-top: 0 !important; max-width: 100% !important; width: 100% !important; }
        
        /* Transparent Header Force Lock */
        header, .header-container, [class*="header"] {
          /* FIX: Yahan flat transparency hata kar premium black vignette overlay apply kiya hai */
          background: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 100 !important;
          border-bottom: none !important;
          border: none !important;
          box-shadow: none !important;
        }
        header a, header span, header button, nav a, nav span { color: #ffffff !important; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4) !important; }

        @keyframes luxuryScaleDown {
          from { transform: scale(1.1); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-hero-full { animation: luxuryScaleDown 2.2s cubic-bezier(0.25, 1, 0.5, 1) forwards; }

        /* Multi-directional Scroll Animation Classes */
        .scroll-reveal {
          opacity: 0 !important;
          transform: translateY(50px) !important;
          transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
          will-change: transform, opacity;
        }
        
        /* Force text animation hooks inside PageHero */
        .scroll-reveal h1, .scroll-reveal p, .scroll-reveal span, .scroll-reveal div {
          opacity: 0;
          transform: translateY(25px);
          transition: opacity 1.1s cubic-bezier(0.25, 1, 0.5, 1), transform 1.1s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .reveal-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .reveal-active h1, .reveal-active p, .reveal-active span, .reveal-active div {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}} />

      {/* Full screen background hero banner */}
      <div className="absolute left-0 right-0 top-0 w-screen h-screen overflow-hidden bg-neutral-900 z-0">
        <img src={servicesBanner} alt="Services" className="w-full h-full object-cover animate-hero-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none" />
      </div>
      
      <div className="h-screen w-full invisible pointer-events-none" />

      {/* Main Content Body */}
      <div ref={containerRef} className="bg-white text-neutral-900 relative z-10 px-6 sm:px-12 pb-32 pt-24 rounded-t-[40px] shadow-[0_-30px_60px_rgba(0,0,0,0.18)]">
        
        {/* TEXT REVEAL WORKING DIRECTLY ON SCROLL UP/DOWN */}
        <div className="max-w-6xl mx-auto scroll-reveal mb-12">
          <PageHero
            eyebrow="Practice"
            title="Architecture, interiors and execution — under one studio."
            intro="From private residences to large-scale developer environments, Casa Exotique brings the entire design and delivery process under one accountable team."
          />
        </div>

        {/* 6 Grid layout cards wrapper */}
        <section className="max-w-6xl mx-auto mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {servicesData.map((service, idx) => (
              <div 
                key={service.slug} 
                className="scroll-reveal relative h-[65vh] md:h-[75vh] w-full overflow-hidden group rounded-xl shadow-md bg-neutral-100 border border-neutral-100/60"
                style={{ transitionDelay: `${(idx % 2) * 100}ms` }}
              >
                <img src={service.img} alt={service.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-black/95 transition-all duration-700" />
                
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center pb-16 pt-24 px-6 z-10">
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-white tracking-widest uppercase mb-6 transition-all duration-500 group-hover:tracking-[0.15em]">
                    {service.t}
                  </h2>
                  <Link 
                    to="/services/$serviceId" 
                    params={{ serviceId: service.slug }} 
                    className="px-8 py-3 bg-[#9e2a2b] text-white text-[0.65rem] font-semibold tracking-[0.3em] uppercase rounded-full transition-all duration-500 hover:bg-white hover:text-black"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

export default ServicesPage;