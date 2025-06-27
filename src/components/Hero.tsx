import React from "react";
import buildingImage from "/images/Hero Section/MCM_Building_2.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 min-h-[80vh] overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[80vh] flex items-center justify-center px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
                Imagination Knows<br />No Zip Code
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A place where wonder comes alive, creativity flourishes, and every child's potential is celebrated.
              </p>
            </div>
          </div>
          
          {/* Right Side: Building Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-2xl">
              <img
                src={buildingImage}
                alt="Matteson Children's Museum Building"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              {/* Optional decorative element */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
