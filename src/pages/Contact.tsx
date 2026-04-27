import { motion } from 'motion/react';
import { BarChart3, Check, Mail, MapPin, Send } from 'lucide-react';

const auditSteps = [
  'Instrumentation and attribution review',
  'Funnel economics and growth bottleneck mapping',
  'Experiment roadmap and operating cadence recommendation',
];

const nextSteps = [
  'We review your growth system',
  'We map the highest-leverage bottleneck',
  'You receive the audit recommendation',
];

export const Contact = () => {
  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative px-5 pb-20 pt-32 sm:px-8 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-[1420px] grid-cols-1 items-start gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex h-full flex-col rounded-[34px] border border-black/10 bg-white/68 p-6 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-8"
          >
            <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">Book audit</p>
            <h1 className="max-w-3xl text-[clamp(2.35rem,4vw,4.2rem)] font-semibold leading-[0.98]">
              Start with the system, not the sales call.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-black/62 md:text-lg">
              Every partnership begins with a focused audit of your data, funnel, and growth operating model.
            </p>

            <div className="mt-8 space-y-3">
              {auditSteps.map((step) => (
                <div key={step} className="flex items-center gap-3 rounded-2xl bg-[#f7f4ee] px-4 py-3.5 text-sm font-semibold text-black/62">
                  <Check size={17} className="shrink-0 text-brand-purple" />
                  {step}
                </div>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-1 gap-3 pt-8 sm:grid-cols-2">
              <div className="rounded-[24px] bg-black p-5 text-white">
                <Mail size={20} className="text-brand-yellow" />
                <p className="mt-6 text-sm font-semibold uppercase text-white/38">Direct</p>
                <p className="mt-2 font-semibold">systems@levered.io</p>
              </div>
              <div className="rounded-[24px] border border-black/10 bg-white p-5">
                <MapPin size={20} className="text-brand-purple" />
                <p className="mt-6 text-sm font-semibold uppercase text-black/38">Location</p>
                <p className="mt-2 font-semibold">Global / Remote</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
            className="rounded-[34px] border border-black/10 bg-white p-5 text-black shadow-[0_24px_80px_rgba(35,31,24,0.08)] md:p-7 lg:p-8"
          >
            <div className="mb-8 flex items-start justify-between gap-5">
              <div>
                <p className="text-sm font-semibold uppercase text-brand-purple">Audit request</p>
                <h2 className="mt-1 text-2xl font-semibold md:text-[2rem]">Tell us where growth is stuck.</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/50">
                  Share the essentials. We will use this to prepare a sharper first pass before we reply.
                </p>
              </div>
              <div className="hidden rounded-2xl bg-[#f7f4ee] p-4 text-brand-purple sm:block">
                <BarChart3 size={24} />
              </div>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-black/38">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/35 focus:border-brand-purple focus:outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-black/38">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/35 focus:border-brand-purple focus:outline-none"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-black/38">Monthly ad spend</label>
                  <select className="w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-black focus:border-brand-purple focus:outline-none">
                    <option>$50k - $100k</option>
                    <option>$100k - $500k</option>
                    <option>$500k - $1M</option>
                    <option>$1M+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase text-black/38">Primary goal</label>
                  <select className="w-full appearance-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-black focus:border-brand-purple focus:outline-none">
                    <option>Improve acquisition efficiency</option>
                    <option>Increase conversion rate</option>
                    <option>Improve retention/LTV</option>
                    <option>Fix attribution and reporting</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-black/38">Growth bottleneck</label>
                <textarea
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 text-black placeholder:text-black/35 focus:border-brand-purple focus:outline-none"
                  placeholder="Describe what is limiting growth right now..."
                />
              </div>

              <div className="rounded-[26px] bg-[#f7f4ee] p-4">
                <p className="mb-3 text-xs font-semibold uppercase text-black/38">What happens next</p>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  {nextSteps.map((step, index) => (
                    <div key={step} className="rounded-2xl bg-white px-4 py-4">
                      <p className="text-sm font-semibold text-brand-purple">0{index + 1}</p>
                      <p className="mt-3 text-sm font-semibold leading-5 text-black/62">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <button className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-purple">
                Submit audit request
                <Send size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
