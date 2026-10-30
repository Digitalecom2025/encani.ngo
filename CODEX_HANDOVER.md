# Enćani — current implementation and next work

Snapshot: 5 October 2026. Source commit: `ffacb1c25ee8857e72f5cea1042a65957e1e43e1`.
Current private review Site: https://encani-praxis.tev98.chatgpt.site
Original website: https://encani.org/

This is a first design version. It follows the brief's identity and main subjects, but not every content or presentation requirement. Do not describe it as a completed implementation of the brief.

## What is included

- Six main sections, with separate healing, cooperative and team-building pages.
- Six project detail routes: Social Justice Centres, Five Healing Gatherings, Indigenous Communities Research, Reading Circles, Hii Ni Africa and Sankofa Circles.
- First-party photographs and the existing website's logo, retained as supplied/recovered assets. The logo is the existing site asset, not a separately provided high-resolution brand master.
- Brand swatches sampled from the reference JPEG, plus derived paper/border shades.
- From Praxis archive with Writing, Oral history, Film and Curriculum formats; Healing, Knowledge and Commons themes; search, filters, reading time, related materials, printable articles, copy-link action and RSS.
- Editor source for draft/published posts, media uploads and enquiry inbox; D1 schema and R2 media handling.
- Six starter records adapted from the client's brief, without fabricated publication dates or individual authors. Four are Writing and two are Curriculum. Curriculum records explain the approach; they are not a complete teaching curriculum.

## Required content/design corrections

1. **Healing chapter order.** The brief specifies: entry → understanding of healing → Communities of Healing Praxis/methodology → The Work → Healers, Knowledge Holders & Activists → African Healing Curriculum. The current healing page places curriculum before The Work and omits the knowledge-holder chapter. Restore that order and the link to About's practitioner section.
2. **Homepage journey.** The current homepage introduces the organisation, three pillars, study, writings and team building. Many requested chapters were condensed or moved to inner pages. Add the requested project, practitioner and living-curriculum introductions, respecting the brief's deliberate whitespace and photographic rhythm.
3. **Methodology.** `lib/content.ts` has six blocks. Add the explicit seventh, Multi-modal Research: oral history, archival/textual research, ecological mapping, political inquiry, embodied learning and participatory action research. Preserve the other methodology content and relationships.
4. **The Work.** The six detail pages currently have short descriptions and general archive links. They need project-specific photography and associations with films, reflections, reports or materials. Use only material that can actually be attributed to each project. Identify missing client assets rather than presenting unrelated photos as that project's documentation.
5. **Knowledge holders.** About lists practitioner categories, but the list condenses the brief and omits family/intergenerational healing as a distinct category. Restore the complete categories and the explanation that community organisers are also healers. Named introductions await the client's list; the brief explicitly says this will follow.
6. **Programme storytelling.** Hii Ni Africa and Tanzania Bora Initiative/Vijana Leadership Academy are named on the team-building page. The page lacks their specific action photographs and condenses the programme text and practitioner range. Preserve the original substance, including the five-day Tanzania engagement, and add approved authentic images when supplied.
7. **Cooperative Praxis.** The historical argument, living economies, women/chamas/Olmaroroi and building the commons are represented. The page is largely text; add appropriate cooperative/community imagery and a stronger visual journey.
8. **From Praxis.** Oral-history and film categories are empty pending actual media. Real curriculum attachments and existing website writings have not been migrated. Graphic novels, books, plays, podcasts and courses are future formats in the brief, not yet represented by the data model. Account for these as future work without inventing finished content.

## Pending client material and operational decisions

- Approved Secretariat, Trustees, Advisory Council and practitioner names, introductions and photographs.
- Correctly labelled project and programme photographs, especially Hii Ni Africa, TBI, cooperative work and research journeys.
- Actual films, oral histories, readings, reports and teaching/curriculum resources.
- Existing archive content and legacy permalinks for migration.
- Shop products, maker/collective attribution, prices, availability and ordering arrangements. The brief states the shop is not developed yet; the present three-collection concept is intentionally provisional.
- Donation/payment arrangements. Support has Donate/Fund/Collaborate sections, but Donate currently opens a contribution enquiry rather than processing a payment.
- Editor account arrangements for the NGO, notification preferences and eventual hosting/domain choice. Enquiries are stored; outbound email notifications are not configured.

## Architecture and useful files

| Area | Files |
| --- | --- |
| Homepage and page order | `app/page.tsx`, `app/our-praxis/[slug]/page.tsx` |
| About, Shop, Support | Corresponding folders under `app/` |
| Brand and layout | `app/globals.css`, `components/site-nav.tsx`, `components/site-footer.tsx`, `components/shared.tsx` |
| Project/method data and starter records | `lib/content.ts` |
| Archive/article UI | `components/posts-browser.tsx`, `app/from-praxis/` |
| Editor and inquiries | `components/editor.tsx`, `components/inquiry-form.tsx`, `app/admin/`, `app/api/` |
| Persistence | `lib/db.ts`, `db/schema.ts`, `drizzle/` |
| Identity | `app/chatgpt-auth.ts`, `lib/editor-auth.ts`, local mock in `build/sites-vite-plugin.ts` |
| Images and provenance | `public/media/` |
| References | `reference/encani-website-brief.pdf`, `.txt`, `brand-colour-reference.jpg` |

The public API uses the `DB` D1 and `BUCKET` R2 bindings from `cloudflare:workers`. The local Vite runtime emulates both and persists under `.wrangler/state`. The extra `wrangler.local.json` matches the local D1 identifier and points to `drizzle/` for tracked local migration application. `pnpm run db:local` is local-only.

The production editor trusts identity headers provided by Sites and pins the first owner identity in the database. That trust model is valid only behind the appropriate authenticated platform. On another host, implement secure application authentication and authorization; do not simply accept client-supplied identity headers. Local development uses the bundled loopback-only mock sign-in.

This export adds only `db:local` and `typecheck` package scripts, a local migration config, reference copies and handover files. Application pages, original assets, dependency versions and the lockfile are preserved.

## Validation status

The original implementation passed TypeScript and production build checks and was deployed successfully. Browser layout and full end-to-end editor/media/enquiry flows were not verified because the preview environment did not provide a working browser session. Source transfer checks are recorded in `EXPORT_VALIDATION.json`. Verify local startup and real interactions in VS Code before presenting a final client delivery.

## Production continuation

Editing in VS Code changes this local project. It does not automatically update the private Site. Choose a publishing workflow when Tev asks to deploy. A source ZIP is not a database or R2 backup: later hosted content and uploaded media need a separate export/migration if present. For another host, port database/storage/authentication as needed and update absolute origins in `app/layout.tsx`, `app/feed.xml/route.ts`, `app/robots.ts` and `app/sitemap.ts`.

Official references checked for this handover:
- Codex IDE: https://developers.openai.com/codex/ide/
- D1 migration commands: https://developers.cloudflare.com/d1/wrangler-commands/#d1-migrations-apply
