import { DSEQuestion } from '../types';

export const DSE_QUESTIONS: DSEQuestion[] = [
  // ==========================
  // PAPER 1: MULTIPLE CHOICE
  // ==========================
  {
    id: 'dse-2012-q1',
    year: 2012,
    paper: 'Paper 1 (MC)',
    questionRef: '2012 Q1',
    concept: 'statements',
    topicTitle: 'Positive vs Normative Statement',
    questionText: 'Which of the following statements are positive statements?',
    questionTextZh: '下列哪幾項是實證性陳述？',
    statements: [
      '(1) More workers will be employed on a part-time basis after the imposition of a minimum wage.',
      '(2) Less low skilled workers will be unemployed after the imposition of a minimum wage.',
      '(3) Meal times should be counted as working time in the calculation of a minimum wage.',
      '(4) The imposition of a minimum wage widens the income gap between the rich and the poor.'
    ],
    options: [
      { id: 'A', text: '(2) and (3) only' },
      { id: 'B', text: '(1) and (4) only' },
      { id: 'C', text: '(1), (2) and (3) only' },
      { id: 'D', text: '(1), (2) and (4) only' }
    ],
    correctOption: 'D',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Statements (1), (2), and (4) make cause-and-effect assertions testable against empirical data (even if economic theory suggests (2) is likely false, testability makes it positive). Statement (3) contains the value judgment word "should".',
        keywords: ['testable against facts', 'should is normative', 'positive can be false']
      }
    ],
    modelAnswer: 'D: Statements (1), (2), and (4) are refutable by facts. Statement (3) involves a value judgment.',
    explanation: 'Statements (1), (2), and (4) are all hypotheses about economic outcomes that can be tested with labour market data. Whether they are factually correct or incorrect does NOT change their positive nature. Statement (3) uses "should", which is a normative value judgment about what policy ought to be adopted.',
    examinerReportTip: 'A common mistake is thinking statement (2) is normative because economic theory predicts higher unemployment. Remember: a statement that is factually untrue is STILL a positive statement as long as it is refutable by facts!'
  },
  {
    id: 'dse-2012-q2',
    year: 2012,
    paper: 'Paper 1 (MC)',
    questionRef: '2012 Q2',
    concept: 'opportunity-cost',
    topicTitle: 'Opportunity Cost & Purchasing',
    questionText: 'Mr. Kwok plans to purchase a new racing car from a German automobile manufacturer and drive the car in Hong Kong. In which of the following situations will the cost of purchasing the racing car increase?',
    questionTextZh: '郭先生計劃向德國車廠購買一輛全新賽車並在香港駕駛。在下列哪種情況下，購買該賽車的成本會增加？',
    options: [
      { id: 'A', text: 'The first registration fee increases.' },
      { id: 'B', text: 'The price of gasoline increases.' },
      { id: 'C', text: 'The Euro depreciates against the Hong Kong dollar.' },
      { id: 'D', text: 'The racing car performs poorly.' }
    ],
    correctOption: 'A',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'First registration fee is an explicit monetary component of the full purchase cost of putting the car on HK roads. Gasoline is a cost of USING the car, not purchasing it.',
        keywords: ['first registration fee', 'cost of purchase', 'gasoline is cost of use']
      }
    ],
    modelAnswer: 'A: The first registration fee increases the monetary purchase cost of the car in Hong Kong.',
    explanation: 'Option A: The first registration tax is a direct cost incurred to purchase and license the car for Hong Kong roads. Option B: Price of gasoline is the cost of USING/driving the car, not the cost of purchasing it. Option C: Euro depreciation makes purchasing cheaper in HKD. Option D: Poor performance reduces the value/benefit of the car, not its purchasing cost.',
    examinerReportTip: 'Be careful to distinguish the cost of *purchasing* a good from the cost of *using/operating* it!'
  },
  {
    id: 'dse-2012-q3',
    year: 2012,
    paper: 'Paper 1 (MC)',
    questionRef: '2012 Q3',
    concept: 'interest-flow',
    topicTitle: 'Nature of Interest',
    questionText: 'Which of the following statements about interest is correct?',
    questionTextZh: '下列哪一項關於利息的陳述是正確的？',
    options: [
      { id: 'A', text: 'People will reduce current consumption when the interest rate drops.' },
      { id: 'B', text: 'The interest rate will be zero if there is no inflation.' },
      { id: 'C', text: 'Interest does not exist in a planned economy.' },
      { id: 'D', text: 'Interest still exists without money.' }
    ],
    correctOption: 'D',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Interest is the cost of earlier availability of resources; it exists in a barter economy whenever physical goods are borrowed and returned.',
        keywords: ['earlier availability', 'exists without money', 'barter economy']
      }
    ],
    modelAnswer: 'D: Interest still exists without money (it is the premium for earlier availability in any intertemporal exchange).',
    explanation: 'Interest is an economic phenomenon resulting from time preference (people prefer present goods to future goods). In a barter economy without money or inflation, interest still exists in terms of physical goods (e.g. borrowing a sack of rice today and repaying 1.1 sacks in the future).',
    examinerReportTip: 'Always remember: Interest does NOT depend on money, banks, or inflation. It stems from positive time preference.'
  },
  {
    id: 'dse-2013-q2',
    year: 2013,
    paper: 'Paper 1 (MC)',
    questionRef: '2013 Q2',
    concept: 'opportunity-cost',
    topicTitle: 'Opportunity Cost of Time & Events',
    questionText: 'Jeremy is going to watch a tennis match in which Li Na (李娜), a Grand Slam winner, will play. Which of the following will increase the cost to Jeremy of watching the tennis match?',
    questionTextZh: 'Jeremy 打算觀看大滿貫冠軍李娜作賽的網球賽事。下列哪一項會增加 Jeremy 觀看該網球賽事的成本？',
    options: [
      { id: 'A', text: 'He is 30 minutes late for the match due to traffic congestion.' },
      { id: 'B', text: 'His view is blocked by the spectators in front of him.' },
      { id: 'C', text: 'Due to a rainstorm, the match is extended by an hour.' },
      { id: 'D', text: 'Li Na is injured and does not show up for the match.' }
    ],
    correctOption: 'C',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'The match extending by an hour requires Jeremy to spend an extra hour watching the match, forgoing the value of whatever he could have done during that additional hour.',
        keywords: ['extra hour', 'more time spent', 'forgone value of time']
      }
    ],
    modelAnswer: 'C: When the match is extended by an hour, Jeremy must forgo more valuable time for other alternatives.',
    explanation: 'Option C: An extra hour of match time increases the time sacrificed (higher time cost). Options A, B, and D affect the enjoyment or value of the CHOSEN option (watching the match), but do not increase the opportunity cost of watching it.',
    examinerReportTip: 'Classic DSE trap: Lowering the value or quality of the chosen option does NOT increase its opportunity cost!'
  },
  {
    id: 'dse-2014-q1',
    year: 2014,
    paper: 'Paper 1 (MC)',
    questionRef: '2014 Q1',
    concept: 'opportunity-cost',
    topicTitle: 'Manchester United Pitch Opportunity Cost',
    questionText: 'A famous football team, Manchester United, visited Hong Kong for a friendly match. The day before the match, the team found the pitch in the Hong Kong Stadium had been damaged by prolonged rain and it considered cancelling the match. The opportunity cost for Manchester United to continue playing in such a poor pitch would __________ because __________.',
    questionTextZh: '著名足球隊曼聯訪港進行友誼賽。賽前一天發現大球場草地因連場大雨受損。曼聯在該劣質草地繼續作賽的機會成本會________，因為________。',
    options: [
      { id: 'A', text: 'increase … there was a higher chance for the players to get injured' },
      { id: 'B', text: 'increase … the team was likely to have poor performance' },
      { id: 'C', text: 'remain unchanged … the expenses on the visit to Hong Kong had already been paid' },
      { id: 'D', text: 'remain unchanged … the players spent the same amount of time in Hong Kong' }
    ],
    correctOption: 'A',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Injury risks mean forgoing healthy player availability for upcoming competitive league matches, which represents an increase in the value of forgone alternatives.',
        keywords: ['higher chance of injury', 'value forgone increases', 'opportunity cost increases']
      }
    ],
    modelAnswer: 'A: increase ... there was a higher chance for the players to get injured.',
    explanation: 'Playing on a damaged pitch increases the probability of player injury, risking their ability to play in future lucrative tournaments (higher value of alternatives forgone). Past visit expenses (Option C) are sunk costs.',
    examinerReportTip: 'Remember that risk of damage/injury to productive assets constitutes a genuine opportunity cost increase.'
  },
  {
    id: 'dse-2015-q3',
    year: 2015,
    paper: 'Paper 1 (MC)',
    questionRef: '2015 Q3',
    concept: 'goods-type',
    topicTitle: 'Definition of Economic Good',
    questionText: 'An economic good',
    questionTextZh: '經濟物品是',
    options: [
      { id: 'A', text: 'is a good with its demand greater than its supply.' },
      { id: 'B', text: 'brings us more satisfaction than a free good.' },
      { id: 'C', text: 'is a good whose quantity available cannot satisfy human wants at zero price.' },
      { id: 'D', text: 'cannot be found free of charge in any economy.' }
    ],
    correctOption: 'C',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'By definition, an economic good is scarce: quantity available is insufficient to satisfy all human wants at zero price (more is preferred).',
        keywords: ['cannot satisfy human wants at zero price', 'scarcity definition']
      }
    ],
    modelAnswer: 'C: is a good whose quantity available cannot satisfy human wants at zero price.',
    explanation: 'Option C is the exact HKDSE definition of an economic good. Option A is incorrect because in equilibrium demand equals supply at the market price. Option B is incorrect because satisfaction comparison is invalid (free goods like oxygen give vital utility). Option D is incorrect because economic goods can be given away free of charge (e.g. free promotional samples).',
    examinerReportTip: 'Do not confuse "quantity demanded > quantity supplied at zero price" with "demand greater than supply". Option C expresses scarcity rigorously.'
  },
  {
    id: 'dse-2016-q1',
    year: 2016,
    paper: 'Paper 1 (MC)',
    questionRef: '2016 Q1',
    concept: 'competition',
    topicTitle: 'Competition for Economic Goods',
    questionText: 'Which of the following statements about economic goods is correct?',
    questionTextZh: '下列哪一項關於經濟物品的陳述是正確的？',
    options: [
      { id: 'A', text: 'Economic goods may not be scarce.' },
      { id: 'B', text: 'People compete for economic goods.' },
      { id: 'C', text: 'People prefer economic goods to free goods.' },
      { id: 'D', text: 'People compete for both economic goods and free goods.' }
    ],
    correctOption: 'B',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Economic goods are scarce, and scarcity always leads to competition among people wanting more of them.',
        keywords: ['compete for economic goods', 'scarcity implies competition']
      }
    ],
    modelAnswer: 'B: People compete for economic goods.',
    explanation: 'Because economic goods are scarce (quantity available is insufficient to satisfy wants at zero price), competition inevitably arises. Free goods are superabundant at zero price, so people do not compete for free goods (reject D).',
    examinerReportTip: 'People never compete for free goods because anyone can obtain all they want at zero price without hindering others.'
  },
  {
    id: 'dse-2018-q3',
    year: 2018,
    paper: 'Paper 1 (MC)',
    questionRef: '2018 Q3',
    concept: 'opportunity-cost',
    topicTitle: 'Opportunity Cost of Studying in HK',
    questionText: 'John, a Secondary 6 graduate, is considering studying a programme either in Hong Kong or the Mainland. Which of the following situations would lower his opportunity cost of studying the programme in Hong Kong?',
    questionTextZh: '中六畢業生 John 正考慮在香港或內地修讀課程。下列哪種情況會降低他在香港修讀課程的機會成本？',
    statements: [
      '(1) His tuition fee of the first year will be waived if he studies the programme in Hong Kong.',
      '(2) The graduates of the Mainland programme have better job prospects.',
      '(3) The qualification of the Mainland programme may not be recognized in Hong Kong.'
    ],
    options: [
      { id: 'A', text: '(1) and (2) only' },
      { id: 'B', text: '(1) and (3) only' },
      { id: 'C', text: '(2) and (3) only' },
      { id: 'D', text: '(1), (2) and (3)' }
    ],
    correctOption: 'B',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: '(1) Waiving HK tuition lowers explicit out-of-pocket cost of choosing HK. (3) Lower recognition of the Mainland programme reduces the value of the forgone option (studying in Mainland). Both reduce the opportunity cost of studying in HK.',
        keywords: ['(1) reduces explicit cost', '(3) reduces value of forgone Mainland option']
      }
    ],
    modelAnswer: 'B: (1) and (3) only.',
    explanation: 'Opportunity cost of studying in HK = HK Tuition + Value of studying in Mainland. (1) Waiving tuition directly reduces monetary cost. (3) If the Mainland programme qualification is not recognized, the value of the forgone alternative (Mainland study) falls, lowering the cost of choosing HK. Statement (2) increases the value of Mainland study, which would INCREASE the cost of choosing HK.',
    examinerReportTip: 'Remember: Opportunity Cost of Choice X = Direct/explicit expenditure of X + Value of forgone alternative Y!'
  },
  {
    id: 'dse-2019-q3',
    year: 2019,
    paper: 'Paper 1 (MC)',
    questionRef: '2019 Q3',
    concept: 'opportunity-cost',
    topicTitle: 'Sunk Cost & Second-Hand Car Cost',
    questionText: 'Mr Lo spent $60,000 on buying a second hand car three years ago. Suppose he can resell the car at $2,000. Alternatively, he needs to spend $5,000 on repairing the car before he can continue to use it. What is his cost of continuing to use the car?',
    questionTextZh: '盧先生3年前花費$60,000購入一部二手車。假設他現在可以$2,000轉售該車。若繼續使用，他需先支付$5,000維修費。他繼續使用該車的成本是多少？',
    options: [
      { id: 'A', text: '$2 000' },
      { id: 'B', text: '$5 000' },
      { id: 'C', text: '$7 000' },
      { id: 'D', text: '$60 000' }
    ],
    correctOption: 'C',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Cost of continuing to use the car = Forgone resale value ($2,000) + Necessary repair expense ($5,000) = $7,000. The past $60,000 is a sunk cost.',
        keywords: ['$2,000 resale forgone', '$5,000 repair cost', '$7,000 total', '$60,000 is sunk']
      }
    ],
    modelAnswer: 'C: $7,000 ($2,000 resale revenue forgone + $5,000 repair cost).',
    explanation: 'The $60,000 spent 3 years ago is a sunk cost and cannot be recovered, so it is ignored. If Mr Lo continues using the car, he gives up the $2,000 cash from selling it AND must pay $5,000 in repair fees. Full opportunity cost = $2,000 + $5,000 = $7,000.',
    examinerReportTip: 'Classic sunk cost trap! Never include historical non-recoverable payments in current opportunity cost calculations.'
  },
  {
    id: 'dse-2021-q1',
    year: 2021,
    paper: 'Paper 1 (MC)',
    questionRef: '2021 Q1',
    concept: 'statements',
    topicTitle: 'Gini Coefficient Statement Classification',
    questionText: 'Refer to the following statements made by Peter and Mary.\nPeter: "As a developed economy, Hong Kong\'s Gini coefficient is too high."\nMary: "Hong Kong\'s Gini coefficient is the highest in Asia."\n\n___________ statement is ___________ because ___________.',
    questionTextZh: '參考 Peter 及 Mary 的陳述：\nPeter：「作為發達經濟體，香港的堅尼系數太高。」\nMary：「香港的堅尼系數是全亞洲最高。」\n\n___________ 陳述是 ___________，因為 ___________。',
    options: [
      { id: 'A', text: "Peter's … positive … most people agree with it" },
      { id: 'B', text: "Peter's … normative … it is inconsistent with the real world data" },
      { id: 'C', text: "Mary's … positive … it can be rejected by fact" },
      { id: 'D', text: "Mary's … normative … value judgment is involved in the statement" }
    ],
    correctOption: 'C',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: "Mary's statement is positive because it is refutable/testable against empirical statistics. Peter's statement is normative because 'too high' involves value judgment.",
        keywords: ["Mary's positive", 'refutable by fact', 'Peter normative value judgment']
      }
    ],
    modelAnswer: "C: Mary's statement is positive because it can be rejected by fact.",
    explanation: "Mary's statement is an empirical assertion comparing statistics across Asian economies. Even if statistics show another economy has a higher Gini coefficient, the claim is refutable by facts, hence it is positive (C). Peter's statement uses 'too high', which is a value judgment (normative).",
    examinerReportTip: 'Notice Option C: "can be rejected by fact" is the hallmark definition of a positive statement!'
  },
  {
    id: 'dse-2024-q1',
    year: 2024,
    paper: 'Paper 1 (MC)',
    questionRef: '2024 Q1',
    concept: 'opportunity-cost',
    topicTitle: 'Apartment Living Opportunity Cost',
    questionText: 'Mr. Chan lives in his own apartment which is worth $8,000,000. He can sell the apartment and deposit the $8,000,000 in a bank at an interest rate of 5% per year ($400,000/year). He can also rent out the apartment at $25,000 a month ($300,000/year).\n\nBased on the above information, which of the following statements are correct?',
    questionTextZh: '陳先生自住於價值800萬元的物業。他可選擇出售物業並將800萬元存入銀行收取年利率5%的利息（每年40萬），亦可將物業以每月$25,000出租（每年30萬）。\n\n根據上述資料，下列哪幾項陳述是正確的？',
    statements: [
      '(1) When the market value of his apartment increases, the opportunity cost for Mr. Chan to live in his own apartment will not be affected.',
      '(2) When the deposit interest rate increases, the opportunity cost for Mr. Chan to live in his own apartment will increase.',
      '(3) When the rental value of his apartment increases, the opportunity cost for Mr. Chan to live in his own apartment may increase.'
    ],
    options: [
      { id: 'A', text: '(1) and (2) only' },
      { id: 'B', text: '(1) and (3) only' },
      { id: 'C', text: '(2) and (3) only' },
      { id: 'D', text: '(1), (2) and (3)' }
    ],
    correctOption: 'C',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Currently the highest-valued forgone option is selling & depositing in bank (5% of $8M = $400k/year > $300k rental). If deposit rate rises, interest forgone rises (Cost rises). If rental value rises above $400k/year, the highest forgone option shifts to rental, so cost may increase.',
        keywords: ['(2) deposit rate increases cost', '(3) rental increase may raise cost']
      }
    ],
    modelAnswer: 'C: (2) and (3) only.',
    explanation: 'The current highest-valued forgone option is selling the flat and earning 5% interest ($400k/year vs $300k rent). (1) False: If market value increases, interest income from selling increases, so cost increases. (2) True: Higher deposit interest rate increases the return on the highest forgone option. (3) True: If monthly rent rises sufficiently (e.g. over $33,334/mo), rental becomes the highest forgone option and raises the cost.',
    examinerReportTip: 'Always compare the numerical values of all forgone alternatives to identify which is the single HIGHEST-valued option!'
  },
  {
    id: 'dse-2025-q1',
    year: 2025,
    paper: 'Paper 1 (MC)',
    questionRef: '2025 Q1',
    concept: 'opportunity-cost',
    topicTitle: 'Concert, Part-time Job & Scalper Resale',
    questionText: 'Susan planned to watch a concert and bought a ticket of the concert for $1,500. Soon after Susan bought the ticket, a company offered to pay her $3,000 for a part-time job. However, the work hours of the part-time crashed with the time of the concert. At the same time, as all tickets were sold out, her friend offered to buy her concert ticket for $1,800.\n\nBased on the above information, at the time when Susan was deciding whether to sell the concert ticket to her friend, her opportunity cost of choosing to watch the concert would be __________.',
    questionTextZh: 'Susan 計劃觀看演唱會並以 $1,500 購買了門票。買票後不久，一間公司提供了一份 $3,000 的兼職工作，但工作時間與演唱會撞期。同時因門票售罄，朋友出價 $1,800 向她收購門票。\n\n在 Susan 決定是否將門票轉售給朋友時，她選擇觀看演唱會的機會成本是 __________。',
    options: [
      { id: 'A', text: '$3,300' },
      { id: 'B', text: '$4,500' },
      { id: 'C', text: '$4,800' },
      { id: 'D', text: '$6,300' }
    ],
    correctOption: 'C',
    totalMarks: 1,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'By watching the concert, Susan gives up the $3,000 part-time salary AND the $1,800 resale price of the ticket. Since she could have done both (sold the ticket and worked the shift), they are not mutually exclusive when choosing to forgo the concert. Full cost = $3,000 + $1,800 = $4,800. The original $1,500 purchase price is a sunk cost.',
        keywords: ['$3000 wage forgone', '$1800 ticket resale forgone', '$4800 total', '$1500 is sunk cost']
      }
    ],
    modelAnswer: 'C: $4,800 ($3,000 forgone part-time wage + $1,800 forgone ticket resale cash).',
    explanation: 'If Susan chooses NOT to watch the concert, she can sell the ticket for $1,800 AND work the part-time job for $3,000 simultaneously. Thus, watching the concert forces her to forfeit BOTH gains: $3,000 + $1,800 = $4,800. The $1,500 paid in the past is already spent (sunk cost).',
    examinerReportTip: 'Extremely important DSE insight: If the forgone options can be enjoyed concurrently (selling the ticket frees up time to work), their values are added together!'
  },

  // ==========================
  // PAPER 2: STRUCTURED / SHORT QUESTIONS
  // ==========================
  {
    id: 'dse-2012-p2-a1',
    year: 2012,
    paper: 'Paper 2 (Structured)',
    questionRef: '2012 Paper 2 Q1',
    concept: 'goods-type',
    topicTitle: 'Free-of-Charge vs Free Good',
    questionText: 'A good which is free-of-charge is a free good. Do you agree? Explain.',
    questionTextZh: '「免費提供的物品就是免費物品。」你同意嗎？試解釋。',
    totalMarks: 3,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Disagreement: Disagree / The statement is incorrect.',
        criteriaZh: '表示不同意 / 陳述不正確。',
        keywords: ['disagree', 'not agree', 'incorrect', '不同意']
      },
      {
        pointNumber: 2,
        mark: 1,
        criteria: 'Definition: An economic good requires scarce resources (positive opportunity cost) in production / more of it is preferred.',
        criteriaZh: '指出經濟物品在生產時涉及稀缺資源（正數機會成本）/ 多者為佳。',
        keywords: ['scarce resources', 'opportunity cost in production', 'positive cost', '稀缺資源', '生產涉及機會成本']
      },
      {
        pointNumber: 3,
        mark: 1,
        criteria: 'Application: A good distributed at zero price (free-of-charge) can still be an economic good if resources with alternative uses are used in producing it.',
        criteriaZh: '應用：免費派發的物品若生產耗用有其他用途的資源，依然是經濟物品。',
        keywords: ['zero price', 'free of charge', 'alternative uses', 'economic good', '零價格', '免費派發']
      }
    ],
    modelAnswer: 'Disagree (1 mark). A free-of-charge good simply has a monetary price of zero to the consumer (1 mark). However, if scarce resources involving positive opportunity cost are used in producing the good, more of it is still preferred, and thus it remains an economic good, not a free good (1 mark).',
    modelAnswerZh: '不同意（1分）。免費提供僅指消費者無需支付金錢價格（1分）。然而，若該物品在生產過程中消耗了具備其他用途的稀缺資源（涉及正數生產機會成本），而且多者仍為人所渴望，則該物品依然是經濟物品而非免費物品（1分）。',
    explanation: 'In HKDSE economics, "free good" is defined by scarcity and production cost (zero opportunity cost in production), NOT the market retail price charged to users.',
    examinerReportTip: 'Candidates often lost marks by failing to explicitly mention "opportunity cost in production / scarce resources with alternative uses".'
  },
  {
    id: 'dse-2013-p2-b9b',
    year: 2013,
    paper: 'Paper 2 (Structured)',
    questionRef: '2013 Paper 2 B9(b)',
    concept: 'goods-type',
    topicTitle: 'MTR "Ride 10 Get 1 Free" Scheme',
    questionText: 'Under the "Ride 10 Get 1 Free" scheme, with 10 fare-paying journeys on the MTR from Monday to Friday in the same week, passengers could get a single journey ticket for free. Is the free journey a free good? Explain.',
    questionTextZh: '在港鐵「搭十送一」優惠下，乘客於同一星期星期一至五乘搭10次付費車程，即可獲贈一張免費單程車票。該免費車程是否免費物品？試解釋。',
    totalMarks: 2,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Conclusion: No, it is not a free good / It is an economic good.',
        criteriaZh: '結論：否，不是免費物品 / 它是經濟物品。',
        keywords: ['no', 'not a free good', 'economic good', '否', '不是免費物品', '經濟物品']
      },
      {
        pointNumber: 2,
        mark: 1,
        criteria: 'Explanation: Providing the train service requires scarce resources (e.g. electricity, labor, railway maintenance) with alternative uses / More of it is preferred.',
        criteriaZh: '解釋：提供鐵路乘車服務需耗用具其他用途的稀缺資源（如電力、勞工、列車保養），生產涉及機會成本 / 多者為佳。',
        keywords: ['scarce resources', 'opportunity cost in production', 'electricity', 'labor', '稀缺資源', '機會成本', '多者為佳']
      }
    ],
    modelAnswer: 'No, it is not a free good (1 mark). Providing the free MTR ride requires scarce resources (such as electricity, train drivers, and track maintenance) which have alternative uses, meaning positive opportunity cost is involved in production / more of it is preferred (1 mark).',
    modelAnswerZh: '否，它不是免費物品（1分）。因為提供額外的港鐵乘車服務需要耗用具其他用途的稀缺資源（例如電力、車長勞工及維修服務），生產涉及正數機會成本 / 更多車程仍為人所渴望（1分）。',
    explanation: 'Even though passengers pay $0 for that single ticket, MTR Corporation incurs real resource costs to run the train.',
    examinerReportTip: 'Never say "it is not free because you had to pay for 10 trips first". The question asks whether the JOURNEY itself is a free good in economics terms (scarcity & production cost).'
  },
  {
    id: 'dse-2014-p2-a1',
    year: 2014,
    paper: 'Paper 2 (Structured)',
    questionRef: '2014 Paper 2 A1',
    concept: 'opportunity-cost',
    topicTitle: 'Serine\'s Career Preferences & Cost Analysis',
    questionText: 'Serine is a university graduate seeking a job. Her preference order is:\n• 1st preference: to work for the government as an administrative officer (AO)\n• 2nd preference: to work in an accounting firm as a trainee\n• 3rd preference: to continue seeking a job without accepting offers\n\nAnalyse whether Serine\'s cost of choosing to work as an administrative officer will necessarily remain unchanged if:\n(a) the government reduces the starting salary of administrative officers. (2 marks)\n(b) the government provides unemployment benefits for all graduates seeking jobs. (3 marks)',
    questionTextZh: '大學畢業生 Serine 正在求職，其意願順序如下：\n• 第一選擇：加入政府擔任政務主任 (AO)\n• 第二選擇：在會計師事務所擔任見習會計師\n• 第三選擇：繼續求職而不接受任何職位\n\n分析在下列情況下，Serine 選擇擔任政務主任的機會成本是否必然維持不變：\n(a) 政府調低政務主任的起薪點。(2分)\n(b) 政府為所有求職的大學畢業生提供失業援助金。(3分)',
    totalMarks: 5,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: '(a) Yes, the cost will necessarily remain unchanged.',
        criteriaZh: '(a) 是，成本必然維持不變。',
        keywords: ['remain unchanged', 'unchanged', '維持不變', '不變']
      },
      {
        pointNumber: 2,
        mark: 1,
        criteria: '(a) AO salary is the return of the CHOSEN option, not the forgone option (the trainee accountant job is unaffected).',
        criteriaZh: '(a) 因為AO起薪點是所選選項的價值/回報，放棄選項（會計見習生）的價值並未受影響。',
        keywords: ['chosen option', 'selected option', 'value of forgone option unchanged', '所選選項', '被放棄選項價值不變']
      },
      {
        pointNumber: 3,
        mark: 1,
        criteria: '(b) Not necessarily unchanged / It may change.',
        criteriaZh: '(b) 不一定維持不變 / 可能會改變。',
        keywords: ['not necessarily', 'may change', '不一定', '可能改變']
      },
      {
        pointNumber: 4,
        mark: 1,
        criteria: '(b) If unemployment benefit increases the value of the 3rd option (seeking jobs) sufficiently to exceed the 2nd option (trainee), the highest-valued forgone option is replaced.',
        criteriaZh: '(b) 若失業金使第三選擇（繼續求職）的價值提升並超越第二選擇（會計見習生），則最高價值的放棄選項會被取代。',
        keywords: ['replaced', 'exceed 2nd option', 'highest valued option forgone changes', '被取代', '超越第二選擇']
      },
      {
        pointNumber: 5,
        mark: 1,
        criteria: '(b) Alternatively, if 2nd option remains higher than 3rd option, the opportunity cost remains unchanged.',
        criteriaZh: '(b) 反之，若第二選擇的價值依然高於第三選擇，則機會成本維持不變。',
        keywords: ['still higher', 'remains unchanged', '依然維持不變']
      }
    ],
    modelAnswer: '(a) Yes, the opportunity cost will remain unchanged (1 mark). The AO starting salary is the return of the CHOSEN option. The highest-valued option forgone (working as an accounting trainee) is unchanged (1 mark).\n\n(b) Not necessarily unchanged (1 mark). The unemployment benefit increases the value of the 3rd option (continue seeking a job). If its value rises above the 2nd option, it becomes the new highest-valued option forgone, INCREASING the cost (1 mark). If its value is still below the 2nd option, the cost remains unchanged (1 mark).',
    modelAnswerZh: '(a) 是，成本必然維持不變（1分）。因為AO起薪點屬於所選選項的回報，而最高價值的放棄選項（會計見習生）的價值並沒有改變（1分）。\n\n(b) 不一定維持不變（1分）。失業金會提升第三選擇（繼續求職）的價值。若其價值上升至超越第二選擇，則最高價值的放棄選項被取代，成本會增加（1分）；但若其價值仍然低於第二選擇，則機會成本維持不變（1分）。',
    explanation: 'Core HKDSE rule tested: (1) Changing value of chosen option does not change opportunity cost. (2) When a lower forgone option becomes more valuable, cost may or may not change depending on whether it overtakes the highest-valued forgone option.',
    examinerReportTip: 'In part (b), students must consider both cases (whether 3rd option overtakes 2nd option or not) to earn full 3 marks!'
  },
  {
    id: 'dse-2021-p2-b10b',
    year: 2021,
    paper: 'Paper 2 (Structured)',
    questionRef: '2021 Paper 2 B10(b)(i)',
    concept: 'goods-type',
    topicTitle: 'Government Free Distribution of CuMask',
    questionText: 'Masks have become a daily necessity. The Government distributed "CuMask" to citizens in Hong Kong for free. Explain whether the "CuMask" is a free good. (2 marks)',
    questionTextZh: '口罩已成為市民日常生活必需品。香港特區政府免費向市民派發「銅芯抗疫口罩」(CuMask)。解釋該口罩是否屬於免費物品。(2分)',
    totalMarks: 2,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Conclusion: No, it is not a free good / It is an economic good.',
        criteriaZh: '結論：否，不是免費物品 / 是經濟物品。',
        keywords: ['no', 'not a free good', 'economic good', '否', '不是免費物品', '經濟物品']
      },
      {
        pointNumber: 2,
        mark: 1,
        criteria: 'Explanation: Producing CuMask requires scarce resources (such as fabric, technology, labor, machinery) with alternative uses / positive opportunity cost is involved in production / more is preferred.',
        criteriaZh: '解釋：生產CuMask需耗用具備其他用途的稀缺資源（如布料、科研、勞工、廠房機器），生產涉及正數機會成本 / 市民仍渴望更多口罩。',
        keywords: ['scarce resources', 'opportunity cost in production', 'alternative uses', 'positive cost', '稀缺資源', '生產涉及機會成本', '其他用途']
      }
    ],
    modelAnswer: 'No, CuMask is not a free good (1 mark). Scarce resources (e.g. cloth materials, labour, machines) with alternative uses were used in producing CuMasks, which involves positive opportunity cost in production / more of it is preferred (1 mark).',
    modelAnswerZh: '否，銅芯口罩不是免費物品（1分）。因為生產銅芯口罩需要消耗具其他用途的稀缺資源（例如布料、勞工及機器），生產過程涉及正數機會成本 / 市民對口罩多者為佳（1分）。',
    explanation: 'Free distribution by government = free of charge ($0 price), but NOT a free good in economics.',
    examinerReportTip: 'State clearly that scarce resources with alternative uses are used in production.'
  },
  {
    id: 'dse-2023-p2-a1c',
    year: 2023,
    paper: 'Paper 2 (Structured)',
    questionRef: '2023 Paper 2 A1(c)',
    concept: 'goods-type',
    topicTitle: 'Economists Sharing Free Analyses on Social Media',
    questionText: 'Some economists share their economic analyses on social media free of charge. Explain whether these economic analyses are free goods to society. (2 marks)',
    questionTextZh: '部分經濟學者在社交媒體上免費分享他們的經濟分析。解釋這些經濟分析對社會而言是否屬於免費物品。(2分)',
    totalMarks: 2,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Conclusion: No, they are not free goods / They are economic goods.',
        criteriaZh: '結論：否，不是免費物品 / 是經濟物品。',
        keywords: ['no', 'not free goods', 'economic goods', '否', '不是免費物品']
      },
      {
        pointNumber: 2,
        mark: 1,
        criteria: 'Explanation: Economists spend scarce time and human effort (which have alternative uses) in writing/producing the analysis, involving positive opportunity cost to society / more insightful analysis is preferred.',
        criteriaZh: '解釋：經濟學者需付出具其他用途的稀缺時間與心力進行研究及撰寫，對社會而言生產涉及機會成本 / 更多高質分析仍為人渴望。',
        keywords: ['scarce time', 'alternative uses', 'opportunity cost in production', 'positive cost', '稀缺時間', '機會成本', '其他用途']
      }
    ],
    modelAnswer: 'No, they are not free goods to society (1 mark). Producing the economic analysis requires economists to devote scarce time and research effort that have alternative uses, meaning positive opportunity cost is incurred in production / more analysis is preferred (1 mark).',
    modelAnswerZh: '否，對社會而言並非免費物品（1分）。因為撰寫經濟分析需要經濟學者投入具備其他替代用途的稀缺時間與研究精力，生產對社會而言涉及正數機會成本 / 更多分析仍為大眾所渴望（1分）。',
    explanation: 'Knowledge products provided free online still cost human capital and time to create.',
    examinerReportTip: 'Highlight the opportunity cost of the creator\'s time and expertise.'
  },
  {
    id: 'dse-2025-p2-a4b',
    year: 2025,
    paper: 'Paper 2 (Structured)',
    questionRef: '2025 Paper 2 A4(b)',
    concept: 'interest-flow',
    topicTitle: 'Interest in a Barter Economy (Fishing Rod & Rice)',
    questionText: 'In a small village, all villagers accept rice in settling payments for exchanges.\nBelow is a conversation between two villagers in the village:\nVillager A: "I would like to borrow your fishing rod for a month."\nVillager B: "Please return the fishing rod together with one bag of rice after one month."\n\nExplain why the bag of rice can be regarded as interest to Villager B in the above situation. (2 marks)',
    questionTextZh: '在一個小村莊中，所有村民均接受以大米作交易結算。\n以下為兩名村民的對話：\n村民A：「我想向你借用釣魚竿一個月。」\n村民B：「請在一個月後交還釣魚竿，並附帶一袋大米。」\n\n解釋為何在上述情況中，該袋大米可被視為村民B所收取的利息。(2分)',
    totalMarks: 2,
    markingScheme: [
      {
        pointNumber: 1,
        mark: 1,
        criteria: 'Compensation for lender: The bag of rice is the compensation received by Villager B for deferring the use/consumption of the fishing rod for one month.',
        criteriaZh: '對貸方的補償：該袋大米是村民B延遲一個月使用/享用釣魚竿的補償。',
        keywords: ['compensation', 'deferring', 'deferred consumption', 'delaying use', '延遲消費的補償', '延遲享用']
      },
      {
        pointNumber: 2,
        mark: 1,
        criteria: 'Cost to borrower: It is also the payment/cost made by Villager A for the earlier availability of the fishing rod (using it now rather than later).',
        criteriaZh: '對借方的代價：亦是村民A為了提前享用釣魚竿所付出的代價。',
        keywords: ['cost of earlier availability', 'earlier availability', '提前享用資源的代價', '提前使用']
      }
    ],
    modelAnswer: 'The bag of rice is interest because to Villager B (the lender), it is the compensation for deferring consumption/use of the fishing rod for one month (1 mark); while to Villager A (the borrower), it is the cost paid for the earlier availability of the fishing rod (1 mark).',
    modelAnswerZh: '該袋大米屬於利息，因為對貸方（村民B）而言，大米是他延遲一個月使用釣魚竿的補償（1分）；對借方（村民A）而言，則是為了提前一個月享用釣魚竿所付出的代價（1分）。',
    explanation: 'This question tests the purest economic definition of interest as an intertemporal price for earlier availability, independent of fiat money.',
    examinerReportTip: 'Mention both perspectives: cost of earlier availability to borrower, or compensation for deferred consumption to lender!'
  }
];
