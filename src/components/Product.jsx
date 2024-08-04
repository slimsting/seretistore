import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  // destructure product
  const { category, id, image, price, title } = product;
  return (
    <div>
      <div className=" border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className=" w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div>
          {/* button */}
          <div className=" absolute -bottom-11 right-12 md:right-9 lg:right-1 p-2 flex flex-col items-center justify-center gap-x-2 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300 ">
            <div className="flex">
              <button
                onClick={() => addToCart(product, id)}
                className=" border drop-shadow-xl flex justify-center items-center text-white w-40 h-12 bg-red-500 active:bg-red-400"
              >
                Add to Cart
                <BsPlus className=" text-3xl" />
              </button>
              <Link
                to={`/product/${id}`}
                className=" w-12 h-12 border bg-white flex justify-center items-center text-primary drop-shadow-xl "
              >
                <BsEyeFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* category title and price */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className=" font-semibold mb-1">{title}</h2>
        </Link>
        <div className=" font-semibold ">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
