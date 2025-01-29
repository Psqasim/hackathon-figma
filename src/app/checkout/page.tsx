"use client"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useSearchParams } from "next/navigation"
import { useEffect, useState, Suspense } from "react"
import CheckoutForm from "../components/CheckoutForm"


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="text-center py-8">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  )
}

function CheckoutContent() {
  const searchParams = useSearchParams()
  const amountParam = searchParams.get("amount")
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const amount = Number.parseFloat(amountParam || "0")

  useEffect(() => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setError("Invalid payment amount. Please return to cart.")
      return
    }

    async function createPaymentIntent() {
      try {
        const response = await fetch("/api/create-payment-intent", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: Math.round(amount * 100) }),
        })

        if (!response.ok) {
          throw new Error("Failed to create payment intent")
        }

        const { clientSecret } = await response.json()
        setClientSecret(clientSecret)
      } catch (error) {
        console.error("Payment intent creation failed:", error)
        setError("Failed to initialize payment. Please try again.")
      }
    }

    createPaymentIntent()
  }, [amount])

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>
  }

  if (!clientSecret) {
    return <div className="text-center py-8">Loading payment gateway...</div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Complete Your Payment
            </h1>

            <div className="mb-8 text-center">
              <span className="text-2xl font-semibold text-gray-700">
                Total: ${amount.toFixed(2)}
              </span>
            </div>

            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: { theme: "stripe" },
              }}
            >
              <CheckoutForm
                onPaymentSuccess={() => {
                  // Function implementation
                }}
                onClose={() => {
                  // Function implementation
                }}
              />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  )
}