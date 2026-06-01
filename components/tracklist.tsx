"use client";
import { motion } from "framer-motion";

export default function Tracklist() {
  const tracks = [
    { id: "0x1", name: "SELECT_*_FROM_VOID", album: "ROOT_DIR", duration: "3:42" },
    { id: "0x2", name: "SQL_INJECTION_BLUES", album: "ROOT_DIR", duration: "4:05" },
    { id: "0x3", name: "NULL_POINTER_DREAMS", album: "DEBUG_MODE", duration: "2:58" },
  ];

  return (
    // Added id="tracklist" and scroll-mt-24 to coordinate with your sticky navbar smooth-scrolling!
    <div id="tracklist" className="scroll-mt-24 bg-white border-4 border-[#231F20] shadow-[6px_6px_0px_0px_#231F20] mb-16 overflow-hidden">
      
      {/* HEADER BAR */}
      {/* Explicitly managed columns on mobile (col-span-3, col-span-6, col-span-3) to cleanly total 12 */}
      <div className="grid grid-cols-12 gap-2 sm:gap-4 p-3 sm:p-4 text-[10px] sm:text-xs uppercase bg-[#231F20] text-[#EAD2C1] font-black tracking-wider">
        <div className="col-span-3 md:col-span-1">PID</div>
        <div className="col-span-6">TRACK_IDENTIFIER</div>
        <div className="col-span-2 opacity-80 hidden md:block">COLLECTION</div>
        <div className="col-span-3 md:col-span-3 text-right">EXEC_TIME</div>
      </div>

      {/* TRACK DATA ROWS */}
      {tracks.map((track, i) => (
        <motion.div 
          key={track.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          // Fixed column math: mobile sums to exactly 12 (3 + 6 + 3), md display sizes sum to exactly 12 (1 + 6 + 2 + 3)
          // Adjusted p-3 sm:p-4 for compact, touch-friendly rows on phones
          className="grid grid-cols-12 gap-2 sm:gap-4 p-3 sm:p-4 text-xs sm:text-sm text-[#231F20] hover:bg-[#FBCD29] transition-colors duration-150 group cursor-pointer border-b-2 border-[#231F20] last:border-0"
        >
          {/* PID Column */}
          <div className="col-span-3 md:col-span-1 font-mono font-bold text-[#F16E22] group-hover:text-[#231F20]">
            {track.id}
          </div>

          {/* Track Identifier Column (min-w-0 prevents extreme title overflows) */}
          <div className="col-span-6 md:col-span-6 font-black tracking-tight uppercase truncate min-w-0">
            {track.name}
          </div>

          {/* Album Collection Column (hidden on mobile, revealed neatly on desktop layouts) */}
          <div className="col-span-2 opacity-60 font-mono hidden md:block truncate">
            {track.album}
          </div>

          {/* Exec Time Column */}
          <div className="col-span-3 md:col-span-3 text-right font-mono font-bold">
            {track.duration}
          </div>
        </motion.div>
      ))}
    </div>
  );
}