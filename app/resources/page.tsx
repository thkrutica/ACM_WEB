// Resources Page route: Guides, cheat sheets, and monthly research papers uploaded by admins.
// Matches exact video design: "Curated resources to power your tech journey" header with 3D vertical cards & Supabase PDF paper downloads.

import ScrollReveal from '@/components/ScrollReveal';
import { createClient } from '@/lib/supabase/server';
import { Paper } from '@/lib/supabase/types';

export const metadata = {
  title: 'ACM Delhi Technical Campus | Resources',
  description: 'Curated resources, cheat sheets, guides, and research papers to power your tech journey at ACM DTC.',
};

// Force dynamic rendering for Supabase paper downloads query
export const dynamic = 'force-dynamic';

export default async function ResourcesPage() {
  let dbPapers: Paper[] = [];
  try {
    const supabase = await createClient();
    const { data } = await supabase.from('papers').select('*').order('uploaded_at', { ascending: false });
    if (data && data.length > 0) {
      dbPapers = data;
    }
  } catch (err) {
    console.error('Error querying research papers:', err);
  }

  return (
    <div className="resources-page space-y-16 py-6">

      {/* ===================================================================
         SECTION 1: HERO HEADER
         Curated resources to power your tech journey
         =================================================================== */}
      <ScrollReveal className="section text-left max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Curated resources to power your tech journey
        </h1>
        <p className="text-base md:text-lg text-white/70">
          Hand-picked cheat sheets, technical slides, research papers, and guides to help students learn and build.
        </p>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 2: 3D VERTICAL CHEAT SHEET & RESOURCE PILL CARDS
         Matching the rounded vertical 3D graphics cards from the video
         =================================================================== */}
      <ScrollReveal className="section">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Card 1: POWER BI RESOURCES */}
          <div className="p-6 rounded-3xl bg-black/70 border border-white/15 hover:border-[#1090ff] transition-all space-y-4 flex flex-col justify-between group cursor-pointer shadow-2xl">
            <div className="h-44 rounded-2xl overflow-hidden border border-white/10 relative flex items-center justify-center bg-black/40">
              {/* IMAGE LOCATION: Replace Power BI resource image below */}
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80"
                alt="Power BI Resources"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <div className="text-center flex flex-col items-center">
              <span className="text-xs font-black text-[#2fe1ff] uppercase tracking-widest block mb-2">GUIDE</span>
              <h3 className="text-lg font-black text-white uppercase">POWER BI RESOURCES</h3>
              <p className="text-sm font-medium text-white/70 mt-2">Data modeling, DAX queries, and dashboard blueprints.</p>
            </div>
          </div>

          {/* Card 2: SQL CHEAT SHEET */}
          <div className="p-6 rounded-3xl bg-black/70 border border-white/15 hover:border-[#1090ff] transition-all space-y-4 flex flex-col justify-between group cursor-pointer shadow-2xl">
            <div className="h-44 rounded-2xl overflow-hidden border border-white/10 relative flex items-center justify-center bg-black/40">
              {/* IMAGE LOCATION: Replace SQL cheat sheet image below */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
                alt="SQL Basics Cheat Sheet"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <div className="text-center flex flex-col items-center">
              <span className="text-xs font-black text-[#2fe1ff] uppercase tracking-widest block mb-2">CHEAT SHEET</span>
              <h3 className="text-lg font-black text-white uppercase">SQL CHEAT SHEET</h3>
              <p className="text-sm font-medium text-white/70 mt-2">Essential queries, JOINs, aggregations, and database commands.</p>
            </div>
          </div>

          {/* Card 3: SIX SIGMA GUIDANCE */}
          <div className="p-6 rounded-3xl bg-black/70 border border-white/15 hover:border-[#1090ff] transition-all space-y-4 flex flex-col justify-between group cursor-pointer shadow-2xl">
            <div className="h-44 rounded-2xl overflow-hidden border border-white/10 relative flex items-center justify-center bg-black/40">
              {/* IMAGE LOCATION: Replace Six Sigma guidance image below */}
              <img
                src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=400&q=80"
                alt="Six Sigma Guidance"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <div className="text-center flex flex-col items-center">
              <span className="text-xs font-black text-[#2fe1ff] uppercase tracking-widest block mb-2">NOTES</span>
              <h3 className="text-lg font-black text-white uppercase">SIX SIGMA GUIDANCE</h3>
              <p className="text-sm font-medium text-white/70 mt-2">Quality management, error reduction, and workflow optimization.</p>
            </div>
          </div>

          {/* Card 4: TOP 50 EXCEL QUESTIONS */}
          <div className="p-6 rounded-3xl bg-black/70 border border-white/15 hover:border-[#1090ff] transition-all space-y-4 flex flex-col justify-between group cursor-pointer shadow-2xl">
            <div className="h-44 rounded-2xl overflow-hidden border border-white/10 relative flex items-center justify-center bg-black/40">
              {/* IMAGE LOCATION: Replace Excel questions image below */}
              <img
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=400&q=80"
                alt="Top 50 Excel Questions"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              {/* END IMAGE LOCATION */}
            </div>
            <div className="text-center flex flex-col items-center">
              <span className="text-xs font-black text-[#2fe1ff] uppercase tracking-widest block mb-2">INTERVIEW PREP</span>
              <h3 className="text-lg font-black text-white uppercase">TOP 50 EXCEL QUESTIONS</h3>
              <p className="text-sm font-medium text-white/70 mt-2">VLOOKUP, Pivot Tables, and data analysis interview prep.</p>
            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* ===================================================================
         SECTION 3: MONTHLY RESEARCH PAPERS (SUPABASE STORAGE & DATABASE)
         Admin-uploaded PDF research papers section
         =================================================================== */}
      <ScrollReveal className="section space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Monthly Research Papers</h2>
          <span className="text-xs font-semibold text-[#1090ff] bg-[#1090ff]/10 px-3 py-1 rounded-full border border-[#1090ff]/20">
            Updated via Admin Panel
          </span>
        </div>

        {dbPapers.length === 0 ? (
          <div className="p-8 rounded-2xl bg-black/40 border border-white/10 text-center text-sm text-white/60">
            No custom research papers uploaded yet. Administrators can upload PDFs directly at <code className="text-[#2fe1ff]">/admin</code>.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dbPapers.map((paper) => (
              <div key={paper.id} className="p-5 rounded-2xl bg-black/60 border border-white/15 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-[#2fe1ff] block mb-1">{paper.month}</span>
                  <h4 className="text-base font-bold text-white mb-1">{paper.title}</h4>
                  <span className="text-xs text-white/50">PDF Document</span>
                </div>
                <a
                  href={paper.file_url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-bold rounded-lg bg-[#1090ff] hover:bg-[#0c65d3] text-white transition-colors shrink-0"
                >
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        )}
      </ScrollReveal>

    </div>
  );
}
