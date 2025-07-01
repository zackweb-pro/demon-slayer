
import React, { useState, useEffect } from 'react';
import { Sword, Play, X } from 'lucide-react';
import zenitsu from '../assets/zenitsu.png' // Ensure you have this image in your assets
interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  const handleStopVideo = () => {
    setIsPlaying(false);
  };

  // Listen for YouTube video state changes
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from YouTube
      if (event.origin !== 'https://www.youtube.com') return;
      
      try {
        const data = JSON.parse(event.data);
        // YouTube sends state changes with info.playerState
        // 2 = paused, 0 = ended
        if (data.event === 'video-progress' || data.event === 'video-pause' || 
            (data.info && (data.info.playerState === 2 || data.info.playerState === 0))) {
          setIsPlaying(false);
        }
      } catch {
        // Ignore parsing errors
      }
    };

    // Also listen for keyboard events (like spacebar pause)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isPlaying && event.code === 'Escape') {
        setIsPlaying(false);
      }
    };

    window.addEventListener('message', handleMessage);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-white px-4 overflow-hidden">
      {/* YouTube trailer background or thumbnail */}
      <div className="absolute inset-0 z-0">
        {isPlaying ? (
          <div className="relative w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/x7uLutVRBfI?autoplay=1&mute=1&controls=1&loop=1&playlist=x7uLutVRBfI&rel=0&modestbranding=1&showinfo=0&enablejsapi=1"
              title="Demon Slayer Trailer"
              className="w-full h-full object-cover"
              style={{ minHeight: '100vh', minWidth: '100vw' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <img 
              src={zenitsu}
              alt="Zenitsu Agatsuma"
              className="w-full h-full object-cover"
            />
          
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/50 pointer-events-none" />
      </div>
      
      {/* Stop video button and instructions - positioned above everything when playing */}
      {isPlaying && (
        <div className="fixed top-10 right-4 z-[9999] flex flex-col items-end space-y-2"
            style={{zIndex: "1000 !important"}}
        >
          <div className="bg-black/90 text-white text-sm px-3 py-2 rounded-lg border border-white/20"
            style={{zIndex: "1000 !important"}}
          >
            Press ESC or click X to return
          </div>
          <button
            onClick={handleStopVideo}
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full transition-all duration-300 group shadow-2xl border-2 border-white/30"
            style={{zIndex: "1000 !important"}}
            aria-label="Stop video and return to content"
          >
            <X className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
            style={{zIndex: "1000 !important"}}
            
            />
          </button>
        </div>
      )}
      
      {/* Lightning overlay effects - hidden when playing */}
      {!isPlaying && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-orange-500/20 pointer-events-none"
        />
      )}
      
      {/* Hero content - hidden when playing */}
      {!isPlaying && (
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Main title with dramatic effects */}
          <h1 
            className="text-7xl md:text-9xl font-black mb-6 bg-gradient-to-r from-red-400 via-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-2xl"
          >
            DEMON SLAYER
          </h1>
          
          {/* Subtitle with glow effect */}
          <h2 
            className="text-4xl md:text-6xl font-bold mb-8 text-yellow-300 animate-pulse"
          >
            Zenitsu Agatsuma
          </h2>
          
          {/* Thunder breathing technique */}
          <div className="text-2xl md:text-4xl mb-12 text-gray-200 leading-relaxed">
            <p className="mb-4 font-semibold">Thunder Breathing First Form:</p>
            <p className="text-yellow-400 font-black text-5xl animate-pulse drop-shadow-lg">
              ⚡ THUNDERCLAP AND FLASH ⚡
            </p>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
            <button className="group border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-2xl">
              <a href='#characters' className="flex items-center space-x-2">
                <Sword className="h-6 w-6 group-hover:animate-spin" />
                <span>Explore Characters</span>
              </a>
            </button>
            
            <button 
              onClick={handlePlayVideo}
              className="group border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full font-bold text-xl hover:bg-orange-400 hover:text-black transition-all duration-300 shadow-2xl"
            >
              <div className="flex items-center space-x-2">
                <Play className="h-6 w-6 group-hover:scale-110" fill="currentColor" />
                <span>Watch Trailer</span>
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
      )}
      
      {/* Floating lightning effects - hidden when playing */}
      {!isPlaying && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-[800px] h-[800px] border-4 border-yellow-400/10 rounded-full animate-spin shadow-2xl" style={{ animationDuration: '30s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-orange-400/20 rounded-full animate-spin shadow-xl" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-yellow-300/15 rounded-full animate-spin shadow-lg" style={{ animationDuration: '15s' }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
