export default function ContactSection() {
  return (
    <section id="contact" className="pt-8 border-t-4 border-dashed border-[#231F20] text-center max-w-2xl mx-auto space-y-6 pb-12">
      <div className="inline-flex items-center bg-[#FBCD29] text-[#231F20] px-4 py-1.5 border-2 border-[#231F20] font-mono font-black text-xs uppercase tracking-widest shadow-[3px_3px_0px_0px_#231F20] transform rotate-1">
        INITIALIZE_COMMUNICATION.EXE
      </div>
      
<h2 className="font-impact text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#F16E22] drop-shadow-[2px_2px_0px_#231F20] leading-none">        QUERY_THE_COLLECTIVE
      </h2>
      
      <p className="font-mono text-sm text-[#231F20] font-bold">
        For bookings, and inquiries, ping our main gateway:
      </p>

      {/* The Actual Link Box styled like a cut-out sticker */}
      <div className="inline-block bg-white border-4 border-[#231F20] p-4 shadow-[6px_6px_0px_0px_#231F20] transform -rotate-1 hover:rotate-0 transition-transform">
        <a 
          href="mailto:databass.band@gmail.com" 
          className="font-mono font-black text-lg md:text-xl text-[#F16E22] underline hover:text-[#231F20]"
        >
          databass@ateneo.edu
        </a>
      </div>
    </section>
  );
}