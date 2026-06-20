# Medusa Roles Task

A responsive **Settings → User Roles** demo page built as a small monorepo:

- **`frontend/`** -  Vite + React (JavaScript) + Tailwind CSS v4 + shadcn/ui
- **`backend/`** - NestJS (JavaScript) REST API serving the roles data

The frontend fetches user roles and active roles from the backend over REST and renders them responsively across mobile, tablet and desktop.

## Prerequisites

- Node.js >= 18

## Getting started

```bash
# install all workspace dependencies
npm run install:all

# install root orchestration dep (concurrently)
npm install

# run frontend (Vite) + backend (Nest) together
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001/api

## Scripts (root)

| Script | Description |
| --- | --- |
| `npm run dev` | Run frontend and backend concurrently |
| `npm run build` | Build the frontend and transpile the backend |
| `npm run test` | Run frontend (Vitest) and backend (Jest) tests |
| `npm run lint` | Lint the frontend |

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/user-roles` | List of user roles (table data) |
| GET | `/api/active-roles` | Active roles (role cards) |

## Environment

- Frontend `VITE_API_URL` -  base URL of the API. Defaults to `/api` (proxied to the backend in dev).

## Deployment
- Deployed here - https://medusa-task-msrl.vercel.app/