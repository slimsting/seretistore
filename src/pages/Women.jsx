import React, { useContext } from "react";
import Hero from "../components/Hero";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Women = () => {
  const { products } = useContext(ProductContext);
  //filtered products
  console.log(products);

  const filteredProducts = products.filter((item) => {
    return item.category === "women's clothing";
  });
  return (
    <div>
      {/* <Hero /> */}
      <section className="py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;
