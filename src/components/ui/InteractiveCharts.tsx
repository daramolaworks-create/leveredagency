import React from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, BarChart, Bar, Cell
} from 'recharts';
import { Database, Filter, ArrowRightLeft, Cpu, Repeat } from 'lucide-react';
import { cn } from '../../lib/utils';

// --- CAC/LTV Simulator ---
export const GrowthSimulator = () => {
  const [cac, setCac] = React.useState(50);
  const [ltv, setLtv] = React.useState(200);
  
  const data = React.useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      month: i + 1,
      revenue: (ltv / 12) * (i + 1) * 100,
      cost: cac * 100,
      profit: (ltv / 12) * (i + 1) * 100 - cac * 100
    }));
  }, [cac, ltv]);

  return (
    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold tracking-tight text-white">Unit Economics Simulator</h3>
        <div className="flex gap-4 text-sm font-medium text-slate-400">
          <span>ROI: {((ltv/cac) * 100).toFixed(0)}%</span>
          <span>Payback: {(cac / (ltv/12)).toFixed(1)} Mo</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">CAC ($)</label>
          <input 
            type="range" min="10" max="200" value={cac} 
            onChange={(e) => setCac(Number(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#F3C770]"
          />
          <div className="text-sm font-mono text-white">${cac}</div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-400">LTV ($)</label>
          <input 
            type="range" min="100" max="1000" value={ltv} 
            onChange={(e) => setLtv(Number(e.target.value))}
            className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#F3C770]"
          />
          <div className="text-sm font-mono text-white">${ltv}</div>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F3C770" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#F3C770" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis dataKey="month" hide />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0D0B21', border: '1px solid #ffffff1a', borderRadius: '8px' }}
              itemStyle={{ color: '#ffffff' }}
            />
            <Area type="monotone" dataKey="profit" stroke="#F3C770" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Funnel Breakdown ---
export const FunnelBreakdown = () => {
  const [hovered, setHovered] = React.useState<number | null>(null);
  const stages = [
    { name: 'Awareness', value: 10000, color: '#5837C2' },
    { name: 'Consideration', value: 4500, color: '#74BDF8' },
    { name: 'Conversion', value: 1200, color: '#F3C770' },
    { name: 'Retention', value: 800, color: '#5837C2' },
  ];

  return (
    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
      <h3 className="text-lg font-semibold tracking-tight mb-6 text-white">Funnel Efficiency</h3>
      <div className="space-y-4">
        {stages.map((stage, i) => (
          <div 
            key={stage.name}
            className="relative group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex justify-between text-sm font-medium mb-1 text-slate-400">
              <span>{stage.name}</span>
              <span className="text-white">{stage.value.toLocaleString()}</span>
            </div>
            <div className="h-8 bg-black/40 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(stage.value / stages[0].value) * 100}%` }}
                className="h-full transition-colors duration-300"
                style={{ backgroundColor: stage.color }}
              />
            </div>
            {i > 0 && (
              <div className="absolute -top-4 right-0 text-xs font-medium text-[#F3C770] opacity-0 group-hover:opacity-100 transition-opacity bg-[#110C24] px-2 py-0.5 rounded-full border border-white/10">
                Dropoff: {Math.round((1 - stage.value / stages[i-1].value) * 100)}%
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Attribution Model Toggle ---
export const AttributionModel = () => {
  const [model, setModel] = React.useState<'first' | 'last' | 'linear'>('linear');
  
  const data = {
    first: [
      { name: 'Google', value: 60 },
      { name: 'Meta', value: 20 },
      { name: 'TikTok', value: 20 },
    ],
    last: [
      { name: 'Google', value: 10 },
      { name: 'Meta', value: 70 },
      { name: 'TikTok', value: 20 },
    ],
    linear: [
      { name: 'Google', value: 33 },
      { name: 'Meta', value: 33 },
      { name: 'TikTok', value: 34 },
    ]
  };

  return (
    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-white">Attribution Analysis</h3>
        <div className="flex bg-black/40 p-1 rounded-full border border-white/10">
          {(['first', 'last', 'linear'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={cn(
                "px-4 py-1.5 text-xs font-medium rounded-full transition-all capitalize",
                model === m ? "bg-[#5837C2] text-white shadow" : "text-slate-400 hover:text-white"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[200px] w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data[model]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#ffffff', fontSize: 10, opacity: 0.6 }} />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: '#ffffff05' }}
              contentStyle={{ backgroundColor: '#0D0B21', border: '1px solid #ffffff1a', borderRadius: '8px' }}
              itemStyle={{ color: '#ffffff' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} isAnimationActive={false}>
              {data[model].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#F3C770' : '#5837C2'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// --- Live Zigzag Integrations ---
export const MediaEngineGraph = () => {
  const data = React.useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    name: `Day ${i}`,
    spend: 1000 + Math.random() * 500,
    roas: 2 + (i * 0.1) + Math.random() * 0.5
  })), []);

  return (
    <div className="w-full h-full flex flex-col p-2">
       <div className="flex justify-between items-start mb-4">
         <div>
            <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Live ROAS Model</div>
            <div className="text-white font-display font-bold text-3xl">4.2x</div>
         </div>
         <div className="px-3 py-1 bg-white/20 rounded-full text-white text-xs flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Optimizing
         </div>
       </div>
       <div className="flex-1 mt-4">
         <ResponsiveContainer width="100%" height="100%">
           <LineChart data={data}>
             <Tooltip 
               contentStyle={{ backgroundColor: '#0D0B21', border: '1px solid #ffffff1a', borderRadius: '8px' }}
               itemStyle={{ color: '#ffffff' }}
             />
             <Line type="monotone" dataKey="roas" stroke="#F3C770" strokeWidth={3} dot={false} isAnimationActive={false} />
             <Line type="monotone" dataKey="spend" stroke="#ffffff" strokeOpacity={0.3} strokeWidth={2} dot={false} isAnimationActive={false} />
           </LineChart>
         </ResponsiveContainer>
       </div>
    </div>
  );
};

export const CROTestingGraph = () => {
  const data = React.useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    name: `User ${i}`,
    control: 2.1 + (i * 0.02) + Math.random() * 0.1,
    variant_b: 2.1 + (i * 0.15) + Math.random() * 0.2
  })), []);

  return (
    <div className="w-full h-full flex flex-col p-2">
       <div className="flex justify-between items-start mb-4">
         <div>
            <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">A/B Significance</div>
            <div className="text-[#5837C2] font-display font-bold text-3xl">99.9%</div>
         </div>
         <div className="px-3 py-1 bg-[#5837C2]/10 rounded-full text-[#5837C2] text-xs font-bold border border-[#5837C2]/20">
            Winner Found
         </div>
       </div>
       <div className="flex-1 mt-4">
         <ResponsiveContainer width="100%" height="100%">
           <AreaChart data={data}>
             <defs>
               <linearGradient id="colorVariantB" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="5%" stopColor="#5837C2" stopOpacity={0.6}/>
                 <stop offset="95%" stopColor="#5837C2" stopOpacity={0}/>
               </linearGradient>
             </defs>
             <Tooltip 
               contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '8px' }}
               itemStyle={{ color: '#0f172a' }}
             />
             <Area type="monotone" dataKey="variant_b" stroke="#5837C2" strokeWidth={3} fillOpacity={1} fill="url(#colorVariantB)" isAnimationActive={false} />
             <Area type="monotone" dataKey="control" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fillOpacity={0} fill="transparent" isAnimationActive={false} />
           </AreaChart>
         </ResponsiveContainer>
       </div>
    </div>
  );
};

// --- Technical Full-Width Architecture Animation ---
export const TechnicalGrowthLoop = () => {
  const [activeNode, setActiveNode] = React.useState(0);
  
  const nodes = [
    {
      id: 'acquisition',
      title: 'Signal Acquisition',
      icon: <Filter size={20} />,
      color: '#5837C2',
      technical: 'Server-side API integrations (CAPI/gTag) piping raw first-party events into a centralized data warehouse, bypassing algorithmic pixel decay.',
      metrics: ['< 12ms Latency', 'Zero-party Data Enriching']
    },
    {
      id: 'activation',
      title: 'Algorithmic Bidding',
      icon: <Cpu size={20} />,
      color: '#F3C770',
      technical: 'Dynamic pacing and budget allocation routed through predictive LTV models, forcing ad networks to hunt for enterprise value rather than cheap clicks.',
      metrics: ['Bayesian Adjustments', 'Real-time Reallocation']
    },
    {
      id: 'retention',
      title: 'Lifecycle Orchestration',
      icon: <Repeat size={20} />,
      color: '#1e293b',
      technical: 'Automated CRM flows triggered by machine-learning churn predictors and sentiment analysis to maximize ARPU post-acquisition.',
      metrics: ['Survival Analysis', 'Predictive Routing']
    },
    {
      id: 'measurement',
      title: 'Incrementality Testing',
      icon: <ArrowRightLeft size={20} />,
      color: '#0f172a',
      technical: 'Continuous holdout experiments and mixed-media modeling (MMM) to establish true causal lift and recalibrate baseline budgets.',
      metrics: ['Causal Inference', 'Holdout Baseline']
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % nodes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="w-full bg-white border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center text-left">
      
      {/* Visual Orbital System */}
      <div className="relative w-full md:w-1/2 aspect-square flex items-center justify-center max-w-[400px] mx-auto">
        {/* Core DW */}
        <div className="absolute w-32 h-32 rounded-full bg-slate-50 border-2 border-slate-200 shadow-inner flex flex-col items-center justify-center z-10 transition-colors duration-500" style={{ borderColor: nodes[activeNode].color + '40' }}>
          <Database className="text-slate-400 mb-1" size={24} />
          <span className="font-display font-bold text-xs tracking-widest text-slate-600">LAKE</span>
          
          <motion.div 
            key={activeNode}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: nodes[activeNode].color }}
          />
        </div>

        {/* Orbit Path */}
        <div className="absolute w-[80%] h-[80%] rounded-full border border-slate-200 border-dashed" />

        {/* Nodes */}
        {nodes.map((node, i) => {
          const angle = (i * Math.PI * 2) / nodes.length - Math.PI / 2;
          const radius = 40; 
          const top = `${50 + Math.sin(angle) * radius}%`;
          const left = `${50 + Math.cos(angle) * radius}%`;
          
          const isActive = activeNode === i;

          return (
            <div 
              key={node.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 z-20"
              style={{ top, left }}
              onClick={() => setActiveNode(i)}
            >
              <div 
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300",
                  isActive ? "scale-110 ring-4 ring-offset-2" : "scale-100 hover:scale-105 opacity-40 grayscale"
                )}
                style={{ 
                  backgroundColor: isActive ? node.color : '#f8fafc',
                  color: isActive ? '#fff' : '#64748b',
                  '--tw-ring-color': node.color + '40'
                } as React.CSSProperties}
              >
                {node.icon}
              </div>
              
              {isActive && (
                <motion.div 
                  className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{ backgroundColor: node.color }}
                  initial={{ opacity: 1, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 0, 
                    x: -Math.cos(angle) * 85, 
                    y: -Math.sin(angle) * 85 
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Narrative Technical Panel */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="space-y-4 min-h-[160px]">
          <motion.div
            key={activeNode + '-title'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-2"
            style={{ backgroundColor: nodes[activeNode].color + '15', color: nodes[activeNode].color }}
          >
            System Node 0{activeNode + 1}
          </motion.div>
          <motion.h3 
            key={activeNode + '-h3'}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900"
          >
            {nodes[activeNode].title}
          </motion.h3>
          <motion.p 
            key={activeNode + '-p'}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {nodes[activeNode].technical}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
          {nodes[activeNode].metrics.map((metric, i) => (
             <motion.div 
               key={activeNode + '-m' + i}
               initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
               className="flex items-center gap-2"
             >
               <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: nodes[activeNode].color }} />
               <span className="text-sm font-medium text-slate-700">{metric}</span>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
