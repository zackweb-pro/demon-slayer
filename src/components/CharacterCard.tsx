import React, { useState } from 'react';
import { Zap, Heart, Shield, Sword, Star } from 'lucide-react';

interface Character {
  id: string;
  name: string;
  breathingStyle: string;
  rank: string;
  description: string;
  personality: string;
  abilities: string[];
  image: string;
  color: string;
  accentColor: string;
}

interface CharacterCardProps {
  character: Character;
  index: number;
  isVisible: boolean;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, index, isVisible }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const getIcon = (ability: string) => {
    if (ability.toLowerCase().includes('thunder') || ability.toLowerCase().includes('lightning')) {
      return <Zap className="h-5 w-5" />;
    }
    if (ability.toLowerCase().includes('water') || ability.toLowerCase().includes('flow')) {
      return <Shield className="h-5 w-5" />;
    }
    if (ability.toLowerCase().includes('flame') || ability.toLowerCase().includes('fire')) {
      return <Heart className="h-5 w-5" />;
    }
    return <Sword className="h-5 w-5" />;
  };

  return (
    <div 
      className={`character-card relative group cursor-pointer transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      style={{ 
        transitionDelay: `${index * 0.2}s`,
        perspective: '1000px'
      }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-[500px] transition-transform duration-700 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl border-2 transition-all duration-300 ${character.accentColor} group-hover:scale-105 group-hover:shadow-3xl`}
        >
          {/* Character image */}
          <div className="relative h-3/5 overflow-hidden">
            <img 
              src={character.image}
              alt={character.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80`} />
            
            {/* Rank badge */}
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 border border-yellow-400">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-yellow-400 text-sm font-bold">{character.rank}</span>
              </div>
            </div>
          </div>
          
          {/* Character info */}
          <div className={`h-2/5 p-6 ${character.color} relative`}>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">{character.name}</h3>
                <p className="text-yellow-300 font-bold text-lg mb-2">{character.breathingStyle}</p>
                <p className="text-gray-200 text-sm leading-relaxed line-clamp-3">
                  {character.description}
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-xs text-yellow-300 font-bold bg-black/30 rounded-full px-3 py-1 inline-block">
                  Click to reveal abilities
                </div>
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute top-4 left-4">
            <Zap className="h-8 w-8 text-yellow-400 animate-pulse drop-shadow-lg" />
          </div>
        </div>

        {/* Back of card */}
        <div 
          className={`absolute inset-0 backface-hidden rounded-3xl p-6 shadow-2xl border-2 rotate-y-180 ${character.color} ${character.accentColor}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80 rounded-3xl" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-black text-white mb-3 drop-shadow-lg">{character.name}</h3>
              <h4 className="text-xl font-bold text-yellow-300 mb-4">Personality</h4>
              <p className="text-gray-200 text-sm leading-relaxed">
                {character.personality}
              </p>
            </div>
            
            <div className="flex-1">
              <h4 className="text-lg font-bold text-yellow-300 mb-4 flex items-center">
                <Sword className="h-5 w-5 mr-2" />
                Combat Abilities
              </h4>
              <div className="space-y-3">
                {character.abilities.map((ability, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-gray-200 text-sm bg-black/30 rounded-lg p-2">
                    <div className="text-yellow-400">
                      {getIcon(ability)}
                    </div>
                    <span className="font-medium">{ability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center mt-4">
              <div className="text-xs text-yellow-300 font-bold bg-black/30 rounded-full px-3 py-1 inline-block">
                Click to flip back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;