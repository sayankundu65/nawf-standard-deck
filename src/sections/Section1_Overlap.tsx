"use client";
import { FadeIn } from "@/components/SectionWrapper";
import { motion } from "framer-motion";

export function Section1Overlap() {
  const features = [
    "REALITY AI",
    "CINEMATIC STORY-TELLING",
    "COST EFFECTIVE",
    "TIME-EFFICIENT + HIGH-VELOCITY DELIVERY",
    "3D PRODUCT RENDERS"
  ];

  return (
    <div className="py-24 md:py-[120px] px-6 md:px-12 lg:px-24 w-full flex justify-center bg-background border-b border-foreground/10 min-h-[90vh] flex-col items-center">
      <div className="w-full max-w-[1300px] flex flex-col pt-12">
        <FadeIn>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-black uppercase text-accent mb-12 tracking-tighter">
            <span className="block opacity-80 mix-blend-screen">&lt;The Overlap&gt;</span>
          </h1>
          <p className="text-xl md:text-3xl text-secondary max-w-3xl mb-16 leading-relaxed">
            The next-generation content production ecosystem where reality blends seamlessly with cinematic logic.
          </p>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div 
              key={feat}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-8 border border-accent/20 bg-background/50 backdrop-blur-md rounded-2xl hover:border-accent hover:bg-accent/10 transition-colors group cursor-pointer"
            >
              <h3 className="font-heading text-xl md:text-2xl font-bold tracking-wider group-hover:text-accent transition-colors">{feat}</h3>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-10 rounded-3xl bg-card text-background">
              <h4 className="font-heading text-2xl font-bold mb-6">ADS LAYER</h4>
              <ul className="space-y-4 font-bold text-lg">
                <li className="flex items-center gap-4"><span className="h-2 w-2 rounded-full bg-background"></span> CGI</li>
                <li className="flex items-center gap-4"><span className="h-2 w-2 rounded-full bg-background"></span> PERFORMANCE ADS</li>
              </ul>
            </div>
            <div className="p-10 rounded-3xl border border-secondary/20">
              <h4 className="font-heading text-2xl font-bold mb-6 text-accent">DISTRIBUTION</h4>
              <ul className="space-y-4 text-xl">
                <li>META</li>
                <li>GOOGLE</li>
                <li>YOUTUBE</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
