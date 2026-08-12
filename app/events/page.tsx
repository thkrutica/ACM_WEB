// Events Page route: Highlights upcoming sessions, hackathons, and chapter workshops.
// Matches exact video design: "Fueling Ideas, Powering Innovation" header, 3D Curved Event Carousel, and "Empowering the next generation of innovators" poster grid linked to Supabase.

import ScrollReveal from '@/components/ScrollReveal';
import EventCarousel, { PosterItem } from '@/components/EventCarousel';
import { createClient } from '@/lib/supabase/server';
import { EventItem } from '@/lib/supabase/types';
export const metadata = {
  title: 'ACM Delhi Technical Campus | Events',
  description: 'Fueling Ideas, Powering Innovation. Explore workshops, hackathons, and tech sessions at ACM DTC.',
};

// Force dynamic rendering for live Supabase events query
export const dynamic = 'force-dynamic';

// Fallback events data if Supabase table is empty
const DEFAULT_EVENT_CARDS = [
  {
    id: 'e1',
    title: 'Career Guidance — Event for Tech Enthusiasts',
    tag: 'ACM WEEKEND',
    description: 'Learn to shape a resume that stands out & boost your LinkedIn to attract top opportunities.',
    date: 'April 10',
    imageUrl: "/images/acm1.jpeg", // IMAGE LOCATION: Change event poster image URL 1
  },
  {
    id: 'e2',
    title: 'EUROPEAN TALENT HUNT - AI & NEXT GEN PAYMENTS',
    tag: 'TALENT HUNT',
    description: 'Next Gen Payments With AI.',
    date: 'JULY 17 - 19',
    imageUrl: "/images/acm2.jpeg",
  },
  {
    id: 'e3',
    title: 'Tech Titans Unite — Computing Society Event',
    tag: 'COMPETITION',
    description: 'Collaborative build sprint and hackathon competition for student teams.',
    date: 'March 8',
    // IMAGE LOCATION: Change event poster image URL 3
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'e4',
    title: 'Netflix and Code — Build & Watch Night',
    tag: 'COMMUNITY NIGHT',
    description: 'Casual coding sprint followed by movie and discussion session for chapter members.',
    date: 'October 21',
    // IMAGE LOCATION: Change event poster image URL 4
    imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=600&q=80',
  },
];

export default async function EventsPage() {
  let dbEvents: EventItem[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('events').select('*').order('created_at', { ascending: false });
    if (data && data.length > 0) {
      dbEvents = data;
    }
  } catch (err) {
    console.error('Error fetching events:', err);
  }

  return (
    <div className="events-page space-y-16 py-6">

      {/* ===================================================================
         SECTION 1: HERO HEADER
         Fueling Ideas, Powering Innovation
         =================================================================== */}
      <ScrollReveal className="section text-center max-w-4xl mx-auto space-y-3">
        <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight">
          Fueling Ideas, Powering Innovation
        </h1>
        <p className="text-sm md:text-base text-white/70">
          Become part of a vibrant community of developers, designers, and tech enthusiasts who believe in learning by doing.
        </p>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 2: 3D CURVED EVENT POSTER CAROUSEL
         Top interactive poster slider
         =================================================================== */}
      <ScrollReveal className="section">
        <EventCarousel />
      </ScrollReveal>

      {/* ===================================================================
         SECTION 3: EMPOWERING THE NEXT GENERATION OF INNOVATORS
         Poster cards grid with View Details action
         =================================================================== */}
      <ScrollReveal className="section space-y-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider">
            Empowering the next generation of innovators
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {DEFAULT_EVENT_CARDS.map((evt) => (
            <div key={evt.id} className="card flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="h-52 rounded-xl overflow-hidden border border-white/10 relative">
                  {/* IMAGE LOCATION: Replace event poster photo below */}
                  <img
                    src={evt.imageUrl}
                    alt={evt.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* END IMAGE LOCATION */}
                  <span className="absolute top-2 left-2 text-[9px] font-extrabold text-[#2fe1ff] bg-black/80 px-2 py-0.5 rounded border border-[#2fe1ff]/30">
                    {evt.tag}
                  </span>
                </div>

                <span className="text-xs font-bold text-[#1090ff] block">{evt.date}</span>
                <h3 className="text-base font-bold text-white leading-snug">{evt.title}</h3>
                <p className="text-xs text-white/70 line-clamp-2">{evt.description}</p>
              </div>

              <div className="pt-4 mt-2 border-t border-white/10">
                <button className="w-full py-2 text-xs font-bold rounded-lg bg-white/5 hover:bg-[#1090ff] text-white border border-white/15 transition-colors cursor-pointer">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Database Events List (if Admin has added custom events) */}
        {dbEvents.length > 0 && (
          <div className="pt-8 space-y-4">
            <h3 className="text-xl font-bold text-white">More Chapter Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {dbEvents.map((dbEvt) => (
                <div key={dbEvt.id} className="card">
                  {dbEvt.image_url && (
                    <img src={dbEvt.image_url} alt={dbEvt.title} className="w-full h-36 object-cover object-center rounded-xl mb-2" />
                  )}
                  <h4 className="font-bold text-white">{dbEvt.title}</h4>
                  <p className="text-xs text-white/70">{dbEvt.description}</p>
                  <span className="text-xs text-[#1090ff] font-bold block mt-2">{dbEvt.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </ScrollReveal>

    </div>
  );
}
