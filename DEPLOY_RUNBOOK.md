# Omnitrix Website — Deploy Runbook

_Last updated: 2026-03-09_

## Goal
Deploy the latest Omnitrix site, wire the hosted contact form, and verify one real submission reaches `info@omnitrix.tech`.

## Assumptions
- Hosting target: **Vercel**
- Form backend: **Web3Forms**
- Required env var: `VITE_WEB3FORMS_ACCESS_KEY`

## Steps
1. Open the Vercel project for `omnitrix_repo/`.
2. Confirm the project is pointed at the correct repo/root.
3. In Vercel environment variables, add:
   - `VITE_WEB3FORMS_ACCESS_KEY=<real key>`
4. Trigger a production deploy of the latest build.
5. Open the deployed site and verify:
   - site loads over HTTPS
   - no obvious layout breakage
   - no console errors on load
6. Submit one real contact-form test using a clear subject/body like:
   - `Test submit from deploy verification`
7. Confirm the site shows a success state after submit.
8. Confirm the message lands in `info@omnitrix.tech`.
9. Record the production URL and result in `STATUS.md`.

## Verification checklist
- [ ] Production URL works
- [ ] Env var is set
- [ ] Form submit succeeds
- [ ] Email arrives at `info@omnitrix.tech`
- [ ] No major console/runtime errors

## If blocked
- Missing Vercel access/project mapping
- Missing Web3Forms key
- Form UI exists but submit wiring is broken
- Email lands in spam / not delivered
