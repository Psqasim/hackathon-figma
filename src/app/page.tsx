export const revalidate = 0; // Add this at the top of your [category]/page.tsx file
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Carousel from "./components/Carousel";
import Universe from "./components/Universe";
import FeaturedPosts from "./components/FeaturedPosts";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { client } from '@/sanity/lib/client';
import { Card } from "@/sanity/lib/interface";
import Products from "./components/post";
// Data fetching function
const getProducts = async () => {
  // First get all products ordered by _createdAt
  const products = await client.fetch(`
    *[_type=="product"] | order(_createdAt) {
      _id,
      title,
      "image_url": productImage.asset->url,
      price,
      tags,
      dicountPercentage,
      description,
      isNew
    }
  `);
  
  // Define the indices you want to show
  const selectedIndices = [0, 4,5, 7,8, 9, 10,11, 13,16,18,19,];
  
  // Filter products to only include those at the specified indices
  const filteredProducts = selectedIndices
    .map(index => products[index])
    .filter(product => product !== undefined);
  
  return filteredProducts;
};

// Page component fetching data directly in the server component
const Home = async () => {
  const products: Card[] = await getProducts(); // Fetch products here

  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <Shop />
      <Products products={products} />
      <Carousel />
      <Universe />
      <FeaturedPosts />
      <Footer />
    </div>
  );
};

export default Home;
