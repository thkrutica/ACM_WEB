// Team Page route: Showcases chapter leadership and student mentors.
// Matches exact video design: Includes dark tech mesh backdrop and TeamSlider component with diagonal slash portrait cards.

import ScrollReveal from '@/components/ScrollReveal';
import TeamSlider from '@/components/TeamSlider';

export const metadata = {
  title: 'ACM Delhi Technical Campus | Team',
  description: 'Meet the student chairs, technical leads, and mentors driving the ACM DTC chapter forward.',
};

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  linkedin?: string;
  email?: string;
}

const EXTENDED_TEAM: TeamMember[] = [
  {
    id: 't1',
    name: 'Yuvika Juneja',
    role: 'MEMBERSHIP CHAIR',
    imageUrl: '/YUVIKA JUNEJA.png',
    linkedin: 'https://www.linkedin.com/in/yuvika-juneja-3aa995334?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:yuvikajuneja24098@gmail.com'
  },
  {
    id: 't2',
    name: 'Pratham Rawat',
    role: 'ASSOCIATE SECRETARY',
    imageUrl: '/Pratham Rawat.png',
    linkedin: 'https://www.linkedin.com/in/pratham-rawat-650bb5364?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:pratham_cse25@delhitechnicalcampus.ac.in'
  },
  {
    id: 't3',
    name: 'Sanghmitra Sengar',
    role: 'PR & OUTREACH',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    linkedin: '',
    email: 'mailto:'
  },
  {
    id: 't4',
    name: 'Harpreet Singh',
    role: 'PR & OUTREACH',
    imageUrl: '/Harpreet Singh.png',
    linkedin: 'https://www.linkedin.com/in/harpreet-singh-7823b6251?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:harpreetsachdeva226@gmail.com'
  },
  {
    id: 't5',
    name: 'Anushka Srivastava',
    role: 'SOCIAL HEAD',
    imageUrl: '/Anushka Srivastava.png',
    linkedin: 'https://www.linkedin.com/in/anushka-srivastava-2311373b1?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:anushka4_cse24@delhitechnicalcampus.ac.in'
  },
  {
    id: 't6',
    name: 'Prachi Singh Rana',
    role: 'SOCIAL HEAD',
    imageUrl: '/Prachi Singh Rana.png',
    linkedin: 'https://www.linkedin.com/in/prachi-singh-rana-67382a394?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:prachi2_cse25@delhitechnicalcampus.ac.in'
  },
  {
    id: 't7',
    name: 'Shivangi Yadav',
    role: 'DESIGN HEAD',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://www.linkedin.com/in/shivangiyadav01',
    email: 'mailto:shivangi01824@gmail.com'
  },
  {
    id: 't8',
    name: 'Prachi Kumari',
    role: 'DESIGN HEAD',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    linkedin: 'https://www.linkedin.com/in/prachi-kumari-0312b1342?utm_source=share_via&utm_content=profile&utm_medium=member_androidprachi_cse24@delhitechnicalcampus.ac.in',
    email: 'mailto:prachicse_24@delhitechnicalcampus.ac.in'
  },
  {
    id: 't9',
    name: 'Sameer Shamsi',
    role: 'TECH TEAM',
    imageUrl: '/SAMEER SHAMSHI.png',
    linkedin: 'https://www.linkedin.com/in/md-sameer-shamsi-15830b247?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:mdsameershamsi3@gmail.com'
  },
  {
    id: 't10',
    name: 'Naman Sindhi',
    role: 'TECH TEAM',
    imageUrl: '/Naman Sindhi.png',
    linkedin: 'https://www.linkedin.com/in/naman-undefined-062406367?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:namansindhi8@gmail.com'
  },
  {
    id: 't11',
    name: 'Nayan Jyoti T.',
    role: 'TECH TEAM',
    imageUrl: '/NAYAN JYOTI T..png',
    linkedin: 'https://www.linkedin.com/in/nayan-talukdar-5969aa378?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    email: 'mailto:nayanjyoti.2601@gmail.com'
  }
];

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
      <ScrollReveal className="max-w-5xl mx-auto w-full px-4">
        <TeamSlider />
      </ScrollReveal>

      {/* ===================================================================
         SECTION 3: EXTENDED TEAM GRID
         Glassmorphism hover cards for coordinators and mentors
         =================================================================== */}
      <ScrollReveal className="max-w-6xl mx-auto w-full px-4 pb-12">
        <div className="mt-20">
          <div className="text-center mb-12 space-y-2">
            <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-wider">
              COORDINATORS & MENTORS
            </h3>
            <p className="text-sm text-white/60">
              The brilliant minds keeping the chapter running smoothly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {EXTENDED_TEAM.map((member) => (
              <div 
                key={member.id} 
                className="group relative rounded-3xl bg-[#0a0e1a] border border-white/10 overflow-hidden hover:border-[#2fe1ff]/50 hover:shadow-[0_0_30px_rgba(47,225,255,0.15)] transition-all duration-300 flex flex-col cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative h-64 w-full overflow-hidden bg-black">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  {/* Overlay Gradient for Text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Info Section */}
                <div className="p-6 pt-0 relative z-10 -mt-8">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#2fe1ff] transition-colors">{member.name}</h4>
                  <span className="text-xs font-bold text-[#1090ff] tracking-widest uppercase block">{member.role}</span>
                  
                  {/* Hover Drawer for Social Icons */}
                  <div className="mt-4 flex gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1090ff] hover:text-white hover:border-[#1090ff] transition-colors">
                        in
                      </a>
                    )}
                    {member.email && (
                      <a href={member.email} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-[#1090ff] hover:text-white hover:border-[#1090ff] transition-colors">
                        ✉
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

    </div>
  );
}
