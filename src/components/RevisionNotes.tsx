import React, { useState } from 'react';
import { Sparkles, ShieldCheck, AlertTriangle, BookMarked, Search, CheckCircle2, ChevronRight, Copy, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface RevisionCard {
  id: string;
  topic: string;
  goldenRule: string;
  dsePitfall: string;
  keywords: string[];
}

const REVISION_CARDS: RevisionCard[] = [
  {
    id: 'scarcity',
    topic: '1. Scarcity',
    goldenRule: 'Scarcity is a relative concept where limited resources are insufficient to satisfy unlimited human wants. A good is scarce if and only if MORE OF IT IS PREFERRED at zero price.',
    dsePitfall: 'Never say "resources cannot satisfy our wants". Must write: "resources are insufficient to satisfy all human wants". Also, limited physical quantity does NOT equal scarcity (e.g. seawater on open coast is fixed in supply but not scarce).',
    keywords: ['insufficient to satisfy', 'unlimited wants', 'more is preferred', 'relative concept']
  },
  {
    id: 'opp-cost',
    topic: '2. Opportunity Cost',
    goldenRule: 'Opportunity Cost = Highest-valued option forgone. When spending $1,000 on Item A instead of Item B ($1,000), Item C ($1,000), or Item D ($1,000), the cost is ONLY forgoing Item B (the single highest-valued alternative sacrificed, NOT B+C+D combined).',
    dsePitfall: '1. A change in the value/enjoyment of the CHOSEN option does NOT change its opportunity cost!\n2. Choices #3, #4, and #5 are NOT added to the cost because $1,000 can only buy one alternative.\n3. Sunk costs (unrecoverable past expenses) are never part of opportunity cost.',
    keywords: ['Opportunity cost = highest-valued option forgone', '$1000 single choice', 'chosen option value unchanged', 'not added together']
  },
  {
    id: 'goods',
    topic: '3. Free Goods vs Economic Goods',
    goldenRule: 'Economic Good: Quantity available is insufficient to satisfy all wants at $0 price (more is preferred; positive opportunity cost in production). Free Good: Quantity available is sufficient at $0 price (more is not preferred; zero production cost).',
    dsePitfall: 'FREE OF CHARGE ≠ FREE GOOD! Goods provided at zero price by government or firms (e.g. free TV broadcasts, free CuMask, free MTR "Ride 10 Get 1 Free", online MOOCs) consume scarce resources with alternative uses, hence are ECONOMIC GOODS.',
    keywords: ['free of charge != free good', 'opportunity cost in production', 'scarce resources with alternative uses']
  },
  {
    id: 'competition',
    topic: '4. Competition & Discrimination',
    goldenRule: 'Scarcity inevitably leads to competition. Every competition requires rules to allocate goods. Rules define the competition and inherently discriminate against those who do not satisfy the criteria.',
    dsePitfall: 'Non-price competition (e.g. queuing, lottery, academic grades) does NOT eliminate discrimination. Queuing discriminates against those with a high opportunity cost of time; lotteries discriminate against the unlucky.',
    keywords: ['scarcity implies competition', 'rules imply discrimination', 'price vs non-price', 'time cost']
  },
  {
    id: 'statements',
    topic: '5. Positive vs Normative Statements',
    goldenRule: 'Positive statements concern "what is / was / will be" and can be tested/refuted by empirical facts. Normative statements express subjective value judgments ("should / ought to / too high / desirable") and cannot be tested by facts.',
    dsePitfall: 'A positive statement does NOT need to be true! A false statement (e.g. "Unemployment in Hong Kong is 100%") is STILL a positive statement because it is refutable by facts.',
    keywords: ['testable against facts', 'refutable by data', 'value judgment', 'should / ought to']
  },
  {
    id: 'interest',
    topic: '6. Interest & Barter Economy',
    goldenRule: 'Interest is the cost of earlier availability of resources to the borrower, and compensation for deferred consumption to the lender. It exists in any intertemporal exchange, even in a barter economy without money or inflation.',
    dsePitfall: 'Interest does NOT require money or commercial banking. If you borrow 1 basket of apples today and return 1.2 baskets next month, the extra 0.2 basket is interest.',
    keywords: ['earlier availability', 'deferred consumption', 'barter economy', 'positive time preference']
  }
];

export const RevisionNotes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredCards = REVISION_CARDS.filter(c => 
    c.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.goldenRule.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.dsePitfall.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleCopy = (card: RevisionCard) => {
    const text = `HKDSE Economics Revision: ${card.topic}\n\nGolden Rule:\n${card.goldenRule}\n\nExam Pitfall:\n${card.dsePitfall}`;
    navigator.clipboard.writeText(text);
    setCopiedId(card.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header - Geometric Balance Slate & Emerald */}
      <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
          <BookMarked className="w-3.5 h-3.5" />
          HKDSE Rapid Revision & Exam Traps Cheat Sheet
        </div>
        <h2 className="text-2xl font-black tracking-tight text-white">
          High-Yield Revision Cards
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
          Quickly review essential definitions, high-frequency exam traps, and HKEAA marking keywords before taking practice tests or exams.
        </p>
      </div>

      {/* Search Filter */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search by concept keyword (e.g. sunk cost, free good, earlier availability, refutable)..."
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none shadow-xs"
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCards.map(card => (
          <div
            key={card.id}
            className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-4 hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {card.topic}
                  </h3>
                </div>

                <button
                  onClick={() => handleCopy(card)}
                  className="p-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-500 transition-colors cursor-pointer"
                  title="Copy Revision Summary"
                >
                  {copiedId === card.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Golden Rule */}
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                <span className="font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-widest text-[10px]">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  DSE Core Golden Rule:
                </span>
                <p className="text-slate-800 font-medium leading-relaxed">{card.goldenRule}</p>
              </div>

              {/* Exam Pitfall */}
              <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs space-y-1.5">
                <span className="font-bold text-amber-400 flex items-center gap-1.5 uppercase tracking-widest text-[10px]">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Exam Trap Alert:
                </span>
                <p className="text-slate-200 whitespace-pre-line leading-relaxed">{card.dsePitfall}</p>
              </div>
            </div>

            {/* Keyword Tags */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {card.keywords.map((kw, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono border border-slate-200">
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

