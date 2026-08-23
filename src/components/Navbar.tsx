import React from 'react';
import { 
  BookOpen, Calculator, Package, Scale, FileCheck, BookmarkCheck, 
  Award, Sparkles 
} from 'lucide-react';

export type MainNavTab = 
  | 'guide' 
  | 'simulator' 
  | 'goods' 
  | 'statements' 
  | 'practice' 
  | 'revision';

interface Props {
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
  score: number;
  totalAttempts: number;
}

export const Navbar: React.FC<Props> = ({
  activeTab,
  onTabChange,
  score,
  totalAttempts
}) => {
  const navItems: { id: MainNavTab; label: string; icon: React.ReactNode }[] = [
    { id: 'guide', label: '1. Concept Guide', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'simulator', label: '2. Cost Sandbox', icon: <Calculator className="w-4 h-4" /> },
    { id: 'goods', label: '3. Goods Inspector', icon: <Package className="w-4 h-4" /> },
    { id: 'statements', label: '4. Statement Lab', icon: <Scale className="w-4 h-4" /> },
    { id: 'practice', label: '5. Past Papers & Rubric', icon: <FileCheck className="w-4 h-4" /> },
    { id: 'revision', label: '6. Revision Cards', icon: <BookmarkCheck className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900 text-white border-b-4 border-emerald-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Geometric Diamond Logo */}
            <div className="w-8 h-8 bg-emerald-500 rounded-xs rotate-45 flex items-center justify-center shadow-xs">
              <span className="-rotate-45 font-black text-slate-950 text-sm">E</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-white text-base sm:text-lg tracking-tight">
                  DSE ECON <span className="text-emerald-400 font-light">CORE MODULE</span>
                </h1>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider hidden sm:inline-block">
                  C&A 2025/26 Updated
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block font-medium">
                Topic A: Basic Economic Concepts (Scarcity, Opportunity Cost, Goods & Statements)
              </p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Score Metric in Geometric Slate Tile */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-slate-800/90 rounded-lg border border-slate-700/80 text-xs font-semibold text-slate-200">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              <span>Score: <strong className="text-emerald-400 font-bold">{score}</strong> pts</span>
              {totalAttempts > 0 && (
                <span className="text-[10px] text-slate-400 font-mono">({totalAttempts} done)</span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Bar Strip with Emerald Highlights */}
        <nav className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-none border-t border-slate-800">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 text-emerald-400 border border-emerald-500/40 shadow-xs'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

