"use client";
import { motion } from "framer-motion";

// ── helpers ──────────────────────────────────────────────────────────
function VideoBlock16x9({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="aspect-video rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all"
    >
      <span className="text-[#7a8c7f]/40 font-heading font-bold text-sm uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">
        16:9 — {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

function VideoBlock9x16({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.6 }}
      className="aspect-[9/16] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[180px] md:w-[220px] h-auto"
    >
      <span className="text-[#7a8c7f]/40 font-heading font-bold text-xs uppercase tracking-widest writing-mode-vertical group-hover:text-[#7a8c7f]/70 transition-colors">
        9:16 — {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

function PhotoBlock({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="aspect-[4/5] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[220px] md:w-[280px]"
    >
      <span className="text-[#7a8c7f]/40 font-heading font-bold text-xs uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">
        PHOTO — {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

function TagCard({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.4 }}
      className="group px-6 py-5 rounded-xl border border-white/5 bg-[#0e1a14] hover:border-[#c6ff2e]/25 hover:bg-[#111c16] transition-all text-center cursor-default"
    >
      <span className="font-heading font-semibold text-sm md:text-base text-[#f0f4f0]/80 group-hover:text-[#c6ff2e] transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-3 mb-5"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-[#c6ff2e]/30 to-transparent max-w-[40px]" />
      <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c6ff2e]">{label}</span>
    </motion.div>
  );
}

function SubSectionHeading({ text }: { text: string }) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-[#f0f4f0] mb-10"
    >
      {text}
    </motion.h3>
  );
}

function HScrollCarousel({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
      <div
        className="flex gap-5 overflow-x-auto px-6 md:px-12 lg:px-24 pb-6"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </div>
  );
}

// ── main component ────────────────────────────────────────────────────
export function ContentProductionSection() {
  const video169Tags = ["Cinematic Brand Films", "Office Walkthroughs", "TVCs / Digital Commercials", "Vision Films", "Launch Films"];
  const perfAdsSubTags = ["Meta", "Google", "YouTube"];
  const video916Tags = ["CGI", "Long Form", "Short Form", "3D Product Renders"];
  const ugcTags = ["Testimonial Type", "POV Storytelling", "Product Demos / Reviews", "Explainer Videos"];
  const storyTags = ["Narrative Led Videos"];
  const photoTags = ["Multi-Angle Product Capture", "Product Photography", "Lifestyle Product Shoots", "Fashion Lookbooks", "International Location Simulation", "Thumbnails", "A+ Content Layouts", "E-Commerce Catalog Shoots", "Campaign Key Visuals"];

  return (
    <section id="content-production" className="relative py-28 md:py-36 bg-[#080f0c] border-t border-white/5 overflow-hidden">
      
      {/* Ambient */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#c6ff2e]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-4 block">Production</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight text-[#f0f4f0] leading-none">
            Content<br /><span className="text-[#c6ff2e]">Production</span>
          </h2>
        </motion.div>

        {/* ── VIDEOGRAPHY ── */}
        <div className="mb-24 flex flex-col gap-12">
          <SubSectionHeading text="Videography" />

          {/* 16:9 Tags */}
          <div>
            <SectionLabel label="Video [16:9]" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
              {video169Tags.map((t, i) => <TagCard key={i} label={t} />)}
            </div>
            <div className="flex gap-3 flex-wrap mt-3">
              <span className="text-xs text-[#7a8c7f] uppercase tracking-widest font-bold self-center">Performance Ads →</span>
              {perfAdsSubTags.map((t, i) => (
                <span key={i} className="text-xs px-4 py-2 rounded-full border border-[#c6ff2e]/15 text-[#c6ff2e]/80 font-bold tracking-wider uppercase">{t}</span>
              ))}
            </div>
            {/* 4 video blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {[0,1,2,3].map(i => <VideoBlock16x9 key={i} index={i} />)}
            </div>
          </div>

          {/* 9:16 Tags + Carousel */}
          <div>
            <SectionLabel label="Video [9:16]" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {video916Tags.map((t, i) => <TagCard key={i} label={t} />)}
            </div>
          </div>
        </div>
      </div>

      {/* 9:16 Carousel — 6 blocks */}
      <HScrollCarousel>
        {[0,1,2,3,4,5].map(i => <VideoBlock9x16 key={i} index={i} />)}
      </HScrollCarousel>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">

        {/* ── UGC ── */}
        <div className="mt-24 mb-24 flex flex-col gap-10">
          <SubSectionHeading text="UGC Style Videos" />
          <div>
            <SectionLabel label="Video [9:16]" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {ugcTags.map((t, i) => <TagCard key={i} label={t} />)}
            </div>
          </div>
        </div>
      </div>

      {/* UGC 7-block Carousel */}
      <HScrollCarousel>
        {[0,1,2,3,4,5,6].map(i => <VideoBlock9x16 key={i} index={i} />)}
      </HScrollCarousel>

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        {/* Story Telling */}
        <div className="mt-20 mb-24">
          <SubSectionHeading text="Story Telling" />
          <SectionLabel label="Narrative" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {storyTags.map((t, i) => <TagCard key={i} label={t} />)}
          </div>
        </div>

        {/* ── PHOTOGRAPHY ── */}
        <div className="mb-10">
          <SubSectionHeading text="Photography" />
          <SectionLabel label="Photoshoot" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-10">
            {photoTags.map((t, i) => <TagCard key={i} label={t} />)}
          </div>
        </div>
      </div>

      {/* Photo Carousel */}
      <HScrollCarousel>
        {[0,1,2,3,4,5,6,7].map(i => <PhotoBlock key={i} index={i} />)}
      </HScrollCarousel>

    </section>
  );
}
