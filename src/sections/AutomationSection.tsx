"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const automationPoints = [
  { num: "01", text: "Automated onboarding dashboard for real-time work status" },
  { num: "02", text: "Real-time feedback on every deliverable" },
  { num: "03", text: "Transparent management — no black boxes" },
  { num: "04", text: "No dependency on calls or follow-ups" },
  { num: "05", text: "Faster iterations, instant revisions" },
];

export function AutomationSection() {
  return (
    <section id="automation" className="relative py-28 md:py-36 px-6 md:px-12 lg:px-24 bg-[#0a1510] border-t border-white/5 overflow-hidden">
      
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full bg-[#c6ff2e]/4 blur-[150px] pointer-events-none" />
      
      <div className="max-w-[1300px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.3em] uppercase text-[#c6ff2e] mb-4 block"
            >
              Automation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-[#f0f4f0] mb-6"
            >
              No Gatekeeping<br/>On What's<br/><span className="text-[#c6ff2e]">Happening.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[#7a8c7f] text-base leading-relaxed mb-12 max-w-md"
            >
              A single dashboard that gives you visibility, control, and real-time influence over every piece of work.
            </motion.p>

            {/* Points as numbered cards */}
            <div className="flex flex-col gap-3">
              {automationPoints.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-[#0e1a14] hover:border-[#c6ff2e]/20 hover:bg-[#111c16] transition-all group"
                >
                  <span className="font-heading font-black text-[#c6ff2e]/40 text-xs tracking-widest w-6 shrink-0 group-hover:text-[#c6ff2e] transition-colors">{pt.num}</span>
                  <div className="w-px h-8 bg-white/10 shrink-0" />
                  <p className="text-sm text-[#f0f4f0]/80 leading-snug">{pt.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Process Flow Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl border border-white/8 bg-[#0e1a14] p-10 flex flex-col gap-8 overflow-hidden relative">
              
              {/* Decorative glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#c6ff2e]/8 rounded-full blur-3xl pointer-events-none" />

              <h3 className="font-heading text-lg font-bold uppercase tracking-widest text-[#7a8c7f]">Process Flow</h3>

              {/* Step 1 */}
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/3 border border-white/8">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#7a8c7f] uppercase">Step 01</span>
                <h4 className="font-heading text-xl font-black uppercase text-[#f0f4f0]">Answer the Onboarding Questions</h4>
              </div>

              <div className="flex items-center gap-3 self-center">
                <div className="w-8 h-px bg-[#c6ff2e]/30" />
                <ArrowRight size={14} className="text-[#c6ff2e]" />
              </div>

              {/* Step 2 */}
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/3 border border-white/8">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#7a8c7f] uppercase">Step 02</span>
                <h4 className="font-heading text-xl font-black uppercase text-[#f0f4f0]">Track Everything</h4>
              </div>

              <div className="flex items-center gap-3 self-center">
                <div className="w-8 h-px bg-[#c6ff2e]/30" />
                <ArrowRight size={14} className="text-[#c6ff2e]" />
              </div>

              {/* Step 3 */}
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-[#c6ff2e] border border-[#c6ff2e]">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#080f0c]/60 uppercase">Step 03</span>
                <h4 className="font-heading text-xl font-black uppercase text-[#080f0c]">Let Us Take You #TowardsNawf</h4>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
