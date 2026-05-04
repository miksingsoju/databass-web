import Image from "next/image";
import { Users } from "lucide-react";

export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <div className="flex items-center gap-4 text-orange-600">
          <Users size={20} />
          <h2 className="font-impact text-4xl uppercase">ABOUT US</h2>
        </div>
        <div className="space-y-4 text-gray-400 font-mono text-sm leading-relaxed">
          <p><span className="text-orange-500 font-bold underline">DATABASS</span> is a multi-node collective specializing in sonic SQL injections.</p>
          <p>Founded in the vacuum between hardware and software, the group translates complex data structures into rhythmic oscillations.</p>
        </div>
      </div>
      <div className="relative aspect-square border-2 border-orange-600 bg-orange-900/10 overflow-hidden group">
        <Image src="/BandPic.png" alt="Band" fill className="object-cover grayscale group-hover:scale-105 transition-transform duration-700" />
      </div>
    </section>
  );
}