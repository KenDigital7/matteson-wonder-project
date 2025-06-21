import React from "react";

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
                src="/images/Logo/MCM_Logo.png"
                alt="Matteson Children's Museum Logo"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              {/* Subtle glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-blue-200 rounded-full blur-3xl opacity-30 -z-10 scale-110"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2 space-y-4 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
              The Matteson Children's Museum
            </h1>
            
            {/* Opening Banner */}
            <div className="inline-block bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-base sm:text-lg font-bold shadow-lg animate-pulse">
              Opening 2028!
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A place where wonder comes alive, creativity flourishes, and every child's potential is celebrated.
            </p>
            
            {/* Location Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full shadow-lg text-gray-700 font-medium text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Matteson, Illinois
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
