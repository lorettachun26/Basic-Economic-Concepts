import React, { useState, useEffect } from 'react';
import { MainNavTab, Navbar } from './components/Navbar';
import { ConceptGuide } from './components/ConceptGuide';
import { CostSimulator } from './components/CostSimulator';
import { GoodsClassifier } from './components/GoodsClassifier';
import { StatementLab } from './components/StatementLab';
import { PracticeZone } from './components/PracticeZone';
import { RevisionNotes } from './components/RevisionNotes';
import { ConceptId, UserAnswerRecord } from './types';
import { Sparkles, Trophy, BookOpen, Calculator, Package, Scale, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('guide');
  const [initialConceptFilter, setInitialConceptFilter] = useState<ConceptId | 'all'>('all');
  
  // User Performance Statistics
  const [records, setRecords] = useState<UserAnswerRecord[]>(() => {
    try {
      const saved = localStorage.getItem('hkdse_econ_records');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('hkdse_econ_records', JSON.stringify(records));
    } catch (e) {
      console.error(e);
    }
  }, [records]);

  const handleUpdateStats = (record: UserAnswerRecord) => {
    setRecords(prev => {
      const filtered = prev.filter(r => r.questionId !== record.questionId);
      return [...filtered, record];
    });
  };

  const totalScore = records.reduce((acc, r) => acc + (r.marksAwarded || 0), 0);
  const totalMaxMarks = records.reduce((acc, r) => acc + (r.totalMarks || 1), 0);
  const accuracyPercentage = totalMaxMarks > 0 ? Math.round((totalScore / totalMaxMarks) * 100) : 0;

  // Grade Predictor based on HKEAA cut-offs
  let predictedLevel = 'Level 1';
  let levelColor = 'text-slate-600 bg-slate-100';
  if (accuracyPercentage >= 90) {
    predictedLevel = 'Level 5**';
    levelColor = 'text-amber-700 bg-amber-100 border-amber-300';
  } else if (accuracyPercentage >= 80) {
    predictedLevel = 'Level 5*';
    levelColor = 'text-amber-600 bg-amber-50 border-amber-200';
  } else if (accuracyPercentage >= 70) {
    predictedLevel = 'Level 5';
    levelColor = 'text-emerald-700 bg-emerald-100 border-emerald-300';
  } else if (accuracyPercentage >= 60) {
    predictedLevel = 'Level 4';
    levelColor = 'text-blue-700 bg-blue-100 border-blue-300';
  } else if (accuracyPercentage >= 50) {
    predictedLevel = 'Level 3';
    levelColor = 'text-purple-700 bg-purple-100 border-purple-300';
  } else if (accuracyPercentage >= 40) {
    predictedLevel = 'Level 2';
    levelColor = 'text-slate-700 bg-slate-200 border-slate-300';
  }

  const handleJumpToPractice = (conceptId: ConceptId) => {
    setInitialConceptFilter(conceptId);
    setActiveTab('practice');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        score={totalScore}
        totalAttempts={records.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AnimatePresence mode="wait">
          {activeTab === 'guide' && (
            <motion.div
              key="guide"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <ConceptGuide
                onSelectPracticeConcept={handleJumpToPractice}
              />
            </motion.div>
          )}

          {activeTab === 'simulator' && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <CostSimulator />
            </motion.div>
          )}

          {activeTab === 'goods' && (
            <motion.div
              key="goods"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <GoodsClassifier />
            </motion.div>
          )}

          {activeTab === 'statements' && (
            <motion.div
              key="statements"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <StatementLab />
            </motion.div>
          )}

          {activeTab === 'practice' && (
            <motion.div
              key="practice"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <PracticeZone
                initialConceptFilter={initialConceptFilter}
                onUpdateStats={handleUpdateStats}
              />
            </motion.div>
          )}

          {activeTab === 'revision' && (
            <motion.div
              key="revision"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
            >
              <RevisionNotes />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global DSE Performance Diagnostic Bar - Geometric Balance Theme */}
        {records.length > 0 && (
          <div className="mt-8 p-6 rounded-xl bg-slate-900 text-white border border-slate-800 shadow-lg">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center font-bold shrink-0">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider rounded">
                      Performance Hub
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      HKDSE Exam Readiness Diagnostic
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Completed {records.length} DSE Questions • Scored {totalScore} / {totalMaxMarks} Marks ({accuracyPercentage}% Accuracy)
                  </p>
                </div>
              </div>

              {/* Geometric Progress & Stats Hub */}
              <div className="w-full lg:w-auto flex flex-wrap sm:flex-nowrap items-center gap-4">
                <div className="w-full sm:w-48 bg-slate-800 p-3 rounded-lg border border-slate-700/60">
                  <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400 mb-1">
                    <span>Mastery Score</span>
                    <span className="text-emerald-400 font-mono">{accuracyPercentage}%</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-400 h-full transition-all duration-500" 
                      style={{ width: `${Math.min(100, Math.max(0, accuracyPercentage))}%` }} 
                    />
                  </div>
                </div>

                <div className="p-3 bg-slate-800 rounded-lg border border-slate-700/60 text-center min-w-[110px]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Predicted Grade
                  </span>
                  <span className="inline-block mt-0.5 text-sm font-black text-emerald-400 font-mono">
                    {predictedLevel}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setRecords([]);
                    localStorage.removeItem('hkdse_econ_records');
                  }}
                  className="px-3 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-xs text-slate-400 hover:text-slate-200 font-medium transition-all cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Geometric Footer */}
      <footer className="mt-12 bg-slate-100 border-t border-slate-200 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-medium text-slate-500 uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <span>Topic A: Basic Concepts</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Curriculum: HKDSE 2025/26</span>
        </div>
        <div>
          <span>HK Curriculum & Assessment Reference</span>
        </div>
      </footer>
    </div>
  );
}

