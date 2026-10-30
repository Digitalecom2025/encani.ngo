# Continue Enćani in VS Code with Codex

This is the source-code continuation of the current Enćani redesign. It includes the original client brief, colour reference, photographs, page components, blog editor and API code. Read `CODEX_HANDOVER.md` for the unfinished requirements.

## Open the project

1. Extract the ZIP into your Documents folder. The project folder is `encani-website`.
2. In VS Code choose **File → Open Folder** and select that folder, where `package.json` is located.
3. Install or open **Codex by OpenAI**, then sign in. Official setup: https://developers.openai.com/codex/ide/
4. Open the integrated terminal in the project folder.

## Run locally

The existing stack uses Node.js **22.13.0 or later**, **pnpm 11.25.0**, and a Cloudflare-compatible Vinext runtime with local database and file storage emulation. This is not a plain `next dev` project.

If pnpm is not installed, run once:

```powershell
npm install -g pnpm@11.25.0
```

Then run these commands, one at a time:

```powershell
pnpm install --frozen-lockfile
pnpm run db:local
pnpm run dev
```

Accept the local database migration prompt if shown. `db:local` applies only migrations that have not already been applied. It uses local storage and does not create or update a hosted database.

Open **http://localhost:5173/**. Keep this terminal running while editing.

For the editor, open **http://localhost:5173/admin** and use the local sign-in link. The portable development server emulates a local editor identity; this is development authentication. The production build does not include that mock sign-in.

Local posts, enquiries and uploaded media live under `.wrangler/state`. The first content read seeds six starter records adapted from the brief. These are draft content for client review, not a migrated archive of the old website. Hosted database records and later hosted uploads are not included in this source package.

## Give Codex this first task

```text
Continue the existing Enćani website in this folder. Read AGENTS.md, CODEX_HANDOVER.md and reference/encani-website-brief.txt, and inspect reference/brand-colour-reference.jpg. Preserve the existing logo, palette, page routes, blog editor and API functionality.

First install the pinned dependencies, apply the local database migrations and run the project. Verify the main pages and editor locally. Then correct the brief gaps recorded in CODEX_HANDOVER.md: restore the healing chapter order, strengthen the homepage introductions, add Multi-modal Research, preserve the full practitioner categories and improve the project and programme storytelling using available authentic material.

Implement the changes locally, check desktop and mobile layouts, and verify the blog draft/publish, media upload and enquiry flows. Identify any material still required from the client. Keep this work local until I ask for deployment. Report exactly what passed, failed or remains unverified.
```

## Check a change

In a second terminal:

```powershell
pnpm run typecheck
pnpm run build
```

The exported source has been checked for archive completeness and TypeScript compatibility. Windows startup and browser interaction need verification on your computer.

## If startup fails

Paste the complete terminal error into Codex and ask it to fix local setup while preserving the page content, design and existing database. Do not switch to `npm install` or replace the dependency versions as a first workaround. If the native Windows environment blocks the Worker runtime, Codex can help run this same project in WSL2.

## Continue safely

Create a local Git repository/checkpoint before making substantial edits. The included `.openai/hosting.json` records the original Site identity; it is not an automatic deployment connection from VS Code. Publishing elsewhere requires adapting production authentication, database and media storage, and updating the site origin in metadata, sitemap, robots and RSS.
