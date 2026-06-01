import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield, Home, Copy, Check } from 'lucide-react';
import { SERVER_IP_JAVA } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'rules', label: 'Rules', icon: Shield },
  ];

  const handleCopyIP = async () => {
    try {
      await navigator.clipboard.writeText(SERVER_IP_JAVA);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn('Failed to copy text: ', err);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/[0.02] backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand title */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="relative w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/src/assets/images/johnies_smp_logo_1780282169805.png" 
                alt="Johnies SMP Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(168,85,247,0.3)]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <span className="font-bold sm:text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 group-hover:from-white group-hover:to-purple-300 transition-all duration-300 font-sans">
                JOHNIES <span className="text-purple-400 font-extrabold group-hover:text-purple-300">SMP</span>
              </span>
              <p className="hidden sm:block text-[9px] text-gray-500 font-mono tracking-widest uppercase">Vanilla+ Survival</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className="w-4 h-4 text-purple-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Quick Copy Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleCopyIP}
              className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all duration-300 flex items-center gap-2 group border ${
                copied 
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-gray-300 hover:text-white border-white/10 hover:border-white/25 shadow-sm'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400 group-hover:text-blue-400" />}
              <span>{copied ? 'IP COPIED!' : SERVER_IP_JAVA}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Action buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleCopyIP}
              className={`p-2.5 rounded-lg border transition-all duration-300 ${
                copied 
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                  : 'bg-white/[0.03] text-gray-300 border-white/10'
              }`}
              title="Copy IP Address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-400 hover:text-white bg-white/[0.03] border border-white/10"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/10 bg-[#09090b] overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full px-4 py-3 rounded-lg text-left text-sm font-medium flex items-center gap-3 transition-colors ${
                      isActive 
                        ? 'bg-white/10 text-white border-l-2 border-purple-500' 
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-purple-400" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
