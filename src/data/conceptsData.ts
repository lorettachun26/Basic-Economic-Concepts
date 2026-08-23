import { ConceptItem } from '../types';

export const CONCEPTS_DATA: ConceptItem[] = [
  {
    id: 'scarcity',
    title: 'Scarcity & Choice',
    titleZh: '稀缺性與選擇',
    shortDesc: 'The fundamental economic problem: Human wants are unlimited, but resources available to satisfy them are limited and insufficient.',
    dseDefinition: 'Scarcity is a situation in which available resources are insufficient to satisfy all human wants. It is a relative concept comparing wants and resources.',
    dseDefinitionZh: '稀缺性是指可用資源不足以滿足所有人無限欲望的狀態。這是一個比較資源與欲望的相對概念。',
    keyPoints: [
      {
        title: 'Unlimited Wants vs Limited Resources (無限欲望與有限資源)',
        description: 'Human wants are insatiable. When basic wants (food, clothing) are met, higher-level wants arise. Resources (natural, human, man-made) on Earth are limited.',
        examTip: 'Do NOT say "resources cannot satisfy our wants". Correct formulation: "resources are insufficient to satisfy all our wants".'
      },
      {
        title: 'Scarcity is a Relative Concept (相對性概念)',
        description: 'Scarcity does not merely mean "limited quantity". A resource with fixed supply (e.g. seawater on Earth or bad weather) is NOT scarce if people do not want more of it.',
        examTip: 'A good is scarce if and only if "more of it is preferred" (quantity demanded > quantity supplied at zero price).'
      },
      {
        title: 'Scarcity Applies to Everyone (人人皆面對稀缺)',
        description: 'Even the wealthiest individuals (e.g., billionaires) face scarcity because time and lifespan are finite, and wants extend beyond monetary goods (e.g. companionship, health).',
        examTip: 'Scarcity forces people to make choices, which in turn gives rise to opportunity cost, competition, and discrimination.'
      }
    ],
    realExamples: [
      {
        context: 'Land in Hong Kong (香港市區土地)',
        contextZh: '香港市區土地供應有限，但市民對住宅、商場、醫院及綠化空間的需求龐大，因此土地極度稀缺。',
        explanation: 'Urban land in HK has multiple competing uses (housing, commercial towers, country parks), illustrating that resources are insufficient relative to aggregate desires.',
        hkContext: true
      },
      {
        context: 'Seawater vs Drinking Water (海水與食水)',
        contextZh: '海水雖然總量有限，但在海灘上無人想獲取更多海水；然而經淡化處理的清潔食水則是稀缺的經濟物品。',
        explanation: 'Raw sea water on open coasts is not scarce because more of it is not preferred at zero price. Clean drinking water requires scarce resources to purify, hence it is scarce.',
        hkContext: true
      },
      {
        context: 'Time of a Top Student or CEO (時間的稀缺)',
        contextZh: '即使一名學生擁有充足零用錢，他一天依然只有24小時，必須在溫習DSE、做兼職與睡覺之間作抉擇。',
        explanation: 'Time is universally scarce: every hour allocated to DSE revision is an hour unavailable for leisure or part-time work.',
        hkContext: true
      }
    ],
    commonTraps: [
      {
        misconception: 'Mistaking "limited supply" for "scarcity".',
        correction: 'A good with a limited supply (e.g., mosquito bites, pollution, trash) is NOT scarce if human wants for it are zero or negative.'
      },
      {
        misconception: 'Believing rich people do not face scarcity.',
        correction: 'Scarcity is universal. Billionaires still face scarcity of time, energy, and non-tradable goods.'
      }
    ],
    goldenPhrases: [
      'Scarcity exists when resources are insufficient to satisfy unlimited human wants.',
      'More of it is preferred (quantity available cannot satisfy wants at zero price).',
      'Scarcity implies choice; choice implies opportunity cost; scarcity also leads to competition.'
    ]
  },
  {
    id: 'opportunity-cost',
    title: 'Opportunity Cost',
    titleZh: '機會成本',
    shortDesc: 'Opportunity cost = Highest-valued option forgone when making an economic choice among alternatives.',
    dseDefinition: 'Opportunity Cost = Highest-valued option forgone (The value of the single best alternative sacrificed when making a choice).',
    dseDefinitionZh: '機會成本 = 所放棄的選項中價值最高者 (作出經濟抉擇時所犧牲的單一最高價值選項)。',
    keyPoints: [
      {
        title: 'Definition: Opportunity Cost = Highest-Valued Option Forgone (唯獨最高價值的放棄選項)',
        description: 'Opportunity cost is strictly the value of the highest-valued alternative forgone. It is NOT the sum of all other forgone options combined.',
        examTip: 'Memorize the exact standard definition: "Opportunity cost is the highest-valued option forgone".'
      },
      {
        title: 'Full Cost = Explicit (Monetary) + Implicit (Non-monetary)',
        description: 'Opportunity cost includes out-of-pocket expenses (tuition, purchase price) PLUS implicit costs (forgone wage/salary, forgone rental value, forgone leisure).',
        examTip: 'Living in your own flat is NOT costless! The opportunity cost is the forgone rental income or interest from selling the flat.'
      },
      {
        title: 'When Does Opportunity Cost Change? (成本何時改變？)',
        description: 'Opportunity cost changes ONLY IF: (1) The value of the highest-valued forgone option changes, OR (2) A new alternative replaces the highest-valued forgone option.',
        examTip: 'A change in the value of the CHOSEN option does NOT change its opportunity cost! (e.g. if the meal you bought tastes bad, your opportunity cost remains unchanged).'
      },
      {
        title: 'Sunk Costs are Irrelevant (沉沒成本非成本)',
        description: 'Past historical expenditures that cannot be recovered (e.g., $60,000 paid for a car 3 years ago) are sunk costs and do NOT form part of the current opportunity cost.',
        examTip: 'Only forward-looking forgone alternatives (e.g. resale value + current repair costs) count as opportunity cost.'
      }
    ],
    realExamples: [
      {
        context: 'Spending $1,000 Birthday Money on 1 Item',
        contextZh: '手上有$1,000生日紅包，只能在4樣$1,000物品中選購1樣：(1)球鞋、(2)演唱會門票、(3)降噪耳機、(4)智能手錶。',
        explanation: 'If a student spends their $1,000 on Option #1 (Sneakers), the opportunity cost is forgoing Option #2 (Concert Ticket - the single highest-valued forgone alternative). The cost is NOT adding the concert ticket, headphones, and smart watch together, because $1,000 can only buy one item.',
        hkContext: true
      },
      {
        context: 'Market Event: Concert Ticket Adds VIP Backstage Pass',
        contextZh: '演唱會門票加送VIP後台見面會（第二選擇價值提升）。',
        explanation: 'When the 2nd choice (Concert Ticket) becomes more attractive, the sacrifice made to buy the Sneakers is now greater. Therefore, the opportunity cost of buying the Sneakers INCREASES.',
        hkContext: true
      },
      {
        context: 'A New 4th Item is Added: $1,000 Smart Watch',
        contextZh: '市面上新推出第4個選擇：$1,000智能運動手錶。',
        explanation: 'If the new Smart Watch is ranked as choice #3 or #4, the opportunity cost of buying Sneakers remains UNCHANGED (still the Concert Ticket). Only if the new item becomes the new #2 (preferred over the Concert Ticket) does the opportunity cost change.',
        hkContext: true
      },
      {
        context: 'Market Event: You Don\'t Like the Sneakers Color After Buying',
        contextZh: '買入球鞋後發現不喜歡顏色（所選選項的享受下降）。',
        explanation: 'A change in satisfaction or enjoyment of the CHOSEN item does NOT change what was given up to obtain it. The forgone alternative remains the concert ticket, so the opportunity cost is strictly UNCHANGED.',
        hkContext: true
      }
    ],
    commonTraps: [
      {
        misconception: 'Adding up all forgone options (e.g. Cost = Option B + Option C + Option D).',
        correction: 'If options are mutually exclusive, cost is ONLY Option B (the single highest-valued one).'
      },
      {
        misconception: 'Saying "the opportunity cost of A is B".',
        correction: 'Must state: "The opportunity cost of choosing A is the value of forgoing B".'
      },
      {
        misconception: 'Thinking that if a product is on sale or free, its opportunity cost of consumption is zero.',
        correction: 'Consuming it takes time and foregoes other activities, so the opportunity cost is never zero.'
      }
    ],
    goldenPhrases: [
      'Opportunity cost is the highest-valued option forgone in making a choice.',
      'No choice, no cost.',
      'Cost changes only when the value of the highest-valued forgone option changes.',
      'A change in the enjoyment/value of the selected option does not affect its opportunity cost.'
    ]
  },
  {
    id: 'goods-type',
    title: 'Free Goods vs Economic Goods',
    titleZh: '免費物品 VS 經濟物品',
    shortDesc: 'Distinction based on scarcity, opportunity cost in production, and willingness to pay.',
    dseDefinition: 'An economic good is a good whose quantity available is insufficient to satisfy all human wants at zero price (more is preferred, has positive production cost). A free good is a good whose quantity available is sufficient to satisfy all wants at zero price (more is not preferred, zero production cost).',
    dseDefinitionZh: '經濟物品是指在零價格下其供應量不足以滿足人類所有欲望的物品（多者為佳，生產涉及機會成本）。免費物品是指在零價格下供應量足以滿足所有欲望的物品（多者不為佳，生產不涉及機會成本）。',
    keyPoints: [
      {
        title: '"Some is Better Than None" Applies to Both (兩者皆為物品)',
        description: 'Both free goods and economic goods are "goods" because they provide satisfaction (utility) to humans, meaning some of it is better than none.',
        examTip: 'A "bad" (e.g., pollution, rubbish) is something where "less is preferred to more". Both free and economic goods are goods, not bads.'
      },
      {
        title: 'Crucial DSE Rule: Free of Charge ≠ Free Good (免費不等於免費物品)',
        description: 'A good distributed free of charge ($0 monetary price) is almost always an ECONOMIC GOOD if scarce resources were used to produce it.',
        examTip: 'Examples of free-of-charge economic goods: Free TV broadcasts, CuMasks, free MTR tickets ("Ride 10 Get 1 Free"), free university MOOC materials, free flight giveaway tickets.'
      },
      {
        title: 'Opportunity Cost in Production (生產時的機會成本)',
        description: 'Economic goods require positive opportunity cost in production (resources with alternative uses are sacrificed). Free goods involve zero opportunity cost in production (nature provides it abundantly without sacrificing other goods).',
        examTip: 'If resources are required to produce or provide the good, it is an economic good regardless of whether consumers pay money.'
      },
      {
        title: 'Situational Nature of Goods (物品性質因情境而異)',
        description: 'Air in an open park on Earth is a free good; air packed in a scuba diving cylinder or inside a space station is an economic good.',
        examTip: 'Sand in the Sahara desert is a free good; sand transported to a Hong Kong construction reclamation site is an economic good.'
      }
    ],
    realExamples: [
      {
        context: 'Government Distribution of CuMask (政府免費派發銅芯抗疫口罩 - 2021 DSE)',
        contextZh: '雖然市民免費獲取CuMask，但生產口罩需要布料、勞工與生產機器，這些資源具備其他用途，涉及正數生產成本，故CuMask為經濟物品。',
        explanation: 'CuMask was provided free of charge, but scarce productive resources (fabrics, workers, capital equipment) with alternative uses were used. Thus, opportunity cost in production > 0, making it an economic good.',
        hkContext: true
      },
      {
        context: 'MTR "Ride 10 Get 1 Free" Single Journey (港鐵「搭十送一」免費車程 - 2013 DSE)',
        contextZh: '獲贈的港鐵單程車票並非免費物品。提供鐵路運輸服務需要耗用電力、人手及列車折舊等稀缺資源，生產涉及機會成本，且更多車程仍為人所渴望。',
        explanation: 'Providing train rides requires electricity, train drivers, and maintenance (scarce resources). Furthermore, passengers still prefer more rides.',
        hkContext: true
      },
      {
        context: 'University MOOC Online Course Notes (大學MOOC免費線上教材 - 2015 DSE)',
        contextZh: '大學將教材放上網供全球免費下載，但製作教材需要教授投入時間撰寫及伺服器維護，涉及放棄其他學術研究的機會成本，故為經濟物品。',
        explanation: 'Online course materials require professor time, curriculum research, and IT server infrastructure with alternative uses.',
        hkContext: true
      }
    ],
    commonTraps: [
      {
        misconception: 'Believing that any good with a price tag of $0 is a "free good".',
        correction: 'Free of charge only means zero price to the consumer. If production consumes scarce resources, it is an economic good.'
      },
      {
        misconception: 'Thinking that people prefer economic goods over free goods.',
        correction: 'People do not necessarily "prefer economic goods to free goods" (e.g. oxygen is essential). The distinction is whether more is preferred at the margin.'
      }
    ],
    goldenPhrases: [
      'A good is an economic good if its quantity available is insufficient to satisfy all human wants at zero price.',
      'A free good incurs zero opportunity cost in production.',
      'Free of charge is not equivalent to a free good.'
    ]
  },
  {
    id: 'competition',
    title: 'Competition & Discrimination',
    titleZh: '競爭與歧視',
    shortDesc: 'How societies resolve scarcity through price and non-price allocation mechanisms and criteria.',
    dseDefinition: 'Competition arises whenever economic goods are scarce. Competition requires rules (criteria) to determine winners and losers, which inherently implies discrimination.',
    dseDefinitionZh: '每當經濟物品出現稀缺，競爭便必然存在。任何競爭皆由規則（準則）決定勝負，而規則本質上必然帶來歧視。',
    keyPoints: [
      {
        title: 'Origin of Competition (競爭的根源)',
        description: 'Whenever more than one person wants more of a scarce economic good, competition is inevitable. In a one-man Robinson Crusoe economy, scarcity exists but social competition does not.',
        examTip: 'Competition exists in all multi-person human societies, whether capitalist, socialist, or planned.'
      },
      {
        title: 'Price vs Non-Price Competition (價格競爭與非價格競爭)',
        description: 'Price competition allocates goods based on willingness and ability to pay. Non-price competition allocates goods based on waiting/queuing time, lottery/lucky draw, academic results, physical power, or personal relationships.',
        examTip: 'Queuing for popular concert tickets or public hospital clinics is non-price competition (discriminates against those with high opportunity cost of time).'
      },
      {
        title: 'Rules and Inevitable Discrimination (規則與必然的歧視)',
        description: 'Every allocation rule discriminates against people who do not possess the favored criteria. For example, price discriminates against the poor; exam criteria discriminate against lower-scoring students; queuing discriminates against busy people.',
        examTip: 'In economics, "discrimination" is an objective, positive concept describing the screening of buyers based on criteria, not an insult.'
      }
    ],
    realExamples: [
      {
        context: 'Queuing for Public Clinic Consultation (公營診所輪候 - 2023 DSE / C&A Guide)',
        contextZh: '普通科門診以先到先得（排隊）形式分配，歧視時間機會成本高的人士（如在職人士），偏向惠及時間成本較低的長者或退休人士。',
        explanation: 'First-come, first-served queuing uses time as the competitive currency, discriminating against individuals whose hourly wage or time opportunity cost is high.',
        hkContext: true
      },
      {
        context: 'Concert Ticketing: Official Queue vs Scalper Touts (演唱會官方排隊 vs 黃牛黨)',
        contextZh: '家庭主婦排隊10小時購票，因為其時間成本相對較低；而高薪上班族願向黃牛支付溢價，因為其時間機會成本遠高於金錢溢價。',
        explanation: 'Illustrates how different individuals choose between price competition (paying touts) and non-price competition (queuing) based on their personal opportunity cost of time.',
        hkContext: true
      },
      {
        context: 'HK Public Rental Housing Allocation (香港公屋計分制與輪候)',
        contextZh: '香港房委會透過入息資產限額及輪候計分制分配公屋，屬於非價格分配機制，歧視高收入及資產較多的家庭。',
        explanation: 'Non-price rationing rules set by the government to allocate scarce subsidized housing.',
        hkContext: true
      }
    ],
    commonTraps: [
      {
        misconception: 'Assuming that adopting non-price allocation (e.g. lucky draws) eliminates discrimination.',
        correction: 'Non-price allocation still discriminates (e.g. lucky draws discriminate against unlucky people; queuing discriminates against those with high time cost).'
      },
      {
        misconception: 'Believing competition only exists under a capitalist market economy.',
        correction: 'Competition exists in all societies where economic goods are scarce, including centrally planned economies.'
      }
    ],
    goldenPhrases: [
      'Scarcity implies competition; competition requires rules; rules imply discrimination.',
      'Price competition allocates by purchasing power; non-price competition allocates by other criteria (e.g. time, luck, merit).'
    ]
  },
  {
    id: 'statements',
    title: 'Positive vs Normative Statements',
    titleZh: '實證性陳述 VS 規範性陳述',
    shortDesc: 'Distinguishing between objective factual/causal assertions and subjective value judgments.',
    dseDefinition: 'A positive statement is an objective statement concerning "what is / was / will be" and can be tested/refuted against empirical facts. A normative statement expresses value judgments or opinions ("what ought to be / should be") and cannot be tested against facts.',
    dseDefinitionZh: '實證性陳述是關於「是什麼/過去如何/將會如何」的客觀陳述，可藉事實數據驗證或推翻。規範性陳述包含主觀價值判斷（「應該/不應該」），無法單憑客觀事實證明真偽。',
    keyPoints: [
      {
        title: 'Positive Statement: Fact-Testable (實證性陳述：可驗證性)',
        description: 'A positive statement does NOT have to be true! A false positive statement (e.g. "Hong Kong has an unemployment rate of 90%") is STILL a positive statement because it can be refuted by official census data.',
        examTip: 'Key test: Can real-world data or empirical observations prove or disprove this statement?'
      },
      {
        title: 'Normative Statement: Value Judgments (規範性陳述：價值判斷)',
        description: 'Normative statements involve ethical beliefs, moral preferences, or policy prescriptions. Watch for indicator words: "should", "ought to", "too high", "too low", "better", "fair", "unfair", "desirable".',
        examTip: 'Disagreements on normative statements cannot be resolved solely by looking at economic statistics because they depend on personal values.'
      },
      {
        title: 'HKDSE Past Paper Indicator Breakdown',
        description: '"The Gini coefficient is 0.539" -> Positive. "The Gini coefficient is too high" -> Normative. "Increasing minimum wage will increase unemployment" -> Positive (predictive hypothesis). "Government should increase minimum wage" -> Normative.',
        examTip: 'Even if 99% of people agree with a normative statement, it remains normative because it is founded on value judgment.'
      }
    ],
    realExamples: [
      {
        context: 'HK Gini Coefficient Statements (2021 DSE Q1)',
        contextZh: 'Peter說「香港的堅尼系數太高」-> 規範性（含主觀價值判斷「太高」）；Mary說「香港的堅尼系數是亞洲最高」-> 實證性（可藉亞洲各國數據查證及推翻）。',
        explanation: 'Peter makes a normative value judgment about what is acceptable. Mary makes a positive claim that can be verified/refuted by international statistics.',
        hkContext: true
      },
      {
        context: 'Budget Speech Statements (2018 DSE Q4)',
        contextZh: '陳茂波財政司司長：「2016年經濟增長為1.9%」（實證性，有統計數據）；「政府應扮演促進者角色推行合適政策」（規範性，含"should"及價值判斷）。',
        explanation: '"Economic growth was 1.9%" is positive. "The government should play an active role" is normative.',
        hkContext: true
      },
      {
        context: 'Property Cooling Measures & STCGT (2022 DSE A5b)',
        contextZh: '「開徵短期資本增值稅不會解決樓價上升問題」是一項實證性陳述，因其描述政策因果關係，可藉實證數據檢驗其預測。',
        explanation: 'Predicting the economic outcome of a tax policy without prescriptive value terms is a positive statement.',
        hkContext: true
      }
    ],
    commonTraps: [
      {
        misconception: 'Assuming that an incorrect/false statement cannot be a positive statement.',
        correction: 'A positive statement can be factually wrong. As long as it is testable against facts, it is positive.'
      },
      {
        misconception: 'Assuming that widespread agreement makes a statement positive.',
        correction: '"Murder is bad" or "Poverty should be eliminated" are universally agreed upon, but they are still normative statements based on moral values.'
      }
    ],
    goldenPhrases: [
      'A positive statement is refutable by facts; a normative statement involves value judgments.',
      'Truth or falsity does not alter the positive nature of a statement.',
      'Words like "should", "ought to", "too high", and "desirable" indicate normative statements.'
    ]
  },
  {
    id: 'interest-flow',
    title: 'Interest & Circular Flow',
    titleZh: '利息與經濟活動循環流',
    shortDesc: 'The economic concept of interest as the cost of earlier availability and the basic circular flow between households and firms.',
    dseDefinition: 'Interest is the cost of earlier availability of resources to the borrower, and the compensation for deferred consumption to the lender. It exists even in a barter economy without money or inflation.',
    dseDefinitionZh: '利息對借方而言是提前享用資源的代價，對貸方而言是延遲消費的補償。即使在沒有貨幣及通脹的以物易物經濟中，利息依然存在。',
    keyPoints: [
      {
        title: 'Interest Exists Without Money or Inflation (無貨幣亦有利息)',
        description: 'Interest is rooted in human impatience (positive time preference): people prefer goods earlier rather than later. Even if you borrow a fishing rod and return it with a bag of rice (2025 DSE), that extra bag of rice is interest.',
        examTip: 'Interest is NOT created by banks or paper money. It exists in any economy where lending and borrowing of physical goods take place.'
      },
      {
        title: 'Borrower vs Lender Perspective (借方與貸方視角)',
        description: 'To the borrower: Interest is the cost/premium paid for having resources now instead of in the future. To the lender: Interest is the compensation for deferring consumption to the future.',
        examTip: 'When interest rates rise, the cost of current consumption increases, incentivizing individuals to save more and reduce present consumption.'
      },
      {
        title: 'Circular Flow: Real Flow vs Money Flow (實質流與貨幣流)',
        description: 'Households provide factor services (labour, land, capital, entrepreneurship) to firms in the factor market and receive factor income (wages, rent, interest, profit). Firms provide goods/services to households in the product market and receive consumer expenditure/revenue.',
        examTip: 'Real flow: Factor services + Final goods/services. Money flow: Factor payments/income + Consumer expenditures/revenue.'
      }
    ],
    realExamples: [
      {
        context: 'Barter Village Fishing Rod & Rice (2025 DSE A4b)',
        contextZh: '村民A向村民B借釣魚竿一個月，交還時附帶一袋大米。該袋大米即為利息，因它是村民A為提前使用釣竿所付出的代價，及村民B延遲享用釣竿的補償。',
        explanation: 'The extra bag of rice represents payment for the earlier availability of the fishing rod over the one-month duration.',
        hkContext: true
      },
      {
        context: 'Mortgage Loan for Buying a Flat in Hong Kong (香港置業按揭貸款)',
        contextZh: '買家向銀行借貸按揭，提前在今日入住單位，代價是向銀行支付按揭利息；存款人將資金存入銀行收取利息作為延遲消費的報酬。',
        explanation: 'Homebuyers pay interest to consume the housing service immediately rather than waiting 30 years to accumulate sufficient cash.',
        hkContext: true
      }
    ],
    commonTraps: [
      {
        misconception: 'Believing interest rate is zero if there is no inflation.',
        correction: 'Even with zero inflation, positive real interest exists because people still have time preference for earlier availability.'
      },
      {
        misconception: 'Thinking interest cannot exist in a planned or barter economy.',
        correction: 'Any intertemporal exchange (borrowing/lending goods across time) generates interest.'
      }
    ],
    goldenPhrases: [
      'Interest is the cost of earlier availability of resources to the borrower.',
      'Interest is the compensation for deferring consumption to the lender.',
      'Interest exists in a barter economy without money or inflation.'
    ]
  }
];
