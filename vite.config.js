import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { sveld } from 'sveld';

export default defineConfig({
	plugins: [
		sveltekit(),
		sveld({ typesOptions: { outDir: 'dist' } })
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
