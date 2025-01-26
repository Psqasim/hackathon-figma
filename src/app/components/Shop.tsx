'use client'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface CategoryProps {
  id: string;
  title: string;
  image: string;
  width: string;
  height: string;
}

const categories: CategoryProps[] = [
  {
    id: 'men',
    title: 'MEN',
    image: '/mens.jpg',
    width: 'w-full md:w-1/2',
    height: 'md:h-[500px]'
  },
  {
    id: 'women',
    title: 'WOMEN',
    image: '/womens.jpg',
    width: 'w-full md:w-1/2',
    height: 'md:h-[500px]'
  },
  {
    id: 'accessories',
    title: 'ACCESSORIES',
    image: '/acce.jpg',
    width: 'w-full md:w-1/4',
    height: 'md:h-[242px]'
  },
  {
    id: 'kids',
    title: 'KIDS',
    image: '/kids.jpg',
    width: 'w-full md:w-1/4',
    height: 'md:h-[242px]'
  }
];

const Shop = () => {
  // Only use router for programmatic navigation after mount
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full min-h-[770px] flex justify-center px-4 md:px-6 lg:px-0">
      <div className="w-full max-w-[1050px] py-10 md:py-[60px] lg:py-[80px]">
        {/* Editor */}
        <div className="w-full max-w-[607px] mx-auto mb-8 text-center">
          <h1 className="font-semibold text-xl md:text-2xl leading-8 text-[#252B42] mb-2">
            EDITOR&apos;S PICK
          </h1>
          <p className="text-base md:text-lg leading-5 text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Shops */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
          <div className="w-full md:w-3/4 flex flex-col md:flex-row gap-4">
            {/* Men */}
            <Link href="/categ/men" className={`relative aspect-[1/1.2] ${categories[0].width} ${categories[0].height}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[0].image})` }}
              >
                <div className="absolute bottom-7 left-7">
                  <p className="w-[170px] h-[48px] bg-white flex items-center justify-center font-semibold leading-6 text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors">
                    {categories[0].title}
                  </p>
                </div>
              </div>
            </Link>

            {/* Women */}
            <Link href="/categ/women" className={`relative aspect-[1/1.2] ${categories[1].width} ${categories[1].height}`}>
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${categories[1].image})` }}
              >
                <div className="absolute bottom-7 left-7">
                  <p className="w-[136px] h-[48px] bg-white flex items-center justify-center font-semibold leading-6 text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors">
                    {categories[1].title}
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column - Accessories and Kids */}
          <div className="w-full md:w-1/4 flex flex-col gap-4">
            {categories.slice(2).map((category) => (
              <Link 
                key={category.id}
                href={`/categ/${category.id}`}
                className={`relative aspect-[1/1.2] ${category.height}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="absolute bottom-7 left-7">
                    <p className="w-[170px] h-[48px] bg-white flex items-center justify-center font-semibold leading-6 text-[#252B42] hover:bg-[#252B42] hover:text-white transition-colors">
                      {category.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;