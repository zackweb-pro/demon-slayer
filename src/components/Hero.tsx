import React from 'react';
import { Zap, Sword, Play } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden">
      {/* Main character image */}
      {/* <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img 
          src="https://images.pexels.com/photos/7862492/pexels-photo-7862492.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Zenitsu Agatsuma"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70" />
      </div> */}
      
      {/* Lightning overlay effects */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-orange-500/20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Animated lightning icon */}
        <div className="mb-8 flex justify-center relative">
          <div className="relative">
            <Zap className="h-32 w-32 text-yellow-400 animate-bounce drop-shadow-2xl" />
            <div className="absolute inset-0 animate-ping">
              <Zap className="h-32 w-32 text-yellow-400/50" />
            </div>
            <div className="absolute inset-0 animate-pulse">
              <Zap className="h-32 w-32 text-orange-400/30" />
            </div>
          </div>
        </div>
        
        {/* Main title with dramatic effects */}
        <h1 
          className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px)`,
            textShadow: '0 0 30px rgba(255, 215, 0, 0.5)'
          }}
        >
          DEMON SLAYER
        </h1>
        
        {/* Subtitle with glow effect */}
        <h2 
          className="text-4xl md:text-6xl font-bold mb-8 text-yellow-300 animate-pulse"
          style={{ 
            transform: `translateY(${scrollY * 0.3}px)`,
            textShadow: '0 0 20px rgba(255, 255, 0, 0.8)'
          }}
        >
          Zenitsu Agatsuma
        </h2>
        
        {/* Thunder breathing technique */}
        <div 
          className="text-2xl md:text-4xl mb-12 text-gray-200 leading-relaxed"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <p className="mb-4 font-semibold">Thunder Breathing First Form:</p>
          <p className="text-yellow-400 font-black text-5xl animate-pulse drop-shadow-lg">
            ⚡ THUNDERCLAP AND FLASH ⚡
          </p>
        </div>
        
        {/* Action buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-yellow-400/50">
            <div className="flex items-center space-x-2">
              <Play className="h-6 w-6 group-hover:animate-bounce" />
              <span>Watch Now</span>
            </div>
          </button>
          <button className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-2xl">
            <div className="flex items-center space-x-2">
              <Sword className="h-6 w-6 group-hover:animate-spin" />
              <span>Explore Characters</span>
            </div>
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="animate-bounce">
          <div className="w-8 h-12 border-4 border-yellow-400 rounded-full mx-auto shadow-lg">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mt-2 animate-ping" />
          </div>
        </div>
      </div>
      
      {/* Floating lightning effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[800px] h-[800px] border-4 border-yellow-400/10 rounded-full animate-spin shadow-2xl" style={{ animationDuration: '30s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-orange-400/20 rounded-full animate-spin shadow-xl" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-yellow-300/15 rounded-full animate-spin shadow-lg" style={{ animationDuration: '15s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;