import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import App from './app'

export default async function onRenderHtml(pageContext) {
  console.log('🧪 DEBUG: pageContext.documentProps =', pageContext.documentProps);
  console.log('🧪 DEBUG: pageContext.Page =', pageContext.Page?.name || '[Unnamed Component]');

  const { Page, pageProps, documentProps } = pageContext

  const title = documentProps?.title || 'Default Title'
  const description = documentProps?.description || 'Default Description'

  const appHtml = ReactDOMServer.renderToString(
    <App>
      <Page {...pageProps} />
    </App>
  )

  return {
    documentHtml: escapeInject`<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Character Set & Viewport -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- Favicons & Manifest -->
  <link
    rel="icon"
    type="image/png"
    href="./favicon-96x96.png"
    sizes="96x96"
  />
  <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
  <link rel="shortcut icon" href="./favicon.ico" />
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="./apple-touch-icon.png"
  />
  <meta
    name="apple-mobile-web-app-title"
    content="The World's Top Quality Lubricants | Hyrax Oil - Better Oil, Better Care"
  />
  <link rel="manifest" href="./site.webmanifest" />

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//www.googletagmanager.com" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <title>${title}</title>
  <meta name="description" content="${description}" />
</head>
<body>
  <div id="page-view">${dangerouslySkipEscape(appHtml)}</div>
</body>
</html>`
  }
}
