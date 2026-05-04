"use client";

import Hero from "@/components/hero";
import About from "@/components/about";
import Gallery from "@/components/gallery";
import Tracklist from "@/components/tracklist";

export default function Home() {
  

  return (
    <div className="p-8">
      {/* HERO SECTION */}
      <Hero />
      <Tracklist />
      <About />
      {/* GALLERY: Visual Logs */}
      <Gallery />
        
    </div>
  );
}