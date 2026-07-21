import { t as port_ban1_default } from "./port-ban1-D3Abv4q0.js";
import { t as faqs } from "./faq-CMxTW_al.js";
import { i as SiteLayout, n as PageHero, r as Section, t as Eyebrow } from "./SiteLayout-YYKgKg6O.js";
import { useEffect, useRef, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CheckCircle2, Upload } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-C3V3PRr3.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Casa Exotique | Luxury Interior Designers & Turnkey Design Build Company Gurgaon" },
			{
				name: "description",
				content: "Casa Exotique is a Gurgaon-based luxury architecture and interior design-build studio specializing in bespoke residences, hospitality spaces, luxury retail, developer experience centers, and turnkey execution across India."
			},
			{
				name: "author",
				content: "Casa Exotique"
			},
			{
				property: "og:site_name",
				content: "Casa Exotique"
			},
			{
				property: "og:title",
				content: "Casa Exotique | Luxury Interior Designers & Turnkey Design Build Company Gurgaon"
			},
			{
				property: "og:description",
				content: "Casa Exotique is a Gurgaon-based luxury architecture and interior design-build studio specializing in bespoke residences, hospitality spaces, luxury retail, developer experience centers, and turnkey execution across India."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: "Casa Exotique | Luxury Interior Designers & Turnkey Design Build Company Gurgaon"
			},
			{
				name: "twitter:description",
				content: "Casa Exotique is a Gurgaon-based luxury architecture and interior design-build studio specializing in bespoke residences, hospitality spaces, luxury retail, developer experience centers, and turnkey execution across India."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c0c4b882-4197-4d72-b744-34341a6e503c/id-preview-9ebef79d--7a090436-8011-45da-b97d-9da82cc963d9.lovable.app-1781502420335.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/c0c4b882-4197-4d72-b744-34341a6e503c/id-preview-9ebef79d--7a090436-8011-45da-b97d-9da82cc963d9.lovable.app-1781502420335.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$11 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			"/",
			"/about",
			"/founder",
			"/services",
			"/projects",
			"/faq",
			"/contact"
		].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>monthly</changefreq></url>`),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/projects.tsx
var $$splitComponentImporter$4 = () => import("./projects-CfYLOU5i.js");
var Route$10 = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Selected Projects — Luxury Residences, Hospitality & Retail | Casa Exotique" },
			{
				name: "description",
				content: "A curated selection of luxury residences, hospitality environments, retail spaces and developer-led experiences designed and executed by Casa Exotique."
			},
			{
				property: "og:title",
				content: "Selected Projects — Casa Exotique"
			},
			{
				property: "og:description",
				content: "Material depth, spatial clarity and refined execution across India."
			},
			{
				property: "og:url",
				content: "/projects"
			},
			{
				property: "og:image",
				content: port_ban1_default
			}
		],
		links: [{
			rel: "canonical",
			href: "/projects"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/founder.tsx
var $$splitComponentImporter$3 = () => import("./founder-C-zNBVvs.js");
var Route$9 = createFileRoute("/founder")({
	head: () => ({ meta: [{ title: "Bhawana Bhatnagar — Founder & Creative Director, Casa Exotique" }, {
		name: "description",
		content: "Bhawana Bhatnagar is the founder and creative director of Casa Exotique."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/faq.tsx
var $$splitComponentImporter$2 = () => import("./faq-CPRgE-h5.js");
var Route$8 = createFileRoute("/faq")({
	head: () => ({
		meta: [
			{ title: "FAQ — Luxury Interior Designers Gurgaon | Casa Exotique" },
			{
				name: "description",
				content: "Answers to common questions about Casa Exotique's luxury design-build process, turnkey execution, hospitality and developer work."
			},
			{
				property: "og:title",
				content: "Frequently Asked Questions — Casa Exotique"
			},
			{
				property: "og:description",
				content: "About our process, turnkey execution and hospitality work."
			},
			{
				property: "og:url",
				content: "/faq"
			}
		],
		links: [{
			rel: "canonical",
			href: "/faq"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				mainEntity: faqs.map((f) => ({
					"@type": "Question",
					name: f.q,
					acceptedAnswer: {
						"@type": "Answer",
						text: f.a
					}
				}))
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/assets/contact-banner.jpg
var contact_banner_default = "/assets/contact-banner-Gyv4RVnj.jpg";
//#endregion
//#region src/routes/contact.tsx
var Route$7 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Casa Exotique — Luxury Design-Build Studio, Gurgaon" },
			{
				name: "description",
				content: "Begin your luxury residential, hospitality, retail or developer project with Casa Exotique. Schedule a design consultation with the Gurgaon studio."
			},
			{
				property: "og:title",
				content: "Begin Your Project — Casa Exotique"
			},
			{
				property: "og:description",
				content: "Architecture, design and execution under one integrated vision."
			},
			{
				property: "og:url",
				content: "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: "/contact"
		}]
	}),
	component: ContactPage
});
function ContactPage() {
	const [sent, setSent] = useState(false);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } }), /* @__PURE__ */ jsxs("div", {
		className: "w-full min-h-screen bg-white text-neutral-900 flex flex-col overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "w-full h-screen relative overflow-hidden bg-neutral-950 flex items-center justify-center",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: contact_banner_default,
						alt: "Casa Exotique Studio Interior Banner",
						className: "w-full h-full object-cover absolute inset-0"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40 pointer-events-none" }),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative z-10 text-center px-6 max-w-5xl animate-text-reveal",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "font-display text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-none select-none",
							style: { textShadow: "0px 4px 20px rgba(0, 0, 0, 0.6)" },
							children: "Let's Start Your Journey"
						}), /* @__PURE__ */ jsx("div", { className: "mt-6 w-16 h-[2px] bg-white/60 mx-auto shadow-sm" })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-[0.65rem] uppercase tracking-[0.4em] font-semibold pointer-events-none animate-bounce",
						children: "Scroll Down"
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "w-full bg-white relative z-10 px-6 lg:px-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "pt-28 pb-12 max-w-5xl mx-auto animate-text-reveal delay-1",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "text-[0.7rem] uppercase tracking-[0.35em] text-[#9e2a2b] font-bold block mb-5",
							children: "— Contact"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "font-display text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight",
							children: "Begin your project."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-8 text-lg lg:text-xl text-neutral-700 font-normal leading-relaxed max-w-3xl",
							children: "Whether you are developing a luxury residence, hospitality concept, retail environment or large-scale turnkey project — Casa Exotique brings architecture, design and execution together under one vision."
						})
					]
				}), /* @__PURE__ */ jsxs(Section, {
					className: "max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-28 border-b border-neutral-100 animate-text-reveal delay-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 space-y-12 pr-4",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block mb-4",
								children: "— Studio"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xl text-[#9e2a2b] mt-1 flex-shrink-0",
									children: "📍"
								}), /* @__PURE__ */ jsxs("p", {
									className: "font-display text-xl lg:text-2xl leading-relaxed text-neutral-900 font-medium",
									children: [
										"Design and Experience Center",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsxs("span", {
											className: "text-neutral-600 text-lg font-normal",
											children: [
												"Plot No.110, Pace City 1, Sector 37, Gurgaon",
												/* @__PURE__ */ jsx("br", {}),
												"Haryana, India"
											]
										})
									]
								})]
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block mb-4",
									children: "— Enquiries"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "space-y-3",
									children: [/* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-lg text-[#9e2a2b] flex-shrink-0",
											children: "📞"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-2xl text-neutral-900 font-medium tracking-tight",
											children: "+91 9999766655"
										})]
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ jsx("span", {
											className: "text-lg text-[#9e2a2b] flex-shrink-0",
											children: "✉️"
										}), /* @__PURE__ */ jsx("p", {
											className: "text-xl text-neutral-700 font-medium",
											children: "info@casaexotique.com"
										})]
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "text-xs text-neutral-500 mt-4 tracking-wide font-normal pl-8",
									children: "For new projects, collaborations & press"
								})
							] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
								className: "text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block mb-3",
								children: "— Hours"
							}), /* @__PURE__ */ jsxs("p", {
								className: "text-base text-neutral-600 leading-relaxed font-medium pl-8",
								children: [
									"Monday — Saturday",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "text-sm text-neutral-800 font-semibold block mt-1",
										children: "9:00 AM — 5:00 PM"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "text-xs tracking-wider text-neutral-400 uppercase font-bold block mt-1",
										children: "By appointment only"
									})
								]
							})] })
						]
					}), /* @__PURE__ */ jsx("form", {
						onSubmit: (e) => {
							e.preventDefault();
							setSent(true);
						},
						className: "lg:col-span-7 space-y-8 border-t border-neutral-200 lg:border-t-0 lg:pt-0 pt-10",
						children: sent ? /* @__PURE__ */ jsxs("div", {
							className: "py-20 text-center bg-neutral-50 rounded-lg",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-[0.7rem] uppercase tracking-[0.32em] text-[#9e2a2b] font-bold block",
									children: "— Thank you"
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-6 font-display text-3xl text-neutral-900 font-semibold",
									children: "We've received your enquiry."
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-neutral-600 text-sm font-normal",
									children: "A member of our design studio will be in touch shortly."
								})
							]
						}) : /* @__PURE__ */ jsxs(Fragment, { children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid sm:grid-cols-2 gap-10",
								children: [
									/* @__PURE__ */ jsx(Field, {
										label: "Your Name",
										name: "name"
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Email",
										name: "email",
										type: "email"
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "Phone",
										name: "phone"
									}),
									/* @__PURE__ */ jsx(Field, {
										label: "City",
										name: "city"
									})
								]
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Project Type",
								name: "type",
								placeholder: "Residence · Hospitality · Retail · Developer"
							}),
							/* @__PURE__ */ jsx(Field, {
								label: "Tell us about your project",
								name: "message",
								textarea: true
							}),
							/* @__PURE__ */ jsx("div", {
								className: "pt-4",
								children: /* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "inline-flex items-center justify-center w-full lg:w-auto px-10 py-5 bg-[#800020] text-white hover:bg-[#5c0017] transition-all duration-300 active:scale-95 text-[0.75rem] uppercase tracking-[0.3em] font-bold mt-4 shadow-md rounded-none",
									children: "Schedule a Design Consultation"
								})
							})
						] })
					})]
				})]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "w-full h-[55vh] min-h-[450px] relative bg-neutral-100 border-t border-neutral-100 overflow-hidden shadow-inner animate-text-reveal delay-3",
				children: /* @__PURE__ */ jsx("iframe", {
					src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.2911563734992!2d77.00915147549385!3d28.440638275770056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d55b1d4b8d%3A0xf79816a4f0c34423!2sCasa%20Exotique%20-%20Best%20Home%20Interior%20Designer%20in%20Gurugram!5e0!3m2!1sen!2sin!4v1783495242424!5m2!1sen!2sin",
					className: "w-full h-full border-0 block",
					allowFullScreen: true,
					loading: "lazy",
					referrerPolicy: "strict-origin-when-cross-origin",
					title: "Casa Exotique Gurugram Location Map"
				})
			})
		]
	})] });
}
function Field({ label, name, type = "text", textarea, placeholder }) {
	const cls = "w-full bg-transparent border-b border-neutral-300 focus:border-[#9e2a2b] outline-none py-3 text-base text-neutral-900 font-medium placeholder:text-neutral-400 transition-all duration-300";
	return /* @__PURE__ */ jsxs("div", {
		className: "block relative group",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-[0.65rem] uppercase tracking-[0.25em] text-neutral-500 font-bold block transition-colors group-focus-within:text-[#9e2a2b]",
			children: label
		}), textarea ? /* @__PURE__ */ jsx("textarea", {
			name,
			rows: 4,
			placeholder,
			className: `${cls} resize-none mt-2`
		}) : /* @__PURE__ */ jsx("input", {
			name,
			type,
			placeholder,
			className: `${cls} mt-2`
		})]
	});
}
//#endregion
//#region src/assets/career1.jpg
var career1_default = "/assets/career1-BjKHSdos.jpg";
//#endregion
//#region src/assets/career-banner.jpg
var career_banner_default = "/assets/career-banner-BoaZj7Z0.jpg";
//#endregion
//#region src/assets/form-back.jpg
var form_back_default = "/assets/form-back-BinaOPHZ.jpg";
//#endregion
//#region src/routes/careers.tsx
var Route$6 = createFileRoute("/careers")({ component: CareersPage });
function CareersPage() {
	const [fileName, setFileName] = useState(null);
	const [submitted, setSubmitted] = useState(false);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("reveal-active");
				else entry.target.classList.remove("reveal-active");
			});
		}, { threshold: .15 });
		const revealElements = document.querySelectorAll(".reveal");
		revealElements.forEach((el) => observer.observe(el));
		return () => {
			revealElements.forEach((el) => observer.unobserve(el));
		};
	}, []);
	const handleFileChange = (e) => {
		if (e.target.files && e.target.files[0]) setFileName(e.target.files[0].name);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 5e3);
	};
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen transition-colors duration-500 overflow-hidden",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "w-full h-screen relative overflow-hidden flex items-center",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: career_banner_default,
						alt: "Casa Exotique Studio Banner",
						className: "absolute inset-0 w-full h-full object-cover animate-scale-up",
						onError: (e) => {
							e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop";
						}
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 mt-16",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-2xl space-y-4 animate-fade-in-up",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-xs uppercase tracking-[0.4em] text-neutral-300 font-medium block",
									children: "Casa Exotique"
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "text-4xl sm:text-5xl lg:text-7xl font-serif tracking-wide text-white capitalize leading-[1.15]",
									children: [
										"Be part of a ",
										/* @__PURE__ */ jsx("br", {}),
										/* @__PURE__ */ jsx("span", {
											className: "italic text-[#f3d9b1] font-normal font-sans",
											children: "team"
										})
									]
								}),
								/* @__PURE__ */ jsx("div", { className: "w-16 h-0.5 bg-[#6B2D2D] mt-4" })
							]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 animate-pulse",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-[10px] tracking-[0.3em] uppercase",
							children: "Scroll Down"
						}), /* @__PURE__ */ jsx("div", {
							className: "w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1",
							children: /* @__PURE__ */ jsx("div", { className: "w-1 h-2 bg-white rounded-full animate-bounce" })
						})]
					})
				]
			}),
			/* @__PURE__ */ jsx("section", {
				className: "max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 bg-white dark:bg-neutral-950",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-7 space-y-6 reveal reveal-fade-right",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-4 text-[#6B2D2D] dark:text-[#f3d9b1] font-medium tracking-[0.35em] text-xs uppercase mb-2",
								children: [/* @__PURE__ */ jsx("span", { className: "w-8 h-[2px] bg-[#6B2D2D] dark:bg-[#f3d9b1] inline-block" }), "Work With Us"]
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "text-3xl lg:text-5xl font-serif tracking-tight text-neutral-900 dark:text-white leading-[1.2]",
								children: [
									"Ready to elevate your ",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "italic text-[#6B2D2D] dark:text-accent font-normal",
										children: "creativity?"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "space-y-6 text-neutral-700 dark:text-neutral-300 font-light text-base lg:text-lg leading-relaxed max-w-xl",
								children: [/* @__PURE__ */ jsx("p", { children: "At Casa Exotique, we celebrate the transformative power of design. Join our innovative team, where your vision is valued, and help craft unforgettable spaces!" }), /* @__PURE__ */ jsx("p", { children: "You'll work on diverse, inspiring projects across residential, commercial, retail, and hospitality spaces – with opportunities for growth and collaboration alongside top professionals in an inclusive environment." })]
							})
						]
					}), /* @__PURE__ */ jsxs("div", {
						className: "lg:col-span-5 relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group border-4 border-neutral-100 dark:border-neutral-800 reveal reveal-fade-left",
						children: [/* @__PURE__ */ jsx("img", {
							src: career1_default,
							alt: "Casa Exotique Careers",
							className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
							onError: (e) => {
								e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop";
							}
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" })]
					})]
				})
			}),
			/* @__PURE__ */ jsxs("section", {
				id: "apply-form",
				className: "relative text-white py-24 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat",
				style: { backgroundImage: `url(${form_back_default})` },
				children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/75 via-neutral-950/80 to-black/85 backdrop-blur-[2px]" }), /* @__PURE__ */ jsxs("div", {
					className: "max-w-4xl mx-auto px-6 relative z-10 reveal reveal-fade-up",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "text-center space-y-4 mb-16",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-3xl lg:text-5xl font-serif tracking-[0.15em] uppercase text-white",
								children: "APPLY NOW"
							}),
							/* @__PURE__ */ jsx("div", { className: "w-20 h-0.5 bg-[#6B2D2D] mx-auto rounded-full" }),
							/* @__PURE__ */ jsx("p", {
								className: "text-neutral-200 font-light text-sm tracking-wider uppercase",
								children: "Begin your professional journey with us"
							})
						]
					}), submitted ? /* @__PURE__ */ jsxs("div", {
						className: "bg-neutral-900/90 border border-[#6B2D2D]/50 rounded-2xl p-12 text-center space-y-6 max-w-lg mx-auto backdrop-blur-md shadow-2xl",
						children: [
							/* @__PURE__ */ jsx(CheckCircle2, { className: "w-16 h-16 text-emerald-500 mx-auto animate-bounce" }),
							/* @__PURE__ */ jsx("h3", {
								className: "text-2xl font-serif text-white",
								children: "Application Submitted!"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-neutral-400 text-sm",
								children: "Thank you for reaching out. Our recruitment team will review your portfolio and get back to you soon."
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "space-y-8",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6",
								children: [
									/* @__PURE__ */ jsx("input", {
										type: "text",
										required: true,
										placeholder: "Enter Name",
										className: "w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
									}),
									/* @__PURE__ */ jsx("input", {
										type: "email",
										required: true,
										placeholder: "Enter Email",
										className: "w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
									}),
									/* @__PURE__ */ jsx("input", {
										type: "tel",
										required: true,
										placeholder: "Contact Number",
										className: "w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
									}),
									/* @__PURE__ */ jsx("input", {
										type: "text",
										required: true,
										placeholder: "Education Qualification",
										className: "w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
									}),
									/* @__PURE__ */ jsx("input", {
										type: "text",
										required: true,
										placeholder: "Position Applied For",
										className: "w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
									}),
									/* @__PURE__ */ jsx("input", {
										type: "text",
										required: true,
										placeholder: "Years of Experience",
										className: "w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
									})
								]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col md:flex-row items-stretch md:items-center justify-between border border-neutral-700/50 rounded-xl p-6 bg-black/70 gap-6 backdrop-blur-sm",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "block font-medium text-sm text-neutral-200",
										children: "Upload Your Resume"
									}), /* @__PURE__ */ jsx("span", {
										className: "block text-xs text-neutral-400",
										children: "Max File Size 2MB (JPG or PDF only)"
									})]
								}), /* @__PURE__ */ jsxs("div", {
									className: "flex-1 max-w-md relative border-2 border-dashed border-neutral-600 rounded-lg p-4 bg-neutral-900/40 hover:border-[#6B2D2D] transition-all",
									children: [/* @__PURE__ */ jsx("input", {
										type: "file",
										id: "file-upload",
										accept: ".pdf,.jpg,.jpeg",
										className: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
										onChange: handleFileChange
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex items-center justify-center gap-3 text-neutral-300",
										children: [/* @__PURE__ */ jsx(Upload, { className: "w-5 h-5 text-neutral-400" }), /* @__PURE__ */ jsx("span", {
											className: "text-xs truncate",
											children: fileName ? fileName : "Drag & drop or Click to choose file"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsx("div", {
								className: "text-center pt-6",
								children: /* @__PURE__ */ jsx("button", {
									type: "submit",
									className: "bg-[#6B2D2D] hover:bg-[#522222] text-white px-14 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 border border-[#8c3d3d]/20",
									children: "Submit Application"
								})
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes scaleUp {
            from {
              opacity: 0;
              transform: scale(1.04);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
          .animate-fade-in-up {
            animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-scale-up {
            animation: scaleUp 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          /* --- SCROLL REVEAL ANIMATIONS --- */
          .reveal {
            opacity: 0;
            transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
            will-change: transform, opacity;
          }

          .reveal-fade-up {
            transform: translateY(50px);
          }
          .reveal-fade-up.reveal-active {
            opacity: 1;
            transform: translateY(0);
          }

          .reveal-fade-right {
            transform: translateX(-50px);
          }
          .reveal-fade-right.reveal-active {
            opacity: 1;
            transform: translateX(0);
          }

          .reveal-fade-left {
            transform: translateX(50px);
          }
          .reveal-fade-left.reveal-active {
            opacity: 1;
            transform: translateX(0);
          }
        ` } })
		]
	}) });
}
//#endregion
//#region src/assets/about-banner.jpg
var about_banner_default = "/assets/about-banner-CNxrb1UT.jpg";
//#endregion
//#region src/assets/practice-showcase.jpg
var practice_showcase_default = "/assets/practice-showcase-CDwg8izb.jpg";
//#endregion
//#region src/assets/about-project.jpg
var about_project_default = "/assets/about-project-BCCZeAdX.jpg";
//#endregion
//#region src/assets/journey-1.jpg
var journey_1_default = "/assets/journey-1-DK7IXQav.jpg";
//#endregion
//#region src/assets/journey-2.jpg
var journey_2_default = "/assets/journey-2-BYs7eJ3u.jpg";
//#endregion
//#region src/assets/journey-3.jpg
var journey_3_default = "/assets/journey-3-CPRAzCG_.jpg";
//#endregion
//#region src/assets/journey-4.jpg
var journey_4_default = "/assets/journey-4-C5Hj3au0.jpg";
//#endregion
//#region src/assets/journey-5.jpg
var journey_5_default = "/assets/journey-5-C67ym9xm.jpg";
//#endregion
//#region src/assets/journey-6.jpg
var journey_6_default = "/assets/journey-6-DZQAWrpJ.jpg";
//#endregion
//#region src/assets/col-1.jpg
var col_1_default = "/assets/banner-retail--OpU9NLL.jpg";
//#endregion
//#region src/assets/col-2.jpg
var col_2_default = "/assets/col-2-DD3CxWHv.jpg";
//#endregion
//#region src/assets/col-3.jpg
var col_3_default = "/assets/col-3-DvDIwrE8.jpg";
//#endregion
//#region src/assets/col-4.jpg
var col_4_default = "/assets/career-banner-BoaZj7Z0.jpg";
//#endregion
//#region src/assets/col-5.jpg
var col_5_default = "/assets/banner-hospitality-C4wpT2EW.jpg";
//#endregion
//#region src/assets/col-6.jpg
var col_6_default = "/assets/col-6-BgC9SFq9.jpg";
//#endregion
//#region src/assets/col-7.jpg
var col_7_default = "/assets/col-7-D1GSlQXh.jpg";
//#endregion
//#region src/assets/col-8.jpg
var col_8_default = "/assets/banner-developer-AzZESDX3.jpg";
//#endregion
//#region src/routes/about.tsx
var activeBanner = about_banner_default;
var Route$5 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Casa Exotique — Luxury Design-Build Studio in Gurgaon" },
			{
				name: "description",
				content: "Casa Exotique is a Gurgaon-based luxury architecture and interior design-build studio creating refined residential, hospitality, retail and developer-led environments across India."
			},
			{
				property: "og:title",
				content: "About Casa Exotique"
			},
			{
				property: "og:description",
				content: "A multidisciplinary luxury studio combining architecture, interiors, custom manufacturing and turnkey execution."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: AboutPage
});
function ScrollReveal$1({ children, variant = "fade-up", delay = 0, className = "" }) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setIsIntersecting(true);
			else setIsIntersecting(false);
		}, {
			threshold: .1,
			rootMargin: "-40px 0px -40px 0px"
		});
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		style: { transitionDelay: isIntersecting ? `${delay}ms` : "0ms" },
		className: `transition-all duration-[1100ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${isIntersecting ? "translate-y-0 translate-x-0 scale-100 opacity-100" : {
			"fade-up": "translate-y-16 opacity-0",
			"fade-left": "translate-x-16 opacity-0",
			"fade-right": "-translate-x-16 opacity-0",
			"scale-up": "scale-[0.97] opacity-0"
		}[variant]} ${className}`,
		children
	});
}
function AboutPage() {
	const visualGallery = [
		journey_1_default,
		journey_2_default,
		journey_3_default,
		journey_4_default,
		journey_5_default,
		journey_6_default
	];
	const collections = [
		col_1_default,
		col_2_default,
		col_3_default,
		col_4_default,
		col_5_default,
		col_6_default,
		col_7_default,
		col_8_default
	];
	const sliderRef = useRef(null);
	const [isUserInteracting, setIsUserInteracting] = useState(false);
	const startX = useRef(0);
	const scrollLeft = useRef(0);
	useEffect(() => {
		const slider = sliderRef.current;
		if (!slider) return;
		let animationFrameId;
		const speed = .8;
		const autoScroll = () => {
			if (!isUserInteracting) {
				slider.scrollLeft += speed;
				if (slider.scrollLeft >= slider.scrollWidth / 2) slider.scrollLeft = 0;
			}
			animationFrameId = requestAnimationFrame(autoScroll);
		};
		animationFrameId = requestAnimationFrame(autoScroll);
		return () => cancelAnimationFrame(animationFrameId);
	}, [isUserInteracting]);
	const handleMouseDown = (e) => {
		setIsUserInteracting(true);
		startX.current = e.pageX - (sliderRef.current?.offsetLeft || 0);
		scrollLeft.current = sliderRef.current?.scrollLeft || 0;
	};
	const handleMouseMove = (e) => {
		if (!isUserInteracting || !sliderRef.current) return;
		e.preventDefault();
		const walk = (e.pageX - sliderRef.current.offsetLeft - startX.current) * 1.5;
		sliderRef.current.scrollLeft = scrollLeft.current - walk;
	};
	const handleTouchStart = (e) => {
		setIsUserInteracting(true);
		startX.current = e.touches[0].pageX - (sliderRef.current?.offsetLeft || 0);
		scrollLeft.current = sliderRef.current?.scrollLeft || 0;
	};
	const handleTouchMove = (e) => {
		if (!isUserInteracting || !sliderRef.current) return;
		const walk = (e.touches[0].pageX - sliderRef.current.offsetLeft - startX.current) * 1.5;
		sliderRef.current.scrollLeft = scrollLeft.current - walk;
	};
	const handleInteractionEnd = () => {
		setIsUserInteracting(false);
	};
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } }),
		/* @__PURE__ */ jsxs("div", {
			className: "absolute left-0 right-0 w-screen h-screen overflow-hidden bg-black z-0",
			children: [/* @__PURE__ */ jsx("img", {
				src: activeBanner,
				alt: "Studio Banner",
				className: "w-full h-full object-cover opacity-100"
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent pointer-events-none" })]
		}),
		/* @__PURE__ */ jsx("div", { className: "h-screen w-full invisible pointer-events-none" }),
		/* @__PURE__ */ jsx(ScrollReveal$1, {
			variant: "fade-up",
			children: /* @__PURE__ */ jsx(PageHero, {
				eyebrow: "The Studio",
				title: "A practice built on vision and execution.",
				intro: "Established in 2019, Casa Exotique has evolved into a multidisciplinary studio creating environments where architecture, atmosphere and craft meet."
			})
		}),
		/* @__PURE__ */ jsxs(Section, {
			className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "lg:col-span-7 order-2 lg:order-1 space-y-6 text-lg leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx(ScrollReveal$1, {
						variant: "fade-right",
						delay: 100,
						children: /* @__PURE__ */ jsx("p", { children: "Casa Exotique is a Gurgaon-based luxury architecture and interior design-build studio known for creating refined residential, hospitality, retail and developer-led environments across India." })
					}),
					/* @__PURE__ */ jsx(ScrollReveal$1, {
						variant: "fade-right",
						delay: 200,
						children: /* @__PURE__ */ jsx("p", {
							className: "text-foreground font-display text-2xl leading-snug",
							children: "“Exceptional spaces require both creative vision and execution control.”"
						})
					}),
					/* @__PURE__ */ jsx(ScrollReveal$1, {
						variant: "fade-right",
						delay: 300,
						children: /* @__PURE__ */ jsx("p", { children: "Over the years, the studio has grown into a multidisciplinary practice combining architecture, luxury interiors, turnkey execution, custom furniture, fit-outs, developer solutions and hospitality environments." })
					}),
					/* @__PURE__ */ jsx(ScrollReveal$1, {
						variant: "fade-right",
						delay: 400,
						children: /* @__PURE__ */ jsx("p", { children: "Every project is approached through the lens of timeless design, emotional experience and technical precision — quietly, deliberately, without compromise." })
					})
				]
			}), /* @__PURE__ */ jsx("figure", {
				className: "lg:col-span-5 order-1 lg:order-2 overflow-hidden rounded",
				children: /* @__PURE__ */ jsx(ScrollReveal$1, {
					variant: "scale-up",
					delay: 200,
					children: /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden bg-neutral-100 dark:bg-neutral-900 w-full h-[60vh] lg:h-[78vh]",
						children: /* @__PURE__ */ jsx("img", {
							src: about_project_default,
							alt: "Casa Exotique residential project",
							loading: "lazy",
							width: 1100,
							height: 1400,
							className: "w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
						})
					})
				})
			})]
		}),
		/* @__PURE__ */ jsx(Section, {
			className: "mt-32",
			children: /* @__PURE__ */ jsx("div", {
				className: "grid lg:grid-cols-4 gap-10 border-t border-border/60 pt-16",
				children: [
					{
						k: "2019",
						v: "Studio established in Gurgaon"
					},
					{
						k: "60+",
						v: "Bespoke environments delivered"
					},
					{
						k: "1",
						v: "Integrated team — design to delivery"
					},
					{
						k: "India",
						v: "Practicing across NCR & beyond"
					}
				].map((s, idx) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(ScrollReveal$1, {
					variant: "fade-up",
					delay: idx * 100,
					children: [/* @__PURE__ */ jsx("div", {
						className: "font-display text-5xl text-accent",
						children: s.k
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: s.v
					})]
				}) }, s.k))
			})
		}),
		/* @__PURE__ */ jsx(Section, {
			className: "py-24 lg:py-36 border-t border-neutral-100 dark:border-neutral-900",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "lg:col-span-5",
					children: /* @__PURE__ */ jsx(ScrollReveal$1, {
						variant: "scale-up",
						children: /* @__PURE__ */ jsx("div", {
							className: "overflow-hidden rounded shadow-2xl bg-neutral-100 dark:bg-neutral-900 aspect-[4/5]",
							children: /* @__PURE__ */ jsx("img", {
								src: practice_showcase_default,
								alt: "Casa Exotique Practice Portfolio",
								className: "w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
							})
						})
					})
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-7 space-y-6",
					children: [
						/* @__PURE__ */ jsxs(ScrollReveal$1, {
							variant: "fade-left",
							delay: 150,
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-[0.68rem] uppercase tracking-[0.3em] text-accent font-semibold block mb-2",
								children: "— What We Practice"
							}), /* @__PURE__ */ jsxs("h2", {
								className: "font-display text-3xl lg:text-5xl tracking-tight leading-tight font-light",
								children: [
									"Disciplines under ",
									/* @__PURE__ */ jsx("br", {}),
									"one refined roof."
								]
							})]
						}),
						/* @__PURE__ */ jsx(ScrollReveal$1, {
							variant: "fade-left",
							delay: 250,
							children: /* @__PURE__ */ jsx("p", {
								className: "text-base font-light leading-relaxed text-neutral-600 dark:text-neutral-400",
								children: "Our architecture and interior design workflows combine creative mastery with full turnkey execution control to deliver seamless, uncompromised premium environments."
							})
						}),
						/* @__PURE__ */ jsx(ScrollReveal$1, {
							variant: "fade-left",
							delay: 350,
							children: /* @__PURE__ */ jsx("ul", {
								className: "grid sm:grid-cols-2 gap-x-8 gap-y-4 pt-4 text-sm text-neutral-800 dark:text-neutral-300 font-light",
								children: [
									"Architecture",
									"Luxury Interiors",
									"Turnkey Execution",
									"Custom Furniture",
									"Fit-outs",
									"Developer Solutions",
									"Hospitality Environments",
									"Material & Lighting Curation"
								].map((i) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-3 items-center py-2 border-b border-neutral-100 dark:border-neutral-900 hover:border-accent transition-colors duration-300",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-accent text-lg font-mono",
										children: "—"
									}), /* @__PURE__ */ jsx("span", { children: i })]
								}, i))
							})
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsxs(Section, {
			className: "pb-24 lg:pb-36 border-t border-neutral-100 dark:border-neutral-900 pt-24",
			children: [/* @__PURE__ */ jsx("div", {
				className: "text-center max-w-2xl mx-auto mb-20",
				children: /* @__PURE__ */ jsxs(ScrollReveal$1, {
					variant: "fade-up",
					children: [/* @__PURE__ */ jsx("h2", {
						className: "font-display text-4xl lg:text-5xl tracking-tight",
						children: "Visual Journey of Our Work"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-5 text-base text-neutral-500 dark:text-neutral-400 font-light leading-relaxed",
						children: "The journey of design begins with an idea, a concept that takes form through meticulous planning and curation. Each stage is an orchestration of creativity and precision."
					})]
				})
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: visualGallery.map((pic, index) => /* @__PURE__ */ jsx(ScrollReveal$1, {
					variant: "scale-up",
					delay: index * 100,
					children: /* @__PURE__ */ jsx("div", {
						className: "overflow-hidden rounded shadow-lg aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 group",
						children: /* @__PURE__ */ jsx("img", {
							src: pic,
							alt: `Journey item ${index + 1}`,
							loading: "lazy",
							className: "w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-105"
						})
					})
				}, index))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "py-20 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/20 overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("div", {
					className: "text-center max-w-2xl mx-auto mb-14 px-4",
					children: /* @__PURE__ */ jsx(ScrollReveal$1, {
						variant: "fade-up",
						children: /* @__PURE__ */ jsx("h2", {
							className: "font-display text-4xl lg:text-5xl tracking-tight",
							children: "Discover All Collections"
						})
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					ref: sliderRef,
					onMouseDown: handleMouseDown,
					onMouseMove: handleMouseMove,
					onMouseUp: handleInteractionEnd,
					onMouseLeave: handleInteractionEnd,
					onTouchStart: handleTouchStart,
					onTouchMove: handleTouchMove,
					onTouchEnd: handleInteractionEnd,
					className: "w-full flex select-none py-4 gap-6 px-6 overflow-x-auto scrollbar-none touch-pan-x cursor-grab active:cursor-grabbing",
					children: [collections.map((imgSrc, idx) => /* @__PURE__ */ jsx("div", {
						className: "w-[260px] sm:w-[360px] aspect-[4/5] overflow-hidden rounded shadow-md bg-neutral-200 flex-shrink-0 transition-shadow duration-300 hover:shadow-xl",
						children: /* @__PURE__ */ jsx("img", {
							src: imgSrc,
							alt: `Collection piece ${idx + 1}`,
							className: "w-full h-full object-cover pointer-events-none",
							loading: "lazy"
						})
					}, `track-main-${idx}`)), collections.map((imgSrc, idx) => /* @__PURE__ */ jsx("div", {
						className: "w-[260px] sm:w-[360px] aspect-[4/5] overflow-hidden rounded shadow-md bg-neutral-200 flex-shrink-0 transition-shadow duration-300 hover:shadow-xl",
						"aria-hidden": "true",
						children: /* @__PURE__ */ jsx("img", {
							src: imgSrc,
							alt: `Collection duplicate piece ${idx + 1}`,
							className: "w-full h-full object-cover pointer-events-none",
							loading: "lazy"
						})
					}, `track-buffer-${idx}`))]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "text-center mt-10",
					children: /* @__PURE__ */ jsx(ScrollReveal$1, {
						variant: "fade-up",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/projects",
							className: "inline-block px-12 py-4 bg-[#800020] text-white rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:bg-[#66001a] transform hover:scale-[1.02] shadow-md text-center",
							children: "View more"
						})
					})
				})
			]
		}),
		/* @__PURE__ */ jsx(Section, {
			className: "mt-16 mb-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "border-t border-border/60 pt-16 flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ jsx(ScrollReveal$1, {
					variant: "fade-right",
					children: /* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl lg:text-5xl max-w-2xl",
						children: "Meet the founder behind the practice."
					})
				}), /* @__PURE__ */ jsx(ScrollReveal$1, {
					variant: "fade-left",
					delay: 150,
					children: /* @__PURE__ */ jsx(Link, {
						to: "/founder",
						className: "inline-flex items-center px-7 py-4 border border-foreground/30 text-[0.72rem] uppercase tracking-[0.28em] hover:border-accent hover:text-accent",
						children: "Bhawana Bhatnagar"
					})
				})]
			})
		})
	] });
}
//#endregion
//#region src/assets/intro.jpg
var intro_default = "/assets/about-banner-CNxrb1UT.jpg";
//#endregion
//#region src/assets/philosophy.jpg
var philosophy_default = "/assets/philosophy-CohX9isG.jpg";
//#endregion
//#region src/assets/hero-banner.mp4
var hero_banner_default = "/assets/hero-banner-DDjF6Kpl.mp4";
//#endregion
//#region src/assets/developer-showcase.jpg
var developer_showcase_default = "/assets/contact-banner-Gyv4RVnj.jpg";
//#endregion
//#region src/assets/o1.jpg
var o1_default = "/assets/o1-Cv57Qtgz.jpg";
//#endregion
//#region src/assets/o2.jpg
var o2_default = "/assets/practice-showcase-CDwg8izb.jpg";
//#endregion
//#region src/assets/o3.jpg
var o3_default = "/assets/services-developer-CjZt3Sq9.jpg";
//#endregion
//#region src/assets/o4.jpg
var o4_default = "/assets/o4-DQAXp5iP.jpg";
//#endregion
//#region src/assets/o5.jpg
var o5_default = "/assets/about-project-BCCZeAdX.jpg";
//#endregion
//#region src/assets/o6.jpg
var o6_default = "/assets/o6-fF6AqWV3.jpg";
//#endregion
//#region src/assets/s1Bg.jpg
var s1Bg_default = "/assets/s1Bg-DXs-HcSR.jpg";
//#endregion
//#region src/assets/s2Bg.jpg
var s2Bg_default = "/assets/s2Bg-DG9ypNka.jpg";
//#endregion
//#region src/assets/s3Bg.jpg
var s3Bg_default = "/assets/s3Bg-CKwFHxcj.jpg";
//#endregion
//#region src/assets/s4Bg.jpg
var s4Bg_default = "/assets/s4Bg-BRgAcgLB.jpg";
//#endregion
//#region src/assets/s5Bg.jpg
var s5Bg_default = "/assets/s5Bg-CVJ2O7lE.jpg";
//#endregion
//#region src/assets/s6Bg.jpg
var s6Bg_default = "/assets/s6Bg-V1c9EZfc.jpg";
//#endregion
//#region src/assets/aditya-dasta.jpg
var aditya_dasta_default = "data:image/jpeg;base64,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";
//#endregion
//#region src/assets/pinaki-aich.jpg
var pinaki_aich_default = "/assets/pinaki-aich-Brp5Zda7.jpg";
//#endregion
//#region src/assets/irfan-izhar.jpg
var irfan_izhar_default = "data:image/jpeg;base64,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";
//#endregion
//#region src/routes/index.tsx
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Casa Exotique | Luxury Interior Designers & Turnkey Design Build, Gurgaon" }, {
		name: "description",
		content: "Casa Exotique is a Gurgaon-based luxury architecture and design-build studio creating bespoke residences, hospitality environments, premium retail, and developer-led experiences across India."
	}] }),
	component: Index
});
function ScrollReveal({ children, variant = "fade-up", delay = 0, className = "" }) {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) setIsIntersecting(true);
			else setIsIntersecting(false);
		}, {
			threshold: .1,
			rootMargin: "-40px 0px -40px 0px"
		});
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		style: { transitionDelay: isIntersecting ? `${delay}ms` : "0ms" },
		className: `transition-all duration-[1100ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform ${isIntersecting ? "translate-y-0 translate-x-0 scale-100 opacity-100" : {
			"fade-up": "translate-y-16 opacity-0",
			"fade-left": "translate-x-16 opacity-0",
			"fade-right": "-translate-x-16 opacity-0",
			"scale-up": "scale-[0.97] opacity-0"
		}[variant]} ${className}`,
		children
	});
}
var trust = [
	"Luxury Residences",
	"Hospitality Environments",
	"Developer Experience Centers",
	"Premium Retail Spaces",
	"Turnkey Execution"
];
var services = [
	{
		n: "01",
		t: "Architecture",
		d: "Spatial planning, natural light and materiality composed for long-term usability — for villas, residences, hospitality and boutique commercial spaces.",
		img: s1Bg_default
	},
	{
		n: "02",
		t: "Luxury Residential Interiors",
		d: "Penthouses, villas and high-end apartments crafted around personal rituals, with timeless detailing and personalized material narratives.",
		img: s2Bg_default
	},
	{
		n: "03",
		t: "Hospitality Design",
		d: "Boutique hotels, restaurants, cafés and lounges designed to create emotional memory and elevate the guest experience.",
		img: s3Bg_default
	},
	{
		n: "04",
		t: "Luxury Retail",
		d: "Brand-immersive retail environments that increase engagement, dwell time and the perception of premium quality.",
		img: s4Bg_default
	},
	{
		n: "05",
		t: "Developer Solutions",
		d: "Sample apartments, sales galleries, clubhouses and amenity zones engineered to accelerate buyer conviction.",
		img: s5Bg_default
	},
	{
		n: "06",
		t: "Turnkey Execution",
		d: "Civil, technical coordination, custom furniture, procurement, lighting and finishing — all managed under one accountable system.",
		img: s6Bg_default
	}
];
var process = [
	{
		n: "01",
		t: "Discovery",
		d: "Understanding the client's vision, lifestyle, business goals and spatial requirements.",
		img: s1Bg_default
	},
	{
		n: "02",
		t: "Spatial Strategy",
		d: "Architectural planning, circulation, zoning and experiential mapping developed with precision.",
		img: s2Bg_default
	},
	{
		n: "03",
		t: "Design Development",
		d: "Material palettes, lighting, furniture language and detailing refined into a cohesive environment.",
		img: s3Bg_default
	},
	{
		n: "04",
		t: "Technical Resolution",
		d: "Execution drawings, services coordination, procurement planning and structured timelines.",
		img: s4Bg_default
	},
	{
		n: "05",
		t: "Turnkey Execution",
		d: "Site delivery, vendor coordination, custom manufacturing, fit-outs and finishing.",
		img: s5Bg_default
	},
	{
		n: "06",
		t: "Final Styling & Reveal",
		d: "Every final layer curated so the space feels complete, balanced and emotionally resonant.",
		img: s6Bg_default
	}
];
var testimonials = [
	{
		name: "ADITYA DASTA",
		role: "General Manager, Sales, DLF",
		text: "We were on the lookout for a very good designer to shape up our home in the best possible way we wanted it to. So one of our very good friend suggested us of Bhawana. As they say a house is built with hands and a home is built with heart. Bhawana truly put her heart and soul into designing our home and the result was brilliant. She could understand our requirement and she did justice to the fullest. So thankyou Bhawana for making our dream home come true.",
		img: aditya_dasta_default
	},
	{
		name: "PINAKI AICH",
		role: "Chief Executive Officer - Forward Investments",
		text: "The key challenges NRI's face is that it's very difficult to find people whom you can trust, both in terms of professionalism & qualities of their work. I must say after having used the services of CASA, it's been an absolute pleasure to have them work on the project. They have been able to deliver an exceptional quality of work in the time expected. Would be more than happy to recommend their services to anybody.",
		img: pinaki_aich_default
	},
	{
		name: "IRFAN IZHAR",
		role: "Bollywood producer and Founder - Entertainment Box",
		text: "Living in Dubai, away from home I was worried if my home is in the right hands. Working with Bhawana is like working with family. My home was ready before the expected date & it was a pleasure working with Bhawana. We didn't need to explain anything as she has a great sense of shapes, colours and designs. Had a great experience working with Bhawana Bhatnagar. I must say she is so talented and understood the needs of the customer.",
		img: irfan_izhar_default
	}
];
function Index() {
	const [activeTestimonial, setActiveTestimonial] = useState(0);
	const scrollRef = useRef(null);
	useEffect(() => {
		const slider = scrollRef.current;
		if (!slider) return;
		let isDown = false;
		let startX;
		let scrollLeft;
		const startDragging = (e) => {
			isDown = true;
			slider.classList.add("dragging");
			startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		};
		const stopDragging = () => {
			isDown = false;
			slider.classList.remove("dragging");
		};
		const move = (e) => {
			if (!isDown) return;
			e.preventDefault();
			const walk = ((e.pageX || e.touches[0].pageX) - slider.offsetLeft - startX) * 1.5;
			slider.scrollLeft = scrollLeft - walk;
		};
		slider.addEventListener("mousedown", startDragging);
		slider.addEventListener("mouseleave", stopDragging);
		slider.addEventListener("mouseup", stopDragging);
		slider.addEventListener("mousemove", move);
		slider.addEventListener("touchstart", startDragging, { passive: true });
		slider.addEventListener("touchend", stopDragging);
		slider.addEventListener("touchmove", move, { passive: false });
		return () => {
			slider.removeEventListener("mousedown", startDragging);
			slider.removeEventListener("mouseleave", stopDragging);
			slider.removeEventListener("mouseup", stopDragging);
			slider.removeEventListener("mousemove", move);
			slider.removeEventListener("touchstart", startDragging);
			slider.removeEventListener("touchend", stopDragging);
			slider.removeEventListener("touchmove", move);
		};
	}, []);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 3e3);
		return () => clearInterval(interval);
	}, []);
	const nextTestimonial = () => {
		setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
	};
	const prevTestimonial = () => {
		setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};
	return /* @__PURE__ */ jsxs(SiteLayout, {
		transparentHeader: true,
		children: [
			/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
       main {
         padding-top: 0 !important;
         max-width: 100% !important;
         width: 100% !important;
       }
       .no-scrollbar::-webkit-scrollbar {
         display: none;
       }
       .no-scrollbar {
         -ms-overflow-style: none;
         scrollbar-width: none;
       }
     ` } }),
			/* @__PURE__ */ jsxs("section", {
				className: "relative h-screen w-full overflow-hidden bg-black z-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "absolute inset-0 z-0",
						children: [/* @__PURE__ */ jsx("video", {
							src: hero_banner_default,
							autoPlay: true,
							muted: true,
							loop: true,
							playsInline: true,
							className: "w-full h-full object-cover opacity-80"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-12",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-4xl space-y-4",
							children: [/* @__PURE__ */ jsx(Eyebrow, { children: /* @__PURE__ */ jsx("span", {
								className: "text-white/80",
								children: "Luxury Architecture · Interiors · Hospitality · Commercial"
							}) }), /* @__PURE__ */ jsxs("h1", {
								className: "font-display text-[2.5rem] sm:text-6xl lg:text-[5.5rem] leading-[1.02] tracking-tight text-white font-light",
								children: [
									"We Design ",
									/* @__PURE__ */ jsx("span", {
										className: "italic text-accent",
										children: "What Luxury"
									}),
									" Feels Like."
								]
							})]
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "absolute bottom-6 left-6 right-6 lg:left-12 lg:right-12 flex justify-between text-[0.68rem] uppercase tracking-[0.28em] text-white/60 z-20 font-medium",
						children: [/* @__PURE__ */ jsx("span", { children: "Residence 07 · Golf Course Road" }), /* @__PURE__ */ jsx("span", { children: "Gurgaon, IN" })]
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 relative z-20",
				children: [
					/* @__PURE__ */ jsx(Section, {
						className: "py-24 lg:py-32 border-b border-neutral-100 dark:border-neutral-900",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "lg:col-span-6",
								children: /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "scale-up",
									children: /* @__PURE__ */ jsx("div", {
										className: "overflow-hidden rounded shadow-2xl aspect-[4/5] bg-neutral-100 dark:bg-neutral-900",
										children: /* @__PURE__ */ jsx("img", {
											src: intro_default,
											alt: "Casa Exotique Spatial Narrative",
											className: "w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
										})
									})
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-6 space-y-6 lg:pl-6",
								children: [
									/* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										children: /* @__PURE__ */ jsx("p", {
											className: "text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 font-light",
											children: "Casa Exotique is a leading luxury interior design company in Gurgaon, specialising in bespoke residential interiors, luxury villas, premium apartments, hospitality spaces, retail environments, and turnkey design-build solutions."
										})
									}),
									/* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										delay: 150,
										children: /* @__PURE__ */ jsx("p", {
											className: "text-base leading-relaxed text-neutral-600 dark:text-neutral-400 font-light",
											children: "From concept to turnkey execution, we create timeless spaces through architectural excellence, refined craftsmanship, and seamless project Realization across India."
										})
									}),
									/* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										delay: 250,
										children: /* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap gap-4 pt-4",
											children: [/* @__PURE__ */ jsx(Link, {
												to: "/contact",
												className: "inline-flex items-center px-7 py-4 font-medium text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent hover:text-white transition-colors bg-black text-white dark:bg-white dark:text-black",
												children: "Begin Your Project"
											}), /* @__PURE__ */ jsx(Link, {
												to: "/projects",
												className: "inline-flex items-center px-7 py-4 border text-[0.72rem] uppercase tracking-[0.28em] hover:border-accent hover:text-accent transition-colors border-black/30 text-black dark:border-white/30 dark:text-white",
												children: "Explore Our Work"
											})]
										})
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "py-24 lg:py-32 border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-950/20",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-6 lg:order-1 space-y-6 lg:pr-6",
								children: [/* @__PURE__ */ jsxs(ScrollReveal, {
									variant: "fade-right",
									children: [/* @__PURE__ */ jsx(Eyebrow, { children: "Philosophy" }), /* @__PURE__ */ jsxs("h2", {
										className: "mt-4 font-display text-3xl lg:text-4xl leading-tight text-neutral-900 dark:text-white font-light",
										children: [
											"Built for clients who expect more than ",
											/* @__PURE__ */ jsx("em", {
												className: "text-accent not-italic font-normal",
												children: "beautiful spaces"
											}),
											"."
										]
									})]
								}), /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "fade-right",
									delay: 150,
									children: /* @__PURE__ */ jsxs("div", {
										className: "space-y-4 text-sm font-light leading-relaxed text-neutral-500 dark:text-neutral-400",
										children: [/* @__PURE__ */ jsx("p", { children: "Luxury is defined by proportion, atmosphere, and precision. Our multidisciplinary team combines architectural development, structural execution, and interior architecture under one simple ecosystem." }), /* @__PURE__ */ jsx("p", {
											className: "text-neutral-900 dark:text-white font-normal mt-2",
											children: "No chaos. No compromise. No diluted vision."
										})]
									})
								})]
							}), /* @__PURE__ */ jsx("div", {
								className: "lg:col-span-6 lg:order-2",
								children: /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "scale-up",
									children: /* @__PURE__ */ jsx("div", {
										className: "overflow-hidden rounded shadow-2xl aspect-[4/5] bg-neutral-100 dark:bg-neutral-900",
										children: /* @__PURE__ */ jsx("img", {
											src: philosophy_default,
											alt: "Casa Exotique Design Philosophy",
											className: "w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
										})
									})
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx("div", {
						className: "bg-neutral-50 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-900 transition-colors duration-500",
						children: /* @__PURE__ */ jsx(Section, {
							className: "py-8",
							children: /* @__PURE__ */ jsx("div", {
								className: "grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-6 text-center",
								children: trust.map((t, idx) => /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "fade-up",
									delay: idx * 80,
									children: /* @__PURE__ */ jsx("span", {
										className: "text-[0.68rem] uppercase tracking-[0.22em] font-medium text-neutral-500 dark:text-neutral-400",
										children: t
									})
								}, t))
							})
						})
					}),
					/* @__PURE__ */ jsxs(Section, {
						className: "py-24 lg:py-36",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex items-end justify-between flex-wrap gap-6 mb-16",
							children: [/* @__PURE__ */ jsxs(ScrollReveal, {
								variant: "fade-up",
								children: [/* @__PURE__ */ jsx(Eyebrow, { children: "Practice" }), /* @__PURE__ */ jsx("h2", {
									className: "mt-4 font-display text-4xl lg:text-5xl text-neutral-900 dark:text-white font-light",
									children: "Luxury architecture & interior services"
								})]
							}), /* @__PURE__ */ jsx(ScrollReveal, {
								variant: "fade-left",
								delay: 150,
								children: /* @__PURE__ */ jsx(Link, {
									to: "/services",
									className: "text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 hover:text-accent text-neutral-900 dark:text-white",
									children: "All services"
								})
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
							children: services.map((s, idx) => /* @__PURE__ */ jsx(ScrollReveal, {
								variant: "scale-up",
								delay: idx % 3 * 100,
								children: /* @__PURE__ */ jsxs("article", {
									className: "group relative overflow-hidden rounded bg-black aspect-[3/4] cursor-pointer",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "absolute inset-0 bg-cover bg-center opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out z-0",
											style: { backgroundImage: `url(${s.img})` }
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 z-10 transition-opacity duration-500 group-hover:opacity-90" }),
										/* @__PURE__ */ jsxs("div", {
											className: "absolute inset-0 z-20 p-8 lg:p-10 flex flex-col justify-between",
											children: [/* @__PURE__ */ jsxs("div", {
												className: "flex items-baseline justify-between border-b border-white/10 pb-4",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-display text-2xl text-accent font-mono",
													children: s.n
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.65rem] uppercase tracking-widest text-white/50",
													children: "Service"
												})]
											}), /* @__PURE__ */ jsxs("div", {
												className: "space-y-3",
												children: [/* @__PURE__ */ jsx("h3", {
													className: "font-display text-2xl text-white font-light",
													children: s.t
												}), /* @__PURE__ */ jsx("p", {
													className: "text-xs leading-relaxed text-white/70 font-light line-clamp-3 group-hover:line-clamp-none transition-all duration-500",
													children: s.d
												})]
											})]
										})
									]
								})
							}, s.n))
						})]
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "py-24 lg:py-36 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-900 max-w-full",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-[1400px] mx-auto px-6 lg:px-12",
							children: [/* @__PURE__ */ jsxs("div", {
								className: "flex items-end justify-between flex-wrap gap-6 mb-16",
								children: [/* @__PURE__ */ jsxs(ScrollReveal, {
									variant: "fade-up",
									children: [/* @__PURE__ */ jsx(Eyebrow, { children: "Selected Work" }), /* @__PURE__ */ jsx("h2", {
										className: "mt-4 font-display text-4xl lg:text-5xl text-neutral-900 dark:text-white font-light",
										children: "A practice of refined environments"
									})]
								}), /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "fade-left",
									delay: 150,
									children: /* @__PURE__ */ jsx(Link, {
										to: "/projects",
										className: "text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 hover:text-accent text-neutral-900 dark:text-white",
										children: "View all projects"
									})
								})]
							}), /* @__PURE__ */ jsxs("div", {
								className: "grid lg:grid-cols-12 gap-8 lg:gap-12",
								children: [
									/* @__PURE__ */ jsx("figure", {
										className: "lg:col-span-7 group cursor-pointer",
										children: /* @__PURE__ */ jsxs(ScrollReveal, {
											variant: "scale-up",
											children: [/* @__PURE__ */ jsx("div", {
												className: "overflow-hidden rounded aspect-[4/3]",
												children: /* @__PURE__ */ jsx("img", {
													src: o1_default,
													alt: "Project 1",
													loading: "lazy",
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
												})
											}), /* @__PURE__ */ jsxs("figcaption", {
												className: "mt-5 flex justify-between text-sm text-neutral-900 dark:text-white",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-display text-xl font-light",
													children: "Penthouse Aria"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.7rem] uppercase tracking-wider text-neutral-500",
													children: "Residence · Gurgaon"
												})]
											})]
										})
									}),
									/* @__PURE__ */ jsx("figure", {
										className: "lg:col-span-5 group cursor-pointer",
										children: /* @__PURE__ */ jsxs(ScrollReveal, {
											variant: "scale-up",
											delay: 150,
											children: [/* @__PURE__ */ jsx("div", {
												className: "overflow-hidden rounded aspect-[4/5]",
												children: /* @__PURE__ */ jsx("img", {
													src: o2_default,
													alt: "Project 2",
													loading: "lazy",
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
												})
											}), /* @__PURE__ */ jsxs("figcaption", {
												className: "mt-5 flex justify-between text-sm text-neutral-900 dark:text-white",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-display text-xl font-light",
													children: "Maison No. 12"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.7rem] uppercase tracking-wider text-neutral-500",
													children: "Hospitality · Delhi"
												})]
											})]
										})
									}),
									/* @__PURE__ */ jsx("figure", {
										className: "lg:col-span-5 group cursor-pointer",
										children: /* @__PURE__ */ jsxs(ScrollReveal, {
											variant: "scale-up",
											children: [/* @__PURE__ */ jsx("div", {
												className: "overflow-hidden rounded aspect-[4/5]",
												children: /* @__PURE__ */ jsx("img", {
													src: o3_default,
													alt: "Project 3",
													loading: "lazy",
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
												})
											}), /* @__PURE__ */ jsxs("figcaption", {
												className: "mt-5 flex justify-between text-sm text-neutral-900 dark:text-white",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-display text-xl font-light",
													children: "Atelier Travertine"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.7rem] uppercase tracking-wider text-neutral-500",
													children: "Retail · Mumbai"
												})]
											})]
										})
									}),
									/* @__PURE__ */ jsx("figure", {
										className: "lg:col-span-7 group cursor-pointer",
										children: /* @__PURE__ */ jsxs(ScrollReveal, {
											variant: "scale-up",
											delay: 150,
											children: [/* @__PURE__ */ jsx("div", {
												className: "overflow-hidden rounded aspect-[4/3]",
												children: /* @__PURE__ */ jsx("img", {
													src: o4_default,
													alt: "Project 4",
													loading: "lazy",
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
												})
											}), /* @__PURE__ */ jsxs("figcaption", {
												className: "mt-5 flex justify-between text-sm text-neutral-900 dark:text-white",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-display text-xl font-light",
													children: "Villa Selene"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.7rem] uppercase tracking-wider text-neutral-500",
													children: "Architecture · NCR"
												})]
											})]
										})
									}),
									/* @__PURE__ */ jsx("figure", {
										className: "lg:col-span-7 group cursor-pointer",
										children: /* @__PURE__ */ jsxs(ScrollReveal, {
											variant: "scale-up",
											children: [/* @__PURE__ */ jsx("div", {
												className: "overflow-hidden rounded aspect-[4/3]",
												children: /* @__PURE__ */ jsx("img", {
													src: o5_default,
													alt: "My Profile",
													loading: "lazy",
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
												})
											}), /* @__PURE__ */ jsxs("figcaption", {
												className: "mt-5 flex justify-between text-sm text-neutral-900 dark:text-white",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-display text-xl font-light",
													children: "My Portrait"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.7rem] uppercase tracking-wider text-neutral-500",
													children: "About · Me"
												})]
											})]
										})
									}),
									/* @__PURE__ */ jsx("figure", {
										className: "lg:col-span-5 group cursor-pointer",
										children: /* @__PURE__ */ jsxs(ScrollReveal, {
											variant: "scale-up",
											delay: 150,
											children: [/* @__PURE__ */ jsx("div", {
												className: "overflow-hidden rounded aspect-[4/5]",
												children: /* @__PURE__ */ jsx("img", {
													src: o6_default,
													alt: "Project 6",
													loading: "lazy",
													className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
												})
											}), /* @__PURE__ */ jsxs("figcaption", {
												className: "mt-5 flex justify-between text-sm text-neutral-900 dark:text-white",
												children: [/* @__PURE__ */ jsx("span", {
													className: "font-display text-xl font-light",
													children: "Minimalist Space"
												}), /* @__PURE__ */ jsx("span", {
													className: "text-[0.7rem] uppercase tracking-wider text-neutral-500",
													children: "Design · Studio"
												})]
											})]
										})
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "py-24 lg:py-36",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center",
							children: [/* @__PURE__ */ jsx("div", {
								className: "lg:col-span-5",
								children: /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "scale-up",
									children: /* @__PURE__ */ jsx("div", {
										className: "overflow-hidden rounded shadow-2xl bg-neutral-100 dark:bg-neutral-900 aspect-[4/5]",
										children: /* @__PURE__ */ jsx("img", {
											src: developer_showcase_default,
											alt: "Developer Showcase",
											className: "w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
										})
									})
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 space-y-6",
								children: [
									/* @__PURE__ */ jsxs(ScrollReveal, {
										variant: "fade-left",
										delay: 150,
										children: [/* @__PURE__ */ jsx(Eyebrow, { children: "for developers" }), /* @__PURE__ */ jsx("h2", {
											className: "font-display text-3xl lg:text-5xl tracking-tight leading-tight font-light mt-2",
											children: "High-conversion commercial & sample environment masterworks"
										})]
									}),
									/* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										delay: 250,
										children: /* @__PURE__ */ jsx("p", {
											className: "text-base font-light leading-relaxed text-neutral-600 dark:text-neutral-400",
											children: "Casa Exotique helps developers create high-conversion environments through strategically designed sample apartments, experience centers, clubhouses, arrival sequences, sales galleries and branded amenity zones."
										})
									}),
									/* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										delay: 355,
										children: /* @__PURE__ */ jsx("ul", {
											className: "grid sm:grid-cols-2 gap-x-6 gap-y-3 pt-4 text-sm text-neutral-800 dark:text-neutral-300 font-light",
											children: [
												"Sample apartments",
												"Experience centers",
												"Clubhouses",
												"Premium arrival experiences",
												"Sales galleries",
												"Branded amenity zones"
											].map((i) => /* @__PURE__ */ jsxs("li", {
												className: "flex gap-3 items-center",
												children: [/* @__PURE__ */ jsx("span", {
													className: "text-accent text-lg",
													children: "—"
												}), i]
											}, i))
										})
									}),
									/* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										delay: 450,
										children: /* @__PURE__ */ jsx("div", {
											className: "pt-4",
											children: /* @__PURE__ */ jsx(Link, {
												to: "/services",
												className: "inline-flex items-center text-[0.72rem] uppercase tracking-[0.28em] border-b border-accent pb-0.5 text-black dark:text-white font-medium hover:text-accent transition-colors",
												children: "Developer Solutions"
											})
										})
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "py-24 lg:py-36 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 max-w-full overflow-hidden",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-[1400px] mx-auto px-6 lg:px-12",
							children: [/* @__PURE__ */ jsx("div", {
								className: "max-w-3xl mb-16 space-y-3",
								children: /* @__PURE__ */ jsxs(ScrollReveal, {
									variant: "fade-up",
									children: [/* @__PURE__ */ jsx(Eyebrow, { children: "Method" }), /* @__PURE__ */ jsxs("h2", {
										className: "font-display text-4xl lg:text-5xl tracking-tight leading-tight text-neutral-900 dark:text-white font-light",
										children: [
											"Design & execution, in ",
											/* @__PURE__ */ jsx("br", { className: "hidden sm:inline" }),
											"six considered movements"
										]
									})]
								})
							}), /* @__PURE__ */ jsx("div", {
								ref: scrollRef,
								className: "overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none dynamic-scroll-container",
								children: /* @__PURE__ */ jsx("ol", {
									className: "flex gap-8 pb-6 w-max animate-flow-loop",
									children: [...process, ...process].map((p, index) => /* @__PURE__ */ jsx("li", {
										className: "w-[85vw] sm:w-[45vw] lg:w-[24vw] min-w-[300px] shrink-0 pointer-events-none",
										children: /* @__PURE__ */ jsx(ScrollReveal, {
											variant: "fade-up",
											delay: index % process.length * 80,
											children: /* @__PURE__ */ jsxs("div", {
												className: "relative overflow-hidden rounded bg-black aspect-[3/4] group border border-white/5 shadow-xl transition-all duration-500 pointer-events-auto",
												children: [
													/* @__PURE__ */ jsx("div", {
														className: "absolute inset-0 bg-cover bg-center opacity-75 group-hover:scale-105 transition-transform duration-1000 ease-out z-0",
														style: { backgroundImage: `url(${p.img})` }
													}),
													/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 z-10 transition-opacity duration-500 group-hover:opacity-85" }),
													/* @__PURE__ */ jsxs("div", {
														className: "absolute inset-0 z-20 p-8 flex flex-col justify-between",
														children: [/* @__PURE__ */ jsxs("div", {
															className: "flex items-baseline justify-between border-b border-white/10 pb-4",
															children: [/* @__PURE__ */ jsx("span", {
																className: "font-display text-3xl text-accent font-mono",
																children: p.n
															}), /* @__PURE__ */ jsx("span", {
																className: "text-[0.6rem] uppercase tracking-[0.25em] text-white/50 group-hover:text-accent transition-colors font-medium",
																children: index % process.length !== process.length - 1 ? "Next →" : "Reveal"
															})]
														}), /* @__PURE__ */ jsxs("div", {
															className: "space-y-3",
															children: [/* @__PURE__ */ jsx("h3", {
																className: "font-display text-xl text-white font-light group-hover:text-accent transition-colors",
																children: p.t
															}), /* @__PURE__ */ jsx("p", {
																className: "text-xs leading-relaxed font-light text-white/70 line-clamp-4 group-hover:line-clamp-none transition-all duration-500",
																children: p.d
															})]
														})]
													})
												]
											})
										})
									}, `${p.n}-${index}`))
								})
							})]
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "py-24 lg:py-32 border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50/30 dark:bg-neutral-950/10 relative overflow-hidden",
						children: /* @__PURE__ */ jsxs("div", {
							className: "max-w-5xl mx-auto px-6 relative",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "text-center",
									children: /* @__PURE__ */ jsxs(ScrollReveal, {
										variant: "fade-up",
										children: [/* @__PURE__ */ jsx("span", {
											className: "font-display text-lg lg:text-xl font-light italic text-neutral-500 dark:text-neutral-400 block mb-2",
											children: "From Vision to Reality"
										}), /* @__PURE__ */ jsx("h2", {
											className: "font-display text-3xl lg:text-4xl tracking-tight text-neutral-900 dark:text-white font-light mb-8",
											children: "Client Feedback"
										})]
									})
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "relative min-h-[320px] sm:min-h-[260px] lg:min-h-[220px] flex items-center justify-center px-4 lg:px-12",
									children: [
										/* @__PURE__ */ jsx("button", {
											onClick: prevTestimonial,
											className: "absolute left-0 z-30 p-2 text-neutral-400 hover:text-accent transition-colors text-2xl font-light tracking-widest outline-none",
											"aria-label": "Previous feedback",
											children: "‹"
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "w-full text-center transition-all duration-700 ease-in-out",
											children: [
												/* @__PURE__ */ jsx("div", {
													className: "font-serif text-3xl lg:text-4xl text-neutral-300 dark:text-neutral-700 leading-none mb-4",
													children: "“"
												}),
												/* @__PURE__ */ jsx("p", {
													className: "text-base md:text-lg font-light leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto italic transition-all duration-500",
													children: testimonials[activeTestimonial].text
												}),
												/* @__PURE__ */ jsxs("div", {
													className: "mt-10 flex flex-col sm:flex-row items-center justify-center gap-4",
													children: [/* @__PURE__ */ jsx("img", {
														src: testimonials[activeTestimonial].img,
														alt: testimonials[activeTestimonial].name,
														className: "w-14 h-14 rounded object-cover border border-neutral-200 dark:border-neutral-800 md:grayscale md:hover:grayscale-0 transition-all duration-500"
													}), /* @__PURE__ */ jsxs("div", {
														className: "text-center sm:text-left",
														children: [/* @__PURE__ */ jsx("h4", {
															className: "text-sm font-medium tracking-[0.15em] text-neutral-900 dark:text-white uppercase",
															children: testimonials[activeTestimonial].name
														}), /* @__PURE__ */ jsx("p", {
															className: "text-xs font-light text-neutral-500 dark:text-neutral-400 mt-0.5",
															children: testimonials[activeTestimonial].role
														})]
													})]
												})
											]
										}),
										/* @__PURE__ */ jsx("button", {
											onClick: nextTestimonial,
											className: "absolute right-0 z-30 p-2 text-neutral-400 hover:text-accent transition-colors text-2xl font-light tracking-widest outline-none",
											"aria-label": "Next feedback",
											children: "›"
										})
									]
								}),
								/* @__PURE__ */ jsx("div", {
									className: "flex justify-center gap-2 mt-8 z-30",
									children: testimonials.map((_, index) => /* @__PURE__ */ jsx("button", {
										onClick: () => setActiveTestimonial(index),
										className: `h-1.5 transition-all duration-500 rounded-full ${index === activeTestimonial ? "w-6 bg-accent" : "w-1.5 bg-neutral-300 dark:bg-neutral-700"}`,
										"aria-label": `Go to slide ${index + 1}`
									}, index))
								})
							]
						})
					}),
					/* @__PURE__ */ jsx(Section, {
						className: "py-24 lg:py-36 border-t border-neutral-200 dark:border-neutral-900",
						children: /* @__PURE__ */ jsxs("div", {
							className: "grid lg:grid-cols-12 gap-12 items-start",
							children: [/* @__PURE__ */ jsx("div", {
								className: "lg:col-span-5 space-y-4",
								children: /* @__PURE__ */ jsxs(ScrollReveal, {
									variant: "fade-right",
									children: [
										/* @__PURE__ */ jsx(Eyebrow, { children: "Differentiator" }),
										/* @__PURE__ */ jsxs("h2", {
											className: "font-display text-4xl lg:text-5xl leading-tight text-neutral-900 dark:text-white font-light",
											children: [
												"Why Casa Exotique ",
												/* @__PURE__ */ jsx("br", {}),
												"Is ",
												/* @__PURE__ */ jsx("em", {
													className: "text-accent not-italic font-serif",
													children: "Different"
												})
											]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "text-sm text-neutral-500 font-light max-w-sm leading-relaxed mt-4",
											children: "We do not believe luxury should feel loud. True luxury feels effortless because every detail has already been considered."
										})
									]
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "lg:col-span-7 space-y-10",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "space-y-8",
									children: [/* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										children: /* @__PURE__ */ jsx("p", {
											className: "text-lg font-light leading-relaxed text-neutral-600 dark:text-neutral-400",
											children: "Most firms focus only on visual design. Casa Exotique approaches projects through an integrated lens of technical mastery and emotional value."
										})
									}), /* @__PURE__ */ jsx(ScrollReveal, {
										variant: "fade-left",
										delay: 150,
										children: /* @__PURE__ */ jsx("ul", {
											className: "grid sm:grid-cols-2 gap-x-8 gap-y-4 border-l pl-6 lg:pl-10 py-2 border-neutral-200 dark:border-neutral-800",
											children: [
												"architecture",
												"emotional storytelling",
												"execution intelligence",
												"hospitality thinking",
												"material depth",
												"spatial psychology"
											].map((item) => /* @__PURE__ */ jsxs("li", {
												className: "group flex items-center gap-4 text-sm tracking-wide text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors",
												children: [/* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 bg-accent/60 rounded-full group-hover:bg-accent group-hover:scale-125 transition-all duration-300" }), /* @__PURE__ */ jsx("span", {
													className: "lowercase font-light tracking-[0.05em]",
													children: item
												})]
											}, item))
										})
									})]
								}), /* @__PURE__ */ jsx(ScrollReveal, {
									variant: "fade-left",
									delay: 250,
									className: "pt-2",
									children: /* @__PURE__ */ jsx(Link, {
										to: "/contact",
										className: "inline-flex items-center px-8 py-5 font-medium text-[0.72rem] uppercase tracking-[0.28em] hover:bg-accent hover:text-white transition-colors bg-black text-white dark:bg-white dark:text-black shadow-lg",
										children: "Schedule a Design Consultation"
									})
								})]
							})]
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/assets/services-banner.jpg
var services_banner_default = "/assets/services-banner-BFZLEf9_.jpg";
//#endregion
//#region src/assets/services-arch.jpg
var services_arch_default = "/assets/services-arch-CX_Jit3u.jpg";
//#endregion
//#region src/assets/services-interior.jpg
var services_interior_default = "/assets/services-interior-Dtif8qI8.jpg";
//#endregion
//#region src/assets/services-hospitality.jpg
var services_hospitality_default = "/assets/services-hospitality-DGWlGquM.jpg";
//#endregion
//#region src/assets/services-retail.jpg
var services_retail_default = "/assets/services-retail-Ca9344hJ.jpg";
//#endregion
//#region src/assets/services-developer.jpg
var services_developer_default = "/assets/services-developer-CjZt3Sq9.jpg";
//#endregion
//#region src/assets/services-turnkey.jpg
var services_turnkey_default = "/assets/services-turnkey-DfIne_mH.jpg";
//#endregion
//#region src/assets/banner-arch.jpg
var banner_arch_default = "/assets/banner-arch-DTqQWc8w.jpg";
//#endregion
//#region src/assets/banner-interior.jpg
var banner_interior_default = "/assets/banner-interior-BzgaQxwY.jpg";
//#endregion
//#region src/assets/banner-hospitality.jpg
var banner_hospitality_default = "/assets/banner-hospitality-C4wpT2EW.jpg";
//#endregion
//#region src/assets/banner-retail.jpg
var banner_retail_default = "/assets/banner-retail--OpU9NLL.jpg";
//#endregion
//#region src/assets/banner-developer.jpg
var banner_developer_default = "/assets/banner-developer-AzZESDX3.jpg";
//#endregion
//#region src/assets/banner-turnkey.jpg
var banner_turnkey_default = "/assets/banner-turnkey-DtDfuzXb.jpg";
//#endregion
//#region src/routes/services.index.tsx
var Route$3 = createFileRoute("/services/")({ component: ServicesPage });
var servicesData = [
	{
		slug: "iconic-architecture",
		t: "Architecture",
		d: "Thoughtfully designed architectural environments that balance spatial planning, natural light, materiality and long-term usability.",
		items: [
			"Luxury residences",
			"Villas",
			"Hospitality environments",
			"Boutique commercial spaces",
			"Developer-led architectural concepts"
		],
		img: services_arch_default,
		innerBanner: banner_arch_default
	},
	{
		slug: "interior-design",
		t: "Luxury Residential Interiors",
		d: "Highly bespoke homes designed around the client's lifestyle, routines and emotional connection to space.",
		items: [
			"Penthouses",
			"Private villas",
			"High-end apartments",
			"Personal material narratives",
			"Timeless detailing"
		],
		img: services_interior_default,
		innerBanner: banner_interior_default
	},
	{
		slug: "hospitality-design",
		t: "Hospitality Design",
		d: "Immersive hospitality environments that create emotional memory and elevate the guest experience.",
		items: [
			"Boutique hotels",
			"Cafés",
			"Restaurants & lounges",
			"Luxury dining concepts",
			"Experiential spaces"
		],
		img: services_hospitality_default,
		innerBanner: banner_hospitality_default
	},
	{
		slug: "luxury-retail",
		t: "Luxury Retail Design",
		d: "Retail environments that increase engagement, customer experience and premium brand perception.",
		items: [
			"Flagship stores",
			"Brand boutiques",
			"Pop-up environments",
			"Showroom concepts",
			"Display & lighting design"
		],
		img: services_retail_default,
		innerBanner: banner_retail_default
	},
	{
		slug: "developer-solutions",
		t: "Developer Solutions",
		d: "Emotionally persuasive environments that accelerate buyer confidence and enhance project positioning.",
		items: [
			"Sample apartments",
			"Sales galleries",
			"Experience centers",
			"Clubhouses & lobbies",
			"Amenity & investor environments"
		],
		img: services_developer_default,
		innerBanner: banner_developer_default
	},
	{
		slug: "turnkey-execution",
		t: "Turnkey Project Execution",
		d: "End-to-end execution with complete project accountability — under a single, integrated system.",
		items: [
			"Civil & technical coordination",
			"Custom furniture",
			"Procurement & lighting",
			"Fit-outs & finishing",
			"Project management"
		],
		img: services_turnkey_default,
		innerBanner: banner_turnkey_default
	}
];
function ServicesPage() {
	const containerRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("reveal-active");
				else entry.target.classList.remove("reveal-active");
			});
		}, {
			threshold: .01,
			rootMargin: "0px 0px -4px 0px"
		});
		const elements = containerRef.current?.querySelectorAll(".scroll-reveal");
		elements?.forEach((el) => observer.observe(el));
		return () => {
			elements?.forEach((el) => observer.unobserve(el));
		};
	}, []);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } }),
		/* @__PURE__ */ jsxs("div", {
			className: "absolute left-0 right-0 top-0 w-screen h-screen overflow-hidden bg-neutral-900 z-0",
			children: [/* @__PURE__ */ jsx("img", {
				src: services_banner_default,
				alt: "Services",
				className: "w-full h-full object-cover animate-hero-full"
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 pointer-events-none" })]
		}),
		/* @__PURE__ */ jsx("div", { className: "h-screen w-full invisible pointer-events-none" }),
		/* @__PURE__ */ jsxs("div", {
			ref: containerRef,
			className: "bg-white text-neutral-900 relative z-10 px-6 sm:px-12 pb-32 pt-24 rounded-t-[40px] shadow-[0_-30px_60px_rgba(0,0,0,0.18)]",
			children: [/* @__PURE__ */ jsx("div", {
				className: "max-w-6xl mx-auto scroll-reveal mb-12",
				children: /* @__PURE__ */ jsx(PageHero, {
					eyebrow: "Practice",
					title: "Architecture, interiors and execution — under one studio.",
					intro: "From private residences to large-scale developer environments, Casa Exotique brings the entire design and delivery process under one accountable team."
				})
			}), /* @__PURE__ */ jsx("section", {
				className: "max-w-6xl mx-auto mt-20 relative z-10",
				children: /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12",
					children: servicesData.map((service, idx) => /* @__PURE__ */ jsxs("div", {
						className: "scroll-reveal relative h-[65vh] md:h-[75vh] w-full overflow-hidden group rounded-xl shadow-md bg-neutral-100 border border-neutral-100/60",
						style: { transitionDelay: `${idx % 2 * 100}ms` },
						children: [
							/* @__PURE__ */ jsx("img", {
								src: service.img,
								alt: service.t,
								className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[2.5s] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-105"
							}),
							/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-black/95 transition-all duration-700" }),
							/* @__PURE__ */ jsxs("div", {
								className: "absolute inset-x-0 bottom-0 flex flex-col items-center justify-center text-center pb-16 pt-24 px-6 z-10",
								children: [/* @__PURE__ */ jsx("h2", {
									className: "font-display text-xl sm:text-2xl lg:text-3xl text-white tracking-widest uppercase mb-6 transition-all duration-500 group-hover:tracking-[0.15em]",
									children: service.t
								}), /* @__PURE__ */ jsx(Link, {
									to: "/services/$serviceId",
									params: { serviceId: service.slug },
									className: "px-8 py-3 bg-[#9e2a2b] text-white text-[0.65rem] font-semibold tracking-[0.3em] uppercase rounded-full transition-all duration-500 hover:bg-white hover:text-black",
									children: "Learn More"
								})]
							})
						]
					}, service.slug))
				})
			})]
		})
	] });
}
//#endregion
//#region src/routes/services_.$serviceId.tsx
var Route$2 = createFileRoute("/services_/$serviceId")({ component: ServiceDetailPage });
function ServiceDetailPage() {
	const { serviceId } = Route$2.useParams();
	const currentService = servicesData.find((s) => s.slug === serviceId);
	const detailContainerRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) entry.target.classList.add("reveal-active");
				else entry.target.classList.remove("reveal-active");
			});
		}, {
			threshold: .01,
			rootMargin: "0px 0px -4px 0px"
		});
		const elements = detailContainerRef.current?.querySelectorAll(".scroll-reveal");
		elements?.forEach((el) => observer.observe(el));
		return () => {
			elements?.forEach((el) => observer.unobserve(el));
		};
	}, [serviceId]);
	if (!currentService) return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsx("div", {
		className: "pt-40 text-center text-neutral-800 min-h-screen font-light",
		children: "Service not found"
	}) });
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: `
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
      ` } }),
		/* @__PURE__ */ jsxs("div", {
			className: "absolute left-0 right-0 top-0 w-screen h-[75vh] md:h-[85vh] overflow-hidden bg-neutral-900 z-0",
			children: [/* @__PURE__ */ jsx("img", {
				src: currentService.innerBanner,
				alt: currentService.t,
				className: "w-full h-full object-cover animate-bg"
			}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 pointer-events-none" })]
		}),
		/* @__PURE__ */ jsx("div", { className: "h-[62vh] md:h-[72vh] w-full invisible pointer-events-none" }),
		/* @__PURE__ */ jsx("div", {
			ref: detailContainerRef,
			className: "bg-white text-neutral-900 relative z-10 px-6 sm:px-12 pb-32 pt-16 rounded-t-3xl md:rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.12)]",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto space-y-16",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-3 scroll-reveal",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs uppercase tracking-[0.35em] text-[#9e2a2b] font-bold block",
								children: "— Bespoke Studio Practice"
							}),
							/* @__PURE__ */ jsx("h1", {
								className: "font-display text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight uppercase leading-none text-neutral-900",
								children: currentService.t
							}),
							/* @__PURE__ */ jsx("div", { className: "h-[2px] bg-[#9e2a2b] w-24 mt-6" })
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-2",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-7 space-y-6 scroll-reveal",
							style: { transitionDelay: "100ms" },
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold",
								children: "The Core Concept"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-base sm:text-lg text-neutral-600 leading-relaxed font-light text-justify tracking-wide",
								children: currentService.d
							})]
						}), /* @__PURE__ */ jsxs("div", {
							className: "lg:col-span-5 bg-neutral-50 p-8 md:p-10 rounded-xl border border-neutral-100 space-y-6 h-fit shadow-sm scroll-reveal",
							style: { transitionDelay: "200ms" },
							children: [/* @__PURE__ */ jsx("h3", {
								className: "text-xs uppercase tracking-[0.2em] text-[#9e2a2b] font-bold",
								children: "Scope of Work"
							}), /* @__PURE__ */ jsx("ul", {
								className: "space-y-4",
								children: currentService.items.map((item) => /* @__PURE__ */ jsxs("li", {
									className: "flex gap-4 items-start text-sm text-neutral-600 border-b border-neutral-200/60 pb-3 last:border-0 last:pb-0 transition-all duration-300 hover:translate-x-1",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-[#9e2a2b] font-medium",
										children: "—"
									}), /* @__PURE__ */ jsx("span", {
										className: "leading-tight font-light",
										children: item
									})]
								}, item))
							})]
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "w-full pt-12 text-center scroll-reveal",
						style: { transitionDelay: "250ms" },
						children: /* @__PURE__ */ jsx("p", {
							className: "text-xs tracking-[0.4em] text-neutral-300 uppercase font-light",
							children: "Casa Exotique Design Studio"
						})
					})
				]
			})
		})
	] });
}
//#endregion
//#region src/routes/founder.news.tsx
var $$splitComponentImporter$1 = () => import("./founder.news-CDWmTCMB.js");
var Route$1 = createFileRoute("/founder/news")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/founder.awards.tsx
var $$splitComponentImporter = () => import("./founder.awards-BsXxar06.js");
var Route = createFileRoute("/founder/awards")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var SitemapDotxmlRoute = Route$11.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$12
});
var ProjectsRoute = Route$10.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$12
});
var FounderRoute = Route$9.update({
	id: "/founder",
	path: "/founder",
	getParentRoute: () => Route$12
});
var FaqRoute = Route$8.update({
	id: "/faq",
	path: "/faq",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$7.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var CareersRoute = Route$6.update({
	id: "/careers",
	path: "/careers",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var ServicesIndexRoute = Route$3.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$12
});
var ServicesServiceIdRoute = Route$2.update({
	id: "/services_/$serviceId",
	path: "/services/$serviceId",
	getParentRoute: () => Route$12
});
var FounderNewsRoute = Route$1.update({
	id: "/news",
	path: "/news",
	getParentRoute: () => FounderRoute
});
var FounderRouteChildren = {
	FounderAwardsRoute: Route.update({
		id: "/awards",
		path: "/awards",
		getParentRoute: () => FounderRoute
	}),
	FounderNewsRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CareersRoute,
	ContactRoute,
	FaqRoute,
	FounderRoute: FounderRoute._addFileChildren(FounderRouteChildren),
	ProjectsRoute,
	SitemapDotxmlRoute,
	ServicesServiceIdRoute,
	ServicesIndexRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
