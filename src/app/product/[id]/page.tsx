// app/product/[id]/page.tsx
import Image from "next/image";
import React from "react";
import { Card } from "@/sanity/lib/interface";
import { client } from "@/sanity/lib/client";
import AddToCart from "@/app/components/AddToCart";
import { PortableText } from "@portabletext/react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const getProductById = async (id: string) => {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0] {
      _id,
      title, 
      description,
      price,
      tags,
      isNew,
      dicountPercentage,
      "image_url": productImage.asset->url 
    }`,
    { id }
  );
  return product;
};

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const product: Card | null = await getProductById(id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }

  // Ensure description is compatible with PortableText
  const descriptionContent =
    typeof product.description === "string"
      ? [
          {
            _type: "block",
            children: [{ _type: "span", text: product.description }],
          },
        ]
      : product.description;

  // Calculate discounted price
  const discountedPrice =
    product.dicountPercentage > 0
      ? product.price - (product.price * product.dicountPercentage) / 100
      : null;

  return (
    <>
      {/* Navbar */}
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white shadow-xl rounded-xl mt-8 lg:mt-12">
        {/* Top Section: Image and Essential Details */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-8 lg:mb-12">
          {/* Left Section - Image */}
          <div className="lg:w-1/2">
            <div className="relative h-[400px] lg:h-[500px] w-full">
              <Image
                src={product.image_url || "/placeholder.png"}
                alt={product.title || "Product Image"}
                fill
                className="object-cover rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Right Section - Essential Details */}
          <div className="lg:w-1/2 flex flex-col justify-between py-2 lg:py-4">
            <div className="space-y-6">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 leading-tight tracking-tight">
                {product.title}
              </h1>

              <div className="flex flex-wrap gap-4 items-center">
                <div>
                  <p className="text-3xl font-bold text-green-700">
                    $
                    {discountedPrice !== null
                      ? discountedPrice.toFixed(2)
                      : product.price.toFixed(2)}
                  </p>
                  {discountedPrice !== null && (
                    <p className="text-sm line-through text-gray-500">
                      ${product.price.toFixed(2)}
                    </p>
                  )}
                </div>

                {product.dicountPercentage > 0 && (
                  <p className="text-sm font-medium bg-green-100 text-green-700 px-4 py-1.5 rounded-full ring-1 ring-green-200">
                    Discount: {product.dicountPercentage}%
                  </p>
                )}
                {product.isNew && (
                  <p className="text-sm font-medium bg-yellow-100 text-yellow-800 px-4 py-1.5 rounded-full ring-1 ring-yellow-200">
                    NEW Collection
                  </p>
                )}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-3">
                  {product.tags?.length > 0 ? (
                    product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm font-medium bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full shadow-sm hover:bg-blue-100 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No tags available.</p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-auto">
              <AddToCart product={product} />
            </div>
          </div>
        </div>

        {/* Bottom Section: Product Details */}
        <div className="border-t border-gray-200 pt-8 lg:pt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:mb-6">
            Product Details
          </h2>
          <div className="prose prose-gray max-w-none">
            {descriptionContent ? (
              <PortableText
                value={descriptionContent}
                components={{
                  block: ({ children }) => (
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                }}
              />
            ) : (
              <p className="text-gray-600">No description available.</p>
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
