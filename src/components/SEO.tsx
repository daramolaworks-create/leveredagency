import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  caseStudySeo,
  defaultImage,
  experimentSeo,
  insightSeo,
  SeoConfig,
  seoPages,
  siteName,
  siteUrl,
} from '../lib/seo';

const defaultSeo = seoPages['/'];

function upsertMeta(selector: string, create: () => HTMLMetaElement, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(selector);
  if (!tag) {
    tag = create();
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function upsertJsonLd(id: string, data: object) {
  let tag = document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`);
  if (!tag) {
    tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.dataset.seo = id;
    document.head.appendChild(tag);
  }
  tag.textContent = JSON.stringify(data);
}

function removeJsonLd(id: string) {
  document.head.querySelector<HTMLScriptElement>(`script[data-seo="${id}"]`)?.remove();
}

function resolveSeo(pathname: string): SeoConfig {
  if (seoPages[pathname]) return seoPages[pathname];

  const [, section, slug] = pathname.split('/');
  if (section === 'case-studies' && slug && caseStudySeo[slug]) return caseStudySeo[slug];
  if (section === 'experiments' && slug && experimentSeo[slug]) return experimentSeo[slug];
  if (section === 'insights' && slug && insightSeo[slug]) return insightSeo[slug];

  return {
    ...defaultSeo,
    title: 'Page Not Found | Levered',
    description: 'This Levered page could not be found.',
    path: pathname,
    noindex: true,
  };
}

export function SEOManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveSeo(pathname);
    const canonical = `${siteUrl}${seo.path}`;
    const image = seo.image ?? defaultImage;
    const robots = seo.noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large';

    document.title = seo.title;
    document.documentElement.lang = 'en';

    upsertMeta('meta[name="description"]', () => {
      const tag = document.createElement('meta');
      tag.name = 'description';
      return tag;
    }, seo.description);

    upsertMeta('meta[name="robots"]', () => {
      const tag = document.createElement('meta');
      tag.name = 'robots';
      return tag;
    }, robots);

    upsertMeta('meta[property="og:title"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:title');
      return tag;
    }, seo.title);

    upsertMeta('meta[property="og:description"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:description');
      return tag;
    }, seo.description);

    upsertMeta('meta[property="og:url"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:url');
      return tag;
    }, canonical);

    upsertMeta('meta[property="og:image"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:image');
      return tag;
    }, image);

    upsertMeta('meta[property="og:type"]', () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', 'og:type');
      return tag;
    }, seo.type ?? 'website');

    upsertMeta('meta[name="twitter:title"]', () => {
      const tag = document.createElement('meta');
      tag.name = 'twitter:title';
      return tag;
    }, seo.title);

    upsertMeta('meta[name="twitter:description"]', () => {
      const tag = document.createElement('meta');
      tag.name = 'twitter:description';
      return tag;
    }, seo.description);

    upsertMeta('meta[name="twitter:image"]', () => {
      const tag = document.createElement('meta');
      tag.name = 'twitter:image';
      return tag;
    }, image);

    upsertMeta('meta[name="twitter:card"]', () => {
      const tag = document.createElement('meta');
      tag.name = 'twitter:card';
      return tag;
    }, 'summary_large_image');

    if (seo.type === 'article' && seo.publishedTime) {
      upsertMeta('meta[property="article:published_time"]', () => {
        const tag = document.createElement('meta');
        tag.setAttribute('property', 'article:published_time');
        return tag;
      }, seo.publishedTime);
    } else {
      document.head.querySelector('meta[property="article:published_time"]')?.remove();
    }

    upsertLink('canonical', canonical);

    upsertJsonLd('organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      sameAs: [
        'https://www.linkedin.com/company/leveredagency/',
        'https://www.instagram.com/levered.us/',
      ],
      description: defaultSeo.description,
    });

    upsertJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: siteName,
      url: siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/insights?search={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });

    if (seo.type === 'article') {
      upsertJsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: seo.title.replace(' | Levered', ''),
        description: seo.description,
        image,
        datePublished: seo.publishedTime,
        dateModified: seo.modifiedTime ?? seo.publishedTime,
        author: {
          '@type': 'Organization',
          name: siteName,
          url: siteUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/logo.png`,
          },
        },
        mainEntityOfPage: canonical,
      });
    } else {
      removeJsonLd('article');
    }
  }, [pathname]);

  return null;
}
