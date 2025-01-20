"use client";

import Image from "next/image";
import { Key, useState } from "react";
import { useRouter } from "next/navigation";

import { Card } from "@/sanity/lib/interface";
import { useCart } from "@/context/CartContext";
import CartModal from "./CardModel";

interface ProductsProps {
  products: Card[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const router = useRouter();
  const { addToCart, totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const seeMore = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleQuantityChange = (productId: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(1, value),
    }));
  };

  const handleAddToCart = (item: Card) => {
    const quantity = quantities[item._id] || 1;
    addToCart(item, quantity);
    alert(` This item has been added to your cart!`);

    setQuantities((prev) => ({ ...prev, [item._id]: 1 }));
  };

  return (
    <>
      {/* <button
        onClick={() => setIsCartOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2"
      >
        🛒 Cart ({totalItems})
      </button> */}
      <div className="">
      <div className="w-full max-w-[607px] mx-auto mb-8 text-center">
        <p className="text-base md:text-lg leading-5 text-[#737373]">
          Featured Products
        </p>
        <h1 className="font-semibold text-xl md:text-2xl leading-8 text-[#252B42] mb-2">
          BESTSELLER PRODUCTS
        </h1>
        <p className="text-base md:text-lg leading-5 text-[#737373]">
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-gray-100">
        {products.map((item: Card) => (
          <div
            key={item._id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <Image
              src={item.image_url}
              alt={item.name}
              height={200}
              width={300}
              className="w-full h-56 object-contain"
            />
            <div className="p-4">
              <h2 className="text-[25px] font-bold text-gray-900">
                {item.title}
              </h2>
              <p className="mt-4">
                Tags:{" "}
                <span className="font-bold  text-gray-800">
                  {Array.isArray(item.tags)
                    ? item.tags.join(", ")
                    : "No tags available"}
                </span>
              </p>

              <p className="text-lg font-bold text-green-600 mt-2">
                ${item.price}
              </p>
              <p className="text-sm font-medium bg-green-100 text-green-700 rounded-full px-3 py-1 inline-block mt-2">
                discount: {item.dicountPercentage} %
              </p>

              <div className="flex items-center gap-2 mt-4">
                <label className="text-sm text-gray-600">Quantity:</label>
                <div className="flex items-center border rounded">
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item._id,
                        (quantities[item._id] || 1) - 1
                      )
                    }
                    className="px-2 py-1 border-r hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4">{quantities[item._id] || 1}</span>
                  <button
                    onClick={() =>
                      handleQuantityChange(
                        item._id,
                        (quantities[item._id] || 1) + 1
                      )
                    }
                    className="px-2 py-1 border-l hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => seeMore(item._id)}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-4 py-2 transition-all duration-300"
              >
                See More
              </button>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md px-4 py-2 transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </>
  );
};

export default Products;
