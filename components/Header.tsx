//NAVIGATION BAR WITH FINE TUNING

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Team', href: '/team' },
    { name: 'Resources', href: '/resources' },
  ];

  return (
    <header className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between z-50 relative">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-cyan-600/10 blur-[100px] pointer-events-none z-[-1]"></div>

      <div className="flex-1 flex justify-start items-center relative z-20">
        <Link href="/" className="flex items-center gap-4 group min-w-max" aria-label="ACM Delhi Technical Campus home">
          <img src="/ACM_Logo.png" alt="ACM Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-500" />
          <span className="hidden lg:flex flex-col leading-tight font-extrabold text-white text-[13px] tracking-[0.05em] group-hover:text-gray-300 transition-colors duration-300">
            <span>Association for</span>
            <span>Computing Machinery</span>
          </span>
        </Link>
      </div>

      <div className="hidden md:flex flex-none justify-center relative z-20">
        <nav className="relative flex items-center gap-1 bg-gradient-to-b from-white/[0.08] to-black/30 backdrop-blur-3xl border border-white/10 border-t-white/30 rounded-full px-5 py-2.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden group">
          
          <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_4s_infinite] pointer-events-none"></div>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-full transition-all duration-300 flex items-center justify-center group/link ${
                  isActive ? 'bg-white/[0.06] text-white' : 'text-gray-300 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                <span className="text-[13px] font-bold tracking-wider relative z-10">{link.name}</span>
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_#2fe1ff] ${
                    isActive ? 'w-1/2' : 'w-0 group-hover/link:w-1/2 opacity-0 group-hover/link:opacity-100'
                  }`}
                ></div>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="flex-1 flex justify-end items-center relative z-20">
        <Link
          href="/contact"
          className="group relative flex items-center justify-center px-8 py-2.5 rounded-full bg-gradient-to-b from-[#183c70]/90 to-[#0e2547]/90 backdrop-blur-xl border border-white/15 border-t-white/40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-105 hover:from-[#1d4886]/90 hover:to-[#122e57]/90 hover:border-t-white/60 hover:shadow-[0_0_20px_rgba(30,90,170,0.4)] overflow-hidden"
        >
          <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
          <span className="relative z-10 text-white font-bold tracking-widest text-[12px] uppercase drop-shadow">Join Us</span>
        </Link>
      </div>

    </header>
  );
}