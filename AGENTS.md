# Enćani project instructions

## Scope and source of truth

This folder continues Tev's existing Enćani redesign. Work locally by default; publish when Tev explicitly requests deployment. Read `CODEX_HANDOVER.md` and `reference/encani-website-brief.txt` before substantive changes. The original PDF and image under `reference/` are authoritative when extraction or interpretation is unclear.

## Preserve the brand and intent

- Retain the existing Enćani logo; obtain the client's master logo if they supply one later.
- Keep the core palette: teal `#224849`, red earth `#8b2b19`, cream/clay `#dabc9a`, ochre `#af7231`, night earth `#2f1f11`. The current paper tint is `#efe3d2`.
- Keep all six main sections: Home, Our Praxis, From Praxis, About, Shop, Support.
- Keep the brief's Pan-African political and intellectual substance. Healing, sovereignty, land, knowledge production, collective life and the commons are essential.
- Use the authentic supplied/archive photographs; match each image and caption to its actual subject. Preserve image provenance.
- Never invent practitioners, outcomes, statistics, publication dates, product prices or participant experiences. Sankofa presents methods and learning while respecting private experiences.

## Development

- Preserve pnpm and `pnpm-lock.yaml`. Node must satisfy `package.json` engines.
- This is Vinext/Vite with Next-style App Router source and Cloudflare D1/R2 bindings. Do not assume `next dev` can replace this runtime.
- Local setup: `pnpm install --frozen-lockfile`, `pnpm run db:local`, `pnpm run dev`.
- Reuse installed components and existing code rather than recreating the app.
- Keep blog search/filtering, article pages, drafts/publishing, media uploads, RSS and the enquiry inbox intact.
- Keep migrations additive; preserve existing posts, enquiries and media. Do not delete `.wrangler/state` to resolve a setup problem.
- The portable local sign-in is development-only. Production outside Sites needs an authenticated editor and trusted identity handling before deployment.
- Preserve `.openai/hosting.json` during local work. Changing it does not port production data.

## Verification and reporting

Run `pnpm run typecheck` and `pnpm run build` after substantive changes. Use browser verification for layout and actual application interactions when available. Check desktop/mobile navigation, archive search/filtering, article links, draft/publish visibility, uploads and enquiry persistence. Avoid implementation-mirroring tests. State unverified flows clearly; a successful build alone does not verify runtime behaviour.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
