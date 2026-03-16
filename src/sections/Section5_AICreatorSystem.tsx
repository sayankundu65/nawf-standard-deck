"use client";
import { SectionWrapper, SectionHeader, FadeIn } from "@/components/SectionWrapper";

export function Section5AICreatorSystem() {
  const capabilities = [
    "FACE CONSISTENCY MODEL TRAINING", "SKIN TONE PRECISION", "FASHION STYLE BANK",
    "EXPRESSION LIBRARY", "HAIRSTYLE VARIATIONS", "SCRIPT TONE TRAINING",
    "CONVERSATIONAL PERSONALITY SYSTEM", "PLATFORM-SPECIFIC COMMUNICATION STYLE",
    "INTERNATIONAL LOCATION SIMULATION", "LUXURY ENVIRONMENTS", "STUDIO-STYLE CAMPAIGNS",
    "SEASONAL CONTENT", "PRODUCT PLACEMENT VISUALS", "REEL-STYLE TRANSITIONS",
    "LIP-SYNC VIDEOS", "TREND PARTICIPATION"
  ];
  
  const advantages = [
    "NO CELEBRITY FEES", "NO TRAVEL COST", "NO SHOOT LOGISTICS", "NO RETAKE COSTS",
    "NO CONTROVERSIES", "NO SCHEDULING ISSUES", "NO CONTRACT DISPUTES", "BRAND-SAFE MESSAGING"
  ];

  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <SectionHeader title="AI CREATOR SYSTEM" />
          <div className="flex flex-wrap gap-3">
            {capabilities.map((c, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <span className="inline-block px-4 py-2 md:px-5 md:py-3 font-body text-xs md:text-sm font-bold tracking-wider rounded-lg bg-foreground/5 border border-foreground/10 hover:border-accent hover:text-accent transition-colors cursor-default">
                  {c}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
        
        <div>
          <SectionHeader title="ADVANTAGES" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((a, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 font-heading uppercase text-lg tracking-wider font-bold">
                  <span className="text-accent">✗</span>
                  {a}
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-12 p-8 bg-accent text-background rounded-2xl font-bold font-heading text-xl uppercase leading-relaxed tracking-wider shadow-[0_0_40px_-10px_rgba(198,255,46,0.5)]">
               SAME INFLUENCER.<br/>
               DIFFERENT LANGUAGES.<br/>
               DIFFERENT REGIONS.<br/>
               SAME BRAND CONSISTENCY.
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  );
}
