"use client";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center border-b border-orange-900/20 pb-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-start gap-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-orange-500/50 bg-orange-500/10 text-orange-500 text-[10px] font-bold tracking-widest uppercase">
          <Cpu size={12} /> System_Status: Operational
        </div>
        <h1 className="font-impact text-[15vw] leading-[0.8] uppercase italic text-white tracking-tighter">
          DATABASS
        </h1>
        <p className="max-w-xl text-gray-400 mt-6 font-mono text-sm leading-relaxed">
          Exploiting the intersection of high-frequency low-end and raw computational power. 
          Ateneo MISA // Query the void, retrieve the noise.
        </p>
      </motion.div>
    </section>
  );
}