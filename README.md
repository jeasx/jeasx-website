# Jeasx website repository

This repository provides the website for [Jeasx](https://www.jeasx.dev).

## Development

```bash
npm install
npm run dev     # dev server with hot reload at http://localhost:3000
```

Pages are written as [MDX](https://mdxjs.com) files in `src/` (filename equals the route, e.g. `src/[quickstart].mdx` → `/quickstart`) and can import JSX components from `src/components/`. `jeasx.config.js` wires the esbuild build: the MDX plugin (with `jsx-async-runtime` so JSX can render server-side, and `rehype-prism-plus` for code highlighting), cache-buster URLs, and static-file caching headers.

## Static site generation

The site is rendered via server-side JSX, then flattened to a fully static site in the [Dockerfile](Dockerfile) — there is no built-in export step; the build pipeline is:

1. `npm ci` and install Caddy
2. `node --run build` — jeasx compiles all routes/components with esbuild to `dist/`
3. Start the production server on port 3000
4. Crawl it with `wget --mirror` into `www/`:
   ```bash
   wget --mirror --page-requisites --no-host-directories \
     --directory-prefix=www http://localhost:3000 http://localhost:3000/404
   ```
   This renders every page (plus linked assets) to plain HTML files, including a `/404` page.
5. Copy `public/` (favicon, sitemap etc.) on top of `www/`
6. Build a full-text search index with `npx pagefind --site www`
7. Serve `www/` with Caddy ([Caddyfile](Caddyfile)) as a plain file server, with long-lived caching for assets and `Content-Type` headers for extensionless HTML files; missing files fall back to `/404`

The result: the Node.js server only exists at build time; production is a static container with Caddy.

## Deployment

```bash
docker build -t jeasx-website .
docker run -p 3000:3000 jeasx-website
```
