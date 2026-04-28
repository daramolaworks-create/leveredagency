export const siteUrl = 'https://levered.us';
export const siteName = 'Levered';
export const defaultImage = `${siteUrl}/images/global-strategy-team.jpg`;

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
};

export const seoPages: Record<string, SeoConfig> = {
  '/': {
    title: 'Levered | Growth Engineering, Measurement and Experimentation',
    description:
      'Levered builds measurement systems, experimentation programs, and AI workflows for high-growth teams that need cleaner, more accountable growth.',
    path: '/',
  },
  '/services': {
    title: 'Growth Engineering Services | Levered',
    description:
      'Explore Levered services across paid acquisition, conversion systems, lifecycle intelligence, and measurement infrastructure.',
    path: '/services',
    image: `${siteUrl}/images/team-services-systems.png`,
  },
  '/methodology': {
    title: 'Growth Methodology | Levered Operating System',
    description:
      'See how Levered audits growth systems, cleans measurement, runs experiments, and compounds wins into a repeatable operating cadence.',
    path: '/methodology',
    image: `${siteUrl}/images/team-methodology-workshop.png`,
  },
  '/case-studies': {
    title: 'Growth Case Studies | Levered',
    description:
      'Read case studies showing how Levered connects acquisition, conversion, retention, and measurement into measurable growth systems.',
    path: '/case-studies',
    image: `${siteUrl}/images/team-case-studies.png`,
  },
  '/experiments': {
    title: 'Experimentation Lab | Levered',
    description:
      'A look inside Levered experiment design, live growth readouts, and decision-making systems for acquisition, conversion, and lifecycle teams.',
    path: '/experiments',
    image: `${siteUrl}/images/team-experiments-lab.png`,
  },
  '/insights': {
    title: 'Growth Insights | Levered',
    description:
      'Practical thinking on attribution, experimentation, predictive LTV, incrementality testing, and technical growth operations.',
    path: '/insights',
    image: `${siteUrl}/images/team-insights-research.png`,
  },
  '/about': {
    title: 'About Levered | Technical Growth Team',
    description:
      'Meet Levered, a technical growth team building the systems behind predictable, measurable, and compounding growth.',
    path: '/about',
    image: `${siteUrl}/images/team-about-global.png`,
  },
  '/contact': {
    title: 'Book a Growth Audit | Levered',
    description:
      'Request a Levered growth audit to review your measurement, funnel economics, experiments, and operating cadence.',
    path: '/contact',
    image: `${siteUrl}/images/team-contact-audit.png`,
  },
  '/privacy': {
    title: 'Privacy Policy | Levered',
    description: 'Read the Levered privacy policy and learn how we handle website, audit request, and communication data.',
    path: '/privacy',
    noindex: true,
  },
  '/terms': {
    title: 'Terms of Use | Levered',
    description: 'Read the Levered website terms of use.',
    path: '/terms',
    noindex: true,
  },
};

export const caseStudySeo: Record<string, SeoConfig> = {
  'fintech-neo-bank': {
    title: 'Fintech Acquisition Case Study | Levered',
    description: 'How Levered helped a fintech neo-bank increase funded accounts by 340% while reducing CAC by 22%.',
    path: '/case-studies/fintech-neo-bank',
    image: `${siteUrl}/images/team-case-studies.png`,
  },
  'wellness-brand': {
    title: 'D2C Retention Case Study | Levered',
    description: 'How Levered improved 90-day retention by 45% with predictive LTV modeling and lifecycle automation.',
    path: '/case-studies/wellness-brand',
    image: `${siteUrl}/images/team-experiments-lab.png`,
  },
  'saas-enterprise': {
    title: 'SaaS Conversion Case Study | Levered',
    description: 'How Levered lifted demo requests by 18% through behavioral CRO and high-intent page experimentation.',
    path: '/case-studies/saas-enterprise',
    image: `${siteUrl}/images/team-services-systems.png`,
  },
  'ecommerce-aggregator': {
    title: 'E-commerce Measurement Case Study | Levered',
    description: 'How Levered unified server-side attribution across a multi-brand e-commerce portfolio in 6 weeks.',
    path: '/case-studies/ecommerce-aggregator',
    image: `${siteUrl}/images/team-methodology-workshop.png`,
  },
};

export const experimentSeo: Record<string, SeoConfig> = {
  'checkout-flow': {
    title: 'Checkout Flow Experiment Report | Levered',
    description: 'A live Levered experiment readout comparing multi-step checkout against single-page checkout.',
    path: '/experiments/checkout-flow',
    image: `${siteUrl}/images/team-experiments-lab.png`,
  },
  'cart-recovery-sms': {
    title: 'Cart Recovery Experiment Report | Levered',
    description: 'A Levered lifecycle experiment report on SMS versus email for cart recovery.',
    path: '/experiments/cart-recovery-sms',
    image: `${siteUrl}/images/team-experiments-lab.png`,
  },
  'dynamic-pricing-thresholds': {
    title: 'Dynamic Pricing Experiment Report | Levered',
    description: 'A Levered monetization experiment report on dynamic pricing thresholds and margin quality.',
    path: '/experiments/dynamic-pricing-thresholds',
    image: `${siteUrl}/images/team-services-systems.png`,
  },
  'ai-copywriting-human': {
    title: 'AI Copywriting Experiment Report | Levered',
    description: 'A Levered creative experiment report comparing AI-assisted performance copy against human-written variants.',
    path: '/experiments/ai-copywriting-human',
    image: `${siteUrl}/images/team-insights-research.png`,
  },
};

export const insightSeo: Record<string, SeoConfig> = {
  'server-side-attribution': {
    title: 'How to Build Server-Side Attribution | Levered',
    description: 'A technical guide to server-side attribution, event quality, conversion APIs, and cleaner platform feedback.',
    path: '/insights/server-side-attribution',
    image: `${siteUrl}/images/team-insights-research.png`,
    type: 'article',
    publishedTime: '2026-03-12',
  },
  'bayesian-bidding': {
    title: 'Bayesian Testing for Low-Volume Markets | Levered',
    description: 'How Bayesian testing helps growth teams make better decisions in low-volume, high-value markets.',
    path: '/insights/bayesian-bidding',
    image: `${siteUrl}/images/team-methodology-workshop.png`,
    type: 'article',
    publishedTime: '2026-02-28',
  },
  'predictive-ltv': {
    title: 'Predictive LTV Beyond Historical Cohorts | Levered',
    description: 'How predictive LTV turns early customer behavior into better acquisition, lifecycle, and reporting decisions.',
    path: '/insights/predictive-ltv',
    image: `${siteUrl}/images/team-about-global.png`,
    type: 'article',
    publishedTime: '2026-02-15',
  },
  'growth-loop-framework': {
    title: 'The Growth Loop Framework | Levered',
    description: 'Why growth loops compound learning better than disconnected campaigns.',
    path: '/insights/growth-loop-framework',
    image: `${siteUrl}/images/team-services-systems.png`,
    type: 'article',
    publishedTime: '2026-01-30',
  },
  'incrementality-testing': {
    title: 'Incrementality Testing for Marketing Impact | Levered',
    description: 'How incrementality testing separates true marketing lift from platform-reported attribution.',
    path: '/insights/incrementality-testing',
    image: `${siteUrl}/images/team-case-studies.png`,
    type: 'article',
    publishedTime: '2026-01-12',
  },
  'ai-performance-creative': {
    title: 'AI in Performance Creative | Levered',
    description: 'How to use AI to automate creative hypothesis generation without losing strategy or brand quality.',
    path: '/insights/ai-performance-creative',
    image: `${siteUrl}/images/team-experiments-lab.png`,
    type: 'article',
    publishedTime: '2025-12-20',
  },
};
