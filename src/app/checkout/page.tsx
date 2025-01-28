'use client'
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CheckoutPage = () => {
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect to sign-in page if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      router.push("/signin");
    }
  }, [isSignedIn, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call or checkout process
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Checkout successful! Thank you for your purchase.");
      router.push("/confirmation"); // Redirect to confirmation page
    }, 2000);
  };

  if (!isSignedIn) return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Checkout</h1>
        <p className="text-center text-gray-600 mb-4">
          Welcome back, {user.firstName} {user.lastName}.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Shipping Info Section */}
          <h2 className="text-xl font-medium text-gray-800">Shipping Information</h2>
          <div className="space-y-2">
            <input
              type="text"
              name="fullName"
              value={shippingDetails.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleChange}
              placeholder="Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="postalCode"
              value={shippingDetails.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
            <input
              type="text"
              name="phone"
              value={shippingDetails.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Payment Method Section */}
          <h2 className="text-xl font-medium text-gray-800">Payment Method</h2>
          <select
            name="paymentMethod"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              {isSubmitting ? "Processing..." : "Complete Checkout"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
