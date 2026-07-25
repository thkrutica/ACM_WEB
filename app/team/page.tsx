// Team Page route: Showcases chapter leadership and student mentors.
// Matches exact video design: Includes dark tech mesh backdrop and TeamSlider component with diagonal slash portrait cards.

import ScrollReveal from '@/components/ScrollReveal';
import TeamSlider from '@/components/TeamSlider';

export const metadata = {
  title: 'ACM Delhi Technical Campus | Team',
  description: 'Meet the student chairs, technical leads, and mentors driving the ACM DTC chapter forward.',
};

export default function TeamPage() {
  return (
    <div className="team-page space-y-12 py-6">

      {/* ===================================================================
         SECTION 1: HERO HEADER
         =================================================================== */}
      <ScrollReveal className="section text-center max-w-4xl mx-auto space-y-3">
        <p className="section-kicker">OUR TEAM & LEADERSHIP</p>
        <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight">
          Meet the minds shaping ACM DTC
        </h1>
        <p className="text-sm md:text-base text-white/70">
          Dedicated student leaders, coordinators, and mentors building a vibrant computing culture at Delhi Technical Campus.
        </p>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 2: INTERACTIVE LEADERSHIP SLIDER
         Features diagonal cut photo accent, quotes, and navigation arrows matching video
         =================================================================== */}
      <ScrollReveal className="section">
        <TeamSlider />
      </ScrollReveal>

    </div>
  );
}
