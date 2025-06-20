import React from 'react';

interface SectionDividerProps {
  type?: 'blocks' | 'paint' | 'airplanes' | 'handprints' | 'crayons' | 'puzzle' | 'books' | 'toys' | 'wave' | 'wave-smooth' | 'wave-layered' | 'wave-organic' | 'wave-transition';
  height?: string;
  animated?: boolean;
  color?: string;
  flip?: boolean;
  fromColor?: string;
  toColor?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  type = 'blocks', 
  height = '80px',
  animated = false,
  color = '#9333EA',
  flip = false,
  fromColor,
  toColor
}) => {
  const baseClasses = `w-full overflow-hidden ${flip ? 'transform rotate-180' : ''}`;

  const renderShape = () => {
    switch (type) {
      case 'wave-transition':
        return (
          <div className={baseClasses} style={{ height }}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id={`gradient-${Math.random()}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={fromColor || color} />
                  <stop offset="100%" stopColor={toColor || color} />
                </linearGradient>
              </defs>
              <path
                d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                fill={`url(#gradient-${Math.random()})`}
                className={animated ? 'animate-pulse' : ''}
              />
            </svg>
          </div>
        );

      case 'wave':
        return (
          <div className={baseClasses} style={{ height }}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                fill={color}
                className={animated ? 'animate-pulse' : ''}
              />
            </svg>
          </div>
        );

      case 'wave-smooth':
        return (
          <div className={baseClasses} style={{ height }}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"
                fill={color}
                className={animated ? 'animate-pulse' : ''}
              />
            </svg>
          </div>
        );

      case 'wave-layered':
        return (
          <div className={baseClasses} style={{ height }}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
                fill={color}
                opacity="0.8"
                className={animated ? 'animate-pulse' : ''}
              />
              <path
                d="M0,80 C300,20 900,100 1200,80 L1200,120 L0,120 Z"
                fill={color}
                opacity="0.6"
                className={animated ? 'animate-pulse' : ''}
              />
            </svg>
          </div>
        );

      case 'wave-organic':
        return (
          <div className={baseClasses} style={{ height }}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <path
                d="M0,0 C120,80 240,20 360,60 C480,100 600,40 720,70 C840,100 960,30 1080,60 C1140,75 1170,85 1200,90 L1200,120 L0,120 Z"
                fill={color}
                className={animated ? 'animate-pulse' : ''}
              />
            </svg>
          </div>
        );

      case 'blocks':
        return (
          <div className="relative bg-gradient-to-b from-transparent to-yellow-100 w-full overflow-hidden" style={{ height }}>
            <div className="absolute inset-0 flex items-end justify-center">
              {[...Array(12)].map((_, i) => {
                const colors = ['#FF6B35', '#F7931E', '#FFD23F', '#06D6A0', '#118AB2', '#E74C3C'];
                const blockColor = colors[i % colors.length];
                const blockHeight = 20 + (i % 3) * 15;
                const blockWidth = 40 + (i % 2) * 20;
                
                return (
                  <div
                    key={i}
                    className={`absolute bottom-0 rounded-sm border-2 border-gray-800 ${animated ? 'animate-bounce' : ''}`}
                    style={{
                      backgroundColor: blockColor,
                      left: `${i * 8 + 5}%`,
                      width: `${blockWidth}px`,
                      height: `${blockHeight}px`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '2s'
                    }}
                  >
                    <div className="flex justify-center pt-1">
                      {[...Array(Math.floor(blockWidth / 15))].map((_, j) => (
                        <div
                          key={j}
                          className="w-2 h-2 bg-white/30 rounded-full mx-0.5"
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'paint':
        return (
          <div className="relative bg-gradient-to-b from-transparent to-purple-50 w-full overflow-hidden" style={{ height }}>
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => {
                const colors = ['#FF6B35', '#F7931E', '#FFD23F', '#06D6A0', '#118AB2', '#E74C3C', '#9B59B6'];
                const splatColor = colors[i % colors.length];
                const size = 15 + Math.random() * 30;
                
                return (
                  <div
                    key={i}
                    className={`absolute rounded-full opacity-70 ${animated ? 'animate-ping' : ''}`}
                    style={{
                      backgroundColor: splatColor,
                      left: `${Math.random() * 95}%`,
                      top: `${Math.random() * 80}%`,
                      width: `${size}px`,
                      height: `${size}px`,
                      clipPath: 'polygon(50% 0%, 80% 20%, 100% 50%, 80% 80%, 50% 100%, 20% 80%, 0% 50%, 20% 20%)',
                      animationDelay: `${Math.random() * 2}s`,
                      animationDuration: '3s'
                    }}
                  />
                );
              })}
            </div>
          </div>
        );

      case 'crayons':
        return (
          <div className="relative bg-gradient-to-b from-transparent to-red-50 w-full overflow-hidden" style={{ height }}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              {[...Array(8)].map((_, i) => {
                const colors = ['#FF6B35', '#F7931E', '#FFD23F', '#06D6A0', '#118AB2', '#E74C3C', '#9B59B6', '#2ECC71'];
                const crayonColor = colors[i];
                const x = i * 150 + 50;
                const rotation = Math.random() * 30 - 15;
                
                return (
                  <g key={i} transform={`translate(${x}, 60) rotate(${rotation})`}>
                    <rect x="-8" y="-40" width="16" height="60" fill={crayonColor} stroke="#333" strokeWidth="1"/>
                    <polygon points="-8,-40 0,-50 8,-40" fill={crayonColor} stroke="#333" strokeWidth="1"/>
                    <rect x="-6" y="-20" width="12" height="8" fill="white" opacity="0.8"/>
                  </g>
                );
              })}
              
              <path
                d="M50,80 Q200,60 350,90 T650,70 Q800,50 950,80 T1150,70"
                stroke="#333"
                strokeWidth="3"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        );

      case 'books':
        return (
          <div className="relative bg-gradient-to-b from-transparent to-indigo-50 w-full overflow-hidden" style={{ height }}>
            <div className="absolute inset-0 flex items-end justify-center">
              {[...Array(10)].map((_, i) => {
                const colors = ['#FF6B35', '#F7931E', '#FFD23F', '#06D6A0', '#118AB2', '#E74C3C', '#9B59B6'];
                const bookColor = colors[i % colors.length];
                const bookHeight = 30 + (i % 3) * 10;
                const bookWidth = 8 + (i % 2) * 4;
                const tilt = (Math.random() - 0.5) * 20;
                
                return (
                  <div
                    key={i}
                    className={`absolute bottom-0 ${animated ? 'animate-pulse' : ''}`}
                    style={{
                      backgroundColor: bookColor,
                      left: `${i * 9 + 10}%`,
                      width: `${bookWidth}px`,
                      height: `${bookHeight}px`,
                      transform: `rotate(${tilt}deg)`,
                      borderRadius: '2px 2px 0 0',
                      border: '1px solid #333',
                      animationDelay: `${i * 0.1}s`
                    }}
                  >
                    <div className="w-full h-1 bg-white/30 mt-1"></div>
                    <div className="w-full h-0.5 bg-white/20 mt-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'puzzle':
        return (
          <div className="relative w-full overflow-hidden" style={{ height }}>
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              {/* Inverted puzzle piece edge - cutouts in colored background */}
              <defs>
                <mask id="puzzleMask">
                  <rect width="1200" height="120" fill="white" />
                  <path
                    d="M0,60 
                       C0,60 30,40 60,60 
                       C90,80 120,40 150,60 
                       C180,80 210,40 240,60 
                       C270,80 300,40 330,60 
                       C360,80 390,40 420,60 
                       C450,80 480,40 510,60 
                       C540,80 570,40 600,60 
                       C630,80 660,40 690,60 
                       C720,80 750,40 780,60 
                       C810,80 840,40 870,60 
                       C900,80 930,40 960,60 
                       C990,80 1020,40 1050,60 
                       C1080,80 1110,40 1140,60 
                       C1170,80 1200,60 1200,60 
                       L1200,120 
                       L0,120 Z"
                    fill="black"
                  />
                </mask>
              </defs>
              
              {/* Background filled with section color, masked to create puzzle cutouts */}
              <rect
                width="1200"
                height="120"
                fill={color}
                mask="url(#puzzleMask)"
                className={animated ? 'animate-pulse' : ''}
              />
            </svg>
          </div>
        );

      default:
        return (
          <div className="relative bg-gradient-to-b from-transparent to-blue-50 w-full overflow-hidden" style={{ height }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-blue-500 text-4xl font-bold opacity-20">
                ✨ Fun Divider ✨
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="relative">
      {renderShape()}
    </div>
  );
};

export default SectionDivider; 