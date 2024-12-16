import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Products from "./components/Products";
import Carousel from "./components/Carousel";
import Universe from "./components/Universe";

import FeaturedPosts from "./components/FeaturedPosts";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
       <Header />
       <Navbar />
       <Hero />
       <Shop />
       <Products />
       <Carousel />
       <Universe />
       <FeaturedPosts />
       <Footer/>
    </div>
  );
}
