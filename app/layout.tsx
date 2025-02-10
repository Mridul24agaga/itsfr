import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "GetMoreSEO - Free SEO Resources",
  description:
    "Access a wealth of free SEO resources to boost your website's visibility and rankings. GetMoreSEO provides expert tips, tools, and guides for beginners and professionals alike.",
  keywords: "SEO, free resources, search engine optimization, digital marketing, website ranking",
  openGraph: {
    title: "GetMoreSEO - Free SEO Resources",
    description:
      "Boost your website's visibility with our free SEO resources. Expert tips, tools, and guides for all skill levels.",
    type: "website",
    url: "https://getmoreseo.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "GetMoreSEO - Free SEO Resources",
    description: "Elevate your SEO game with our free resources. Tips, tools, and guides for optimizing your website.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}

