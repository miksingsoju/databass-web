"use client";
import { Terminal, Volume2, Play, SkipBack, SkipForward, Radio } from "lucide-react";

export default function Footer() {
  return (
    // Changed: Fixed positioning, swapped backdrop-blur for solid off-black (#231F20)
    // Replaced thin borders with a thick, brutalist 4px top border
    <footer className="fixed bottom-0 left-0 right-0 h-24 bg-[#231F20] border-t-4 border-[#F16E22] flex items-center justify-between px-6 z-50 text-[#EAD2C1]">

      {/* Currently Playing */}
      <div className="flex items-center gap-4 w-1/3">
        {/* Changed: Album art box now matches the raw, bordered magazine cutout feel */}
        <div className="w-12 h-12 bg-[#F16E22] border-2 border-[#EAD2C1] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-[#FBCD29] opacity-30 animate-pulse" />
        </div>
        <div className="hidden sm:block">
          <div className="text-xs font-black truncate tracking-wide text-white uppercase">
            INIT_BOOT_SEQUENCE.wav
          </div>
          {/* Accent yellow tag color from the poster */}
          <div className="text-[10px] text-[#FBCD29] font-mono font-bold tracking-tight">
            ADMIN@DATABASS_SYS_01
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <SkipBack
            size={18}
            className="text-gray-400 hover:text-[#FBCD29] transition-colors cursor-pointer"
          />
          {/* Changed: Play button is now a chunky, hard-edged Y2K sticker button instead of smooth rounded-full */}
          <div className="bg-[#FBCD29] p-2 border-2 border-white hover:bg-white active:translate-y-0.5 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#000]">
            <Play size={16} fill="#231F20" className="text-[#231F20] ml-0.5" />
          </div>
          <SkipForward
            size={18}
            className="text-gray-400 hover:text-[#FBCD29] transition-colors cursor-pointer"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs flex items-center gap-2">
          <span className="text-[10px] font-mono text-gray-400">01:02</span>
          {/* Changed: Bar is thicker (4px), rectangular, and blocky like old software */}
          <div className="flex-1 h-2 bg-black/40 border border-gray-700 overflow-hidden">
            {/* Removed glow shadow, used solid Poster Orange */}
            <div className="w-1/3 h-full bg-[#F16E22]" />
          </div>
          <span className="text-[10px] font-mono text-gray-400">03:45</span>
        </div>
      </div>

      {/* Volume/Extra */}
      <div className="flex items-center gap-4 w-1/3 justify-end text-gray-400">
        <a
          href="https://www.instagram.com/databassmusic_/"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow our Instagram node"
          className="hover:text-[#F16E22] transition-colors cursor-pointer"
        >
          Instagram
        </a>
        <a href="mailto:databass@ateneo.edu" title="Contact System Admin" className="hover:text-[#F16E22] transition-colors cursor-pointer"
        >
          Email Us
        </a>

      </div>
    </footer>
  );
}