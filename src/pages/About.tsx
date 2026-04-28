import { motion } from 'motion/react';
import { ArrowUpRight, Check, Globe2, LineChart, ShieldCheck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const principles = [
  {
    title: 'Systems over campaigns',
    text: 'We build interoperable growth loops that compound instead of chasing one-off wins.',
  },
  {
    title: 'Data integrity first',
    text: 'Attribution, tracking, and event quality are treated as core growth infrastructure.',
  },
  {
    title: 'Alpha in the noise',
    text: 'In saturated markets, advantage comes from cleaner measurement and faster learning.',
  },
];

const stats = [
  ['Capital modeled', '$450M+'],
  ['Experiments run', '12,400+'],
  ['Signals/day', '1.2B'],
  ['Global team', '24'],
];

const disciplines = ['Growth engineers', 'Data scientists', 'Performance analysts', 'Creative technologists'];

const fadeIn = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export const About = () => {
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
            <p className="mb-6 text-sm font-semibold uppercase text-brand-purple">About</p>
            <h1 className="max-w-5xl text-[clamp(2.05rem,9.5vw,2.7rem)] font-semibold leading-[1] sm:text-[clamp(2.85rem,5.2vw,5.6rem)] sm:leading-[0.94]">
              Growth is engineered by people who understand systems.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-black/62 sm:text-lg sm:leading-8">
              Levered was founded on a simple premise: modern marketing is a data engineering problem. We build the systems that make growth predictable, measurable, and compounding.
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.08, duration: 0.7, ease: 'easeOut' }}
            className="relative min-h-[300px] sm:min-h-[520px] overflow-hidden rounded-[28px] bg-black sm:rounded-[36px]"
          >
            <img src="/images/team-about-global.png" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 rounded-[22px] border border-white/15 bg-white/14 p-4 text-white sm:bottom-6 sm:left-6 sm:right-6 sm:rounded-[26px] sm:p-5 backdrop-blur-md">
              <Globe2 size={24} className="text-brand-yellow" />
              <p className="mt-6 text-2xl font-semibold sm:mt-8 sm:text-3xl">Global by design</p>
              <p className="mt-3 leading-7 text-white/62">Remote-first operators, analysts, and builders working across markets.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map(([label, value]) => (
              <motion.div key={label} {...fadeIn} className="rounded-[26px] border border-black/10 bg-white p-5">
                <div className="text-3xl font-semibold">{value}</div>
                <p className="mt-2 text-sm text-black/50">{label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeIn} className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">Principles</p>
              <h2 className="text-[clamp(2.05rem,9.5vw,2.75rem)] font-semibold leading-[1] sm:text-[clamp(2.45rem,4.4vw,4.8rem)] sm:leading-[0.96]">
                The beliefs behind the work.
              </h2>
            </div>
            <p className="text-base leading-7 text-black/58 sm:text-lg sm:leading-8">
              We are not a traditional agency. We are a team of technical operators building the infrastructure behind better growth decisions.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <motion.article key={item.title} {...fadeIn} transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }} className="rounded-[30px] border border-black/10 bg-white p-6">
                <span className="text-sm font-semibold text-brand-purple">0{index + 1}</span>
                <h3 className="mt-12 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-black/58">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] px-4 py-16 text-white sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeIn}>
            <p className="mb-5 text-sm font-semibold uppercase text-brand-yellow">Team model</p>
            <h2 className="text-[clamp(2.05rem,9.5vw,2.75rem)] font-semibold leading-[1] sm:text-[clamp(2.45rem,4.2vw,4.7rem)] sm:leading-[0.96]">
              Built by analysts, engineers, and operators.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/58 sm:text-lg sm:leading-8">
              We approach each partner as a technical operating challenge, not a campaign calendar.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {disciplines.map((discipline) => (
              <div key={discipline} className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5">
                <Check size={18} className="text-brand-yellow" />
                <p className="mt-10 text-xl font-semibold">{discipline}</p>
              </div>
            ))}
            <div className="rounded-[24px] bg-white p-5 text-black sm:col-span-2">
              <LineChart size={22} className="text-brand-purple" />
              <p className="mt-10 text-3xl font-semibold">24/7 signal monitoring</p>
              <p className="mt-3 leading-7 text-black/58">Always-on reporting and weekly decision loops keep the system moving.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-8 md:py-24 lg:px-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 gap-8 rounded-[32px] bg-white p-7 shadow-[0_20px_70px_rgba(35,31,24,0.07)] md:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <ShieldCheck size={24} className="mb-5 text-brand-purple" />
            <h2 className="max-w-4xl text-[clamp(2rem,9vw,2.65rem)] font-semibold leading-[1] sm:text-[clamp(2.3rem,3.8vw,4.25rem)] sm:leading-[0.98]">
              Growth infrastructure should be clear, secure, and measurable.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-purple"
          >
            Book audit
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};
