import { motion } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Database,
  LineChart,
  MousePointer2,
  Play,
  Repeat,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const clients = [
  { name: 'Kraken', logo: '/brands/kraken.png', className: 'max-h-7 max-w-[150px]' },
  { name: 'Doux', logo: '/brands/doux.png', className: 'max-h-8 max-w-[96px]' },
  { name: 'Bloc', logo: '/brands/bloc.png', className: 'max-h-9 max-w-[88px]' },
  { name: 'Tuteria', logo: '/brands/tuteria.png', className: 'max-h-8 max-w-[132px]' },
  { name: 'Google', logo: '/brands/google.png', className: 'max-h-8 max-w-[128px]' },
];

const metrics = [
  { value: '3.4x', label: 'ROAS expansion' },
  { value: '$42M', label: 'modeled revenue' },
  { value: '150+', label: 'experiments live' },
  { value: '12ms', label: 'signal latency' },
];

const services = [
  {
    title: 'Paid media systems',
    eyebrow: 'Acquire',
    text: 'Spend allocation, creative testing, and audience intelligence connected to real customer value.',
    icon: Zap,
    imageClass: 'photo-placeholder-a',
    imageSrc: '/images/global-strategy-team.jpg',
  },
  {
    title: 'Conversion architecture',
    eyebrow: 'Convert',
    text: 'Landing pages, funnels, and experimentation layers designed around behavioral evidence.',
    icon: Target,
    imageClass: 'photo-placeholder-b',
    imageSrc: '/images/conversion-workshop-team.jpg',
  },
  {
    title: 'Lifecycle intelligence',
    eyebrow: 'Compound',
    text: 'Retention workflows that turn customer signals into timely messages, offers, and product moments.',
    icon: Repeat,
    imageClass: 'photo-placeholder-c',
    imageSrc: '/images/global-operations-room.jpg',
  },
];

const systemCards = [
  {
    icon: Database,
    title: 'Clean data foundation',
    text: 'One trusted layer for spend, events, revenue, cohorts, and experimentation history.',
  },
  {
    icon: LineChart,
    title: 'Decision models',
    text: 'Forecasts, incrementality reads, and attribution logic that make the next move obvious.',
  },
  {
    icon: MousePointer2,
    title: 'Activation loops',
    text: 'The model output flows back into media, pages, lifecycle, and reporting every week.',
  },
];

const timeline = [
  ['01', 'Audit', 'Map instrumentation, funnel economics, channel truth, and decision bottlenecks.'],
  ['02', 'Design', 'Build the operating model, dashboard views, experiment queue, and measurement plan.'],
  ['03', 'Launch', 'Ship acquisition, conversion, and lifecycle tests with weekly readouts.'],
  ['04', 'Scale', 'Compound the winners into repeatable growth rituals and executive visibility.'],
];

const proofRows = [
  { label: 'High-value cohort spend', value: '+28%', color: 'bg-brand-purple' },
  { label: 'Checkout conversion lift', value: '+18%', color: 'bg-brand-yellow' },
  { label: 'Lifecycle revenue share', value: '34%', color: 'bg-brand-blue' },
];

const forecastBars = [46, 58, 52, 72, 66, 84, 78, 92, 88, 96];

const boardSignals = [
  { label: 'Creative fatigue', value: 'Low', score: '82%', color: 'bg-brand-blue' },
  { label: 'Spend elasticity', value: '+14%', score: '68%', color: 'bg-brand-yellow' },
  { label: 'Audience quality', value: 'High', score: '91%', color: 'bg-brand-purple' },
];

const decisionQueue = [
  ['Shift budget', 'Move 18% into high-LTV paid search cohort'],
  ['Launch test', 'Checkout proof module for returning visitors'],
  ['Suppress', 'Pause low-margin prospecting segment'],
];

const modelSignals = [
  { label: 'Paid search', value: '+18%', width: '82%', color: 'bg-brand-yellow' },
  { label: 'Meta prospecting', value: '+11%', width: '68%', color: 'bg-brand-purple' },
  { label: 'Lifecycle', value: '+24%', width: '91%', color: 'bg-brand-blue' },
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

function PhotoPanel({
  className,
  imageClass,
  imageSrc,
  label = 'Global systems',
}: {
  className?: string;
  imageClass: string;
  imageSrc?: string;
  label?: string;
}) {
  return (
    <div className={cn('photo-placeholder relative overflow-hidden rounded-[28px]', imageClass, className)}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-black/6 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl border border-white/25 bg-white/18 px-4 py-3 text-white backdrop-blur-md">
        <span className="text-xs font-semibold uppercase">{label}</span>
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}

function LiveForecastModel() {
  return (
    <div className="col-span-5 row-span-2 overflow-hidden rounded-[28px] bg-black p-5 text-white sm:col-span-2 sm:row-span-3">
      <div className="flex h-full min-h-[260px] flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Live model</span>
          <BarChart3 size={22} className="text-brand-yellow" />
        </div>

        <div className="mt-8 grid grid-cols-[auto_1fr] items-end gap-5">
          <div>
            <div className="text-5xl font-semibold leading-none sm:text-6xl">94%</div>
            <p className="mt-2 max-w-36 text-sm leading-5 text-white/58">forecast confidence</p>
          </div>
          <div className="flex h-28 items-end gap-1.5">
            {forecastBars.slice(2).map((height, index) => (
              <motion.div
                key={index}
                initial={{ height: 10 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: index * 0.05, duration: 0.7, ease: 'easeOut' }}
                className={cn(
                  'w-full rounded-t-md',
                  index > 4 ? 'bg-brand-yellow' : 'bg-white/18'
                )}
              />
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-3 pt-6">
          {modelSignals.map((signal) => (
            <div key={signal.label}>
              <div className="mb-1.5 flex items-center justify-between text-xs text-white/58">
                <span>{signal.label}</span>
                <span>{signal.value}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: signal.width }}
                  transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
                  className={cn('h-full rounded-full', signal.color)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ModelCadenceCard() {
  return (
    <div className="col-span-2 row-span-2 overflow-hidden rounded-[28px] border border-black/10 bg-white p-5">
      <div className="flex h-full min-h-[210px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase text-black/42">Cadence</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-purple text-white">
            <LineChart size={18} />
          </span>
        </div>

        <div className="relative h-24">
          <div className="absolute inset-x-0 top-1/2 h-px bg-black/10" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 220 96" preserveAspectRatio="none">
            <motion.path
              d="M4 72 C34 42 54 82 84 48 C116 12 142 58 172 34 C194 16 206 24 216 12"
              fill="none"
              stroke="#5837C2"
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </svg>
        </div>

        <div>
          <div className="text-3xl font-semibold">4 wk</div>
          <p className="mt-1 text-sm leading-5 text-black/55">audit to live operating cadence</p>
        </div>
      </div>
    </div>
  );
}

function GeneratedModelPanel({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-[#f7f4ee] p-6 text-black', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(116,189,248,0.45),transparent_24rem),radial-gradient(circle_at_82%_65%,rgba(88,55,194,0.34),transparent_22rem)]" />
      <div className="relative flex h-full min-h-[460px] flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase text-black/55">Generated model</span>
          <span className="rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">Live</span>
        </div>

        <div className="mx-auto grid w-full max-w-xl grid-cols-3 gap-3">
          {[
            ['Signal', '98.7%'],
            ['Lift', '+31%'],
            ['Risk', 'Low'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-3xl border border-black/10 bg-white/72 p-4 backdrop-blur">
              <div className="text-xs font-semibold uppercase text-black/42">{label}</div>
              <div className="mt-8 text-2xl font-semibold">{value}</div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto h-56 w-full max-w-xl rounded-[30px] border border-black/10 bg-black p-5 text-white shadow-2xl shadow-black/20">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-white/62">Revenue probability curve</span>
            <span className="text-sm font-semibold text-brand-yellow">+24.8%</span>
          </div>
          <svg className="h-32 w-full" viewBox="0 0 520 160" preserveAspectRatio="none">
            <motion.path
              d="M2 132 C66 92 92 118 148 82 C206 42 242 72 304 40 C372 4 420 46 518 18"
              fill="none"
              stroke="#F3C770"
              strokeWidth="7"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
            />
            <path
              d="M2 132 C66 92 92 118 148 82 C206 42 242 72 304 40 C372 4 420 46 518 18 L518 160 L2 160 Z"
              fill="url(#modelFill)"
              opacity="0.55"
            />
            <defs>
              <linearGradient id="modelFill" x1="0" x2="0" y1="0" y2="1">
                <stop stopColor="#F3C770" />
                <stop offset="1" stopColor="#F3C770" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LeveredOSBoard() {
  return (
    <motion.div {...fadeIn} className="rounded-[34px] border border-white/10 bg-white/[0.05] p-4">
      <div className="rounded-[26px] bg-[#f7f4ee] p-5 text-black">
        <div className="mb-7 flex items-center justify-between gap-5">
          <div>
            <p className="w-fit bg-brand-purple/16 px-1 text-sm font-semibold uppercase text-brand-purple">Levered OS</p>
            <h3 className="mt-2 text-2xl font-semibold">Weekly decision board</h3>
          </div>
          <span className="rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">Live</span>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {proofRows.map((row) => (
            <div key={row.label} className="rounded-[24px] bg-white p-5 shadow-sm shadow-black/5">
              <div className={cn('mb-6 h-2 w-16 rounded-full', row.color)} />
              <div className="text-3xl font-semibold md:text-4xl">{row.value}</div>
              <p className="mt-2 text-sm leading-5 text-black/50">{row.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 overflow-hidden rounded-[28px] bg-black p-4 text-white">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white/55">Signal quality</p>
              <div className="mt-1 text-2xl font-semibold">98.7%</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {decisionQueue.map(([title], index) => (
                <span key={title} className="rounded-full border border-white/10 bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/62">
                  0{index + 1} {title}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.55fr]">
            <div className="relative h-48 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-4">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:42px_42px]" />
              <div className="relative flex items-center justify-between text-xs text-white/48">
                <span>Revenue forecast</span>
                <span>Next 28 days</span>
              </div>
              <svg className="relative mt-3 h-28 w-full" viewBox="0 0 520 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="leveredForecastFill" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="#74BDF8" stopOpacity="0.48" />
                    <stop offset="1" stopColor="#74BDF8" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="leveredForecastLine" x1="0" x2="1" y1="0" y2="0">
                    <stop stopColor="#74BDF8" />
                    <stop offset="0.55" stopColor="#F3C770" />
                    <stop offset="1" stopColor="#F3C770" />
                  </linearGradient>
                </defs>
                <path
                  d="M4 118 C54 92 88 112 132 82 C184 48 220 76 266 48 C330 16 374 44 426 24 C468 10 494 18 516 8 L516 150 L4 150 Z"
                  fill="url(#leveredForecastFill)"
                />
                <motion.path
                  d="M4 118 C54 92 88 112 132 82 C184 48 220 76 266 48 C330 16 374 44 426 24 C468 10 494 18 516 8"
                  fill="none"
                  stroke="url(#leveredForecastLine)"
                  strokeLinecap="round"
                  strokeWidth="6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
              {boardSignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/44">{signal.label}</span>
                    <span className="font-semibold text-white">{signal.value}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className={cn('h-full rounded-full', signal.color)}
                      initial={{ width: 0 }}
                      whileInView={{ width: signal.score }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export const Home = () => {
  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative min-h-screen px-5 pb-8 pt-28 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(88,55,194,0.16),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(116,189,248,0.2),transparent_28%),linear-gradient(180deg,#fbfaf7_0%,#f1eee6_100%)]" />
        <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 gap-6 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex min-h-[calc(100vh-9rem)] flex-col justify-end rounded-[36px] border border-black/10 bg-white/55 p-6 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl sm:p-10 lg:p-12"
          >
            <div className="mb-auto flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/65">
              <Sparkles size={16} className="text-brand-purple" />
              Growth systems, designed beautifully
            </div>

            <div className="max-w-5xl">
              <h1 className="text-[clamp(3.35rem,7.4vw,7.35rem)] font-semibold leading-[0.92] text-black">
                Scale with signal, not noise.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-black/62 sm:text-xl">
                Levered builds the measurement, experimentation, and AI operating system behind elegant, accountable growth.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
                  See the method
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
            className="grid min-h-[720px] grid-cols-5 grid-rows-6 gap-4 lg:min-h-[calc(100vh-9rem)]"
          >
            <PhotoPanel
              imageClass="photo-placeholder-a"
              imageSrc="/images/global-strategy-team.jpg"
              label="Global strategy"
              className="col-span-5 row-span-3 sm:col-span-3 sm:row-span-4"
            />
            <LiveForecastModel />
            <PhotoPanel
              imageClass="photo-placeholder-b"
              imageSrc="/images/conversion-workshop-team.jpg"
              label="Experiment design"
              className="col-span-3 row-span-2 sm:col-span-2"
            />
            <ModelCadenceCard />
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-5 pb-20 pt-6 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            {...fadeIn}
            className="overflow-hidden rounded-[36px] bg-black text-white shadow-[0_24px_90px_rgba(17,17,17,0.18)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex min-h-[260px] flex-col justify-between border-b border-white/10 p-7 md:p-9 lg:border-b-0 lg:border-r">
                <div>
                  <p className="text-sm font-semibold uppercase text-brand-yellow">Measured outcomes</p>
                  <h2 className="mt-5 max-w-xl text-[clamp(2.3rem,4.2vw,4.6rem)] font-semibold leading-[0.96]">
                    Proof that feels clean, not noisy.
                  </h2>
                </div>
                <p className="mt-8 max-w-md text-base leading-7 text-white/55">
                  A compact view of the model quality, test velocity, and revenue movement we tune every week.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2">
                {metrics.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={cn(
                      'relative min-h-[170px] border-white/10 p-7 md:p-9',
                      index < 2 && 'sm:border-b',
                      index % 2 === 0 && 'sm:border-r'
                    )}
                  >
                    <div className="absolute right-7 top-7 flex h-10 w-20 items-end gap-1 opacity-70">
                      {[38, 62, 48, 78, 92].map((height, barIndex) => (
                        <span
                          key={barIndex}
                          className={cn(
                            'w-full rounded-t-full',
                            barIndex === 4 ? 'bg-brand-yellow' : 'bg-white/16'
                          )}
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                    <div className="text-5xl font-semibold leading-none md:text-6xl">{metric.value}</div>
                    <div className="mt-4 text-base text-white/52">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-6 flex flex-col gap-6 rounded-[30px] border border-black/10 bg-white/55 px-6 py-6 backdrop-blur md:flex-row md:items-center md:justify-between md:px-8">
            <p className="max-w-sm text-sm font-semibold uppercase text-black/45">Trusted by teams turning growth into infrastructure</p>
            <div className="grid grid-cols-2 items-center gap-x-8 gap-y-5 sm:flex sm:flex-wrap sm:justify-end sm:gap-8">
              {clients.map((client) => (
                <div key={client.name} className="flex min-h-10 items-center justify-start sm:justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={cn('h-auto w-auto object-contain opacity-55 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0', client.className)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <motion.div {...fadeIn} className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-5xl">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">What we build</p>
            <h2 className="text-[clamp(2.75rem,5.6vw,5.9rem)] font-semibold leading-[0.96]">
              A prettier, smarter way to operate growth.
            </h2>
            </div>
            <p className="text-lg leading-8 text-black/58">
              Strategy, data, design, and execution are composed into one operating rhythm, so growth feels easier to steer.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  key={service.title}
                  {...fadeIn}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                  className="group overflow-hidden rounded-[32px] border border-black/10 bg-white p-4 shadow-[0_20px_70px_rgba(35,31,24,0.07)]"
                >
                  <PhotoPanel
                    imageClass={service.imageClass}
                    imageSrc={service.imageSrc}
                    label={service.eyebrow}
                    className="h-[340px] rounded-[24px]"
                  />
                  <div className="p-4 pt-7">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-sm font-semibold uppercase text-black/42">{service.eyebrow}</span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f0e8] text-black transition-colors group-hover:bg-black group-hover:text-white">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="text-3xl font-semibold">{service.title}</h3>
                    <p className="mt-4 leading-7 text-black/58">{service.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeIn}>
            <p className="mb-5 text-sm font-semibold uppercase text-brand-yellow">Operating system</p>
            <h2 className="text-[clamp(2.75rem,5vw,5.4rem)] font-semibold leading-[0.96]">
              Make every growth decision feel obvious.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/58">
              We connect the messy parts of marketing into one composed system: data quality, model logic, creative velocity, and weekly execution.
            </p>
          </motion.div>

          <LeveredOSBoard />
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div {...fadeIn} className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">System layers</p>
              <h2 className="text-[clamp(2.75rem,5vw,5.4rem)] font-semibold leading-[0.96]">
                Data, models, and execution in one rhythm.
              </h2>
            </div>
            <p className="text-lg leading-8 text-black/58">
              The modern growth team does not need more disconnected campaigns. It needs an elegant operating layer that keeps learning.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {systemCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  {...fadeIn}
                  transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                  className="rounded-[32px] border border-black/10 bg-[#f7f4ee] p-7"
                >
                  <div className="mb-16 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-purple">
                      <Icon size={22} />
                    </span>
                    <span className="text-sm font-semibold text-black/35">0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-semibold">{card.title}</h3>
                  <p className="mt-4 leading-7 text-black/58">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-5 py-20 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.div {...fadeIn} className="rounded-[34px] bg-black p-8 text-white md:p-10">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-yellow">How it starts</p>
            <h2 className="text-[clamp(2.7rem,4.8vw,5.25rem)] font-semibold leading-[0.98]">
              Four weeks to a sharper growth cadence.
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-brand-yellow"
            >
              Start now
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {timeline.map(([number, title, detail], index) => (
              <motion.div
                key={title}
                {...fadeIn}
                transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
                className="rounded-[32px] border border-black/10 bg-white p-7"
              >
                <div className="mb-14 flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-purple">{number}</span>
                  {index === 0 ? <Play size={18} /> : <Check size={18} />}
                </div>
                <h3 className="text-3xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-black/58">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 overflow-hidden rounded-[36px] bg-black lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 text-white md:p-14 lg:p-16">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-blue">Limited partner model</p>
            <h2 className="max-w-4xl text-[clamp(2.9rem,5.6vw,6rem)] font-semibold leading-[0.94]">
              Build the growth system your next stage deserves.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/58">
              We take on a small number of partners each quarter so strategy, design, data, and execution stay tightly connected.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition-colors hover:bg-brand-yellow"
            >
              Request an audit
              <ArrowUpRight size={18} />
            </Link>
          </div>
          <GeneratedModelPanel className="rounded-none" />
        </div>
      </section>
    </div>
  );
};
