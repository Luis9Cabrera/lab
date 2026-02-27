// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: "https://luis9cabrera.github.io",
    base: "/lab",
    output: "static",
    vite: {
        plugins: [tailwindcss()]
    }
});
