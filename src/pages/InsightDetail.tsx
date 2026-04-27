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
};

export const InsightDetail = () => {
  const { id } = useParams();
  const post = insights[id as keyof typeof insights];

  if (!post) {
    return (
      <div className="bg-[#f7f4ee] px-5 py-40 text-center">
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
      <section className="relative px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1180px]">
          <Link to="/insights" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-black/52 transition-colors hover:text-black">
            <ArrowLeft size={16} />
            Back to insights
          </Link>
          <header className="rounded-[36px] border border-black/10 bg-white/62 p-7 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-10 lg:p-12">
            <p className="mb-5 text-sm font-semibold uppercase text-brand-purple">{post.category}</p>
            <h1 className="max-w-5xl text-[clamp(2.7rem,4.8vw,5.2rem)] font-semibold leading-[0.96]">{post.title}</h1>
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

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[1fr_0.35fr]">
          <article className="rounded-[34px] border border-black/10 bg-white p-7 md:p-10">
            <div className="relative mb-10 min-h-[360px] overflow-hidden rounded-[28px] bg-black">
              <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/8 to-transparent" />
            </div>
            <div className="space-y-12">
              {post.sections.map(([heading, body]) => (
                <section key={heading}>
                  <h2 className="text-3xl font-semibold">{heading}</h2>
                  <p className="mt-5 text-lg leading-8 text-black/62">{body}</p>
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
