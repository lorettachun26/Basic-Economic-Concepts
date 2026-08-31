import React, { useState } from 'react';
import { Sparkles, AlertCircle, ArrowUp, ArrowDown, CheckCircle2, RotateCcw, ShoppingBag, Gift, BookOpen, HelpCircle, DollarSign, Tag, Check, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  price: number; // Price in HKD ($)
  icon: string;
  description: string;
  itemFeature: string;
}

export interface ShoppingScenario {
  id: string;
  title: string;
  subtitle: string;
  budget: number;
  icon: React.ElementType;
  items: ShoppingItem[];
  shockEvents: {
    id: string;
    label: string;
    description: string;
    apply: (items: ShoppingItem[]) => ShoppingItem[];
    explanation: string;
    costOutcome: 'increase' | 'decrease' | 'unchanged';
  }[];
}

const PRESET_SCENARIOS: ShoppingScenario[] = [
  {
    id: 'birthday-money',
    title: '$1,000 Birthday Money (Shopping Decision)',
    subtitle: 'You have exactly $1,000 cash and must choose ONE item to buy',
    budget: 1000,
    icon: Gift,
    items: [
      {
        id: 'item-sneakers',
        name: 'Limited-Edition Sneakers',
        category: 'Fashion',
        price: 1000,
        icon: '👟',
        description: 'Trendy designer sports sneakers for daily casual wear.',
        itemFeature: 'Comfortable cushioning & popular streetwear design'
      },
      {
        id: 'item-concert',
        name: 'Arena Concert Ticket',
        category: 'Entertainment',
        price: 1000,
        icon: '🎤',
        description: 'Front-row live concert ticket to see your favorite pop idol.',
        itemFeature: 'Live arena stage performance & unforgettable music experience'
      },
      {
        id: 'item-headphones',
        name: 'Noise-Cancelling Headphones',
        category: 'Electronics',
        price: 1000,
        icon: '🎧',
        description: 'Wireless Bluetooth headphones with active noise cancellation.',
        itemFeature: 'Blocks out background noise for studying and music'
      },
      {
        id: 'item-themepark',
        name: 'Theme Park 1-Year Pass',
        category: 'Leisure',
        price: 1000,
        icon: '🎢',
        description: 'Annual pass granting 365-day admission to the theme park.',
        itemFeature: 'Unlimited visits, roller coaster rides, and seasonal shows'
      },
      {
        id: 'item-revision',
        name: 'HKDSE Intensive Mock Exam Set',
        category: 'Study',
        price: 1000,
        icon: '📚',
        description: 'Complete set of predicted papers, model answers, and video lectures.',
        itemFeature: 'Targeted exam drilling to boost predicted DSE grades'
      },
      {
        id: 'item-drone',
        name: '4K Foldable Camera Drone',
        category: 'Gadgets',
        price: 1000,
        icon: '🚁',
        description: 'Compact aerial photography drone with optical stabilization and remote controller.',
        itemFeature: 'Captures 4K aerial landscape videos and 30-minute hover flight'
      }
    ],
    shockEvents: [
      {
        id: 'concert-vip-pass',
        label: '🎤 Concert Adds Free Backstage Meet & Greet',
        description: 'The concert organizers announce free backstage meet-and-greet passes for ticket holders.',
        costOutcome: 'increase',
        explanation: 'Because your #2 choice (the Concert Ticket) becomes even more attractive and valuable, what you give up by buying the Sneakers is now greater. Therefore, the OPPORTUNITY COST of buying the Sneakers INCREASES.',
        apply: (items) => items.map(item => 
          item.id === 'item-concert' 
            ? { ...item, name: 'Arena Concert Ticket (with VIP Backstage Meet & Greet)', itemFeature: 'Includes exclusive backstage access and photo opportunity with idol!' } 
            : item
        )
      },
      {
        id: 'drone-bonus-batteries',
        label: '🚁 Drone Adds 3 Free Flight Batteries (Rank #6 Item Changes)',
        description: 'The drone manufacturer adds 3 spare flight batteries worth $400 for free.',
        costOutcome: 'unchanged',
        explanation: 'The drone is a lower-ranked option (#6). If you did not buy the sneakers, you would have bought your #2 choice (Concert Ticket), NOT the drone. Thus, improving lower-ranked alternatives leaves the OPPORTUNITY COST of buying sneakers strictly UNCHANGED.',
        apply: (items) => items.map(item => 
          item.id === 'item-drone' 
            ? { ...item, name: '4K Camera Drone (with 3 Free Batteries)', itemFeature: 'Includes 3 spare batteries & carrying bag' } 
            : item
        )
      },
      {
        id: 'headphones-extra-case',
        label: '🎧 Headphones Include Free Carrying Case',
        description: 'The electronics brand includes a free protective leather case with the headphones.',
        costOutcome: 'unchanged',
        explanation: 'The headphones are your #3 preference. If you had not bought the Sneakers, you would have bought the Concert Ticket (#2), NOT the headphones (#3). Therefore, changes to lower-ranked options leave the OPPORTUNITY COST of buying Sneakers strictly UNCHANGED.',
        apply: (items) => items.map(item => 
          item.id === 'item-headphones' 
            ? { ...item, name: 'Noise-Cancelling Headphones (with Free Leather Case)', itemFeature: 'Includes premium leather case and audio adapter' } 
            : item
        )
      },
      {
        id: 'sneakers-discount',
        label: '🏷️ Sneaker Store Offers $300 Student Discount ($700 final price)',
        description: 'The store runs a promotion, reducing the price of the sneakers from $1,000 to $700.',
        costOutcome: 'decrease',
        explanation: 'You now only spend $700 of your $1,000 budget and keep $300 cash in your pocket. Because you sacrifice less purchasing power, the OPPORTUNITY COST of buying the Sneakers DECREASES.',
        apply: (items) => items.map(item => 
          item.id === 'item-sneakers' 
            ? { ...item, price: 700, description: 'Discounted to $700 (Leaves $300 cash in your wallet!).' } 
            : item
        )
      },
      {
        id: 'sneakers-get-dirty',
        label: '🌧️ Sneakers Get Dirty / You Dislike the Color Later',
        description: 'After wearing them, you realize you don\'t like the color as much as you thought.',
        costOutcome: 'unchanged',
        explanation: 'Core HKDSE Rule: A change in the enjoyment or satisfaction of the CHOSEN item does NOT affect its opportunity cost! What you gave up to buy the sneakers was the concert ticket, which has not changed.',
        apply: (items) => items.map(item => 
          item.id === 'item-sneakers' 
            ? { ...item, description: 'Sneakers bought, but color is less appealing than expected.' } 
            : item
        )
      }
    ]
  },
  {
    id: 'electronics-card',
    title: '$1,000 Electronics Gift Voucher',
    subtitle: 'You won a $1,000 tech store coupon valid for 1 gadget',
    budget: 1000,
    icon: ShoppingBag,
    items: [
      {
        id: 'el-switch',
        name: 'Nintendo Switch Lite Console',
        category: 'Gaming',
        price: 1000,
        icon: '🎮',
        description: 'Handheld video game console for gaming on the go.',
        itemFeature: 'Play thousands of adventure, sports, and party games'
      },
      {
        id: 'el-keyboard',
        name: 'Mechanical RGB Keyboard & Mouse Set',
        category: 'Peripherals',
        price: 1000,
        icon: '⌨️',
        description: 'High-precision esports mechanical keyboard and gaming mouse.',
        itemFeature: 'Tactile mechanical switches and customizable RGB lighting'
      },
      {
        id: 'el-ssd',
        name: '1TB Ultra-Fast External SSD Drive',
        category: 'Storage',
        price: 1000,
        icon: '💾',
        description: 'Portable high-speed solid state drive for backup and video editing.',
        itemFeature: '1050 MB/s transfer speed to store all files and study videos'
      },
      {
        id: 'el-watch',
        name: 'Smart Fitness Tracking Watch',
        category: 'Wearables',
        price: 1000,
        icon: '⌚',
        description: 'Waterproof sports watch with heart rate and GPS tracking.',
        itemFeature: 'Monitors sports performance, sleep cycles, and daily steps'
      },
      {
        id: 'el-earbuds',
        name: 'True Wireless Studio Earbuds',
        category: 'Audio',
        price: 1000,
        icon: '🎵',
        description: 'Hi-Res Bluetooth earbuds with active noise cancellation and wireless charging case.',
        itemFeature: '32-hour total battery life and high-fidelity sound clarity'
      }
    ],
    shockEvents: [
      {
        id: 'keyboard-warranty-bonus',
        label: '⌨️ Keyboard Adds 2-Year Extended Warranty & Mousepad',
        description: 'Manufacturer adds a 2-year warranty and a giant gaming mousepad for free.',
        costOutcome: 'increase',
        explanation: 'Your #2 option (Keyboard Set) has gained extra benefits. Forgoing this option is now a bigger sacrifice, so the OPPORTUNITY COST of choosing the Switch Console INCREASES.',
        apply: (items) => items.map(item => 
          item.id === 'el-keyboard' 
            ? { ...item, name: 'Mechanical Keyboard Set (with 2-Yr Warranty & Mat)', itemFeature: 'Includes 2-year full warranty and extra-large desk pad' } 
            : item
        )
      },
      {
        id: 'ssd-speed-double',
        label: '💾 SSD Storage Upgrades to 2TB Capacity',
        description: 'The store doubles the SSD capacity from 1TB to 2TB for the same price.',
        costOutcome: 'unchanged',
        explanation: 'The SSD is your #3 choice. If you did not buy the Switch, you would have bought the Keyboard Set (#2). Improving the #3 choice does not change what you actually give up. Opportunity cost remains UNCHANGED.',
        apply: (items) => items.map(item => 
          item.id === 'el-ssd' 
            ? { ...item, name: '2TB Ultra-Fast External SSD Drive', itemFeature: 'Upgraded to 2TB huge capacity at same $1,000 price' } 
            : item
        )
      },
      {
        id: 'switch-zelda-release',
        label: '🎮 A New Zelda Game is Released for Switch',
        description: 'A masterpiece game is launched, making the Switch console even more fun to own.',
        costOutcome: 'unchanged',
        explanation: 'Making the chosen good more desirable does NOT change the opportunity cost of buying it. The forgone alternative (the keyboard set) remains the same.',
        apply: (items) => items.map(item => 
          item.id === 'el-switch' 
            ? { ...item, itemFeature: 'Now with access to the brand new award-winning Zelda game!' } 
            : item
        )
      }
    ]
  },
  {
    id: 'study-grant',
    title: '$1,000 School Learning Grant',
    subtitle: 'The school awards you a $1,000 grant for study supplies',
    budget: 1000,
    icon: BookOpen,
    items: [
      {
        id: 'st-tablet',
        name: '10-Inch Study Tablet with Stylus Pen',
        category: 'Digital Learning',
        price: 1000,
        icon: '📱',
        description: 'Digital tablet for writing notes, reading PDFs, and watching lessons.',
        itemFeature: 'Paperless handwriting and lightweight schoolbag'
      },
      {
        id: 'st-papers',
        name: '10-Year DSE Past Papers & Solution Book',
        category: 'Past Papers',
        price: 1000,
        icon: '📖',
        description: 'Official HKEAA past papers with step-by-step marking rubrics.',
        itemFeature: 'Detailed marking schemes and examiner reports from past 10 years'
      },
      {
        id: 'st-calc',
        name: 'Advanced Scientific Graphing Calculator',
        category: 'Mathematics',
        price: 1000,
        icon: '📐',
        description: 'High-end approved examination calculator with formula storage.',
        itemFeature: 'Fast matrix calculations and programmable shortcuts'
      },
      {
        id: 'st-workshop',
        name: 'English Public Speaking Masterclass',
        category: 'Language Skills',
        price: 1000,
        icon: '🗣️',
        description: 'Small-group interactive oral workshop for HKDSE English Paper 4.',
        itemFeature: 'Native tutor feedback, group discussion drills, and vocabulary builder'
      },
      {
        id: 'st-desk',
        name: 'Ergonomic Study Chair & Lamp Set',
        category: 'Study Environment',
        price: 1000,
        icon: '🪑',
        description: 'Spine-support study chair with adjustable eye-care LED desk lamp.',
        itemFeature: 'Comfortable lumbar posture support and flicker-free eye care'
      }
    ],
    shockEvents: [
      {
        id: 'papers-free-marking',
        label: '📖 Past Paper Set Includes Free 1-on-1 Essay Marking',
        description: 'Publisher includes 5 free professional essay evaluations by top markers.',
        costOutcome: 'increase',
        explanation: 'The #2 choice (Past Papers) is now more beneficial. Giving it up is a bigger loss, so the OPPORTUNITY COST of choosing the Tablet INCREASES.',
        apply: (items) => items.map(item => 
          item.id === 'st-papers' 
            ? { ...item, name: '10-Yr DSE Past Papers (with 5 Free Essay Markings)', itemFeature: 'Includes 5 personalized marker feedbacks on your essays' } 
            : item
        )
      },
      {
        id: 'calc-free-case',
        label: '📐 Calculator Comes with Free Hard Protective Shell',
        description: 'Calculator includes a shockproof case.',
        costOutcome: 'unchanged',
        explanation: 'Calculator is the #3 choice. Changing its value has no effect on the opportunity cost of buying the tablet (#1). Cost remains UNCHANGED.',
        apply: (items) => items.map(item => 
          item.id === 'st-calc' 
            ? { ...item, itemFeature: 'Includes shockproof protective hard travel shell' } 
            : item
        )
      },
      {
        id: 'tablet-subsidy',
        label: '🏷️ Government 50% Student Subsidy on Tablet ($500 Price)',
        description: 'Special education subsidy reduces tablet price from $1,000 to $500.',
        costOutcome: 'decrease',
        explanation: 'Because you only need to spend $500 instead of $1,000 of your grant (keeping $500 for other items), the OPPORTUNITY COST of getting the tablet DECREASES.',
        apply: (items) => items.map(item => 
          item.id === 'st-tablet' 
            ? { ...item, price: 500, description: 'Subsidized price: $500 (Leaves $500 grant balance!).' } 
            : item
        )
      }
    ]
  }
];

export const CostSimulator: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('birthday-money');
  const [currentScenario, setCurrentScenario] = useState<ShoppingScenario>(PRESET_SCENARIOS[0]);
  const [items, setItems] = useState<ShoppingItem[]>(PRESET_SCENARIOS[0].items);
  const [activeShockId, setActiveShockId] = useState<string>('none');

  // Handle Scenario Switch
  const handleSelectScenario = (scenarioId: string) => {
    const found = PRESET_SCENARIOS.find(s => s.id === scenarioId) || PRESET_SCENARIOS[0];
    setActiveScenarioId(scenarioId);
    setCurrentScenario(found);
    setItems(found.items);
    setActiveShockId('none');
  };

  // Reorder items
  const moveItem = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= items.length) return;
    const updated = [...items];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, moved);
    setItems(updated);
  };

  // Reset to default
  const handleReset = () => {
    setItems(currentScenario.items);
    setActiveShockId('none');
  };

  // Apply Shock
  const handleApplyShock = (shockId: string) => {
    if (shockId === activeShockId) {
      handleReset();
      return;
    }
    const shock = currentScenario.shockEvents.find(s => s.id === shockId);
    if (!shock) return;
    setActiveShockId(shockId);
    setItems(shock.apply(currentScenario.items));
  };

  const selectedItem = items[0];
  const forgoneItems = items.slice(1);
  const highestForgoneItem = forgoneItems[0];
  const otherForgoneItems = forgoneItems.slice(1);

  const activeShock = currentScenario.shockEvents.find(s => s.id === activeShockId);

  return (
    <div className="space-y-6">
      {/* Header Banner - Clean Geometric Slate & Emerald */}
      <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider rounded mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              HKDSE Core Concept: Opportunity Cost = Highest-Valued Option Forgone
            </div>
            <h2 className="text-2xl font-black tracking-tight text-white">
              Opportunity Cost: The $1,000 Shopping Decision
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-2xl leading-relaxed">
              <strong className="text-emerald-400">Opportunity Cost = Highest-valued option forgone</strong>. When you spend your fixed <strong className="text-emerald-400 font-mono">$1,000</strong> on your 1st choice, your opportunity cost is <span className="text-amber-300 font-semibold">forgoing your #2 choice</span>.
            </p>
          </div>

          {/* Budget Badge Card */}
          <div className="bg-slate-800 border border-slate-700/80 p-4 rounded-xl text-center min-w-[240px]">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block flex items-center justify-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              Available Budget
            </span>
            <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
              $1,000 HKD
            </div>
            <div className="text-[11px] text-slate-400 mt-1 bg-slate-900/60 px-2 py-0.5 rounded border border-slate-700">
              Only enough to buy <strong>1 item</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {PRESET_SCENARIOS.map(scenario => {
          const Icon = scenario.icon;
          const isActive = scenario.id === activeScenarioId;
          return (
            <button
              key={scenario.id}
              onClick={() => handleSelectScenario(scenario.id)}
              className={`px-4 py-2.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? 'bg-slate-900 text-emerald-400 border-slate-900 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{scenario.title}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Market Events Bar */}
      <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-700">
              Test Real-Life Events (Click to see cost reaction):
            </span>
          </div>
          {activeShockId !== 'none' && (
            <button
              onClick={handleReset}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Scenario</span>
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {currentScenario.shockEvents.map(shock => {
            const isShockActive = activeShockId === shock.id;
            return (
              <button
                key={shock.id}
                onClick={() => handleApplyShock(shock.id)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer border ${
                  isShockActive
                    ? 'bg-slate-900 text-emerald-400 border-emerald-500 shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                {shock.label}
              </button>
            );
          })}
        </div>

        {/* Shock Explanation Banner */}
        <AnimatePresence>
          {activeShock && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 pt-3 border-t border-slate-100 overflow-hidden"
            >
              <div className={`p-3.5 rounded-lg text-xs flex items-start gap-2.5 border ${
                activeShock.costOutcome === 'increase'
                  ? 'bg-emerald-50 text-emerald-950 border-emerald-200'
                  : activeShock.costOutcome === 'decrease'
                  ? 'bg-blue-50 text-blue-950 border-blue-200'
                  : 'bg-amber-50 text-amber-950 border-amber-200'
              }`}>
                <AlertCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                  activeShock.costOutcome === 'increase' ? 'text-emerald-600' : activeShock.costOutcome === 'decrease' ? 'text-blue-600' : 'text-amber-600'
                }`} />
                <div>
                  <div className="font-bold uppercase tracking-wider text-[11px] mb-1">
                    HKDSE Verdict: Opportunity Cost {activeShock.costOutcome.toUpperCase()}
                  </div>
                  <p className="leading-relaxed text-slate-800">
                    {activeShock.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Grid: Item Preference Hierarchy & Live Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Ranked Items List */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span>Your Preference Ranking</span>
              <span className="text-[11px] font-normal lowercase text-slate-500">(Use arrows to change which item you buy)</span>
            </h3>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded">
              {items.length} Items Available
            </span>
          </div>

          <div className="space-y-2.5">
            {items.map((item, idx) => {
              const isSelected = idx === 0;
              const isHighestForgone = idx === 1;
              const isOtherForgone = idx > 1;

              return (
                <div
                  key={item.id}
                  className={`p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-emerald-50/90 border-emerald-400 shadow-xs'
                      : isHighestForgone
                      ? 'bg-amber-50/90 border-amber-400 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 opacity-80'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3 flex-1">
                      {/* Rank Number Badge */}
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          isSelected
                            ? 'bg-emerald-600 text-white'
                            : isHighestForgone
                            ? 'bg-amber-600 text-white'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        #{idx + 1}
                      </div>

                      <div className="space-y-1 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-base">{item.icon}</span>
                          <span className="font-bold text-slate-900 text-sm">{item.name}</span>
                          
                          {isSelected && (
                            <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                              ★ CHOSEN ITEM (You Buy This with $1,000)
                            </span>
                          )}
                          {isHighestForgone && (
                            <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                              ✦ THE OPPORTUNITY COST (Your #2 Choice)
                            </span>
                          )}
                          {isOtherForgone && (
                            <span className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded">
                              Rank #{idx + 1} (Not part of opportunity cost)
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-600">{item.description}</p>
                        
                        <div className="pt-1 text-[11px] text-slate-500 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold">
                            Price: ${item.price.toLocaleString()} HKD
                          </span>
                          <span className="text-slate-600 italic">
                            Feature: {item.itemFeature}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Ranking Action Buttons */}
                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        onClick={() => moveItem(idx, 'up')}
                        disabled={idx === 0}
                        aria-label="Move item up"
                        className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 disabled:opacity-25 disabled:cursor-not-allowed text-slate-600 cursor-pointer"
                        title="Move Higher in Preference"
                      >
                        <ArrowUp className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => moveItem(idx, 'down')}
                        disabled={idx === items.length - 1}
                        aria-label="Move item down"
                        className="p-1.5 rounded bg-slate-100 hover:bg-slate-200 disabled:opacity-25 disabled:cursor-not-allowed text-slate-600 cursor-pointer"
                        title="Move Lower in Preference"
                      >
                        <ArrowDown className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Live Opportunity Cost Deduction */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-slate-900 text-white rounded-xl p-5 shadow-lg border border-slate-800">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Live Opportunity Cost Deduction
            </h4>

            <div className="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700 space-y-3">
              <div>
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  1. The Item You Buy (1st Choice):
                </div>
                <div className="text-sm font-bold text-white pl-2 border-l-4 border-emerald-500 mt-1 flex items-center gap-2">
                  <span>{selectedItem.icon}</span>
                  <span>{selectedItem.name} (${selectedItem.price})</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  2. The Opportunity Cost (2nd Choice Forgone):
                </div>
                <div className="text-sm font-bold text-amber-300 pl-2 border-l-4 border-amber-500 mt-1 flex items-center gap-2">
                  <span>{highestForgoneItem?.icon}</span>
                  <span>Forgoing the {highestForgoneItem?.name}</span>
                </div>
                <div className="text-xs text-slate-300 mt-1 pl-3 italic">
                  {highestForgoneItem?.itemFeature}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700">
                <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                  3. HKDSE Definition & Cost Formulas:
                </div>
                <div className="bg-slate-950 p-3 rounded-lg text-xs font-mono text-emerald-400 border border-slate-800 mt-1 space-y-1.5">
                  <div className="font-bold text-white">Opportunity Cost = Highest-valued option forgone</div>
                  <div>= Value of forgoing [{highestForgoneItem?.name}]</div>
                  <div className="pt-1 border-t border-slate-800 text-amber-300">
                    Full Cost = Monetary Cost + Non-monetary Cost only
                  </div>
                  {selectedItem.price < currentScenario.budget && (
                    <div className="text-slate-300 text-[11px]">
                      (+ You have ${currentScenario.budget - selectedItem.price} left over)
                    </div>
                  )}
                </div>
              </div>

              {/* Dedicated Implicit Cost Box */}
              <div className="pt-2 border-t border-slate-700">
                <div className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Implicit Cost (隱性成本) Factor Box:
                </div>
                <div className="bg-slate-950/80 p-2.5 rounded-lg border border-emerald-500/30 text-[11px] text-slate-300 mt-1 space-y-1">
                  <p>
                    <strong className="text-white">Definition:</strong> Forgone return/income from using <em>self-owned resources</em> without direct cash outflow.
                  </p>
                  <p className="text-slate-400">
                    • <em>Time & Effort:</em> Queuing or shopping time = forgone leisure / work wage.<br />
                    • <em>Self-owned funds:</em> Cash spent = forgone bank deposit interest.
                  </p>
                </div>
              </div>
            </div>

            {/* Why only the 2nd option counts? */}
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-1 text-emerald-400 font-bold text-[11px] uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                Why are choices #3, #4, and #5 NOT added?
              </div>
              <p className="leading-relaxed text-slate-300 text-[11px]">
                Because you only have <strong>$1,000 in your pocket</strong>, you could never have bought all the other items together. If you did not buy your 1st choice ({selectedItem.name}), you would only have bought your <strong>2nd choice ({highestForgoneItem?.name})</strong>.
              </p>
              <div className="bg-slate-950/70 p-2.5 rounded border border-slate-800 text-[11px] text-slate-400">
                ⚠️ <strong>Common Exam Mistake:</strong> Never write that cost is equal to Item #2 + Item #3 + Item #4 added together!
              </div>
            </div>
          </div>

          {/* Golden Rules Summary Card */}
          <div className="bg-white border-l-4 border-slate-900 border-r border-t border-b border-slate-200 rounded-r-xl p-4 text-xs text-slate-800 space-y-2 shadow-xs">
            <h5 className="font-bold text-slate-900 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              HKDSE Opportunity Cost Golden Rules:
            </h5>
            <div className="space-y-1.5 text-slate-700 text-[11px] leading-relaxed">
              <p>
                1. <strong>Opportunity Cost:</strong> Value of the highest-valued option forgone (2nd choice).
              </p>
              <p>
                2. <strong>Full Cost Equation:</strong> Full Cost = Monetary Cost + Non-monetary Cost only.
              </p>
              <p>
                3. <strong>Implicit Cost:</strong> Forgone return of self-owned resources (salary, rent, interest).
              </p>
              <p>
                4. <strong>Chosen Item Enjoyment:</strong> If the item you bought breaks or you like it less later, opportunity cost remains <strong>UNCHANGED</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
