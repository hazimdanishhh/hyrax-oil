// src/renderer/+onRenderHtml.jsx
import React from "react";
import ReactDOMServer from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import { PageShell } from "./PageShell";

export default async function onRenderHtml(pageContext) {
  const { Page, pageProps, documentProps } = pageContext;

  const title = documentProps?.title || "Default Title";
  const description = documentProps?.description || "Default Description";

  const appHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  return {
    documentHtml: escapeInject`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
  </head>
  <body>
    <div id="page-view">${dangerouslySkipEscape(appHtml)}</div>
  </body>
</html>`,
  };
}
