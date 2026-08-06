// About Page route: Renders chapter history, mission, vision, plan, and membership details.
// Matches exact video design: Robot graphics banner, video/photo card, 3 pillar cards (Mission/Vision/Plan), and Become a Member section.

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata = {
  title: 'ACM Delhi Technical Campus | About',
  description: 'Learn about Association for Computing Machinery and DTC ACM Student Chapter mission, vision, and plan.',
};

export default function AboutPage() {
  return (
    <div className="about-page space-y-16 py-6">

      {/* ===================================================================
         SECTION 1: TOP BANNER WITH ROBOT GRAPHICS
         ASSOCIATION FOR COMPUTING MACHINERY title flanked by cute 3D robots
         =================================================================== */}
      <ScrollReveal className="section text-center">
        <div className="p-8 md:p-12 rounded-3xl bg-black/60 border border-white/15 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Robot Illustration Left */}
            <div className="w-64 h-64 shrink-0">
              {/* IMAGE LOCATION: Replace left robot image URL below */}
              <img
                src="/images/robo_right.png"
                alt="3D Robot Mascot Left"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(47,225,255,0.4)]"
              />
              {/* END IMAGE LOCATION */}
            </div>

            {/* Central Headline & Paragraph */}
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider">
                ASSOCIATION FOR COMPUTING MACHINERY
              </h1>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                The Association for Computing Machinery (ACM) is an international learned society for computing. It was founded in 1947 and is the world's largest scientific and educational computing society. It is a not-for-profit professional membership group. Its membership is more than 100,000 as of 2011. Its headquarters are in New York City. The ACM is an umbrella organization for academic and scholarly interests in computer science.
              </p>
            </div>

            {/* Robot Illustration Right */}
            <div className="w-64 h-64 shrink-0">
              {/* IMAGE LOCATION: Replace right robot image URL below */}
              <img
                src="/images/robo_left.png"
                alt="3D Robot Mascot Right"
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(47,225,255,0.4)]"
              />
              {/* END IMAGE LOCATION */}
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 2: ABOUT US
         Description paragraph + Student Lead video/photo card with play icon
         =================================================================== */}
      <ScrollReveal className="section">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Text */}
          <div className="md:col-span-6 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase">
              ABOUT US
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              DTC ACM Student Chapter believes in providing a healthy environment where creativity and imagination can flourish. Through collaboration and engagement in a plethora of technical activities and projects, we envision to build a community of like-minded people who love to code, collaborate and have fun!
            </p>
          </div>

          {/* Right Video / Student Lead Card */}
          <div className="md:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group cursor-pointer">
              {/* IMAGE LOCATION: Replace video thumbnail photo below */}
             <iframe
  className="w-full h-80 rounded-2xl"
  src="https://www.youtube.com/embed/4-m8KYYdaWc?rel=0"
  title="About ACM"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 3: DTC ACM STUDENT CHAPTER (OUR MISSION, OUR VISION, OUR PLAN)
         3 Cards with 3D robot graphics matching video
         =================================================================== */}
      <ScrollReveal className="section space-y-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wider">
            DTC ACM STUDENT CHAPTER
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: OUR MISSION */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/15 space-y-4">
            <div className="h-40 flex items-center justify-center">
              {/* IMAGE LOCATION: Replace Mission robot graphic below */}
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                alt="Our Mission Graphic"
                className="h-36 object-contain"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <h3 className="text-xl font-bold text-white uppercase">OUR MISSION</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              To advance the field of computing and empower individuals within it, promoting innovation and excellence in computing education, research, and practice, while fostering a global community that shares knowledge and addresses critical societal challenges.
            </p>
          </div>

          {/* Card 2: OUR VISION */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/15 space-y-4">
            <div className="h-40 flex items-center justify-center">
              {/* IMAGE LOCATION: Replace Vision robot graphic below */}
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                alt="Our Vision Graphic"
                className="h-36 object-contain"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <h3 className="text-xl font-bold text-white uppercase">OUR VISION</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              To be the leading global community that empowers computing professionals, students, and researchers by driving technological innovation, bridging academia and industry, and fostering inclusivity. We aim to create a collaborative environment through responsible and transformative technology.
            </p>
          </div>

          {/* Card 3: OUR PLAN */}
          <div className="p-6 rounded-2xl bg-black/60 border border-white/15 space-y-4">
            <div className="h-40 flex items-center justify-center">
              {/* IMAGE LOCATION: Replace Plan robot graphic below */}
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                alt="Our Plan Graphic"
                className="h-36 object-contain"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <h3 className="text-xl font-bold text-white uppercase">OUR PLAN</h3>
            <p className="text-xs text-white/75 leading-relaxed">
              To achieve our vision, we organize educational and networking events, publish research papers, share knowledge, build strategic partnerships and support student development. We aim to foster a thriving ecosystem where computing professionals can excel and reach their full potential.
            </p>
          </div>

        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 4: BECOME A MEMBER OF ACM
         Group photo + membership perks list + Join ACM button
         =================================================================== */}
      <ScrollReveal className="section my-16">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-black/80 to-[#050c1b] border border-white/15 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xl">
          
          {/* Left Group Photo */}
          <div className="md:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-xl">
              {/* IMAGE LOCATION: Replace Member Group Photo below */}
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                alt="ACM Chapter Members Group"
                className="w-full h-72 object-cover"
              />
              {/* END IMAGE LOCATION */}
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase">
              BECOME A MEMBER OF ACM
            </h2>
            
            <p className="text-xs md:text-sm text-white/80 leading-relaxed">
              A vast network of nearly 100,000 highly dedicated student and professional peers. A full year subscription to ACM magazines and newsletters (Communications of the ACM, XRDS: Crossroads, MemberNet etc.). The option to subscribe to the full ACM Digital Library, which includes over 2 million pages of text. Become a member of computing community through one of hundreds of Professional and Student Chapters worldwide.
            </p>

            <div>
              <Link href="/contact" className="button button-primary text-sm">
                Join ACM
              </Link>
            </div>
          </div>

        </div>
      </ScrollReveal>

    </div>
  );
}
