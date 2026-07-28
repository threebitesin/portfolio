import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/gfbs3-portfolio-demo" : "";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050510] text-cyan-50 font-mono selection:bg-fuchsia-500/30 selection:text-fuchsia-200 overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-fuchsia-900/20 to-transparent opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050510]/80 backdrop-blur-md border-b border-cyan-900/30">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400 hover:to-cyan-400 transition-all duration-300"
          >
            THREEBITESIN
          </Link>
          <div className="flex gap-8 text-xs font-bold tracking-widest uppercase text-cyan-700/80">
            <Link href="#work" className="hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">PROJECTS</Link>
            <Link href="#philosophy" className="hover:text-fuchsia-400 hover:drop-shadow-[0_0_5px_rgba(232,121,249,0.8)] transition-all">ABOUT</Link>
            <Link href="#contact" className="hover:text-yellow-400 hover:drop-shadow-[0_0_5px_rgba(250,204,21,0.8)] transition-all">CONTACT</Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 space-y-8 relative">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-400 text-xs font-bold tracking-widest uppercase animate-pulse">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)]" />
              AVAILABLE TO WORK
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
              LEVEL 10 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 animate-gradient-x">QA SPECIALIST</span> <br />
              AND CREATIVE
            </h1>
          </div>
          <div className="pt-8 flex gap-6">
            <Link 
              href="#work" 
              className="group relative px-8 py-3 bg-cyan-950/30 border border-cyan-500/50 text-cyan-300 font-bold tracking-widest uppercase text-sm overflow-hidden hover:bg-cyan-900/50 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                START <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>
        </section>

        {/* Selected Work */}
        <section id="work" className="py-20 space-y-12">
          <div className="flex items-end justify-between border-b border-cyan-900/30 pb-4">
            <h2 className="text-2xl font-bold tracking-widest text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]">
              // RECENT_PROJECTS
            </h2>
            <span className="text-xs font-mono text-cyan-700">Professional and personal showcase.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <ProjectCard 
              title="Elder Pyre"
              description="Elder Pyre is a Unity based top-down 2D game developed for the 2026 GMTK Game Jam. My roles were as sound designer, level designer, and quality tester."
              tags={["Unity", "Game Design", "GMTK Game Jam"]}
              color="cyan"
              href="https://roboticprism.itch.io/elder-pyre"
            />
            {/* Project 2 */}
            <ProjectCard 
              title="Quality Assurance ExDev Dashboard"
              description="Onboarding platform for new ExDevs to have an easy resource to refer to for sprint tasks and active bug regression and user stories. Maintained with active updates based on stakeholder feedback."
              tags={["Jira", "JQL", "Atlassian"]}
              color="cyan"
              href="#"
            />
            {/* Project 3 */}
            <ProjectCard 
              title="Quality Assurance Playtest Tracker"
              description="Dashboard that tracked small team playtests by utilizing Excel and JQL search criteria. Allowed for an analytical method to determine value added from playtest series."
              tags={["Jira", "JQL", "Excel"]}
              color="fuchsia"
              href="#"
            />
            {/* Project 4 */}
            <ProjectCard 
              title="Calibration Management System"
              description="CoDeveloped platform for instrument calibration management. Collective project to best serve the Quality and Engineering departments of the company to allow for a more stable form of asset tracking than the prior system."
              tags={["Intellect QMS", "Block-Based", "cGMP"]}
              color="yellow"
              href="#"
            />
          </div>
        </section>

        {/* Philosophy / Approach */}
        <section id="philosophy" className="py-20 grid md:grid-cols-12 gap-12 border-t border-cyan-900/30">
          <div className="md:col-span-4 space-y-8">
            <h2 className="text-2xl font-bold tracking-widest text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]">
              {"// ABOUT_ME"}
            </h2>
            
            {/* Profile Image - Replace src with your image in /public */}
            <div className="relative w-full aspect-[4/5] border border-cyan-500/30 rounded-sm overflow-hidden bg-cyan-950/30 group">
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(5,5,16,0.8)_100%)] z-10" />
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:100%_4px] z-20 pointer-events-none" />
              
              <Image 
                src={"https://raw.githubusercontent.com/threebitesin/portfolio/refs/heads/main/public/me.png"}
                alt="Profile"
                fill
                className="object-cover z-0 opacity-60 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
          <div className="md:col-span-8 space-y-8 text-cyan-100/80 leading-relaxed font-light">
            <p>
              Wanderer of industries firmly rooted in QA, now taking a plunge into development of tools, games, and stories.
            </p>
            <div className="p-6 bg-cyan-950/20 border border-cyan-500/20 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500" />
              <div className="grid grid-cols-2 gap-8 font-mono text-sm">
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">SKILLS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Bug Triage / Root Cause Analysis / Risk Assessment</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Jira / Power BI / QMS</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Data Analysis / Dashboard Development / Tool Support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-cyan-400 mb-4 tracking-widest uppercase text-xs border-b border-cyan-800 pb-2">PROTOCOLS</h3>
                  <ul className="space-y-2 text-cyan-200/70">
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Leadership</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Collaboration</li>
                    <li className="flex items-center gap-2"><span className="text-fuchsia-500">›</span> Process Improvement</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 border-t border-cyan-900/30">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Me?</span>
            </h2>
            <p className="text-cyan-200/60 text-lg">
              If you have a freelance gig, contract, or full time position, feel free to contact me.
            </p>
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-8 pt-4">
                <SocialLink href="https://hitmarker.net/threebitesin" label="RESUME" />
                <SocialLink href="https://github.com/threebitesin" label="GITHUB" />
                <SocialLink href="https://bsky.app/profile/threebitesin.bsky.social" label="BLUESKY" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-cyan-900/50 border-t border-cyan-900/20">
        <p>Made with ❤️ by <a href="https://gh.io/gfb" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub for Beginners</a> and <a href="https://gh.io/gfb-copilot" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all">GitHub Copilot</a></p>
      </footer>
    </div>
  );
}

function ProjectCard({ title, description, tags, color, href }: { title: string, description: string, tags: string[], color: "cyan" | "fuchsia" | "purple" | "yellow", href: string }) {
  // Valid color options for the card styling
  const validColors = ["cyan", "fuchsia", "purple", "yellow"] as const;
  
  // Runtime validation: default to "cyan" if an invalid color is provided
  const safeColor = validColors.includes(color) ? color : "cyan";

  const colorClasses = {
    cyan: "group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
    fuchsia: "group-hover:border-fuchsia-500/50 group-hover:shadow-[0_0_20px_rgba(232,121,249,0.2)]",
    purple: "group-hover:border-purple-500/50 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]",
    yellow: "group-hover:border-yellow-500/50 group-hover:shadow-[0_0_20px_rgba(234,179,8,0.2)]",
  };

  const textColors = {
    cyan: "group-hover:text-cyan-400",
    fuchsia: "group-hover:text-fuchsia-400",
    purple: "group-hover:text-purple-400",
    yellow: "group-hover:text-yellow-400",
  };

  return (
    <Link href={href} className={`group block space-y-4 p-6 bg-[#0a0a1a] border border-cyan-900/30 transition-all duration-300 ${colorClasses[safeColor]}`}>
      <div className="flex justify-between items-start">
        <h3 className={`text-xl font-bold text-white tracking-wider transition-colors ${textColors[safeColor]}`}>
          {title}
        </h3>
        <ArrowUpRightIcon className={`w-5 h-5 text-cyan-700 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ${textColors[safeColor]}`} />
      </div>
      <p className="text-sm text-cyan-100/60 leading-relaxed font-light border-l border-cyan-900/50 pl-4">
        {description}
      </p>
      <div className="flex gap-2 pt-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 bg-cyan-950/30 px-2 py-1 border border-cyan-900/30 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

function SocialLink({ href, label }: { href: string, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-xs font-bold tracking-widest text-cyan-700 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all"
    >
      {label}
    </a>
  );
}

// Simple Icons
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  )
}
