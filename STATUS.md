# Omnitrix Website — STATUS

_Last updated: 2026-03-17_

## What this is
Multi-page marketing/credibility site for Omnitrix. Fully rewritten with the new Omnitrix repositioning as of 2026-03-16.

## Current status
- **Status:** ACTIVE
- **Phase:** DEPLOY
- **Repo:** `omnitrix_repo/` (local) + `d1gitalG/omnitrix-website` (GitHub)

## Done
- Full site rewrite with new Omnitrix repositioning (ops-heavy/professional tone)
- Multi-page structure: Home, Services, How We Deliver, Coverage & Compliance, About, Capability Statement, Contact
- React Router implemented, shared Layout/Navbar/Footer
- `vercel.json` SPA rewrite rule in place
- `@vitejs/plugin-react` pinned to `^4.3.4` for Vite 6 compatibility
- Pushed to `d1gitalG/omnitrix-website` on GitHub

## Next action
Connect `d1gitalG/omnitrix-website` to Vercel, set `VITE_WEB3FORMS_ACCESS_KEY` env var, deploy, and run one live form test to `info@omnitrix.tech`.

## Blockers
- Gianni to connect Vercel project to the new GitHub repo
- Web3Forms access key needs to be set as env var in Vercel dashboard

## Related files
- `QUEUE.md`
- `DEPLOY_RUNBOOK.md`
- `vercel.json`
