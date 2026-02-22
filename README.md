# FryAIModels

Production-style MVP built with **Next.js 14 + TypeScript + Tailwind CSS**.

## Quick start

```bash
npm i
npm run dev
```

`npm run dev` automatically:
- ensures the SQLite data directory exists,
- applies Prisma migrations,
- starts Next.js in development mode.

## Database

- Default SQLite DB location: `./data/app.db`.
- You can override it with `DATABASE_URL` (for example `file:./data/app.db` or `file:/absolute/path/to/app.db`).
- If `DATABASE_URL` is not set, app/runtime logic falls back to `file:./data/app.db`.

## Environment

Copy `.env.example` to `.env` only if you need to customize values:

```bash
DATABASE_URL="file:./data/app.db"
TELEGRAM_NOTIFY_ENABLED=false
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
APP_URL=http://localhost:3000
```
