"use client";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center border-b-4 border-dashed border-[#231F20] pb-16 mb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-6"
      >
        {/* Changed from sleek badge to a high-contrast sticker tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-[#231F20] bg-[#FBCD29] text-[#231F20] text-xs font-black tracking-widest uppercase shadow-[3px_3px_0px_0px_#231F20]">
          <Cpu size={14} className="animate-pulse" /> System_Status: Operational
        </div>

        {/* Slanted text with a solid brutalist drop-shadow instead of standard text shadows */}
        <h1 className="font-impact text-[13vw] leading-[0.85] uppercase italic text-[#F16E22] tracking-tighter drop-shadow-[6px_6px_0px_#231F20] transform -rotate-2 my-4">
          DATABASS
        </h1>

        {/* Typewriter/terminal text on a solid block background */}
        <p className="max-w-xl text-[#231F20] mt-4 font-mono text-sm font-bold bg-white/60 p-4 border-2 border-2 border-[#231F20] shadow-[4px_4px_0px_0px_#231F20] leading-relaxed">
          Exploiting the intersection of high-frequency low-end and raw computational power. 
          <span className="block mt-2 text-[#F16E22]">Ateneo MISA // Query the void, retrieve the noise.</span>
        </p>
      </motion.div>
    </section>
  );
}