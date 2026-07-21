import { i as SiteLayout, r as Section } from "./SiteLayout-YYKgKg6O.js";
import { Link, Outlet, useLocation } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/founder.jpg
var founder_default = "/assets/founder-CWmBaKTJ.jpg";
//#endregion
//#region src/routes/founder.tsx?tsr-split=component
function FounderPage() {
	if (useLocation().pathname !== "/founder") return /* @__PURE__ */ jsx(Outlet, {});
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "relative w-full min-h-screen bg-black overflow-hidden py-16 lg:py-24",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "absolute inset-0 z-0 bg-cover bg-center opacity-[0.16] mix-blend-luminosity pointer-events-none scale-105",
				style: { backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80')` }
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-black via-black/85 to-neutral-900/40 z-0 pointer-events-none" }),
			/* @__PURE__ */ jsx("div", {
				className: "relative z-10 max-w-7xl mx-auto px-6 lg:px-12",
				children: /* @__PURE__ */ jsxs(Section, {
					className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-center mt-12 lg:mt-20",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 group relative",
						children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-1.5 bg-gradient-to-b from-accent/20 to-transparent rounded-lg blur-2xl opacity-70 group-hover:opacity-100 transition duration-1000 pointer-events-none" }), /* @__PURE__ */ jsxs("figure", {
							className: "relative bg-neutral-900/50 p-3 rounded-lg border border-neutral-800/40 backdrop-blur-sm",
							children: [/* @__PURE__ */ jsx("div", {
								className: "overflow-hidden rounded-md",
								children: /* @__PURE__ */ jsx("img", {
									src: founder_default,
									alt: "Bhawana Bhatnagar",
									className: "w-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
								})
							}), /* @__PURE__ */ jsxs("figcaption", {
								className: "mt-5 flex justify-between items-baseline text-sm px-1",
								children: [/* @__PURE__ */ jsx("span", {
									className: "font-display text-xl text-neutral-100 tracking-wide",
									children: "Bhawana Bhatnagar"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[0.62rem] uppercase tracking-[0.25em] text-accent font-medium",
									children: "— Founder & CD"
								})]
							})]
						})]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 space-y-8",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[0.68rem] uppercase tracking-[0.3em] text-accent font-semibold block",
								children: "— Founder Profile"
							}),
							/* @__PURE__ */ jsxs("h1", {
								className: "font-display text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1]",
								children: [
									"Design as ",
									/* @__PURE__ */ jsx("em", {
										className: "text-accent not-italic font-normal",
										children: "atmosphere"
									}),
									" — and the invisible relationship between people and space."
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-6 text-base lg:text-lg leading-relaxed text-neutral-400 font-light",
								children: [
									/* @__PURE__ */ jsx("p", { children: "For Bhawana Bhatnagar, design is not simply about aesthetics..." }),
									/* @__PURE__ */ jsx("p", { children: "Under her leadership, Casa Exotique has developed into a luxury design-build studio recognized highly personalized environments that balance architectural sophistication with execution excellence." }),
									/* @__PURE__ */ jsx("p", { children: "Rather than following trends, Bhawana focuses on creating environments with emotional performance spaces that continue to feel relevant, calm, and deeply human over time." })
								]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "pt-4",
								children: /* @__PURE__ */ jsx(Link, {
									to: "/contact",
									className: "inline-flex items-center justify-center px-8 py-5 bg-white text-black font-medium text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent hover:text-white transition-all duration-300 active:scale-95 shadow-xl",
									children: "Work with the studio"
								})
							})
						]
					})]
				})
			})
		]
	}) });
}
//#endregion
export { FounderPage as component };
