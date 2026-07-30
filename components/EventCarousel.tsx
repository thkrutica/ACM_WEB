'use client';

// EventCarousel component: Renders a 3D curved interactive carousel of poster cards as shown in the UI video.
// Supports mouse drag scrolling, click to view poster details, and responsive scaling.

import { useRef } from 'react';

export interface PosterItem {
  id: string;
  title: string;
  tag: string;
  imageUrl: string;
}

const DEFAULT_POSTERS: PosterItem[] = [
  {
    id: 'p1',
    title: 'Career Guidance Session',
    tag: 'ACM WEEKEND',
    // IMAGE LOCATION: Change image URL below to swap this poster artwork
    imageUrl: "/images/acm1.jpeg", // IMAGE LOCATION: Change event poster image URL 1
  },
  {
    id: 'p2',
    title: 'EUROPEAN TALENT HUNT - AI & NEXT GEN PAYMENTS',
    tag: 'TALENT HUNT',
    // IMAGE LOCATION: Change image URL below to swap this poster artwork
   imageUrl: "/images/acm2.jpeg", // IMAGE LOCATION: Change event poster image URL 1,
  },
  {
    id: 'p3',
    title: 'ACM is Recruiting!',
    tag: 'CHAPTER MEMBERSHIP',
    // IMAGE LOCATION: Change image URL below to swap this poster artwork
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p4',
    title: 'Netflix & Code',
    tag: 'MOVIE & BUILD NIGHT',
    // IMAGE LOCATION: Change image URL below to swap this poster artwork
    imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p5',
    title: 'Tech Titans Unite',
    tag: 'COMPETITION',
    // IMAGE LOCATION: Change image URL below to swap this poster artwork
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
];

export default function EventCarousel({ items = DEFAULT_POSTERS }: { items?: PosterItem[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll carousel left or right
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative my-8">
      {/* -------------------------------------------------------------------
         CAROUSEL SCROLL BUTTONS
         ------------------------------------------------------------------- */}
      <button
        onClick={() => scroll('left')}
        aria-label="Scroll left"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#1090ff] transition-colors shadow-lg cursor-pointer"
      >
        &larr;
      </button>

      <button
        onClick={() => scroll('right')}
        aria-label="Scroll right"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center hover:bg-[#1090ff] transition-colors shadow-lg cursor-pointer"
      >
        &rarr;
      </button>

      {/* -------------------------------------------------------------------
         3D CURVED CAROUSEL TRACK
         ------------------------------------------------------------------- */}
      <div
        ref={scrollContainerRef}
        className="carousel-3d-container flex gap-6 overflow-x-auto py-6 px-8 scroll-smooth no-scrollbar"
      >
        {items.map((poster, index) => (
          <div
            key={poster.id || index}
            className="carousel-3d-card shrink-0 relative group cursor-pointer border border-white/20 rounded-2xl overflow-hidden bg-black/60 shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            {/* Poster Image */}
            {/* IMAGE LOCATION: Replace poster.imageUrl to change event image */}
            <img
              src={poster.imageUrl}
              alt={poster.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Poster Overlay Banner */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2fe1ff] bg-[#1090ff]/30 px-2 py-0.5 rounded w-fit mb-1 border border-[#2fe1ff]/30">
                {poster.tag}
              </span>
              <h4 className="text-sm font-bold text-white leading-tight drop-shadow">
                {poster.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
