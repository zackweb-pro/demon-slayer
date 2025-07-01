import React from 'react';

interface ParallaxBackgroundProps {
  scrollY: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ scrollY }) => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Base gradient with realistic depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900" />
      
      {/* Layered background images for depth */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.pexels.com/photos/1323712/pexels-photo-1323712.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Mountain landscape"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </div>
      
      {/* Animated lightning effects with realistic movement */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-yellow-400 via-yellow-300 to-transparent opacity-40 animate-pulse shadow-2xl"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            filter: 'blur(1px)',
            boxShadow: '0 0 20px rgba(255, 255, 0, 0.5)'
          }}
        />
        <div 
          className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-orange-400 via-yellow-300 to-transparent opacity-30 animate-pulse shadow-xl"
          style={{ 
            transform: `translateY(${scrollY * 0.5}px)`, 
            animationDelay: '1s',
            filter: 'blur(0.5px)',
            boxShadow: '0 0 15px rgba(255, 165, 0, 0.4)'
          }}
        />
        <div 
          className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-yellow-300 via-orange-400 to-transparent opacity-35 animate-pulse shadow-lg"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`, 
            animationDelay: '2s',
            filter: 'blur(0.8px)',
            boxShadow: '0 0 18px rgba(255, 215, 0, 0.3)'
          }}
        />
      </div>
      
      {/* Realistic floating particles with varied movement */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#f97316' : '#eab308',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px)`,
              boxShadow: `0 0 ${4 + Math.random() * 8}px currentColor`,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
      </div>
      
      {/* Atmospheric fog effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      
      {/* Dynamic light rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 w-96 h-full bg-gradient-to-b from-yellow-400/10 via-transparent to-transparent transform -translate-x-1/2 rotate-12"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) translateX(-50%) rotate(12deg)`,
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="absolute top-0 right-1/4 w-64 h-full bg-gradient-to-b from-orange-400/8 via-transparent to-transparent transform rotate-45"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) rotate(45deg)`,
            filter: 'blur(3px)'
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxBackground;