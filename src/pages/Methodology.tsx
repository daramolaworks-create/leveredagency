import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  FlaskConical,
  LineChart,
  Repeat,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const steps = [
  {
    icon: Search,
    title: 'Audit',
    label: 'Find the truth',
    text: 'Map your funnel, data quality, channel economics, and the places decisions currently slow down.',
    details: ['Tracking review', 'Funnel economics', 'Decision bottlenecks'],
  },
  {
    icon: Database,
    title: 'Instrument',
    label: 'Clean the signal',
    text: 'Create the measurement layer that connects events, spend, revenue, and cohorts into one operating view.',
    details: ['Event taxonomy', 'Server-side data', 'Revenue source of truth'],
  },
  {
    icon: FlaskConical,
    title: 'Experiment',
    label: 'Learn faster',
    text: 'Prioritize hypotheses, launch controlled tests, and evaluate winners with enough rigor to scale them.',
    details: ['ICE scoring', 'A/B/n testing', 'Creative and funnel tests'],
  },
  {
    icon: Repeat,
    title: 'Compound',
    label: 'Operationalize wins',
    text: 'Turn what works into repeatable loops across acquisition, conversion, lifecycle, and reporting.',
    details: ['Weekly readouts', 'Automation loops', 'Executive dashboards'],
  },
];

const principles = [
  {
    title: 'Signal before scale',
    text: 'We avoid scaling activity that cannot be measured cleanly.',
  },
  {
    title: 'Experiments over opinions',
    text: 'Every recommendation becomes stronger when it can be tested.',
  },
  {
    title: 'One operating rhythm',
    text: 'Growth improves when data, model, and execution cadence stay connected.',
  },
];

const stack = [
  ['Data warehouse', 'BigQuery / Snowflake'],
  ['Attribution', 'Server-side GTM'],
  ['Modeling', 'Bayesian / MMM'],
  ['Activation', 'APIs / CRM / Ads'],
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

function ImagePanel({ src, label }: { src: string; label: string }) {
  return (
    <div className="relative min-h-[230px] sm:min-h-[320px] overflow-hidden rounded-[30px] bg-black">
      <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-black/12 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/16 px-4 py-3 text-white backdrop-blur-md">
        <span className="text-xs font-semibold uppercase">{label}</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

function MethodModel() {
  const bars = [42, 58, 52, 74, 68, 86, 80, 94];

  return (
    <div className="rounded-[26px] bg-black p-5 text-white">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-white/58">Framework confidence</p>
          <div className="mt-1 text-3xl font-semibold">98.7%</div>
        </div>
        <BarChart3 size={22} className="text-brand-yellow" />
      </div>
      <div className="flex h-28 items-end gap-2">
        {bars.map((height, index) => (
          <motion.span
            key={index}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04, duration: 0.5, ease: 'easeOut' }}
            className={cn('w-full rounded-t-lg', index > 4 ? 'bg-brand-yellow' : 'bg-white/18')}
          />
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-xs font-semibold text-white/52">
        <span>Audit</span>
        <span>Test</span>
        <span>Scale</span>
      </div>
    </div>
  );
}

export const Methodology = () => {
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
            <p className="mb-6 text-sm font-semibold uppercase text-brand-purple">Methodology</p>
            <h1 className="max-w-5xl text-[clamp(2.05rem,9.5vw,2.7rem)] font-semibold leading-[1] sm:text-[clamp(2.85rem,5.2vw,5.6rem)] sm:leading-[0.94]">
              A cleaner operating system for growth.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-black/62 sm:text-lg sm:leading-8">
              Our methodology turns growth from scattered activity into a repeatable cadence: audit the truth, clean the signal, test the highest-leverage ideas, and operationalize what works.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-purple"
              >
                Request system audit
                <ArrowUpRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-white"
              >
                View services
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
            <ImagePanel src="/images/team-methodology-workshop.png" label="Growth workshop" />
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[26px] bg-black p-5 text-white">
                <LineChart size={22} className="text-brand-yellow" />
                <div className="mt-10 text-3xl font-semibold">04</div>
                <p className="mt-2 text-sm leading-6 text-white/58">phases from audit to scale</p>
              </div>
              <div className="rounded-[26px] border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold uppercase text-black/42">Cadence</p>
                <div className="mt-10 text-3xl font-semibold">Weekly</div>
                <p className="mt-2 text-sm leading-6 text-black/55">tests, decisions, and readouts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div {...fadeIn} className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">The framework</p>
              <h2 className="text-[clamp(2.05rem,9.5vw,2.75rem)] font-semibold leading-[1] sm:text-[clamp(2.45rem,4.4vw,4.8rem)] sm:leading-[0.96]">
                Four phases, one operating rhythm.
              </h2>
            </div>
            <p className="text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
              The work is structured enough to be repeatable, but flexible enough to adapt to your stage, channels, and data maturity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  {...fadeIn}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                  className="rounded-[30px] border border-black/10 bg-white p-6 shadow-[0_18px_70px_rgba(35,31,24,0.05)]"
                >
                  <div className="mb-12 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3f0e8] text-brand-purple">
                      <Icon size={22} />
                    </span>
                    <span className="text-sm font-semibold text-black/35">0{index + 1}</span>
                  </div>
                  <p className="text-sm font-semibold uppercase text-brand-purple">{step.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{step.title}</h3>
                  <p className="mt-4 leading-7 text-black/58">{step.text}</p>
                  <ul className="mt-7 space-y-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2 text-sm font-semibold text-black/52">
                        <Check size={15} className="text-brand-purple" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-16 text-white sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeIn}>
            <p className="mb-5 text-sm font-semibold uppercase text-brand-yellow">System integrity</p>
            <h2 className="text-[clamp(2.05rem,9.5vw,2.75rem)] font-semibold leading-[1] sm:text-[clamp(2.45rem,4.2vw,4.7rem)] sm:leading-[0.96]">
              The method is only useful when the signal is clean.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              We build with measurement discipline first, then layer experimentation and automation on top of data the team can trust.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-[0.85fr_1.15fr]">
            <MethodModel />
            <div className="grid gap-3">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  {...fadeIn}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                  className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{principle.title}</h3>
                    <span className="text-sm font-semibold text-white/34">0{index + 1}</span>
                  </div>
                  <p className="leading-7 text-white/56">{principle.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeIn}>
            <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">Technology layer</p>
            <h2 className="text-[clamp(2.05rem,9.5vw,2.75rem)] font-semibold leading-[1] sm:text-[clamp(2.35rem,4vw,4.45rem)] sm:leading-[0.98]">
              A stack designed for decision velocity.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
              We work across your existing tools, then add the integrations needed to make data move cleanly from observation to action.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {stack.map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-black/10 bg-white p-5">
                <p className="text-xs font-semibold uppercase text-black/38">{label}</p>
                <p className="mt-8 text-2xl font-semibold">{value}</p>
              </div>
            ))}
            <div className="rounded-[24px] bg-black p-5 text-white sm:col-span-2">
              <ShieldCheck size={24} className="text-brand-yellow" />
              <h3 className="mt-8 text-2xl font-semibold">Privacy and governance built in.</h3>
              <p className="mt-3 leading-7 text-white/56">
                Systems are designed with consent, governance, and data security in mind from the start.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 md:pb-24 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 rounded-[32px] bg-white p-7 shadow-[0_20px_70px_rgba(35,31,24,0.07)] md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-brand-purple">Start here</p>
            <h2 className="max-w-4xl text-[clamp(2rem,9vw,2.65rem)] font-semibold leading-[1] sm:text-[clamp(2.3rem,3.8vw,4.25rem)] sm:leading-[0.98]">
              Audit the system before you scale it.
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
