'use client';

// JoinUsCard component: Renders the official linktree-style social and membership connection card matching the video design.
// Contains glowing planet graphic on left and buttons for ACM Membership, WhatsApp, LinkedIn, X, Instagram, Linktree.

export default function JoinUsCard() {
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 md:p-10 rounded-3xl bg-black/80 border border-white/15 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      
      {/* -------------------------------------------------------------------
         LEFT COLUMN: Glowing Planet Visual
         ------------------------------------------------------------------- */}
      <div className="md:col-span-5 flex justify-center">
        <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
          {/* Glowing Aura Filter */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8d42ff]/30 to-[#ff4fd8]/30 blur-2xl animate-pulse"></div>
          
          {/* Planet Graphic */}
          {/* IMAGE LOCATION: Replace this image URL to change the planet visual */}
          <img
            src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80"
            alt="Glowing Saturn Planet Visual"
            className="w-56 h-56 object-cover rounded-full relative z-10 border-2 border-[#2fe1ff]/40 shadow-[0_0_50px_rgba(141,66,255,0.5)]"
          />
        </div>
      </div>

      {/* -------------------------------------------------------------------
         RIGHT COLUMN: Linktree Button Stack
         ------------------------------------------------------------------- */}
      <div className="md:col-span-7 space-y-4">
        {/* Header Branding */}
        <div className="text-center md:text-left mb-4">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <div className="w-4 h-4 rotate-45 border border-[#2fe1ff]"></div>
            <span className="text-xs font-extrabold tracking-widest text-[#2fe1ff]">ACM DTC</span>
          </div>
          <h2 className="text-xl font-bold text-white uppercase tracking-wider">
            ACM DELHI TECHNICAL CAMPUS
          </h2>
        </div>

        {/* Buttons List */}
        <div className="space-y-2.5">
          <a
            href="https://acm.org"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1090ff]/30 border border-white/15 hover:border-[#1090ff] text-white text-xs font-bold flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#1090ff]"></span>
            Become an ACM Member
          </a>

          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1090ff]/30 border border-white/15 hover:border-[#1090ff] text-white text-xs font-bold flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#2fe1ff]"></span>
            Whatsapp
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1090ff]/30 border border-white/15 hover:border-[#1090ff] text-white text-xs font-bold flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#1090ff]"></span>
            LinkedIn
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1090ff]/30 border border-white/15 hover:border-[#1090ff] text-white text-xs font-bold flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-white"></span>
            X
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1090ff]/30 border border-white/15 hover:border-[#1090ff] text-white text-xs font-bold flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff4fd8]"></span>
            Instagram
          </a>

          <a
            href="https://linktr.ee"
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-[#1090ff]/30 border border-white/15 hover:border-[#1090ff] text-white text-xs font-bold flex items-center justify-center gap-3 transition-all cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-[#8d42ff]"></span>
            Linktree
          </a>
        </div>
      </div>

    </div>
  );
}
