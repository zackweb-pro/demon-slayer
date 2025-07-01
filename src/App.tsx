import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Characters from './components/Characters';
import Seasons from './components/Seasons';
import About from './components/About';
import Navigation from './components/Navigation';
import ParallaxBackground from './components/ParallaxBackground';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ParallaxBackground scrollY={scrollY} />
      <Navigation />
      <main className="relative z-10">
        <Hero scrollY={scrollY} />
        <Characters scrollY={scrollY} />
        <Seasons scrollY={scrollY} />
        <About scrollY={scrollY} />
      </main>
    </div>
  );
}

export default App;