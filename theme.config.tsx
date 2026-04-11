import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

/**
 * Adros brand identity
 *
 * Navbar + favicon use the same raster assets as app.adros.ai (`adros-app/client/public/`).
 * Do not re-draw the mark in SVG here — it drifted from the official diamond + swoosh-A.
 *
 * Primary neon green (UI accents): #39ff14
 *
 * Navbar logo + head icons: bump `BRAND_ASSET_QS` when replacing raster assets so CDN/browsers refetch.
 */

const BRAND_ASSET_QS = '?v=20260412'

const AdrosLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', minHeight: 48 }}>
    <img
      className="adros-docs-navbar-logo"
      src={`/logo-horizontal.png${BRAND_ASSET_QS}`}
      alt="Adros"
      height={44}
      style={{
        height: 44,
        width: 'auto',
        maxWidth: 320,
        minWidth: 140,
        objectFit: 'contain',
        display: 'block',
      }}
    />
  </div>
)

const config: DocsThemeConfig = {
  logo: <AdrosLogo />,
  logoLink: 'https://docs.adros.ai',
  project: {
    link: 'https://github.com/RapidLeadsPro/adros-docs',
  },
  docsRepositoryBase: 'https://github.com/RapidLeadsPro/adros-docs/tree/main',
  head: () => {
    const { frontMatter, title } = useConfig()
    const description =
      frontMatter.description ||
      'Adros AI — the marketing brain for AI agents. 4,022 performance-tested ad patterns, 74 MCP tools, autonomous monitoring, and a contract layer for orchestration.'
    const pageTitle = title ? `${title} — Adros Docs` : 'Adros Docs'
    return (
      <>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Adros Docs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#39ff14" />
        {/* Icons: primary definitions live in pages/_document.tsx (cache-busted). */}
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s — Adros Docs',
    }
  },
  // Nextra primary color — green hue (~140), high saturation, matches #39ff14
  primaryHue: 140,
  primarySaturation: 100,
  sidebar: {
    defaultMenuCollapseLevel: 1,
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.35rem',
          fontSize: '0.85rem',
        }}
      >
        <span style={{ fontWeight: 600 }}>
          © {new Date().getFullYear()} Matrix AI Solution Pte Ltd
        </span>
        <span style={{ opacity: 0.7 }}>
          Adros AI · Singapore · Built for AI agents that run ads ·{' '}
          <a
            href="https://app.adros.ai"
            style={{ color: '#00b44a', fontWeight: 600 }}
          >
            app.adros.ai
          </a>
        </span>
      </div>
    ),
  },
  editLink: {
    text: 'Edit this page on GitHub →',
  },
  feedback: {
    content: null,
  },
  search: {
    placeholder: 'Search Adros docs...',
  },
  navigation: {
    prev: true,
    next: true,
  },
}

export default config
