import React from "react";
import buildingImage from "/images/Hero Section/MCM_Building_2.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 min-h-[80vh] overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Side: Text Content */}
          <div className="flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
                Imagination Knows<br />No Zip Code
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A place where wonder comes alive, creativity flourishes, and every child's potential is celebrated.
              </p>
            </div>
          </div>
          
          {/* Right Side: Building Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
              <img
                src={buildingImage}
                alt="Matteson Children's Museum Building"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              {/* Optional decorative element */}
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-full h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl -z-10"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
