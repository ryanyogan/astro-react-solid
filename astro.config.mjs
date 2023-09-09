import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), solidJs()],
	output: 'server',
	adapter: netlify({
		edgeMiddleware: true,
	}),
});
