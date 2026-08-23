export type ConceptId = 
  | 'scarcity'
  | 'opportunity-cost'
  | 'competition'
  | 'goods-type'
  | 'statements'
  | 'interest-flow';

export interface ConceptItem {
  id: ConceptId;
  title: string;
  titleZh: string;
  shortDesc: string;
  dseDefinition: string;
  dseDefinitionZh: string;
  keyPoints: {
    title: string;
    description: string;
    examTip?: string;
  }[];
  realExamples: {
    context: string;
    contextZh: string;
    explanation: string;
    hkContext: boolean;
  }[];
  commonTraps: {
    misconception: string;
    correction: string;
  }[];
  goldenPhrases: string[];
}

export type QuestionType = 'mc' | 'structured';

export interface MCOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface DSEQuestion {
  id: string;
  year: number;
  paper: 'Paper 1 (MC)' | 'Paper 2 (Structured)';
  questionRef: string;
  concept: ConceptId;
  topicTitle: string;
  questionText: string;
  questionTextZh?: string;
  statements?: string[];
  options?: MCOption[];
  correctOption?: 'A' | 'B' | 'C' | 'D';
  totalMarks: number;
  markingScheme: {
    pointNumber: number;
    mark: number;
    criteria: string;
    criteriaZh?: string;
    keywords: string[];
  }[];
  modelAnswer: string;
  modelAnswerZh?: string;
  explanation: string;
  examinerReportTip?: string;
}

export interface UserAnswerRecord {
  questionId: string;
  userMCAnswer?: 'A' | 'B' | 'C' | 'D';
  userTextAnswer?: string;
  marksAwarded?: number;
  totalMarks: number;
  isCorrect?: boolean;
  markedPoints?: boolean[];
  timestamp: number;
}

export interface PerformanceStats {
  totalAttempted: number;
  correctMC: number;
  totalMC: number;
  scoredMarks: number;
  totalStructuredMarks: number;
  conceptMastery: Record<ConceptId, { correct: number; total: number }>;
}
