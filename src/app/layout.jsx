import Script from 'next/script'

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color"/>
        <meta name="description" content="Test Drive" />
        <title>Test Drive</title>
      </head>
      <body>
        {children}
        <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></Script>
      </body>
    </html>
  )
}
