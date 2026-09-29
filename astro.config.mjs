// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio real de Oriente Gaitero (afecta canónicas, OG y sitemap)
const site = 'https://example.com';

export default defineConfig({
  site,
  vite: {
    plugins: [/** @type {import('vite').PluginOption} */ (tailwindcss())],
  },
  integrations: [sitemap()],
});
