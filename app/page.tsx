// Home Page route: Main landing page for ACM Delhi Technical Campus chapter.
// Alignment updated to match exact video layout: Centered max-width containers, 12-column grid alignment, hero copy & visual balance, and clean section spacing.

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import EventCarousel from '@/components/EventCarousel';
import NewsletterForm from '@/components/NewsletterForm';
import { createClient } from '@/lib/supabase/server';
import { EventItem } from '@/lib/supabase/types';
import { FaInstagram } from "react-icons/fa";

// Force dynamic rendering to query live events from Supabase on request
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Query Supabase for dynamic chapter events (with fallback)
  let events: EventItem[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('events').select('*').order('created_at', { ascending: false }).limit(6);
    if (data && data.length > 0) {
      events = data;
    }
  } catch (err) {
    console.error('Error querying homepage events:', err);
  }

  return (
    <div className="home-page max-w-7xl mx-auto space-y-24 py-8 px-4 md:px-8">

      {/* ===================================================================
         SECTION 1: HERO SECTION
         Title kicker, main headline, description, CTAs, and VR Headset Gamer Visual
         Aligned in a 12-column grid: 7 cols copy, 5 cols visual
         =================================================================== */}
      <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4 pb-8">

        {/* Left Column: Hero Copy & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <p className="section-kicker">INSPIRING THE FUTURE OF COMPUTING AT</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight">
            ACM DELHI TECHNICAL CAMPUS
          </h1>

          <p className="text-base text-white/80 leading-relaxed max-w-2xl">
            DTC ACM Student Chapter believes in providing a <span className="text-[#2fe1ff] font-semibold underline decoration-[#1090ff]">healthy environment</span> where creativity and imagination can flourish. Through collaboration and engagement in a plethora of technical activities and projects, we envision to build a community of like-minded people who love to code, collaborate and have fun!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link className="button button-primary" href="/contact">
              Join Us
            </Link>
            <Link className="button button-secondary" href="/about">
              Know More
            </Link>
          </div>

          {/* Social Links */}
          <div className="pt-4 space-y-2">
            <div className="flex items-center gap-3 text-xs font-semibold text-[#2fe1ff] uppercase tracking-wider">
              <span>Connect with us</span>
              <span className="w-24 h-[1px] bg-white/20"></span>
            </div>
            <div className="flex gap-2" aria-label="Social links">
              <a href="https://www.linkedin.com/company/acm-student-chapter-delhi-technical-campus-ggsipu/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-xs font-bold text-[#1090ff] hover:bg-[#1090ff] hover:text-white transition-all" aria-label="LinkedIn">in</a>
              <a href="https://x.com/ACM_DTC?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAThRxtwZG9mAmV4dG4DYWVtAjExAHNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp3XvfH9GjEoGfJuQeHuu0KPjzdLZeBDiGVHZEGk8IZ5VYi0lL0q8Ftjky4cB_aem_vjLVoo4GnMsKOR4VayhcDg" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-xs font-bold text-[#1090ff] hover:bg-[#1090ff] hover:text-white transition-all" aria-label="X">X</a>
              <a
                href="https://www.instagram.com/acm_dtc?igsh=MXBremE2eWtxbGZ2dQ=="
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg border border-white/20 bg-white/5 flex items-center justify-center text-[#1090ff] hover:bg-[#1090ff] hover:text-white transition-all"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: VR Visual Illustration */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8d42ff]/30 to-[#ff4fd8]/30 blur-3xl rounded-full"></div>

            {/* IMAGE LOCATION: Replace VR headset illustration URL below */}
            <img
              src="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=800&q=80"
              alt="VR Headset Cyber Gamer Illustration"
              className="w-full h-full object-cover relative z-10 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(141,66,255,0.4)] hover:scale-105 transition-transform duration-500"
            />
            {/* END IMAGE LOCATION */}
          </div>
        </div>

      </ScrollReveal>

      {/* ===================================================================
         SECTION 2: WHAT IS ACM AND HOW WILL ACM DTC HELP YOU
         Aligned in a 12-column grid: 7 cols copy & list, 5 cols group image
         =================================================================== */}
      <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-6">

        {/* Left Copy & Bullet List */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            What is <span className="text-[#1090ff]">ACM</span> and how will <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1090ff] to-[#2fe1ff]">ACM DTC</span> help you
          </h2>

          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            ACM (Association for Computing Machinery) is a major organization in the field of computing and information technology. It is a global community that offers a wide range of resources and activities for professionals, educators, and students.
          </p>

          <ul className="space-y-2.5 text-sm text-white/90">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1090ff] shrink-0"></span>
              Work together on innovative projects
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#2fe1ff] shrink-0"></span>
              Connect with industry professionals, alumni and peers
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#8d42ff] shrink-0"></span>
              Participate in hackathons and competitions
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#ff4fd8] shrink-0"></span>
              Get access to exclusive resources and tools
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#1090ff] shrink-0"></span>
              Enhance technical skills through workshops and projects
            </li>
          </ul>

          <div className="pt-2">
            <Link href="/about" className="button button-secondary text-sm">
              Know More
            </Link>
          </div>
        </div>

        {/* Right Student Group Photo */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 group">
            {/* IMAGE LOCATION: Replace student group photo URL below */}
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
              alt="ACM DTC Student Members Group Photo"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* END IMAGE LOCATION */}
          </div>
        </div>

      </ScrollReveal>

      {/* ===================================================================
         SECTION 3: MEET OUR AMAZING MENTOR AND TEAM
         Centered headline + 5-column photo collage grid
         =================================================================== */}
      <ScrollReveal className="space-y-8 py-6 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            MEET OUR <span className="text-[#1090ff]">AMAZING</span> MENTOR AND TEAM
          </h2>
          <p className="text-base text-white/60 font-serif italic">
            Still faces, Infinite stories
          </p>
        </div>

        {/* 5-Column Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

          <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg h-52 group">
            {/* IMAGE LOCATION: Replace team member photo 1 */}
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80"
              alt="ACM Team Member 1"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            {/* END IMAGE LOCATION */}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg h-52 group">
            {/* IMAGE LOCATION: Replace team member photo 2 */}
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
              alt="ACM Team Member 2"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            {/* END IMAGE LOCATION */}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg h-52 group">
            {/* IMAGE LOCATION: Replace team member photo 3 */}
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
              alt="ACM Team Member 3"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            {/* END IMAGE LOCATION */}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg h-52 group">
            {/* IMAGE LOCATION: Replace team member photo 4 */}
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80"
              alt="ACM Team Member 4"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            {/* END IMAGE LOCATION */}
          </div>

          <div className="rounded-xl overflow-hidden border border-white/15 shadow-lg h-52 group">
            {/* IMAGE LOCATION: Replace team member photo 5 */}
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
              alt="ACM Team Member 5"
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
            />
            {/* END IMAGE LOCATION */}
          </div>

        </div>

        <div>
          <Link href="/team" className="text-[#1090ff] font-bold text-sm hover:underline">
            View All Team Members &rarr;
          </Link>
        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 4: CHECK OUT OUR RECENT EVENTS
         Centered headline + 3D Curved Event Poster Carousel
         =================================================================== */}
      <ScrollReveal className="space-y-6 py-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
            CHECK OUT OUR RECENT EVENTS
          </h2>
        </div>

        {/* 3D Poster Carousel */}
        <EventCarousel />
      </ScrollReveal>

      {/* ===================================================================
         SECTION 5: AWARDS AND ACHIEVEMENTS
         Centered grid backdrop box
         =================================================================== */}
      <ScrollReveal className="py-6">
        <div className="max-w-5xl mx-auto p-8 md:p-12 rounded-3xl bg-black/60 border border-white/15 relative overflow-hidden text-center shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1090ff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <h2 className="text-2xl md:text-4xl font-extrabold text-white uppercase tracking-wider mb-4 relative z-10">
            AWARDS AND ACHIEVEMENTS
          </h2>

          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto relative z-10 leading-relaxed">
            Recognized by ACM India for outstanding chapter activities, student engagement, and technical excellence across national hackathons and symposiums.
          </p>
        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 6: MEET OUR PRESIDENT
         Centered card container: 7 cols text, 5 cols photo
         =================================================================== */}
      <ScrollReveal className="py-6">
        <div className="max-w-4xl mx-auto p-8 md:p-10 rounded-3xl bg-gradient-to-r from-black/80 to-[#070b14] border border-white/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl">

          {/* Left Content */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase">
              MEET OUR <span className="text-[#1090ff]">PRESIDENT</span>
            </h2>

            <div className="border-l-2 border-[#1090ff] pl-4 space-y-1">
              <h3 className="text-xl font-bold text-white">Ishan Gupta</h3>
              <p className="text-xs font-semibold text-[#2fe1ff] uppercase tracking-wider">Chapter President</p>
            </div>

            <p className="text-sm text-white/80 italic leading-relaxed">
              "Empowering students to step outside their comfort zones, code with passion, and build technology that creates real impact."
            </p>

            <div className="flex gap-2 text-xs pt-2">
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium">in LinkedIn</span>
              <span className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-medium">✉ Contact</span>
            </div>
          </div>

          {/* Right President Photo */}
          <div className="md:col-span-5 flex justify-center">
            <div className="w-48 h-60 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              {/* IMAGE LOCATION: Replace President photo URL below */}
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
                alt="Chapter President"
                className="w-full h-full object-cover object-center"
              />
              {/* END IMAGE LOCATION */}
            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 7: HERE ARE SOME HELPFUL RESOURCES
         Centered header + 4-column card grid
         =================================================================== */}
      <ScrollReveal className="space-y-8 py-6">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase">
            HERE ARE SOME HELPFUL RESOURCES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="p-4 rounded-2xl bg-black/60 border border-white/15 space-y-3 hover:border-[#1090ff] transition-colors">
            <div className="h-40 rounded-xl overflow-hidden border border-white/10">
              {/* IMAGE LOCATION: Replace cheat sheet resource image 1 */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                alt="SQL Basics Cheat Sheet"
                className="w-full h-full object-cover"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <h4 className="text-base font-bold text-white">SQL Basics Cheat Sheet</h4>
            <p className="text-xs text-white/60">Essential query cheat sheet for SQL & databases.</p>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/15 space-y-3 hover:border-[#1090ff] transition-colors">
            <div className="h-40 rounded-xl overflow-hidden border border-white/10">
              {/* IMAGE LOCATION: Replace cheat sheet resource image 2 */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                alt="Power BI Resources"
                className="w-full h-full object-cover"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <h4 className="text-base font-bold text-white">Power BI Resources</h4>
            <p className="text-xs text-white/60">Data modeling and dashboard guides.</p>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/15 space-y-3 hover:border-[#1090ff] transition-colors">
            <div className="h-40 rounded-xl overflow-hidden border border-white/10">
              {/* IMAGE LOCATION: Replace cheat sheet resource image 3 */}
              <img
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=400&q=80"
                alt="Six Sigma Guidance"
                className="w-full h-full object-cover"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <h4 className="text-base font-bold text-white">Six Sigma Guidance</h4>
            <p className="text-xs text-white/60">Process improvement and quality control notes.</p>
          </div>

          <div className="p-4 rounded-2xl bg-black/60 border border-white/15 space-y-3 hover:border-[#1090ff] transition-colors">
            <div className="h-40 rounded-xl overflow-hidden border border-white/10">
              {/* IMAGE LOCATION: Replace cheat sheet resource image 4 */}
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80"
                alt="Top 50 Excel Questions"
                className="w-full h-full object-cover"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <h4 className="text-base font-bold text-white">Top 50 Excel Questions</h4>
            <p className="text-xs text-white/60">Interview questions for data analyst roles.</p>
          </div>

        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 8: SUBSCRIBE TO OUR NEWSLETTER
         Centered container with newsletter form
         =================================================================== */}
      <ScrollReveal className="py-6">
        <div className="max-w-3xl mx-auto p-8 md:p-12 rounded-3xl bg-black/80 border border-white/15 text-center space-y-4 shadow-2xl">
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase">
            SUBSCRIBE TO OUR NEWSLETTER
          </h2>
          <p className="text-xs md:text-sm text-white/70 max-w-xl mx-auto">
            Get monthly event invites, workshop slides, and research paper notifications directly in your inbox.
          </p>

          <div className="max-w-md mx-auto pt-2">
            <NewsletterForm />
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
