import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"
import UserInfoForm from "../components/UserInfoForm"
import CheckoutForm from "../components/CheckoutForm"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface ProfessionalCheckoutProps {
  amount: number
  onClose: () => void
  onPaymentSuccess: () => void
}

interface UserInfo {
  zipCode: any
  state: any
  city: any
  lastName: any
  firstName: any
  email: string
  phoneNumber: string
  address: string
}

const steps = ["User Information", "Payment", "Confirmation"]

export default function ProfessionalCheckout({ amount, onClose, onPaymentSuccess }: ProfessionalCheckoutProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [clientSecret, setClientSecret] = useState("")
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  const handleUserInfoSubmit = async (info: UserInfo) => {
    setUserInfo(info)
    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Math.round(amount * 100),
          firstName: info.firstName,
          lastName: info.lastName,
          email: info.email,
          phoneNumber: info.phoneNumber,
          address: `${info.address}, ${info.city}, ${info.state} ${info.zipCode}`,
        }),
      })
      const data = await response.json()
      setClientSecret(data.clientSecret)
      setCurrentStep(1)
    } catch (error) {
      console.error("Error creating payment intent:", error)
    }
  }

  const handlePaymentSuccess = () => {
    setCurrentStep(2)
    onPaymentSuccess()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white p-8 rounded-lg max-w-2xl w-full shadow-2xl"
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStep ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index < currentStep ? <CheckCircle size={16} /> : index + 1}
                  </div>
                  <span className="text-sm mt-1">{step}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 ${index < currentStep ? "bg-blue-500" : "bg-gray-200"}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentStep === 0 && <UserInfoForm onSubmit={handleUserInfoSubmit} />}
            {currentStep === 1 && clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm onPaymentSuccess={handlePaymentSuccess} onClose={onClose} />
              </Elements>
            )}
            {currentStep === 2 && (
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
                <p className="mb-6">Thank you for your purchase.</p>
                <button
                  onClick={onClose}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          {currentStep > 0 && currentStep < 2 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="flex items-center text-blue-500 hover:text-blue-600"
            >
              <ArrowLeft size={16} className="mr-1" /> Back
            </button>
          )}
          {currentStep < 1 && (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="flex items-center text-blue-500 hover:text-blue-600 ml-auto"
            >
              Next <ArrowRight size={16} className="ml-1" />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  )
}