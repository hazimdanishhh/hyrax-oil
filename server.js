import express from "express";
import compression from "compression";
import { renderPage } from "vike/server";
import "vike/__internal"; // loads dist/server/entry.mjs

const app = express();
app.use(compression());
app.use(express.static("dist/client"));

// Vike SSR catch-all routes
app.all(/.*/, async (req, res, next) => {
  const pageContext = await renderPage({ urlOriginal: req.originalUrl });
  const { httpResponse } = pageContext;
  if (!httpResponse) return next();
  httpResponse.headers.forEach(([n, v]) => res.setHeader(n, v));
  res.status(httpResponse.statusCode).send(httpResponse.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`✅ Server running at http://localhost:${port}`)
);
