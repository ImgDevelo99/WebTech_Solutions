import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { MotionConfig } from "framer-motion"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "WebTech_Solutions | Desarrollo de Software a Medida",
    template: "%s | WebTech_Solutions",
  },
  description:
    "Diseñamos y construimos productos digitales de alto impacto: software a medida, plataformas web, apps móviles y automatización. El partner tecnológico que escala tu negocio.",
  keywords: [
    "desarrollo de software",
    "desarrollo web",
    "fábrica de software Colombia",
    "automatización de procesos",
    "transformación digital",
    "consultoría tecnológica",
  ],
  openGraph: {
    title: "WebTech_Solutions | Desarrollo de Software a Medida",
    description:
      "Software a medida, plataformas web y automatización con ingeniería sólida y diseño que convierte.",
    type: "website",
    locale: "es_CO",
    siteName: "WebTech_Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebTech_Solutions | Desarrollo de Software a Medida",
    description:
      "Software a medida, plataformas web y automatización con ingeniería sólida y diseño que convierte.",
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${GeistMono.variable} antialiased`}>
      <head>
        <meta name="theme-color" content="#0369a1" />
      </head>
      <body className="font-sans">
        <ThemeProvider defaultTheme="dark" storageKey="webtech-theme">
          <MotionConfig reducedMotion="user">{children}</MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  )
}
