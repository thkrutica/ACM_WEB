// Contact Page route: Renders the official linktree-style Join Us connection card.
// Matches exact video design: Glowing planet visual on left, connection buttons on right (ACM Membership, WhatsApp, LinkedIn, X, Instagram, Linktree).

import ScrollReveal from '@/components/ScrollReveal';
import JoinUsCard from '@/components/JoinUsCard';

export const metadata = {
  title: 'ACM Delhi Technical Campus | Contact & Join Us',
  description: 'Connect with ACM Delhi Technical Campus chapter through official channels, WhatsApp, LinkedIn, and Instagram.',
};

export default function ContactPage() {
  return (
    <div className="contact-page space-y-12 py-6">

      {/* ===================================================================
         SECTION 1: HERO HEADER
         =================================================================== */}
      <ScrollReveal className="section text-center max-w-4xl mx-auto space-y-3">
        <p className="section-kicker">CONNECT & JOIN US</p>
        <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight">
          Join ACM Delhi Technical Campus
        </h1>
        <p className="text-sm md:text-base text-white/70">
          Reach out for memberships, project collaborations, hackathon sponsorships, or event inquiries.
        </p>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 2: LINKTREE-STYLE JOIN US CARD
         Glowing planet graphic + connection buttons matching video
         =================================================================== */}
      <ScrollReveal className="section">
        <JoinUsCard />
      </ScrollReveal>

    </div>
  );
}
