import { t as port_ban1_default } from "./port-ban1-D3Abv4q0.js";
import { i as SiteLayout, r as Section, t as Eyebrow } from "./SiteLayout-YYKgKg6O.js";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
//#endregion
//#region src/routes/projects.tsx?tsr-split=component
var BANNER_SLIDES = [
	{
		img: port_ban1_default,
		category: "Residential",
		location: "GURUGRAM"
	},
	{
		img: "/assets/services-turnkey-DfIne_mH.jpg",
		category: "Residential",
		location: "GURUGRAM"
	},
	{
		img: "/assets/port-ban3-ByNMj2GN.jpg",
		category: "Residential",
		location: "GURUGRAM"
	},
	{
		img: "/assets/port-ban4-D_7dxF4_.jpg",
		category: "Hospitality",
		location: "GURUGRAM"
	},
	{
		img: "/assets/port-ban5-CkG5c--Z.jpg",
		category: "Hospitality",
		location: "GURUGRAM"
	},
	{
		img: "/assets/banner-hospitality-C4wpT2EW.jpg",
		category: "Hospitality",
		location: "GURUGRAM"
	},
	{
		img: "/assets/o6-fF6AqWV3.jpg",
		category: "Commercial",
		location: "GURUGRAM"
	},
	{
		img: "/assets/port-ban8-CXOM7KNQ.jpg",
		category: "Commercial",
		location: "GURUGRAM"
	},
	{
		img: "/assets/banner-developer-AzZESDX3.jpg",
		category: "Commercial",
		location: "GURUGRAM"
	}
];
var categories = [
	"All",
	"Residential",
	"Commercial",
	"Hospitality"
];
var allGalleryImages = Array.from({ length: 80 }, (_, i) => ({
	id: `all-${i + 1}`,
	img: `/src/assets/p${i + 1}.jpg`
}));
var residenceImages = Array.from({ length: 44 }, (_, i) => ({
	id: `res-${i + 1}`,
	img: `/src/assets/r${i + 1}.jpg`
}));
var commercialImages = Array.from({ length: 10 }, (_, i) => ({
	id: `comm-${i + 1}`,
	img: `/src/assets/c${i + 1}.jpg`
}));
var hospitalityImages = Array.from({ length: 12 }, (_, i) => ({
	id: `hosp-${i + 1}`,
	img: `/src/assets/h${i + 1}.jpg`
}));
function ProjectsPage() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [activeCategory, setActiveCategory] = useState("All");
	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
		}, 3e3);
		return () => clearInterval(timer);
	}, []);
	const getFilteredImages = () => {
		switch (activeCategory) {
			case "Residential": return residenceImages;
			case "Commercial": return commercialImages;
			case "Hospitality": return hospitalityImages;
			default: return allGalleryImages;
		}
	};
	const filteredItems = getFilteredImages();
	const textVariant = {
		hidden: {
			opacity: 0,
			y: 30
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: .8,
				ease: [
					.215,
					.61,
					.355,
					1
				]
			}
		}
	};
	return /* @__PURE__ */ jsxs(SiteLayout, {
		transparentHeader: true,
		children: [
			/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative h-screen w-full overflow-hidden bg-black z-10 select-none",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "absolute inset-0 z-0",
					children: [BANNER_SLIDES.map((slide, index) => /* @__PURE__ */ jsx("div", {
						className: `absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`,
						children: /* @__PURE__ */ jsx("img", {
							src: slide.img,
							alt: slide.category,
							className: `w-full h-full object-cover opacity-75 transition-transform duration-[3000ms] ease-out ${index === currentSlide ? "scale-100" : "scale-105"}`
						})
					}, index)), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-15" })]
				}), /* @__PURE__ */ jsxs("div", {
					className: "absolute bottom-8 left-6 right-6 lg:left-12 lg:right-12 flex justify-between text-[0.75rem] uppercase tracking-[0.3em] text-white z-20 font-medium transition-all duration-500",
					children: [/* @__PURE__ */ jsx("span", { children: BANNER_SLIDES[currentSlide].category }), /* @__PURE__ */ jsx("span", { children: BANNER_SLIDES[currentSlide].location })]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 relative z-20",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "px-6 lg:px-16 pt-24 pb-12 max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "md:col-span-7",
							children: [/* @__PURE__ */ jsx(motion.p, {
								initial: "hidden",
								whileInView: "visible",
								viewport: { once: false },
								variants: textVariant,
								className: "text-[0.65rem] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-500 font-medium mb-4",
								children: "Selected Projects"
							}), /* @__PURE__ */ jsx(motion.h1, {
								initial: "hidden",
								whileInView: "visible",
								viewport: { once: false },
								variants: textVariant,
								style: { color: "#800020" },
								className: "font-display text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight",
								children: "A curated collection of refined environments."
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "md:col-span-5 md:pt-12",
							children: /* @__PURE__ */ jsx(motion.p, {
								initial: "hidden",
								whileInView: "visible",
								viewport: { once: false },
								variants: textVariant,
								className: "text-base font-light leading-relaxed text-neutral-500 dark:text-neutral-400",
								children: "Luxury residences, hospitality concepts, retail spaces and developer-led experiences — each project reflects our commitment to material depth, spatial clarity and refined execution."
							})
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "px-6 lg:px-16 mb-12 max-w-7xl mx-auto border-b border-neutral-100 dark:border-neutral-900 pb-4 overflow-x-auto scrollbar-none",
						children: /* @__PURE__ */ jsx("div", {
							style: {
								flexWrap: "nowrap",
								display: "flex"
							},
							className: "flex items-center gap-x-8 whitespace-nowrap min-w-max",
							children: categories.map((cat) => /* @__PURE__ */ jsxs("button", {
								onClick: () => setActiveCategory(cat),
								className: `text-sm tracking-wider uppercase font-light pb-2 transition-all duration-300 relative inline-block ${activeCategory === cat ? "text-black dark:text-white font-normal" : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"}`,
								children: [cat, activeCategory === cat && /* @__PURE__ */ jsx(motion.div, {
									layoutId: "activeBorder",
									className: "absolute bottom-0 left-0 right-0 h-[1px] bg-black dark:bg-white"
								})]
							}, cat))
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "py-4 max-w-7xl mx-auto",
						children: /* @__PURE__ */ jsx(motion.div, {
							layout: true,
							className: "grid md:grid-cols-2 gap-x-12 gap-y-16",
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "popLayout",
								children: filteredItems.map((item) => /* @__PURE__ */ jsx(motion.figure, {
									layout: true,
									initial: {
										opacity: 0,
										y: 60
									},
									whileInView: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										scale: .95
									},
									viewport: {
										once: false,
										margin: "-100px"
									},
									transition: {
										duration: .7,
										ease: [
											.215,
											.61,
											.355,
											1
										]
									},
									className: "group w-full mb-4",
									children: /* @__PURE__ */ jsx("div", {
										className: "overflow-hidden bg-neutral-100 dark:bg-neutral-900 aspect-[4/3] w-full",
										children: /* @__PURE__ */ jsx("img", {
											src: item.img,
											alt: "Portfolio Casa Exotique",
											loading: "lazy",
											className: "w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
										})
									})
								}, item.id))
							})
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "pb-24 border-t border-neutral-100 dark:border-neutral-900 pt-16 mt-20 max-w-7xl mx-auto",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-2xl",
							children: [/* @__PURE__ */ jsx(Eyebrow, { children: "Confidential" }), /* @__PURE__ */ jsx("p", {
								className: "mt-6 text-base font-light leading-relaxed text-neutral-500 dark:text-neutral-400",
								children: "Many of our residences and developer projects are not publicly listed. Detailed portfolios are shared during private consultations."
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
export { ProjectsPage as component };
