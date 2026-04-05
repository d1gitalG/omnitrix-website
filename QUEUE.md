# Omnitrix Website — QUEUE

_Last updated: 2026-03-17_

- `OW-001` — `DONE` — Full site rewrite with new Omnitrix repositioning
  - **Done:** Multi-page structure implemented (Home, Services, How We Deliver, Coverage, About, Capability Statement, Contact). React Router added. SPA routing + vercel.json configured. Pushed to GitHub `d1gitalG/omnitrix-website`.

- `OW-002` — `DONE` — Fix Vite peer dep conflict for Vercel deploy
  - **Done:** Pinned `@vitejs/plugin-react` to `^4.3.4` to resolve vite 6 compatibility error.

- `OW-003` — `WAITING_ON_GIANNI` — Connect repo to Vercel and deploy
  - **DoD:** `d1gitalG/omnitrix-website` linked to Vercel, `VITE_WEB3FORMS_ACCESS_KEY` set, deploy succeeds, live form test arrives at `info@omnitrix.tech`.

- `OW-004` — `DONE` — Footer polish and logo sizing final pass
  - **DoD:** Footer looks balanced across desktop/mobile. Logo is consistent and proportional across all pages (Hero, About, Footer).
  - **Done:** Increased logo size in Navbar (h-10, text-lg font-bold), Footer (h-14, text-xl font-bold), and About page (w-32/w-40). Normalized font-bold and tracking-tight on brand name.
