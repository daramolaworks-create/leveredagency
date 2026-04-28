import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Check, FlaskConical, LineChart as LineChartIcon, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { cn } from '../lib/utils';

const experimentData = [
  { day: 'Day 1', control: 10, challenger: 12 },
  { day: 'Day 3', control: 15, challenger: 22 },
  { day: 'Day 5', control: 18, challenger: 35 },
  { day: 'Day 7', control: 22, challenger: 48 },
  { day: 'Day 10', control: 25, challenger: 62 },
  { day: 'Day 14', control: 30, challenger: 85 },
];

const findings = [
  { id: 'cart-recovery-sms', number: '741', title: 'SMS vs Email for Cart Recovery', result: 'SMS +42%', status: 'Winner' },
  { id: 'dynamic-pricing-thresholds', number: '739', title: 'Dynamic Pricing Thresholds', result: 'Inconclusive', status: 'Stopped' },
  { id: 'ai-copywriting-human', number: '732', title: 'AI Copywriting vs Human', result: 'AI +12% CTR', status: 'Winner' },
];

const metrics = [
  ['Confidence', '98.4%'],
  ['Lift', '+28.4%'],
  ['Sample', '14,202'],
];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export const Experiments = () => {
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
            <p className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase text-brand-purple">
              <FlaskConical size={16} />
              Experiments
            </p>
            <h1 className="max-w-5xl text-[clamp(2.85rem,5.2vw,5.6rem)] font-semibold leading-[0.94]">
              The lab behind cleaner growth decisions.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">
              We run structured experiments across acquisition, conversion, and retention so growth decisions are based on signal, not opinion.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
            className="rounded-[36px] bg-black p-6 text-white"
          >
            <LineChartIcon size={24} className="text-brand-yellow" />
            <div className="mt-20 text-5xl font-semibold">150+</div>
            <p className="mt-3 max-w-sm text-lg leading-8 text-white/58">active experiments across growth systems.</p>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <motion.div {...fadeIn} className="overflow-hidden rounded-[34px] border border-black/10 bg-white p-4 shadow-[0_18px_70px_rgba(35,31,24,0.06)]">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="rounded-[28px] bg-[#f7f4ee] p-6 md:p-8">
                <p className="text-sm font-semibold uppercase text-brand-purple">Active experiment #842</p>
                <h2 className="mt-4 text-3xl font-semibold">Checkout flow: multi-step vs. single-page</h2>
                <p className="mt-5 leading-7 text-black/58">
                  Reducing cognitive load by splitting checkout into three steps is expected to increase completion for mobile users.
                </p>

                <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-black/38">
                      <Check size={13} />
                      Control
                    </p>
                    <p className="font-semibold">Single page checkout</p>
                  </div>
                  <div className="rounded-2xl bg-black p-4 text-white">
                    <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase text-brand-yellow">
                      <TrendingUp size={13} />
                      Challenger
                    </p>
                    <p className="font-semibold">3-step progressive flow</p>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-3 gap-3">
                  {metrics.map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-white p-4">
                      <div className="text-2xl font-semibold">{value}</div>
                      <p className="mt-1 text-xs font-semibold uppercase text-black/38">{label}</p>
                    </div>
                  ))}
                </div>
                <Link to="/experiments/checkout-flow" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-brand-purple">
                  View active report
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="rounded-[28px] bg-black p-5 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-sm font-semibold text-white/58">Conversion rate over time</p>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">Live</span>
                </div>
                <div className="h-[320px] w-full min-w-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={experimentData} margin={{ top: 10, right: 12, left: 0, bottom: 0 }}>
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
              </div>
            </div>
          </motion.div>

          <section className="mt-20">
            <motion.div {...fadeIn} className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase text-brand-purple">Recent findings</p>
                <h2 className="text-[clamp(2.3rem,3.8vw,4.25rem)] font-semibold leading-[0.98]">Signals worth acting on.</h2>
              </div>
              <Link to="/methodology" className="inline-flex items-center gap-2 text-sm font-semibold text-black transition-colors hover:text-brand-purple">
                Our methodology
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {findings.map((exp, index) => (
                <motion.article key={exp.id} {...fadeIn} transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }} className="rounded-[28px] border border-black/10 bg-white p-6">
                  <div className="mb-10 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase text-black/35">#EXP-{exp.number}</span>
                    <span className={cn('rounded-full px-3 py-1 text-xs font-semibold uppercase', exp.status === 'Winner' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700')}>
                      {exp.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">{exp.title}</h3>
                  <p className="mt-5 text-3xl font-semibold">{exp.result}</p>
                  <Link to={`/experiments/${exp.id}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-black/62 transition-colors hover:text-brand-purple">
                    View report
                    <ArrowRight size={15} />
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};
