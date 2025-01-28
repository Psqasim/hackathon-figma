import "./globals.css";
import { Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";


import ClerkProviderWrapper from "./components/ClerkProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerce-2025",
  description: "PS QASIM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ClerkProviderWrapper>
          <CartProvider>
            <main>{children}</main>
          
          </CartProvider>
          </ClerkProviderWrapper>
        
      </body>
    </html>
  );
}