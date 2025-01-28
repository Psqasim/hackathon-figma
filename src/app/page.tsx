import { Suspense } from "react"
import { client } from "@/sanity/lib/client"
import type { Card } from "@/sanity/lib/interface"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Shop from "./components/Shop"
import Products from "./components/post"
import Carousel from "./components/Carousel"
import Universe from "./components/Universe"
import FeaturedPosts from "./components/FeaturedPosts"
import Footer from "./components/Footer"


export const revalidate = 0

// Data fetching function
async function getProducts() {
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
  `)

  const selectedIndices = [0, 4, 5, 7, 8, 9, 10, 11, 13, 16, 18, 19]

  return selectedIndices.map((index) => products[index]).filter((product): product is Card => product !== undefined)
}

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <Navbar />
      <main>
    
        <Hero />
        <Shop />
        <Suspense fallback={<div>Loading products...</div>}>
          <Products products={products} />
        </Suspense>
        <Carousel />
        <Universe />
        <FeaturedPosts />
      </main>
      <Footer />
     
    </>
  )
}

