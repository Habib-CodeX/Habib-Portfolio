import { Brain, Video, BarChart3, ArrowUpRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans overflow-x-hidden">
      
      {/* 1. NAVBAR - Fixed Responsive padding */}
      <nav className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-lg md:text-xl font-bold tracking-tighter uppercase shrink-0">
          Habib<span className="text-blue-600">.Dev</span>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-10 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
          <a href="#projects" className="hover:text-blue-500 transition">Portfolio</a>
          
          {/* ✅ RESUME LINK ADDED HERE */}
          <a href="/resume" className="hover:text-blue-500 transition">Resume</a>
          
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#contact" className="hover:text-blue-500 transition border-l border-gray-800 pl-6 lg:pl-10">Contact</a>
        </div>
        
        {/* Mobile simple contact link for accessibility */}
        <div className="md:hidden flex gap-4 items-center">
            <a href="/resume" className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Resume</a>
            <a href="#contact" className="text-[10px] uppercase tracking-widest text-blue-500 font-bold">Connect</a>
        </div>
      </nav>

      {/* 2. HERO SECTION - Stacked on Mobile, Side-by-Side on Desktop */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-32 pb-24 md:pb-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 text-center md:text-left overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-blue-500/20 rounded-full text-[10px] font-bold text-blue-400 mb-6 md:mb-8 bg-blue-500/5 tracking-widest uppercase whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Ready for Remote Global Projects
          </div>
          
          {/* ✅ ULTRA-RESPONSIVE HEADING */}
          <h1 className="text-[clamp(2.5rem,8vw,5rem)] font-bold mb-8 md:mb-10 leading-[1.1] tracking-tighter text-white break-words">
            FULL-STACK <br className="hidden sm:block" />
            <span className="text-gray-800 italic underline decoration-blue-600/30 text-glow">AI DEVELOPER.</span>
          </h1>

          <div className="flex flex-col gap-8 md:gap-10 mt-6 md:mt-16 text-balance">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              I specialize in architecting AI-driven solutions and high-performance web applications. My focus is on delivering scalable products that meet global technical standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center md:justify-start">
              <button className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 whitespace-nowrap">
                Explore Projects
              </button>
              <a href="#about" className="text-gray-400 font-medium hover:text-white transition whitespace-nowrap">
                About Me →
              </a>
            </div>
          </div>
        </div>

        {/* --- PROFILE IMAGE BOX - Responsive Sizing --- */}
        <div className="relative group justify-self-center md:justify-self-end order-1 md:order-2">
          <div className="w-48 h-64 sm:w-64 sm:h-80 md:w-72 md:h-[400px] lg:w-80 lg:h-[450px] bg-gray-900 rounded-[30px] md:rounded-[40px] border border-white/10 overflow-hidden relative z-10">
            <img 
              src="mypic.jpg" 
              alt="Habib" 
              className="w-full h-full object-cover transition-all duration-700"
            />
          </div>
          <div className="absolute -inset-4 bg-blue-600/20 blur-3xl -z-0 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
        </div>
      </section>

      {/* --- ABOUT ME SECTION --- */}
      <section id="about" className="bg-[#080808] py-24 md:py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-blue-500 shrink-0">About Me</h2>
          <div className="md:col-span-2 text-gray-400 text-lg md:text-xl leading-relaxed space-y-6">
            <p>
              I am a results-driven Web Developer based in Pakistan. My journey started with a passion for technology, and now I specialize in Full-stack development with a focus on AI integration.
            </p>
            <p>
              I believe in clean code, minimalist design, and building products that solve real-world problems for global markets.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROJECTS GRID - Responsive 1, 2, or 3 columns */}
      <section id="projects" className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-white/5">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 uppercase text-white">Selected Works</h2>
            <p className="text-gray-500 font-medium italic text-sm md:text-base">High-impact solutions for International markets.</p>
          </div>
          <div className="text-blue-500 font-bold text-sm tracking-widest uppercase">/ 01 - 03</div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Project 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gray-900 rounded-2xl md:rounded-3xl mb-6 md:mb-8 overflow-hidden border border-white/5 group-hover:border-blue-500/50 transition-all flex items-center justify-center relative shadow-2xl">
               <img src="/project1.jpg" alt="Legal-AI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
               <span className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white font-bold tracking-widest uppercase text-[9px] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">Legal Intelligence</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 uppercase italic tracking-tighter text-white font-mono">01. Legal-AI Engine</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Advanced analysis tool built to identify legal risks in Real Estate contracts.</p>
            <div className="flex gap-4"><span className="text-[10px] font-black text-blue-500 tracking-widest border-b border-blue-500/20">NEXT.JS</span></div>
          </div>

          {/* Project 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gray-900 rounded-2xl md:rounded-3xl mb-6 md:mb-8 overflow-hidden border border-white/5 group-hover:border-blue-500/50 transition-all flex items-center justify-center relative shadow-2xl">
               <img src="/project2.jpg" alt="Video" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
               <span className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white font-bold tracking-widest uppercase text-[9px] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">Media Automation</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 uppercase italic tracking-tighter text-white font-mono">02. Video Localizer</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">Automated workflow for dubbing and script localization using AI voice synthesis.</p>
            <div className="flex gap-4"><span className="text-[10px] font-black text-blue-500 tracking-widest border-b border-blue-500/20">PYTHON</span></div>
          </div>

          {/* Project 3 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] bg-gray-900 rounded-2xl md:rounded-3xl mb-6 md:mb-8 overflow-hidden border border-white/5 group-hover:border-blue-500/50 transition-all flex items-center justify-center relative shadow-2xl">
               <img src="/project3.jpg" alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
               <span className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white font-bold tracking-widest uppercase text-[9px] bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">Market Intelligence</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 uppercase italic tracking-tighter text-white font-mono">03. Property Predictor</h3>
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">AI platform designed to predict property price fluctuations in Dubai and Berlin.</p>
            <div className="flex gap-4"><span className="text-[10px] font-black text-blue-500 tracking-widest border-b border-blue-500/20">TYPESCRIPT</span></div>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION - Fully Responsive Form */}
      <section id="contact" className="max-w-7xl mx-auto px-6 md:px-8 py-24 md:py-32 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 uppercase">Let's <br className="hidden md:block" /> Connect.</h2>
            <p className="text-gray-500 text-base md:text-lg mb-10 max-w-md mx-auto lg:mx-0">
              Feel free to reach out for global projects, collaborations, or any inquiries. I typically respond within 24 hours.
            </p>
            <div className="flex justify-center lg:justify-start gap-8">
              <a href="#" target="_blank" className="text-blue-500 font-bold uppercase tracking-widest text-[10px] border-b border-blue-500/20 pb-1">LinkedIn</a>
              <a href="mailto:itsmasoom9190@gmail.com" className="text-blue-500 font-bold uppercase tracking-widest text-[10px] border-b border-blue-500/20 pb-1">Email</a>
            </div>
          </div>

          <form action="https://formspree.io/f/itsmasoom9190@gmail.com" method="POST" className="space-y-4 md:space-y-6">
            <input type="text" name="name" placeholder="YOUR NAME" required className="w-full bg-[#111] border border-white/5 p-4 rounded-xl md:rounded-2xl focus:border-blue-500 outline-none transition text-sm tracking-widest text-white" />
            <input type="email" name="email" placeholder="YOUR EMAIL" required className="w-full bg-[#111] border border-white/5 p-4 rounded-xl md:rounded-2xl focus:border-blue-500 outline-none transition text-sm tracking-widest text-white" />
            <textarea name="message" rows={4} placeholder="YOUR MESSAGE" required className="w-full bg-[#111] border border-white/5 p-4 rounded-xl md:rounded-2xl focus:border-blue-500 outline-none transition text-sm tracking-widest text-white"></textarea>
            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-blue-600 hover:text-white transition-all uppercase tracking-[0.2em] text-xs shadow-lg shadow-white/5">
              Send Message
            </button>
          </form>
        </div>
        <p className="mt-24 md:mt-32 text-center text-[9px] md:text-[10px] text-gray-800 uppercase tracking-[0.3em] md:tracking-[0.5em]">© 2026 Habib Dev • Pakistan</p>
      </section>
    </main>
  );
}