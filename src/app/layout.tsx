import "./globals.css"
import { Inter } from "next/font/google"

import { CartProvider } from "@/context/CartContext"
import { SanityLive } from "@/sanity/lib/live"
import { ClerkProvider } from "@clerk/nextjs"



const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Ecommerce-2025",
  description: "PS QASIM",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          <CartProvider>
            <main>{children}</main>
            <SanityLive />
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}