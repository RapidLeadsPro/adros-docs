import { Head, Html, Main, NextScript } from 'next/document'

/** Bust browser/CDN cache when brand assets change — bump after replacing favicon or icon PNGs. */
const ICON_CACHE = 'v=20260412'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`/logo-icon.png?${ICON_CACHE}`} type="image/png" sizes="32x32" />
        <link rel="icon" href={`/logo-icon.png?${ICON_CACHE}`} type="image/png" sizes="192x192" />
        <link rel="shortcut icon" href={`/favicon.ico?${ICON_CACHE}`} />
        <link rel="apple-touch-icon" href={`/logo-icon.png?${ICON_CACHE}`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
