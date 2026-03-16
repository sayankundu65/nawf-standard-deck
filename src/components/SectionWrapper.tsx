"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function SectionWrapper({ children, id, className = "" }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={`py-[120px] px-6 md:px-12 lg:px-24 w-full flex justify-center border-b border-foreground/10 ${className}`}
    >
      <div className="w-full max-w-[1300px] gap-8 md:gap-12 flex flex-col">
        {children}
      </div>
    </section>
  );
}

export function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <FadeIn>
      <div className="mb-12 md:mb-16">
        <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wide">
          {title}
        </h2>
        {subtitle && (
          <p className="text-secondary mt-4 max-w-2xl text-lg md:text-xl font-body">
            {subtitle}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
