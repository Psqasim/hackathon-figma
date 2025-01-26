export const revalidate = 0;
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/app/components/AddToCart";

interface CategoryProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  tags?: string[];
  isNew?: boolean;
  dicountPercentage?: number;
}

interface PageProps {
  params: {
    category: string;
  };
  searchParams: {
    page?: string;
  };
}

async function getCategoryProducts(
  category: string,
  page: number = 1
): Promise<{ products: CategoryProduct[]; total: number }> {
  const pageSize = 20;
  const start = (page - 1) * pageSize;

  const countQuery = `count(*[_type == "categories" && lower(category) == $category])`;
  const productsQuery = `*[_type == "categories" && lower(category) == $category] | order(_createdAt desc) [${start}...${start + pageSize}] {
    _id,
    name,
    price,
    "imageUrl": image.asset->url,
    description,
    tags,
    isNew,
    dicountPercentage
  }`;

  try {
    const [total, products] = await Promise.all([
      client.fetch(countQuery, { category: category.toLowerCase() }),
      client.fetch(productsQuery, { category: category.toLowerCase() }),
    ]);

    return { products, total };
  } catch (error) {
    throw error;
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: PageProps) {
  const page = parseInt(searchParams.page || "1");
  const { products, total } = await getCategoryProducts(params.category, page);
  const pageSize = 6;
  const totalPages = Math.ceil(total / pageSize);

  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">
          No products found in this category
        </h1>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-white">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8 capitalize">
          {params.category} Collection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-xs uppercase tracking-wider font-bold bg-yellow-500 text-white px-3 py-1 rounded-full shadow-md animate-pulse">
                    New Arrival
                  </span>
                </div>
              )}
              <div className="relative h-[250px] w-full">
                <Image
                  src={product.imageUrl || "/placeholder.png"}
                  alt={product.name}
                  fill
                  className="object-contain rounded-t-xl"
                />
              </div>

              <div className="p-4 flex flex-col justify-between h-[calc(100%-250px)]">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-2 text-sm line-clamp-2">
    {product.description}
  </p>

                  <div className="flex flex-wrap gap-4 items-center">
                    <p className="text-3xl font-bold text-green-700">
                      ${product.price}
                    </p>
                    
                    {product.dicountPercentage && (
                      <p className="text-sm font-medium bg-green-100 text-green-700 px-4 py-1.5 rounded-full ring-1 ring-green-200">
                        Discount: {product.dicountPercentage}%
                      </p>
                    )}
                  </div>

                  {product.tags && product.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <AddToCart product={product as any} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}