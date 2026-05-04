import Image from "next/image";
import { Terminal, Database, Cpu, Users } from "lucide-react";


export default function Gallery() {
  return (
    <section id="gallery" className="space-y-8 pb-40">
        <div className="flex items-center gap-4 text-orange-600 text-4xl font-impact uppercase">
          <Terminal size={20} />
          <h2>Visual_Logs</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Placeholder slots for your band pictures */}
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="aspect-[3/4] bg-[#0A0A0A] border border-orange-900/20 relative group overflow-hidden">
               <div className="absolute inset-0 flex items-center justify-center text-orange-900 text-[10px] font-mono group-hover:text-orange-500 transition-colors">
                 IMAGE_DATA_00{num}
               </div>
               {/* Replace the div above with <Image /> components as you get more photos */}
            </div>
          ))}
        </div>
      </section>
  );
}