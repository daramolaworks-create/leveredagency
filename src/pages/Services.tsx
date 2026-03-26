import React from 'react';
import { motion } from 'motion/react';
import { Shield, Zap, Target, BarChart3, Repeat, Layers, Database, Cpu, ArrowRight } from 'lucide-react';
import { FunnelBreakdown, AttributionModel } from '../components/ui/InteractiveCharts';
import { cn } from '../lib/utils';

const services = [
  {
    id: 'acquisition',
    title: 'Paid Acquisition',
    icon: <Zap />,
    desc: 'Programmatic media buying systems that scale without efficiency decay.',
    features: ['Meta & Google Ads', 'TikTok Performance', 'Programmatic Display', 'Creative Strategy'],
    interactive: <AttributionModel />
  },
  {
    id: 'conversion',
    title: 'CRO Engineering',
    icon: <Target />,
    desc: 'Beyond A/B testing. We build statistical models to optimize every touchpoint.',
    features: ['Landing Page Systems', 'Checkout Optimization', 'Personalization Engines', 'User Journey Mapping'],
    interactive: <FunnelBreakdown />
  },
  {
    id: 'retention',
    title: 'Retention & Lifecycle',
    icon: <Repeat />,
    desc: 'Predictive modeling to identify churn risks and automate high-value loops.',
    features: ['CRM Automation', 'LTV Prediction', 'Email & SMS Flows', 'Loyalty Systems'],
    interactive: (
      <div className="p-6 glass rounded-xl flex flex-col items-center justify-center h-full min-h-[250px] text-center">
        <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center mb-4">
          <Repeat className="text-brand-accent animate-spin-slow" />
        </div>
        <h4 className="font-display font-bold uppercase mb-2">Compounding Retention</h4>
        <p className="text-xs text-brand-secondary font-mono">Automated loops that increase LTV by 40% YoY.</p>
      </div>
    )
  },
  {
    id: 'measurement',
    title: 'Measurement & Data',
    icon: <BarChart3 />,
    desc: 'Custom attribution models and server-side tracking for the post-cookie era.',
    features: ['Server-side GTM', 'Custom Attribution', 'Data Warehousing', 'Marketing Mix Modeling'],
    interactive: (
      <div className="p-6 glass rounded-xl space-y-4">
        <div className="flex justify-between items-end h-32 gap-2">
          {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
            <motion.div 
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              className="w-full bg-brand-purple/40 rounded-t-sm"
            />
          ))}
        </div>
        <div className="text-[10px] font-mono text-brand-secondary uppercase text-center">Real-time Attribution Stream</div>
      </div>
    )
  }
];

export const Services = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
      <header className="space-y-6 max-w-3xl">
        <h1 className="text-6xl font-display font-black uppercase tracking-tighter text-[#6E026F]">
          Growth <br /> Capabilities.
        </h1>
        <p className="text-[#6E026F]/70 text-xl leading-relaxed">
          We deploy specialized growth units across the entire customer journey. Each capability is backed by custom-built data infrastructure.
        </p>
      </header>

      <div className="space-y-40">
        {[
          {
            title: 'Acquisition Systems',
            subtitle: 'Paid Media Engineering',
            desc: 'We don\'t just "run ads." We build programmatic buying systems that leverage first-party data to find high-LTV customers at scale.',
            features: ['Multi-channel Attribution', 'Creative Testing Frameworks', 'Predictive Bid Management'],
            viz: <div className="h-40 w-full flex items-end gap-2">
              {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.1 }}
                  className="flex-1 bg-[#6E026F] rounded-t-sm"
                />
              ))}
            </div>
          },
          {
            title: 'Conversion Systems',
            subtitle: 'CRO & Product Engineering',
            desc: 'Bridging the gap between marketing and product. We optimize every touchpoint from landing page to first-value delivery.',
            features: ['A/B/n Testing', 'User Behavioral Analysis', 'Personalization Engines'],
            viz: <div className="relative h-40 w-full flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-brand-orange rounded-full border-t-transparent animate-spin" />
              <div className="absolute text-brand-orange font-display font-bold text-2xl">+24%</div>
            </div>
          },
          {
            title: 'Retention Systems',
            subtitle: 'Lifecycle & CRM',
            desc: 'Maximizing LTV through automated, data-driven communication. We build predictive models to identify and prevent churn before it happens.',
            features: ['Churn Prediction Models', 'Automated Lifecycle Flows', 'LTV Segmentation'],
            viz: <div className="h-40 w-full grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="glass rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[#ABDADC] animate-pulse" />
                </div>
              ))}
            </div>
          },
          {
            title: 'Measurement Systems',
            subtitle: 'Data & Attribution',
            desc: 'Custom attribution models and server-side tracking for the post-cookie era. We build the data warehouse and reporting systems that drive growth.',
            features: ['Server-side GTM', 'Custom Attribution', 'Data Warehousing', 'Marketing Mix Modeling'],
            viz: <div className="h-40 w-full flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#6E026F]/10 flex items-center justify-center text-[#6E026F]"><Database size={24} /></div>
              <ArrowRight size={16} className="text-brand-orange" />
              <div className="w-12 h-12 rounded-lg bg-[#6E026F]/10 flex items-center justify-center text-[#6E026F]"><Cpu size={24} /></div>
              <ArrowRight size={16} className="text-brand-orange" />
              <div className="w-12 h-12 rounded-lg bg-[#6E026F]/10 flex items-center justify-center text-[#6E026F]"><BarChart3 size={24} /></div>
            </div>
          }
        ].map((service, i) => (
          <section key={i} className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-20 items-center",
            i % 2 === 1 && "lg:flex-row-reverse"
          )}>
            <div className={cn("space-y-8", i % 2 === 1 && "lg:order-2")}>
              <div className="space-y-2">
                <span className="text-xs font-mono text-brand-orange uppercase tracking-widest">{service.subtitle}</span>
                <h2 className="text-4xl font-display font-bold uppercase text-[#6E026F]">{service.title}</h2>
              </div>
              <p className="text-[#6E026F]/70 leading-relaxed text-lg">{service.desc}</p>
              <ul className="space-y-4">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-mono text-[#6E026F]/60 uppercase tracking-widest">
                    <ArrowRight size={14} className="text-brand-orange" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className={cn("glass aspect-video rounded-2xl p-12 flex items-center justify-center", i % 2 === 1 && "lg:order-1")}>
              {service.viz}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
