"use client";
import { Terminal } from "lucide-react";

export default function Gallery() {
  // We can add distinct visual characteristics to each slot to simulate a scrapbook
  const placeholders = [
    { id: 1, rotation: "-rotate-2", border: "border-[#F16E22]", bg: "bg-white", shadow: "shadow-[6px_6px_0px_0px_#231F20]" },
    { id: 2, rotation: "rotate-3", border: "border-[#231F20]", bg: "bg-[#FBCD29]/20", shadow: "shadow-[6px_6px_0px_0px_#F16E22]" },
    { id: 3, rotation: "-rotate-1", border: "border-[#FBCD29]", bg: "bg-white", shadow: "shadow-[6px_6px_0px_0px_#231F20]" },
    { id: 4, rotation: "rotate-2", border: "border-[#231F20]", bg: "bg-[#F16E22]/10", shadow: "shadow-[6px_6px_0px_0px_#FBCD29]" },
  ];

  return (
    // Remainder padding updated to match the height of your new fixed footer
    <section id="gallery" className="space-y-8 pb-32 pt-8 border-t-4 border-dashed border-[#231F20]">
      
      {/* Title block styled like a high-contrast label sticker */}
      <div className="inline-flex items-center gap-3 bg-[#231F20] text-[#EAD2C1] px-4 py-2 border-2 border-[#231F20] shadow-[4px_4px_0px_0px_#F16E22] transform -rotate-1">
        <Terminal size={20} className="text-[#FBCD29]" />
        <h2 className="font-impact text-2xl tracking-wide uppercase">Visual_Logs</h2>
      </div>

      {/* Grid container with extra padding to accommodate the offset tilted shadows */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-2 pt-4">
        {placeholders.map((item) => (
          <div 
            key={item.id} 
            className={`aspect-[3/4] ${item.bg} border-4 ${item.border} ${item.shadow} ${item.rotation} relative group overflow-hidden transition-transform duration-200 hover:rotate-0 hover:scale-105 cursor-pointer`}
          >
            {/* Inner frame simulating a raw developer printing border or barcode tag */}
            <div className="absolute top-2 left-2 right-2 bottom-8 border border-[#231F20]/10 flex items-center justify-center bg-[#231F20]/5 group-hover:bg-transparent transition-colors">
              <span className="text-[#231F20] text-xs font-mono font-black tracking-tighter opacity-60 group-hover:opacity-100 group-hover:text-[#F16E22] transition-all">
                LOG_00{item.id}.RAW
              </span>
            </div>

            {/* Bottom metadata text matching the aesthetic of a zine cutout label */}
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#231F20] flex items-center justify-between px-3 text-[9px] font-mono text-[#EAD2C1] font-bold border-t-2 border-[#231F20]">
              <span>SYS_LOG_v7</span>
              <span className="text-[#FBCD29]">EST.2025</span>
            </div>
            
            {/* Once you get real images, render them like this inside the inner frame:
            <Image 
              src={`/gallery-${item.id}.png`} 
              alt="Live Show" 
              fill 
              className="object-cover grayscale contrast-125 mix-blend-multiply group-hover:grayscale-0 group-hover:mix-blend-normal transition-all"
            /> 
            */}
          </div>
        ))}
      </div>
    </section>
  );
}