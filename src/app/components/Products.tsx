import React from "react";
import Image from "next/image";
import Productcolors from "/public/product-colors.png";

const Products = () => {
  const products = [
    { id: 1, image: "/product1.jpg" },
    { id: 2, image: "/product2.jpg" },
    { id: 3, image: "/product3.jpg" },
    { id: 4, image: "/product4.jpg" },
    { id: 5, image: "/product5.jpg" },
    { id: 6, image: "/product6.jpg" },
    { id: 7, image: "/product7.jpg" },
    { id: 8, image: "/product8.jpg" },
  ];

  return (
    <div className="w-full min-h-[1529px] flex justify-center px-4">
      <div className="max-w-[1124px] w-full">
        {/* Product Heading */}
        <div className="w-full max-w-[692px] mx-auto text-center mt-10 px-4">
          <p className="text-lg leading-7 text-[#737373]">Featured Products</p>
          <h1 className="font-semibold text-2xl leading-8 text-[#252B42] mt-2">
            BESTSELLER PRODUCTS
          </h1>
          <p className="leading-5 text-[#737373] mt-2">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-7 px-4">
          {products.map((product) => (
            <div key={product.id} className="max-w-[238px] mx-auto w-full">
              {/* Image */}
              <div
                className="w-full h-[427px] bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>

              {/* Product details */}
              <div className="w-full flex flex-col items-center gap-3">
                <h1 className="font-semibold leading-6 text-[#252B42] mt-5">
                  Graphic Design
                </h1>
                <p className="text-sm text-[#737373]">English Department</p>
                <p className="text-[#BDBDBD] font-semibold">
                  $16.48 <span className="text-[#23856D]">$6.48</span>
                </p>
                <Image
                  src={Productcolors}
                  alt="Product Colors"
                  className="mt-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
