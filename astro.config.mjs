import { defineConfig } from 'astro/config';
import copy from 'rollup-plugin-copy';
import { fileURLToPath } from 'url';
import path from 'path';
import { rewriteDynamicImportsRollup } from './config/dynamicImportPlugin.js';

// Get the path to the icons package
const getAssetsFolder = (manifestEntryPoint) =>
  path.dirname(fileURLToPath(import.meta.resolve(manifestEntryPoint)));

const iconsDistFolder = getAssetsFolder(
  '@momentum-design/icons/dist/manifest.json'
);

/** Tina preview iframe loads /asjr-web without a trailing slash; rewrite for dev. */
function basePathRewrite() {
  return {
    name: 'base-path-rewrite',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [pathname, search = ''] = (req.url ?? '').split('?');
        if (pathname === '/asjr-web') {
          req.url = `/asjr-web/${search ? `?${search}` : ''}`;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  site: 'https://www.asjr.info',
  output: 'static',
  redirects: {
    '/asjr-web': '/asjr-web/',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [basePathRewrite()],
    build: {
      rollupOptions: {
        plugins: [
          rewriteDynamicImportsRollup({ packageName: 'icons' }),
          copy({
            targets: [
              {
                src: path.join(iconsDistFolder, '/svg/*.svg'),
                dest: 'dist/icons',
              },
              {
                src: path.join(iconsDistFolder, '/svg/*.svg'),
                dest: 'public/icons',
              },
            ],
          }),
        ],
      },
    },
  },
});
