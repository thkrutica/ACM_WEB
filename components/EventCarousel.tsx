'use client';

// EventCarousel component: Renders a 3D curved interactive carousel of poster cards as shown in the UI video.
// Supports mouse drag scrolling, click to view poster details, and responsive scaling.

import { useEffect, useRef } from 'react';

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

  useEffect(() => {
  const container = scrollContainerRef.current;

  if (!container) return;

  let animationFrame: number;

  const speed = 2;

  const animate = () => {
    if (!container) return;

    container.scrollLeft += speed;

    if (container.scrollLeft >= container.scrollWidth / 2) {
  container.scrollLeft = 0;
}

    animationFrame = requestAnimationFrame(animate);
  };

  animationFrame = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationFrame);
}, []);

  return (
    <div className="relative my-8">
     
      <div
  ref={scrollContainerRef}
  style={{
    perspective: "1500px",
  }}
  className="carousel-3d-container flex gap-6 overflow-x-auto py-6 px-8 no-scrollbar"
>
  {[...items, ...items].map((poster, index) => (
          <div
  key={`${poster.id}-${index}`}
  className="carousel-3d-card shrink-0 relative group cursor-pointer border border-white/20 rounded-2xl overflow-hidden bg-black/60"
  style={{
    width: "270px",
    height: "380px",
    transformStyle: "preserve-3d",
    transform: "perspective(1200px) rotateY(-15deg) rotateX(8deg)",
    transition: "transform 0.4s ease",
    boxShadow: "0 25px 45px rgba(0,0,0,0.45)",
  }}
>
            {/* Poster Image */}
            {/* IMAGE LOCATION: Replace poster.imageUrl to change event image */}
            <img
  src={poster.imageUrl}
  alt={poster.title}
  className="w-full h-full object-cover transition-transform duration-500"
  style={{
    transform: "translateZ(40px)",
  }}
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
