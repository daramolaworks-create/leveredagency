import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  LineChart,
  Repeat,
  Target,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const services = [
  {
    title: 'Paid acquisition',
    label: 'Acquire',
    description: 'Media systems that connect spend to first-party revenue signals and high-value customer cohorts.',
    icon: Zap,
    image: '/images/team-services-systems.png',
    points: ['Predictive bid strategy', 'Creative testing', 'Channel allocation'],
    metric: '3.4x',
    metricLabel: 'ROAS expansion',
  },
  {
    title: 'Conversion systems',
    label: 'Convert',
    description: 'Landing, checkout, and product experiments designed around behavioral evidence and decision speed.',
    icon: Target,
    image: '/images/team-experiments-lab.png',
    points: ['Landing systems', 'A/B/n testing', 'Journey personalization'],
    metric: '+18%',
    metricLabel: 'conversion lift',
  },
  {
    title: 'Lifecycle intelligence',
    label: 'Retain',
    description: 'Retention workflows that turn customer signals into timely messages, offers, and value moments.',
    icon: Repeat,
    image: '/images/team-about-global.png',
    points: ['CRM automation', 'Churn prediction', 'LTV segmentation'],
    metric: '34%',
    metricLabel: 'revenue share',
  },
  {
    title: 'Measurement and data',
    label: 'Measure',
    description: 'Attribution, tracking, and reporting infrastructure that makes every growth decision observable.',
    icon: Database,
    image: '/images/team-methodology-workshop.png',
    points: ['Server-side tracking', 'Attribution models', 'Executive reporting'],
    metric: '12ms',
    metricLabel: 'signal latency',
  },
];

const process = [
  {
    title: 'Audit the system',
    text: 'Map instrumentation, funnel economics, decision bottlenecks, and the highest-leverage constraint.',
  },
  {
    title: 'Build the operating layer',
    text: 'Connect dashboards, test queues, measurement logic, and weekly growth rituals.',
  },
  {
    title: 'Activate and compound',
    text: 'Ship improvements across acquisition, conversion, lifecycle, and reporting every week.',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

function ImagePanel({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative min-h-[280px] overflow-hidden rounded-[26px] bg-black">
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/16 px-4 py-3 text-white backdrop-blur-md">
        <span className="text-xs font-semibold uppercase">{label}</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

function MiniModel({ active = 4 }: { active?: number }) {
  const bars = [38, 58, 44, 72, 64, 86, 78, 94];

  return (
    <div className="rounded-[22px] bg-black p-4 text-white">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-white/58">Model signal</span>
        <BarChart3 size={18} className="text-brand-yellow" />
      </div>
      <div className="flex h-20 items-end gap-2">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.5, ease: 'easeOut' }}
            className={cn('w-full rounded-t-lg', index >= active ? 'bg-brand-yellow' : 'bg-white/18')}
          />
        ))}
      </div>
    </div>
  );
}

export const Services = () => {
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
            <p className="mb-6 text-sm font-semibold uppercase text-brand-purple">Services</p>
            <h1 className="max-w-5xl text-[clamp(2.85rem,5.2vw,5.6rem)] font-semibold leading-[0.94]">
              Growth capabilities built to work together.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">
              We build acquisition, conversion, lifecycle, and measurement systems for teams that need growth to be cleaner, faster, and easier to prove.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-purple"
              >
                Book a growth audit
                <ArrowUpRight size={18} />
              </Link>
              <Link
                to="/methodology"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-white"
              >
                See methodology
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
            className="grid gap-4"
          >
            <ImagePanel src="/images/team-services-systems.png" label="Global strategy" />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[26px] bg-black p-5 text-white">
                <LineChart size={22} className="text-brand-yellow" />
                <div className="mt-10 text-3xl font-semibold">04</div>
                <p className="mt-2 text-sm leading-6 text-white/58">connected growth systems</p>
              </div>
              <div className="rounded-[26px] border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase text-black/42">Cadence</p>
                <div className="mt-10 text-3xl font-semibold">Weekly</div>
                <p className="mt-2 text-sm leading-6 text-black/55">decisions, tests, and readouts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div {...fadeIn} className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">Capability stack</p>
              <h2 className="text-[clamp(2.45rem,4.4vw,4.8rem)] font-semibold leading-[0.96]">
                Four ways we make growth easier to operate.
              </h2>
            </div>
            <p className="text-lg leading-8 text-black/58">
              Start with the constraint that matters most, then connect the next layer as the system matures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  {...fadeIn}
                  transition={{ duration: 0.55, delay: index * 0.05, ease: 'easeOut' }}
                  className="overflow-hidden rounded-[32px] border border-black/10 bg-white p-4 shadow-[0_18px_70px_rgba(35,31,24,0.06)]"
                >
                  <ImagePanel src={service.image} label={service.label} />
                  <div className="p-4 pt-7">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f0e8] text-brand-purple">
                        <Icon size={22} />
                      </span>
                      <span className="text-sm font-semibold text-black/35">0{index + 1}</span>
                    </div>
                    <h3 className="text-3xl font-semibold">{service.title}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-black/58">{service.description}</p>
                    <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm font-semibold text-black/55">
                          <Check size={15} className="text-brand-purple" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-[0.42fr_0.58fr]">
                      <div className="rounded-[22px] bg-[#f7f4ee] p-4">
                        <div className="text-3xl font-semibold">{service.metric}</div>
                        <p className="mt-2 text-sm text-black/50">{service.metricLabel}</p>
                      </div>
                      <MiniModel active={index + 3} />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-5 py-20 text-white sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div {...fadeIn} className="mb-10 max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-yellow">Operating model</p>
            <h2 className="text-[clamp(2.45rem,4.2vw,4.7rem)] font-semibold leading-[0.96]">
              Clean services, connected by one rhythm.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                {...fadeIn}
                transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                className="rounded-[26px] border border-white/10 bg-white/[0.05] p-6"
              >
                <span className="text-sm font-semibold text-brand-yellow">0{index + 1}</span>
                <h3 className="mt-10 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/56">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 rounded-[32px] bg-white p-7 shadow-[0_20px_70px_rgba(35,31,24,0.07)] md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-brand-purple">Service audit</p>
            <h2 className="max-w-4xl text-[clamp(2.3rem,3.8vw,4.25rem)] font-semibold leading-[0.98]">
              Find the highest-leverage system to build next.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-purple"
          >
            Request audit
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
