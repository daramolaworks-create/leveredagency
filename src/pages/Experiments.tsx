import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Beaker, CheckCircle2, TrendingUp, FlaskConical, ArrowRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { cn } from '../lib/utils';

const experimentData = [
  { day: 'Day 1', variantA: 10, variantB: 12 },
  { day: 'Day 3', variantA: 15, variantB: 22 },
  { day: 'Day 5', variantA: 18, variantB: 35 },
  { day: 'Day 7', variantA: 22, variantB: 48 },
  { day: 'Day 10', variantA: 25, variantB: 62 },
  { day: 'Day 14', variantA: 30, variantB: 85 },
];

export const Experiments = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <header className="space-y-6 max-w-3xl">
        <div className="flex items-center gap-2 text-brand-orange font-mono text-xs uppercase tracking-widest">
          <FlaskConical size={16} />
          Live Experimentation Lab
        </div>
        <h1 className="text-6xl font-display font-black uppercase tracking-tighter text-[#6E026F]">
          The Lab.
        </h1>
        <p className="text-[#6E026F]/70 text-xl leading-relaxed">
          We run hundreds of experiments monthly. This is a live look at our methodology, hypothesis testing, and statistical significance models.
        </p>
      </header>

      {/* Featured Experiment */}
      <section className="glass rounded-2xl overflow-hidden border border-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-black/5">
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-brand-orange uppercase tracking-widest">Active Experiment #842</span>
              <h2 className="text-3xl font-display font-bold uppercase text-[#6E026F]">Checkout Flow: Multi-step vs. Single-page</h2>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-black/5 rounded-lg border border-black/5">
                <h4 className="text-xs font-mono uppercase text-[#6E026F]/60 mb-2">Hypothesis</h4>
                <p className="text-sm text-[#6E026F]">Reducing cognitive load by splitting checkout into 3 distinct steps will increase completion rate by 15% for mobile users.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-black/5 rounded-lg">
                  <h4 className="text-xs font-mono uppercase text-[#6E026F]/60 mb-2 flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-green-600" /> Variant A (Control)
                  </h4>
                  <p className="text-sm font-mono text-[#6E026F]">Single Page Checkout</p>
                </div>
                <div className="p-4 border border-brand-orange/30 bg-brand-orange/5 rounded-lg">
                  <h4 className="text-xs font-mono uppercase text-brand-orange mb-2 flex items-center gap-2">
                    <TrendingUp size={12} /> Variant B (Challenger)
                  </h4>
                  <p className="text-sm font-mono text-brand-orange">3-Step Progressive Flow</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase text-[#6E026F]/60">Live Metrics</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl font-display font-bold text-[#6E026F]">98.4%</div>
                  <div className="text-[10px] font-mono text-[#6E026F]/40 uppercase">Confidence</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-green-600">+28.4%</div>
                  <div className="text-[10px] font-mono text-[#6E026F]/40 uppercase">Lift</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-[#6E026F]">14,202</div>
                  <div className="text-[10px] font-mono text-[#6E026F]/40 uppercase">Sample Size</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 bg-white/20 flex flex-col justify-center">
            <h3 className="text-xs font-mono uppercase text-[#6E026F]/60 mb-8">Conversion Rate Over Time</h3>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={experimentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#00000005" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#6E026F', fontSize: 10, opacity: 0.6 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6E026F', fontSize: 10, opacity: 0.6 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle" />
                  <Line type="monotone" dataKey="variantA" name="Control" stroke="#6E026F" strokeOpacity={0.3} strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="variantB" name="Challenger" stroke="#FA891A" strokeWidth={3} dot={{ r: 4, fill: '#FA891A' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Experiment Archive */}
      <section className="space-y-10">
        <h3 className="text-2xl font-display font-bold uppercase text-[#6E026F]">Recent Findings</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: '741', title: 'SMS vs Email for Cart Recovery', result: 'SMS +42%', status: 'Winner' },
            { id: '739', title: 'Dynamic Pricing Thresholds', result: 'Inconclusive', status: 'Stopped' },
            { id: '732', title: 'AI Copywriting vs Human', result: 'AI +12% CTR', status: 'Winner' },
          ].map((exp) => (
            <div key={exp.id} className="p-6 glass border-t-2 border-t-brand-orange space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono text-[#6E026F]/40">#EXP-{exp.id}</span>
                <span className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded-full uppercase",
                  exp.status === 'Winner' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                )}>
                  {exp.status}
                </span>
              </div>
              <h4 className="font-display font-bold uppercase text-sm leading-tight text-[#6E026F]">{exp.title}</h4>
              <div className="text-xl font-display font-bold text-[#6E026F]">{exp.result}</div>
              <button className="text-[10px] font-mono uppercase text-brand-orange hover:underline">View Full Report</button>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Link */}
      <section className="py-20 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-bold uppercase text-[#6E026F]">How we run experiments.</h3>
          <p className="text-[#6E026F]/60 max-w-md">Learn about our Bayesian framework and statistical significance models.</p>
        </div>
        <Link to="/methodology" className="px-8 py-4 border border-[#6E026F]/20 text-[#6E026F] font-display font-bold uppercase tracking-widest hover:bg-[#6E026F] hover:text-white transition-all rounded-sm flex items-center gap-2">
          Our Methodology <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
};
