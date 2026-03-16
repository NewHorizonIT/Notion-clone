# Notion Clone

A fullstack Notion-style workspace app built with a modern TypeScript stack.

## Overview

This repository contains two applications:

- `notion-fe`: Next.js frontend (App Router)
- `notion-be`: Express backend API with Prisma ORM

Core capabilities include authentication, workspace, pages, and block-based content.

## Screenshots

### Home

![Home](docs/images/home.png)

### Login

![Login](docs/images/login.png)

### Register

![Register](docs/images/register.png)

### Features

![Features](docs/images/feature.png)

### Editor / Workspace

![Editor](docs/images/editor.png)

## Tech Stack

### Frontend (`notion-fe`)

- Next.js 15
- React 19
- Tailwind CSS 4
- Zustand, SWR, Axios

### Backend (`notion-be`)

- Node.js + Express + TypeScript
- Prisma ORM
- PostgreSQL
- Redis
- JWT authentication
- Swagger API docs

## Project Structure

```text
.
|-- notion-fe/
|   |-- public/                 # Static assets
|   |-- src/
|   |   |-- app/                # App Router pages/layouts
|   |   |-- features/           # Feature modules (auth/page/workspace/block)
|   |   |-- hooks/              # Reusable React hooks
|   |   `-- shared/             # Shared UI, libs, store, types, utils
|   |-- package.json
|   `-- next.config.ts
|-- notion-be/
|   |-- prisma/
|   |   |-- schema.prisma       # Prisma data model
|   |   `-- migrations/         # Database migrations
|   |-- src/
|   |   |-- controllers/        # HTTP handlers
|   |   |-- services/           # Business logic
|   |   |-- repositories/       # Data access layer (Prisma)
|   |   |-- middlewares/        # Auth, API key, validation, logging
|   |   |-- router/             # Route registration
|   |   |-- schemas/            # Zod validation schemas
|   |   |-- config/             # App, CORS, Swagger config
|   |   |-- utils/              # Shared backend utilities
|   |   `-- app.ts              # Express bootstrap
|   |-- tests/                  # Unit tests
|   |-- docker-compose.yml      # Local Postgres + Redis
|   `-- package.json
|-- docs/
|   `-- images/
`-- README.md
```

Layering summary:

- Frontend follows a feature-first structure under `src/features` and keeps cross-cutting code in `src/shared`.
- Backend follows a controller -> service -> repository flow for clear separation of concerns.
- Database evolution is tracked by Prisma migrations in `notion-be/prisma/migrations`.

## Prerequisites

- Node.js 20+
- npm 10+
- Docker + Docker Compose

## Quick Start (Local Development)

### 1. Start infrastructure services

From `notion-be`:

```bash
cd notion-be
docker compose up -d
```

This starts:

- PostgreSQL on `localhost:5431`
- Redis on `localhost:6378`

### 2. Configure backend environment

Create your backend env file from the template:

```bash
cd notion-be
cp .env.example .env
```

Then review and update these values in `.env` for local development:

```env
# Runtime
NODE_ENV=development

# App
DEV_APP_HOST=localhost
DEV_APP_PORT=4000

# PostgreSQL
DEV_DB_HOST=localhost
DEV_DB_PORT=5431
DEV_DB_NAME=notion_db
DEV_DB_USER=dev
DEV_DB_PASSWORD=devpassword
DATABASE_URL=postgresql://dev:devpassword@localhost:5431/notion_db?schema=public&api_key=your_dev_api_key

# Redis
DEV_REDIS_HOST=localhost
DEV_REDIS_PORT=6378
DEV_REDIS_DB=0

# Security
DEV_API_KEY=your_dev_api_key
DEV_JWT_SECRET=replace_with_secure_secret

# CORS
CLIENT_URL=http://localhost:4400
```

Validation checklist before running migrations:

- PostgreSQL is reachable on port `5431`.
- Redis is reachable on port `6378`.
- `NEXT_PUBLIC_API_KEY` in frontend matches backend `DEV_API_KEY`.

Note: in this project Docker maps Redis to host port `6378`, so keep `DEV_REDIS_PORT=6378` unless you change `docker-compose.yml`.

### 3. Install backend dependencies and run migrations

```bash
cd notion-be
npm install
npx prisma migrate dev
npx prisma generate
```

### 4. Run backend

```bash
cd notion-be
npm run dev
```

Backend is available at:

- API base: `http://localhost:4000/api/v1`
- Swagger UI: `http://localhost:4000/api-docs`
- Swagger JSON: `http://localhost:4000/api-docs.json`

All `/api/v1` routes require `X-Api-Key`.

### 5. Configure frontend environment

Create your frontend env file from the template:

```bash
cd notion-fe
cp .env.example .env
```

Then verify these values in `.env`:

```env
# Backend API base URL
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1

# Must match backend DEV_API_KEY
NEXT_PUBLIC_API_KEY=your_dev_api_key
```

Validation checklist before starting frontend:

- `NEXT_PUBLIC_API_URL` points to the running backend (`http://localhost:4000/api/v1`).
- `NEXT_PUBLIC_API_KEY` is exactly the same as backend `DEV_API_KEY`.
- Backend is already running before testing authenticated flows.

### 6. Run frontend

```bash
cd notion-fe
npm install
npm run dev
```

Frontend runs on `http://localhost:4400`.

## Available Scripts

### Backend (`notion-be`)

- `npm run dev`: Run development server
- `npm run build`: Compile TypeScript
- `npm run test`: Run Vitest tests
- `npm run lint`: Run ESLint
- `npm run lint:fix`: Fix lint issues
- `npm run format`: Run Prettier

### Frontend (`notion-fe`)

- `npm run dev`: Start Next.js dev server on port 4400
- `npm run build`: Build production bundle
- `npm run start`: Start production server
- `npm run lint`: Run lint checks
