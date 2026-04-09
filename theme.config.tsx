import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, letterSpacing: '-0.02em', fontSize: '1.1rem' }}>
      ADROS <span style={{ color: '#8b5cf6' }}>AI</span>
    </span>
  ),
  project: {
    link: 'https://github.com/RapidLeadsPro/adros-docs',
  },
  docsRepositoryBase: 'https://github.com/RapidLeadsPro/adros-docs/tree/main',
  head: () => {
    const { frontMatter, title } = useConfig()
    const description =
      frontMatter.description ||
      'Adros AI — the marketing brain for AI agents. 4,022 performance-tested ad patterns, MCP tools, and orchestration.'
    const pageTitle = title ? `${title} — Adros Docs` : 'Adros Docs'
    return (
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s — Adros Docs',
    }
  },
  primaryHue: 262, // purple (matches app.adros.ai)
  primarySaturation: 83,
  sidebar: {
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark',
  },
  footer: {
    text: (
      <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>
        © {new Date().getFullYear()} Matrix AI Solution Pte Ltd · Adros AI ·{' '}
        <a href="https://app.adros.ai" style={{ color: '#8b5cf6' }}>
          app.adros.ai
        </a>
      </span>
    ),
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: null, // disable the "Question? Give us feedback" link
  },
  search: {
    placeholder: 'Search docs...',
  },
}

export default config
