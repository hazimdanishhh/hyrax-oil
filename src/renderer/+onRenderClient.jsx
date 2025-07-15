// src/renderer/+onRenderClient.jsx
import { hydrateRoot } from 'react-dom/client'
import React from 'react'
import App from './app' // ✅ use default export

export default function onRenderClient(pageContext) {
  const { Page, pageProps } = pageContext
  const container = document.getElementById('page-view')

  hydrateRoot(
    container,
    <React.StrictMode>
      <App>
        <Page {...pageProps} />
      </App>
    </React.StrictMode>
  )
}
