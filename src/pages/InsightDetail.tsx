import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Bookmark, Clock, Share2 } from 'lucide-react';

const insights = {
  'server-side-attribution': {
    title: 'The Death of the Cookie: How to Build a Server-Side Attribution System',
    date: 'March 12, 2026',
    readTime: '12 min read',
    category: 'Infrastructure',
    image: '/images/team-insights-research.png',
    sections: [
      ['The problem with client-side tracking', 'Client-side tracking relies on the browser to send data directly to ad platforms. This is increasingly blocked by ad blockers, privacy settings, and browser-level prevention. The result is a blind spot in ROAS reporting and bidding feedback.'],
      ['The server-side solution', 'Server-side attribution moves the tracking logic from the browser to controlled infrastructure. Events can be validated, enriched with first-party signals, and forwarded to platforms with more consistency.'],
      ['Implementation roadmap', 'Deploy a server-side container, enrich events with customer value signals, connect platform conversion APIs, and maintain a clear event taxonomy owned by the business.'],
      ['The result', 'Teams that transition to server-side measurement typically see stronger attributed conversion volume and better optimization quality because platforms receive cleaner feedback.'],
    ],
  },
  'bayesian-bidding': {
    title: 'Statistical Significance in Low-Volume Markets: A Bayesian Approach',
    date: 'Feb 28, 2026',
    readTime: '15 min read',
    category: 'Data Science',
    image: '/images/team-methodology-workshop.png',
    sections: [
      ['Why frequentist testing fails', 'Traditional tests often require sample sizes that high-ticket or low-volume markets cannot reach quickly. That creates test paralysis and delays decisions.'],
      ['The Bayesian advantage', 'Bayesian methods estimate the probability that a variant is better, giving teams a more practical view of confidence as evidence accumulates.'],
      ['Applying Bayesian logic to bidding', 'We use probability-weighted reads to shift budget earlier, scale likely winners carefully, and reduce wasted spend while evidence continues to build.'],
    ],
  },
  'predictive-ltv': {
    title: 'Predictive LTV: Moving Beyond Historical Cohort Analysis',
    date: 'Feb 15, 2026',
    readTime: '10 min read',
    category: 'Retention',
    image: '/images/team-about-global.png',
    sections: [
      ['Why historical cohorts lag', 'Traditional cohort reads explain what already happened. They are useful for reporting, but they often arrive too late to influence acquisition, onboarding, and lifecycle decisions.'],
      ['What predictive LTV changes', 'Predictive LTV uses early behavioral signals to estimate future customer value. That lets teams adjust bids, offers, and lifecycle treatment before the customer has fully matured.'],
      ['Signals that matter', 'Early product engagement, category affinity, first-order margin, support behavior, and repeat-session quality can all improve the model when they are captured cleanly.'],
      ['The operating implication', 'The value of predictive LTV is not the score itself. It is the activation loop that routes that score back into media, CRM, merchandising, and executive reporting.'],
    ],
  },
  'growth-loop-framework': {
    title: 'The Growth Loop Framework: Why Campaigns are Obsolete',
    date: 'Jan 30, 2026',
    readTime: '8 min read',
    category: 'Strategy',
    image: '/images/team-services-systems.png',
    sections: [
      ['Campaigns reset too often', 'Campaign thinking creates bursts of activity that end before learning compounds. Teams launch, report, archive, and start over instead of building reusable growth infrastructure.'],
      ['Loops compound learning', 'A growth loop turns every customer interaction into better targeting, stronger proof, cleaner lifecycle timing, or sharper product insight. The system gets more useful with each cycle.'],
      ['The four loop layers', 'Strong loops connect acquisition signal, conversion behavior, lifecycle response, and measurement feedback. When one layer is missing, the whole system becomes harder to steer.'],
      ['Designing the first loop', 'Start with the highest-friction customer moment, define the signal it creates, and decide how that signal will change the next action. Keep the first loop simple enough to operate weekly.'],
    ],
  },
  'incrementality-testing': {
    title: 'Incrementality Testing: The Only Way to Measure True Marketing Impact',
    date: 'Jan 12, 2026',
    readTime: '18 min read',
    category: 'Measurement',
    image: '/images/team-case-studies.png',
    sections: [
      ['Attribution is not causality', 'Platform attribution tells you which touchpoints claimed credit. It does not prove whether the revenue would have happened without the spend.'],
      ['How incrementality helps', 'Incrementality testing compares exposed and held-out groups so teams can estimate true lift. It is the cleanest way to separate demand capture from demand creation.'],
      ['Choosing the right design', 'Geo tests, audience holdouts, conversion lift studies, and matched-market designs each fit different spend levels and operational constraints. The right test is the one the team can run cleanly.'],
      ['Making it operational', 'Incrementality should not be a one-time research project. It should become a recurring calibration layer that informs budget, channel mix, and confidence in platform reporting.'],
    ],
  },
  'ai-performance-creative': {
    title: 'AI in Performance Creative: Automating the Hypothesis Loop',
    date: 'Dec 20, 2025',
    readTime: '11 min read',
    category: 'Creative',
    image: '/images/team-experiments-lab.png',
    sections: [
      ['AI is not the creative strategy', 'AI can produce more variations, but it does not know which customer anxiety, proof point, or offer mechanic matters unless the team feeds it good strategy.'],
      ['Prompt from evidence', 'The strongest AI creative systems use real objections, review language, sales calls, search terms, and winning ad learnings as inputs. The prompt should be a structured hypothesis, not a blank request.'],
      ['Close the loop', 'Performance data should update the next generation of prompts. Winning angles, audience segments, landing-page outcomes, and fatigue signals all become fuel for the next batch.'],
      ['Human judgment still matters', 'AI expands the surface area of ideas. Humans still decide which ideas are strategically coherent, brand-safe, and worth connecting to the funnel.'],
    ],
  },
};

export const InsightDetail = () => {
  const { id } = useParams();
  const post = insights[id as keyof typeof insights];

  if (!post) {
    return (
      <div className="bg-[#f7f4ee] px-4 py-32 text-center">
        <p className="text-lg font-semibold">Insight not found.</p>
        <Link to="/insights" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-purple">
          <ArrowLeft size={16} />
          Back to insights
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative px-4 pb-12 pt-28 sm:px-8 md:pb-16 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1180px]">
          <Link to="/insights" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-black/52 transition-colors hover:text-black">
            <ArrowLeft size={16} />
            Back to insights
          </Link>
          <header className="rounded-[28px] border border-black/10 bg-white/62 p-5 sm:rounded-[36px] sm:p-7 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-10 lg:p-12">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">{post.category}</p>
            <h1 className="max-w-5xl text-[clamp(1.9rem,8.4vw,2.35rem)] font-semibold leading-[1] sm:text-[clamp(2.7rem,4.8vw,5.2rem)] sm:leading-[0.96]">{post.title}</h1>
            <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-black/45">
                <span>{post.date}</span>
                <span className="inline-flex items-center gap-1"><Clock size={15} /> {post.readTime}</span>
              </div>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/52 transition-colors hover:text-black">
                  <Share2 size={17} />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/52 transition-colors hover:text-black">
                  <Bookmark size={17} />
                </button>
              </div>
            </div>
          </header>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[1fr_0.35fr]">
          <article className="rounded-[34px] border border-black/10 bg-white p-7 md:p-10">
            <div className="relative mb-10 min-h-[240px] sm:min-h-[360px] overflow-hidden rounded-[28px] bg-black">
              <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent" />
            </div>
            <div className="space-y-12">
              {post.sections.map(([heading, body]) => (
                <section key={heading}>
                  <h2 className="text-3xl font-semibold">{heading}</h2>
                  <p className="mt-5 text-base leading-7 text-black/62 sm:text-lg sm:leading-8">{body}</p>
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-[30px] bg-black p-6 text-white">
              <h3 className="text-2xl font-semibold">Build this into your system.</h3>
              <p className="mt-4 leading-7 text-white/58">Turn the idea into instrumentation, dashboards, and operating cadence.</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-brand-yellow"
              >
                Request audit
                <ArrowRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};
