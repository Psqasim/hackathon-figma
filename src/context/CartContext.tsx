'use client'
import { createContext, useContext, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import type { Card } from "@/sanity/lib/interface"

interface CartItem extends Card {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: Card, quantity?: number) => void
  removeFromCart: (itemId: string) => void
  updateQuantity: (itemId: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const router = useRouter()

  const addToCart = (product: Card, quantity = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item._id === product._id)
      if (existingItem) {
        return prev.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + quantity } : item))
      }
      return [...prev, { ...product, quantity }]
    })
  }

  const removeFromCart = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item._id !== itemId))
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prev) => prev.map((item) => (item._id === itemId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const openCart = () => {
    router.push("/cart")
  }

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        openCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === null) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}