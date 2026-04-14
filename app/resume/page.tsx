import { 
  ArrowLeft, Cpu, Globe, Mail, MapPin, Database, Server, 
  ShieldCheck, Code2, GraduationCap, Sparkles, Download // <-- Download icon add kiya
} from 'lucide-react';

export default function ResumePage() {
  const technicalArsenal = [
    { 
      category: "Frontend Excellence", 
      tools: ["Next.js 14", "React", "Tailwind CSS", "TypeScript", "Framer Motion"] 
    },
    { 
      category: "Backend & Systems", 
      tools: ["Node.js", "Express.js", "Python", "REST APIs", "Authentication"] 
    },
    { 
      category: "Cloud & Database", 
      tools: ["PostgreSQL", "MongoDB", "Prisma ORM", "Vercel", "Firebase"] 
    },
    { 
      category: "AI & Innovation", 
      tools: ["OpenAI API", "Vector Databases", "Prompt Engineering", "LLM Fine-tuning"] 
    },
  ];

  return (
    <main className="min-h-screen bg-[#020202] text-white font-sans selection:bg-blue-600/40 pb-20 overflow-x-hidden">
      
      {/* 1. TOP FLOATING NAV */}
      <nav className="sticky top-0 z-50 bg-[#020202]/90 backdrop-blur-2xl border-b border-white/5 px-6 py-5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-all text-[10px] font-black uppercase tracking-[0.3em] group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back
          </a>

          {/* ✅ DOWNLOAD BUTTON ADDED HERE */}
          <div className="flex items-center gap-6">
            <a 
              href="/resume.pdf" 
              download="Habib_Resume.pdf"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <Download size={14} /> Download Resume
            </a>
            
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5">
               <div className="h-1.5 w-1.5 bg-blue-500 rounded-full animate-pulse"></div>
               <div className="text-blue-500 text-[9px] font-black uppercase tracking-[0.3em]">Full Stack System</div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pt-16 md:pt-24">
        
        {/* 2. HERO HEADER */}
        <header className="mb-24 relative">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"></div>
          
          <div className="flex items-center gap-2 mb-4">
             <Sparkles size={16} className="text-blue-500" />
             <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.5em]">Senior Portfolio</span>
          </div>

          <h1 className="text-[15vw] md:text-[10vw] font-bold tracking-tighter mb-4 leading-[0.7] uppercase">
            HABIB<span className="text-blue-600">.</span>
          </h1>
          
          {/* Mobile Only Download Button */}
          <div className="md:hidden mb-8">
            <a 
              href="/resume.pdf" 
              download="Habib_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em]"
            >
              <Download size={14} /> Download PDF Resume
            </a>
          </div>

          <h2 className="text-2xl md:text-4xl font-light tracking-tight text-gray-400 mb-10">
            Full-Stack <span className="text-white font-medium italic underline decoration-blue-600 underline-offset-8">AI Developer</span>
          </h2>

          <div className="flex flex-wrap gap-8 text-gray-500 text-[11px] font-bold uppercase tracking-widest border-t border-white/5 pt-10">
            <span className="flex items-center gap-3 text-white/90 hover:text-blue-500 transition-colors cursor-pointer group">
                <Mail size={16} className="text-blue-600 group-hover:scale-110 transition-transform"/> itsmasoom9190@gmail.com
            </span>
            <span className="flex items-center gap-3"><MapPin size={16} className="text-blue-600"/> Lahore, PK / Remote</span>
            <span className="flex items-center gap-3"><Globe size={16} className="text-blue-600"/> 2026 Edition</span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* LEFT COLUMN: Experience & Education */}
          <div className="lg:col-span-7 space-y-24">
            
            <section>
              <div className="flex items-center gap-4 mb-14">
                <div className="h-[1px] w-12 bg-blue-600"></div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Career History</h2>
              </div>

              <div className="relative border-l border-white/5 pl-8 md:pl-12 ml-1">
                <div className="mb-20 relative group">
                  <div className="absolute -left-[37px] md:-left-[53px] top-0 w-3 h-3 bg-blue-600 rounded-full border-4 border-[#020202] group-hover:scale-150 transition-transform duration-500 shadow-[0_0_20px_rgba(37,99,235,0.8)]"></div>
                  <h3 className="text-3xl font-bold tracking-tight mb-2 uppercase italic text-white group-hover:text-blue-500 transition-colors tracking-tighter">Freelance Full-Stack Developer</h3>
                  <p className="text-blue-600 text-[10px] font-black tracking-widest uppercase mb-8">Jan 2024 — Present</p>
                  
                  <ul className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed font-medium">
                    <li className="flex gap-4 group/item">
                      <Server size={18} className="text-blue-600 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span>Architecting high-performance **Backend systems** with Node.js and scalable API logic.</span>
                    </li>
                    <li className="flex gap-4 group/item">
                      <Database size={18} className="text-blue-600 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span>Optimizing data storage using **Relational (PostgreSQL)** and **NoSQL (MongoDB)** structures.</span>
                    </li>
                    <li className="flex gap-4 group/item">
                      <ShieldCheck size={18} className="text-blue-600 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                      <span>Implementing industry-standard **Auth protocols** and end-to-end data encryption.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-4 mb-14">
                <div className="h-[1px] w-12 bg-blue-600"></div>
                <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-500">Academic Roadmap</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 group">
                  <GraduationCap className="text-blue-600 mb-4" size={24} />
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-blue-500 transition-colors">FA (IT)</h4>
                  <p className="text-gray-500 text-[10px] font-black mt-2 tracking-[0.2em] uppercase mb-4 tracking-widest">Expected 2025</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">Specializing in Software Architecture and Digital Logic.</p>
                </div>

                <div className="p-10 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 group">
                  <h4 className="text-xl font-bold uppercase tracking-tight text-white group-hover:text-blue-500 transition-colors">Matric (Science)</h4>
                  <p className="text-gray-500 text-[10px] font-black mt-2 tracking-[0.2em] uppercase mb-4 tracking-widest">Class of 2023</p>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">Strong foundation in Mathematics and Computer Studies.</p>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN: The Tech Arsenal */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="p-8 md:p-12 bg-[#080808] border border-white/10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-blue-600/5 blur-[100px] rounded-full group-hover:bg-blue-600/10 transition-all duration-700"></div>
                
                <h2 className="text-3xl font-bold tracking-tighter uppercase mb-12 flex items-center gap-4">
                  Tech <br/> Arsenal <Code2 className="text-blue-600" />
                </h2>
                
                <div className="space-y-12">
                  {technicalArsenal.map((item) => (
                    <div key={item.category} className="space-y-5">
                      <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-blue-500/70 border-b border-white/5 pb-2 inline-block">
                        {item.category}
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {item.tools.map((tool) => (
                          <span key={tool} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-bold border border-white/5 hover:border-blue-600/50 hover:bg-blue-600/5 transition-all cursor-default uppercase tracking-widest text-gray-300 hover:text-white">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* ✅ SECONDARY DOWNLOAD BUTTON IN SIDEBAR */}
                <a 
                  href="/resume.pdf" 
                  download="Habib_Resume.pdf"
                  className="mt-12 flex items-center justify-center gap-3 w-full py-4 border border-blue-600/30 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Download size={14} /> Get PDF Version
                </a>

                <div className="mt-8 p-5 bg-blue-600/5 rounded-2xl border border-blue-600/10 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Status</span>
                  <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest animate-pulse">Ready for Hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. FOOTER */}
        <footer className="mt-48 text-center border-t border-white/5 pt-10">
          <p className="text-[10px] text-gray-800 font-black uppercase tracking-[1.5em] opacity-40 hover:opacity-100 transition-opacity">
            ELITE FULL STACK • HABIB • 2026
          </p>
        </footer>
      </div>
    </main>
  );
}