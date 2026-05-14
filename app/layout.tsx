import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clean Auto Services - Nettoyage intérieur voiture à domicile ou sur lieu de travail",
  description:
    "Service professionnel de nettoyage intérieur automobile à domicile ou sur lieu de travail à Perpignan et ses alentours. Réservez maintenant !",
  generator: "v0.app",
  keywords: "nettoyage voiture, nettoyage intérieur auto, Perpignan, service à domicile, lieu de travail",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.png" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
