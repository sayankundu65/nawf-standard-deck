"use client";
import { motion } from "framer-motion";

function PhotoBlock({ index }: { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="aspect-square rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[200px] md:w-[260px]"
    >
      <span className="text-[#7a8c7f]/40 font-heading text-xs uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">
        MEME {String(index + 1).padStart(2, "0")}
      </span>
    </motion.div>
  );
}

export function MemeMarketingSection() {
  return (
    <section id="meme-marketing" className="relative py-28 bg-[#0a1510] border-t border-white/5 overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#c6ff2e]/3 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end gap-6 flex-wrap justify-between"
        >
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-4 block">Marketing</span>
            <h2 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight text-[#f0f4f0] leading-none">
              Meme<br /><span className="text-[#c6ff2e]">Marketing</span>
            </h2>
          </div>
          <p className="text-[#7a8c7f] max-w-xs text-sm leading-relaxed">
            Culture-native content designed to go viral. We don't just follow trends — we create them.
          </p>
        </motion.div>
      </div>

      {/* Full-bleed carousel */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div
          className="flex gap-5 overflow-x-auto px-6 md:px-24 pb-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {[0,1,2,3,4,5,6,7].map(i => <PhotoBlock key={i} index={i} />)}
        </div>
      </div>
    </section>
  );
}
