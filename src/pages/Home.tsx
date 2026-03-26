import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Target, BarChart3, Repeat } from 'lucide-react';
import { GrowthSimulator, FunnelBreakdown, AttributionModel } from '../components/ui/InteractiveCharts';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 overflow-hidden grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F1E6C9]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center space-y-8 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6E026F]/5 border border-[#6E026F]/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#6E026F]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6E026F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6E026F]"></span>
            </span>
            Growth Systems v2.4 Active
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase leading-[0.9] text-[#6E026F]">
            Growth is <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E026F] via-[#6E026F] to-[#6E026F]/40">
              Engineered.
            </span>
          </h1>
          
          <p className="text-[#6E026F]/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            We don’t do marketing. We build interoperable data systems, attribution models, and AI-powered growth loops for the next generation of category leaders.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/contact" className="w-full md:w-auto px-8 py-4 bg-[#6E026F] text-white font-display font-bold uppercase tracking-widest hover:bg-brand-orange transition-all rounded-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-purple/20">
              Deploy System <ArrowUpRight size={18} />
            </Link>
            <Link to="/experiments" className="w-full md:w-auto px-8 py-4 glass text-[#6E026F] font-display font-bold uppercase tracking-widest hover:bg-white/60 transition-all rounded-sm">
              View Experiments
            </Link>
          </div>
        </motion.div>

        {/* Floating Interactive Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-6"
        >
          <GrowthSimulator />
          <FunnelBreakdown />
          <AttributionModel />
        </motion.div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter leading-none text-[#6E026F]">
              The Quant Fund <br /> Approach to Growth.
            </h2>
            <p className="text-[#6E026F]/70 leading-relaxed">
              Most agencies guess. We simulate. Levered operates at the intersection of data engineering and performance marketing. Our systems are built to find alpha in saturated markets.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-brand-orange">3.4x</div>
                <div className="text-[10px] uppercase font-mono text-[#6E026F]/40 tracking-widest">Avg. ROAS Improvement</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display font-bold text-brand-orange">12ms</div>
                <div className="text-[10px] uppercase font-mono text-[#6E026F]/40 tracking-widest">Attribution Latency</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: <Zap size={20} />, title: 'Paid Media Systems', desc: 'Programmatic buying across Meta, Google, and TikTok.' },
              { icon: <Target size={20} />, title: 'CRO Engineering', desc: 'Statistical significance driven experimentation.' },
              { icon: <Repeat size={20} />, title: 'Retention Loops', desc: 'Predictive LTV modeling and automated lifecycle.' },
              { icon: <BarChart3 size={20} />, title: 'Measurement', desc: 'Custom attribution and server-side tracking.' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 10 }}
                className="p-6 glass border-l-4 border-l-brand-orange flex gap-6 items-start"
              >
                <div className="text-brand-orange mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-display font-bold uppercase tracking-wider mb-1 text-[#6E026F]">{item.title}</h4>
                  <p className="text-sm text-[#6E026F]/60">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Loop Visualization */}
      <section className="py-32 bg-white/30 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold uppercase text-[#6E026F]">The Levered Growth Loop</h2>
            <p className="text-[#6E026F]/60 max-w-2xl mx-auto">Our proprietary system for continuous optimization and compounding returns.</p>
          </div>
          
          <div className="relative h-[400px] flex items-center justify-center">
            {/* Animated SVG Loop */}
            <svg width="600" height="400" viewBox="0 0 600 400" className="max-w-full">
              <motion.circle 
                cx="300" cy="200" r="120" 
                fill="none" stroke="#6E026F" strokeWidth="2" strokeDasharray="10 10" strokeOpacity="0.2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <g className="font-mono text-[10px] uppercase fill-[#6E026F]/60">
                <text x="300" y="60" textAnchor="middle">Acquisition</text>
                <text x="460" y="200" textAnchor="middle">Activation</text>
                <text x="300" y="360" textAnchor="middle">Retention</text>
                <text x="140" y="200" textAnchor="middle">Referral</text>
              </g>
              {/* Pulsing Center */}
              <motion.circle 
                cx="300" cy="200" r="40" fill="#FA891A" fillOpacity="0.1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <text x="300" y="205" textAnchor="middle" className="font-display font-bold fill-[#6E026F] text-xs">DATA</text>
            </svg>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-[#6E026F]">Ready to engineer <br /> your growth?</h2>
          <p className="text-[#6E026F]/60 text-lg">We only work with 4 new partners per quarter to ensure system integrity.</p>
          <Link to="/contact" className="inline-flex px-12 py-5 bg-[#6E026F] text-white font-display font-bold uppercase tracking-widest hover:bg-brand-orange transition-all rounded-sm shadow-xl shadow-brand-purple/20">
            Request Audit
          </Link>
        </div>
      </section>
    </div>
  );
};
