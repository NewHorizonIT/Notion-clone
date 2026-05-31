# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Monorepo with two TypeScript applications:
- `notion-fe/` — Next.js 15 (App Router) frontend
- `notion-be/` — Express 5 + Prisma backend API

## Commands

### Backend (`notion-be/`)

```bash
# Start infrastructure (PostgreSQL on :5431, Redis on :6378)
docker compose up -d

# Install and migrate
npm install
npx prisma migrate dev
npx prisma generate

npm run dev          # ts-node-dev dev server on :4000
npm run build        # tsc compile
npm run test         # Vitest
npm run lint         # ESLint
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier

# Run a single test file
npx vitest run tests/unit/authService.test.ts
```

### Frontend (`notion-fe/`)

```bash
npm install
npm run dev    # Next.js dev server on :4400 (with Turbopack)
npm run build
npm run lint
```

## Architecture

### Backend

Three-layer pattern: **Controller → Service → Repository**

- `src/controllers/` — HTTP request/response handling
- `src/services/` — Business logic; classes decorated with `@injectable()` (tsyringe DI)
- `src/repositories/` — Prisma data access
- `src/middlewares/` — `checkApiKey`, `authenticate`, `validateBody` (Zod), `rateLimiter`, `requestLogger`
- `src/router/` — Route registration; all `/api/v1` routes require `X-Api-Key` header
- `src/schemas/` — Zod schemas for request validation
- `src/response/response.ts` — `SuccessResponse<T>` and `ErrorResponse` classes; always use these for responses
- `src/container/index.ts` — tsyringe DI registration (PrismaClient, Redis)
- `src/generated/prisma/` — Prisma client output (do not edit manually)

DI is via tsyringe. Services and repositories are `@injectable()` and resolved via `container`. Run `npx prisma generate` after schema changes to regenerate the client.

**Auth flow:** JWT access token in `Authorization: Bearer` header + refresh token in httpOnly cookie. API key in `X-Api-Key` header is always required. Device fingerprint in `X-Device-ID` header.

**Tests** live in `tests/unit/` and use Vitest with `vi.mock()` for dependency isolation. Tests import `reflect-metadata` first due to tsyringe.

### Frontend

Feature-first structure:

- `src/features/{auth,workspace,page,block}/` — Each feature exports `api.ts` (Axios calls), `hooks/` (SWR hooks), `components/`, `types.ts`, `validator/` (Zod schemas), `store/` (Zustand if needed), and an `index.ts` barrel
- `src/shared/` — Cross-cutting code:
  - `lib/axios.ts` — Axios instance; auto-attaches `X-Api-Key`, `X-Device-ID`, and `Authorization` headers; handles 401 → refresh token retry
  - `store/` — Zustand stores: `useAuthStore` (persisted), `useModalStore`, `usePageStore`, `useBlockStore`, `useWorkspaceStore`
  - `components/` — Reusable UI components (Radix UI + shadcn pattern)
  - `utils/`, `types/`, `lib/`
- `src/app/` — Next.js App Router
  - `(auth)/` — Login, register, reset-password pages
  - `(root)/` — Authenticated layout; `pages/[slug]/[id]/` for the editor

**State:** `useAuthStore` uses `zustand/middleware/persist` (localStorage key `auth-storage`). It guards against stale persisted state where `isLogin=true` but `token` is missing.

**Rich text editor:** BlockNote (`@blocknote/*`) for block-based content editing.

## Environment Setup

### Backend `.env` (copy from `.env.example`)

```
NODE_ENV=development
DEV_APP_PORT=4000
DATABASE_URL=postgresql://dev:devpassword@localhost:5431/notion_db?schema=public
DEV_REDIS_HOST=localhost
DEV_REDIS_PORT=6378
DEV_API_KEY=your_dev_api_key
DEV_JWT_SECRET=replace_with_secure_secret
CLIENT_URL=http://localhost:4400
```

### Frontend `.env` (copy from `.env.example`)

```
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_API_KEY=your_dev_api_key   # must match backend DEV_API_KEY
```

## Data Model

Core Prisma models: `User`, `WorkSpace`, `Page`, `Block`, `Comment`, `Media`, `WorkspaceMember`.

- `Block` is self-referential (`parentId`) with `orderIndex` for ordering and `content: Json?` for block data.
- `WorkspaceMember.roleId` is the `WorkspaceRole` enum (`OWNER | MEMBER | VIEWER`).
- Prisma client is generated to `src/generated/prisma/` (non-standard output path).

API docs (Swagger UI) available at `http://localhost:4000/api-docs` when the backend is running.
