import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, BarChart3, Zap, Target } from 'lucide-react';

const caseStudies = {
  'fintech-neo-bank': {
    client: 'Fintech Neo-bank',
    title: 'Scaling CAC-efficient acquisition in a high-competition market.',
    result: '340% increase in funded accounts while reducing CAC by 22%.',
    challenge: 'The client was struggling with rising CAC on Meta and Google, with high churn in the first 30 days. They needed a system that didn\'t just find users, but found high-intent depositors.',
    solution: 'We deployed a server-side attribution system to feed high-intent signals back to the ad platforms. We then built a custom Bayesian bidding model that optimized for "Funded Account" value rather than just "App Install".',
    metrics: [
      { label: 'Funded Accounts', value: '+340%' },
      { label: 'CAC Reduction', value: '-22%' },
      { label: 'LTV/CAC Ratio', value: '4.2x' }
    ],
    steps: [
      'Deployed server-side GTM for 100% attribution accuracy.',
      'Integrated first-party deposit data with Meta Conversions API.',
      'Launched 124 creative variants using our "Hypothesis-First" framework.',
      'Optimized onboarding funnel using behavioral triggers.'
    ]
  },
  'wellness-brand': {
    client: 'D2C Wellness Brand',
    title: 'High churn rates and low repeat purchase frequency.',
    result: '45% improvement in 90-day retention via predictive LTV modeling.',
    challenge: 'A leading wellness brand had strong initial acquisition but was losing 60% of customers after the first purchase. Their lifecycle marketing was generic and non-predictive.',
    solution: 'We built a custom churn prediction model that identified "at-risk" customers based on usage patterns. We then automated personalized retention loops across Email, SMS, and Direct Mail.',
    metrics: [
      { label: '90-Day Retention', value: '+45%' },
      { label: 'Repeat Purchase', value: '+32%' },
      { label: 'Email Revenue', value: '2.4x' }
    ],
    steps: [
      'Cleaned and unified 3 years of historical customer data.',
      'Developed a Random Forest model for churn probability.',
      'Automated "Win-back" sequences triggered by usage drop-offs.',
      'Implemented personalized product recommendations.'
    ]
  }
};

export const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) return <div className="pt-40 text-center">Case study not found.</div>;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <Link to="/case-studies" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#6E026F]/40 hover:text-brand-orange transition-colors">
        <ArrowLeft size={14} /> Back to Case Studies
      </Link>

      <header className="space-y-8 max-w-4xl">
        <div className="space-y-2">
          <span className="text-xs font-mono text-brand-orange uppercase tracking-widest">{study.client}</span>
          <h1 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-[#6E026F] leading-[0.9]">
            {study.title}
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-y border-black/5">
          {study.metrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <div className="text-4xl font-display font-bold text-brand-orange">{m.value}</div>
              <div className="text-[10px] font-mono uppercase text-[#6E026F]/40 tracking-widest">{m.label}</div>
            </div>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2 space-y-16">
          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase text-[#6E026F]">The Challenge</h2>
            <p className="text-[#6E026F]/70 text-lg leading-relaxed">{study.challenge}</p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-display font-bold uppercase text-[#6E026F]">The Levered Solution</h2>
            <p className="text-[#6E026F]/70 text-lg leading-relaxed">{study.solution}</p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-display font-bold uppercase text-[#6E026F]">Execution Roadmap</h2>
            <div className="space-y-4">
              {study.steps.map((step, i) => (
                <div key={i} className="flex gap-4 p-6 glass rounded-xl border border-black/5">
                  <div className="w-8 h-8 rounded-full bg-[#6E026F] text-white flex items-center justify-center font-mono text-xs shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-[#6E026F]/70">{step}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-12">
          <div className="p-8 glass rounded-2xl border border-black/5 space-y-6">
            <h3 className="text-sm font-mono uppercase text-[#6E026F] font-bold">Capabilities Deployed</h3>
            <ul className="space-y-4">
              {[
                { icon: <Zap size={16} />, label: 'Paid Media Engineering' },
                { icon: <Target size={16} />, label: 'CRO Systems' },
                { icon: <BarChart3 size={16} />, label: 'Attribution Models' }
              ].map((cap, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-mono text-[#6E026F]/60 uppercase tracking-widest">
                  <span className="text-brand-orange">{cap.icon}</span>
                  {cap.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-[#6E026F] rounded-2xl text-white space-y-6">
            <h3 className="text-xl font-display font-bold uppercase">Ready for similar results?</h3>
            <p className="text-white/70 text-sm leading-relaxed">We build custom growth systems for companies spending $100k+/mo on paid media.</p>
            <Link to="/contact" className="block w-full py-4 bg-brand-orange text-white text-center font-display font-bold uppercase tracking-widest hover:bg-white hover:text-[#6E026F] transition-all rounded-sm">
              Request Audit
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
