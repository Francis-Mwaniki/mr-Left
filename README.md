# Francis Mwaniki — Portfolio

Single-page portfolio built with React 19, Vite and Tailwind CSS v4. Fully static, no backend.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run lint
```

## Edit content

All copy, projects, links and experience live in [`src/data.ts`](src/data.ts).
Project screenshots live in `public/work/` as `<name>.webp` (1440w) and `<name>-sm.webp` (720w).

## Deploy

Vercel: framework preset **Vite** (set in `vercel.json`), output directory `dist`.
