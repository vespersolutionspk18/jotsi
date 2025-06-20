import React from "react";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row w-full h-screen gap-2 bg-stone-100 p-2">
      <div className="flex flex-col bg-white rounded-2xl lg:w-1/2 justify-center px-10 py-20 ">
        <h1 className="text-5xl font-bold leading-tight tracking-tighter mb-6">
          Control your<br></br> finance future easily
        </h1>
        <p className="text-gray-500 mb-6 text-lg">
          Streamline your business's financial management with our intituive,
          scalable SaaS platform. Designed for U.S. enterprises.
        </p>
        <Button text="Contact" route="/" />
      </div>
      <div
        className="bg-cover bg-blend-multiply lg:w-1/2 mt-10 lg:mt-0 rounded-3xl"
        style={{ backgroundImage: `url('/assets/cat.jpg')` }}
      ></div>
    </div>
  );
};

export default Hero;
