import React from "react";
import { Link } from "react-router-dom";
import WomaImg from "../img/woman_hero.png";

const Hero = () => {
  return (
    <section className=" h-[500px] bg-hero bg-no-repeat bg-cover bg-center py-24 overflow-hidden">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col">
          {/* pretitle */}
          <div className=" font-semibold flex items-center uppercase">
            <div className=" w-10 h-[2px] bg-red-500 mr-3"></div>mitumba camera
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 uppercase">
            new stock sale <br />{" "}
            <span className=" font-semibold">all gender </span>
          </h1>
        </div>
        {/* image */}
        <div className=" hidden lg:block">
          <img src={WomaImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
