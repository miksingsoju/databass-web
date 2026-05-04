import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Terminal, Volume2, Play, SkipBack, SkipForward } from "lucide-react";
import Footer from "@/components/footer";

// Corrected Font Loading
const impact = localFont({
  src: "./fonts/impact.ttf", 
  variable: "--font-impact", // This must be a separate property
});

export const metadata: Metadata = {
  title: "DATABASS",
  description: "A Band from Ateneo Management Information Systems Association",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // We keep html and body here—it's mandatory for the Root Layout!
    <html lang="en" className={`${impact.variable} dark`}>
      <body className="bg-black text-white font-mono antialiased overflow-hidden">
        {/* The wrapper for the whole app */}
        <div className="flex h-screen w-full flex-col">
          
          {/* MAIN SCROLLABLE CONTENT */}
          <main className="flex-1 overflow-y-auto pb-24 scrollbar-hide">
            {children}
          </main>

          {/* STICKY PLAYER BAR */}
          <Footer />

        </div>
      </body>
    </html>
  );
}