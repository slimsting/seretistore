import React, { useState, createContext, useEffect } from "react";

//create context

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const productsLink = "https://fakestoreapi.com/products";

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(productsLink);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
