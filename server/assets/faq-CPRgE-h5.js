import { t as faqs } from "./faq-CMxTW_al.js";
import { i as SiteLayout, r as Section } from "./SiteLayout-YYKgKg6O.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/stone-dark.jpg
var stone_dark_default = "/assets/stone-dark-vnbMlsp4.jpg";
//#endregion
//#region src/assets/faq-banner.jpg
var faq_banner_default = "/assets/faq-banner-Bf9SiVqS.jpg";
//#endregion
//#region src/routes/faq.tsx?tsr-split=component
function FaqPage() {
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "relative w-full min-h-screen bg-black overflow-hidden",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "fixed inset-0 top-0 z-0 opacity-[0.12] mix-blend-screen pointer-events-none w-full h-full",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: stone_dark_default,
					alt: "Casa Exotique Luxury Stone Texture",
					className: "w-full h-full object-cover object-center"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" }),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000_90%)]" })
			]
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative z-10 w-full -mt-24 pt-24",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "relative w-full min-h-[50vh] flex items-center overflow-hidden py-20 lg:py-32 px-4 sm:px-8 lg:px-16 border-b border-neutral-900",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 z-0 pointer-events-none",
						children: [
							/* @__PURE__ */ jsx("img", {
								src: faq_banner_default,
								alt: "FAQ Banner Background",
								className: "w-full h-full object-cover object-center opacity-30"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" }),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" })
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 space-y-4",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", { className: "w-6 h-[1px] bg-accent/60 inline-block" }), /* @__PURE__ */ jsx("p", {
									className: "text-[0.68rem] uppercase tracking-[0.3em] text-neutral-400 font-medium",
									children: "Journal · FAQ"
								})]
							}), /* @__PURE__ */ jsx("h1", {
								className: "font-display text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight",
								children: "Frequently asked questions."
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "lg:col-span-5 lg:pl-12",
							children: /* @__PURE__ */ jsx("p", {
								className: "text-sm sm:text-base text-neutral-300 font-light leading-relaxed max-w-md",
								children: "A closer look at how Casa Exotique works — from first conversation to final reveal."
							})
						})]
					})]
				}),
				/* @__PURE__ */ jsx(Section, { children: /* @__PURE__ */ jsx("div", {
					className: "border-t border-neutral-800/80 mt-12",
					children: faqs.map((f, i) => /* @__PURE__ */ jsxs("details", {
						className: "group border-b border-neutral-800/80 py-8 [&_summary::-webkit-details-marker]:hidden",
						children: [/* @__PURE__ */ jsxs("summary", {
							className: "flex justify-between items-start gap-8 cursor-pointer list-none select-none",
							children: [/* @__PURE__ */ jsx("h2", {
								className: "font-display text-2xl lg:text-3xl pr-6 text-neutral-100 group-hover:text-accent transition-colors duration-300",
								children: f.q
							}), /* @__PURE__ */ jsx("span", {
								className: "font-display text-3xl text-accent transition-transform duration-300 group-open:rotate-45 shrink-0",
								children: "+"
							})]
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-3xl text-base lg:text-lg leading-relaxed text-neutral-400 font-light transition-all duration-300",
							children: f.a
						})]
					}, i))
				}) }),
				/* @__PURE__ */ jsx(Section, {
					className: "mt-32 mb-10",
					children: /* @__PURE__ */ jsxs("div", {
						className: "bg-neutral-900/60 backdrop-blur-md border border-neutral-800 p-10 lg:p-16 flex flex-wrap items-end justify-between gap-8",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-3xl lg:text-5xl max-w-2xl text-white",
							children: "Have a project in mind?"
						}), /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "inline-flex items-center px-7 py-4 border border-accent/60 text-[0.72rem] uppercase tracking-[0.28em] text-white hover:border-accent hover:text-accent transition-colors duration-300",
							children: "Begin Your Project"
						})]
					})
				})
			]
		})]
	}) });
}
//#endregion
export { FaqPage as component };
