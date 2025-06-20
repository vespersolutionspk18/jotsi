import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full py-10 px-3 gap-10 ">
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-light   text-gray-900 leading-tight ">
          About Jotsi
        </h2>
      </div>
      <div className="lg:w-1/2 text-gray-700 text-lg leading-tight text-justify">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
