import React from 'react';
import { motion } from 'motion/react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, BarChart, Bar, Cell
} from 'recharts';
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
    <div className="p-6 glass rounded-xl space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-display font-bold uppercase tracking-wider">Unit Economics Simulator</h3>
        <div className="flex gap-4 text-xs font-mono text-brand-secondary">
          <span>ROI: {((ltv/cac) * 100).toFixed(0)}%</span>
          <span>Payback: {(cac / (ltv/12)).toFixed(1)} Mo</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs uppercase text-brand-secondary font-mono">CAC ($)</label>
          <input 
            type="range" min="10" max="200" value={cac} 
            onChange={(e) => setCac(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
          />
          <div className="text-sm font-mono">${cac}</div>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase text-brand-secondary font-mono">LTV ($)</label>
          <input 
            type="range" min="100" max="1000" value={ltv} 
            onChange={(e) => setLtv(Number(e.target.value))}
            className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
          />
          <div className="text-sm font-mono">${ltv}</div>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FA891A" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#FA891A" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#00000010" vertical={false} />
            <XAxis dataKey="month" hide />
            <YAxis hide />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              itemStyle={{ color: '#1a1a1a' }}
            />
            <Area type="monotone" dataKey="profit" stroke="#FA891A" strokeWidth={2} fillOpacity={1} fill="url(#colorProfit)" />
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
    { name: 'Awareness', value: 10000, color: '#6E026F' },
    { name: 'Consideration', value: 4500, color: '#ABDADC' },
    { name: 'Conversion', value: 1200, color: '#FA891A' },
    { name: 'Retention', value: 800, color: '#6E026F' },
  ];

  return (
    <div className="p-6 glass rounded-xl">
      <h3 className="text-lg font-display font-bold uppercase tracking-wider mb-6 text-[#6E026F]">Funnel Efficiency</h3>
      <div className="space-y-4">
        {stages.map((stage, i) => (
          <div 
            key={stage.name}
            className="relative group"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex justify-between text-xs font-mono mb-1 text-[#6E026F]/60 uppercase">
              <span>{stage.name}</span>
              <span>{stage.value.toLocaleString()}</span>
            </div>
            <div className="h-8 bg-black/5 rounded-sm overflow-hidden border border-black/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(stage.value / stages[0].value) * 100}%` }}
                className="h-full transition-colors duration-300"
                style={{ backgroundColor: stage.color }}
              />
            </div>
            {i > 0 && (
              <div className="absolute -top-3 right-0 text-[10px] font-mono text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity">
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
    <div className="p-6 glass rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-display font-bold uppercase tracking-wider text-[#6E026F]">Attribution Analysis</h3>
        <div className="flex bg-black/5 p-1 rounded-lg border border-black/10">
          {(['first', 'last', 'linear'] as const).map((m) => (
            <button
              key={m}
              onClick={() => setModel(m)}
              className={cn(
                "px-3 py-1 text-[10px] uppercase font-mono rounded-md transition-all",
                model === m ? "bg-brand-orange text-white" : "text-[#6E026F]/60 hover:text-[#6E026F]"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
      
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data[model]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#00000010" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6E026F', fontSize: 10, opacity: 0.6 }} />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {data[model].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? '#FA891A' : '#6E026F'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
