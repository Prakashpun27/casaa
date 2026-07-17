import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { Upload, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

// Local Images
import career1Img from "../assets/career1.jpg";
import careerBannerImg from "../assets/career-banner.jpg";
import formBackImg from "../assets/form-back.jpg";

export const Route = createFileRoute("/careers")({
  component: CareersPage,
});

function CareersPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Scroll Animation Logic
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
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <SiteLayout>
      <div className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 min-h-screen transition-colors duration-500 overflow-hidden">
        
        {/* SECTION 1: FULL SCREEN HERO COVER BANNER */}
        <section className="w-full h-screen relative overflow-hidden flex items-center">
          <img 
            src={careerBannerImg} 
            alt="Casa Exotique Studio Banner" 
            className="absolute inset-0 w-full h-full object-cover animate-scale-up"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          
          <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-12 mt-16">
            <div className="max-w-2xl space-y-4 animate-fade-in-up">
              <span className="text-xs uppercase tracking-[0.4em] text-neutral-300 font-medium block">
                Casa Exotique
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif tracking-wide text-white capitalize leading-[1.15]">
                Be part of a <br />
                <span className="italic text-[#f3d9b1] font-normal font-sans">team</span>
              </h1>
              <div className="w-16 h-0.5 bg-[#6B2D2D] mt-4" />
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 animate-pulse">
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll Down</span>
            <div className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center p-1">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </section>

        {/* SECTION 2: TEXT CONTENT & PHOTO SECTION */}
        <section className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24 lg:py-32 bg-white dark:bg-neutral-950">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 reveal reveal-fade-right">
              
              {/* BRANDED PREMIUM SUBHEADING (IMAGE STYLE MATCH) */}
              <div className="flex items-center gap-4 text-[#6B2D2D] dark:text-[#f3d9b1] font-medium tracking-[0.35em] text-xs uppercase mb-2">
                <span className="w-8 h-[2px] bg-[#6B2D2D] dark:bg-[#f3d9b1] inline-block" />
                Work With Us
              </div>

              <h2 className="text-3xl lg:text-5xl font-serif tracking-tight text-neutral-900 dark:text-white leading-[1.2]">
                Ready to elevate your <br />
                <span className="italic text-[#6B2D2D] dark:text-accent font-normal">creativity?</span>
              </h2>

              <div className="space-y-6 text-neutral-700 dark:text-neutral-300 font-light text-base lg:text-lg leading-relaxed max-w-xl">
                <p>
                  At Casa Exotique, we celebrate the transformative power of design. 
                  Join our innovative team, where your vision is valued, and help craft 
                  unforgettable spaces!
                </p>
                <p>
                  You'll work on diverse, inspiring projects across residential, commercial, 
                  retail, and hospitality spaces – with opportunities for growth and 
                  collaboration alongside top professionals in an inclusive environment.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl group border-4 border-neutral-100 dark:border-neutral-800 reveal reveal-fade-left">
              <img 
                src={career1Img} 
                alt="Casa Exotique Careers" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </section>

        {/* SECTION 3: LUXURY FORM WITH BACKGROUND IMAGE */}
        <section 
          id="apply-form" 
          className="relative text-white py-24 lg:py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${formBackImg})` 
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-neutral-950/80 to-black/85 backdrop-blur-[2px]" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 reveal reveal-fade-up">
            
            <div className="text-center space-y-4 mb-16">
              <h3 className="text-3xl lg:text-5xl font-serif tracking-[0.15em] uppercase text-white">
                APPLY NOW
              </h3>
              <div className="w-20 h-0.5 bg-[#6B2D2D] mx-auto rounded-full" />
              <p className="text-neutral-200 font-light text-sm tracking-wider uppercase">
                Begin your professional journey with us
              </p>
            </div>

            {submitted ? (
              <div className="bg-neutral-900/90 border border-[#6B2D2D]/50 rounded-2xl p-12 text-center space-y-6 max-w-lg mx-auto backdrop-blur-md shadow-2xl">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h3 className="text-2xl font-serif text-white">Application Submitted!</h3>
                <p className="text-neutral-400 text-sm">
                  Thank you for reaching out. Our recruitment team will review your portfolio and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    required
                    placeholder="Enter Name"
                    className="w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
                  />

                  <input 
                    type="email" 
                    required
                    placeholder="Enter Email"
                    className="w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
                  />

                  <input 
                    type="tel" 
                    required
                    placeholder="Contact Number"
                    className="w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
                  />

                  <input 
                    type="text" 
                    required
                    placeholder="Education Qualification"
                    className="w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
                  />

                  <input 
                    type="text" 
                    required
                    placeholder="Position Applied For"
                    className="w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
                  />

                  <input 
                    type="text" 
                    required
                    placeholder="Years of Experience"
                    className="w-full bg-white text-black placeholder:text-neutral-400 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B2D2D] transition-all font-light text-sm shadow-md"
                  />
                </div>

                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between border border-neutral-700/50 rounded-xl p-6 bg-black/70 gap-6 backdrop-blur-sm">
                  <div className="space-y-1">
                    <span className="block font-medium text-sm text-neutral-200">Upload Your Resume</span>
                    <span className="block text-xs text-neutral-400">Max File Size 2MB (JPG or PDF only)</span>
                  </div>

                  <div className="flex-1 max-w-md relative border-2 border-dashed border-neutral-600 rounded-lg p-4 bg-neutral-900/40 hover:border-[#6B2D2D] transition-all">
                    <input 
                      type="file" 
                      id="file-upload" 
                      accept=".pdf,.jpg,.jpeg"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={handleFileChange}
                    />
                    <div className="flex items-center justify-center gap-3 text-neutral-300">
                      <Upload className="w-5 h-5 text-neutral-400" />
                      <span className="text-xs truncate">
                        {fileName ? fileName : "Drag & drop or Click to choose file"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <button
                    type="submit"
                    className="bg-[#6B2D2D] hover:bg-[#522222] text-white px-14 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 border border-[#8c3d3d]/20"
                  >
                    Submit Application
                  </button>
                </div>

              </form>
            )}

          </div>
        </section>

        {/* REFRESHED PREMIUM CSS ANIMATIONS */}
        <style dangerouslySetInnerHTML={{__html: `
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
        `}} />

      </div>
    </SiteLayout>
  );
}

export default CareersPage;