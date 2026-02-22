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

## Environment

Copy `.env.example` to `.env.local` and configure values:

```bash
DATABASE_PATH=./data/app.db
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_NOTIFY_ENABLED=false
APP_URL=http://localhost:3000
```

- SQLite database file is created automatically at `DATABASE_PATH` (default `./data/app.db`).
- Telegram notifications are **disabled by default**.
- To enable Telegram notifications for test registrations, set `TELEGRAM_NOTIFY_ENABLED=true` and provide bot token + chat id.
- To disable again, set `TELEGRAM_NOTIFY_ENABLED=false` (or unset it).

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
  - `db.ts` SQLite connection + schema initialization
  - `telegram.ts` optional Telegram Bot API notification helper
  - `types.ts` domain models
  - `utils.ts` formatters/helpers
  - `mock/` mock plans, models, jobs, schedule, analytics, auth
- `public/` static assets placeholder
