import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { SanityLive } from "@/sanity/lib/live";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce-2025",
  description: "PS QASIM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
       <html lang="en">
            <body className={inter.className}>

                   <main>
                        <CartProvider>
                            {children}  
                         </CartProvider>
                     </main>

                     <SanityLive />

              </body>
         </html>
  );
}