import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/CartContext"
import { ClerkProvider } from "@clerk/nextjs"
import { SanityLive } from "@/sanity/lib/live"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ecommerce Website 2025",
  description: "PS QASIM",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <CartProvider>{children}</CartProvider>
          <SanityLive/>
        </body>
      </html>
    </ClerkProvider>
  )
}

