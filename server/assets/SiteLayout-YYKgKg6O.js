import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt, FaPinterestP, FaRegEnvelope, FaYoutube } from "react-icons/fa";
//#region src/components/SiteLayout.tsx
var NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "Studio"
	},
	{
		to: "/founder",
		label: "Founder",
		submenu: [{
			to: "/founder/news",
			label: "News"
		}, {
			to: "/founder/awards",
			label: "Awards"
		}]
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Portfolio"
	},
	{
		to: "/faq",
		label: "FAQ"
	},
	{
		to: "/contact",
		label: "Contact",
		submenu: [{
			to: "/careers",
			label: "Careers"
		}]
	}
];
function SiteLayout({ children, transparentHeader: customTransparentHeader }) {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const isTransparentRoute = [
		"/",
		"/faq",
		"/contact",
		"/careers",
		"/founder",
		"/founder/news",
		"/founder/awards"
	].includes(location.pathname);
	const transparentHeader = customTransparentHeader ?? isTransparentRoute;
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY && currentScrollY > 150) setShowHeader(false);
			else setShowHeader(true);
			setLastScrollY(currentScrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);
	useEffect(() => {
		window.document.documentElement.classList.remove("dark");
		localStorage.setItem("theme", "light");
	}, []);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-white dark:bg-black text-black dark:text-white selection:bg-accent/30 relative transition-colors duration-500",
		children: [
			/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
        header nav a, 
        header nav a *, 
        header nav div,
        header nav button,
        .active {
          outline: none !important;
          outline-width: 0 !important;
          box-shadow: none !important;
          border: none !important;
          text-decoration: none !important;
        }
        
        /* Absolute Override to Force Dead-Center & Bright White Icons */
        .social-box {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: relative !important;
        }
        
        .social-box svg {
          display: block !important;
          position: absolute !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          width: 20px !important;
          height: 20px !important;
          margin: 0 !important;
          padding: 0 !important;
          box-sizing: border-box !important;
          color: #ffffff !important;
          fill: #ffffff !important;
        }

        /* Continuous Loop Marquee Animation */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex !important;
          width: max-content;
          animation: marquee 25s linear infinite;
        }

        ${open ? `
          body { overflow: hidden !important; }
          .force-mobile-link {
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
            color: #6B2D2D !important;
            -webkit-text-fill-color: #6B2D2D !important;
          }
          .dark .force-mobile-link {
            color: #E2A0A0 !important;
            -webkit-text-fill-color: #E2A0A0 !important;
          }
        ` : ""}
      ` } }),
			/* @__PURE__ */ jsxs("header", {
				style: {
					position: "fixed",
					top: 0,
					left: 0,
					width: "100%",
					transform: showHeader ? "translateY(0)" : "translateY(-100%)",
					transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease",
					background: transparentHeader ? "linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)" : "undefined"
				},
				className: `z-40 w-full max-w-full ${open ? "bg-white dark:bg-neutral-950 text-black dark:text-white" : transparentHeader ? "border-none text-white" : "backdrop-blur bg-white/90 dark:bg-black/90 border-b border-neutral-200 dark:border-neutral-800 text-black dark:text-white"}`,
				children: [/* @__PURE__ */ jsxs("div", {
					className: "mx-auto max-w-[1400px] px-6 lg:px-12 h-20 flex items-center gap-16 relative",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "flex items-center shrink-0",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ jsx("img", {
								src: "/src/assets/casa-logo-icon.png",
								alt: "Casa Exotique",
								className: `h-10 w-auto transition-all ${open ? "dark:invert-0 invert" : transparentHeader ? "" : "dark:invert-0"}`
							})
						}),
						/* @__PURE__ */ jsx("nav", {
							className: "hidden lg:flex items-center gap-9",
							children: NAV.map((n) => {
								if ("submenu" in n && n.submenu) return /* @__PURE__ */ jsxs("div", {
									className: "relative group/link py-2",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: n.to,
										activeOptions: { exact: false },
										className: `text-[0.78rem] uppercase tracking-[0.2em] hover:text-accent flex items-center gap-2 transition-colors border-none outline-none focus:outline-none focus:ring-0 ${transparentHeader ? "text-white" : "text-neutral-800 dark:text-white"}`,
										activeProps: { className: "text-accent border-none outline-none" },
										children: [n.label, /* @__PURE__ */ jsx("svg", {
											width: "10",
											height: "6",
											viewBox: "0 0 10 6",
											fill: "none",
											xmlns: "http://www.w3.org/2000/svg",
											className: "transition-transform duration-300 group-hover/link:-rotate-180",
											children: /* @__PURE__ */ jsx("path", {
												d: "M1 1L5 5L9 1",
												stroke: "currentColor",
												strokeWidth: "2",
												strokeLinecap: "round",
												strokeLinejoin: "round"
											})
										})]
									}), /* @__PURE__ */ jsx("div", {
										className: "absolute left-1/2 -translate-x-1/2 top-full hidden group-hover/link:flex flex-col min-w-[140px] pt-4 z-50",
										children: /* @__PURE__ */ jsx("div", {
											className: "flex flex-col gap-1 bg-white/95 dark:bg-neutral-950/95 border border-neutral-200 dark:border-neutral-800 p-2 rounded shadow-xl",
											children: n.submenu.map((sub) => /* @__PURE__ */ jsx(Link, {
												to: sub.to,
												className: "block text-center text-[0.75rem] uppercase tracking-[0.15em] text-neutral-700 dark:text-neutral-200 hover:text-accent py-2 transition-colors border-none outline-none focus:outline-none",
												activeProps: { className: "text-accent border-none outline-none" },
												children: sub.label
											}, sub.to))
										})
									})]
								}, n.label);
								return /* @__PURE__ */ jsx(Link, {
									to: n.to,
									activeOptions: { exact: true },
									className: `text-[0.78rem] uppercase tracking-[0.2em] relative hover:text-accent font-medium transition-colors border-none outline-none focus:outline-none focus:ring-0 ${transparentHeader ? "text-white" : "text-neutral-800 dark:text-white"}`,
									activeProps: { className: "text-accent border-none outline-none" },
									children: n.label
								}, n.to);
							})
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: `hidden lg:inline-flex items-center ml-auto text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent hover:text-accent pb-0.5 transition-colors ${transparentHeader ? "text-white" : "text-black dark:text-white"}`,
							children: "Begin Your Project"
						}),
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Menu",
							className: `lg:hidden z-[60] relative p-2 ml-auto ${open ? "text-neutral-800 dark:text-neutral-200" : "text-white"}`,
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ jsxs("span", {
								className: "block relative w-6 h-6 scale-125",
								children: [/* @__PURE__ */ jsx("span", { className: "block absolute top-3 left-0 w-6 h-0.5 bg-black dark:bg-white rotate-45 transition-transform" }), /* @__PURE__ */ jsx("span", { className: "block absolute top-3 left-0 w-6 h-0.5 bg-black dark:bg-white -rotate-45 transition-transform" })]
							}) : /* @__PURE__ */ jsxs(Fragment, { children: [
								/* @__PURE__ */ jsx("span", { className: "block w-7 h-px mb-1.5 bg-white" }),
								/* @__PURE__ */ jsx("span", { className: "block w-7 h-px mb-1.5 bg-white" }),
								/* @__PURE__ */ jsx("span", { className: "block w-5 h-px ml-auto bg-white" })
							] })
						})
					]
				}), open && /* @__PURE__ */ jsx("div", {
					className: "lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-white dark:bg-neutral-950 z-50 flex flex-col items-center justify-center px-6",
					children: /* @__PURE__ */ jsx("nav", {
						className: "flex flex-col items-center justify-center gap-7 text-center w-full max-w-lg",
						children: NAV.map((n) => {
							if ("submenu" in n && n.submenu) return /* @__PURE__ */ jsxs("div", {
								className: "w-full flex flex-col items-center gap-2",
								children: [/* @__PURE__ */ jsx(Link, {
									to: n.to,
									onClick: () => setOpen(false),
									className: "force-mobile-link text-3xl sm:text-4xl uppercase tracking-normal hover:opacity-75 transition-opacity",
									children: n.label
								}), /* @__PURE__ */ jsx("div", {
									className: "flex flex-col items-center gap-1.5 py-1",
									children: n.submenu.map((sub) => /* @__PURE__ */ jsx(Link, {
										to: sub.to,
										onClick: () => setOpen(false),
										className: "force-mobile-sublink text-base sm:text-lg uppercase tracking-wide hover:opacity-75 transition-opacity",
										children: sub.label
									}, sub.to))
								})]
							}, n.label);
							return /* @__PURE__ */ jsx(Link, {
								to: n.to,
								onClick: () => setOpen(false),
								className: "force-mobile-link text-3xl sm:text-4xl uppercase tracking-normal hover:opacity-75 transition-opacity",
								children: n.label
							}, n.to);
						})
					})
				})]
			}),
			/* @__PURE__ */ jsx("main", {
				className: `flex-1 w-full max-w-full overflow-x-hidden relative transition-colors duration-500 ${transparentHeader ? "pt-0" : "pt-20"}`,
				children
			}),
			/* @__PURE__ */ jsx("footer", {
				className: "bg-white dark:bg-[#0a0a0a] text-neutral-800 dark:text-neutral-200 pt-20 pb-6 border-t border-neutral-100 dark:border-neutral-900 font-sans tracking-wide transition-colors duration-500 w-full max-w-full relative overflow-hidden",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-[1400px] mx-auto px-6 lg:px-12",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col md:flex-row justify-between items-start gap-12 pb-16 border-b border-neutral-100 dark:border-neutral-900 w-full",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "w-full md:w-[28%] space-y-6",
									children: /* @__PURE__ */ jsx("h4", {
										className: "text-xs uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed",
										children: "a luxury architecture and design-build studio creating bespoke residences, hospitality environments, and developer-led experiences across india."
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "w-full md:w-[36%] flex flex-col items-center justify-center text-center space-y-3 self-start",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-4 justify-center w-full",
										children: [/* @__PURE__ */ jsx("img", {
											src: "/src/assets/casa-logo-icon.png",
											alt: "Casa Logo",
											className: "w-10 h-10 object-contain shrink-0 transition-all dark:invert-0 light:invert"
										}), /* @__PURE__ */ jsx("div", {
											className: "text-2xl font-serif tracking-[0.25em] font-light text-neutral-800 dark:text-white whitespace-nowrap",
											children: "CASA EXOTIQUE"
										})]
									}), /* @__PURE__ */ jsx("span", {
										className: "text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-500 block pl-2 whitespace-nowrap",
										children: "LUXURY INTERIOR DESIGN STUDIO"
									})]
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "w-full md:w-[36%] flex flex-row justify-end gap-12 md:gap-16 text-right",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "space-y-4 min-w-[100px]",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "text-xs uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-neutral-400 whitespace-nowrap",
											children: "NAVIGATE"
										}), /* @__PURE__ */ jsxs("ul", {
											className: "space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light",
											children: [
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/about",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Studio"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/founder",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Founder"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/contact",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Contact Us"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/careers",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Careers"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/services",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Services"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/projects",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Portfolio"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/faq",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "FAQ"
												}) })
											]
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "space-y-4 min-w-[140px]",
										children: [/* @__PURE__ */ jsx("h4", {
											className: "text-xs uppercase tracking-[0.2em] font-medium text-neutral-500 dark:text-neutral-400 whitespace-nowrap",
											children: "PRACTICES"
										}), /* @__PURE__ */ jsxs("ul", {
											className: "space-y-2 text-xs text-neutral-600 dark:text-neutral-400 font-light",
											children: [
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/services/iconic-architecture",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Architectural"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/services/interior-design",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Interior"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/services/hospitality-design",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Hospitality"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/services/luxury-retail",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Retail"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/services/developer-solutions",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Developer Solutions"
												}) }),
												/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
													to: "/services/turnkey-execution",
													className: "hover:text-neutral-900 dark:hover:text-white transition-colors",
													children: "Turnkey Execution"
												}) })
											]
										})]
									})]
								})
							]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "grid grid-cols-1 md:grid-cols-12 gap-8 py-16 items-start text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-light border-b border-neutral-100 dark:border-neutral-900 w-full",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "md:col-span-4 space-y-4",
								children: [
									/* @__PURE__ */ jsx("h5", {
										className: "font-medium text-neutral-800 dark:text-white uppercase tracking-wider text-[11px]",
										children: "Studio"
									}),
									/* @__PURE__ */ jsxs("p", {
										className: "max-w-xs",
										children: [
											"Plot no.110, Pace city-1, ",
											/* @__PURE__ */ jsx("br", {}),
											"near Hero Honda Chowk, sector-37 ",
											/* @__PURE__ */ jsx("br", {}),
											"Gurugram, Haryana 122001, India"
										]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "space-y-2 pt-1",
										children: [/* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx(FaPhoneAlt, { className: "text-[#6B2D2D] text-sm" }), /* @__PURE__ */ jsx("span", { children: "+91 9999766655" })]
										}), /* @__PURE__ */ jsxs("div", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ jsx(FaRegEnvelope, { className: "text-[#6B2D2D] text-sm" }), /* @__PURE__ */ jsx("a", {
												href: "mailto:info@casaexotique.com",
												className: "hover:underline",
												children: "info@casaexotique.com"
											})]
										})]
									})
								]
							}), /* @__PURE__ */ jsx("div", {
								className: "md:col-span-8 flex justify-start md:justify-end gap-3 pt-4 md:pt-0",
								children: [
									{
										icon: /* @__PURE__ */ jsx(FaFacebookF, {}),
										url: "https://www.facebook.com/Casaexotique2/"
									},
									{
										icon: /* @__PURE__ */ jsx(FaLinkedinIn, {}),
										url: "https://www.linkedin.com/company/casa-exotique/posts/?feedView=all"
									},
									{
										icon: /* @__PURE__ */ jsx(FaPinterestP, {}),
										url: "https://www.pinterest.com/casaexotique/"
									},
									{
										icon: /* @__PURE__ */ jsx(FaYoutube, {}),
										url: "https://www.youtube.com/@casaexotique8198"
									},
									{
										icon: /* @__PURE__ */ jsx(FaInstagram, {}),
										url: "https://www.instagram.com/casa_exotique/"
									}
								].map((social, i) => /* @__PURE__ */ jsx("a", {
									href: social.url,
									style: {
										width: "46px",
										height: "46px",
										backgroundColor: "#6B2D2D",
										borderRadius: "10px"
									},
									className: "social-box hover:bg-[#522222] transition-all duration-300 shadow-sm",
									children: social.icon
								}, i))
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "w-full overflow-hidden pointer-events-none select-none py-4 relative bg-transparent",
							children: /* @__PURE__ */ jsxs("div", {
								className: "animate-marquee whitespace-nowrap flex gap-32",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-[11vw] font-serif leading-none tracking-[0.15em] uppercase font-light text-[#6B2D2D]/5 dark:text-white/5",
									children: "CASA EXOTIQUE"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[11vw] font-serif leading-none tracking-[0.15em] uppercase font-light text-[#6B2D2D]/5 dark:text-white/5",
									children: "CASA EXOTIQUE"
								})]
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col sm:flex-row justify-between items-center pt-6 text-[11px] tracking-widest uppercase text-neutral-400 dark:text-neutral-500 font-light gap-4 border-t border-neutral-100 dark:border-neutral-900/50",
							children: [/* @__PURE__ */ jsx("div", { children: "© 2026 CASA EXOTIQUE. ALL RIGHTS RESERVED." }), /* @__PURE__ */ jsx("div", { children: "DESIGNED IN GURGAON" })]
						})
					]
				})
			})
		]
	});
}
function Section({ children, className = "" }) {
	return /* @__PURE__ */ jsx("section", {
		className: `mx-auto w-full max-w-[1400px] px-6 lg:px-12 ${className}`,
		children
	});
}
function Eyebrow({ children }) {
	return /* @__PURE__ */ jsx("p", {
		className: "eyebrow flex items-center gap-3 text-neutral-600 dark:text-neutral-400",
		children
	});
}
function PageHero({ eyebrow, title, intro }) {
	return /* @__PURE__ */ jsxs(Section, {
		className: "pt-36 pb-16 lg:pt-48 lg:pb-24 grid lg:grid-cols-12 gap-12 items-end relative z-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "lg:col-span-7",
			children: [/* @__PURE__ */ jsx(Eyebrow, { children: eyebrow }), /* @__PURE__ */ jsx("h1", {
				className: "mt-6 font-display text-5xl lg:text-7xl leading-[1.02] text-neutral-900 dark:text-white",
				children: title
			})]
		}), intro && /* @__PURE__ */ jsx("div", {
			className: "lg:col-span-5",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-lg leading-relaxed text-neutral-600 dark:text-neutral-400",
				children: intro
			})
		})]
	});
}
//#endregion
export { SiteLayout as i, PageHero as n, Section as r, Eyebrow as t };
