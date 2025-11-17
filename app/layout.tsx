import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ONE GO AI Agency | AI Solutions for Spanish SMEs",
  description: "Transform your business with practical AI solutions. We help SMEs in Spain and EU implement AI that increases efficiency, boosts sales, and saves time.",
  keywords: ["AI consulting Spain", "AI for SMEs", "business automation", "AI chatbots", "AI implementation"],
  openGraph: {
    title: "ONE GO AI Agency | AI Solutions That Deliver Results",
    description: "EU-based AI consulting for businesses. Get measurable ROI from AI.",
    type: "website",
    locale: "en_US",
    siteName: "ONE GO AI Agency",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONE GO AI Agency",
    description: "AI Solutions for Modern Businesses",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter antialiased">{children}</body>
    </html>
  )
}
