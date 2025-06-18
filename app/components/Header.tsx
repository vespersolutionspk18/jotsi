import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiPackage } from "react-icons/pi";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoBusinessOutline } from "react-icons/io5";
import Button from "./Button";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex flex-row bg-white w-full p-4 rounded-2xl">
      <div className="w-[30%]  ">
        <Image src="/assets/jotsi.svg" alt="" width={90} height={20}/>
      </div>
      <div className=" flex flex-row w-[40%] gap-2 ">
        <div className="flex flex-row bg-stone-100 w-fit rounded-full py-1 px-1  items-center ">
          <div className=" bg-white flex items-center justify-center rounded-full w-8 h-8">
            <BiHomeAlt2 className="  w-5 h-5 " />
          </div>
          <p className="text-md  text-black px-3">Home</p>
        </div>
        <div className="flex flex-row bg-stone-100 w-fit rounded-full py-1 px-1  items-center ">
          <div className=" bg-white flex items-center justify-center rounded-full w-8 h-8">
            <IoBusinessOutline className="  w-5 h-5 " />
          </div>
          <p className="text-md  text-black px-3">About</p>
        </div>
        <div className="flex flex-row bg-stone-100 w-fit rounded-full py-1 px-1  items-center ">
          <div className=" bg-white flex items-center justify-center rounded-full w-8 h-8">
            <PiPackage className="  w-5 h-5 " />
          </div>
          <p className="text-md  text-black px-3">Services</p>
        </div>
        <div className="flex flex-row bg-stone-100 w-fit rounded-full py-1 px-1  items-center ">
          <div className=" bg-white flex items-center justify-center rounded-full w-8 h-8">
            <IoFolderOpenOutline className="  w-5 h-5 " />
          </div>
          <p className="text-md  text-black px-3">Projects</p>
        </div>
      </div>
      <div className="flex flex-row w-[30%] justify-end pr-1">
        <Button text= "Contact" route="/" />

      </div>
    </div>
  );
};

export default Header;
