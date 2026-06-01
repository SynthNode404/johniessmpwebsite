import { useState } from 'react';
import { motion } from 'motion/react';
import { RulesData } from '../data';
import { Search, ShieldAlert, MessageSquare, Hammer, Swords, HelpCircle } from 'lucide-react';

const renderRulesIcon = (name: string) => {
  switch (name) {
    case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
    case 'Hammer': return <Hammer className="w-5 h-5" />;
    case 'Swords': return <Swords className="w-5 h-5" />;
    default: return <HelpCircle className="w-5 h-5" />;
  }
};

const getSeverityBadgeClass = (severity: string) => {
  switch (severity) {
    case 'Critical': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
    case 'High': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    case 'Medium': return 'bg-yellow-500/10 text-yellow-500/20 border-yellow-500/20';
    default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
  }
};

export default function RulesView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter based on search input and selected category tabs
  const filteredCategories = RulesData.map(category => {
    // If we have an active category constraint, skip others
    if (activeCategory !== 'all' && category.id !== activeCategory) {
      return null;
    }

    const matchedRules = category.rules.filter(rule => 
      rule.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      rule.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchedRules.length === 0) {
      return null;
    }

    return {
      ...category,
      rules: matchedRules
    };
  }).filter(Boolean);

  return (
    <div className="relative isolate min-h-screen">
      
      {/* Background Graphic Layer of Frosted Glass Mesh & Cover */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[#09090b]" />
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tighter uppercase">
            Server <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Rules</span>
          </h1>
          <p className="text-gray-400 text-sm mt-3 max-w-md mx-auto">
            Please read and follow these server guidelines to ensure a fair, respectful, and lag-free survival environment for everyone.
          </p>
        </div>

        {/* SEARCH & FILTERS CONTROLS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-10">
          
          {/* Search bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search rules (e.g. grief, hack, redstone)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/[0.03] text-white border border-white/10 focus:border-purple-500/40 rounded-xl pl-12 pr-4 py-3 text-sm outline-none transition-all placeholder:text-gray-600 font-sans"
            />
          </div>

          {/* Categories Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 shrink-0">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors border ${
                activeCategory === 'all'
                  ? 'bg-white/10 border-white/20 text-white'
                  : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
              }`}
            >
              All
            </button>
            {RulesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase whitespace-nowrap transition-colors border ${
                  activeCategory === cat.id
                    ? 'bg-white/10 border-white/20 text-white'
                    : 'bg-white/[0.02] border-white/10 text-gray-400 hover:text-white'
                }`}
              >
                {cat.title.split(' ')[0]} {/* shortened category word */}
              </button>
            ))}
          </div>

        </div>

        {/* FILTER RESUTS OR FALLBACK EMPTY */}
        {filteredCategories.length > 0 ? (
          <div className="space-y-10">
            {filteredCategories.map((category) => (
              <motion.div 
                key={category!.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* Category Anchor Label */}
                <div className="flex items-center gap-2 px-1 mb-2">
                  <div className="text-purple-400">
                    {renderRulesIcon(category!.iconName)}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 tracking-wide font-sans">{category!.title}</h3>
                </div>

                {/* Rules List inside Category */}
                <div className="grid grid-cols-1 gap-4">
                  {category!.rules.map((rule) => (
                    <div 
                      key={rule.number}
                      className="p-5 sm:p-6 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-extrabold flex items-center justify-center shrink-0 font-mono">
                            #{rule.number}
                          </span>
                          <h4 className="text-white text-base font-bold tracking-tight">
                            {rule.title}
                          </h4>
                        </div>
                        
                        {/* Severity badge info */}
                        <span className={`px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md border text-center self-start sm:self-center font-mono shrink-0 ${getSeverityBadgeClass(rule.severity)}`}>
                          {rule.severity} Penalty
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm leading-relaxed pl-0 sm:pl-10">
                        {rule.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white/[0.02] border border-white/10 rounded-3xl">
            <ShieldAlert className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-1">No matching rules found</h3>
            <p className="text-gray-500 text-sm">Try adjusting your search criteria.</p>
          </div>
        )}

        {/* QUICK IN-GAME ADVISORY ACCUSED BAN */}
        <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-5">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
            <ShieldAlert className="w-5 h-5 text-purple-400" />
          </div>
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-semibold text-white">Need to report a rules breach?</h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Record video/photo evidence of players griefing or hacking, and raise a ticket inside our Discord's **#report-a-player** channel. Admins will evaluate your ticket within 24 hours.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
