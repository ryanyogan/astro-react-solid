import react from '@astrojs/react';
import solidJs from '@astrojs/solid-js';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react({
			include: ['**/react/*'],
		}),
		solidJs({
			include: ['**/solid/*'],
		}),
	],
	output: 'server',
	adapter: vercel(),
});
