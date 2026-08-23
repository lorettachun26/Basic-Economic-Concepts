import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, Sparkles, Scale, Search, ArrowRight, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

interface StatementItem {
  id: string;
  text: string;
  type: 'Positive' | 'Normative';
  triggerWords: string[];
  refutableCondition: string;
  source: string;
  explanation: string;
}

const PRESET_STATEMENTS: StatementItem[] = [
  {
    id: 's1',
    text: "Hong Kong's Gini coefficient is the highest in Asia.",
    type: 'Positive',
    triggerWords: ['is the highest', 'Gini coefficient'],
    refutableCondition: 'Can be checked and rejected by comparing official national statistical publications in Asian economies.',
    source: '2021 DSE Paper 1 Q1 (Mary\'s Statement)',
    explanation: 'This statement makes an objective assertion about real-world statistical rankings. Even if empirical data proves Hong Kong is NOT the highest, it is STILL a positive statement because it is testable/refutable by fact.'
  },
  {
    id: 's2',
    text: "As a developed economy, Hong Kong's Gini coefficient is too high.",
    type: 'Normative',
    triggerWords: ['too high', 'as a developed economy'],
    refutableCondition: 'Cannot be proven or disproven by facts because "too high" is a subjective value judgment.',
    source: '2021 DSE Paper 1 Q1 (Peter\'s Statement)',
    explanation: 'The phrase "too high" expresses an ethical/subjective judgment of what level of income inequality is morally or socially acceptable. Disagreements cannot be resolved by economic statistics alone.'
  },
  {
    id: 's3',
    text: 'Less low-skilled workers will be unemployed after the imposition of a minimum wage.',
    type: 'Positive',
    triggerWords: ['will be unemployed', 'after the imposition'],
    refutableCondition: 'Can be tested by observing employment statistics before and after the policy implementation.',
    source: '2012 DSE Paper 1 Q1 (Statement 2)',
    explanation: 'Although conventional economic theory predicts that minimum wage may increase unemployment, this statement is a testable causal hypothesis. A statement that contradicts theory or is factually incorrect remains positive!'
  },
  {
    id: 's4',
    text: 'The government should continue to attract Mainland enterprises to invest in Hong Kong.',
    type: 'Normative',
    triggerWords: ['should continue', 'attract'],
    refutableCondition: 'Involves policy recommendations and value priorities that cannot be settled by empirical facts.',
    source: '2024 DSE Paper 1 Q4',
    explanation: 'The word "should" indicates a policy recommendation based on the speaker\'s subjective priorities and value judgments.'
  },
  {
    id: 's5',
    text: 'Promoting tourism is the most appropriate way to stimulate economic growth.',
    type: 'Normative',
    triggerWords: ['most appropriate', 'best'],
    refutableCondition: '"Most appropriate" implies a value judgment weighting various societal trade-offs.',
    source: '2024 DSE Paper 1 Q4',
    explanation: 'Determining which method is "most appropriate" involves evaluating differing social priorities and ethical value weights, which cannot be tested as a pure positive fact.'
  },
  {
    id: 's6',
    text: 'The introduction of a Short-Term Capital Gains Tax (STCGT) would not relieve rising property prices.',
    type: 'Positive',
    triggerWords: ['would not relieve', 'rising property prices'],
    refutableCondition: 'Can be tested against real-world property transaction volume and price index trends following tax enactment.',
    source: '2022 DSE Paper 2 A5(b)',
    explanation: 'This statement predicts the economic outcome/causal effect of a taxation policy on price movements, which is an empirical hypothesis testable by data.'
  }
];

const NORMATIVE_KEYWORDS = [
  'should', 'ought to', 'must', 'better', 'worse', 'too high', 'too low', 
  'fair', 'unfair', 'good', 'bad', 'desirable', 'undesirable', 'most appropriate', 
  'best', 'worst', 'right', 'wrong'
];

export const StatementLab: React.FC = () => {
  const [selectedStatement, setSelectedStatement] = useState<StatementItem>(PRESET_STATEMENTS[0]);
  const [userGuess, setUserGuess] = useState<'Positive' | 'Normative' | null>(null);
  const [customInput, setCustomInput] = useState<string>('');
  const [customAnalysis, setCustomAnalysis] = useState<{
    type: 'Positive' | 'Normative';
    detectedKeywords: string[];
    reasoning: string;
  } | null>(null);

  const handleSelect = (item: StatementItem) => {
    setSelectedStatement(item);
    setUserGuess(null);
  };

  const handleCustomAnalyze = () => {
    if (!customInput.trim()) return;

    const lower = customInput.toLowerCase();
    const foundKeywords = NORMATIVE_KEYWORDS.filter(kw => lower.includes(kw.toLowerCase()));

    if (foundKeywords.length > 0) {
      setCustomAnalysis({
        type: 'Normative',
        detectedKeywords: foundKeywords,
        reasoning: `Contains value-judgment / prescriptive indicator words (${foundKeywords.map(k => `"${k}"`).join(', ')}). It expresses subjective opinions or policy prescriptions that cannot be tested by empirical facts alone.`
      });
    } else {
      setCustomAnalysis({
        type: 'Positive',
        detectedKeywords: [],
        reasoning: 'Makes a factual, descriptive, or cause-and-effect assertion concerning "what is / was / will be". It can be subjected to empirical testing or refutation against real-world observations or data.'
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Header - Geometric Balance Slate & Emerald */}
      <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
          <Scale className="w-3.5 h-3.5" />
          HKDSE Epistemology & Scientific Method
        </div>
        <h2 className="text-2xl font-black tracking-tight text-white">
          Positive vs Normative Statement Laboratory
        </h2>
        <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
          Distinguish between <strong>testable empirical assertions (Positive)</strong> and <strong>subjective value judgments (Normative)</strong>. Master why <span className="text-emerald-400">a factually false statement can still be positive</span>!
        </p>
      </div>

      {/* Preset DSE Case Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {PRESET_STATEMENTS.map(item => {
          const isCurrent = item.id === selectedStatement.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`p-4 rounded-lg text-left border transition-all cursor-pointer ${
                isCurrent
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1">
                <span className={isCurrent ? 'text-slate-400' : 'text-slate-500'}>{item.source}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  item.type === 'Positive' 
                    ? (isCurrent ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-emerald-50 text-emerald-800 border border-emerald-200')
                    : (isCurrent ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' : 'bg-slate-100 text-slate-800 border border-slate-200')
                }`}>
                  {item.type}
                </span>
              </div>
              <p className={`text-xs font-semibold line-clamp-2 ${isCurrent ? 'text-white' : 'text-slate-800'}`}>
                "{item.text}"
              </p>
            </button>
          );
        })}
      </div>

      {/* Main Analysis Inspection Window */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Statement Dissection */}
        <div className="lg:col-span-7 bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Selected Statement Inspection ({selectedStatement.source})
            </span>
          </div>

          <div className="p-4 rounded-lg bg-slate-900 text-white font-serif text-base leading-relaxed border border-slate-800">
            "{selectedStatement.text}"
          </div>

          {/* Keyword Highlighting */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-emerald-600" />
              Linguistic Trigger & Indicator Analysis:
            </h4>
            <div className="flex flex-wrap gap-2">
              {selectedStatement.triggerWords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  Key Phrase: "{kw}"
                </span>
              ))}
            </div>
          </div>

          {/* Testability Criterion Box */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
            <div className="font-bold text-slate-900 flex items-center gap-1 uppercase tracking-wider text-[11px]">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              Scientific Testability / Refutability Criterion:
            </div>
            <p className="leading-relaxed">{selectedStatement.refutableCondition}</p>
          </div>
        </div>

        {/* Right: Interactive Classification & Model Reasoning */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Classify This Statement:
            </h4>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Is this a Positive Statement or a Normative Statement?
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <button
                onClick={() => setUserGuess('Positive')}
                className={`py-3 px-4 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  userGuess === 'Positive'
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                }`}
              >
                🔬 Positive
              </button>

              <button
                onClick={() => setUserGuess('Normative')}
                className={`py-3 px-4 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                  userGuess === 'Normative'
                    ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-sm'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
                }`}
              >
                ⚖️ Normative
              </button>
            </div>

            {/* Answer Feedback */}
            {userGuess && (
              <div
                className={`mt-4 p-4 rounded-lg border text-xs leading-relaxed ${
                  userGuess === selectedStatement.type
                    ? 'bg-slate-800 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-800 border-rose-500/50 text-rose-300'
                }`}
              >
                <div className="font-bold text-sm flex items-center gap-1.5 mb-1.5">
                  {userGuess === selectedStatement.type ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Correct! It is {selectedStatement.type}.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                      <span>Incorrect. It is {selectedStatement.type}.</span>
                    </>
                  )}
                </div>
                <p className="text-slate-200">{selectedStatement.explanation}</p>
              </div>
            )}
          </div>

          {/* DSE Golden Rule Box */}
          <div className="bg-slate-50 border-l-4 border-slate-900 border-r border-t border-b border-slate-200 rounded-r-xl p-4 text-xs text-slate-800 space-y-1.5 shadow-xs">
            <h5 className="font-bold flex items-center gap-1 text-slate-900 uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              HKDSE Key Exam Rule:
            </h5>
            <p>
              • <strong>Positive statements can be factually wrong:</strong> E.g. "The moon is made of green cheese" or "Unemployment in HK is 95%" are Positive statements because they can be tested and refuted by facts.
            </p>
            <p>
              • <strong>Normative statements cannot be settled by facts:</strong> E.g. "The government should lower tax rates" involves personal value judgments.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Custom Statement Testing Engine */}
      <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <h3 className="text-base font-bold text-slate-900">
            Interactive Custom Statement Analyzer
          </h3>
        </div>
        <p className="text-xs text-slate-600">
          Type or paste any economic statement in English to test its structure against positive/normative criteria:
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            value={customInput}
            onChange={e => setCustomInput(e.target.value)}
            placeholder="e.g. The government should subsidize university tuition to improve equality / Increasing tobacco tax will reduce smoking"
            className="flex-1 px-4 py-2.5 rounded-lg border border-slate-300 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            onKeyDown={e => {
              if (e.key === 'Enter') handleCustomAnalyze();
            }}
          />
          <button
            onClick={handleCustomAnalyze}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-all shrink-0 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Search className="w-4 h-4 text-emerald-400" />
            <span>Analyze Statement</span>
          </button>
        </div>

        {customAnalysis && (
          <div className="p-4 rounded-lg border text-xs bg-slate-900 text-white border-slate-800">
            <div className="flex items-center gap-2 font-bold text-sm">
              <span className="text-slate-300">Classification Verdict:</span>
              <span className={`px-2.5 py-0.5 rounded text-xs font-bold ${
                customAnalysis.type === 'Positive' ? 'bg-emerald-500 text-slate-950' : 'bg-amber-400 text-slate-950'
              }`}>
                {customAnalysis.type} Statement
              </span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-300">{customAnalysis.reasoning}</p>
          </div>
        )}
      </div>
    </div>
  );
};

