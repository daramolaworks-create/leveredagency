import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, MapPin, Phone, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <header className="space-y-6">
            <h1 className="text-6xl font-display font-black uppercase tracking-tighter text-[#6E026F]">
              Initiate <br /> Partnership.
            </h1>
            <p className="text-[#6E026F]/70 text-xl leading-relaxed max-w-md">
              We are currently at 85% capacity. We are accepting 2 new partner audits for Q2 2026.
            </p>
          </header>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-[#6E026F]/40 mb-1">Direct Access</h4>
                <p className="text-[#6E026F] font-mono">systems@levered.io</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-[#6E026F]/40 mb-1">HQ</h4>
                <p className="text-[#6E026F] font-mono">San Francisco, CA / Remote</p>
              </div>
            </div>
          </div>

          <div className="p-8 glass rounded-2xl border-l-4 border-l-brand-orange space-y-4">
            <h4 className="font-display font-bold uppercase text-[#6E026F]">The Audit Process</h4>
            <p className="text-sm text-[#6E026F]/60 leading-relaxed">
              Every partnership begins with a technical audit of your current attribution, tracking, and performance systems. This is not a sales call; it's a diagnostic.
            </p>
          </div>
        </div>

        <div className="glass p-10 rounded-2xl border border-black/5">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-[#6E026F]/40 tracking-widest">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/50 border border-black/10 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors text-[#6E026F]"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono uppercase text-[#6E026F]/40 tracking-widest">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/50 border border-black/10 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors text-[#6E026F]"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-[#6E026F]/40 tracking-widest">Current Monthly Ad Spend</label>
              <select className="w-full bg-white/50 border border-black/10 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors appearance-none text-[#6E026F]">
                <option className="bg-[#F1E6C9]">$50k - $100k</option>
                <option className="bg-[#F1E6C9]">$100k - $500k</option>
                <option className="bg-[#F1E6C9]">$500k - $1M</option>
                <option className="bg-[#F1E6C9]">$1M+</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase text-[#6E026F]/40 tracking-widest">Growth Bottleneck</label>
              <textarea 
                rows={4}
                className="w-full bg-white/50 border border-black/10 px-4 py-3 rounded-sm focus:outline-none focus:border-brand-orange transition-colors text-[#6E026F]"
                placeholder="Describe your current challenges..."
              />
            </div>

            <button className="w-full py-4 bg-[#6E026F] text-white font-display font-bold uppercase tracking-widest hover:bg-brand-orange transition-all rounded-sm flex items-center justify-center gap-2">
              Submit Request <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
