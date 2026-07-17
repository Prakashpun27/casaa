import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Section, PageHero } from "@/components/SiteLayout";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Existing Imports
import aboutBanner from "@/assets/about-banner.jpg"; 
import practiceShowcase from "@/assets/practice-showcase.jpg";
import aboutProjectImg from "@/assets/about-project.jpg"; 

// Gallery Assets 
import j1 from "@/assets/journey-1.jpg";
import j2 from "@/assets/journey-2.jpg";
import j3 from "@/assets/journey-3.jpg";
import j4 from "@/assets/journey-4.jpg";
import j5 from "@/assets/journey-5.jpg";
import j6 from "@/assets/journey-6.jpg";

// 8 Collection Assets 
import c1 from "@/assets/col-1.jpg";
import c2 from "@/assets/col-2.jpg";
import c3 from "@/assets/col-3.jpg";
import c4 from "@/assets/col-4.jpg";
import c5 from "@/assets/col-5.jpg";
import c6 from "@/assets/col-6.jpg";
import c7 from "@/assets/col-7.jpg";
import c8 from "@/assets/col-8.jpg";

const activeBanner = aboutBanner;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Casa Exotique — Luxury Design-Build Studio in Gurgaon" },
      { name: "description", content: "Casa Exotique is a Gurgaon-based luxury architecture and interior design-build studio creating refined residential, hospitality, retail and developer-led environments across India." },
      { property: "og:title", content: "About Casa Exotique" },
      { property: "og:description", content: "A multidisciplinary luxury studio combining architecture, interiors, custom manufacturing and turnkey execution." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function ScrollReveal({ 
  children, 
  variant = "fade-up", 
  delay = 0,
  className = "" 
}: { 
  children: ReactNode; 
  variant?: "fade-up" | "fade-left" | "fade-right" | "scale-up";
  delay?: number;
  className?: string;
}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      },
      { threshold: 0.1, rootMargin: "-40px 0px -40px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const variants = {
    "fade-up": "translate-y-16 opacity-0",
    "fade-left": "translate-x-16 opacity-0",
    "fade-right": "-translate-x-16 opacity-0",
    "scale-up": "scale-[0.97] opacity-0"
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isIntersecting ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${
        isIntersecting ? "translate-y-0 translate-x-0 scale-100 opacity-100" : variants[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}

function AboutPage() {
  const visualGallery = [j1, j2, j3, j4, j5, j6];
  const collections = [c1, c2, c3, c4, c5, c6, c7, c8];
  
  // Interactive Slider Setup for both Desktop Mouse & Phone Touch
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    const speed = 0.8; // Speed coefficient

    const autoScroll = () => {
      if (!isUserInteracting) {
        slider.scrollLeft += speed;
        
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isUserInteracting]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsUserInteracting(true);
    startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft.current = sliderRef.current?.scrollLeft || 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isUserInteracting || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; 
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsUserInteracting(true);
    startX.current = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
    scrollLeft.current = sliderRef.current?.scrollLeft || 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isUserInteracting || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleInteractionEnd = () => {
    setIsUserInteracting(false);
  };

  return (
    <SiteLayout>
      <style dangerouslySetInnerHTML={{__html: `
        header {
          background: linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%) !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          position: fixed !important; 
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 100 !important;
          box-shadow: none !important;
          border-bottom: none !important;
          border: none !important;
        }
        header a, header span, header button, nav a, nav span {
          color: #ffffff !important;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4) !important;
        }
        main {
          padding-top: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
        }
      `}} />

      {/* HERO IMAGE BANNER */}
      <div className="absolute left-0 right-0 w-screen h-screen overflow-hidden bg-black z-0">
        <img 
          src={activeBanner} 
          alt="Studio Banner" 
          className="w-full h-full object-cover opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="h-screen w-full invisible pointer-events-none" />

      {/* Page Hero */}
      <ScrollReveal variant="fade-up">
        <PageHero
          eyebrow="The Studio"
          title="A practice built on vision and execution."
          intro="Established in 2019, Casa Exotique has evolved into a multidisciplinary studio creating environments where architecture, atmosphere and craft meet."
        />
      </ScrollReveal>

      {/* Main Content Section */}
      <Section className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <ScrollReveal variant="fade-right" delay={100}>
            <p>
              Casa Exotique is a Gurgaon-based luxury architecture and interior design-build
              studio known for creating refined residential, hospitality, retail and
              developer-led environments across India.
            </p>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-right" delay={200}>
            <p className="text-foreground font-display text-2xl leading-snug">
              “Exceptional spaces require both creative vision and execution control.”
            </p>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-right" delay={300}>
            <p>
              Over the years, the studio has grown into a multidisciplinary practice combining
              architecture, luxury interiors, turnkey execution, custom furniture, fit-outs,
              developer solutions and hospitality environments.
            </p>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-right" delay={400}>
            <p>
              Every project is approached through the lens of timeless design, emotional
              experience and technical precision — quietly, deliberately, without compromise.
            </p>
          </ScrollReveal>
        </div>

        <figure className="lg:col-span-5 order-1 lg:order-2 overflow-hidden rounded">
          <ScrollReveal variant="scale-up" delay={200}>
            <div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900 w-full h-[60vh] lg:h-[78vh]">
              <img 
                src={aboutProjectImg} 
                alt="Casa Exotique residential project" 
                loading="lazy" 
                width={1100} 
                height={1400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" 
              />
            </div>
          </ScrollReveal>
        </figure>
      </Section>

      {/* Counters Metrics Section */}
      <Section className="mt-32">
        <div className="grid lg:grid-cols-4 gap-10 border-t border-border/60 pt-16">
          {[
            { k: "2019", v: "Studio established in Gurgaon" },
            { k: "60+", v: "Bespoke environments delivered" },
            { k: "1", v: "Integrated team — design to delivery" },
            { k: "India", v: "Practicing across NCR & beyond" },
          ].map((s, idx) => (
            <div key={s.k}>
              <ScrollReveal variant="fade-up" delay={idx * 100}>
                <div className="font-display text-5xl text-accent">{s.k}</div>
                <p className="mt-3 text-sm text-muted-foreground">{s.v}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT WE PRACTICE */}
      <Section className="py-24 lg:py-36 border-t border-neutral-100 dark:border-neutral-900">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <ScrollReveal variant="scale-up">
              <div className="overflow-hidden rounded shadow-2xl bg-neutral-100 dark:bg-neutral-900 aspect-[4/5]">
                <img 
                  src={practiceShowcase} 
                  alt="Casa Exotique Practice Portfolio" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                />
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal variant="fade-left" delay={150}>
              <span className="text-[0.68rem] uppercase tracking-[0.3em] text-accent font-semibold block mb-2">— What We Practice</span>
              <h2 className="font-display text-3xl lg:text-5xl tracking-tight leading-tight font-light">
                Disciplines under <br />one refined roof.
              </h2>
            </ScrollReveal>
            
            <ScrollReveal variant="fade-left" delay={250}>
              <p className="text-base font-light leading-relaxed text-neutral-600 dark:text-neutral-400">
                Our architecture and interior design workflows combine creative mastery with full 
                turnkey execution control to deliver seamless, uncompromised premium environments.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={350}>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 text-sm text-neutral-800 dark:text-neutral-300 font-light">
                {[
                  "Architecture", "Luxury Interiors", "Turnkey Execution", 
                  "Custom Furniture", "Fit-outs", "Developer Solutions", 
                  "Hospitality Environments", "Material & Lighting Curation"
                ].map((i) => (
                  <li key={i} className="flex gap-3 items-center py-2 border-b border-neutral-100 dark:border-neutral-900 hover:border-accent transition-colors duration-300">
                    <span className="text-accent text-lg font-mono">—</span>
                    <span>{i}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* VISUAL JOURNEY GALLERY */}
      <Section className="pb-24 lg:pb-36 border-t border-neutral-100 dark:border-neutral-900 pt-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight">Visual Journey of Our Work</h2>
            <p className="mt-5 text-base text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
              The journey of design begins with an idea, a concept that takes form through meticulous planning and curation. Each stage is an orchestration of creativity and precision.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visualGallery.map((pic, index) => (
            <ScrollReveal key={index} variant="scale-up" delay={index * 100}>
              <div className="overflow-hidden rounded shadow-lg aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 group">
                <img 
                  src={pic} 
                  alt={`Journey item ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105" 
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* --- PHONE SWIPE + DESKTOP DRAG + AUTO SCROLL PERFECT LOOPER --- */}
      <section className="py-20 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-14 px-4">
          <ScrollReveal variant="fade-up">
            <h2 className="font-display text-4xl lg:text-5xl tracking-tight">Discover All Collections</h2>
          </ScrollReveal>
        </div>

        {/* Unified Touch & Mouse Handler Wrapper */}
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleInteractionEnd}
          className="w-full flex select-none py-4 gap-6 px-6 overflow-x-auto scrollbar-none touch-pan-x cursor-grab active:cursor-grabbing"
        >
          {collections.map((imgSrc, idx) => (
            <div key={`track-main-${idx}`} className="w-[260px] sm:w-[360px] aspect-[4/5] overflow-hidden rounded shadow-md bg-neutral-200 flex-shrink-0 transition-shadow duration-300 hover:shadow-xl">
              <img 
                src={imgSrc} 
                alt={`Collection piece ${idx + 1}`} 
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
          
          {collections.map((imgSrc, idx) => (
            <div key={`track-buffer-${idx}`} className="w-[260px] sm:w-[360px] aspect-[4/5] overflow-hidden rounded shadow-md bg-neutral-200 flex-shrink-0 transition-shadow duration-300 hover:shadow-xl" aria-hidden="true">
              <img 
                src={imgSrc} 
                alt={`Collection duplicate piece ${idx + 1}`} 
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* --- DYNAMIC REDIRECT BUTTON --- */}
        <div className="text-center mt-10">
          <ScrollReveal variant="fade-up">
            <Link 
              to="/projects" 
              className="inline-block px-12 py-4 bg-[#800020] text-white rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#66001a] transform hover:scale-[1.02] shadow-md text-center"
            >
              View more
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet the Founder Block */}
      <Section className="mt-16 mb-10">
        <div className="border-t border-border/60 pt-16 flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal variant="fade-right">
            <h2 className="font-display text-3xl lg:text-5xl max-w-2xl">Meet the founder behind the practice.</h2>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-left" delay={150}>
            <Link to="/founder" className="inline-flex items-center px-7 py-4 border border-foreground/30 text-[0.72rem] uppercase tracking-[0.28em] hover:border-accent hover:text-accent">
              Bhawana Bhatnagar
            </Link>
          </ScrollReveal>
        </div>
      </Section>
    </SiteLayout>
  );
}

export default AboutPage;