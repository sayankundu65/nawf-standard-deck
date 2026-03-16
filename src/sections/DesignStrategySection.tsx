"use client";
import { motion } from "framer-motion";

const designSections = [
  {
    tag: "Branding",
    title: "Branding",
    items: [
      "Booth & Event Branding",
      "Branded Environmental Graphics (EGD)",
      "Workplace Branding",
      "Brand Identity Design",
      "In-Store Installations",
      "Internal Brand Training",
    ],
    photoCount: 6,
  },
  {
    tag: "Digital",
    title: "Website & Digital Assets",
    items: [
      "Website Design (UI/UX)",
      "Email Marketing Flows",
      "High-Conversion Landing Pages",
      "SEO Optimization",
    ],
    photoCount: 5,
  },
  {
    tag: "Experiential",
    title: "Offline & Experiential",
    items: [
      "DOOH (linked with OOH)",
      "Pop-Up Store Design",
      "Retail Branding",
      "Print Creatives",
      "Brand Activations",
      "Transit Branding",
    ],
    photoCount: 6,
  },
];

function ItemCard({ label, index }: { label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group px-6 py-5 rounded-xl border border-white/5 bg-[#0e1a14] hover:border-[#c6ff2e]/25 hover:bg-[#111c16] transition-all cursor-default text-center"
    >
      <span className="font-heading font-semibold text-sm text-[#f0f4f0]/80 group-hover:text-[#c6ff2e] transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

function DesignPhotoBlock({ index }: { index: number }) {
  return (
    <div className="aspect-[4/3] rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[260px] md:w-[380px]">
      <span className="text-[#7a8c7f]/30 font-heading text-xs uppercase tracking-widest group-hover:text-[#7a8c7f]/60 transition-colors">
        DESIGN {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}

export function DesignStrategySection() {
  return (
    <section id="design-strategy" className="relative py-28 md:py-36 bg-[#0a1510] border-t border-white/5 overflow-hidden">

      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#c6ff2e]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-4 block">Extensions</span>
          <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight text-[#f0f4f0] leading-none">
            Design &<br /><span className="text-[#c6ff2e]">Strategy</span>
          </h2>
        </motion.div>

      </div>

      {/* Sub-sections */}
      <div className="flex flex-col gap-28">
        {designSections.map((sec, secIdx) => (
          <div key={secIdx}>
            <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-3 block">{sec.tag}</span>
                <h3 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-[#f0f4f0] leading-tight">
                  {sec.title}
                </h3>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {sec.items.map((item, i) => <ItemCard key={i} label={item} index={i} />)}
              </div>
            </div>

            {/* Full-bleed photo carousel */}
            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
              <div
                className="flex gap-5 overflow-x-auto px-6 md:px-24 pb-6"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {Array(sec.photoCount).fill(0).map((_, i) => (
                  <DesignPhotoBlock key={i} index={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
