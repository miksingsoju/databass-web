"use client";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import gigData from "@/data/gigs.json";

export default function Gigs() {
    return (
        <section id="shows" className="space-y-12 pt-8 border-t-4 border-dashed border-[#231F20]">

            {/* Header Tag */}
            <div className="inline-flex items-center gap-3 bg-[#F16E22] text-white px-4 py-2 border-2 border-[#231F20] shadow-[4px_4px_0px_0px_#231F20] transform rotate-1">
                <Calendar size={20} className="text-[#FBCD29]" />
                <h2 className="font-impact text-2xl tracking-wide uppercase">LIVE_DEPLOYMENTS</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">

                {/* LEFT & CENTER COLS: UPCOMING GIGS */}
                <div className="md:col-span-2 space-y-4">
                    <h3 className="font-mono text-xs font-black text-gray-500 uppercase tracking-widest">
                        // STAGED_FOR_EXECUTION:
                    </h3>

                    {/* ⚠️ CONDITIONAL LOGIC CHECK */}
                    {gigData.upcoming.length === 0 ? (

                        /* FALLBACK STATE: Displays when there are 0 upcoming shows */
                        <div className="bg-[#231F20] border-4 border-[#231F20] text-[#EAD2C1] p-8 shadow-[8px_8px_0px_0px_#F16E22] transform -rotate-1 text-center space-y-4 my-6">
                            <div className="inline-block bg-[#F16E22] text-white font-mono font-black text-xs px-3 py-1 animate-pulse border border-black">
                                CRITICAL_ALERT: NO_ACTIVE_DEPLOYMENTS
                            </div>

                            <h4 className="font-impact text-3xl uppercase tracking-tight text-[#FBCD29]">
                                THE VOID IS SILENT... FOR NOW.
                            </h4>

                            <p className="font-mono text-xs text-gray-300 max-w-md mx-auto leading-relaxed">
                                System idling in standby mode. No live frequencies detected on the network canvas.
                                <span className="block mt-2 text-[#F16E22] font-bold">Want to execute a live noise test at your venue?</span>
                            </p>

                            <div className="pt-2">
                                <a
                                    href="mailto:databass@ateneo.edu"
                                    className="inline-block bg-white text-[#231F20] font-mono font-black text-xs uppercase px-4 py-2 border-2 border-white shadow-[3px_3px_0px_0px_#FBCD29] hover:bg-[#FBCD29] transition-colors"
                                >
                                    PING_BOOKING_GATEWAY.EXE
                                </a>
                            </div>
                        </div>

                    ) : (

                        /* ACTIVE STATE: Maps and prints out your gigs when array length > 0 */
                        /* CHANGED HERE: Added (gig: any) to bypass the 'never' type-check on empty json slots */
                        gigData.upcoming.map((gig: any) => (
                            <div
                                key={gig.id}
                                className="bg-white border-4 border-[#231F20] shadow-[6px_6px_0px_0px_#231F20] p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transform hover:-translate-y-0.5 transition-transform"
                            >
                                <div className="space-y-2">
                                    <span className="bg-[#FBCD29] text-[#231F20] font-mono font-black text-xs px-2 py-0.5 border border-[#231F20]">
                                        {gig.date} @ {gig.time}
                                    </span>
                                    <h4 className="font-impact text-2xl text-[#231F20] uppercase tracking-tight leading-tight pt-1">
                                        {gig.event}
                                    </h4>
                                    <div className="flex items-center gap-1.5 font-mono text-xs text-gray-600 font-bold">
                                        <MapPin size={12} className="text-[#F16E22]" /> {gig.venue}
                                    </div>
                                </div>

                                <a
                                    href={gig.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto text-center bg-[#F16E22] text-white font-mono font-black text-xs uppercase px-4 py-3 border-2 border-[#231F20] shadow-[3px_3px_0px_0px_#231F20] hover:bg-[#231F20] hover:text-[#FBCD29] active:translate-y-0.5 transition-all"
                                >
                                    {gig.actionLabel}
                                </a>
                            </div>
                        ))
                    )}
                </div>

                {/* RIGHT COL: PAST GIGS (Log History Style) */}
                <div className="space-y-4">
                    <h3 className="font-mono text-xs font-black text-gray-500 uppercase tracking-widest">// ARCHIVED_LOGS:</h3>

                    <div className="bg-[#231F20] text-[#EAD2C1] border-4 border-[#231F20] shadow-[6px_6px_0px_0px_#F16E22] p-4 font-mono text-xs space-y-4">
                        {/* CHANGED HERE: Added (gig: any) for safety consistency */}
                        {gigData.past.map((gig: any) => (
                            <div key={gig.id} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                                <div className="text-[10px] text-[#FBCD29] font-bold">{gig.date}</div>
                                <div className="font-sans font-black text-white text-sm my-0.5 uppercase tracking-tight">{gig.event}</div>
                                <div className="text-gray-400 text-[10px] truncate">{gig.venue}</div>
                                <div className="text-[#66BB6A] text-[9px] font-bold flex items-center gap-1 mt-1.5 bg-black/30 w-max px-1.5 py-0.5 rounded-sm">
                                    <CheckCircle2 size={10} /> {gig.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}