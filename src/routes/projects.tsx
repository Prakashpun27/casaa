import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Section, Eyebrow } from "@/components/SiteLayout";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Saari 9 Portfolio Banner Images
import port1 from "@/assets/port-ban1.jpg";
import port2 from "@/assets/port-ban2.jpg";
import port3 from "@/assets/port-ban3.jpg";
import port4 from "@/assets/port-ban4.jpg";
import port5 from "@/assets/port-ban5.jpg";
import port6 from "@/assets/port-ban6.jpg";
import port7 from "@/assets/port-ban7.jpg";
import port8 from "@/assets/port-ban8.jpg";
import port9 from "@/assets/port-ban9.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Projects — Luxury Residences, Hospitality & Retail | Casa Exotique" },
      { name: "description", content: "A curated selection of luxury residences, hospitality environments, retail spaces and developer-led experiences designed and executed by Casa Exotique." },
      { property: "og:title", content: "Selected Projects — Casa Exotique" },
      { property: "og:description", content: "Material depth, spatial clarity and refined execution across India." },
      { property: "og:url", content: "/projects" },
      { property: "og:image", content: port1 },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const BANNER_SLIDES = [
  { img: port1, category: "Residential", location: "GURUGRAM" },
  { img: port2, category: "Residential", location: "GURUGRAM" },
  { img: port3, category: "Residential", location: "GURUGRAM" },
  { img: port4, category: "Hospitality", location: "GURUGRAM" },
  { img: port5, category: "Hospitality", location: "GURUGRAM" },
  { img: port6, category: "Hospitality", location: "GURUGRAM" },
  { img: port7, category: "Commercial", location: "GURUGRAM" },
  { img: port8, category: "Commercial", location: "GURUGRAM" },
  { img: port9, category: "Commercial", location: "GURUGRAM" },
];

type Category = "All" | "Residential" | "Commercial" | "Hospitality";
const categories: Category[] = ["All", "Residential", "Commercial", "Hospitality"];

// Dynamic asset arrays matching image names exactly
const allGalleryImages = Array.from({ length: 80 }, (_, i) => ({
  id: `all-${i + 1}`,
  img: `/src/assets/p${i + 1}.jpg`,
}));

const residenceImages = Array.from({ length: 44 }, (_, i) => ({
  id: `res-${i + 1}`,
  img: `/src/assets/r${i + 1}.jpg`,
}));

const commercialImages = Array.from({ length: 10 }, (_, i) => ({
  id: `comm-${i + 1}`,
  img: `/src/assets/c${i + 1}.jpg`,
}));

const hospitalityImages = Array.from({ length: 12 }, (_, i) => ({
  id: `hosp-${i + 1}`,
  img: `/src/assets/h${i + 1}.jpg`,
}));

function ProjectsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const getFilteredImages = () => {
    switch (activeCategory) {
      case "Residential":
        return residenceImages;
      case "Commercial":
        return commercialImages;
      case "Hospitality":
        return hospitalityImages;
      default:
        return allGalleryImages;
    }
  };

  const filteredItems = getFilteredImages();

  // Premium text animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] } 
    }
  };

  return (
    <SiteLayout transparentHeader={true}>
      <style dangerouslySetInnerHTML={{__html: `
        header {
          background: transparent !important;
          background-color: transparent !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          z-index: 100 !important;
          box-shadow: none !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
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

      {/* --- SECTION 1: CLEAN FULL SCREEN BANNER --- */}
      <section className="relative h-screen w-full overflow-hidden bg-black z-10 select-none">
        <div className="absolute inset-0 z-0">
          {BANNER_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img 
                src={slide.img} 
                alt={slide.category} 
                className={`w-full h-full object-cover opacity-75 transition-transform duration-[3000ms] ease-out ${
                  index === currentSlide ? "scale-100" : "scale-105"
                }`}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-15" />
        </div>

        <div className="absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12 flex justify-between text-[0.75rem] uppercase tracking-[0.3em] text-white z-20 font-medium transition-all duration-500">
          <span>{BANNER_SLIDES[currentSlide].category}</span>
          <span>{BANNER_SLIDES[currentSlide].location}</span>
        </div>
      </section>

      {/* --- SECTION 2: LOWER CONTENT AREA --- */}
      <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 relative z-20">
        
        {/* Animated PageHero with Premium Bold Maroon Color */}
        <div className="px-6 lg:px-16 pt-24 pb-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={textVariant}
              className="text-[0.65rem] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium mb-4"
            >
              Selected Projects
            </motion.p>
            <motion.h1 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={textVariant}
              style={{ color: "#800020" }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight"
            >
              A curated collection of refined environments.
            </motion.h1>
          </div>
          <div className="md:col-span-5 md:pt-12">
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={textVariant}
              className="text-base font-light leading-relaxed text-neutral-500 dark:text-neutral-400"
            >
              Luxury residences, hospitality concepts, retail spaces and developer-led experiences — each project reflects our commitment to material depth, spatial clarity and refined execution.
            </motion.p>
          </div>
        </div>

        {/* --- DYNAMIC FILTER CONTROLS (STRICT INLINE ONE LINE CONTAINER) --- */}
        <div className="px-6 lg:px-16 mb-12 max-w-7xl mx-auto border-b border-neutral-100 dark:border-neutral-900 pb-4 overflow-x-auto scrollbar-none">
          <div 
            style={{ flexWrap: "nowrap", display: "flex" }} 
            className="flex items-center gap-x-8 whitespace-nowrap min-w-max"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm tracking-wider uppercase font-light pb-2 transition-all duration-300 relative inline-block ${
                  activeCategory === cat 
                    ? "text-black dark:text-white font-normal" 
                    : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="activeBorder" 
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-black dark:bg-white"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* --- 2-COLUMN PREMIUM IMAGE GALLERY WITH BOTH SIDES SCROLL ANIMATION --- */}
        <Section className="py-4 max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-x-12 gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.figure
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.215, 0.610, 0.355, 1.000] }}
                  className="group w-full mb-4"
                >
                  <div className="overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[4/3] w-full">
                    <img
                      src={item.img}
                      alt="Portfolio Casa Exotique"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>
        </Section>

        {/* --- BOTTOM CONFIDENTIAL SECTION --- */}
        <Section className="pb-24 border-t border-neutral-100 dark:border-neutral-900 pt-16 mt-20 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <Eyebrow>Confidential</Eyebrow>
            <p className="mt-6 text-base font-light leading-relaxed text-neutral-500 dark:text-neutral-400">
              Many of our residences and developer projects are not publicly listed.
              Detailed portfolios are shared during private consultations.
            </p>
          </div>
        </Section>
      </div>
    </SiteLayout>
  );
} 