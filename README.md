# FryAIModels

Production-style MVP built with **Next.js 14 + TypeScript + Tailwind CSS**.

## Run locally

```bash
npm install
mkdir -p data
cp .env.example .env.local
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

Build check:

```bash
npm run build
npm run lint
```

## Environment

Copy `.env.example` to `.env.local` and configure values:

```bash
DATABASE_URL="file:./data/app.db"
TELEGRAM_NOTIFY_ENABLED=false
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
APP_URL=http://localhost:3000
```

- SQLite database file is stored at `./data/app.db` via Prisma.
- Create the `data` directory manually (`mkdir -p data`) or it will be created automatically by server-side auth routes.
- Run Prisma migration after env setup: `npx prisma migrate dev --name init`.
- Telegram notifications are **disabled by default**.
- To enable Telegram notifications for registrations, set `TELEGRAM_NOTIFY_ENABLED=true` and provide bot token + chat id.
- Registration notification message includes only user email and id.

## Auth MVP (email + password)

- `/register` creates a user in SQLite with a bcrypt hash.
- `/login` validates credentials against the stored hash.
- API routes:
  - `POST /api/auth/register`
  - `POST /api/auth/login`

## Project structure

- `app/`
  - `(marketing)/` Home, Features, Pricing, Showcase, Legal, Login, Register
  - `(app)/app/` Dashboard, Models, Model Details, Generate, Schedule, Analytics, Billing, Settings
  - `api/auth/` register/login route handlers
  - `layout.tsx` Root layout + global styles
  - `sitemap.ts`, `robots.ts`
- `components/`
  - `ui/` shared design system components (Button, Card, Badge, Tabs, Input, Select, States)
  - `layout/` marketing header/footer and product app shell
  - `app/` model details interactive tabs
- `lib/`
  - `auth.ts` email normalization and password hashing/verification helpers
  - `ensureDataDir.ts` SQLite data directory bootstrap helper
  - `prisma.ts` Prisma client singleton
  - `telegram.ts` optional Telegram Bot API notification helper
  - `types.ts` domain models
  - `utils.ts` formatters/helpers
  - `mock/` mock plans, models, jobs, schedule, analytics, auth
- `prisma/`
  - `schema.prisma` Prisma SQLite schema
- `public/` static assets placeholder
