import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // ─── Hosting Configuration ───────────────────────────────────────────
  // For GitHub Pages (runxi-shen.github.io/carpenter-shen-lab):
  site: 'https://runxi-shen.github.io',
  base: '/carpenter-shen-lab',
  //
  // For a custom Purdue domain, replace the above two lines with:
  //   site: 'https://carpenter-shen-lab.purdue.edu',
  //   base: '/',
  //
  // You can also add a CNAME file in public/ for custom domain setup.
  // ─────────────────────────────────────────────────────────────────────

  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
  ],
});
