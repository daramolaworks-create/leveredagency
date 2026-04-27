import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, BarChart3 } from 'lucide-react';

const cases = [
  {
    id: 'fintech-neo-bank',
    client: 'Fintech Neo-bank',
    category: 'Acquisition',
    challenge: 'Scaling CAC-efficient acquisition in a high-competition market.',
    result: '340% increase in funded accounts while reducing CAC by 22%.',
    metric: '+340%',
    image: '/images/team-case-studies.png',
    tags: ['Paid media', 'Attribution', 'Fintech'],
  },
  {
    id: 'wellness-brand',
    client: 'D2C Wellness Brand',
    category: 'Retention',
    challenge: 'High churn rates and low repeat purchase frequency.',
    result: '45% improvement in 90-day retention via predictive LTV modeling.',
    metric: '+45%',
    image: '/images/team-experiments-lab.png',
    tags: ['Lifecycle', 'Data science', 'D2C'],
  },
  {
    id: 'saas-enterprise',
    client: 'SaaS Enterprise',
    category: 'Conversion',
    challenge: 'Low lead-to-demo conversion rates on high-intent pages.',
    result: '18% lift in demo requests through behavioral-driven CRO.',
    metric: '+18%',
    image: '/images/team-services-systems.png',
    tags: ['CRO', 'Product', 'B2B'],
  },
  {
    id: 'ecommerce-aggregator',
    client: 'E-commerce Aggregator',
    category: 'Measurement',
    challenge: 'Fragmented measurement across 12+ brands.',
    result: 'Unified server-side attribution system deployed in 6 weeks.',
    metric: '6 wk',
    image: '/images/team-methodology-workshop.png',
    tags: ['Measurement', 'Infrastructure', 'Retail'],
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export const CaseStudies = () => {
  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 gap-6 lg:grid-cols-[1fr_0.72fr]">
          <motion.header
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="rounded-[36px] border border-black/10 bg-white/62 p-7 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-10 lg:p-12"
          >
            <p className="mb-6 text-sm font-semibold uppercase text-brand-purple">Case studies</p>
            <h1 className="max-w-5xl text-[clamp(2.85rem,5.2vw,5.6rem)] font-semibold leading-[0.94]">
              Proof from systems that actually shipped.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">
              A clean look at how we connect acquisition, conversion, retention, and measurement to create measurable growth.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
            className="rounded-[36px] bg-black p-6 text-white"
          >
            <BarChart3 size={24} className="text-brand-yellow" />
            <div className="mt-20 text-5xl font-semibold">4</div>
            <p className="mt-3 max-w-sm text-lg leading-8 text-white/58">
              representative growth systems across acquisition, retention, conversion, and attribution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-5 lg:grid-cols-2">
          {cases.map((study, index) => (
            <motion.article
              key={study.id}
              {...fadeIn}
              transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
              className="overflow-hidden rounded-[32px] border border-black/10 bg-white p-4 shadow-[0_18px_70px_rgba(35,31,24,0.06)]"
            >
              <div className="relative min-h-[300px] overflow-hidden rounded-[26px] bg-black">
                <img src={study.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/16 px-3 py-1.5 text-xs font-semibold uppercase text-white backdrop-blur-md">
                  {study.category}
                </div>
                <div className="absolute bottom-5 left-5 text-5xl font-semibold text-white">{study.metric}</div>
              </div>

              <div className="p-4 pt-7">
                <div className="mb-6 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="text-3xl font-semibold">{study.client}</h2>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-[#f7f4ee] px-3 py-1 text-xs font-semibold text-black/52">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-colors hover:bg-brand-purple"
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#f7f4ee] p-4">
                    <p className="text-xs font-semibold uppercase text-black/35">Challenge</p>
                    <p className="mt-3 text-sm leading-6 text-black/58">{study.challenge}</p>
                  </div>
                  <div className="rounded-2xl bg-black p-4 text-white">
                    <p className="text-xs font-semibold uppercase text-white/35">Result</p>
                    <p className="mt-3 text-sm leading-6 text-white/72">{study.result}</p>
                  </div>
                </div>
                <Link
                  to={`/case-studies/${study.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-brand-purple"
                >
                  Read case study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
};
