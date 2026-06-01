import { SERVER_IP_JAVA, DISCORD_INVITE_URL } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09090b]/80 backdrop-blur-md border-t border-white/10 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left brand logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-9 h-9 flex items-center justify-center shrink-0">
              <img 
                src="/src/assets/images/johnies_smp_logo_1780282169805.png" 
                alt="Johnies SMP Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold tracking-tight text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              JOHNIES <span className="text-purple-400">SMP</span>
            </span>
          </div>

          {/* Quick legal disclaimer matching professional portals */}
          <p className="text-[10px] text-gray-500 max-w-sm text-center md:text-left leading-relaxed font-sans font-normal">
            Johnies SMP is an independent multiplayer community server. We are not affiliated with or endorsed by Mojang AB or Microsoft Corporation.
          </p>

          {/* Right quick connection references */}
          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="hover:text-purple-400 transition-colors cursor-pointer select-none" onClick={() => setActiveTab('rules')}>Rules</span>
            <span className="text-gray-600">•</span>
            <a href={DISCORD_INVITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">Discord</a>
            <span className="text-gray-500 select-all">• {SERVER_IP_JAVA}</span>
          </div>

        </div>

        {/* Outer bottom row */}
        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-gray-600">
          <span>&copy; {currentYear} Johnies SMP. All rights reserved.</span>
          <span className="font-mono">Created with supreme craftsmanship</span>
        </div>

      </div>
    </footer>
  );
}
