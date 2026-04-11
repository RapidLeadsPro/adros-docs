# Adros Docs

Developer and integration documentation for **Adros AI** — the marketing brain for AI agents.

- Live site: [docs.adros.ai](https://docs.adros.ai)
- Dashboard: [app.adros.ai](https://app.adros.ai)
- API: [api.adros.ai](https://api.adros.ai)

## Stack

- [Next.js 14](https://nextjs.org) (Pages Router)
- [Nextra 2](https://nextra.site) (docs theme)
- Deployed on [Vercel](https://vercel.com)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content structure

```
pages/
├── index.mdx                         # Landing page
├── _meta.json                        # Top-level nav
└── integrations/
    ├── _meta.json                    # Integrations nav
    ├── overview.mdx                  # Adros Technical Overview
    ├── onboarding-flows.mdx          # Journey A vs Journey B
    ├── integration-notes.mdx         # Integration blind spots
    └── contract-layer.mdx            # Contract layer spec
```

## Editing docs

Docs are plain MDX files. Edit in place, push to `main`, Vercel auto-deploys in ~30 seconds.

## License

© Matrix AI Solution Pte Ltd. All rights reserved.
