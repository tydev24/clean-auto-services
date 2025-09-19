import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clean Auto Services - Nettoyage intérieur voiture à domicile",
  description:
    "Service professionnel de nettoyage intérieur automobile à domicile à Sarlat-la-Canéda et dans un rayon de 30 km. Réservez maintenant !",
  generator: "v0.app",
  keywords: "nettoyage voiture, nettoyage intérieur auto, Sarlat-la-Canéda, service à domicile",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
