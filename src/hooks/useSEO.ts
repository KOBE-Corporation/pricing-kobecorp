import { useEffect } from 'react';

const SITE_URL = 'https://pricing.kobecorporation.com';
const OG_IMAGE = `${SITE_URL}/logo-nom.jpeg`;

function setMeta(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export interface SEOOptions {
  title: string;
  description: string;
  /** Chemin sans domaine (ex: /contact, /saas). Par défaut / */
  path?: string;
  /** Image OG (optionnel) */
  image?: string;
}

/**
 * Met à jour le titre, la meta description, le canonical et les meta Open Graph / Twitter pour le référencement.
 */
export function useSEO({ title, description, path = '/', image = OG_IMAGE }: SEOOptions) {
  useEffect(() => {
    const url = path === '/' ? SITE_URL : `${SITE_URL}${path}`;

    document.title = title;
    setMeta('description', description);
    setCanonical(url);

    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', url, 'property');
    setMeta('og:image', image, 'property');

    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
  }, [title, description, path, image]);
}
