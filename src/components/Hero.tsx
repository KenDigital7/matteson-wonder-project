import React, { useState, useEffect, useRef } from "react";
import buildingImage from "/images/Hero Section/MCM_Building_2.png";
import TextCursorProximity from "@/components/ui/text-cursor-proximity";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Dynamic background color based on mouse position
  const dynamicBackground = {
    background: `linear-gradient(
      ${45 + mousePosition.x * 0.5}deg,
      hsl(${210 + mousePosition.x * 0.3}, ${70 + mousePosition.y * 0.2}%, ${88 + mousePosition.x * 0.1}%),
      hsl(${270 + mousePosition.y * 0.3}, ${60 + mousePosition.x * 0.2}%, ${85 + mousePosition.y * 0.1}%)
    )`,
  };

      return (
      <section 
        ref={containerRef}
        className="relative min-h-[80vh] overflow-hidden transition-all duration-300"
        style={dynamicBackground}
      >
      {/* Particle Effects Background with Parallax */}
      <div className="absolute inset-0">
        {/* Floating Colorful Dots - Large with Parallax */}
        <div 
          className="absolute top-16 left-12 w-4 h-4 bg-orange-400/40 rounded-full animate-drift-slow hover:scale-150 hover:bg-orange-400/60 transition-all duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.1}px) translateX(${mousePosition.x * 0.02}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-24 w-5 h-5 bg-blue-400/40 rounded-full animate-drift-medium hover:scale-150 hover:bg-blue-400/60 transition-all duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.15}px) translateX(${-mousePosition.x * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/4 w-6 h-6 bg-purple-400/40 rounded-full animate-drift-fast hover:scale-150 hover:bg-purple-400/60 transition-all duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.08}px) translateX(${mousePosition.y * 0.015}px)` }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-4 h-4 bg-green-400/40 rounded-full animate-drift-slow hover:scale-150 hover:bg-green-400/60 transition-all duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.12}px) translateX(${-mousePosition.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute bottom-48 right-16 w-5 h-5 bg-pink-400/40 rounded-full animate-drift-medium hover:scale-150 hover:bg-pink-400/60 transition-all duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.2}px) translateX(${mousePosition.x * 0.025}px)` }}
        ></div>
        
        {/* Floating Colorful Dots - Medium with Parallax */}
        <div 
          className="absolute top-24 left-1/3 w-3 h-3 bg-yellow-400/35 rounded-full animate-drift-medium hover:scale-125 hover:bg-yellow-400/55 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.18}px) translateX(${mousePosition.x * 0.015}px)` }}
        ></div>
        <div 
          className="absolute top-64 right-12 w-3 h-3 bg-red-400/35 rounded-full animate-drift-fast hover:scale-125 hover:bg-red-400/55 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.14}px) translateX(${-mousePosition.y * 0.015}px)` }}
        ></div>
        <div 
          className="absolute bottom-40 left-16 w-3 h-3 bg-indigo-400/35 rounded-full animate-drift-slow hover:scale-125 hover:bg-indigo-400/55 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.16}px) translateX(${mousePosition.y * 0.01}px)` }}
        ></div>
        <div 
          className="absolute top-80 left-2/3 w-3 h-3 bg-teal-400/35 rounded-full animate-drift-medium hover:scale-125 hover:bg-teal-400/55 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.22}px) translateX(${-mousePosition.x * 0.01}px)` }}
        ></div>
        
        {/* Floating Colorful Dots - Small with Parallax */}
        <div 
          className="absolute top-32 left-1/5 w-2 h-2 bg-cyan-400/30 rounded-full animate-drift-fast hover:scale-110 hover:bg-cyan-400/50 transition-all duration-150 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.25}px) translateX(${mousePosition.x * 0.01}px)` }}
        ></div>
        <div 
          className="absolute top-56 right-1/4 w-2 h-2 bg-lime-400/30 rounded-full animate-drift-slow hover:scale-110 hover:bg-lime-400/50 transition-all duration-150 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.3}px) translateX(${-mousePosition.y * 0.008}px)` }}
        ></div>
        <div 
          className="absolute bottom-56 left-1/2 w-2 h-2 bg-rose-400/30 rounded-full animate-drift-medium hover:scale-110 hover:bg-rose-400/50 transition-all duration-150 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.28}px) translateX(${mousePosition.y * 0.012}px)` }}
        ></div>
        <div 
          className="absolute bottom-24 right-1/5 w-2 h-2 bg-amber-400/30 rounded-full animate-drift-fast hover:scale-110 hover:bg-amber-400/50 transition-all duration-150 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.35}px) translateX(${-mousePosition.x * 0.008}px)` }}
        ></div>
        <div 
          className="absolute top-48 left-3/4 w-2 h-2 bg-violet-400/30 rounded-full animate-drift-slow hover:scale-110 hover:bg-violet-400/50 transition-all duration-150 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.32}px) translateX(${mousePosition.x * 0.005}px)` }}
        ></div>
        
        {/* Stars - Wonder Elements with Parallax */}
        <div 
          className="absolute top-20 right-1/5 w-3 h-3 animate-twinkle-slow hover:scale-125 transition-transform duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * 0.03}px)` }}
        >
          <div className="absolute inset-0 bg-yellow-400/50 transform rotate-45 rounded-sm hover:bg-yellow-400/70 transition-colors duration-300"></div>
          <div className="absolute inset-0 bg-yellow-400/50 transform -rotate-45 rounded-sm hover:bg-yellow-400/70 transition-colors duration-300"></div>
        </div>
        <div 
          className="absolute bottom-36 left-1/6 w-4 h-4 animate-twinkle-medium hover:scale-125 transition-transform duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.08}px) translateX(${-mousePosition.y * 0.025}px)` }}
        >
          <div className="absolute inset-0 bg-white/60 transform rotate-45 rounded-sm hover:bg-white/80 transition-colors duration-300"></div>
          <div className="absolute inset-0 bg-white/60 transform -rotate-45 rounded-sm hover:bg-white/80 transition-colors duration-300"></div>
        </div>
        <div 
          className="absolute top-72 right-1/6 w-2 h-2 animate-twinkle-fast hover:scale-125 transition-transform duration-300 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.12}px) translateX(${mousePosition.y * 0.02}px)` }}
        >
          <div className="absolute inset-0 bg-blue-400/50 transform rotate-45 rounded-sm hover:bg-blue-400/70 transition-colors duration-300"></div>
          <div className="absolute inset-0 bg-blue-400/50 transform -rotate-45 rounded-sm hover:bg-blue-400/70 transition-colors duration-300"></div>
        </div>
        
        {/* Sparkles - Small Wonder Elements with Parallax */}
        <div 
          className="absolute top-28 left-1/6 w-1 h-1 bg-white/70 rounded-full animate-sparkle-slow hover:scale-200 hover:bg-white/90 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.4}px) translateX(${mousePosition.x * 0.005}px)` }}
        ></div>
        <div 
          className="absolute top-44 right-1/8 w-1 h-1 bg-yellow-300/70 rounded-full animate-sparkle-medium hover:scale-200 hover:bg-yellow-300/90 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.45}px) translateX(${-mousePosition.y * 0.006}px)` }}
        ></div>
        <div 
          className="absolute bottom-44 left-3/5 w-1 h-1 bg-white/70 rounded-full animate-sparkle-fast hover:scale-200 hover:bg-white/90 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.5}px) translateX(${mousePosition.y * 0.008}px)` }}
        ></div>
        <div 
          className="absolute bottom-28 right-2/5 w-1 h-1 bg-blue-300/70 rounded-full animate-sparkle-slow hover:scale-200 hover:bg-blue-300/90 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.42}px) translateX(${-mousePosition.x * 0.004}px)` }}
        ></div>
        <div 
          className="absolute top-52 left-4/5 w-1 h-1 bg-purple-300/70 rounded-full animate-sparkle-medium hover:scale-200 hover:bg-purple-300/90 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.48}px) translateX(${mousePosition.x * 0.007}px)` }}
        ></div>
        <div 
          className="absolute top-68 left-1/8 w-1 h-1 bg-pink-300/70 rounded-full animate-sparkle-fast hover:scale-200 hover:bg-pink-300/90 transition-all duration-200 cursor-pointer"
          style={{ transform: `translateY(${scrollY * 0.52}px) translateX(${-mousePosition.y * 0.005}px)` }}
        ></div>
      </div>

      {/* Particle Animation keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes drift-slow {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            25% { transform: translate(10px, -8px) scale(1.1); }
            50% { transform: translate(-5px, -15px) scale(0.9); }
            75% { transform: translate(-10px, -8px) scale(1.05); }
          }
          @keyframes drift-medium {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(-8px, -12px) scale(1.15); }
            66% { transform: translate(12px, -6px) scale(0.85); }
          }
          @keyframes drift-fast {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            20% { transform: translate(8px, -10px) scale(1.2); }
            40% { transform: translate(-6px, -18px) scale(0.8); }
            60% { transform: translate(15px, -5px) scale(1.1); }
            80% { transform: translate(-12px, -12px) scale(0.9); }
          }
          @keyframes twinkle-slow {
            0%, 100% { opacity: 0.3; transform: scale(1) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
          }
          @keyframes twinkle-medium {
            0%, 100% { opacity: 0.4; transform: scale(1) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.3) rotate(180deg); }
          }
          @keyframes twinkle-fast {
            0%, 100% { opacity: 0.2; transform: scale(1) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.4) rotate(180deg); }
          }
          @keyframes sparkle-slow {
            0%, 100% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
          }
          @keyframes sparkle-medium {
            0%, 100% { opacity: 0; transform: scale(0); }
            25%, 75% { opacity: 0.5; transform: scale(0.7); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          @keyframes sparkle-fast {
            0%, 100% { opacity: 0; transform: scale(0); }
            10%, 90% { opacity: 0.3; transform: scale(0.5); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          .animate-drift-slow { animation: drift-slow 8s ease-in-out infinite; }
          .animate-drift-medium { animation: drift-medium 6s ease-in-out infinite; }
          .animate-drift-fast { animation: drift-fast 4s ease-in-out infinite; }
          .animate-twinkle-slow { animation: twinkle-slow 3s ease-in-out infinite; }
          .animate-twinkle-medium { animation: twinkle-medium 2.5s ease-in-out infinite; }
          .animate-twinkle-fast { animation: twinkle-fast 2s ease-in-out infinite; }
          .animate-sparkle-slow { animation: sparkle-slow 4s ease-in-out infinite; }
          .animate-sparkle-medium { animation: sparkle-medium 3s ease-in-out infinite; }
          .animate-sparkle-fast { animation: sparkle-fast 2s ease-in-out infinite; }
        `
      }} />

      {/* Content with Parallax */}
      <div 
        className="relative z-10 max-w-7xl mx-auto min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center w-full">
          
          {/* Left Side: Text Content with Mouse Interaction */}
          <div 
            className="flex flex-col justify-center items-center lg:items-start space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
            style={{ transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.01}px)` }}
          >
            {/* Text Content */}
            <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800 transition-all duration-300">
                <TextCursorProximity
                  label="Imagination Knows"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800 block mb-2"
                  styles={{
                    transform: {
                      from: "scale(1)",
                      to: "scale(1.2)",
                    },
                    color: { 
                      from: "#1F2937", 
                      to: "#FF6B35"
                    },
                  }}
                  falloff="gaussian"
                  radius={80}
                  containerRef={containerRef}
                />
                <TextCursorProximity
                  label="No Zip Code"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight text-gray-800 block"
                  styles={{
                    transform: {
                      from: "scale(1)",
                      to: "scale(1.2)",
                    },
                    color: { 
                      from: "#1F2937", 
                      to: "#118AB2"
                    },
                  }}
                  falloff="gaussian"
                  radius={80}
                  containerRef={containerRef}
                />
              </div>
              
              <p 
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-all duration-300"
                style={{ 
                  transform: `translateX(${mousePosition.x * 0.005}px) translateY(${mousePosition.y * 0.005}px)`
                }}
              >
                A place where wonder comes alive, creativity flourishes, and every child's potential is celebrated.
              </p>
            </div>
          </div>
          
          {/* Right Side: Building Image with Enhanced Parallax */}
          <div 
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            style={{ transform: `translateX(${-mousePosition.x * 0.03}px) translateY(${-mousePosition.y * 0.02}px)` }}
          >
            <div className="relative w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
              <img
                src={buildingImage}
                alt="Matteson Children's Museum Building"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl hover:scale-110 hover:rotate-1 transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translateY(${scrollY * -0.15}px) scale(${1 + mousePosition.x * 0.0001})`,
                  filter: `hue-rotate(${mousePosition.x * 0.2}deg) brightness(${1 + mousePosition.y * 0.001})`
                }}
              />
              {/* Enhanced decorative element with dynamic colors */}
              <div 
                className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-full h-full rounded-2xl -z-10 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, 
                    hsl(${200 + mousePosition.x * 0.5}, 70%, ${80 + mousePosition.y * 0.1}%), 
                    hsl(${280 + mousePosition.y * 0.3}, 60%, ${75 + mousePosition.x * 0.1}%))`,
                  transform: `translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.015}px)`
                }}
              ></div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Shape Divider */}
      <div className="custom-shape-divider-bottom">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
        </svg>
      </div>

      {/* Shape Divider Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-shape-divider-bottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
            z-index: 5;
          }

          .custom-shape-divider-bottom svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 80px;
          }

          .custom-shape-divider-bottom .shape-fill {
            fill: #FFFFFF;
          }
        `
      }} />
    </section>
  );
};

export default Hero;
