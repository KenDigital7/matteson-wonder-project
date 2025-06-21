import React from "react";
import logoImage from "/MCM_Logo_Transparent.png";

const Hero = () => {
  return (
    <section className="relative bg-white min-h-[70vh] overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[70vh] flex items-center justify-center px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <img
                src={logoImage}
                alt="Matteson Children's Museum Logo"
                className="w-96 h-96 sm:w-128 sm:h-128 lg:w-160 lg:h-160 object-contain hover:scale-105 transition-transform duration-300"
                style={{ 
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none'
                }}
              />

            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 space-y-4 lg:space-y-6">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight text-gray-800">
              Imagination Knows<br />No Zip Code
            </h1>
            

            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A place where wonder comes alive, creativity flourishes, and every child's potential is celebrated.
            </p>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
