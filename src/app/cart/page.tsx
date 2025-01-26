"use client";

import { useCart } from "@/context/CartContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, totalItems } = useCart();

  // Calculate total price with discounts applied
  const calculateTotalPrice = () => {
    return cartItems.reduce((acc, item) => {
      const discount = (item.price * (item.dicountPercentage || 0)) / 100; // Calculate discount
      const discountedPrice = item.price - discount; // Apply discount to price
      return acc + discountedPrice * item.quantity; // Add to total
    }, 0);
  };

  const totalPrice = calculateTotalPrice(); // Dynamic total price calculation

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-4 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">
          Your Cart ({totalItems} items)
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-lg sm:text-xl text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
            {/* Cart Items Section */}
            <div className="md:col-span-2 space-y-3 sm:space-y-4">
              {cartItems.map((item) => {
                const discount = (item.price * (item.dicountPercentage || 0)) / 100; // Calculate discount
                const discountedPrice = item.price - discount;

                return (
                  <div
                    key={item._id}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-lg shadow"
                  >
                    {/* Product Image */}
                    <div className="relative w-full sm:w-24 h-48 sm:h-24">
                      <Image
                        src={item.image_url || "/placeholder.svg"}
                        alt={item.title || ""}
                        fill
                        className="object-cover rounded"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="font-bold sm:hidden">
                          ${(discountedPrice * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <p className="font-bold text-gray-800">
                        Price: ${item.price.toFixed(2)}
                      </p>

                      {/* Conditional Discount Display */}
                      {item.dicountPercentage > 0 && (
                        <>
                          <p className="text-red-500 text-sm">
                            Discount: {item.dicountPercentage}%
                          </p>
                          <p className="text-blue-600 font-semibold">
                            After Discount: ${discountedPrice.toFixed(2)}
                          </p>
                        </>
                      )}

                      {/* Quantity Controls and Remove Button */}
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mt-2">
                        <div className="flex items-center border rounded max-w-[120px]">
                          <button
                            onClick={() =>
                              updateQuantity(item._id, Math.max(1, item.quantity - 1))
                            }
                            className="px-3 py-1 border-r hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="px-3 py-1 border-l hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item._id)}
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Price - Hidden on Mobile */}
                    <div className="hidden sm:block text-right">
                      <p className="font-bold">
                        ${(discountedPrice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Order Summary Section */}
            <div className="md:col-span-1">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow sticky top-4">
                <h2 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold text-base sm:text-lg">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-base sm:text-lg font-medium">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}