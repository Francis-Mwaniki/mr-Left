import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"
import { GlobalNavigation } from "@/components/global-navigation"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Francis Mwaniki - Software Engineer",
  description:
    "Full Stack Developer specializing in React, Next.js, and modern web technologies. Building scalable solutions and exceptional digital experiences.",
  keywords: "Francis Mwaniki, Software Engineer, Full Stack Developer, React, Next.js, Vue.js, TypeScript",
  authors: [{ name: "Francis Mwaniki" }],
  openGraph: {
    title: "Francis Mwaniki - Software Engineer",
    description: "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <GlobalNavigation />
        <main>{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
