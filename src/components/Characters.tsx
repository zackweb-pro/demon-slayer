import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import { charactersData } from '../data/characters';

interface CharactersProps {
  scrollY: number;
}

const Characters: React.FC<CharactersProps> = ({ scrollY }) => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.character-card');
      const newVisibleCards: number[] = [];
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          newVisibleCards.push(index);
        }
      });
      
      setVisibleCards(newVisibleCards);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="characters" className="relative py-20 px-4 min-h-screen">
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl"
          >
            DEMON SLAYERS
          </h2>
          <p 
            className="text-2xl md:text-3xl text-gray-300 font-semibold max-w-3xl mx-auto"
          >
            Meet the legendary warriors who fight against the forces of darkness
          </p>
        </div>

        {/* Character grid */}
        <div id='characters' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {charactersData.map((character, index) => {
            // Determine if this is a center card (middle column in 3-column layout)
            const isCenterCard = (index % 3 === 1);

            return (
              <div
                key={character.id}
                className={`transition-transform duration-300 ${
                  isCenterCard ? 'lg:-mt-12' : ''
                }`}
              >
                <CharacterCard
                  character={character}
                  index={index}
                  isVisible={visibleCards.includes(index)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Characters;