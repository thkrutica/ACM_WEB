'use client';

export default function JoinUsCard() {
  return (
    <div className="w-full max-w-7xl mx-auto my-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-4 md:px-8 relative min-h-[85vh]">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] lg:w-[900px] h-[80vw] lg:h-[900px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-blue-800/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse"></div>

      <div className="flex justify-center lg:justify-end items-end w-full h-full relative z-10 group">
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-fuchsia-500/20 blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
        <img
          src="/Futuristic_Img.png"
          alt="ACM Sci-Fi Character"
          className="lg:absolute lg:-bottom-[60px] xl:-bottom-[80px] left-0 w-full max-w-none h-auto object-contain object-bottom pointer-events-none origin-bottom scale-100 lg:scale-125 transition-transform duration-[1500ms] ease-out group-hover:scale-[1.3] group-hover:-translate-y-6 drop-shadow-2xl"
        />
      </div>

      <div className="flex justify-center w-full z-20 pb-8 lg:pb-12 pt-8">
        <div className="w-full max-w-[460px] p-8 md:p-10 rounded-[36px] bg-black/40 backdrop-blur-xl border border-white/20 shadow-2xl transition-all duration-700 hover:-translate-y-2">

          <div className="relative z-10 flex flex-col items-center space-y-6">
            <img 
              src="/ACM.png" 
              alt="ACM" 
              className="h-24 md:h-28 w-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500" 
            />
            <h2 className="text-lg md:text-xl font-extrabold tracking-widest text-center uppercase text-white drop-shadow-md font-sans">
              ACM DELHI TECHNICAL CAMPUS
            </h2>
          </div>

          <div className="relative z-10 space-y-3.5 mt-10">
            
            <a href="https://www.acm.org/membership/join" target="_blank" rel="noreferrer" className="group relative w-full py-4 px-4 rounded-full bg-black/20 border border-white/30 hover:border-white/60 hover:bg-white/[0.05] shadow-lg transition-all duration-500 flex items-center overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
              <div className="absolute left-2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 z-10">
                <img src="/Vector-5.png" alt="ACM" className="w-5 h-5 object-contain invert brightness-0 transition-all duration-500" />
              </div>
              <span className="w-full text-center text-[15px] font-bold text-white tracking-wide transition-colors duration-500 relative z-10">Become an ACM Member</span>
            </a>

            <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="group relative w-full py-4 px-4 rounded-full bg-black/20 border border-white/30 hover:border-white/60 hover:bg-white/[0.05] shadow-lg transition-all duration-500 flex items-center overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
              <div className="absolute left-2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 z-10">
                <img src="/Vector-2.png" alt="Whatsapp" className="w-5 h-5 object-contain invert brightness-0 transition-all duration-500" />
              </div>
              <span className="w-full text-center text-[15px] font-bold text-white tracking-wide transition-colors duration-500 relative z-10">Whatsapp</span>
            </a>

            <a href="https://in.linkedin.com/company/acm-student-chapter-delhi-technical-campus-ggsipu?trk=public_profile_topcard-current-company" target="_blank" rel="noreferrer" className="group relative w-full py-4 px-4 rounded-full bg-black/20 border border-white/30 hover:border-white/60 hover:bg-white/[0.05] shadow-lg transition-all duration-500 flex items-center overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
              <div className="absolute left-2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 z-10">
                <img src="/Vector-1.png" alt="LinkedIn" className="w-[18px] h-[18px] object-contain invert brightness-0 transition-all duration-500" />
              </div>
              <span className="w-full text-center text-[15px] font-bold text-white tracking-wide transition-colors duration-500 relative z-10">LinkedIn</span>
            </a>

            <a href="https://x.com" target="_blank" rel="noreferrer" className="group relative w-full py-4 px-4 rounded-full bg-black/20 border border-white/30 hover:border-white/60 hover:bg-white/[0.05] shadow-lg transition-all duration-500 flex items-center overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
              <div className="absolute left-2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 z-10">
                <img src="/Vector-4.png" alt="X" className="w-[18px] h-[18px] object-contain invert brightness-0 transition-all duration-500" />
              </div>
              <span className="w-full text-center text-[15px] font-bold text-white tracking-wide transition-colors duration-500 relative z-10">X</span>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group relative w-full py-4 px-4 rounded-full bg-black/20 border border-white/30 hover:border-white/60 hover:bg-white/[0.05] shadow-lg transition-all duration-500 flex items-center overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
              <div className="absolute left-2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 z-10">
                <img src="/Vector-3.png" alt="Instagram" className="w-5 h-5 object-contain invert brightness-0 transition-all duration-500" />
              </div>
              <span className="w-full text-center text-[15px] font-bold text-white tracking-wide transition-colors duration-500 relative z-10">Instagram</span>
            </a>

            <a href="https://linktr.ee" target="_blank" rel="noreferrer" className="group relative w-full py-4 px-4 rounded-full bg-black/20 border border-white/30 hover:border-white/60 hover:bg-white/[0.05] shadow-lg transition-all duration-500 flex items-center overflow-hidden hover:-translate-y-1">
              <div className="absolute inset-y-0 -left-[150%] w-[150%] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-[200%] transition-transform duration-[1200ms] ease-in-out pointer-events-none"></div>
              <div className="absolute left-2 w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-500 z-10">
                <img src="/Vector.png" alt="Linktree" className="w-4 h-4 object-contain invert brightness-0 transition-all duration-500" />
              </div>
              <span className="w-full text-center text-[15px] font-bold text-white tracking-wide transition-colors duration-500 relative z-10">Linktree</span>
            </a>

          </div>
        </div>
      </div>

    </div>
  );
}