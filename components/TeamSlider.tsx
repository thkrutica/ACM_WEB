'use client';

// TeamSlider component: Interactive slide-show presenting chapter leadership (Chairperson, Vice Chairperson, Leads).
// Features diagonal accent slice background, slide transitions, leader quotes, and photo cards matching the video.

import { useState } from 'react';

export interface LeaderProfile {
  id: string;
  name: string;
  role: string;
  quote: string;
  // IMAGE LOCATION: Change imageUrl to update the leader's photograph
  imageUrl: string;
  objectPosition?: string;
  imageScale?: number;
}

const LEADERS: LeaderProfile[] = [
  {
    id: 'leader-1',
    name: 'Ishan Jain',
    role: 'CHAIRPERSON',
    quote: "A leader's role is not to have all the answers, but to create an environment where innovation thrives.",
    // IMAGE LOCATION: Replace this photo URL with the Chairperson portrait
    imageUrl: '/ishan.png',
  },
  {
    id: 'leader-2',
    name: 'Dev Verma',
    role: 'VICE CHAIRPERSON',
    quote: "At ACM, every idea matters — because today's experiment can become tomorrow's innovation.",
    // IMAGE LOCATION: Replace this photo URL with the Vice Chairperson portrait
    imageUrl: '/Dev.png',
    objectPosition: '25% 50%',
  },
  {
    id: 'leader-3',
    name: 'Chhavi Verma',
    role: 'SECRETARY',
    quote: "Demystifying tech and creating space for everyone to build real projects.",
    // IMAGE LOCATION: Replace this photo URL with the Tech Lead portrait
    imageUrl: '/Chhavi.png'
  },
];

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLeader = LEADERS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? LEADERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === LEADERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="team-diagonal-card relative z-0 min-h-[460px] p-8 md:p-12 flex flex-col justify-between my-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      {/* Grid Pattern Background - sent to bottom-most layer */}
      <div className="absolute inset-0 -z-20 opacity-10 bg-[radial-gradient(#1090ff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      {/* Diagonal Accent Background Slice */}
      <div className="team-diagonal-accent hidden md:block -z-10"></div>

      {/* Slide Content Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

        {/* Left Info Column */}
        <div className="md:col-span-7 space-y-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              {currentLeader.name}
            </h2>
            <span className="text-xs font-bold tracking-widest text-[#2fe1ff] uppercase mt-1 block">
              {currentLeader.role}
            </span>
          </div>

          <blockquote className="text-sm md:text-base text-white/80 italic leading-relaxed max-w-lg pt-4 border-t border-white/10">
            "{currentLeader.quote}"
          </blockquote>

          {/* Social icons */}
          <div className="flex items-center gap-3 pt-3 text-sm">
            <a href="#" className="px-4 py-1.5 rounded-full bg-[#1090ff]/10 border border-[#1090ff]/30 text-[#1090ff] font-semibold hover:bg-[#1090ff] hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-semibold hover:bg-white hover:text-black transition-colors">Email</a>
          </div>
        </div>

        {/* Right Photo Column */}
        <div className="md:col-span-5 relative flex justify-center md:justify-end">
          <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-[#1090ff]/30 shadow-[0_0_30px_rgba(16,144,255,0.15)]">
            {/* Leader Image */}
            {/* IMAGE LOCATION: Replace currentLeader.imageUrl for leader profile photo */}
            <img
              src={currentLeader.imageUrl}
              alt={currentLeader.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: currentLeader.objectPosition || 'center' }}
            />
          </div>
        </div>

      </div>

      {/* Navigation Buttons (Prev / Next Arrows) */}
      <div className="relative z-10 flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
        <button
          onClick={handlePrev}
          aria-label="Previous leader slide"
          className="px-4 py-2 rounded-lg bg-black/80 border border-white/20 hover:bg-[#1090ff] text-white text-sm font-bold transition-colors cursor-pointer"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          aria-label="Next leader slide"
          className="px-4 py-2 rounded-lg bg-black/80 border border-white/20 hover:bg-[#1090ff] text-white text-sm font-bold transition-colors cursor-pointer"
        >
          &rarr;
        </button>
        <span className="text-xs text-white/50 ml-2">
          {currentIndex + 1} of {LEADERS.length}
        </span>
      </div>
    </div>
  );
}
