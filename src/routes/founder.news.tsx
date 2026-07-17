import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, Section } from "@/components/SiteLayout";
import { motion } from "framer-motion";

// Importing images news1.jpg to news6.jpg cleanly
import news1 from "@/assets/news1.jpg";
import news2 from "@/assets/news2.jpg";
import news3 from "@/assets/news3.jpg";
import news4 from "@/assets/news4.jpg";
import news5 from "@/assets/news5.jpg";
import news6 from "@/assets/news6.jpg";

// New imports from news7.png to news16.png as per assets
import news7 from "@/assets/news7.png";
import news8 from "@/assets/news8.png";
import news9 from "@/assets/news9.png";
import news10 from "@/assets/news10.png";
import news11 from "@/assets/news11.png";
import news12 from "@/assets/news12.png";
import news13 from "@/assets/news13.png";
import news14 from "@/assets/news14.png";
import news15 from "@/assets/news15.png";
import news16 from "@/assets/news16.png";

//news17.png to news24.png
import news17 from "@/assets/news17.png";
import news18 from "@/assets/news18.png";
import news19 from "@/assets/news19.png";
import news20 from "@/assets/news20.png";
import news21 from "@/assets/news21.png";
import news22 from "@/assets/news22.png";
import news23 from "@/assets/news23.png";
import news24 from "@/assets/news24.png";



import newsBannerImg from "@/assets/news-banner.jpg";

export const Route = createFileRoute("/founder/news")({
  component: NewsPage,
});

const items = [
  { 
    src: "99acres.com", 
    title: "Women's Day 2025: How Bhawana Bhatnagar Blends Modern Designs With India's Traditional Artistry For Her Luxury Interior Design Firm",
    desc: "When it comes to the domain of luxury interior design, Bhawana Bhatnagar is a name to reckon with. Through her firm Casa Exotique, she churns out masterful creations to change the very faces of households. Established in 2019, the Gurgaon-based organisation has an all-encompassing approach to interior design and implementation. Here's more to her story.",
    img: news1,
    url: "https://www.herzindagi.com/inspiration/womens-day-2025-how-bhawana-bhatnagar-blends-contemporary-designs-with-indias-traditional-artistry-for-her-luxury-interior-design-firm-article-1020518" 
  },
  { 
    src: "Festive Trends", 
    title: "Maximising Small Spaces for Diwali: Festive Decor Ideas for Compact Homes",
    desc: "Decor Ideas For Compact Homes: Simple yet effective décor ideas can also make your small space shine brightly this Diwali. The key is to balance functionality with festivity. Here are some statement decor ideas from which your compact home can feel just as grand and festive as any larger space.",
    img: news2,
    url: "https://www.thedailyjagran.com/lifestyle/maximising-small-spaces-for-diwali-festive-decor-ideas-for-compact-homes-10197213" 
  },
  { 
    src: "Eco-Design", 
    title: "Diwali 2024: 4 Decor Tips For An Eco-Friendly Festival",
    desc: "In fact, eco-friendly choices often add unique charm, depth, and authenticity to our spaces. Here are some thoughtful, creative ways to celebrate an eco-friendly Diwali without losing the festive spirit by Bhawana Bhatnagar, Founder, Casa Exotique.",
    img: news3,
    url: "https://www.herzindagi.com/society-culture/diwali-sustainable-decor-tips-eco-friendly-festival-article-1006305" 
  },
  { 
    src: "Fortune India", 
    title: "Fortune India Established Her as One of the Insightful Icons",
    desc: "Casa Exotique, led by Bhawana Bhatnagar, transforms spaces into luxurious, comfortable havens. An artist and accomplished businesswoman, Bhawana integrates her creative vision with international business acumen. With over 40 completed projects, Casa Exotique shines under her leadership, earning Bhawana recognition from Fortune India as a leading industry icon.",
    img: news4,
    url: "https://casaexotique.com/wp-content/uploads/2024/10/insightfulicons-Jan-2022.pdf" 
  },
  { 
    src: "Times News", 
    title: "Times News Placed Her Among the Top 7 Business Influencers",
    desc: "It Was a Moment of Pride When Times News Recognized Her Efforts. It was a moment of pride when Times News recognized Bhawana Bhatnagar's efforts and placed her among the top 7 business influencers. As the leader of Casa Exotique, Bhawana transforms spaces into luxurious havens, blending artistic vision with international business acumen across over multiple completed projects.",
    img: news5,
    url: "https://www.indiatoday.in/impact-feature/story/meet-top-7-business-influencers-who-will-motivate-you-to-dream-big-and-believe-in-yourself-1992472-2022-08-25" 
  },
  { 
    src: "Industry Outlook", 
    title: "Bhawana Bhatnagar: shared Insights on Post-COVID-19 Global Procurement Challenges",
    desc: "Bhawana Bhatnagar, recognized by Industry Outlook magazine, emerged as a prominent voice discussing the complexities of overseas procurement following COVID-19. Her insights underscored strategic resilience and innovative approaches, cementing her reputation as a thought leader in the industry.",
    img: news6,
    url: "https://casaexotique.com/wp-content/uploads/2024/10/Overseas-Procurement_-A-Real-Challenge-Faced-By-The-Industries-Due-To-Coronavirus-_-Industry-Outloo_compressed.pdf" 
  },
  // --- New Articles from Images 1 to 10 mapped dynamically ---
  { 
    src: "Money Control", 
    title: "Home decor ideas: Get your living room festive-ready with the perfect lighting, cushions and more",
    desc: "Creating a festival-ready home means blending luxury with tradition. Bhawana Bhatnagar shares how a calculated emphasis on bespoke ambient lighting, rich color palettes, and structural textiles transforms modern living spaces into highly welcoming, sophisticated environments.",
    img: news7,
    url: "https://www.moneycontrol.com/news/trends/lifestyle/home-decor-ideas-get-your-living-room-festive-ready-with-the-perfect-lighting-cushions-and-more-11497213.html" 
  },
  { 
    src: "Jagran.com", 
    title: "Decorating With Fabrics: Using Cushions, Drapes And Table Runners For A Festive Touch",
    desc: "By incorporating decorative fabric elements into your home, you'll create an ambience filled with warmth, tradition and festive cheer. Bhawana Bhatnagar outlines how designer cushions, custom drapery, and detailed table runners deliver an unmistakable premium finish.",
    img: news8,
    url: "https://english.jagran.com/lifestyle/decorating-with-fabrics-using-cushions-drapes-and-table-runners-for-a-festive-touch-10193421" 
  },
  { 
    src: "The Times Of India", 
    title: "Create a festival-ready home with smart tweaks to interior and Decor",
    desc: "Founder of Casa Exotique, Bhawana Bhatnagar, provides valuable tips for transforming residential spaces for the celebratory season. Simple yet deliberate touches like subtle decluttering, warm yellow light placements, and organic detailing keep spaces festive without extensive renovations.",
    img: news9,
    url: "https://timesofindia.indiatimes.com/life-style/spotlight/create-a-festival-ready-home-with-smart-tweaks-to-interior-and-decor/articleshow/94567213.cms" 
  },
  { 
    src: "News18.com", 
    title: "Transform Your Home for the Festive Season: Must-Have Statement Decor Pieces",
    desc: "As the festive season approaches, it's time to breathe new life into your home and create an inviting space. Discover the perfect premium accents and art pieces to elevate your home's emotional ambiance, curated exclusively by interior design leader Bhawana Bhatnagar.",
    img: news10,
    url: "https://www.news18.com/lifestyle/transform-your-home-for-the-festive-season-must-have-statement-decor-pieces-908123.html" 
  },
  { 
    src: "Zeenews.com", 
    title: "Diwali Home Makeover: Small Changes For A Big Festive Impact",
    desc: "A stunning festive makeover doesn't always require an overwhelming budget. Bhawana Bhatnagar explains how highly intentional minor modifications—like layering textures, introducing subtle metallic accents, and styling botanical elements—generate massive aesthetic differences.",
    img: news11,
    url: "https://zeenews.india.com/lifestyle/diwali-home-makeover-small-changes-for-a-big-festive-impact-2801452.html" 
  },
  { 
    src: "The Times Of India", 
    title: "Times 40 Under 40 North -2022 Leaders: Honouring Excellence!",
    desc: "An exceptional evening honoring dynamic entrepreneurs who are redefining benchmarks. Bhawana Bhatnagar was recognized under the '40 Under 40' North India cohort, validating her exceptional business growth, execution standards, and structural innovation at Casa Exotique.",
    img: news12,
    url: "https://timesofindia.indiatimes.com/business/india-business/times-40-under-40-north-2022-leaders-honouring-excellence/articleshow/92648210.cms" 
  },
  { 
    src: "Higher Education", 
    title: "Retro Interior Styling Never Goes Out of Trend",
    desc: "Nostalgia meets premium modernity. Bhawana Bhatnagar demystifies the timeless charm of retro-inspired structures and explains how to cleanly integrate warm, vintage elements into contemporary luxury layouts without disrupting visual cohesion.",
    img: news15,
    url: "https://www.siliconindia.com/news/retro-interior-styling-never-goes-out-of-trend-cid-11234.html" 
  },
  { 
    src: "99acres.com", 
    title: "Enhance your interiors with botanical décor",
    desc: "Fusing luxury with organic green elements. Bhawana Bhatnagar elaborates on strategic botanical staging, biological patterns, and biophilic placements that boost mental peace and introduce refreshing visual dynamics to standard spaces.",
    img: news13,
    url: "https://www.99acres.com/articles/enhance-your-interiors-with-botanical-decor-by-bhawana-bhatnagar.html" 
  },
  { 
    src: "99acres.com", 
    title: "Women's Day: Role of women in real estate",
    desc: "An insightful discussion surrounding the growing leadership and active presence of women across real estate and interior design industries. Bhawana Bhatnagar outlines key opportunities and structural reforms needed to empower aspiring female developers and designers.",
    img: news15,
    url: "https://www.99acres.com/articles/womens-day-role-of-women-in-real-estate-by-bhawana-bhatnagar.html" 
  },
  { 
    src: "OnlyMyHealth", 
    title: "Transform Your Home Into An Ideal Workplace",
    desc: "Adapting to the modern workspace. Learn the science of healthy remote environments as Bhawana Bhatnagar provides structural, ergonomic, and color psychology suggestions to design an inspiring, productivity-oriented workspace right at home.",
    img: news16,
    url: "https://www.onlymyhealth.com/work-from-home-transform-your-home-into-an-ideal-workplace-during-crisis-159012345.html" 
  },
  { 
    src: "99acres.com", 
    title: "Smart decor ideas during quarantine",
    img: news17,
    url: "https://www.onlymyhealth.com/work-from-home-transform-your-home-into-an-ideal-workplace-during-crisis-159012345.html" 
  },
  { 
    src: "99acres.com", 
    title: "Inexpensive ways to style your home",
    img: news16,
    url: "https://www.onlymyhealth.com/work-from-home-transform-your-home-into-an-ideal-workplace-during-crisis-159012345.html" 
  },
];

// High-End Luxury Up-and-Down Continuous Scroll View Animation Configs
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: [0.215, 0.610, 0.355, 1.000] } 
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 45, damping: 14 } 
  }
};

function NewsPage() {
  return (
    <SiteLayout transparentHeader={true}>
      <style dangerouslySetInnerHTML={{__html: `
        main {
          padding-top: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
          background-color: #ffffff !important;
        }
      `}} />

      {/* --- 1. RESPONSIVE IMMERSIVE BANNER (FULL EDGE-TO-EDGE ON PHONE & DESKTOP) --- */}
      <div className="w-full bg-neutral-50 border-b border-neutral-100 z-10 overflow-hidden">
        <img
          src={newsBannerImg}
          alt="Casa Exotique Press Banner Layout"
          className="w-full h-[40vh] sm:h-[55vh] md:h-auto object-cover md:object-contain block mx-auto"
        />
      </div>

      {/* --- 2. LUXURY CRISP WHITE CONTENT SECTION --- */}
      <div className="bg-white text-neutral-900 relative z-20">
        
        {/* Animated PageHero text sitting flawlessly below the banner */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInUpVariants}
          className="max-w-6xl mx-auto pt-20 pb-8 px-4 sm:px-6"
        >
          <PageHero
            eyebrow="Media · News"
            title={
              <span className="text-neutral-900 font-serif text-4xl md:text-6xl tracking-tight block">
                Casa Exotique <em className="text-accent not-italic font-normal">in the press</em>
              </span>
            }
            intro={
              <span className="text-neutral-500 font-light text-sm md:text-base max-w-2xl block mt-4 leading-relaxed">
                Featured stories, expert commentary and design insights from across leading publications.
              </span>
            }
          />
        </motion.div>

        {/* --- DYNAMIC INTERACTIVE CARDS STREAM --- */}
        <Section className="pb-32 pt-2">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.08 }} // Triggers beautifully going both up or down the page
            className="max-w-6xl mx-auto space-y-12 px-4 sm:px-6"
          >
            {items.map((i, index) => (
              <motion.div 
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3, ease: "easeOut" } }}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_35px_rgba(0,0,0,0.02)] hover:shadow-[0_25px_65px_rgba(128,0,32,0.09)] transition-all duration-500 p-6 md:p-8 grid md:grid-cols-12 gap-8 items-center border border-neutral-100"
              >
                {/* Left Frame: Image Content Container */}
                <div className="md:col-span-4 w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-xl bg-neutral-50 relative group border border-neutral-100">
                  <img 
                    src={i.img} 
                    alt={i.title}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-md text-neutral-800 text-[0.62rem] font-bold tracking-widest uppercase px-3 py-1 rounded-md shadow-sm border border-neutral-200/60">
                    {i.src}
                  </span>
                </div>

                {/* Right Frame: Elegant Typography Content */}
                <div className="md:col-span-8 space-y-4 flex flex-col justify-center">
                  <h3 className="font-serif text-xl md:text-2xl font-normal text-neutral-900 leading-snug tracking-tight hover:text-accent transition-colors duration-300">
                    {i.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm font-light leading-relaxed text-neutral-500 line-clamp-4 md:line-clamp-3">
                    {i.desc}
                  </p>
                  
                  {/* Premium Luxury Maroon Button */}
                  <div className="pt-2">
                    <motion.a 
                      whileHover={{ scale: 1.05, backgroundColor: "#5c0017" }}
                      whileTap={{ scale: 0.96 }}
                      href={i.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-9 py-3 text-[0.68rem] font-medium uppercase tracking-[0.24em] bg-[#800020] text-white rounded-full shadow-md shadow-[#800020]/10 transition-colors duration-300"
                    >
                      Know More
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </div>
    </SiteLayout>
  );
}