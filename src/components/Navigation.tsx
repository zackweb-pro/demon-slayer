import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Sword } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-red-500/30' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Zap className="h-10 w-10 text-yellow-400 animate-pulse drop-shadow-lg" />
              <div className="absolute inset-0 animate-ping">
                <Zap className="h-10 w-10 text-yellow-400/30" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
                DEMON SLAYER
              </span>
              <div className="text-xs text-gray-400 font-semibold">
                Thunder Breathing
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="group text-white hover:text-yellow-400 transition-all duration-300 font-bold text-lg relative"
            >
              <span>Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('characters')}
              className="group text-white hover:text-yellow-400 transition-all duration-300 font-bold text-lg relative"
            >
              <span>Characters</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('seasons')}
              className="group text-white hover:text-yellow-400 transition-all duration-300 font-bold text-lg relative"
            >
              <span>Seasons</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="group text-white hover:text-yellow-400 transition-all duration-300 font-bold text-lg relative"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300" />
            </button>
          </div>

          <button
            className="md:hidden text-white hover:text-yellow-400 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-500/30">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-red-600/20 transition-all duration-300 font-bold text-lg w-full text-left rounded-lg"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('characters')}
              className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-red-600/20 transition-all duration-300 font-bold text-lg w-full text-left rounded-lg"
            >
              Characters
            </button>
            <button 
              onClick={() => scrollToSection('seasons')}
              className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-red-600/20 transition-all duration-300 font-bold text-lg w-full text-left rounded-lg"
            >
              Seasons
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-4 py-3 text-white hover:text-yellow-400 hover:bg-red-600/20 transition-all duration-300 font-bold text-lg w-full text-left rounded-lg"
            >
              About
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;