import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, FileText, ShieldCheck } from 'lucide-react';

const privacySections = [
  {
    title: 'Information we collect',
    body: 'We collect information you choose to share with us, such as your name, email, company details, audit request notes, and newsletter signup information. We may also receive basic website analytics such as pages visited, browser type, approximate location, and referral source.',
  },
  {
    title: 'How we use information',
    body: 'We use information to respond to audit requests, provide services, improve our website, send relevant updates, protect our systems, and understand how teams engage with our content.',
  },
  {
    title: 'Cookies and analytics',
    body: 'Our website may use cookies or similar technologies to understand traffic, improve performance, and measure content engagement. You can control cookies through your browser settings.',
  },
  {
    title: 'Sharing information',
    body: 'We do not sell personal information. We may share limited information with service providers who help us operate the website, manage communications, or deliver our work, subject to appropriate confidentiality and security obligations.',
  },
  {
    title: 'Data retention',
    body: 'We keep information only as long as reasonably needed for the purpose it was collected, to maintain business records, or to comply with legal obligations.',
  },
  {
    title: 'Your choices',
    body: 'You may ask us to update, delete, or provide access to personal information where applicable. You can also unsubscribe from marketing emails at any time.',
  },
];

const termsSections = [
  {
    title: 'Use of the site',
    body: 'You may use this website for lawful business and informational purposes. You may not misuse the site, interfere with its operation, attempt unauthorized access, or use the content in a misleading way.',
  },
  {
    title: 'Website content',
    body: 'Content on this site is provided for general information. It does not create a client relationship, professional engagement, or guarantee specific commercial results.',
  },
  {
    title: 'Intellectual property',
    body: 'The Levered name, visual identity, website content, layouts, and materials are owned by Levered or its licensors. You may not copy, modify, or redistribute them without permission except as allowed by law.',
  },
  {
    title: 'Third-party links',
    body: 'The website may link to third-party websites or social platforms. We are not responsible for their content, security, or privacy practices.',
  },
  {
    title: 'No warranties',
    body: 'The site is provided as available. We do not promise that it will be uninterrupted, error-free, or suitable for every purpose.',
  },
  {
    title: 'Limitation of liability',
    body: 'To the fullest extent permitted by law, Levered will not be liable for indirect, incidental, consequential, or special damages arising from use of this website.',
  },
];

function LegalPage({
  type,
  title,
  intro,
  sections,
}: {
  type: 'Privacy' | 'Terms';
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
}) {
  const Icon = type === 'Privacy' ? ShieldCheck : FileText;

  return (
    <div className="overflow-hidden bg-[#f7f4ee] text-[#111111]">
      <section className="relative px-5 pb-16 pt-32 sm:px-8 md:pt-40 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(88,55,194,0.15),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(116,189,248,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-[1180px]">
          <Link to="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-black/52 transition-colors hover:text-black">
            <ArrowLeft size={16} />
            Back home
          </Link>

          <header className="rounded-[36px] border border-black/10 bg-white/62 p-7 shadow-[0_24px_80px_rgba(35,31,24,0.08)] backdrop-blur-xl md:p-10 lg:p-12">
            <p className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase text-brand-purple">
              <Icon size={17} />
              {type}
            </p>
            <h1 className="max-w-5xl text-[clamp(2.75rem,5vw,5.35rem)] font-semibold leading-[0.94]">{title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/62">{intro}</p>
            <p className="mt-8 border-t border-black/10 pt-5 text-sm font-semibold text-black/38">Last updated: April 28, 2026</p>
          </header>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 md:pb-28 lg:px-10">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 lg:grid-cols-[1fr_0.35fr]">
          <article className="rounded-[34px] border border-black/10 bg-white p-7 md:p-10">
            <div className="space-y-10">
              {sections.map((section, index) => (
                <section key={section.title} className="border-b border-black/10 pb-10 last:border-b-0 last:pb-0">
                  <span className="text-sm font-semibold text-brand-purple">0{index + 1}</span>
                  <h2 className="mt-4 text-3xl font-semibold">{section.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-black/62">{section.body}</p>
                </section>
              ))}
            </div>
          </article>

          <aside className="space-y-5">
            <div className="rounded-[30px] bg-black p-6 text-white">
              <h3 className="text-2xl font-semibold">Questions?</h3>
              <p className="mt-4 leading-7 text-white/58">Reach out if you need clarification about our policies or how we handle requests.</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-colors hover:bg-brand-yellow"
              >
                Contact us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export const Privacy = () => (
  <LegalPage
    type="Privacy"
    title="Privacy Policy"
    intro="This policy explains what information Levered collects, how we use it, and the choices you have when you interact with our website or request an audit."
    sections={privacySections}
  />
);

export const Terms = () => (
  <LegalPage
    type="Terms"
    title="Terms of Use"
    intro="These terms explain the basic rules for using the Levered website, content, and public materials."
    sections={termsSections}
  />
);
