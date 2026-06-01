"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Terminal, Heart } from "lucide-react";

export default function AboutPage() {
  const members = [
    { name: "EDRIC", role: "Super Cool Drummer", slant: "-rotate-1", bg: "bg-white", shadow: "#F16E22", facts: ["Valid", "Cares for the elderly"] },
    { name: "MIKS", role: "Super Cool Bassist", slant: "rotate-2", bg: "bg-[#FBCD29]/15", shadow: "#231F20", facts: ["Nonchalant"] },
    { name: "AMIEL", role: "Super Cool Lead Guitarist", slant: "-rotate-2", bg: "bg-white", shadow: "#F16E22", facts: ["OA"] },
    { name: "NICS", role: "Super Cool Vocalist", slant: "rotate-1", bg: "bg-white", shadow: "#231F20", facts: ["Comms God", "Always late"] },
    { name: "PETER", role: "Super Cool Rhythmn Guitarist", slant: "-rotate-1", bg: "bg-[#F16E22]/10", shadow: "#FBCD29", facts: ["The real swag"] },
    { name: "DAVID", role: "Super Cool Vocalist", slant: "rotate-3", bg: "bg-white", shadow: "#231F20", facts: ["Super high QPI", "Math Wizard"] },
  ];

  return (
    <div className="bg-[#EAD2C1] text-[#231F20] min-h-screen p-4 md:p-8 space-y-8 selection:bg-[#FBCD29] pb-32">
      <div className="max-w-6xl mx-auto border-4 border-[#231F20] bg-[#EAD2C1] p-6 md:p-12 shadow-[8px_8px_0px_0px_#231F20]">

        {/* Page Navigation Header */}
        <div className="flex justify-between items-center border-b-4 border-dashed border-[#231F20] pb-6 mb-10">
          <Link href="/" className="inline-flex items-center gap-2 font-mono font-black text-xs uppercase bg-white border-2 border-[#231F20] px-3 py-1.5 shadow-[2px_2px_0px_0px_#231F20] hover:bg-[#FBCD29] transition-colors">
            <ArrowLeft size={14} /> RETURN_TO_BASE
          </Link>
          <div className="text-[10px] font-mono font-bold opacity-60 text-right hidden sm:block">
            SECURE_NODE_DIRECTORY // AUTH_LEVEL: ROOT
          </div>
        </div>

        {/* Section Heading */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex sm:inline-flex items-center gap-2 sm:gap-3 bg-[#F16E22] text-white px-3 py-2 sm:px-5 sm:py-2.5 border-2 border-[#231F20] shadow-[4px_4px_0px_0px_#231F20] sm:shadow-[5px_5px_0px_0px_#231F20] transform -rotate-1 max-w-full">
            <Terminal size={18} className="text-[#FBCD29] flex-shrink-0 sm:w-[22px] sm:h-[22px]" />
            <h1 className="font-impact text-lg sm:text-2xl lg:text-3xl tracking-wide uppercase truncate min-w-0">
              MEET_THE_COLLECTIVE
            </h1>
          </div>
          <p className="font-mono text-sm max-w-xl text-[#231F20]/80">
            Parsing the components behind the frequency response. Six individual units arrayed into a cohesive unit.
          </p>
        </div>

        {/* Members Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className={`border-4 border-[#231F20] ${member.bg} p-5 ${member.slant} shadow-[6px_6px_0px_0px_${member.shadow}] flex flex-col justify-between group transition-transform duration-200 hover:rotate-0 hover:scale-[1.02]`}
            >
              <div>
                {/* Visual Placeholder for Member Photo */}
                <div className="relative aspect-[4/3] bg-[#231F20] border-2 border-[#231F20] overflow-hidden mb-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#EAD2C1] font-mono text-[10px] tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                    <span>IMAGE_SYS_LOG_{member.name}</span>
                    <span className="text-[#FBCD29] text-[8px] mt-1">NO_SIGNAL.RAW</span>
                  </div>
                  {/* Future real photos integrate seamlessly here:
                  <Image src={`/members/${member.name.toLowerCase()}.png`} alt={member.name} fill className="object-cover grayscale contrast-125" /> 
                  */}
                </div>

                {/* Identity Information Badge Strip */}
                <div className="flex justify-between items-baseline border-b-2 border-[#231F20] pb-2 mb-3">
                  <h2 className="font-impact text-2xl tracking-wide text-[#F16E22] uppercase">{member.name}</h2>
                  <span className="font-mono text-[10px] font-bold bg-[#231F20] text-white px-2 py-0.5 uppercase">{member.role}</span>
                </div>

                {/* Fun Facts Substructure */}
                <div className="space-y-2 mt-4">
                  <div className="text-[10px] font-mono font-black text-gray-500 uppercase flex items-center gap-1">
                    <Heart size={10} className="text-[#F16E22]" /> peripheral_data:
                  </div>
                  <ul className="font-mono text-xs space-y-1.5 text-[#231F20] font-bold">
                    {member.facts.map((fact, index) => (
                      <li key={index} className="bg-white/50 border border-[#231F20]/10 p-1.5 rounded-sm">
                        • {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative System Stamp on Card Footer */}
              <div className="text-right text-[8px] font-mono font-bold text-[#231F20]/40 pt-6 mt-auto">
                DATABASS_UNIT_PRNT // EST_2025
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}