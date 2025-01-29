import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccessPage() {

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4">

      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">

        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />

        <h1 className="text-3xl font-bold text-gray-800 mb-4">Payment Successful!</h1>

        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your transaction has been completed successfully.
        </p>

        <Link
          href="/"
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Return to Home
        </Link>

      </div>
      
    </div>
  )
}