import React from "react";
import { FaStar } from "react-icons/fa";

export const Star = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-stone-100 lg:w-1/2 h-full px-3 ">
      <div className="flex flex-col gap-3 justify-center border-l-[1.5px] border-l-stone-300 px-5 w-[60%]">
        <div className="flex flex-row items-start gap-4">
          <div className="bg-jyellow p-2 rounded-md ">
            <FaStar className="w-5 h-5" />
          </div>
          <p className="text-xl font-bold">53%</p>
        </div>
        <p>
          of students go on to study in Pakistan's top 5 universities on
          merit-based scholarships
        </p>
      </div>
    </div>
  );
};
