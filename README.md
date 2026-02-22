# FryAIModels

Production-style MVP built with **Next.js 14 + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
npm run lint
```

## Project structure

- `app/`
  - `(marketing)/` Home, Features, Pricing, Showcase, Legal
  - `(app)/app/` Dashboard, Models, Model Details, Generate, Schedule, Analytics, Billing, Settings
  - `layout.tsx` Root layout + global styles
  - `sitemap.ts`, `robots.ts`
- `components/`
  - `ui/` shared design system components (Button, Card, Badge, Tabs, Input, Select, States)
  - `layout/` marketing header/footer and product app shell
  - `app/` model details interactive tabs
- `lib/`
  - `types.ts` domain models
  - `utils.ts` formatters/helpers
  - `mock/` mock plans, models, jobs, schedule, analytics, auth
- `public/` static assets placeholder

## Editing mock data

- Plans: `lib/mock/plans.ts`
- Models: `lib/mock/models.ts`
- Generation jobs: `lib/mock/jobs.ts`
- Scheduled posts: `lib/mock/scheduled-posts.ts`
- Analytics: `lib/mock/analytics.ts`
- Auth guard flag: `lib/mock/auth.ts` (`isAuthed`)

## Empty state check

To validate the empty state for `/app/models`, temporarily set:

```ts
export const models: Model[] = [];
```

in `lib/mock/models.ts`, then open `/app/models` and verify the "No models yet" state card appears.
