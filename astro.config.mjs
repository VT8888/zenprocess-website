// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const INTERNAL_HOSTS = ['zenprocess.ai', 'www.zenprocess.ai'];

/**
 * Open outbound links in a new tab so a cited source never navigates the
 * reader off zenprocess.ai. Links back to our own pages stay in place.
 */
function externalLinksInNewTab() {
  return (tree) => {
    const walk = (node) => {
      if (node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href === 'string' && /^https?:\/\//i.test(href)) {
          let host = '';
          try {
            host = new URL(href).hostname.toLowerCase();
          } catch {
            host = '';
          }
          if (host && !INTERNAL_HOSTS.includes(host)) {
            node.properties.target = '_blank';
            node.properties.rel = 'noopener noreferrer';
          }
        }
      }
      for (const child of node.children ?? []) walk(child);
    };
    walk(tree);
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://zenprocess.ai',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [externalLinksInNewTab]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
