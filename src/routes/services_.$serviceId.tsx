import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { servicesData } from "./services.index"; // Explicitly inheriting pristine object structure
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/services_/$serviceId")({
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { serviceId } = Route.useParams();
  const currentService = servicesData.find((s) => s.slug === serviceId);
  const detailContainerRef = useRef<HTMLDivElement>(null);

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

    const elements = detailContainerRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, [serviceId]);

  if (!currentService) {
    return (
      <SiteLayout>
        <div className="pt-40 text-center text-neutral-800 min-h-screen font-light">Service not found</div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{__html: `
        body, #app, main { background-color: #ffffff !important; }
        main { padding-top: 0 !important; margin-top: 0 !important; max-width: 100% !important; width: 100% !important; }
        
        /* Transparent floating header setup */
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
          from { transform: scale(1.08); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-bg { animation: luxuryScaleDown 1.8s cubic-bezier(0.25, 1, 0.5, 1) forwards; }

        /* Bidirectional engine for internal detail blocks */
        .scroll-reveal {
          opacity: 0 !important;
          transform: translateY(45px) !important;
          transition: opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
          will-change: transform, opacity;
        }
        .reveal-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}} />

      {/* Internal Hero Backdrop Banner */}
      <div className="absolute left-0 right-0 top-0 w-screen h-[75vh] md:h-[85vh] overflow-hidden bg-neutral-900 z-0">
        <img src={currentService.innerBanner} alt={currentService.t} className="w-full h-full object-cover animate-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 pointer-events-none" />
      </div>

      <div className="h-[62vh] md:h-[72vh] w-full invisible pointer-events-none" />

      {/* Main Container Wrapper */}
      <div ref={detailContainerRef} className="bg-white text-neutral-900 relative z-10 px-6 sm:px-12 pb-32 pt-16 rounded-t-3xl md:rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.12)]">
        <div className="max-w-6xl mx-auto space-y-16">
          
          <div className="space-y-3 scroll-reveal">
            <span className="text-xs uppercase tracking-[0.35em] text-[#9e2a2b] font-bold block">— Bespoke Studio Practice</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight uppercase leading-none text-neutral-900">
              {currentService.t}
            </h1>
            <div className="h-[2px] bg-[#9e2a2b] w-24 mt-6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-2">
            
            <div className="lg:col-span-7 space-y-6 scroll-reveal" style={{ transitionDelay: "100ms" }}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">The Core Concept</h3>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-light text-justify tracking-wide">
                {currentService.d}
              </p>
            </div>

            <div className="lg:col-span-5 bg-neutral-50 p-8 md:p-10 rounded-xl border border-neutral-100 space-y-6 h-fit shadow-sm scroll-reveal" style={{ transitionDelay: "200ms" }}>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#9e2a2b] font-bold">Scope of Work</h3>
              <ul className="space-y-4">
                {currentService.items.map((item) => (
                  <li key={item} className="flex gap-4 items-start text-sm text-neutral-600 border-b border-neutral-200/60 pb-3 last:border-0 last:pb-0 transition-all duration-300 hover:translate-x-1">
                    <span className="text-[#9e2a2b] font-medium">—</span>
                    <span className="leading-tight font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="w-full pt-12 text-center scroll-reveal" style={{ transitionDelay: "250ms" }}>
            <p className="text-xs tracking-[0.4em] text-neutral-300 uppercase font-light">Casa Exotique Design Studio</p>
          </div>

        </div>
      </div>
    </SiteLayout>
  );
}

export default ServiceDetailPage;