# Omnitrix Website — STATUS

_Last updated: 2026-03-08_

## What this is
Marketing / credibility site for Omnitrix.

## Current status
- **Status:** ACTIVE
- **Phase:** SHIPPING
- **Repo:** `omnitrix_repo/`

## Done
- Vite/React/Tailwind site exists and is ready for deployment work
- Hosted-form approach is chosen over a custom backend
- `VITE_WEB3FORMS_ACCESS_KEY` is already documented in `.env.example` / README
- Deploy + contact form + lead-gen are explicitly tied together as the current shipping push

## Next action
Deploy the latest build to Vercel, set `VITE_WEB3FORMS_ACCESS_KEY`, and submit one live form test to `info@omnitrix.tech`.

## Next 3 tasks
1. Create/verify the Vercel project and production URL
2. Add the Web3Forms access key and wire the form submit path
3. Submit one real test message and confirm it lands in `info@omnitrix.tech`

## Blockers
- Hosting/domain credentials may still be needed
- Web3Forms key may need to be created or confirmed

## Definition of done
- Latest site is deployed to a stable production URL/domain
- Contact form succeeds without console errors
- A real submission arrives at `info@omnitrix.tech`
- Basic spam protection / bot resistance is enabled

## Related files
- `QUEUE.md`
- `DEPLOY_RUNBOOK.md`
- `project-state.json`
- `NEXT.md`
- `DECISIONS.md`
- `README.md`
