import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../img/logo.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [activePage, setActivePage] = useState();

  //event listener

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  useEffect(() => {}, [activePage]);
  return (
    <header
      className={`${
        isActive ? " bg-white py-4 shadow-md" : " bg-none py-6"
      } fixed w-full z-20 transition-all`}
    >
      <div className="flex container mx-auto items-center h-full justify-between">
        {/* logo */}
        <div
          onClick={() => setActivePage("store")}
          className=" flex items-center"
        >
          <Link to={"/"} className="flex items-center gap-1 justify-center">
            <img src={Logo} alt="logo" className=" w-[40px] flex-1" />
            <p className={" font-semibold"}>Sereti Store</p>
          </Link>
        </div>

        {/* pages */}
        <ul className="hidden md:flex gap-3 cursor-pointer">
          <li
            onClick={() => setActivePage("women")}
            className={`hover:underline hover:font-semibold ${
              activePage === "women" && "underline font-semibold text-red-500"
            }`}
          >
            <Link to={"/women"}>Women</Link>
          </li>
          <li
            onClick={() => setActivePage("men")}
            className={`hover:underline hover:font-semibold ${
              activePage === "men" && "underline font-semibold text-red-500"
            }`}
          >
            <Link to={"/Men"}>Men</Link>
          </li>
          <li
            onClick={() => setActivePage("jewelery")}
            className={`hover:underline hover:font-semibold ${
              activePage === "jewelery" &&
              "underline font-semibold text-red-500"
            }`}
          >
            <Link to={"/jewelery"}>Jewelery</Link>
          </li>
          <li
            onClick={() => setActivePage("electronics")}
            className={`hover:underline hover:font-semibold ${
              activePage === "electronics" &&
              "underline font-semibold text-red-500"
            }`}
          >
            <Link to={"/Electronics"}>Electronics</Link>
          </li>
        </ul>

        {/* hamburger and shoppingcart */}
        <div className="flex gap-3">
          {/* hamburger */}
          <div className=" md:hidden">
            <GiHamburgerMenu className=" text-3xl" />
          </div>
          {/* cart */}
          <button onClick={() => setIsOpen(!isOpen)} className=" flex relative">
            <MdOutlineShoppingCart className=" text-3xl" />
            <div className=" bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h=[18px] text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
