import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { SanityLive } from "@/sanity/lib/live";
import { Providers } from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecommerce Website 2025",
  description: "PS QASIM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <SanityLive />
      </body>
    </html>
  );
}