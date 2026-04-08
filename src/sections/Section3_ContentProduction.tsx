"use client";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/SectionWrapper";

export function Section3ContentProduction() {
  const categories = [
    { title: "SERVICES", items: ["PRODUCT DEMOS / REVIEWS", "EXPLAINER VIDEOS", "CINEMATIC BRAND FILMS", "OFFICE WALKTHROUGHS", "TVCS / DIGITAL COMMERCIALS", "VISION FILMS", "LAUNCH FILMS", "SHORT FORM", "LONG FORM", "TESTIMONIAL TYPE", "POV STORYTELLING", "NARRATIVE LED VIDEOS"] },
    { title: "VIDEO", items: ["AIRLINE (AKASA)", "FMCG (CORDON, LICK IT YOUR WAY, FARMLEY)"] },
    { title: "VIDEO", items: ["PERIPHERALS (ASUS GAMING SETUP)", "FMCG (LAHORI, FARMLEY)", "LIFESTYLE APPLIANCES (DYSON)", "ACCESSORIES (LENSKART)"] },
    { title: "UGC / STORY TELLING", items: ["SELF-CARE (THEDERMACOINDIA, BATH & BODYWORKS)", "LIFESTYLE (DAILY OBJECTS, TANISHQ)", "FMCG (LAHORI, FARMLEY, SUPERYOU)", "CONTENT CREATORS (REEL TYPE)"] },
  ];

  return (
    <SectionWrapper>
      <SectionHeader title="CONTENT PRODUCTION" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="h-full border-t flex flex-col pt-6 border-accent/20 hover:border-accent transition-colors">
              <h3 className="text-xl md:text-2xl font-heading font-bold uppercase mb-6 text-accent">
                {cat.title}
              </h3>
              <ul className="space-y-3 font-body text-sm md:text-base text-secondary flex-1">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex gap-2 isolate">
                    <span className="opacity-50 mt-1">-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
