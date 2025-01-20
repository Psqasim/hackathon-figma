// components/AddToCart.tsx
'use client';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Card } from '@/sanity/lib/interface';
import CartModal from './CardModel';


interface AddToCartProps {
  product: Card;
}

export default function AddToCart({ product }: AddToCartProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsCartOpen(true);
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center border rounded-md">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-2 border-r hover:bg-gray-100 transition-colors"
          >
            -
          </button>
          <span className="px-6 py-2">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-2 border-l hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
        <p className="text-gray-600">
          Total: <span className="font-bold text-green-600">${(product.price * quantity).toFixed(2)}</span>
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
      >
        Add to Cart
      </button>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}