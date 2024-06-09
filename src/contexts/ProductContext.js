import React, { useState } from 'react'

//create context

export const ProductContext = createContext();

const ProductProvider = ({children}) => {

  const [products, setProduts] = useState([])
  const productsLink = 'https://fakestoreapi.com/products'

  useState(()=>{
    const fetchProducts= async()=>{
        const response = await fetch(productsLink)
        const data = await response.json()
    }
  }, [])

  return <ProductContext.Provider>
    {children}
  </ProductContext.Provider>
}

export default ProductProvider