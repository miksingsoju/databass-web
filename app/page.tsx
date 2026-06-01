"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Tracklist from "@/components/tracklist";
import Navbar from "@/components/nav";
import ContactSection from "@/components/contact";
import Gigs from "@/components/gigs";
import VideoLog from "@/components/videolog";

export default function Home() {

  return (
    <div className="bg-[#EAD2C1] text-[#231F20] min-h-screen p-4 md:p-8 space-y-16 selection:bg-[#FBCD29]">
      <div className="max-w-6xl mx-auto border-4 border-[#231F20] bg-[#EAD2C1] p-6 md:p-12 shadow-[8px_8px_0px_0px_#231F20]">

        <Hero />

        <Tracklist />
        <VideoLog />

        <Gigs />
        <About />
        <Gallery />
        <ContactSection />
      </div>
    </div>
  );
}