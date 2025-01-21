// src/app/categ/[category]/page.tsx
export const revalidate = 0; // Add this at the top of your [category]/page.tsx file
import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';

interface CategoryProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface PageProps {
  params: {
    category: string;
  };
}

async function getCategoryProducts(category: string): Promise<CategoryProduct[]> {
    const query = `*[_type == "categories" && lower(category) == $category] {
      _id,
      name,
      price,
      "imageUrl": image.asset->url,
      description
    }`;
  
    try {
      // Log the constructed query and parameters
      console.log('Query:', query);
      console.log('Category param:', category);
      
      const products = await client.fetch(query, { category: category.toLowerCase() });
      
      console.log('Raw response:', products);
      return products;
    } catch (error) {
      console.error('Error details:', error);
      throw error;
    }
  }

export default async function CategoryPage({ params }: PageProps) {
  const products = await getCategoryProducts(params.category);

  if (!products || products.length === 0) {
    return (
      <div className="w-full min-h-screen p-8">
        <h1 className="text-3xl font-bold mb-8 capitalize">
          {params.category} Collection
        </h1>
        <p className="text-lg">No products found in this category.</p>
      </div>
    );
  }

  return (
  <>


        <Navbar/>

    <div className="w-full min-h-screen p-8">
      
      <h1 className="text-3xl font-bold mb-8 capitalize">
        {params.category} Collection
      </h1>
      
      {/* Debug info - remove in production
      <p className="mb-4 text-sm text-gray-500">Found {products.length} products</p> */}
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg overflow-hidden">
            <div className="relative w-full h-64">
              <Image 
                src={product.imageUrl || '/placeholder.jpg'}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">${product.price}</p>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  <Footer/>
  </>
  );
}