import Image from "next/image";
import React from "react";
import Button from "./Button";

const PostServices = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full px-6 py-12 gap-10">
      <div className="flex flex-col lg:w-[30%]">
        <h2 className="text-4xl font-bold mb-4">
          {" "}
          Expert Care for Your Specific Needs
        </h2>
        <p className="tex-gray-500 mb-8">
          {" "}
          to empower you to take control of your mental well-being. We aim to
          break the stigma surrounding mental health, making therapy accessible,
          supportive, and transformative for everyone who seeks it.
        </p>
        <div className=" flex flex-col gap-3">
          <p className="text-black font-semibold border-b-[1px] border-gray-300 pb-2">
            Therapy
          </p>
          <p className="text-gray-400">Grouping counseling</p>
          <p className="text-gray-400">Individual counseling</p>
          <p className="text-gray-400">Family counseling</p>
        </div>
      </div>
      <div className="flex flex-col lg:w-[70%] gap-6">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={"/assets/bwbuilding.jpg"}
            alt=""
            width={800}
            height={400}
            className="rounded-2xl object-cover w-full"
          />
        </div>
        <h3 className="text-2xl font-semibold">Services Section</h3>
        <p>
          Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla
          lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia
          integer nunc posuere. Ut hendrerit semper vel class aptent taciti
          sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>
        <Button text="Services"route="/" /> 
      </div>
    </div>
  );
};

export default PostServices;
