import { useState } from "react"
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

interface CheckoutFormProps {
  onPaymentSuccess: () => void
  onClose: () => void
}

export default function CheckoutForm({ onPaymentSuccess, onClose }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!stripe || !elements) {
      setMessage("Stripe has not loaded. Please try again later.")
      return
    }

    setIsLoading(true)
    setMessage(null)

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-success`,
      },
      redirect: "if_required",
    })

    if (error) {
      setMessage(error.message || "An unexpected error occurred.")
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      onPaymentSuccess()
    } else {
      setMessage("Payment failed. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <PaymentElement />

      <button
        disabled={isLoading || !stripe || !elements}
        className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors disabled:opacity-50"
      >
        <span>{isLoading ? "Processing..." : "Pay now"}</span>
      </button>

      {message && <div className="text-center mt-4 text-sm font-medium text-red-600">{message}</div>}

      <button
        type="button"
        onClick={onClose}
        className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
      >
        Cancel
      </button>
      
    </form>
  )
}