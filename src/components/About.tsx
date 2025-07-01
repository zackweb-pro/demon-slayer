import React from 'react';
import { Zap, Users, Sword, Heart, Shield, Star } from 'lucide-react';

interface AboutProps {
  scrollY: number;
}

const About: React.FC<AboutProps> = ({ scrollY }) => {
  return (
    <section id="about" className="relative py-20 px-4 min-h-screen">
      <div 
        className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              textShadow: '0 0 30px rgba(255, 215, 0, 0.5)'
            }}
          >
            ABOUT DEMON SLAYER
          </h2>
          <p 
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            Enter the world of Demon Slayer, where brave warriors wield breathing techniques 
            to battle demons that threaten humanity. Follow the journey of courage, friendship, 
            and determination in this epic tale of good versus evil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Zap className="h-16 w-16" />,
              title: "Breathing Techniques",
              description: "Powerful combat forms that harness the user's breathing to enhance their physical abilities and unleash devastating attacks against demons.",
              color: "from-yellow-500 to-orange-600"
            },
            {
              icon: <Users className="h-16 w-16" />,
              title: "Demon Slayer Corps",
              description: "An organization dedicated to protecting humanity from demons that emerge in the darkness, led by the elite Hashira warriors.",
              color: "from-blue-500 to-purple-600"
            },
            {
              icon: <Sword className="h-16 w-16" />,
              title: "Nichirin Blades",
              description: "Special swords forged from materials that can harm demons, changing color based on the wielder's breathing style and personality.",
              color: "from-red-500 to-pink-600"
            },
            {
              icon: <Heart className="h-16 w-16" />,
              title: "Bonds of Friendship",
              description: "The unbreakable bonds formed between demon slayers as they face impossible odds together, supporting each other through darkness.",
              color: "from-green-500 to-teal-600"
            },
            {
              icon: <Shield className="h-16 w-16" />,
              title: "Total Concentration",
              description: "Advanced breathing techniques that allow slayers to maintain their enhanced state constantly, dramatically increasing their combat effectiveness.",
              color: "from-purple-500 to-indigo-600"
            },
            {
              icon: <Star className="h-16 w-16" />,
              title: "The Hashira",
              description: "The nine strongest demon slayers who serve as the pillars of the Corps, each mastering a unique breathing style to its fullest potential.",
              color: "from-orange-500 to-red-600"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden bg-gradient-to-br ${feature.color} rounded-3xl p-8 border-2 border-white/20 hover:border-white/50 transition-all duration-500 hover:scale-105 shadow-2xl`}
              style={{ 
                transform: `translateY(${scrollY * 0.03}px)`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60" />
              <div className="relative z-10">
                <div className="text-white mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 text-center drop-shadow-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-200 leading-relaxed text-center">
                  {feature.description}
                </p>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white rounded-3xl" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <div 
            className="relative bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-3xl p-12 border-2 border-red-400/30 overflow-hidden"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80" />
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-red-400 mb-6 drop-shadow-2xl">
                "Even if I die, I'll protect them with my last breath!"
              </h3>
              <p className="text-gray-300 text-xl font-semibold">
                - The unwavering spirit of the Demon Slayer Corps
              </p>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-4 left-4">
              <Sword className="h-8 w-8 text-red-400/50 animate-pulse" />
            </div>
            <div className="absolute bottom-4 right-4">
              <Sword className="h-8 w-8 text-red-400/50 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;