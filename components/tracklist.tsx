import { motion } from "framer-motion";

export default function Tracklist() {
const tracks = [
    { id: "0x1", name: "SELECT_*_FROM_VOID", album: "ROOT_DIR", duration: "3:42" },
    { id: "0x2", name: "SQL_INJECTION_BLUES", album: "ROOT_DIR", duration: "4:05" },
    { id: "0x3", name: "NULL_POINTER_DREAMS", album: "DEBUG_MODE", duration: "2:58" },
  ];
  return (
      <div className="bg-[#0A0A0A] border border-orange-900/20 rounded-sm">
        <div className="grid grid-cols-12 gap-4 p-4 text-[10px] uppercase text-orange-900 font-bold border-b border-orange-900/20">
          <div className="col-span-1">PID</div>
          <div className="col-span-6">TRACK_IDENTIFIER</div>
          <div className="col-span-3">COLLECTION</div>
          <div className="col-span-2 text-right">EXEC_TIME</div>
        </div>

        {tracks.map((track, i) => (
          <motion.div 
            key={track.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="grid grid-cols-12 gap-4 p-4 text-sm text-gray-400 hover:bg-orange-600/5 hover:text-white group cursor-pointer border-b border-white/5 last:border-0"
          >
            <div className="col-span-1 font-mono text-orange-800">{track.id}</div>
            <div className="col-span-6 font-bold text-gray-200 group-hover:text-orange-500">{track.name}</div>
            <div className="col-span-3 opacity-50">{track.album}</div>
            <div className="col-span-2 text-right font-mono">{track.duration}</div>
          </motion.div>
        ))}
      </div>
  );
}