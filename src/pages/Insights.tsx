import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'server-side-attribution',
    title: 'The Death of the Cookie: How to Build a Server-Side Attribution System',
    date: 'March 12, 2026',
    readTime: '12 min read',
    category: 'Infrastructure'
  },
  {
    id: 'bayesian-bidding',
    title: 'Statistical Significance in Low-Volume Markets: A Bayesian Approach',
    date: 'Feb 28, 2026',
    readTime: '15 min read',
    category: 'Data Science'
  },
  {
    id: 'predictive-ltv',
    title: 'Predictive LTV: Moving Beyond Historical Cohort Analysis',
    date: 'Feb 15, 2026',
    readTime: '10 min read',
    category: 'Retention'
  },
  {
    id: 'growth-loop-framework',
    title: 'The Growth Loop Framework: Why Campaigns are Obsolete',
    date: 'Jan 30, 2026',
    readTime: '8 min read',
    category: 'Strategy'
  },
  {
    id: 'incrementality-testing',
    title: 'Incrementality Testing: The Only Way to Measure True Marketing Impact',
    date: 'Jan 12, 2026',
    readTime: '18 min read',
    category: 'Measurement'
  },
  {
    id: 'ai-performance-creative',
    title: 'AI in Performance Creative: Automating the Hypothesis Loop',
    date: 'Dec 20, 2025',
    readTime: '11 min read',
    category: 'Creative'
  }
];

export const Insights = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-20">
      <header className="space-y-6 max-w-3xl">
        <h1 className="text-6xl font-display font-black uppercase tracking-tighter text-[#6E026F]">
          Growth <br /> Insights.
        </h1>
        <p className="text-[#6E026F]/70 text-xl leading-relaxed">
          Technical deep-dives into attribution, measurement, and the engineering of growth systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {posts.map((post, i) => (
          <motion.article 
            key={i}
            whileHover={{ y: -5 }}
            className="space-y-6 group"
          >
            <Link to={`/insights/${post.id}`} className="block space-y-6">
              <div className="aspect-[16/9] glass rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6E026F]/5 to-transparent group-hover:from-[#6E026F]/10 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-2 py-1 bg-white/80 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest text-[#6E026F] rounded-sm border border-black/5">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-4 text-[10px] font-mono text-[#6E026F]/40 uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-brand-orange rounded-full" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-display font-bold uppercase leading-tight text-[#6E026F] group-hover:text-brand-orange transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-[#6E026F]/60 leading-relaxed line-clamp-2">
                  In this technical deep-dive, we explore the methodologies and infrastructure required to build robust growth systems in the modern privacy-first era.
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase font-bold text-[#6E026F] group-hover:translate-x-2 transition-transform">
                Read Article <ArrowRight size={12} />
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
