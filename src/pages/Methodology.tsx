import React from 'react';
import { motion } from 'motion/react';
import { Search, FlaskConical, BarChart3, Repeat, ArrowRight, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <Search className="text-brand-orange" />,
    title: 'Audit & Infrastructure',
    desc: 'We start by auditing your current data stack. We fix attribution leaks, deploy server-side tracking, and ensure your data is 100% reliable.',
    details: ['Server-side GTM Audit', 'Event Taxonomy Mapping', 'Attribution Model Review']
  },
  {
    icon: <FlaskConical className="text-brand-orange" />,
    title: 'Hypothesis Generation',
    desc: 'Using historical data, we identify the highest-leverage opportunities for growth. We build a backlog of experiments prioritized by ICE score.',
    details: ['ICE Prioritization', 'Bayesian Forecasting', 'Creative Strategy']
  },
  {
    icon: <BarChart3 className="text-brand-orange" />,
    title: 'Rapid Experimentation',
    desc: 'We deploy experiments across acquisition, conversion, and retention. Our "Lab" approach ensures we learn fast and scale winners immediately.',
    details: ['A/B/n Testing', 'Multi-variant Creative', 'Funnel Optimization']
  },
  {
    icon: <Repeat className="text-brand-orange" />,
    title: 'System Integration',
    desc: 'Winners are integrated into your core growth system. We automate the loops that work and move on to the next high-leverage hypothesis.',
    details: ['Automation Workflows', 'LTV Loop Integration', 'Reporting Dashboards']
  }
];

export const Methodology = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      <header className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E026F]/5 border border-[#6E026F]/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E026F]">
          The Levered Framework v4.0
        </div>
        <h1 className="text-6xl font-display font-black uppercase tracking-tighter text-[#6E026F]">
          The Engineering <br /> of Growth.
        </h1>
        <p className="text-[#6E026F]/70 text-xl leading-relaxed">
          Growth is not a series of hacks. It is a repeatable, interoperable system built on data integrity and statistical experimentation.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 glass rounded-2xl border border-black/5 space-y-6 relative group"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-display font-bold uppercase text-[#6E026F]">{step.title}</h3>
              <p className="text-sm text-[#6E026F]/60 leading-relaxed">{step.desc}</p>
            </div>
            <ul className="space-y-2 pt-4 border-t border-black/5">
              {step.details.map((detail, j) => (
                <li key={j} className="text-[10px] font-mono uppercase text-[#6E026F]/40 tracking-widest flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand-orange rounded-full" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      <section className="py-32 bg-[#6E026F] rounded-[2rem] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 grid-pattern invert" />
        <div className="relative z-10 max-w-4xl mx-auto px-10 text-center space-y-12">
          <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9]">
            We build the systems <br /> that build the business.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-brand-orange">100%</div>
              <p className="text-xs font-mono uppercase text-white/60 tracking-widest">Data Integrity</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-brand-orange">24/7</div>
              <p className="text-xs font-mono uppercase text-white/60 tracking-widest">Automated Optimization</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-display font-bold text-brand-orange">ICE</div>
              <p className="text-xs font-mono uppercase text-white/60 tracking-widest">Prioritized Backlog</p>
            </div>
          </div>
          <div className="pt-8">
            <button className="px-12 py-5 bg-brand-orange text-white font-display font-bold uppercase tracking-widest hover:bg-white hover:text-[#6E026F] transition-all rounded-sm">
              Request System Audit
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-display font-bold uppercase text-[#6E026F]">The Levered Tech Stack</h2>
          <p className="text-[#6E026F]/70 leading-relaxed text-lg">
            We don't just use tools; we engineer integrations. Our stack is designed for maximum liquidity of data and minimum latency in decision making.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: 'Data Warehouse', value: 'BigQuery / Snowflake' },
              { label: 'Attribution', 'value': 'Server-side GTM' },
              { label: 'Modeling', 'value': 'Python / Bayesian' },
              { label: 'Execution', 'value': 'Custom APIs' }
            ].map((item, i) => (
              <div key={i} className="p-4 glass rounded-lg border border-black/5">
                <div className="text-[10px] font-mono uppercase text-[#6E026F]/40 mb-1">{item.label}</div>
                <div className="text-sm font-display font-bold text-[#6E026F]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="glass aspect-square rounded-3xl p-12 flex flex-col items-center justify-center space-y-8 text-center">
          <div className="w-24 h-24 rounded-full bg-brand-orange/10 flex items-center justify-center">
            <ShieldCheck size={48} className="text-brand-orange" />
          </div>
          <h3 className="text-2xl font-display font-bold uppercase text-[#6E026F]">Security & Privacy First</h3>
          <p className="text-sm text-[#6E026F]/60 leading-relaxed">
            All our systems are built with GDPR, CCPA, and SOC2 compliance in mind. We prioritize data security as much as we prioritize growth.
          </p>
        </div>
      </section>
    </div>
  );
};
