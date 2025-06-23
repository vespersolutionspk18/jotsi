import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <div className=" flex flex-row rounded-[2rem] overflow-hidden bg-gradient-to-r from-yellow-400 to bg-yellow-300 w-fit h-60 ">
      <div className="w-[70%] flex flex-col justify-center px-10 text-white">
        <h1 className="text-4xl font-semibold mb-4">
          Contact for Legal Assistance
        </h1>
        <p className="text-base mb-3">
          {" "}
          Experinced lawyers are ready to fight for your rights
        </p>
        <div className="flex items-center gap-6">
          <Button text="Our Areas" route="/" variant="white" />
        </div>
      </div>
        <div className="w-[30%]"></div>
</div>
  
  );
};

export default Cta;
