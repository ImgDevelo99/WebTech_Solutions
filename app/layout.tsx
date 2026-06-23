import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "WebTech_Solutions | Desarrollo de Software a Medida",
  description:
    "Diseñamos y construimos productos digitales de alto impacto: software a medida, plataformas web, apps móviles y automatización. El partner tecnológico que escala tu negocio.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body className="font-sans">
        <ThemeProvider defaultTheme="dark" storageKey="webtech-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
