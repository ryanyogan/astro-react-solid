import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [react({
    include: ['**/react/*']
  }), solidJs({
    include: ['**/solid/*']
  })],
  output: 'hybrid',
  adapter: netlify()
});