# Enćani website redesign

The six main sections and page copy follow the supplied October 2026 website brief. The five brand swatches were sampled from the supplied image: teal `#224849`, red earth `#8b2b19`, cream/clay `#dabc9a`, ochre `#af7231`, night earth `#2f1f11`.

Original logo and photographic assets are preserved unchanged. Source information is recorded in `public/media/asset-provenance.json`. Confirm photographer permissions and current consent before public launch.

## Editorial desk

Open `/admin` while the Site is owner-private. The first authenticated owner visit initialises the editor identity. All subsequent editing and media uploads require that identity; other visitors cannot publish. Initialise this owner before granting wider Site access. D1 stores writing, curriculum records, drafts and enquiries. R2 stores uploaded images, audio, films and PDFs. Drafts are excluded from public lists, article routes, the feed and sitemap.

Seed materials are adapted from the supplied brief, without invented authors, dates, outcomes or private participant stories. Review them with the client before public launch. Add actual oral histories, films and curriculum attachments through the editorial desk. Enquiries are stored in the desk's inbox; no outbound email notifications have been connected.

Shop collections are intentionally in preparation, consistent with the brief. No prices, stock, checkout or payment success are fabricated. Support enquiries are functional; live contribution processing requires the client's confirmed payment arrangements.

## Development

Preserve the generated package manager and lockfile. Generate migrations with the existing `db:generate` script, then build through the Sites workflow. Apply generated migrations to the local preview exactly once before validating saved records. The bundled scripts build a Cloudflare-compatible Worker; `.openai/hosting.json` declares the D1 and R2 bindings.

Before moving to encani.org: review content and imagery with the client, supply practitioner introductions and programme photography, configure approved shop/payment arrangements, migrate existing published article permalinks, confirm editor access and notification preferences, and connect the domain.
