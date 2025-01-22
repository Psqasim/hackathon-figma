'use client';

import { ClerkProvider as BaseClerkProvider } from "@clerk/clerk-react";
import { CartProvider } from "@/context/CartContext";
import { dark } from "@clerk/themes";

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <BaseClerkProvider
      publishableKey={publishableKey}
      appearance={{
        baseTheme: dark
      }}
    >
      <CartProvider>
        {children}
      </CartProvider>
    </BaseClerkProvider>
  );
}