import React, { useState, useEffect } from 'react';
import { DSE_QUESTIONS } from '../data/dseQuestionsData';
import { DSEQuestion, ConceptId, UserAnswerRecord } from '../types';
import { 
  CheckCircle2, XCircle, HelpCircle, Award, Clock, ArrowRight, ArrowLeft, 
  RotateCcw, Sparkles, Filter, Check, FileText, ChevronDown, ChevronUp, AlertCircle, BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

interface Props {
  initialConceptFilter?: ConceptId | 'all';
  onUpdateStats: (record: UserAnswerRecord) => void;
}

export const PracticeZone: React.FC<Props> = ({ 
  initialConceptFilter = 'all',
  onUpdateStats 
}) => {
  const [activeTab, setActiveTab] = useState<'mc' | 'structured' | 'exam'>('mc');
  const [selectedConcept, setSelectedConcept] = useState<ConceptId | 'all'>(initialConceptFilter);
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  // MC Practice State
  const [mcIndex, setMcIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [hasSubmittedMC, setHasSubmittedMC] = useState<boolean>(false);
  const [mcAnswersRecord, setMcAnswersRecord] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});

  // Structured Question State
  const [structuredIndex, setStructuredIndex] = useState<number>(0);
  const [studentTextAnswer, setStudentTextAnswer] = useState<string>('');
  const [isMarked, setIsMarked] = useState<boolean>(false);
  const [awardedMarks, setAwardedMarks] = useState<number>(0);
  const [pointChecklist, setPointChecklist] = useState<boolean[]>([]);
  const [showModelAnswer, setShowModelAnswer] = useState<boolean>(false);

  // Filtered Question lists
  const mcQuestions = DSE_QUESTIONS.filter(q => {
    const isMC = q.paper === 'Paper 1 (MC)';
    const matchConcept = selectedConcept === 'all' || q.concept === selectedConcept;
    const matchYear = selectedYear === 'all' || q.year === selectedYear;
    return isMC && matchConcept && matchYear;
  });

  const structuredQuestions = DSE_QUESTIONS.filter(q => {
    const isStruct = q.paper === 'Paper 2 (Structured)';
    const matchConcept = selectedConcept === 'all' || q.concept === selectedConcept;
    const matchYear = selectedYear === 'all' || q.year === selectedYear;
    return isStruct && matchConcept && matchYear;
  });

  const currentMC = mcQuestions[mcIndex] || mcQuestions[0];
  const currentStructured = structuredQuestions[structuredIndex] || structuredQuestions[0];

  // Handle MC Submit
  const handleMCSelect = (opt: 'A' | 'B' | 'C' | 'D') => {
    if (hasSubmittedMC) return;
    setSelectedOption(opt);
    setHasSubmittedMC(true);
    setMcAnswersRecord(prev => ({ ...prev, [currentMC.id]: opt }));

    const isCorrect = opt === currentMC.correctOption;
    if (isCorrect) {
      confetti({ particleCount: 35, spread: 60, origin: { y: 0.8 } });
    }

    onUpdateStats({
      questionId: currentMC.id,
      userMCAnswer: opt,
      totalMarks: 1,
      marksAwarded: isCorrect ? 1 : 0,
      isCorrect,
      timestamp: Date.now()
    });
  };

  const nextMC = () => {
    if (mcIndex < mcQuestions.length - 1) {
      setMcIndex(prev => prev + 1);
      setSelectedOption(mcAnswersRecord[mcQuestions[mcIndex + 1]?.id] || null);
      setHasSubmittedMC(Boolean(mcAnswersRecord[mcQuestions[mcIndex + 1]?.id]));
    }
  };

  const prevMC = () => {
    if (mcIndex > 0) {
      setMcIndex(prev => prev - 1);
      setSelectedOption(mcAnswersRecord[mcQuestions[mcIndex - 1]?.id] || null);
      setHasSubmittedMC(Boolean(mcAnswersRecord[mcQuestions[mcIndex - 1]?.id]));
    }
  };

  // Structured Automated Rubric Evaluation
  const evaluateStructuredAnswer = () => {
    if (!currentStructured) return;
    const userText = studentTextAnswer.toLowerCase();
    
    // Check points matching
    const matchedPoints = currentStructured.markingScheme.map(item => {
      // Check if any keyword or criteria chunk appears in user answer
      return item.keywords.some(kw => userText.includes(kw.toLowerCase()));
    });

    const calculatedMarks = matchedPoints.filter(Boolean).length;
    setPointChecklist(matchedPoints);
    setAwardedMarks(calculatedMarks);
    setIsMarked(true);
    setShowModelAnswer(true);

    if (calculatedMarks === currentStructured.totalMarks) {
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.7 } });
    }

    onUpdateStats({
      questionId: currentStructured.id,
      userTextAnswer: studentTextAnswer,
      totalMarks: currentStructured.totalMarks,
      marksAwarded: calculatedMarks,
      markedPoints: matchedPoints,
      timestamp: Date.now()
    });
  };

  const togglePointCheck = (index: number) => {
    const newPoints = [...pointChecklist];
    newPoints[index] = !newPoints[index];
    setPointChecklist(newPoints);
    const newTotal = newPoints.filter(Boolean).length;
    setAwardedMarks(newTotal);
  };

  return (
    <div className="space-y-6">
      {/* Top Tabs & Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
        {/* Practice Mode Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg">
          <button
            onClick={() => setActiveTab('mc')}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'mc'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Paper 1 (Multiple Choice)</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
              activeTab === 'mc' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-200 text-slate-700'
            }`}>
              {mcQuestions.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('structured')}
            className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'structured'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>Paper 2 (Marking Rubrics)</span>
            <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
              activeTab === 'structured' ? 'bg-emerald-500 text-slate-950' : 'bg-slate-200 text-slate-700'
            }`}>
              {structuredQuestions.length}
            </span>
          </button>
        </div>

        {/* Filter by Concept Selector */}
        <div className="flex items-center gap-2 text-xs">
          <Filter className="w-3.5 h-3.5 text-slate-500" />
          <select
            value={selectedConcept}
            onChange={e => {
              setSelectedConcept(e.target.value as ConceptId | 'all');
              setMcIndex(0);
              setStructuredIndex(0);
            }}
            aria-label="Filter questions by concept"
            className="px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 bg-white font-medium focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            <option value="all">All Topics</option>
            <option value="scarcity">Scarcity & Choice</option>
            <option value="opportunity-cost">Opportunity Cost</option>
            <option value="goods-type">Free vs Economic Goods</option>
            <option value="competition">Competition & Discrimination</option>
            <option value="statements">Positive vs Normative Statements</option>
            <option value="interest-flow">Interest & Circular Flow</option>
          </select>
        </div>
      </div>

      {/* ======================================================== */}
      {/* TAB 1: PAPER 1 MULTIPLE CHOICE PRACTICE                 */}
      {/* ======================================================== */}
      {activeTab === 'mc' && currentMC && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Question Card */}
          <div className="lg:col-span-8 bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
            {/* Question Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-slate-900 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded">
                  HKDSE {currentMC.questionRef}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Topic: {currentMC.topicTitle}
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400">
                Question {mcIndex + 1} of {mcQuestions.length}
              </span>
            </div>

            {/* Question Stem */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 leading-relaxed">
                {currentMC.questionText}
              </h3>

              {/* Numbered Statements if present */}
              {currentMC.statements && currentMC.statements.length > 0 && (
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs font-medium text-slate-800">
                  {currentMC.statements.map((st, i) => (
                    <div key={i} className="leading-relaxed">
                      {st}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* MCQ Options */}
            <div className="space-y-2.5 pt-1">
              {currentMC.options?.map(option => {
                const isUserChoice = selectedOption === option.id;
                const isCorrect = option.id === currentMC.correctOption;

                let optionStyle = 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 cursor-pointer';
                if (hasSubmittedMC) {
                  if (isCorrect) {
                    optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400';
                  } else if (isUserChoice && !isCorrect) {
                    optionStyle = 'bg-rose-50 border-rose-500 text-rose-950 font-bold ring-1 ring-rose-400';
                  } else {
                    optionStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-500';
                  }
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleMCSelect(option.id)}
                    disabled={hasSubmittedMC}
                    className={`w-full p-4 rounded-lg text-left border transition-all flex items-start gap-3.5 ${optionStyle}`}
                  >
                    <div
                      className={`w-7 h-7 rounded flex items-center justify-center font-bold text-xs shrink-0 ${
                        hasSubmittedMC && isCorrect
                          ? 'bg-emerald-600 text-white'
                          : hasSubmittedMC && isUserChoice && !isCorrect
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      {option.id}
                    </div>
                    <div className="text-xs font-semibold pt-1 leading-snug">
                      {option.text}
                    </div>
                    {hasSubmittedMC && isCorrect && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 ml-auto shrink-0 mt-0.5" />
                    )}
                    {hasSubmittedMC && isUserChoice && !isCorrect && (
                      <XCircle className="w-4 h-4 text-rose-600 ml-auto shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Question Navigation Controls */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={prevMC}
                disabled={mcIndex === 0}
                className="px-4 py-2 rounded-lg text-xs font-bold border border-slate-200 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 text-slate-700 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={nextMC}
                disabled={mcIndex === mcQuestions.length - 1}
                className="px-5 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Next Question</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </div>

          {/* Right: Explanation & Examiner Rationale Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                HKEAA Detailed Rationale & Distractor Analysis
              </h4>

              {hasSubmittedMC ? (
                <div className="mt-4 space-y-3 text-xs leading-relaxed">
                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Correct Answer:</span>
                    <span className="text-base font-bold text-emerald-400">
                      Option {currentMC.correctOption}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-slate-300">
                    <strong className="text-white block">Economic Logic:</strong>
                    <p>{currentMC.explanation}</p>
                  </div>

                  {currentMC.examinerReportTip && (
                    <div className="p-3 bg-slate-800/90 border border-amber-500/40 rounded-lg text-amber-200 space-y-1">
                      <strong className="text-amber-400 flex items-center gap-1 uppercase tracking-wider text-[10px]">
                        <AlertCircle className="w-3.5 h-3.5" />
                        Examiner Report Pitfall:
                      </strong>
                      <p className="text-[11px] leading-relaxed text-slate-300">{currentMC.examinerReportTip}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mt-6 text-center py-8 text-slate-400 text-xs">
                  <HelpCircle className="w-8 h-8 mx-auto text-slate-600 mb-2" />
                  Select an answer option to reveal the full economic reasoning, distractor breakdown, and examiner feedback.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* TAB 2: PAPER 2 STRUCTURED QUESTIONS & MARKING SYSTEM     */}
      {/* ======================================================== */}
      {activeTab === 'structured' && currentStructured && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Question Prompt & Student Answer Workspace */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-slate-900 text-emerald-400 text-xs font-bold uppercase tracking-wider rounded">
                  {currentStructured.questionRef}
                </span>
                <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {currentStructured.totalMarks} Marks
                </span>
              </div>
              <span className="text-xs font-bold text-slate-400">
                Question {structuredIndex + 1} of {structuredQuestions.length}
              </span>
            </div>

            {/* Question Text */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900 whitespace-pre-line leading-relaxed">
                {currentStructured.questionText}
              </h3>
            </div>

            {/* Answer Input Textarea */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Write Your Answer / Explanation:
                </label>
                <span className="text-[11px] text-slate-400 font-mono">
                  {studentTextAnswer.length} characters
                </span>
              </div>
              <textarea
                value={studentTextAnswer}
                onChange={e => setStudentTextAnswer(e.target.value)}
                placeholder="Type your explanation using economic terms (e.g. scarce resources with alternative uses, opportunity cost in production, value of chosen option...)"
                rows={5}
                className="w-full p-3.5 rounded-lg border border-slate-300 text-xs text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none leading-relaxed"
              />
            </div>

            {/* Evaluation Action Button */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={evaluateStructuredAnswer}
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-lg shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                Grade with HKEAA Rubric
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (structuredIndex > 0) {
                      setStructuredIndex(prev => prev - 1);
                      setStudentTextAnswer('');
                      setIsMarked(false);
                      setShowModelAnswer(false);
                    }
                  }}
                  disabled={structuredIndex === 0}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-50 disabled:opacity-30 cursor-pointer"
                >
                  Prev
                </button>
                <button
                  onClick={() => {
                    if (structuredIndex < structuredQuestions.length - 1) {
                      setStructuredIndex(prev => prev + 1);
                      setStudentTextAnswer('');
                      setIsMarked(false);
                      setShowModelAnswer(false);
                    }
                  }}
                  disabled={structuredIndex === structuredQuestions.length - 1}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-bold hover:bg-slate-50 disabled:opacity-30 cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          {/* Right: Step-by-Step Marking System & Model Answer */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-400" />
                  Official HKEAA Marking System
                </h4>
                {isMarked && (
                  <div className="px-2 py-0.5 bg-emerald-500 text-slate-950 font-mono font-bold text-xs rounded">
                    {awardedMarks} / {currentStructured.totalMarks} Marks
                  </div>
                )}
              </div>

              {/* Rubric Points Checklist */}
              <div className="space-y-2 pt-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Step-by-Step Mark Allocation Criteria:
                </div>

                {currentStructured.markingScheme.map((item, idx) => {
                  const checked = pointChecklist[idx];
                  return (
                    <div
                      key={idx}
                      onClick={() => isMarked && togglePointCheck(idx)}
                      className={`p-3 rounded-lg border text-xs transition-all cursor-pointer ${
                        checked
                          ? 'bg-slate-800 border-emerald-500 text-white'
                          : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <div
                            className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-[10px] font-bold shrink-0 ${
                              checked ? 'bg-emerald-500 text-slate-950' : 'border border-slate-500'
                            }`}
                          >
                            {checked ? '✓' : ''}
                          </div>
                          <div>
                            <span className="font-bold text-white">
                              Point #{item.pointNumber} [{item.mark} Mark]:
                            </span>
                            <p className="mt-0.5 text-slate-300 text-[11px] leading-relaxed">{item.criteria}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 font-bold shrink-0">
                          +{item.mark}M
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Model Answer Drawer */}
              <div className="pt-2 border-t border-slate-800 space-y-2">
                <button
                  onClick={() => setShowModelAnswer(!showModelAnswer)}
                  className="w-full flex items-center justify-between text-xs font-bold text-slate-300 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <span>View Official Model Answer & Scoring Guide</span>
                  {showModelAnswer ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {showModelAnswer && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-xs space-y-3"
                    >
                      <div>
                        <span className="text-emerald-400 font-bold block text-[11px] uppercase tracking-wider">English Model Answer:</span>
                        <p className="text-slate-200 mt-1 whitespace-pre-line leading-relaxed">{currentStructured.modelAnswer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

