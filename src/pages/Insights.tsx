import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

const posts = [
  {
    id: 'server-side-attribution',
    title: 'The Death of the Cookie: How to Build a Server-Side Attribution System',
    date: 'March 12, 2026',
    readTime: '12 min read',
    category: 'Infrastructure',
    image: '/images/team-insights-research.png',
  },
  {
    id: 'bayesian-bidding',
    title: 'Statistical Significance in Low-Volume Markets: A Bayesian Approach',
    date: 'Feb 28, 2026',
    readTime: '15 min read',
    category: 'Data Science',
    image: '/images/team-methodology-workshop.png',
  },
  {
    id: 'predictive-ltv',
    title: 'Predictive LTV: Moving Beyond Historical Cohort Analysis',
    date: 'Feb 15, 2026',
    readTime: '10 min read',
    category: 'Retention',
    image: '/images/team-about-global.png',
  },
  {
    id: 'growth-loop-framework',
    title: 'The Growth Loop Framework: Why Campaigns are Obsolete',
    date: 'Jan 30, 2026',
    readTime: '8 min read',
    category: 'Strategy',
    image: '/images/team-services-systems.png',
  },
  {
    id: 'incrementality-testing',
    title: 'Incrementality Testing: The Only Way to Measure True Marketing Impact',
    date: 'Jan 12, 2026',
    readTime: '18 min read',
    category: 'Measurement',
    image: '/images/team-case-studies.png',
  },
  {
    id: 'ai-performance-creative',
    title: 'AI in Performance Creative: Automating the Hypothesis Loop',
    date: 'Dec 20, 2025',
    readTime: '11 min read',
    category: 'Creative',
    image: '/images/team-experiments-lab.png',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export const Insights = () => {
  const [featured, ...rest] = posts;

  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative px-4 pb-12 pt-28 sm:px-8 md:pb-16 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 gap-6 lg:grid-cols-[1fr_0.72fr]">
          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[28px] border border-black/10 bg-white/62 p-5 sm:rounded-[36px] sm:p-7 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-10 lg:p-12"
          >
            <p className="mb-6 text-sm font-semibold uppercase text-brand-purple">Insights</p>
            <h1 className="max-w-5xl text-[clamp(2.05rem,9.5vw,2.7rem)] font-semibold leading-[1] sm:text-[clamp(2.85rem,5.2vw,5.6rem)] sm:leading-[0.94]">
              Practical thinking for technical growth teams.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-black/62 sm:text-lg sm:leading-8">
              Deep dives on attribution, experimentation, lifecycle, and the operating systems behind measurable growth.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
            className="rounded-[28px] bg-black p-5 text-white sm:rounded-[36px] sm:p-6"
          >
            <BookOpen size={24} className="text-brand-yellow" />
            <div className="mt-12 text-4xl sm:mt-20 sm:text-5xl font-semibold">{posts.length}</div>
            <p className="mt-3 max-w-sm text-base leading-7 text-white/58 sm:text-lg sm:leading-8">technical notes across measurement, data science, and strategy.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.article {...fadeIn} className="mb-5 overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_18px_70px_rgba(35,31,24,0.06)]">
            <Link to={`/insights/${featured.id}`} className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[240px] sm:min-h-[360px] overflow-hidden rounded-[28px] bg-black">
                <img src={featured.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/12 to-transparent" />
                <span className="absolute bottom-5 left-5 rounded-full bg-white/16 px-3 py-1.5 text-xs font-semibold uppercase text-white backdrop-blur-md">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-between p-4 md:p-6">
                <div>
                  <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-semibold text-black/45">
                    <span>{featured.category}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-purple" />
                    <span>{featured.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
                  </div>
                  <h2 className="max-w-3xl text-[clamp(1.85rem,8.4vw,2.45rem)] font-semibold leading-[1] sm:text-[clamp(2.15rem,3.6vw,3.8rem)] sm:leading-[0.98]">{featured.title}</h2>
                  <p className="mt-6 max-w-2xl text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
                    A technical breakdown of the infrastructure and methodology required to keep measurement useful in a privacy-first era.
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-black">
                  Read article
                  <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </motion.article>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <motion.article
                key={post.id}
                {...fadeIn}
                transition={{ duration: 0.55, delay: index * 0.04, ease: 'easeOut' }}
                className="overflow-hidden rounded-[30px] border border-black/10 bg-white p-4 shadow-[0_18px_70px_rgba(35,31,24,0.05)]"
              >
                <Link to={`/insights/${post.id}`} className="block">
                  <div className="relative min-h-[220px] overflow-hidden rounded-[24px] bg-black">
                    <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/10 to-transparent" />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white/16 px-3 py-1.5 text-xs font-semibold uppercase text-white backdrop-blur-md">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-3 pt-6">
                    <div className="mb-4 flex items-center gap-3 text-xs font-semibold text-black/42">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-brand-purple" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight">{post.title}</h3>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black/62">
                      Read article
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
