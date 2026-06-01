"use client";
import { Terminal, Volume2, Play, SkipBack, SkipForward, Radio } from "lucide-react";

export default function Footer() {
  return (
    // Changed: Height is responsive (h-28 on mobile, h-24 on desktop) to give elements more breathing room.
    // Changed: Changed items from item-center to a responsive layout container.
    <footer className="fixed bottom-0 left-0 right-0 h-28 sm:h-24 bg-[#231F20] border-t-4 border-[#F16E22] flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 sm:py-0 z-50 text-[#EAD2C1]">

      {/* TOP ROW (Mobile) / LEFT SIDE (Desktop): Track Info & Social Links */}
      <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-1/3 border-b border-white/5 sm:border-none pb-2 sm:pb-0">
        <div className="flex items-center gap-3 min-w-0">
          {/* Album Art Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F16E22] border-2 border-[#EAD2C1] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] relative flex-shrink-0 overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-[#FBCD29] opacity-30 animate-pulse" />
          </div>
          {/* Metadata Tickers (Truncate tags keep it safe on tight displays) */}
          <div className="min-w-0">
            <div className="text-[11px] sm:text-xs font-black truncate text-white uppercase tracking-wide">
              INIT_BOOT_SEQUENCE.wav
            </div>
            <div className="text-[9px] sm:text-[10px] text-[#FBCD29] font-mono font-bold tracking-tight truncate">
              ADMIN@DATABASS_SYS_01
            </div>
          </div>
        </div>

        {/* Mobile Quick Contacts: These slide up beside track info on phones */}
        <div className="flex sm:hidden items-center gap-3 text-gray-400">
          <a href="https://www.instagram.com/databassmusic_/" target="_blank" rel="noopener noreferrer" className="hover:text-[#F16E22]">
            <Radio size={16} />
          </a>
          <a href="mailto:databass@ateneo.edu">
            <Terminal size={16} className="hover:text-[#F16E22]" />
          </a>
        </div>
      </div>

      {/* MIDDLE ROW (Mobile) / CENTER SIDE (Desktop): Controls & Progress Bar */}
      <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center gap-4 sm:gap-2 w-full sm:w-1/3 py-1 sm:py-0">
        {/* Buttons */}
        <div className="flex items-center gap-4 sm:gap-6">
          <SkipBack
            size={16}
            className="text-gray-400 hover:text-[#FBCD29] transition-colors cursor-pointer"
          />
          {/* Chunky Y2K Play Block */}
          <div className="bg-[#FBCD29] p-1.5 sm:p-2 border-2 border-white hover:bg-white active:translate-y-0.5 transition-all cursor-pointer shadow-[2px_2px_0px_0px_#000]">
            <Play size={14} fill="#231F20" className="text-[#231F20] ml-0.5 sm:w-[16px] sm:h-[16px]" />
          </div>
          <SkipForward
            size={16}
            className="text-gray-400 hover:text-[#FBCD29] transition-colors cursor-pointer"
          />
        </div>

        {/* System Progress Bar */}
        <div className="flex-1 sm:flex-initial w-full max-w-xs flex items-center gap-2">
          <span className="text-[9px] sm:text-[10px] font-mono text-gray-400">01:02</span>
          <div className="flex-1 h-1.5 sm:h-2 bg-black/40 border border-gray-700 overflow-hidden">
            <div className="w-1/3 h-full bg-[#F16E22]" />
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-gray-400">03:45</span>
        </div>
      </div>

      {/* BOTTOM ROW (Desktop Only): Desktop Navigation Contacts */}
      <div className="hidden sm:flex items-center gap-4 w-1/3 justify-end text-xs font-mono font-bold text-gray-400">
        <a
          href="https://www.instagram.com/databassmusic_/"
          target="_blank"
          rel="noopener noreferrer"
          title="Follow our Instagram node"
          className="hover:bg-[#FBCD29] hover:text-[#231F20] px-2 py-1 border border-transparent hover:border-[#231F20] transition-all cursor-pointer uppercase text-[11px]"
        >
          [INSTAGRAM]
        </a>
        <a 
          href="mailto:databass@ateneo.edu" 
          title="Contact System Admin" 
          className="hover:bg-[#F16E22] hover:text-white px-2 py-1 border border-transparent hover:border-[#231F20] transition-all cursor-pointer uppercase text-[11px]"
        >
          [EMAIL_SYS]
        </a>
      </div>

    </footer>
  );
}