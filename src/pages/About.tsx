import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      <header className="space-y-8 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.8] text-[#6E026F]">
          Growth is <br />
          <span className="text-brand-orange">Not Luck.</span>
        </h1>
        <p className="text-[#6E026F]/70 text-xl md:text-2xl font-light leading-relaxed">
          Levered was founded on a simple premise: marketing is a data engineering problem. We build the systems that make growth predictable, scalable, and compounding.
        </p>
      </header>

      {/* Philosophy Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Systems Over Campaigns', desc: 'We don\'t believe in "one-off" wins. We build interoperable growth loops that compound over time.' },
          { title: 'Data Integrity First', desc: 'Garbage in, garbage out. We spend as much time on attribution and tracking as we do on creative.' },
          { title: 'Alpha in the Noise', desc: 'In saturated markets, the only way to win is through superior measurement and faster experimentation.' },
        ].map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="w-12 h-1 bg-brand-orange" />
            <h3 className="text-xl font-display font-bold uppercase text-[#6E026F]">{item.title}</h3>
            <p className="text-[#6E026F]/60 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-black/5 grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { label: 'Capital Managed', value: '$450M+' },
          { label: 'Experiments Run', value: '12,400+' },
          { label: 'Data Points/Day', value: '1.2B' },
          { label: 'Team Size', value: '24' },
        ].map((stat, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="text-4xl font-display font-bold text-[#6E026F]">{stat.value}</div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#6E026F]/40">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* Team/Culture */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter text-[#6E026F]">The Levered <br /> Engineering Team.</h2>
          <p className="text-[#6E026F]/70 leading-relaxed">
            Our team isn't composed of traditional "marketers." We are data scientists, software engineers, and performance analysts. We approach every client partner as a technical challenge to be solved.
          </p>
          <ul className="space-y-4">
            {['Ex-Quant Analysts', 'Full-stack Growth Engineers', 'Statistical Modelers', 'Creative Technologists'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-mono text-[#6E026F]/60 uppercase tracking-wider">
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="aspect-square glass rounded-2xl flex items-center justify-center p-12">
          <div className="relative w-full h-full border border-[#6E026F]/10 rounded-full flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-t-2 border-brand-orange rounded-full"
            />
            <div className="text-center space-y-2">
              <div className="text-5xl font-display font-black text-[#6E026F]">24/7</div>
              <div className="text-[10px] font-mono uppercase text-[#6E026F]/40">System Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
