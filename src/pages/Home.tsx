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

const partnerLogos = [
  { name: 'Meta', src: '/partners/meta.svg', className: 'max-h-8 max-w-[140px]' },
  { name: 'Google', src: '/partners/google.svg', className: 'max-h-9 max-w-[130px]' },
  { name: 'Nestle', src: '/partners/nestle.svg', className: 'max-h-8 max-w-[132px]' },
  { name: 'Monzo', src: '/partners/monzo.svg', className: 'max-h-8 max-w-[128px]' },
  { name: 'Booking.com', src: '/partners/booking.svg', className: 'max-h-7 max-w-[150px]' },
  { name: 'HSBC', src: '/partners/hsbc.svg', className: 'max-h-8 max-w-[132px]' },
  { name: 'Current', src: '/partners/current.svg', className: 'max-h-7 max-w-[130px]' },
  { name: 'Vio Bank', src: '/partners/vio.svg', className: 'max-h-9 max-w-[124px]' },
  { name: 'Sermo', src: '/partners/sermo.svg', className: 'max-h-8 max-w-[128px]' },
  { name: 'Criteo', src: '/partners/criteo.svg', className: 'max-h-8 max-w-[132px]' },
  { name: 'Bank al Etihad', src: '/partners/ethiad.svg', className: 'max-h-10 max-w-[170px]' },
  { name: 'Tonies', src: '/partners/tonies.svg', className: 'max-h-8 max-w-[132px]' },
];

const metrics = [
  { value: '3.4x', label: 'ROAS expansion' },
  { value: '$42M', label: 'modeled revenue' },
  { value: '150+', label: 'experiments live' },
  { value: '12ms', label: 'signal latency' },
];

const heroMetrics = [
  { value: '28%', label: 'budget reallocated to high-LTV cohorts' },
  { value: '4 wk', label: 'from audit to weekly decision rhythm' },
  { value: '150+', label: 'experiments prioritized by model output' },
];

const heroWorkflow = [
  {
    title: 'Capture',
    text: 'Spend, funnel, cohort, and revenue signals move into one clean view.',
    icon: Database,
    accent: 'bg-brand-blue',
  },
  {
    title: 'Decide',
    text: 'Forecasts turn the next budget, page, and lifecycle move into a short queue.',
    icon: LineChart,
    accent: 'bg-brand-yellow',
  },
  {
    title: 'Activate',
    text: 'Tests ship back into channels and pages with weekly learning loops.',
    icon: MousePointer2,
    accent: 'bg-brand-purple',
  },
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
    <div className="col-span-1 row-span-1 overflow-hidden rounded-[24px] bg-black p-4 text-white sm:col-span-2 sm:row-span-3 sm:rounded-[28px] sm:p-5">
      <div className="flex h-full min-h-[230px] flex-col sm:min-h-[260px]">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Live model</span>
          <BarChart3 size={22} className="text-brand-yellow" />
        </div>

        <div className="mt-7 grid grid-cols-[auto_1fr] items-end gap-4 sm:mt-8 sm:gap-5">
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
    <div className="col-span-1 row-span-1 overflow-hidden rounded-[24px] border border-black/10 bg-white p-5 sm:col-span-2 sm:row-span-2 sm:rounded-[28px]">
      <div className="flex h-full min-h-[190px] flex-col justify-between sm:min-h-[210px]">
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

function HeroWorkflowCard({
  step,
  index,
}: {
  step: (typeof heroWorkflow)[number];
  index: number;
  key?: string;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.18 + index * 0.06, duration: 0.55, ease: 'easeOut' }}
      className="group rounded-[24px] border border-black/10 bg-white p-4 shadow-[0_16px_46px_rgba(35,31,24,0.06)] transition-transform duration-300 hover:-translate-y-1 sm:rounded-[28px] sm:p-5"
    >
      <div className="mb-8 flex items-center justify-between">
        <span className={cn('h-2 w-12 rounded-full', step.accent)} />
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f0e8] text-black transition-colors group-hover:bg-black group-hover:text-white">
          <Icon size={18} />
        </span>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-sm font-semibold text-black/34">0{index + 1}</span>
        <h3 className="text-xl font-semibold">{step.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-black/56">{step.text}</p>
    </motion.div>
  );
}

function HeroDecisionPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.65, ease: 'easeOut' }}
      className="overflow-hidden rounded-[28px] bg-black p-4 text-white shadow-[0_24px_80px_rgba(17,17,17,0.18)] sm:rounded-[34px] sm:p-5"
    >
      <div className="grid min-h-[350px] grid-cols-1 gap-4 md:grid-cols-[0.95fr_1.05fr]">
        <div className="relative overflow-hidden rounded-[24px] bg-[#f7f4ee] p-5 text-black sm:rounded-[28px]">
          <img
            src="/images/hero-levered-os.jpeg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[50%_26%] opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/8 to-transparent" />
          <div className="relative flex h-full min-h-[260px] flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/86 px-3 py-1.5 text-xs font-semibold uppercase text-black/56 backdrop-blur">Levered OS</span>
              <span className="rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">Live</span>
            </div>
            <div className="rounded-[22px] border border-white/24 bg-white/18 p-4 text-white backdrop-blur-xl">
              <div className="text-sm font-semibold text-white/62">Next best move</div>
              <div className="mt-2 text-2xl font-semibold leading-tight">Shift budget into high-LTV search cohort</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.055] p-5 sm:rounded-[28px]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white/48">Decision confidence</p>
              <div className="mt-2 text-5xl font-semibold leading-none sm:text-6xl">94%</div>
            </div>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-yellow text-black">
              <BarChart3 size={21} />
            </span>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between text-xs text-white/45">
              <span>Revenue probability</span>
              <span>Next 28 days</span>
            </div>
            <div className="relative h-32 overflow-hidden rounded-[22px] border border-white/10 bg-black/26 p-3">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.052)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.052)_1px,transparent_1px)] bg-[size:34px_34px]" />
              <svg className="relative h-full w-full" viewBox="0 0 420 140" preserveAspectRatio="none">
                <path
                  d="M4 112 C46 84 76 104 112 78 C156 44 190 66 226 42 C278 8 318 34 358 18 C386 8 404 12 416 6 L416 140 L4 140 Z"
                  fill="url(#heroDecisionFill)"
                />
                <motion.path
                  d="M4 112 C46 84 76 104 112 78 C156 44 190 66 226 42 C278 8 318 34 358 18 C386 8 404 12 416 6"
                  fill="none"
                  stroke="url(#heroDecisionLine)"
                  strokeLinecap="round"
                  strokeWidth="6"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.45, duration: 1, ease: 'easeOut' }}
                />
                <defs>
                  <linearGradient id="heroDecisionFill" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="#F3C770" stopOpacity="0.44" />
                    <stop offset="1" stopColor="#F3C770" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="heroDecisionLine" x1="0" x2="1" y1="0" y2="0">
                    <stop stopColor="#74BDF8" />
                    <stop offset="0.52" stopColor="#F3C770" />
                    <stop offset="1" stopColor="#F3C770" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {modelSignals.map((signal) => (
              <div key={signal.label}>
                <div className="mb-1.5 flex items-center justify-between text-xs text-white/52">
                  <span>{signal.label}</span>
                  <span>{signal.value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: signal.width }}
                    transition={{ delay: 0.35, duration: 0.8, ease: 'easeOut' }}
                    className={cn('h-full rounded-full', signal.color)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function HeroInsightStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.16, duration: 0.55, ease: 'easeOut' }}
      className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_16px_50px_rgba(35,31,24,0.06)] md:grid-cols-[0.86fr_1.14fr]"
    >
      <div className="border-b border-black/10 p-5 md:border-b-0 md:border-r">
        <p className="text-xs font-semibold uppercase text-black/42">Weekly readout</p>
        <div className="mt-3 text-3xl font-semibold leading-none">3 actions</div>
        <p className="mt-3 text-sm leading-6 text-black/56">A short queue for budget, funnel, and lifecycle moves.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {decisionQueue.map(([title, detail], index) => (
          <div
            key={title}
            className={cn(
              'min-h-[126px] p-5',
              index > 0 && 'border-t border-black/10 sm:border-l sm:border-t-0'
            )}
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-semibold text-black/34">0{index + 1}</span>
              <span className={cn('h-2 w-8 rounded-full', index === 0 ? 'bg-brand-yellow' : index === 1 ? 'bg-brand-purple' : 'bg-brand-blue')} />
            </div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-5 text-black/50">{detail}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function GeneratedModelPanel({ className }: { className?: string }) {
  return (
    <div className={cn('relative overflow-hidden bg-[#f7f4ee] p-4 text-black sm:p-6', className)}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(116,189,248,0.45),transparent_24rem),radial-gradient(circle_at_82%_65%,rgba(88,55,194,0.34),transparent_22rem)]" />
      <div className="relative flex h-full min-h-[380px] flex-col justify-between sm:min-h-[460px]">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase text-black/55">Generated model</span>
          <span className="rounded-full bg-black px-3 py-1.5 text-xs font-semibold text-white">Live</span>
        </div>

        <div className="mx-auto grid w-full max-w-xl grid-cols-3 gap-2 sm:gap-3">
          {[
            ['Signal', '98.7%'],
            ['Lift', '+31%'],
            ['Risk', 'Low'],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-black/10 bg-white/72 p-3 backdrop-blur sm:rounded-3xl sm:p-4">
              <div className="text-xs font-semibold uppercase text-black/42">{label}</div>
              <div className="mt-6 text-xl font-semibold sm:mt-8 sm:text-2xl">{value}</div>
            </div>
          ))}
        </div>

        <div className="relative mx-auto h-48 w-full max-w-xl rounded-[24px] border border-black/10 bg-black p-4 text-white shadow-2xl shadow-black/20 sm:h-56 sm:rounded-[30px] sm:p-5">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm font-semibold text-white/62">Revenue probability curve</span>
            <span className="text-sm font-semibold text-brand-yellow">+24.8%</span>
          </div>
          <svg className="h-24 w-full sm:h-32" viewBox="0 0 520 160" preserveAspectRatio="none">
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
    <motion.div {...fadeIn} className="rounded-[28px] border border-white/10 bg-white/[0.05] p-3 sm:rounded-[34px] sm:p-4">
      <div className="rounded-[24px] bg-[#f7f4ee] p-4 text-black sm:rounded-[26px] sm:p-5">
        <div className="mb-6 flex items-center justify-between gap-4 sm:mb-7 sm:gap-5">
          <div>
            <p className="w-fit bg-brand-purple/16 px-1 text-sm font-semibold uppercase text-brand-purple">Levered OS</p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">Weekly decision board</h3>
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

        <div className="mt-3 overflow-hidden rounded-[24px] bg-black p-4 text-white sm:rounded-[28px]">
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
            <div className="relative h-44 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-4 sm:h-48">
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

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
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
      <section className="relative px-4 pb-12 pt-28 sm:px-8 sm:pb-14 lg:min-h-screen lg:px-10 lg:pb-16">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fbfaf7_0%,#f1eee6_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_18%_16%,rgba(88,55,194,0.14),transparent_28rem),radial-gradient(circle_at_82%_12%,rgba(116,189,248,0.18),transparent_30rem)]" />
        <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col justify-between rounded-[28px] border border-black/10 bg-white p-5 shadow-[0_24px_80px_rgba(35,31,24,0.07)] sm:p-8 lg:min-h-[calc(100vh-9rem)] lg:rounded-[34px] lg:p-10 xl:p-12"
          >
            <div className="flex w-fit max-w-full items-center gap-2 rounded-full border border-black/10 bg-[#f7f4ee] px-3 py-2 text-xs font-semibold text-black/64 sm:px-4 sm:text-sm">
              <Sparkles size={16} className="shrink-0 text-brand-purple" />
              <span className="truncate">Growth operating systems for sharper decisions</span>
            </div>

            <div className="mt-16 max-w-4xl lg:mt-20">
              <h1 className="text-[clamp(2.55rem,11.8vw,3.35rem)] font-semibold leading-[1] text-black sm:text-[clamp(3.15rem,5.85vw,5.85rem)] sm:leading-[0.96]">
                Turn growth data into obvious next moves.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-black/62 sm:mt-8 sm:text-xl sm:leading-8">
                Levered builds the measurement, experimentation, and AI operating layer that helps ambitious teams know what to fund, test, and scale next.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-purple sm:w-auto sm:px-7"
                >
                  Book a growth audit
                  <ArrowUpRight size={18} />
                </Link>
                <Link
                  to="/methodology"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-[#f7f4ee] px-6 py-4 text-sm font-semibold text-black transition-colors hover:bg-white sm:w-auto sm:px-7"
                >
                  See the method
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:mt-16">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-[22px] border border-black/10 bg-[#f7f4ee] p-4">
                  <div className="text-2xl font-semibold leading-none sm:text-3xl">{metric.value}</div>
                  <p className="mt-3 text-sm leading-5 text-black/50">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 self-stretch lg:min-h-[calc(100vh-9rem)] lg:justify-between">
            <HeroDecisionPanel />
            <HeroInsightStrip />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {heroWorkflow.map((step, index) => (
                <HeroWorkflowCard key={step.title} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-4 pb-16 pt-8 sm:px-8 md:pb-28 md:pt-10 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div
            {...fadeIn}
            className="overflow-hidden rounded-[28px] bg-black text-white shadow-[0_24px_90px_rgba(17,17,17,0.18)] sm:rounded-[36px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="flex min-h-[220px] flex-col justify-between border-b border-white/10 p-6 md:p-9 lg:border-b-0 lg:border-r">
                <div>
                  <p className="text-sm font-semibold uppercase text-brand-yellow">Measured outcomes</p>
                  <h2 className="mt-5 max-w-xl text-[clamp(2rem,9.5vw,2.7rem)] font-semibold leading-[1] sm:text-[clamp(2.3rem,4.2vw,4.6rem)] sm:leading-[0.96]">
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
                      'relative min-h-[140px] border-white/10 p-6 md:min-h-[170px] md:p-9',
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
                    <div className="text-3xl font-semibold leading-none md:text-6xl">{metric.value}</div>
                    <div className="mt-4 text-base text-white/52">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="mt-6 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_24px_90px_rgba(35,31,24,0.07)] sm:rounded-[36px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr]">
              <div className="flex min-h-[280px] flex-col justify-between border-b border-black/10 bg-[#f7f4ee] p-6 sm:p-9 lg:border-b-0 lg:border-r">
                <div>
                  <p className="text-sm font-semibold uppercase text-brand-purple">Partner proof</p>
                  <h2 className="mt-5 max-w-xl text-[clamp(2.15rem,9.5vw,3rem)] font-semibold leading-[1] text-black sm:text-[clamp(2.7rem,4.7vw,5rem)] sm:leading-[0.96]">
                    Less risk. More reward.
                  </h2>
                </div>
                <p className="mt-8 max-w-md text-base leading-7 text-black/58">
                  Familiar operators, sharper systems, and cleaner accountability for every growth decision.
                </p>
                <Link
                  to="/case-studies"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-purple"
                >
                  View proof
                  <ArrowRight size={17} />
                </Link>
              </div>

              <div className="p-6 sm:p-9">
                <p className="max-w-4xl text-xl font-medium leading-8 text-black/74 sm:text-2xl sm:leading-10">
                  Adaptive growth teams combine paid media, creative, CRO, lifecycle, and AI measurement into one operating rhythm.
                </p>
                <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-black sm:text-xl">
                  A flexible growth system in days, with performance accountability built in.
                </p>

                <div className="mt-9 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                  {partnerLogos.map((partner) => (
                    <div key={partner.name} className="flex min-h-[104px] items-center justify-center border-b border-r border-black/10 bg-white p-5 transition-colors hover:bg-[#f7f4ee] sm:min-h-[118px] sm:p-6">
                      <img
                        src={partner.src}
                        alt={partner.name}
                        className={cn('h-auto w-auto object-contain', partner.className)}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="mt-16 grid grid-cols-1 gap-6 lg:mt-24 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">What we build</p>
              <h2 className="text-[clamp(2.1rem,9.8vw,2.85rem)] font-semibold leading-[1] sm:text-[clamp(2.75rem,5.6vw,5.9rem)] sm:leading-[0.96]">
                A prettier, smarter way to operate growth.
              </h2>
            </div>
            <p className="text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
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
                  className="group overflow-hidden rounded-[28px] border border-black/10 bg-white p-3 shadow-[0_20px_70px_rgba(35,31,24,0.07)] sm:rounded-[32px] sm:p-4"
                >
                  <PhotoPanel
                    imageClass={service.imageClass}
                    imageSrc={service.imageSrc}
                    label={service.eyebrow}
                    className="h-[210px] rounded-[22px] sm:h-[340px] sm:rounded-[24px]"
                  />
                  <div className="p-4 pt-7">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="text-sm font-semibold uppercase text-black/42">{service.eyebrow}</span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f3f0e8] text-black transition-colors group-hover:bg-black group-hover:text-white">
                        <Icon size={20} />
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 leading-7 text-black/58">{service.text}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-16 text-white sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeIn}>
            <p className="mb-5 text-sm font-semibold uppercase text-brand-yellow">Operating system</p>
            <h2 className="text-[clamp(2.1rem,9.8vw,2.9rem)] font-semibold leading-[1] sm:text-[clamp(2.75rem,5vw,5.4rem)] sm:leading-[0.96]">
              Make every growth decision feel obvious.
            </h2>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              We connect the messy parts of marketing into one composed system: data quality, model logic, creative velocity, and weekly execution.
            </p>
          </motion.div>

          <LeveredOSBoard />
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div {...fadeIn} className="mb-10 grid grid-cols-1 gap-6 lg:mb-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">System layers</p>
              <h2 className="text-[clamp(2.1rem,9.8vw,2.9rem)] font-semibold leading-[1] sm:text-[clamp(2.75rem,5vw,5.4rem)] sm:leading-[0.96]">
                Data, models, and execution in one rhythm.
              </h2>
            </div>
            <p className="text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
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
                  className="rounded-[28px] border border-black/10 bg-[#f7f4ee] p-6 sm:rounded-[32px] sm:p-7"
                >
                  <div className="mb-10 flex items-center justify-between sm:mb-16">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-purple">
                      <Icon size={22} />
                    </span>
                    <span className="text-sm font-semibold text-black/35">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">{card.title}</h3>
                  <p className="mt-4 leading-7 text-black/58">{card.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] px-4 py-16 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8">
          <motion.div {...fadeIn} className="rounded-[28px] bg-black p-6 text-white sm:rounded-[34px] md:p-10">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-yellow">How it starts</p>
            <h2 className="text-[clamp(2.1rem,9.8vw,2.8rem)] font-semibold leading-[1] sm:text-[clamp(2.7rem,4.8vw,5.25rem)]">
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
                className="rounded-[28px] border border-black/10 bg-white p-6 sm:rounded-[32px] sm:p-7"
              >
                <div className="mb-10 flex items-center justify-between sm:mb-14">
                  <span className="text-sm font-semibold text-brand-purple">{number}</span>
                  {index === 0 ? <Play size={18} /> : <Check size={18} />}
                </div>
                <h3 className="text-2xl font-semibold sm:text-3xl">{title}</h3>
                <p className="mt-4 leading-7 text-black/58">{detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-8 md:py-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 overflow-hidden rounded-[28px] bg-black sm:rounded-[36px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-6 text-white md:p-14 lg:p-16">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-blue">Limited partner model</p>
            <h2 className="max-w-4xl text-[clamp(2.1rem,9.8vw,2.9rem)] font-semibold leading-[1] sm:text-[clamp(2.9rem,5.6vw,6rem)] sm:leading-[0.94]">
              Build the growth system your next stage deserves.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
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
