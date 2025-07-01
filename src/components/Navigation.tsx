import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, Sword, Flame, Wind, Star, Shield, Heart } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section based on scroll position
      const sections = ['hero', 'characters', 'seasons', 'about'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
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

  const navItems = [
    { 
      id: 'hero', 
      label: 'Home', 
      icon: Flame,
      gradient: 'from-red-400 to-orange-500',
      glow: 'shadow-red-500/50'
    },
    { 
      id: 'characters', 
      label: 'Characters', 
      icon: Sword,
      gradient: 'from-blue-400 to-purple-500',
      glow: 'shadow-blue-500/50'
    },
    { 
      id: 'seasons', 
      label: 'Seasons', 
      icon: Star,
      gradient: 'from-green-400 to-teal-500',
      glow: 'shadow-green-500/50'
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: Heart,
      gradient: 'from-purple-400 to-pink-500',
      glow: 'shadow-purple-500/50'
    }
  ];

  return (
    <>
      {/* Floating particles background */}
      <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none overflow-hidden h-24">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${
              i % 4 === 0 ? 'from-red-400 to-orange-400' :
              i % 4 === 1 ? 'from-blue-400 to-purple-400' :
              i % 4 === 2 ? 'from-green-400 to-teal-400' :
              'from-purple-400 to-pink-400'
            } rounded-full animate-ping opacity-60`}
            style={{
              left: `${10 + i * 7}%`,
              top: `${15 + Math.sin(i) * 10}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i * 0.2}s`
            }}
          />
        ))}
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gradient-to-r from-black/95 via-red-900/20 to-black/95 backdrop-blur-xl shadow-2xl border-b-2 border-gradient-to-r border-red-500/40' 
          : 'bg-gradient-to-r from-transparent via-black/10 to-transparent backdrop-blur-sm'
      }`}>
        {/* Animated top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-transparent animate-pulse" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Epic Logo Section */}
            <div className="flex items-center space-x-4 group cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative transform group-hover:scale-110 transition-transform duration-300">
                {/* Main lightning bolt */}
                <Zap className="h-12 w-12 text-yellow-400 drop-shadow-2xl relative z-10" />
                
                {/* Pulsing rings */}
                <div className="absolute inset-0 -m-2">
                  <div className="w-16 h-16 border-2 border-yellow-400/30 rounded-full animate-ping" />
                </div>
                <div className="absolute inset-0 -m-1">
                  <div className="w-14 h-14 border border-orange-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                
                {/* Floating mini elements */}
                <Wind className="absolute -top-2 -right-2 h-3 w-3 text-blue-400 animate-bounce" style={{ animationDelay: '1s' }} />
                <Shield className="absolute -bottom-1 -left-2 h-3 w-3 text-red-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
              </div>
              
              <div className="group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                <div className="text-3xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                  DEMON SLAYER
                </div>
                <div className="text-xs bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold tracking-wider animate-pulse" style={{ animationDelay: '0.5s' }}>
                  ⚡ THUNDER BREATHING ⚡
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative px-6 py-3 rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 ${
                      isActive 
                        ? `bg-gradient-to-r ${item.gradient} text-black shadow-2xl ${item.glow} scale-105`
                        : 'text-white hover:text-black hover:bg-gradient-to-r hover:from-white/90 hover:to-gray-100/90'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 0.1}s`,
                      filter: isActive ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' : 'none'
                    }}
                  >
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300 ${
                        isActive ? 'animate-pulse' : ''
                      }`} />
                      <span className="font-black text-lg tracking-wide">{item.label}</span>
                    </div>
                    
                    {/* Animated underline for active state */}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full animate-pulse" />
                    )}
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                  </button>
                );
              })}
              
              {/* Epic CTA Button */}
              {/* <div className="ml-4">
                <button className="relative px-6 py-3 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white font-black rounded-2xl shadow-2xl hover:shadow-red-500/50 transform hover:scale-110 hover:rotate-1 transition-all duration-300 group overflow-hidden">
                  <span className="relative z-10 flex items-center space-x-2">
                    <Sword className="h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                    <span>JOIN CORPS</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                </button>
              </div> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative text-white hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="relative">
                {isMobileMenuOpen ? 
                  <X className="h-8 w-8 animate-spin" /> : 
                  <Menu className="h-8 w-8 animate-pulse" />
                }
                <div className="absolute inset-0 -m-2 border-2 border-yellow-400/30 rounded-full animate-ping" />
              </div>
            </button>
          </div>
        </div>

        {/* Epic Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-black/98 via-red-900/30 to-black/98 backdrop-blur-xl border-t-2 border-gradient-to-r border-red-500/40 animate-slide-down">
            {/* Mobile menu particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-gradient-to-r ${
                    i % 2 === 0 ? 'from-red-400 to-orange-400' : 'from-blue-400 to-purple-400'
                  } rounded-full animate-ping opacity-40`}
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${10 + i * 15}%`,
                    animationDelay: `${i * 0.4}s`,
                    animationDuration: '3s'
                  }}
                />
              ))}
            </div>
            
            <div className="relative z-10 px-4 pt-6 pb-8 space-y-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group flex items-center space-x-4 w-full px-6 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:translate-x-2 ${
                      isActive
                        ? `bg-gradient-to-r ${item.gradient} text-black shadow-2xl ${item.glow}`
                        : 'text-white hover:bg-gradient-to-r hover:from-white/10 hover:to-gray-100/10 hover:text-yellow-400'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 0.1}s`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="relative">
                      <Icon className={`h-6 w-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 ${
                        isActive ? 'animate-pulse' : ''
                      }`} />
                      {isActive && (
                        <div className="absolute -inset-2 border-2 border-white/50 rounded-full animate-ping" />
                      )}
                    </div>
                    <span className="font-black text-xl tracking-wide group-hover:tracking-wider transition-all duration-300">
                      {item.label}
                    </span>
                    
                    {/* Mobile active indicator */}
                    {isActive && (
                      <div className="ml-auto">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      </div>
                    )}
                  </button>
                );
              })}
              
              {/* Mobile CTA */}
              {/* <div className="pt-4 border-t border-white/20">
                <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white font-black rounded-2xl shadow-2xl hover:shadow-red-500/50 transform hover:scale-105 transition-all duration-300 group">
                  <Sword className="h-6 w-6 group-hover:rotate-45 transition-transform duration-300" />
                  <span className="text-xl">JOIN THE CORPS</span>
                  <Flame className="h-6 w-6 group-hover:animate-bounce" />
                </button>
              </div> */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;