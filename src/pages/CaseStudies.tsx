import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';

const cases = [
  {
    id: 'fintech-neo-bank',
    client: 'Fintech Neo-bank',
    challenge: 'Scaling CAC-efficient acquisition in a high-competition market.',
    result: '340% increase in funded accounts while reducing CAC by 22%.',
    tags: ['Paid Media', 'Attribution', 'Fintech'],
    color: '#6E026F'
  },
  {
    id: 'wellness-brand',
    client: 'D2C Wellness Brand',
    challenge: 'High churn rates and low repeat purchase frequency.',
    result: '45% improvement in 90-day retention via predictive LTV modeling.',
    tags: ['Retention', 'Data Science', 'D2C'],
    color: '#ABDADC'
  },
  {
    id: 'saas-enterprise',
    client: 'SaaS Enterprise',
    challenge: 'Low lead-to-demo conversion rates on high-intent pages.',
    result: '18% lift in demo requests through behavioral-driven CRO.',
    tags: ['CRO', 'Product', 'B2B'],
    color: '#FA891A'
  },
  {
    id: 'ecommerce-aggregator',
    client: 'E-commerce Aggregator',
    challenge: 'Fragmented measurement across 12+ brands.',
    result: 'Unified server-side attribution system deployed in 6 weeks.',
    tags: ['Measurement', 'Infrastructure', 'Retail'],
    color: '#F1E6C9'
  }
];

export const CaseStudies = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <header className="space-y-6 max-w-3xl">
        <h1 className="text-6xl font-display font-black uppercase tracking-tighter text-[#6E026F]">
          Proof of <br /> Concept.
        </h1>
        <p className="text-[#6E026F]/70 text-xl leading-relaxed">
          We don't just report on results; we engineer them. These are the technical breakdowns of how we scaled category leaders.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cases.map((study, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative glass rounded-2xl overflow-hidden border border-black/5"
          >
            <div className="p-10 space-y-8">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-2xl font-display font-bold uppercase text-[#6E026F]">{study.client}</h3>
                  <div className="flex gap-2">
                    {study.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono uppercase text-[#6E026F]/40 tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
                <Link 
                  to={`/case-studies/${study.id}`}
                  className="p-3 bg-black/5 rounded-full text-[#6E026F] group-hover:bg-brand-orange group-hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </Link>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-[#6E026F]/40">Challenge</div>
                  <p className="text-[#6E026F]/70 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-mono uppercase text-brand-orange">Result</div>
                  <p className="text-[#6E026F] font-display font-bold text-lg">{study.result}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(j => (
                    <div key={j} className="w-8 h-8 rounded-full border-2 border-[#F1E6C9] bg-[#6E026F]/10" />
                  ))}
                </div>
                <Link 
                  to={`/case-studies/${study.id}`}
                  className="text-xs font-mono uppercase font-bold text-[#6E026F] hover:text-brand-orange transition-colors"
                >
                  Read Full Case Study
                </Link>
              </div>
            </div>
            
            {/* Background Accent */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-3xl rounded-full -mr-16 -mt-16"
              style={{ backgroundColor: study.color }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
