"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import type { Card } from "@/sanity/lib/interface"
import { useCart } from "@/context/CartContext"

interface ProductsProps {
  products: Card[]
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const router = useRouter()
  const { addToCart } = useCart()
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({})

  const seeMore = (productId: string) => {
    router.push(`/product/${productId}`)
  }

  const handleQuantityChange = (productId: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, value),
    }))
  }

  const handleAddToCart = (item: Card) => {
    const quantity = quantities[item._id] || 1
    addToCart(item, quantity)
    alert(`${item.title} has been added to the cart.`);
    setQuantities((prev) => ({ ...prev, [item._id]: 1 }))
  }

  // Rest of the component remains the same
  return (
    <>
      <div className="w-full max-w-[607px] mx-auto mb-8 text-center">
        <p className="text-base md:text-lg leading-5 text-[#737373] animate-fade-in">Featured Products</p>
        <h1 className="font-semibold text-xl md:text-2xl leading-8 text-[#252B42] mb-2 animate-fade-in">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-base md:text-lg leading-5 text-[#737373] animate-fade-in">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-100">
        {products.map((item: Card) => (
          <div
            key={item._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 overflow-hidden flex flex-col"
          >
            <div className="relative overflow-hidden group">
              <Image
                src={item.image_url || "/placeholder.svg"}
                alt={item.name}
                height={200}
                width={300}
                className="w-full h-56 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-[23px] font-bold text-gray-900 mb-2">{item.title}</h2>

              <div className="items-center mt-2">
                <p className="text-lg font-bold text-green-600">${item.price}</p>

                <span className="text-sm font-medium bg-green-100 text-green-700 rounded-full px-3 py-1 w-fit">
                  Discount {item.dicountPercentage}%
                </span>
              </div>

              <div className="flex items-center gap-2 mt-4">
                <label className="text-sm text-gray-600">Quantity:</label>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() => handleQuantityChange(item._id, (quantities[item._id] || 1) - 1)}
                    className="px-2 py-1 border-r hover:bg-gray-100 transition-colors duration-200"
                  >
                    -
                  </button>
                  <span className="px-4">{quantities[item._id] || 1}</span>
                  <button
                    onClick={() => handleQuantityChange(item._id, (quantities[item._id] || 1) + 1)}
                    className="px-2 py-1 border-l hover:bg-gray-100 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-2 mt-auto pt-4">
                <button
                  onClick={() => seeMore(item._id)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-4 py-2 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  See More
                </button>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md px-4 py-2 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default Products

