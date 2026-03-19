"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

function PhotoBlock({ index, imageUrl }: { index: number; imageUrl?: string }) {
  const [isFull, setIsFull] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="relative aspect-square rounded-2xl bg-[#0e1a14] border border-white/5 flex items-center justify-center group hover:border-[#c6ff2e]/20 transition-all flex-shrink-0 w-[200px] md:w-[260px]"
    >
      {imageUrl ? (
        <>
          <img src={imageUrl} alt={`Meme ${index}`} className="w-full h-full object-cover rounded-2xl" />
          <button
            onClick={(e) => { e.stopPropagation(); setIsFull(true); }}
            className="absolute top-2 right-2 p-2 rounded-full bg-[#080f0c]/60 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md"
          >
            <Maximize2 size={16} />
          </button>
          
          {isFull && (
            <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setIsFull(false)}>
              <img src={imageUrl} alt={`Meme ${index} Fullscreen`} className="max-w-full max-h-full object-contain rounded-lg" />
              <button
                onClick={(e) => { e.stopPropagation(); setIsFull(false); }}
                className="absolute top-6 right-6 p-3 rounded-full bg-[#080f0c]/80 text-white hover:bg-[#c6ff2e] hover:text-black backdrop-blur-md transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          )}
        </>
      ) : (
        <span className="text-[#7a8c7f]/40 font-heading text-xs uppercase tracking-widest group-hover:text-[#7a8c7f]/70 transition-colors">
          MEME {String(index + 1).padStart(2, "0")}
        </span>
      )}
    </motion.div>
  );
}

export function MemeMarketingSection() {
  const memeUrls = [
    "https://lh3.googleusercontent.com/d/1ud3voO2dbtzjfIf3XEvS79WqvpkUC5dt",
    "https://lh3.googleusercontent.com/d/12mqz8csW532FHD0Yvv0ZD4hp0B0cFynv",
    "https://lh3.googleusercontent.com/d/1owzSMmcHThx3Y_2O9npAT3_2CL4SgAmJ",
    "https://lh3.googleusercontent.com/d/1594pDy2WKF1fPafZJ_ZIkTCDq9AvLbaJ",
    "https://lh3.googleusercontent.com/d/1gZJmaH9QReYNYbzkpdNHvUsN9kCyCKfD"
  ];

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
          {memeUrls.map((url, i) => <PhotoBlock key={i} index={i} imageUrl={url} />)}
        </div>
      </div>
    </section>
  );
}
