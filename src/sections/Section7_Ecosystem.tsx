"use client";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/SectionWrapper";

export function Section7Ecosystem() {
  const sections = [
    { title: "CREATOR ECOSYSTEM", details: ["100+ REAL CREATORS WITH AN OVERLAP MINDSET", "REELS", "PHOTOSHOOTS"] },
    { title: "CUSTOM BRAND AI CREATORS", details: ["<ON DEMAND> Build bespoke AI ambassadors representing your exact brand architecture"] },
    { title: "BRANDING", details: ["EMAIL MARKETING FLOWS", "POP-UP STORE DESIGN", "PRINT CREATIVES", "BRAND IDENTITY DESIGN", "WORKPLACE BRANDING", "BRANDED ENVIRONMENTAL GRAPHICS (EGD)", "BOOTH & EVENT BRANDING", "IN-STORE INSTALLATIONS"] },
    { title: "PHOTOGRAPHY", details: ["PRODUCT PHOTOGRAPHY", "MULTI-ANGLE PRODUCT CAPTURE", "A+ CONTENT LAYOUTS", "LIFESTYLE PRODUCT SHOOTS", "FASHION LOOKBOOKS", "E-COMMERCE CATALOG SHOOTS", "INTERNATIONAL LOCATION SIMULATION", "CAMPAIGN KEY VISUALS", "THUMBNAILS"] }
  ];

  return (
    <SectionWrapper>
      <div className="space-y-24">
        {sections.map((sec, i) => (
          <FadeIn key={i}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 border-t border-secondary/20 pt-12">
              <div className="lg:w-1/3">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-card">
                  {sec.title}
                </h2>
              </div>
              <div className="lg:w-2/3 flex flex-wrap gap-4 items-start">
                {sec.details.map((d, j) => (
                  <div key={j} className={`px-6 py-3 md:px-8 md:py-4 rounded-full border border-secondary/20 uppercase tracking-widest font-bold text-sm bg-background hover:bg-card hover:text-background transition-colors ${j === 0 && (i === 0 || i === 1) ? 'text-accent border-accent/40 w-full mb-4 text-left rounded-2xl bg-accent/5 font-heading text-xl md:text-2xl hover:text-accent hover:bg-accent/10' : ''}`}>
                    {d}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
