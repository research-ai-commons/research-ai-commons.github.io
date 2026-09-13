# Research AI Commons Website

Website starter for the Research AI Commons community.

## Stack

- Astro
- Static generation
- GitHub Pages
- GitHub Actions deployment

This was chosen to keep the site lightweight, low-cost, easy to hand over, and easy for coding agents to edit.

## Local development

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

## First things to edit

1. `src/data/site.ts` — community name, email, GitHub URL
2. `src/data/events.ts` — event list
3. `src/pages/events/` — individual event pages
4. `docs/community-charter.md` — source-of-truth community document

## Suggested GitHub setup

Create a GitHub Organization and create a repository named exactly:

```text
research-ai-commons.github.io
```

Push this project to the repository and enable **Settings → Pages → Source: GitHub Actions**.

If the Organization username differs from `research-ai-commons`, update `site` in `astro.config.mjs`.

## Event IDs

Café events use a single chronological ID sequence across languages:

```text
Research AI Café #001 | JP
Research AI Café #002 | EN
Research AI Café #003 | JP
```

Suggested internal file IDs:

```text
RAIC-001
RAIC-002
```

Forums use a separate sequence:

```text
Research AI Forum #001
```

## Content policy

Do not publish unpublished research data, confidential collaborator information, personal data, or identifiable comments from discussion sessions without explicit permission.
