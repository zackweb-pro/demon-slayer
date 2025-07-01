
import React from 'react';

interface ParallaxBackgroundProps {
  scrollY: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base dramatic sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900" />
      
      {/* Storm clouds background */}
      <div className="absolute inset-0 opacity-60">
        <div 
          className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-700 to-indigo-800"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute inset-0 bg-gradient-radial from-transparent via-gray-800/40 to-gray-900/60"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
      </div>

      {/* Zenitsu's Thunder Breathing - Main Lightning Strikes */}
      <div className="absolute inset-0">
        {/* First Form: Thunderclap and Flash */}
        <div 
          className="absolute top-0 left-1/4 w-3 h-full bg-gradient-to-b from-yellow-300 via-yellow-400 to-transparent opacity-80 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px) rotate(2deg)`,
            filter: 'blur(1px)',
            boxShadow: '0 0 30px rgba(255, 235, 59, 0.8), 0 0 60px rgba(255, 193, 7, 0.4)',
            animationDuration: '0.3s'
          }}
        />
        
        {/* Sixfold - Multiple lightning strikes */}
        <div 
          className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-amber-300 via-yellow-400 to-transparent opacity-70 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.6}px) rotate(-1deg)`,
            filter: 'blur(0.5px)',
            boxShadow: '0 0 25px rgba(255, 193, 7, 0.7), 0 0 50px rgba(255, 235, 59, 0.3)',
            animationDelay: '0.1s',
            animationDuration: '0.4s'
          }}
        />
        
        <div 
          className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-yellow-200 via-amber-400 to-transparent opacity-60 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px) rotate(3deg)`,
            filter: 'blur(0.8px)',
            boxShadow: '0 0 20px rgba(255, 235, 59, 0.6), 0 0 40px rgba(255, 193, 7, 0.2)',
            animationDelay: '0.2s',
            animationDuration: '0.5s'
          }}
        />

        {/* God Speed - Ultra fast lightning */}
        <div 
          className="absolute top-0 left-1/2 w-4 h-full bg-gradient-to-b from-white via-yellow-300 to-transparent opacity-90 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.8}px) rotate(-2deg)`,
            filter: 'blur(2px)',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.9), 0 0 80px rgba(255, 235, 59, 0.5)',
            animationDelay: '0.3s',
            animationDuration: '0.2s'
          }}
        />
      </div>

      {/* Dynamic branching lightning */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={`lightning-${i}`}
            className="absolute animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${Math.random() * 30}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${200 + Math.random() * 300}px`,
              background: `linear-gradient(to bottom, 
                rgba(255, 255, 255, ${0.8 - i * 0.1}), 
                rgba(255, 235, 59, ${0.6 - i * 0.08}), 
                transparent)`,
              transform: `translateY(${scrollY * (0.2 + i * 0.1)}px) rotate(${Math.random() * 6 - 3}deg)`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${15 + Math.random() * 10}px rgba(255, 235, 59, ${0.5 - i * 0.05})`,
              animationDuration: `${0.2 + Math.random() * 0.3}s`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>

      {/* Thunder Breathing particles - Golden energy */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-bounce opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              backgroundColor: i % 4 === 0 ? '#fff' : i % 4 === 1 ? '#fbbf24' : i % 4 === 2 ? '#f59e0b' : '#eab308',
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.4)}px)`,
              boxShadow: `0 0 ${6 + Math.random() * 12}px currentColor`,
              filter: 'blur(0.3px)',
              opacity: 0.6 + Math.random() * 0.4
            }}
          />
        ))}
      </div>

      {/* Floating energy orbs */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              background: `radial-gradient(circle, 
                rgba(255, 235, 59, ${0.8 - i * 0.05}), 
                rgba(255, 193, 7, ${0.4 - i * 0.03}), 
                transparent)`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              transform: `translateY(${scrollY * (0.05 + Math.random() * 0.2)}px)`,
              boxShadow: `0 0 ${20 + Math.random() * 20}px rgba(255, 235, 59, 0.3)`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Dynamic light rays - Thunder Breathing aura */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/2 w-96 h-full bg-gradient-to-b from-yellow-400/20 via-transparent to-transparent transform -translate-x-1/2"
          style={{ 
            transform: `translateY(${scrollY * 0.12}px) translateX(-50%) rotate(8deg)`,
            filter: 'blur(3px)',
            clipPath: 'polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)'
          }}
        />
        <div 
          className="absolute top-0 right-1/4 w-80 h-full bg-gradient-to-b from-amber-400/15 via-transparent to-transparent transform"
          style={{ 
            transform: `translateY(${scrollY * 0.18}px) rotate(-12deg)`,
            filter: 'blur(4px)',
            clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)'
          }}
        />
        <div 
          className="absolute top-0 left-1/4 w-64 h-full bg-gradient-to-b from-white/10 via-transparent to-transparent transform"
          style={{ 
            transform: `translateY(${scrollY * 0.22}px) rotate(15deg)`,
            filter: 'blur(5px)',
            clipPath: 'polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)'
          }}
        />
      </div>

      {/* Atmospheric depth layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/20 to-purple-900/40" />
      
      {/* Thunder clouds moving effect */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-radial from-gray-700/40 via-transparent to-transparent"
          style={{ 
            transform: `translateY(${scrollY * 0.03}px) translateX(${scrollY * 0.02}px)`,
            backgroundSize: '200% 200%',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;
