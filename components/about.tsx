import Image from "next/image";
import { Users } from "lucide-react";

export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center pt-8 border-t-4 border-dashed border-[#231F20]">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-3 bg-[#F16E22] text-white px-4 py-2 border-2 border-[#231F20] shadow-[4px_4px_0px_0px_#231F20] transform -rotate-1">
          <Users size={20} />
          <h2 className="font-impact text-2xl tracking-wide uppercase">ABOUT US</h2>
        </div>

        {/* Individual text sticker blocks matching the poster design */}
        <div className="space-y-3 text-white font-mono text-base font-bold">
          <p className="block">
            <span className="bg-[#F16E22] px-2 py-1 border border-[#231F20] inline-block shadow-[2px_2px_0px_0px_#231F20] text-white uppercase mr-1">
              DATABASS
            </span>{" "}
            <span className="bg-[#231F20] px-2 py-1 inline-block text-[#EAD2C1]">
              is a ragtag team of musicians
            </span>
          </p>
          <p className="block">
            <span className="bg-[#FBCD29] text-[#231F20] px-2 py-1 border border-[#231F20] inline-block shadow-[2px_2px_0px_0px_#231F20]">
              from Ateneo MISA
            </span>
          </p>
          <p className="text-[#231F20] font-sans font-medium text-sm pt-2 leading-relaxed">
            We are DATABASS, a six-piece band made up of tech students whose hearts have always belonged to music. Deeply rooted in a technical field, we found music as our creative outlet, the avenue where we could express ourselves beyond the world of systems and data.          </p>

          <p className="text-[#231F20] font-sans font-medium text-sm pt-2 leading-relaxed">
With two vocalists, a lead guitarist, rhythm guitarist, bassist, and drummer, we simply channeled that shared passion into something real, making our first performance together at our home org MISA's year-end party, and we're just getting started.           </p>

          {/* NEW: Chunky Brutalist Continue Button */}
          <div className="pt-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-[#FBCD29] text-[#231F20] px-4 py-2.5 border-2 border-[#231F20] font-mono font-black text-xs uppercase tracking-wider shadow-[4px_4px_0px_0px_#231F20] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#231F20] transition-all"
            >
              Meet All Members →
            </a>
          </div>
        </div>
      </div>

      {/* Frame styled like a raw, cut-out magazine photo with an outline accent */}
      <div className="relative aspect-square border-4 border-[#231F20] bg-[#231F20] shadow-[8px_8px_0px_0px_#F16E22] overflow-hidden group transform rotate-1">
        <Image
          src="/BandPic.png"
          alt="Band"
          fill
          className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </section>
  );
}