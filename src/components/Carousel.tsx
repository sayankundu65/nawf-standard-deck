"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface CarouselProps {
  items: React.ReactNode[];
  itemWidth?: string;
}

export function Carousel({ items, itemWidth = "w-[280px] md:w-[320px]" }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 px-4 md:px-0"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item, index) => (
          <motion.div 
            key={index} 
            className={`flex-shrink-0 snap-center ${itemWidth}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
