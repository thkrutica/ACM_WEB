'use client';

// Footer component: Renders the site-wide footer matching the exact video layout.
// Contains ACM DTC logo & mission summary on the left, QUICK LINKS in the center, CONTACT US AT links on the right, and copyright at the bottom.

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer bg-black/40 border-t border-white/10 pt-10 pb-6 px-6 md:px-12 mt-16 text-white">
      {/* -------------------------------------------------------------------
         TOP FOOTER SECTION: 3 Columns (Logo & Bio, Quick Links, Contact Links)
         ------------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
        
        {/* COLUMN 1: Logo & Chapter Overview Paragraph */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            {/* Logo Mark Graphic */}
            <div className="relative w-9 h-9 rotate-45 border-2 border-[#2fe1ff] shadow-[0_0_15px_rgba(47,225,255,0.4)] flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-[#1090ff]"></div>
            </div>
            {/* Brand Title */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#2fe1ff] block">ACM CHAPTER</span>
              <span className="text-sm font-extrabold text-white">DELHI TECHNICAL CAMPUS</span>
            </div>
          </div>

          <p className="text-xs text-white/70 leading-relaxed max-w-md">
            ACM boosts up the potential and talent, supporting the overall development needs of our students to facilitate a structured path from education to employment by providing a safe and supported space where creative talent and imagination can flourish in a caring environment.
          </p>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-extrabold tracking-widest text-[#1090ff] uppercase">QUICK LINKS</h4>
          <ul className="space-y-2 text-xs font-semibold text-white/80">
            <li>
              <Link href="/" className="hover:text-[#2fe1ff] transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#2fe1ff] transition-colors">About</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-[#2fe1ff] transition-colors">Events</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#2fe1ff] transition-colors">Gallery</Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#2fe1ff] transition-colors">Team</Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-[#2fe1ff] transition-colors">Resources</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: Contact Channels */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="text-xs font-extrabold tracking-widest text-[#1090ff] uppercase">CONTACT US AT</h4>
          <ul className="space-y-2 text-xs font-semibold text-white/80">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1090ff]"></span>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#2fe1ff] transition-colors">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1090ff]"></span>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#2fe1ff] transition-colors">
                X (Twitter)
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1090ff]"></span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#2fe1ff] transition-colors">
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1090ff]"></span>
              <a href="mailto:acmstudentchapter@delhitechnicalcampus.ac.in" className="hover:text-[#2fe1ff] transition-colors">
                Email Us
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* -------------------------------------------------------------------
         BOTTOM COPYRIGHT & ADMIN LINK
         ------------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/50 font-medium">
        <p>&copy; 2025, DTC ACM STUDENT CHAPTER</p>
        <Link href="/admin" className="hover:text-[#1090ff] transition-colors underline">
          Admin Portal
        </Link>
      </div>
    </footer>
  );
}
