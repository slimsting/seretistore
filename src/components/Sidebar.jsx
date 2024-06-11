import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className=" uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <button
          onClick={handleClose}
          className=" w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className=" text-2xl" />
        </button>
      </div>
      <div className=" flex flex-col h-[520px] lg:h-[640px] overflow-y-auto">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div>
        <div className=" bg-pink-200 flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className=" mr-2">Total:</span> ${" "}
            {parseFloat(totalPrice).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <button
            onClick={() => clearCart()}
            className=" py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </button>
        </div>
        <Link to={'/'} className=" bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium">View Cart</Link>
        <Link to={"/"} className=" bg-primary flex p-4 justify-center items-center text-white w-full font-medium">Check out</Link>
      </div>
    </div>
  );
};

export default Sidebar;
