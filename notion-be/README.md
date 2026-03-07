# Notion-Be API

A backend service mimicking basic Notion functionality: workspaces, pages, blocks, user authentication, etc.
Built with **TypeScript**, **Express**, **Prisma** (PostgreSQL), and **Redis** for caching.

---

## 🔧 Features

- 🧑‍💻 User registration/login with JWT
- 🏢 Workspaces & memberships
- 📄 CRUD pages and nested content blocks
- 🔐 Middleware for authentication, API‑key checks, rate limiting
- 📦 Caching via Redis
- ✅ Input validation with Zod schemas
- 📚 Swagger‑generated API docs
- 🧪 Unit tests using Vitest

---

## 🛠️ Tech Stack

- Node.js & TypeScript
- Express.js
- Prisma ORM & PostgreSQL
- Redis
- Zod for schema validation
- Vitest for testing
- Docker/Compose for local development
- ESLint, Prettier

---

## 🚀 Getting started

1. **Clone**

   ```bash
   git clone <repo-url>
   cd notion-be
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment**

   Copy `.env.example` to `.env` and set variables (Postgres, Redis, JWT secret, etc.).

4. **Database**

   ```bash
   npx prisma migrate dev
   ```

5. **Run**

   ```bash
   npm run dev
   ```

   API will be available at `http://localhost:3000`; Swagger docs at `/api-docs`.

6. **Tests**

   ```bash
   npm test
   ```

---

## 📁 Project Structure

Key directories:

- `src/controllers` – route handlers
- `src/services` – business logic
- `src/repositories` – Prisma database access
- `src/middlewares` – auth, error handling, etc.
- `src/schemas` – Zod validation
- `src/router` – Express routes
- `tests/` – unit tests
