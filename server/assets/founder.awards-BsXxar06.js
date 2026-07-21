import { i as SiteLayout, r as Section } from "./SiteLayout-YYKgKg6O.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/awards-banner.jpg
var awards_banner_default = "/assets/awards-banner-BtHwN2i1.jpg";
//#endregion
//#region src/routes/founder.awards.tsx?tsr-split=component
var awards = [
	{
		title: "Interior Designer of the Year (Asia) 2022",
		body: "Ms. Bhawana Bhatnagar, founder of Casa Exotique, was honored with the prestigious 'Interior Designer of the Year (Asia) 2022' award by WBR Corp, UK Ltd, at the House of Commons, London. Her relentless hard work and innovative vision in revolutionizing the interior decoration segment have earned her recognition beyond borders, making the nation proud.",
		image: "/assets/award1-glsoo-E5.jpg"
	},
	{
		title: "Times Visionary Leaders",
		body: "Bhawana Bhatnagar, a business extraordinaire and virtuoso. Casa Exotique is the aptly named interior design company that can make any living space the pinnacle of luxury and comfort. Having completed the Management Programme in International Business from IIFT, Bhawana has sharpened her skills in International Business Management, Foreign Trade, Overseas Procurement, and Offshore Resource Management.",
		image: "/assets/award2-BEetswTY.jpg"
	},
	{
		title: "Times 40 Under 40 North — 2022",
		body: "Ms. Bhatnagar's efforts were recognized with the eminent Times 40 Under 40 North-2022 for her excellence in interior design — highlighting her remarkable contributions and dedication to revolutionizing the interior decoration industry.",
		image: "/assets/award3-CeQI7S81.jpg"
	},
	{
		title: "Outlook Women Entrepreneur of the Year",
		body: "Success comes to those who work hard, and Bhawana Bhatnagar exemplifies this truth. Her relentless dedication has been honored by Outlook, naming her Women Entrepreneur of the Year.",
		image: "/assets/award4-CsnOGCWr.jpg"
	},
	{
		title: "ASSOCHAM — Outstanding Contribution Interior Design 2021",
		body: "Heartfelt gratitude to ASSOCHAM India for the prestigious felicitation certification — an achievement made all the sweeter by occurring on the auspicious occasion of International Women's Day.",
		image: "/assets/award5-DUh0VdgE.jpg"
	},
	{
		title: "The Times Exemplary Leaders — Outstanding Interior Designer of the Year 2022",
		body: "Recognised among the country's most exemplary leaders for outstanding contributions to interior design.",
		image: "/assets/award6-HGqIfaxU.jpg"
	},
	{
		title: "ET Inspiring Women Leaders — 2023",
		body: "Honored among India's most inspiring women leaders for visionary leadership in luxury interiors.",
		image: "/assets/award7-DcUFiJn2.jpg"
	},
	{
		title: "The CEO Magazine — 2023",
		body: "Featured by The CEO Magazine for transformative leadership in the luxury design industry.",
		image: "/assets/award8-BI1xHYTT.jpg"
	},
	{
		title: "Top 10 Women Leaders in Startups — 2023",
		body: "Listed among the top women leaders building category-defining startups in India.",
		image: "/assets/award9-BNSTc9q-.jpg"
	}
];
function AwardsPage() {
	return /* @__PURE__ */ jsx(SiteLayout, {
		transparentHeader: true,
		children: /* @__PURE__ */ jsx("div", {
			className: "w-full min-h-screen text-white select-none relative z-10",
			style: {
				backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.72), rgba(10, 10, 10, 0.92)), url(${awards_banner_default})`,
				backgroundSize: "cover",
				backgroundPosition: "center top",
				backgroundAttachment: "fixed",
				backgroundRepeat: "no-repeat"
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "w-full",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-full px-6 pt-36 pb-16 md:px-16 md:pt-44 border-b border-neutral-900/30",
					children: /* @__PURE__ */ jsxs("div", {
						className: "max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-[0.65rem] uppercase tracking-[0.25em] text-accent font-semibold mb-3",
							children: "Media · Awards"
						}), /* @__PURE__ */ jsxs("h1", {
							className: "font-display text-4xl md:text-5xl text-white font-light leading-tight",
							children: ["Our awards and ", /* @__PURE__ */ jsx("em", {
								className: "text-accent not-italic font-normal",
								children: "achievements"
							})]
						})] }), /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", {
							className: "text-neutral-300 text-sm md:text-base leading-relaxed font-light md:pl-8 md:border-l border-neutral-800/60",
							children: "Honored as Interior Designer of the Year (Asia) by House of Commons, London and Times Visionary Leaders 2022, Casa Exotique has redefined luxury interiors."
						}) })]
					})
				}), /* @__PURE__ */ jsx(Section, {
					className: "py-16 md:py-24 !bg-transparent",
					children: /* @__PURE__ */ jsx("div", {
						className: "max-w-5xl mx-auto space-y-16 px-4",
						children: awards.map((a) => /* @__PURE__ */ jsxs("article", {
							className: "border-b border-neutral-800/40 pb-16 last:border-0 group grid grid-cols-1 md:grid-cols-12 gap-8 items-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "md:col-span-4 overflow-hidden rounded border border-neutral-800/60 shadow-2xl bg-neutral-900/50 w-full h-auto flex items-center justify-center p-2 backdrop-blur-sm",
								children: /* @__PURE__ */ jsx("img", {
									src: a.image,
									alt: a.title,
									className: "w-full h-auto max-h-[260px] object-contain transition-all duration-500 ease-out"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "md:col-span-8",
								children: [
									/* @__PURE__ */ jsx("p", {
										className: "text-[0.65rem] uppercase tracking-[0.25em] text-accent font-semibold",
										children: "Award"
									}),
									/* @__PURE__ */ jsx("h2", {
										className: "font-display text-xl md:text-2xl mt-2 text-white group-hover:text-accent transition-colors duration-300",
										children: a.title
									}),
									/* @__PURE__ */ jsx("div", { className: "w-8 h-[2px] bg-accent/60 my-4 group-hover:w-16 transition-all duration-300" }),
									/* @__PURE__ */ jsx("p", {
										className: "text-neutral-400 leading-relaxed font-light text-sm md:text-base",
										children: a.body
									})
								]
							})]
						}, a.title))
					})
				})]
			})
		})
	});
}
//#endregion
export { AwardsPage as component };
