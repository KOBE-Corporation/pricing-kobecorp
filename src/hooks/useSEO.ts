import { useEffect } from 'react';
import { BRAND_OG_IMAGE_URL, SITE_URL } from '../constants/brand';

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

/** Normalise le chemin : pas de query, pas de slash final (sauf racine). */
function normalizePath(path: string): string {
  const bare = path.split('?')[0].split('#')[0] || '/';
  if (bare !== '/' && bare.endsWith('/')) return bare.slice(0, -1);
  return bare || '/';
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
 * Met à jour titre, meta, canonical (sans query / sans trailing slash) et OG / Twitter.
 */
export function useSEO({ title, description, path = '/', image = BRAND_OG_IMAGE_URL }: SEOOptions) {
  useEffect(() => {
    const cleanPath = normalizePath(path);
    const url = cleanPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${cleanPath}`;

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

    // Langue HTML
    try {
      const lang = localStorage.getItem('kobe-language');
      if (lang === 'fr' || lang === 'en') {
        document.documentElement.lang = lang;
      }
    } catch {
      // ignore
    }
  }, [title, description, path, image]);
}
