"use client";
import { Terminal, Volume2, Play, SkipBack, SkipForward } from "lucide-react";

export default function Footer() {
  return (
    <footer className="h-24 bg-[#050505]/90 backdrop-blur-md border-t border-orange-900/50 flex items-center justify-between px-6 z-50">
      {/* Currently Playing */}
      <div className="flex items-center gap-4 w-1/3">
        <div className="w-12 h-12 bg-orange-600/10 border border-orange-600 relative overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 bg-orange-600 animate-pulse opacity-20" />
        </div>
        <div className="hidden sm:block">
          <div className="text-sm font-bold truncate tracking-widest uppercase">INIT_BOOT_SEQUENCE.wav</div>
          <div className="text-[10px] text-orange-500/70 font-mono tracking-tighter">ADMIN@DATABASS_SYS_01</div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <SkipBack size={18} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
          <div className="bg-white p-2 rounded-full hover:scale-105 active:scale-95 transition-all cursor-pointer">
            <Play size={18} fill="black" className="text-black ml-0.5" />
          </div>
          <SkipForward size={18} className="text-gray-600 hover:text-white transition-colors cursor-pointer" />
        </div>
        {/* Progress Bar */}
        <div className="w-full max-w-xs flex items-center gap-2">
          <span className="text-[9px] text-gray-600">01:02</span>
          <div className="flex-1 h-[2px] bg-gray-800 rounded-full">
            <div className="w-1/3 h-full bg-orange-600 shadow-[0_0_8px_#ff6600]" />
          </div>
          <span className="text-[9px] text-gray-600">03:45</span>
        </div>
      </div>

      {/* Volume/Extra */}
      <div className="flex items-center gap-4 w-1/3 justify-end text-gray-500">
        <Terminal size={16} className="hover:text-orange-600 cursor-pointer transition-colors" />
        <div className="flex items-center gap-2">
          <Volume2 size={16} />
          <div className="w-16 h-[2px] bg-gray-800 rounded-full hidden md:block">
            <div className="w-1/2 h-full bg-gray-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}