import React, { useContext } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get products from the products context
  const { products, isLoading, error } = useContext(ProductContext);
  return (
    <div>
      <Hero />
      <section className=" py-16">
        {isLoading && (
          <div className="flex items-center justify-center w-full">
            Loading...
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center w-full text-red-500 text-center">
            Something went wrong while fetching products. <br /> Please try
            again
          </div>
        )}
        <h1 className=" font-bold text-3xl flex justify-center items-center mb-4">
          All products
        </h1>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
