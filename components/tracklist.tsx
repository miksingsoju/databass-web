"use client";
import { motion } from "framer-motion";

export default function Tracklist() {
  const tracks = [
    { id: "0x1", name: "SELECT_*_FROM_VOID", album: "ROOT_DIR", duration: "3:42" },
    { id: "0x2", name: "SQL_INJECTION_BLUES", album: "ROOT_DIR", duration: "4:05" },
    { id: "0x3", name: "NULL_POINTER_DREAMS", album: "DEBUG_MODE", duration: "2:58" },
  ];

  return (
    <div className="bg-white border-4 border-[#231F20] shadow-[6px_6px_0px_0px_#231F20] mb-16 overflow-hidden">
      {/* Header bar inspired by the barcode strip on the poster */}
      <div className="grid grid-cols-12 gap-4 p-4 text-xs uppercase bg-[#231F20] text-[#EAD2C1] font-black tracking-wider">
        <div className="col-span-2 md:col-span-1">PID</div>
        <div className="col-span-6">TRACK_IDENTIFIER</div>
        <div className="col-span-2 opacity-80 hidden md:block">COLLECTION</div>
        <div className="col-span-4 md:col-span-3 text-right">EXEC_TIME</div>
      </div>

      {tracks.map((track, i) => (
        <motion.div 
          key={track.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="grid grid-cols-12 gap-4 p-4 text-sm text-[#231F20] hover:bg-[#FBCD29] transition-colors duration-150 group cursor-pointer border-b-2 border-[#231F20] last:border-0"
        >
          <div className="col-span-2 md:col-span-1 font-mono font-bold text-[#F16E22] group-hover:text-[#231F20]">
            {track.id}
          </div>
          <div className="col-span-10 md:col-span-6 font-black tracking-tight uppercase">
            {track.name}
          </div>
          <div className="col-span-2 opacity-60 font-mono hidden md:block">
            {track.album}
          </div>
          <div className="col-span-12 md:col-span-3 text-left md:text-right font-mono font-bold">
            {track.duration}
          </div>
        </motion.div>
      ))}
    </div>
  );
}