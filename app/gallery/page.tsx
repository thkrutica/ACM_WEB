'use client';

// Gallery Page route: Interactive full-width photo showcase of ACM DTC workshops, hackathons, and moments.
// Matches exact video design: "Moments that made the journey unforgettable" header with interactive slider & thumbnail pagination bar.

import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  // IMAGE LOCATION: Change imageUrl to swap the photo displayed in the gallery slider
  imageUrl: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Engineering 101 — Peer Mentorship & Workshop Session',
    category: 'Workshops',
    // IMAGE LOCATION: Replace gallery photo 1
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g2',
    title: 'ACM DTC Hackathon — Team Prototyping & Build Night',
    category: 'Hackathons',
    // IMAGE LOCATION: Replace gallery photo 2
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g3',
    title: 'Industry Speaker Talk & Interactive Q&A',
    category: 'Guest Lectures',
    // IMAGE LOCATION: Replace gallery photo 3
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'g4',
    title: 'Annual Project Showcase & Awards Ceremony',
    category: 'Celebration',
    // IMAGE LOCATION: Replace gallery photo 4
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function GalleryPage() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const currentPhoto = GALLERY_PHOTOS[activePhotoIndex];

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="gallery-page space-y-12 py-6">

      {/* ===================================================================
         SECTION 1: HERO HEADER
         Moments that made the journey unforgettable
         =================================================================== */}
      <ScrollReveal className="section text-center max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight">
          Moments that made the journey unforgettable
        </h1>
        <p className="text-sm md:text-base text-white/70">
          A visual archive of workshops, competitions, team builds, and chapter memories at Delhi Technical Campus.
        </p>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 2: FULL-WIDTH INTERACTIVE GALLERY SLIDER
         With left & right arrow controls and photo caption overlay
         =================================================================== */}
      <ScrollReveal className="section">
        <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black/80">
          
          {/* Main Photo Display */}
          <div className="relative h-[380px] md:h-[500px] w-full">
            {/* IMAGE LOCATION: Replace currentPhoto.imageUrl to change active photo */}
            <img
              src={currentPhoto.imageUrl}
              alt={currentPhoto.title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* END IMAGE LOCATION */}

            {/* Photo Caption Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 flex flex-col justify-end p-6 md:p-8">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#2fe1ff] bg-[#1090ff]/30 px-3 py-1 rounded w-fit mb-2 border border-[#2fe1ff]/30">
                {currentPhoto.category}
              </span>
              <h2 className="text-xl md:text-3xl font-extrabold text-white leading-tight">
                {currentPhoto.title}
              </h2>
            </div>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-white/30 text-white flex items-center justify-center hover:bg-[#1090ff] transition-colors shadow-2xl cursor-pointer"
          >
            &larr;
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/80 border border-white/30 text-white flex items-center justify-center hover:bg-[#1090ff] transition-colors shadow-2xl cursor-pointer"
          >
            &rarr;
          </button>

        </div>

        {/* Thumbnail Selector Bar */}
        <div className="flex items-center justify-center gap-3 mt-6">
          {GALLERY_PHOTOS.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setActivePhotoIndex(idx)}
              className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                idx === activePhotoIndex ? 'border-[#1090ff] scale-110 shadow-lg' : 'border-white/20 opacity-60 hover:opacity-100'
              }`}
            >
              {/* IMAGE LOCATION: Replace thumbnail image URL */}
              <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </ScrollReveal>

    </div>
  );
}
