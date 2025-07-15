import './styles/main.scss'

// src/renderer/PageShell.jsx
export default function PageShell({ children, documentProps }) {
  const {
    title = 'Hyrax Oil | Better Oil, Better Care.',
    description = "The world's top quality oils"
  } = documentProps || {}

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </head>
      <body>
        <div id="page-view">{children}</div>
      </body>
    </html>
  )
}
