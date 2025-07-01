
import React from 'react';

interface ParallaxBackgroundProps {
  scrollY: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
      
      {/* Subtle animated overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-orange-900/10 to-transparent"
        style={{ 
          transform: `translateY(${scrollY * 0.05}px)`,
          opacity: 0.6 
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f59e0b' : '#ffffff',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: `translateY(${scrollY * (0.02 + Math.random() * 0.1)}px)`,
            }}
          />
        ))}
      </div>

      {/* Subtle glow effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-400/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.06}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-400/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translateY(${scrollY * 0.04}px) translateX(-50%)` }}
        />
      </div>

      {/* Atmospheric depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
    </div>
  );
};

export default ParallaxBackground;
