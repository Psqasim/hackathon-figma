"use client"
import { useCart } from "@/context/CartContext"
import Navbar from "@/app/components/Navbar"
import Footer from "@/app/components/Footer"
import Image from "next/image"
import { useClerk } from "@clerk/clerk-react"
import { useState } from "react"
import ProfessionalCheckout from "../components/ProfessionalCheckout"
import { CheckCircle, Trash2 } from "lucide-react"
import type { Card } from "@/sanity/lib/interface"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()
  const { user, openSignIn } = useClerk()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  // Redirect to sign in if user is not authenticated
  if (!user) {
    openSignIn()
    return null
  }

  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => {
      const discount = (item.price * (item.dicountPercentage || 0)) / 100
      return acc + (item.price - discount) * item.quantity
    }, 0)
  }

  const totalPrice = calculateTotalPrice()

  const handleCheckout = () => {
    setIsCheckoutOpen(true)
  }

  const handlePaymentSuccess = () => {
    clearCart()
    setIsCheckoutOpen(false)
    setPaymentSuccess(true)
  }

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex flex-col">

        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">

          <div className="text-center">

            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

            <h1 className="text-2xl sm:text-3xl font-bold mb-4">Payment Successful!</h1>

            <p className="text-lg text-gray-600 mb-8">Thank you for your purchase.</p>

            <button
              onClick={() => setPaymentSuccess(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Continue Shopping
            </button>

          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">

        <h1 className="text-2xl sm:text-3xl font-bold mb-8">Your Cart ({cartItems.length} items)</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">

            <p className="text-lg sm:text-xl text-gray-600">Your cart is empty</p>

          </div>

        ) : (
          <div className="grid md:grid-cols-3 gap-8">

            <div className="md:col-span-2 space-y-4">

              {cartItems.map((item: Card) => {
                const discount = (item.price * (item.dicountPercentage || 0)) / 100
                const discountedPrice = item.price - discount

                return (
                  <div key={item._id} className="flex gap-4 bg-white p-4 rounded-lg shadow">

                    <div className="relative w-24 h-24">

                      <Image
                        src={item.image_url || "/placeholder.svg"}
                        alt={item.title || ""}
                        fill
                        className="object-cover rounded"
                      />

                    </div>

                    <div className="flex-grow space-y-2">

                      <h3 className="font-semibold">{item.title}</h3>

                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>

                      {item.dicountPercentage > 0 && (
                        <p className="text-sm text-red-500">
                          Discount: {item.dicountPercentage}% (${discountedPrice.toFixed(2)})
                        </p>

                      )}

                      <div className="flex items-center gap-2">

                        <button
                          onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                          className="px-2 py-1 border rounded"
                        >
                          -
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item._id, item.quantity + 1)}
                          className="px-2 py-1 border rounded"
                        >
                          +
                        </button>

                      </div>

                    </div>

                    <button onClick={() => removeFromCart(item._id)} className="text-red-500 hover:text-red-700">
                      <Trash2 size={20} />
                    </button>
                  </div>
                )
              })}
            </div>
            <div className="md:col-span-1">

              <div className="bg-white p-6 rounded-lg shadow sticky top-4">

                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-2 mb-4">

                  <div className="flex justify-between">

                    <span>Subtotal</span>

                    <span>${totalPrice.toFixed(2)}</span>

                  </div>

                  <div className="flex justify-between">

                    <span>Shipping</span>
                    <span>Free</span>

                  </div>

                  <div className="border-t pt-2 mt-2">

                    <div className="flex justify-between font-bold">

                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>

                    </div>

                  </div>

                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </div>

        )}
      </main>
      
      <Footer />
      {isCheckoutOpen && (
        <ProfessionalCheckout
          amount={totalPrice}
          onClose={() => setIsCheckoutOpen(false)}
          onPaymentSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  )
}