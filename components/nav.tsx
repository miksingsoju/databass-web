"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Nav items configuration. 
  // Use hashes like "#about" for single-page scrolling, or paths like "/merch" for future subpages.
  const navItems = [
    { label: "Tracklist", href: "#tracklist", isExternal: false },
    { label: "About", href: "#about", isExternal: false },
    { label: "Visual Logs", href: "#gallery", isExternal: false },
    { label: "Merch", href: "/merch", isExternal: true }, // Placeholder for future page
  ];

  // Smooth scroll handler for same-page anchors
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Close mobile menu if open
      }
    }
  };

  return (
    <nav className="sticky top-0 left-0 right-0 bg-[#EAD2C1] border-b-4 border-[#231F20] z-50 px-4 md:px-8 h-20 flex items-center justify-between">
      
      {/* 1. LOGO EMBED (Set to a standard 50px height matching our grid rules) */}
      <Link href="/" className="relative h-[50px] w-[50px] transform hover:scale-105 active:scale-95 transition-transform duration-150">
        <Image
          src="/logo.jpg" // Replace with your actual image file path in /public
          alt="DATABASS Logo"
          fill
          priority
          className="object-contain drop-shadow-[2px_2px_0px_#231F20]"
        />
      </Link>

      {/* 2. DESKTOP NAV LINKS */}
      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="px-4 py-2 text-sm font-black uppercase tracking-wider text-[#231F20] hover:bg-[#FBCD29] border-2 border-transparent hover:border-[#231F20] hover:shadow-[3px_3px_0px_0px_#231F20] transition-all duration-100"
          >
            {item.label}
          </Link>
        ))}

        {/* Highlighted CTA Button matching the poster accents */}
        <Link 
          href="https://spotify.com" 
          target="_blank"
          className="ml-4 inline-flex items-center gap-2 bg-[#F16E22] text-white px-4 py-2 border-2 border-[#231F20] font-black text-sm uppercase tracking-wide shadow-[3px_3px_0px_0px_#231F20] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          <Terminal size={14} /> Listen_Now
        </Link>
      </div>

      {/* 3. MOBILE HAMBURGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 border-2 border-[#231F20] bg-white text-[#231F20] shadow-[2px_2px_0px_0px_#231F20] active:translate-y-0.5"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* 4. MOBILE DROPDOWN MENU */}
      {isOpen && (
        <div className="absolute top-[76px] left-0 right-0 bg-[#EAD2C1] border-b-4 border-[#231F20] p-4 flex flex-col gap-2 md:hidden shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="w-full text-left p-3 text-lg font-black uppercase border-2 border-[#231F20] bg-white text-[#231F20] shadow-[3px_3px_0px_0px_#231F20] active:bg-[#FBCD29]"
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="https://spotify.com"
            target="_blank"
            className="w-full text-center p-3 text-lg font-black uppercase bg-[#F16E22] text-white border-2 border-[#231F20] shadow-[3px_3px_0px_0px_#231F20] mt-2"
          >
            LISTEN_NOW.EXE
          </Link>
        </div>
      )}
    </nav>
  );
}