import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

/**
 * Adros brand identity (source of truth)
 *
 * Primary neon green: #39ff14
 * Background (light): #ffffff
 * Text (primary): #0a0a0a
 * Text (muted): #3f3f3f
 * Font stack: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue
 */

const AdrosLogo = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <svg
      width="28"
      height="28"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Adros"
    >
      {/* Outer diamond */}
      <path
        d="M24 3 L45 24 L24 45 L3 24 Z"
        stroke="#39ff14"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Inner A: two slanted legs + horizontal crossbar */}
      <path
        d="M14 36 L24 12 L34 36"
        stroke="#39ff14"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 27 L30 27"
        stroke="#39ff14"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
    <span
      style={{
        fontWeight: 800,
        letterSpacing: '0.02em',
        fontSize: '1.15rem',
        color: 'inherit',
      }}
    >
      ADROS
    </span>
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
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
