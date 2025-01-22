# E-Commerce Website

This is a modern and fully functional E-Commerce website built with **Next.js**, **Tailwind CSS**, and **Sanity.io** as the backend for content management. The project includes key e-commerce features such as dynamic product listing, add-to-cart functionality, and more.

## Features

- **Responsive Design:** Fully responsive website designed with Tailwind CSS.
- **Dynamic Routing:** Implemented dynamic routing for product pages.
- **Product Management:** Integrated Sanity.io for managing product data.
- **Add to Cart:** Functionality to add products to the cart and view the cart summary.
- **Search and Filter:** Ability to search for products and filter them by categories.
- **User-Friendly Navigation:** A clean and easy-to-use navigation bar.
- **404 Error Page:** Custom 404 page for unmatched routes.
- **Optimized Performance:** Fast and efficient with Next.js server-side rendering and static site generation.

## Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Sanity.io (for content and product management)
- **State Management:** React Hooks (useState, useEffect)
- **Deployment:** Hosted on Vercel

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Psqasim/hackathon-figma.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ecommerce-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Sanity.io:
   - Go to [Sanity.io](https://www.sanity.io/) and create a new project.
   - Add the necessary schemas for products, categories, etc.
   - Copy your project ID and dataset name.

5. Create an `.env.local` file in the root directory and add the following environment variables:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## How It Works

1. **Home Page:** Displays featured products and categories.
2. **Product Pages:** Dynamic pages for each product with detailed information and an add-to-cart button.
3. **Cart:** Shows a summary of selected products, quantity, and total price.
4. **Sanity Integration:** Allows you to update product data dynamically through the Sanity dashboard.


## Deployment

The website is deployed on **Vercel**. Follow these steps to deploy:

1. Push the code to your GitHub repository.
2. Connect the repository to Vercel.
3. Set up environment variables in the Vercel dashboard.
4. Trigger a deployment.

## Future Enhancements

- **User Authentication:** Add login/signup functionality.
- **Payment Integration:** Integrate a payment gateway like Stripe.
- **Wishlist:** Allow users to save products for later.
- **Order History:** Maintain a history of user purchases.
- **Reviews:** Add product reviews and ratings.

## License

This project is open-source and available under the [MIT License](LICENSE).

---


