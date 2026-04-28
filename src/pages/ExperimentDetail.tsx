import { Link, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, BarChart3, Check, FlaskConical, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { cn } from '../lib/utils';

const experiments = {
  'checkout-flow': {
    number: '842',
    title: 'Checkout flow: multi-step vs. single-page',
    status: 'Live',
    result: '+28.4%',
    category: 'Conversion',
    hypothesis: 'Reducing cognitive load by splitting checkout into three focused steps will increase mobile completion rate without lowering order quality.',
    summary: 'The challenger is currently outperforming the single-page flow, with the strongest lift coming from returning mobile visitors.',
    image: '/images/team-experiments-lab.png',
    metrics: [
      ['Lift', '+28.4%'],
      ['Confidence', '98.4%'],
      ['Sample', '14,202'],
    ],
    data: [
      { day: 'Day 1', control: 10, challenger: 12 },
      { day: 'Day 3', control: 15, challenger: 22 },
      { day: 'Day 5', control: 18, challenger: 35 },
      { day: 'Day 7', control: 22, challenger: 48 },
      { day: 'Day 10', control: 25, challenger: 62 },
      { day: 'Day 14', control: 30, challenger: 85 },
    ],
    readout: [
      'The progressive flow reduces abandonment during payment selection.',
      'Returning visitors move faster when shipping and payment are separated.',
      'The next readout should segment lift by device, traffic source, and cart value.',
    ],
  },
  'cart-recovery-sms': {
    number: '741',
    title: 'SMS vs Email for Cart Recovery',
    status: 'Winner',
    result: 'SMS +42%',
    category: 'Lifecycle',
    hypothesis: 'Cart recovery will improve when high-intent visitors receive a concise SMS reminder within 20 minutes instead of a standard email follow-up.',
    summary: 'The SMS sequence created faster re-entry and stronger checkout completion without increasing unsubscribe pressure.',
    image: '/images/team-experiments-lab.png',
    metrics: [
      ['Lift', '+42%'],
      ['Confidence', '96.8%'],
      ['Sample', '8,420'],
    ],
    data: [
      { day: 'Day 1', control: 12, challenger: 14 },
      { day: 'Day 3', control: 18, challenger: 26 },
      { day: 'Day 5', control: 21, challenger: 35 },
      { day: 'Day 7', control: 27, challenger: 48 },
      { day: 'Day 10', control: 32, challenger: 61 },
      { day: 'Day 14', control: 38, challenger: 78 },
    ],
    readout: [
      'SMS performed best for returning visitors with items already added to cart.',
      'Email remained useful as a secondary touch for lower-intent sessions.',
      'The winning rollout uses SMS first, then email only when no reply or click is detected.',
    ],
  },
  'dynamic-pricing-thresholds': {
    number: '739',
    title: 'Dynamic Pricing Thresholds',
    status: 'Stopped',
    result: 'Inconclusive',
    category: 'Monetization',
    hypothesis: 'Threshold-based offers will improve conversion quality by adjusting incentives based on cart value and predicted repeat purchase likelihood.',
    summary: 'The test showed directional lift in checkout completion, but margin movement was too noisy to scale cleanly.',
    image: '/images/team-services-systems.png',
    metrics: [
      ['Lift', '+4.8%'],
      ['Confidence', '61.2%'],
      ['Sample', '5,940'],
    ],
    data: [
      { day: 'Day 1', control: 15, challenger: 16 },
      { day: 'Day 3', control: 24, challenger: 25 },
      { day: 'Day 5', control: 28, challenger: 31 },
      { day: 'Day 7', control: 38, challenger: 37 },
      { day: 'Day 10', control: 46, challenger: 50 },
      { day: 'Day 14', control: 58, challenger: 60 },
    ],
    readout: [
      'Conversion increased slightly, but discount mix made contribution margin unstable.',
      'The model needs cleaner customer value scoring before dynamic incentives are relaunched.',
      'Next test should isolate one segment and one offer band instead of testing multiple thresholds.',
    ],
  },
  'ai-copywriting-human': {
    number: '732',
    title: 'AI Copywriting vs Human',
    status: 'Winner',
    result: 'AI +12% CTR',
    category: 'Creative',
    hypothesis: 'AI-assisted creative variants will increase click-through rate when prompts are trained on winning customer objections and proof points.',
    summary: 'AI-assisted variants produced more message diversity and surfaced two angles that outperformed the control.',
    image: '/images/team-insights-research.png',
    metrics: [
      ['CTR lift', '+12%'],
      ['Confidence', '91.4%'],
      ['Variants', '64'],
    ],
    data: [
      { day: 'Day 1', control: 18, challenger: 19 },
      { day: 'Day 3', control: 23, challenger: 27 },
      { day: 'Day 5', control: 29, challenger: 35 },
      { day: 'Day 7', control: 35, challenger: 44 },
      { day: 'Day 10', control: 42, challenger: 54 },
      { day: 'Day 14', control: 51, challenger: 63 },
    ],
    readout: [
      'AI performed best when constrained by real customer language and offer-specific proof.',
      'Human-edited variants still had stronger final conversion quality than fully automated copy.',
      'The next cadence combines AI angle generation with human selection and landing-page alignment.',
    ],
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export const ExperimentDetail = () => {
  const { id } = useParams();
  const experiment = experiments[id as keyof typeof experiments];

  if (!experiment) {
    return (
      <div className="bg-[#f7f4ee] px-5 py-40 text-center">
        <p className="text-lg font-semibold">Experiment not found.</p>
        <Link to="/experiments" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
          <ArrowLeft size={16} />
          Back to experiments
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1480px]">
          <Link to="/experiments" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-black/52 transition-colors hover:text-black">
            <ArrowLeft size={16} />
            Back to experiments
          </Link>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_0.72fr]">
            <motion.header
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-[36px] border border-black/10 bg-white/62 p-7 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-10 lg:p-12"
            >
              <p className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase text-brand-purple">
                <FlaskConical size={16} />
                EXP-{experiment.number} / {experiment.category}
              </p>
              <h1 className="max-w-5xl text-[clamp(2.75rem,5vw,5.35rem)] font-semibold leading-[0.94]">{experiment.title}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">{experiment.summary}</p>
            </motion.header>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
              className="relative min-h-[420px] overflow-hidden rounded-[36px] bg-black"
            >
              <img src={experiment.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/18 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className={cn(
                  'rounded-full px-3 py-1.5 text-xs font-semibold uppercase',
                  experiment.status === 'Winner' && 'bg-green-100 text-green-700',
                  experiment.status === 'Stopped' && 'bg-red-100 text-red-700',
                  experiment.status === 'Live' && 'bg-white/16 text-white backdrop-blur-md'
                )}>
                  {experiment.status}
                </span>
                <div className="mt-4 text-6xl font-semibold text-white">{experiment.result}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.section {...fadeIn} className="rounded-[34px] border border-black/10 bg-white p-7 md:p-9">
            <p className="text-sm font-semibold uppercase text-brand-purple">Hypothesis</p>
            <h2 className="mt-4 text-3xl font-semibold">What we tested</h2>
            <p className="mt-5 text-lg leading-8 text-black/62">{experiment.hypothesis}</p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {experiment.metrics.map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#f7f4ee] p-5">
                  <div className="text-3xl font-semibold">{value}</div>
                  <p className="mt-2 text-xs font-semibold uppercase text-black/38">{label}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section {...fadeIn} className="rounded-[34px] bg-black p-5 text-white">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-semibold text-white/58">Experiment readout</p>
              <BarChart3 size={20} className="text-brand-yellow" />
            </div>
            <div className="h-[320px] w-full min-w-0">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={experiment.data} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#ffffff', fontSize: 11, opacity: 0.55 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#ffffff', fontSize: 11, opacity: 0.45 }} width={28} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#111111', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '14px', color: '#ffffff' }}
                    itemStyle={{ color: '#ffffff' }}
                  />
                  <Legend verticalAlign="top" height={36} iconType="circle" />
                  <Line type="monotone" dataKey="control" name="Control" stroke="#ffffff" strokeOpacity={0.35} strokeWidth={2} dot={false} isAnimationActive={false} />
                  <Line type="monotone" dataKey="challenger" name="Challenger" stroke="#F3C770" strokeWidth={3} dot={{ r: 4, fill: '#F3C770' }} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.section>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1480px] grid-cols-1 gap-5 lg:grid-cols-[1fr_0.42fr]">
          <motion.section {...fadeIn} className="rounded-[34px] border border-black/10 bg-white p-7 md:p-9">
            <h2 className="text-3xl font-semibold">Decision notes</h2>
            <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-3">
              {experiment.readout.map((note, index) => (
                <div key={note} className="rounded-2xl bg-[#f7f4ee] p-5">
                  <Check size={17} className="text-brand-purple" />
                  <p className="mt-5 leading-7 text-black/58">{note}</p>
                  <span className="mt-6 block text-sm font-semibold text-brand-purple">0{index + 1}</span>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.aside {...fadeIn} className="rounded-[30px] bg-black p-6 text-white">
            <TrendingUp size={22} className="text-brand-yellow" />
            <h3 className="mt-10 text-2xl font-semibold">Want this cadence?</h3>
            <p className="mt-4 leading-7 text-white/58">Start with an audit of your experiment queue, tracking, and decision rhythm.</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-brand-yellow"
            >
              Request audit
              <ArrowRight size={17} />
            </Link>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};
