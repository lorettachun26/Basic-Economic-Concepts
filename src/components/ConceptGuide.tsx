import React, { useState } from 'react';
import { CONCEPTS_DATA } from '../data/conceptsData';
import { ConceptId } from '../types';
import { BookOpen, CheckCircle, AlertTriangle, Lightbulb, Sparkles, ChevronRight, Layers, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  onSelectPracticeConcept: (conceptId: ConceptId) => void;
}

export const ConceptGuide: React.FC<Props> = ({ onSelectPracticeConcept }) => {
  const [activeConceptId, setActiveConceptId] = useState<ConceptId>('scarcity');

  const activeConcept = CONCEPTS_DATA.find(c => c.id === activeConceptId) || CONCEPTS_DATA[0];

  return (
    <div className="space-y-6">
      {/* Concept Navigation Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {CONCEPTS_DATA.map(concept => {
          const isActive = concept.id === activeConceptId;
          return (
            <button
              key={concept.id}
              onClick={() => setActiveConceptId(concept.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-400' : 'bg-slate-300'}`} />
              <span>{concept.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Concept Canvas */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Banner Section - Geometric Balance Theme */}
        <div className="bg-slate-900 text-white p-6 md:p-8 border-b-2 border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold rounded uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                HKDSE Economics Compulsory Part • Topic A
              </div>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                {activeConcept.title}
              </h2>
              <p className="text-slate-300 text-sm mt-2 max-w-3xl leading-relaxed">
                {activeConcept.shortDesc}
              </p>
            </div>

            <button
              onClick={() => onSelectPracticeConcept(activeConcept.id)}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs rounded-lg shadow-sm transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Practice DSE Questions</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* DSE Official Definition Card - High Contrast Callout */}
          <div className="mt-6 p-4 rounded-lg bg-slate-800/90 border-l-4 border-emerald-500 border-r border-t border-b border-slate-700/80">
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-1">
              HKEAA Standard Definition
            </span>
            <p className="text-sm font-medium text-white leading-relaxed italic">
              "{activeConcept.dseDefinition}"
            </p>
          </div>
        </div>

        {/* Content Body Grid */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Key Syllabus Pillars */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              Core Conceptual Framework
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeConcept.keyPoints.map((kp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white border border-slate-200 hover:border-emerald-400 transition-all space-y-2 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    <h4 className="font-bold text-sm text-emerald-700 mb-1">
                      {kp.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {kp.description}
                    </p>
                  </div>
                  {kp.examTip && (
                    <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] text-emerald-900 bg-emerald-50/80 p-2.5 rounded-md font-medium flex items-start gap-1.5 border border-emerald-100">
                      <Lightbulb className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{kp.examTip}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Concept Flow Diagram for Topic */}
          {activeConcept.id === 'scarcity' && (
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                The Fundamental Logic Chain of Economics
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center text-xs">
                <div className="p-3 bg-white rounded-lg shadow-xs border border-slate-200 w-full md:w-auto flex-1">
                  <div className="font-bold text-slate-900">Unlimited Wants vs Limited Resources</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Wants exceed resources</div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 rotate-90 md:rotate-0" />
                <div className="p-3 bg-slate-900 text-white rounded-lg shadow-xs border border-slate-800 w-full md:w-auto flex-1">
                  <div className="font-bold text-emerald-400">SCARCITY</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">More is preferred at $0 price</div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 rotate-90 md:rotate-0" />
                <div className="p-3 bg-white rounded-lg shadow-xs border border-slate-200 w-full md:w-auto flex-1">
                  <div className="font-bold text-slate-900">Choice & Opportunity Cost</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Highest-valued option forgone</div>
                </div>
                <ArrowRight className="w-4 h-4 text-emerald-500 rotate-90 md:rotate-0" />
                <div className="p-3 bg-white rounded-lg shadow-xs border border-slate-200 w-full md:w-auto flex-1">
                  <div className="font-bold text-slate-900">Competition & Discrimination</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Rules define winners/losers</div>
                </div>
              </div>
            </div>
          )}

          {activeConcept.id === 'interest-flow' && (
            <div className="p-5 rounded-xl bg-slate-900 text-white border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Circular Flow of Income & Product/Factor Markets
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-2">
                  <span className="font-bold text-emerald-400">1. Real Flow (Goods, Services & Factors of Production):</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    • <strong>Factor Market:</strong> Households supply factor services (Labour, Land, Capital, Entrepreneurship) to Firms.
                  </p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    • <strong>Product Market:</strong> Firms supply finished goods & services to Households.
                  </p>
                </div>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-2">
                  <span className="font-bold text-emerald-400">2. Money Flow (Incomes & Expenditures):</span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    • <strong>Factor Market:</strong> Firms pay factor cost (Wages, Rent, Interest, Profit) which forms household income.
                  </p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    • <strong>Product Market:</strong> Households spend consumer expenditure which forms firms' total revenue.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Authentic Real-world HK Examples */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Authentic Real-Life & HKDSE Case Studies
            </h3>

            <div className={`grid grid-cols-1 ${activeConcept.realExamples.length >= 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'} gap-4`}>
              {activeConcept.realExamples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-white border border-slate-200 shadow-xs space-y-2 hover:border-slate-300 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                      {ex.hkContext ? '🇭🇰 HK Context' : 'Case Study'}
                    </span>
                    <h4 className="font-bold text-xs text-slate-900 truncate">
                      {ex.context}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ex.explanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Common DSE Exam Pitfalls & Golden Phrasing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Common Traps */}
            <div className="p-5 rounded-xl bg-rose-50/70 border border-rose-200 space-y-3">
              <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                Common HKDSE Traps & Misconceptions
              </h4>
              <div className="space-y-2.5">
                {activeConcept.commonTraps.map((trap, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-rose-200 text-xs space-y-1">
                    <div className="font-bold text-rose-900 line-through decoration-rose-400">
                      ✕ Misconception: {trap.misconception}
                    </div>
                    <div className="font-semibold text-emerald-800">
                      ✓ Correction: {trap.correction}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Golden Phrases */}
            <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-3">
              <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                HKDSE Essential Marking Phrasing
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeConcept.goldenPhrases.map((phrase, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2.5 bg-white rounded-lg border border-emerald-100">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="font-medium text-slate-800">{phrase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

