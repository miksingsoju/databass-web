"use client";
import { Terminal, Maximize2, Play, Volume2 } from "lucide-react";

export default function VideoLog() {
  return (
    <div className="w-full max-w-3xl mx-auto my-12 border-4 border-[#231F20] bg-[#EAD2C1] shadow-[8px_8px_0px_0px_#F16E22] overflow-hidden transform -rotate-0.5 hover:rotate-0 transition-transform duration-200">
      
      {/* 1. MEDIA WINDOW MENU TITLE BAR */}
      <div className="bg-[#231F20] text-[#EAD2C1] px-3 py-2 flex justify-between items-center font-mono text-[11px] sm:text-xs font-black uppercase tracking-tight select-none">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#FBCD29] animate-pulse" />
          <span>DATABASS_MEDIA_PLAYER // LIVE_STREAM_FEED.EXE</span>
        </div>
        {/* Soft OS Close Action Dummies */}
        <div className="flex gap-1.5 font-mono">
          <span className="border border-white/20 px-1.5 py-0.5 bg-white/5 text-white text-[9px] hover:bg-white/10 cursor-not-allowed">_</span>
          <span className="border border-white/20 px-1.5 py-0.5 bg-[#F16E22] text-white text-[9px] cursor-not-allowed">X</span>
        </div>
      </div>

      {/* 2. THE VIDEO CANVAS SCREEN SCREEN */}
      {/* Grayscale filter and contrast boost replicate an old cyber security tape deck monitor setup */}
      <div className="relative aspect-video w-full bg-black border-b-4 border-[#231F20] overflow-hidden group">
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-synthesizer-keys-being-played-by-musician-close-up-40488-large.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-300"
        />

        {/* Dynamic Scanline Viewfinder Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/20 pointer-events-none" />
        <div className="absolute top-3 left-3 text-[9px] font-mono text-white bg-[#F16E22] px-2 py-0.5 font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_#000]">
          ● LIVE_REC
        </div>
        <div className="absolute top-3 right-3 text-[9px] font-mono text-[#FBCD29] font-bold bg-black/50 px-2 py-0.5">
          CH_01 // 29.97_FPS
        </div>
      </div>

      {/* 3. HARDWARE LOWER STATUS TICKER STRIP */}
      <div className="p-3 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 font-mono text-xs text-[#231F20] font-black uppercase">
        <div className="flex items-center gap-3">
          <span className="text-[#F16E22] flex items-center gap-1">
            <Play size={12} fill="#F16E22" /> BUFFERING_STREAM_DATA...
          </span>
          <span className="text-gray-400 hidden sm:inline">|</span>
          <span className="text-gray-500 text-[11px]">SOURCE: CAPTURE_NODE_MISA.MOV</span>
        </div>
        
        {/* Fake Quick Command Details */}
        <div className="flex items-center gap-4 justify-between sm:justify-end text-[10px] text-gray-600 bg-[#231F20]/5 px-2 py-1 border border-[#231F20]/10">
          <div className="flex items-center gap-1"><Volume2 size={12} /> MAX_GAIN</div>
          <div className="flex items-center gap-1"><Maximize2 size={11} /> 1080P_RAW</div>
        </div>
      </div>

    </div>
  );
}