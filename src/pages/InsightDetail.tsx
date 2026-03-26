import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Share2, Bookmark, ArrowRight } from 'lucide-react';

const insights = {
  'server-side-attribution': {
    title: 'The Death of the Cookie: How to Build a Server-Side Attribution System',
    date: 'March 12, 2026',
    readTime: '12 min read',
    category: 'Infrastructure',
    content: `
      <p>The marketing landscape is undergoing a fundamental shift. With the deprecation of third-party cookies and the rise of privacy-first browsing, traditional client-side tracking is no longer sufficient. To maintain a competitive edge, growth teams must transition to server-side attribution.</p>
      
      <h2>The Problem with Client-Side Tracking</h2>
      <p>Client-side tracking relies on the browser to send data directly to ad platforms. This is increasingly blocked by ad-blockers, ITP (Intelligent Tracking Prevention), and user privacy settings. The result? A massive "blind spot" in your data, leading to inaccurate ROAS reporting and inefficient bidding.</p>
      
      <h2>The Server-Side Solution</h2>
      <p>Server-side attribution moves the tracking logic from the browser to your own server. Instead of the browser sending data to Meta or Google, it sends data to your server, which then securely forwards it to the ad platforms. This ensures 100% data integrity and allows you to enrich events with first-party data before they are sent.</p>
      
      <blockquote>
        "In a privacy-first world, the only way to win is to own your data infrastructure. Server-side is not an option; it's a requirement."
      </blockquote>
      
      <h2>Implementation Roadmap</h2>
      <p>1. <strong>Deploy a Server-Side Container:</strong> Use Google Tag Manager (GTM) Server-Side or a custom proxy to intercept browser events.</p>
      <p>2. <strong>First-Party Data Enrichment:</strong> Append user IDs, LTV scores, and purchase history to your events before sending them to ad platforms.</p>
      <p>3. <strong>Conversions API Integration:</strong> Connect directly to Meta, Google, and TikTok APIs to bypass browser-based tracking entirely.</p>
      
      <h2>The Result</h2>
      <p>Companies that transition to server-side attribution typically see a 15-25% increase in attributed conversions and a significant reduction in CAC due to better platform optimization.</p>
    `
  },
  'bayesian-bidding': {
    title: 'Statistical Significance in Low-Volume Markets: A Bayesian Approach',
    date: 'Feb 28, 2026',
    readTime: '15 min read',
    category: 'Data Science',
    content: `
      <p>Traditional A/B testing (Frequentist) requires large sample sizes to reach statistical significance. In high-ticket or low-volume markets, this can take months. Bayesian statistics offers a faster, more flexible alternative.</p>
      
      <h2>Why Frequentist Testing Fails</h2>
      <p>Frequentist methods rely on p-values. If you don't have enough data, your p-value remains high, and you can't make a decision. This leads to "test paralysis" where winners are never scaled and losers continue to drain budget.</p>
      
      <h2>The Bayesian Advantage</h2>
      <p>Bayesian testing calculates the "probability of being better." Instead of a binary yes/no, it gives you a continuous probability. This allows you to make informed decisions much earlier in the test cycle.</p>
      
      <h2>Applying Bayesian Logic to Bidding</h2>
      <p>We use Bayesian models to adjust bids in real-time. If a creative has an 85% probability of being the winner, we start shifting budget towards it immediately, rather than waiting for 95% confidence.</p>
    `
  }
};

export const InsightDetail = () => {
  const { id } = useParams();
  const post = insights[id as keyof typeof insights];

  if (!post) return <div className="pt-40 text-center">Insight not found.</div>;

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto space-y-12">
      <Link to="/insights" className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#6E026F]/40 hover:text-brand-orange transition-colors">
        <ArrowLeft size={14} /> Back to Insights
      </Link>

      <header className="space-y-8">
        <div className="space-y-4">
          <span className="px-2 py-1 bg-brand-orange/10 text-brand-orange text-[10px] font-mono uppercase tracking-widest rounded-sm">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-[#6E026F] leading-[0.9]">
            {post.title}
          </h1>
        </div>
        
        <div className="flex items-center justify-between py-6 border-y border-black/5">
          <div className="flex items-center gap-6 text-[10px] font-mono text-[#6E026F]/40 uppercase tracking-widest">
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-4 text-[#6E026F]/40">
            <button className="hover:text-brand-orange transition-colors"><Share2 size={18} /></button>
            <button className="hover:text-brand-orange transition-colors"><Bookmark size={18} /></button>
          </div>
        </div>
      </header>

      <article 
        className="prose prose-lg max-w-none text-[#6E026F]/70 leading-relaxed space-y-8
          prose-headings:font-display prose-headings:font-bold prose-headings:uppercase prose-headings:text-[#6E026F]
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
          prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#6E026F]
          prose-strong:text-[#6E026F] prose-strong:font-bold"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <footer className="pt-20 border-t border-black/5 space-y-12">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h4 className="text-sm font-display font-bold uppercase text-[#6E026F]">Written by</h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#6E026F]/10" />
              <div className="text-xs font-mono uppercase text-[#6E026F]/60">Levered Engineering Team</div>
            </div>
          </div>
          <button className="px-6 py-3 border border-[#6E026F]/20 text-[#6E026F] font-mono text-[10px] uppercase tracking-widest hover:bg-[#6E026F] hover:text-white transition-all rounded-sm">
            Subscribe to Newsletter
          </button>
        </div>

        <div className="p-10 glass rounded-2xl border border-black/5 space-y-6 text-center">
          <h3 className="text-2xl font-display font-bold uppercase text-[#6E026F]">Ready to engineer your growth?</h3>
          <p className="text-[#6E026F]/60 max-w-md mx-auto">We build custom growth systems for companies spending $100k+/mo on paid media.</p>
          <Link to="/contact" className="inline-flex px-12 py-4 bg-[#6E026F] text-white font-display font-bold uppercase tracking-widest hover:bg-brand-orange transition-all rounded-sm">
            Request Audit
          </Link>
        </div>
      </footer>
    </div>
  );
};
