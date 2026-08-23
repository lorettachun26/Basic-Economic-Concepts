import React, { useState } from 'react';
import { Check, X, AlertTriangle, HelpCircle, CheckCircle, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GoodCase {
  id: string;
  name: string;
  category: 'Economic Good' | 'Free Good';
  isFreeOfCharge: boolean;
  morePreferred: boolean;
  opportunityCostInProduction: boolean; // positive cost
  insufficientAtZeroPrice: boolean;
  hkDseReference?: string;
  explanation: string;
  trapWarning?: string;
}

const CASES_DATA: GoodCase[] = [
  {
    id: 'cumask',
    name: 'Government Free "CuMask" Distribution',
    category: 'Economic Good',
    isFreeOfCharge: true,
    morePreferred: true,
    opportunityCostInProduction: true,
    insufficientAtZeroPrice: true,
    hkDseReference: '2021 DSE Paper 2 B10(b)',
    explanation: 'Although distributed at $0 price to citizens, producing CuMask requires scarce cloth, human labour, and machinery that have alternative uses (positive opportunity cost in production). Citizens also prefer more masks.',
    trapWarning: 'Classic HKDSE trap: "Free of charge" is NOT equivalent to a "Free Good"!'
  },
  {
    id: 'mtr-free-ticket',
    name: 'MTR "Ride 10 Get 1 Free" Single Journey Ticket',
    category: 'Economic Good',
    isFreeOfCharge: true,
    morePreferred: true,
    opportunityCostInProduction: true,
    insufficientAtZeroPrice: true,
    hkDseReference: '2013 DSE Paper 2 B9(b)',
    explanation: 'Providing railway transit requires electricity, train operators, and track maintenance. These resources are scarce with alternative uses, so providing the journey incurs positive opportunity cost.',
    trapWarning: 'Do NOT say "not free because you paid for 10 rides". In economics, the good itself requires scarce resources to produce.'
  },
  {
    id: 'open-air',
    name: 'Fresh Air in Victoria Park',
    category: 'Free Good',
    isFreeOfCharge: true,
    morePreferred: false,
    opportunityCostInProduction: false,
    insufficientAtZeroPrice: false,
    hkDseReference: 'Core Concept Definition',
    explanation: 'In an open outdoor space on Earth, the quantity of atmospheric air is sufficient to satisfy all human respiratory wants at zero price. More of it is not preferred, and nature provides it without sacrificing other goods.'
  },
  {
    id: 'scuba-air',
    name: 'Purified Oxygen in a Scuba Diving Cylinder',
    category: 'Economic Good',
    isFreeOfCharge: false,
    morePreferred: true,
    opportunityCostInProduction: true,
    insufficientAtZeroPrice: true,
    hkDseReference: 'Situational Goods Concept',
    explanation: 'Air underwater is scarce. Filtering, compressing, and bottling oxygen into metal cylinders requires manufacturing facilities, energy, and labour (positive opportunity cost in production).'
  },
  {
    id: 'free-tv',
    name: 'Free-to-Air Television Broadcast in Hong Kong',
    category: 'Economic Good',
    isFreeOfCharge: true,
    morePreferred: true,
    opportunityCostInProduction: true,
    insufficientAtZeroPrice: true,
    hkDseReference: 'HKDSE Curriculum & Assessment Guide',
    explanation: 'TV programs are free of charge to viewers, but filming them requires actors, camera crew, studios, and transmission spectrum—all scarce resources with alternative uses.'
  },
  {
    id: 'mooc-notes',
    name: 'Free University MOOC Course Materials',
    category: 'Economic Good',
    isFreeOfCharge: true,
    morePreferred: true,
    opportunityCostInProduction: true,
    insufficientAtZeroPrice: true,
    hkDseReference: '2015 DSE Paper 2 A1(a)',
    explanation: 'Accessible online worldwide free of charge, yet professors spent scarce research and teaching time writing the curriculum. Opportunity cost in production is positive.'
  },
  {
    id: 'desert-sand',
    name: 'Sand in the Sahara Desert',
    category: 'Free Good',
    isFreeOfCharge: true,
    morePreferred: false,
    opportunityCostInProduction: false,
    insufficientAtZeroPrice: false,
    hkDseReference: 'Core Concept Definition',
    explanation: 'In the desert, the quantity of sand available exceeds human wants at zero price. No one is willing to pay for extra sand on the desert floor, and no resources were sacrificed to produce it.'
  },
  {
    id: 'reclamation-sand',
    name: 'River Sand for HK Airport 3rd Runway Reclamation',
    category: 'Economic Good',
    isFreeOfCharge: false,
    morePreferred: true,
    opportunityCostInProduction: true,
    insufficientAtZeroPrice: true,
    hkDseReference: '2019 DSE Paper 2 A1',
    explanation: 'Dredging, transporting, and testing marine reclamation sand requires cargo ships, fuel, and specialized equipment. It is extremely scarce and commands a high market price.'
  }
];

export const GoodsClassifier: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASES_DATA[0].id);
  const [userPredictions, setUserPredictions] = useState<Record<string, 'Economic Good' | 'Free Good'>>({});
  const [showVerdict, setShowVerdict] = useState<boolean>(true);

  const currentCase = CASES_DATA.find(c => c.id === selectedCaseId) || CASES_DATA[0];

  const handlePredict = (type: 'Economic Good' | 'Free Good') => {
    setUserPredictions(prev => ({ ...prev, [currentCase.id]: type }));
  };

  const userChoice = userPredictions[currentCase.id];
  const isCorrect = userChoice === currentCase.category;

  return (
    <div className="space-y-6">
      {/* Header - Geometric Balance Slate & Emerald */}
      <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          HKDSE 4-Criteria Diagnostic Testing Lab
        </div>
        <h2 className="text-2xl font-black tracking-tight text-white">
          Free Good vs Economic Good Inspector
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
          Test authentic DSE cases against the 4 golden economic criteria. Master why <strong className="text-emerald-400">"Free of Charge ≠ Free Good"</strong> and how context changes a good's nature.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {CASES_DATA.map(item => {
          const isCurrent = item.id === selectedCaseId;
          const tested = userPredictions[item.id];
          const correct = tested === item.category;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedCaseId(item.id)}
              className={`p-3 rounded-lg text-left border transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${isCurrent ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {item.category === 'Free Good' ? 'Free Good' : 'Econ Good'}
                </span>
                {tested && (
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${correct ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                    {correct ? '✓ Pass' : '✕ Retry'}
                  </span>
                )}
              </div>
              <div className={`text-xs font-bold mt-1 line-clamp-2 ${isCurrent ? 'text-white' : 'text-slate-900'}`}>
                {item.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Inspection Chamber */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: 4-Criteria Diagnostic Board */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-5">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200">
                Case Study {currentCase.hkDseReference ? `• ${currentCase.hkDseReference}` : ''}
              </span>
              <h3 className="text-base font-bold text-slate-900 mt-2">
                {currentCase.name}
              </h3>
            </div>
            
            <div className={`px-2.5 py-1 rounded text-[11px] font-bold shrink-0 ${
              currentCase.isFreeOfCharge ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-slate-100 text-slate-800 border border-slate-200'
            }`}>
              {currentCase.isFreeOfCharge ? 'Price: $0 (Free of Charge)' : 'Price: > $0 (Positive Price)'}
            </div>
          </div>

          {/* 4 DSE Criteria Checklist */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Diagnostic Criteria Checklist (HKEAA Standards):
            </h4>

            {/* Criterion 1 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-5 h-5 rounded bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                1
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Is it a "Good"? (Some is better than none)</div>
                <p className="text-slate-600 mt-0.5">Provides positive utility/satisfaction to humans (applies to BOTH free and economic goods).</p>
                <div className="mt-1 font-bold text-emerald-700 text-[11px]">✓ YES - It is a good.</div>
              </div>
            </div>

            {/* Criterion 2 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-5 h-5 rounded bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                2
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Is "More of it Preferred" at Zero Price? (Scarcity Test)</div>
                <p className="text-slate-600 mt-0.5">Would people still desire an additional unit if the monetary price is $0?</p>
                <div className={`mt-1 font-bold text-[11px] ${currentCase.morePreferred ? 'text-emerald-700' : 'text-slate-600'}`}>
                  {currentCase.morePreferred ? '👉 YES - More is preferred (Wants > Quantity Available at $0)' : '👉 NO - Quantity available is already sufficient to satisfy all wants'}
                </div>
              </div>
            </div>

            {/* Criterion 3 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-5 h-5 rounded bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                3
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Opportunity Cost in Production</div>
                <p className="text-slate-600 mt-0.5">Were scarce resources (labour, land, capital, time) with alternative uses sacrificed to provide it?</p>
                <div className={`mt-1 font-bold text-[11px] ${currentCase.opportunityCostInProduction ? 'text-amber-800' : 'text-emerald-700'}`}>
                  {currentCase.opportunityCostInProduction 
                    ? '👉 Positive Cost (> 0) - Scarce resources sacrificed in production' 
                    : '👉 Zero Cost (= 0) - Abundantly provided by nature without sacrificing other goods'}
                </div>
              </div>
            </div>

            {/* Criterion 4 */}
            <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
              <div className="w-5 h-5 rounded bg-slate-900 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                4
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Competition & Willingness to Pay</div>
                <p className="text-slate-600 mt-0.5">Do people compete for it or sacrifice resources to obtain it?</p>
                <div className="mt-1 font-bold text-[11px] text-slate-800">
                  {currentCase.category === 'Economic Good' ? '👉 People compete for it (via price or non-price queuing/rationing)' : '👉 No competition exists; anyone can obtain what they want freely'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Verdict & DSE Marking Analysis */}
        <div className="lg:col-span-5 space-y-4">
          {/* Classification Action Card */}
          <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Student Classification Verdict:
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Based on the 4 criteria, determine whether this item is a Free Good or an Economic Good:
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => handlePredict('Economic Good')}
                className={`py-3 px-4 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  userChoice === 'Economic Good'
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                }`}
              >
                📦 Economic Good
              </button>

              <button
                onClick={() => handlePredict('Free Good')}
                className={`py-3 px-4 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  userChoice === 'Free Good'
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                }`}
              >
                🕊️ Free Good
              </button>
            </div>

            {/* Live Evaluation Result */}
            {userChoice && (
              <div
                className={`mt-4 p-4 rounded-lg border text-xs leading-relaxed ${
                  isCorrect
                    ? 'bg-slate-800 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-800 border-rose-500/50 text-rose-300'
                }`}
              >
                <div className="font-bold text-sm flex items-center gap-1.5 mb-1.5">
                  {isCorrect ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span>Correct! It is an {currentCase.category}.</span>
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4 text-rose-400" />
                      <span>Incorrect. It is an {currentCase.category}.</span>
                    </>
                  )}
                </div>
                <p className="text-slate-200">{currentCase.explanation}</p>
              </div>
            )}

            {/* Trap Warning Box */}
            {currentCase.trapWarning && (
              <div className="mt-4 p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg text-amber-200 text-xs flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300">HKDSE Trap Warning: </strong>
                  {currentCase.trapWarning}
                </div>
              </div>
            )}
          </div>

          {/* Quick Summary Reference */}
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs text-xs space-y-3">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              HKDSE Key Distinction Summary:
            </h5>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-[11px]">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="pb-1.5">Feature</th>
                    <th className="pb-1.5 text-emerald-700">Economic Good</th>
                    <th className="pb-1.5 text-slate-700">Free Good</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="py-1.5 font-semibold text-slate-900">Quantity Available</td>
                    <td className="py-1.5">Insufficient at $0</td>
                    <td className="py-1.5">Sufficient at $0</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-semibold text-slate-900">More Preferred?</td>
                    <td className="py-1.5 text-emerald-800 font-bold">Yes</td>
                    <td className="py-1.5 text-slate-600 font-bold">No</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-semibold text-slate-900">Cost in Production</td>
                    <td className="py-1.5">&gt; 0 (Positive)</td>
                    <td className="py-1.5">= 0 (Zero)</td>
                  </tr>
                  <tr>
                    <td className="py-1.5 font-semibold text-slate-900">Price in Market</td>
                    <td className="py-1.5">Can be &gt; $0 or $0</td>
                    <td className="py-1.5">Always $0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

