'use client';

// Header component: Fixed floating single-container glassmorphism navigation header.
// Blends logo, nav links, and Join Us CTA into one clean floating glass bar with enlarged, highly readable typography.

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  // Helper to determine active navigation route
  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-4 z-50 w-[min(94%,1400px)] mx-auto px-4 py-3 rounded-full bg-white/[0.09] backdrop-blur-2xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.65)] flex items-center justify-between gap-6 transition-all">
      
      {/* -------------------------------------------------------------------
         LEFT BRAND LOGO & TITLE (Enlarged typography for clear readability)
         ------------------------------------------------------------------- */}
      <Link href="/" className="brand inline-flex items-center gap-3.5 pl-2 group" aria-label="ACM Delhi Technical Campus home">
        <span className="brand-mark relative w-10 h-10 rotate-45 border-2 border-[#2fe1ff] shadow-[0_0_16px_rgba(47,225,255,0.5)] flex items-center justify-center transition-transform group-hover:scale-105">
          <span className="w-5 h-5 border-2 border-[#1090ff]"></span>
        </span>
        <span className="brand-copy flex flex-col leading-tight font-extrabold text-white text-sm">
          <span className="brand-title tracking-wide text-white/90">Association for</span>
          <span className="brand-title text-white">Computing Machinery</span>
        </span>
      </Link>

      {/* -------------------------------------------------------------------
         CENTER NAV LINKS (Single-level glass pill blended seamlessly)
         ------------------------------------------------------------------- */}
      <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full text-sm font-bold">
        <Link
          href="/"
          className={`px-5 py-2.5 rounded-full transition-all duration-200 ${
            isActive('/')
              ? 'bg-gradient-to-r from-[#1090ff] to-[#8d42ff] text-white shadow-[0_0_20px_rgba(141,66,255,0.6)] font-extrabold scale-105'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`px-5 py-2.5 rounded-full transition-all duration-200 ${
            isActive('/about')
              ? 'bg-gradient-to-r from-[#1090ff] to-[#8d42ff] text-white shadow-[0_0_20px_rgba(141,66,255,0.6)] font-extrabold scale-105'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          About
        </Link>
        <Link
          href="/events"
          className={`px-5 py-2.5 rounded-full transition-all duration-200 ${
            isActive('/events')
              ? 'bg-gradient-to-r from-[#1090ff] to-[#8d42ff] text-white shadow-[0_0_20px_rgba(141,66,255,0.6)] font-extrabold scale-105'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          Events
        </Link>
        <Link
          href="/gallery"
          className={`px-5 py-2.5 rounded-full transition-all duration-200 ${
            isActive('/gallery')
              ? 'bg-gradient-to-r from-[#1090ff] to-[#8d42ff] text-white shadow-[0_0_20px_rgba(141,66,255,0.6)] font-extrabold scale-105'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          Gallery
        </Link>
        <Link
          href="/team"
          className={`px-5 py-2.5 rounded-full transition-all duration-200 ${
            isActive('/team')
              ? 'bg-gradient-to-r from-[#1090ff] to-[#8d42ff] text-white shadow-[0_0_20px_rgba(141,66,255,0.6)] font-extrabold scale-105'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          Team
        </Link>
        <Link
          href="/resources"
          className={`px-5 py-2.5 rounded-full transition-all duration-200 ${
            isActive('/resources')
              ? 'bg-gradient-to-r from-[#1090ff] to-[#8d42ff] text-white shadow-[0_0_20px_rgba(141,66,255,0.6)] font-extrabold scale-105'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          Resources
        </Link>
      </nav>

      {/* -------------------------------------------------------------------
         RIGHT ACTION BUTTON (JOIN US →)
         ------------------------------------------------------------------- */}
      <Link
        href="/contact"
        className="join-button inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1090ff] to-[#8d42ff] text-white text-sm font-extrabold shadow-[0_0_20px_rgba(141,66,255,0.5)] hover:brightness-110 hover:scale-105 transition-all mr-1"
      >
        Join Us &rarr;
      </Link>

    </header>
  );
}
