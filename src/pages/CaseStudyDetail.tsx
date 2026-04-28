import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, BarChart3, Check, Target, Zap } from 'lucide-react';

const caseStudies = {
  'fintech-neo-bank': {
    client: 'Fintech Neo-bank',
    title: 'Scaling CAC-efficient acquisition in a high-competition market.',
    result: '340% increase in funded accounts while reducing CAC by 22%.',
    challenge:
      'The client was struggling with rising CAC on Meta and Google, with high churn in the first 30 days. They needed a system that did not just find users, but found high-intent depositors.',
    solution:
      'We deployed server-side attribution, fed high-intent signals back to ad platforms, and built a Bayesian bidding model optimized for funded account value instead of app installs.',
    image: '/images/team-case-studies.png',
    metrics: [
      { label: 'Funded accounts', value: '+340%' },
      { label: 'CAC reduction', value: '-22%' },
      { label: 'LTV/CAC ratio', value: '4.2x' },
    ],
    steps: [
      'Deployed server-side GTM for high-fidelity attribution.',
      'Integrated first-party deposit data with platform APIs.',
      'Launched 124 creative variants from a hypothesis backlog.',
      'Optimized onboarding with behavioral triggers.',
    ],
  },
  'wellness-brand': {
    client: 'D2C Wellness Brand',
    title: 'Improving retention with predictive LTV modeling.',
    result: '45% improvement in 90-day retention via predictive LTV modeling.',
    challenge:
      'A leading wellness brand had strong initial acquisition but was losing 60% of customers after the first purchase. Lifecycle marketing was generic and non-predictive.',
    solution:
      'We built a churn prediction model that identified at-risk customers from behavior patterns, then automated personalized retention loops across email, SMS, and direct mail.',
    image: '/images/team-experiments-lab.png',
    metrics: [
      { label: '90-day retention', value: '+45%' },
      { label: 'Repeat purchase', value: '+32%' },
      { label: 'Email revenue', value: '2.4x' },
    ],
    steps: [
      'Unified three years of historical customer data.',
      'Developed churn scoring and LTV segmentation.',
      'Automated win-back sequences triggered by usage drops.',
      'Implemented personalized product recommendations.',
    ],
  },
  'saas-enterprise': {
    client: 'SaaS Enterprise',
    title: 'Lifting demo requests on high-intent product pages.',
    result: '18% lift in demo requests through behavioral-driven CRO.',
    challenge:
      'The company had strong traffic quality, but product pages were overloaded with generic messaging. High-intent visitors were not seeing role-specific proof or a clear path to the right sales motion.',
    solution:
      'We rebuilt the conversion architecture around behavioral segments, added proof modules for different buyer roles, and launched a rolling experimentation program across page structure, CTA sequencing, and qualification logic.',
    image: '/images/team-services-systems.png',
    metrics: [
      { label: 'Demo lift', value: '+18%' },
      { label: 'Qualified pipeline', value: '+27%' },
      { label: 'Test cycles', value: '9' },
    ],
    steps: [
      'Mapped high-intent paths from product analytics and CRM data.',
      'Created role-specific proof modules for finance, product, and operations buyers.',
      'Tested CTA order, demo form friction, and proof placement.',
      'Built a weekly readout loop for sales and growth teams.',
    ],
  },
  'ecommerce-aggregator': {
    client: 'E-commerce Aggregator',
    title: 'Unifying measurement across a multi-brand portfolio.',
    result: 'Unified server-side attribution system deployed in 6 weeks.',
    challenge:
      'The portfolio had fragmented tracking, inconsistent event names, and no reliable cross-brand view of spend, revenue, or cohort quality. Decisions were slow because every brand reported differently.',
    solution:
      'We created a shared event taxonomy, deployed server-side tracking, and built an executive reporting layer that normalized acquisition, retention, and contribution margin across the portfolio.',
    image: '/images/team-methodology-workshop.png',
    metrics: [
      { label: 'Brands unified', value: '12' },
      { label: 'Deployment', value: '6 wk' },
      { label: 'Signal coverage', value: '96%' },
    ],
    steps: [
      'Audited event quality across all brand storefronts.',
      'Standardized naming, source mapping, and revenue definitions.',
      'Deployed server-side event routing and platform conversion APIs.',
      'Built a portfolio dashboard for budget and cohort decisions.',
    ],
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export const CaseStudyDetail = () => {
  const { id } = useParams();
  const study = caseStudies[id as keyof typeof caseStudies];

  if (!study) {
    return (
      <div className="bg-[#f7f4ee] px-5 py-40 text-center">
        <p className="text-lg font-semibold">Case study not found.</p>
        <Link to="/case-studies" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
          <ArrowLeft size={16} />
          Back to case studies
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1480px]">
          <Link to="/case-studies" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-black/52 transition-colors hover:text-black">
            <ArrowLeft size={16} />
            Back to case studies
          </Link>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.72fr]">
            <motion.header
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-[36px] border border-black/10 bg-white/62 p-7 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-10 lg:p-12"
            >
              <p className="mb-6 text-sm font-semibold uppercase text-brand-purple">{study.client}</p>
              <h1 className="max-w-5xl text-[clamp(2.75rem,5vw,5.35rem)] font-semibold leading-[0.94]">
                {study.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">{study.result}</p>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
              className="relative min-h-[420px] overflow-hidden rounded-[36px] bg-black"
            >
              <img src={study.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/14 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/15 bg-white/14 p-4 text-white backdrop-blur-md">
                    <div className="text-3xl font-semibold">{metric.value}</div>
                    <p className="mt-2 text-xs leading-5 text-white/58">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 lg:grid-cols-[1fr_0.42fr]">
          <div className="space-y-5">
            {[
              ['Challenge', study.challenge],
              ['Levered solution', study.solution],
            ].map(([title, text]) => (
              <motion.section key={title} {...fadeIn} className="rounded-[30px] border border-black/10 bg-white p-7 md:p-9">
                <h2 className="text-3xl font-semibold">{title}</h2>
                <p className="mt-5 text-lg leading-8 text-black/60">{text}</p>
              </motion.section>
            ))}

            <motion.section {...fadeIn} className="rounded-[30px] border border-black/10 bg-white p-7 md:p-9">
              <h2 className="text-3xl font-semibold">Execution roadmap</h2>
              <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">
                {study.steps.map((step, index) => (
                  <div key={step} className="rounded-2xl bg-[#f7f4ee] p-5">
                    <span className="text-sm font-semibold text-brand-purple">0{index + 1}</span>
                    <p className="mt-5 leading-7 text-black/58">{step}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <aside className="space-y-5">
            <motion.div {...fadeIn} className="rounded-[30px] bg-black p-6 text-white">
              <BarChart3 size={22} className="text-brand-yellow" />
              <h3 className="mt-10 text-2xl font-semibold">Capabilities deployed</h3>
              <ul className="mt-6 space-y-4">
                {[
                  { icon: Zap, label: 'Paid media engineering' },
                  { icon: Target, label: 'Conversion systems' },
                  { icon: BarChart3, label: 'Attribution models' },
                ].map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <li key={cap.label} className="flex items-center gap-3 text-sm font-semibold text-white/62">
                      <Icon size={16} className="text-brand-yellow" />
                      {cap.label}
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="rounded-[30px] border border-black/10 bg-white p-6">
              <Check size={22} className="text-brand-purple" />
              <h3 className="mt-10 text-2xl font-semibold">Ready for similar clarity?</h3>
              <p className="mt-4 leading-7 text-black/58">Start with a focused audit of your data, funnel, and growth system.</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-purple"
              >
                Request audit
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </aside>
        </div>
      </section>
    </div>
  );
};
