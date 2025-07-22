# Vike SSR + CSR Hybrid File Structure

## Front-End

### SSR Vike + React

```bash
frontend/
├── src/
│   ├── pages/                        # Vike routing (both SSR & CSR)
│   │   ├── index/
│   │   │   ├── +Page.jsx
│   │   │   ├── +config.js
│   │   │   ├── +onBeforeRender.server.js
│   │   │   └── Home.scss
│   │   ├── about/
│   │   ├── login/
│   │   └── admin/
│   │       ├── +PageShell.jsx
│   │       └── dashboard/
│   │           ├── +Page.jsx
│   │           └── Dashboard.scss
│   │
│   ├── components/
│   ├── renderer/
│   │   ├── +config.js
│   │   ├── +onRenderClient.jsx
│   │   ├── +onRenderHtml.jsx
│   │   └── PageShell.jsx
│   │
│   ├── utils/                        # Helper functions (e.g. fetch wrapper)
│   │   └── fetchWithAuth.js
│   ├── hooks/                        # React hooks (e.g. useAuth)
│   ├── services/                     # Front-end API abstraction
│   │   └── authService.js           # Calls backend: /api/login, /api/logout
│   ├── styles/
│   │   ├── main.scss
│   │   └── _variables.scss
│
├── public/
│   ├── og-images/
│   ├── robots.txt
│   └── favicon.ico
│
├── server.js                         # Express SSR shell only (no business logic)
├── vite.config.js
├── package.json
├── .env                              # FRONTEND_API_URL (points to backend server)
├── render.yaml / deploy.sh           # Frontend deploy config (Render/Hostinger/etc)
└── README.md
```

### Security Layers

```bash
| Layer                          | Description                                                           |
| ------------------------------ | --------------------------------------------------------------------- |
| `robots.txt`                   | Prevent crawlers from discovering sensitive routes                    |
| `+config.js` → `ssr: false`    | Ensures the page is never pre-rendered or exposed in raw HTML         |
| `ProtectedRoute.jsx`           | Checks if user is authenticated (can redirect or show login)          |
| `server.js` middleware         | Use Express middleware to protect backend APIs via JWT, session, etc. |
| Environment variables          | Never hardcode secrets like DB tokens or JWT keys                     |
| Session parsing (`session.js`) | Used in SSR context to conditionally redirect unauthenticated users   |

```

## Back-End

### Node + Express + API + Server

```bash
backend/
├── src/
│   ├── controllers/                  # Logic for each route
│   │   ├── authController.js         # login, register, logout
│   │   ├── userController.js
│   │   └── productController.js
│
│   ├── routes/                       # Route definitions
│   │   ├── authRoutes.js             # /api/login, /api/register
│   │   ├── userRoutes.js             # /api/users
│   │   └── productRoutes.js
│
│   ├── middleware/                   # Middleware (auth, error handling, etc.)
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│
│   ├── models/                       # Mongoose/Prisma/SQL models
│   │   └── User.js
│
│   ├── services/                     # Business logic layer
│   │   └── authService.js
│
│   ├── config/                       # Configs (DB, environment)
│   │   ├── db.js                     # DB connection (Mongo/Postgres)
│   │   └── constants.js
│
│   ├── utils/                        # Utility functions
│   └── index.js                      # Main express app
│
├── .env                              # BACKEND_PORT, DB_URL, JWT_SECRET
├── package.json
├── README.md
├── nodemon.json                      # Dev config
└── deploy.sh / render.yaml           # Backend deploy config

```
