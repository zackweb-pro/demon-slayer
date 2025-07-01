import React from 'react';
import { Zap, Users, Sword, Heart, Shield, Star, Flame, Wind, Moon, Sun } from 'lucide-react';

interface AboutProps {
  scrollY: number;
}

const About: React.FC<AboutProps> = ({ scrollY }) => {
  const features = [
    {
      icon: Zap,
      title: "Breathing Techniques",
      description: "Powerful combat forms that harness the user's breathing to enhance their physical abilities and unleash devastating attacks against demons.",
      gradient: "from-yellow-400 via-orange-500 to-red-600",
      shadowColor: "shadow-yellow-500/30",
      bgPattern: "from-yellow-900/20 to-orange-900/40",
      iconColor: "text-yellow-300",
      particles: [
        { delay: 0, size: "w-2 h-2", color: "bg-yellow-400" },
        { delay: 0.5, size: "w-1.5 h-1.5", color: "bg-orange-400" },
        { delay: 1, size: "w-1 h-1", color: "bg-red-400" }
      ]
    },
    {
      icon: Users,
      title: "Demon Slayer Corps",
      description: "An organization dedicated to protecting humanity from demons that emerge in the darkness, led by the elite Hashira warriors.",
      gradient: "from-blue-400 via-purple-500 to-indigo-600",
      shadowColor: "shadow-blue-500/30",
      bgPattern: "from-blue-900/20 to-purple-900/40",
      iconColor: "text-blue-300",
      particles: [
        { delay: 0.2, size: "w-2 h-2", color: "bg-blue-400" },
        { delay: 0.7, size: "w-1.5 h-1.5", color: "bg-purple-400" },
        { delay: 1.2, size: "w-1 h-1", color: "bg-indigo-400" }
      ]
    },
    {
      icon: Sword,
      title: "Nichirin Blades",
      description: "Special swords forged from materials that can harm demons, changing color based on the wielder's breathing style and personality.",
      gradient: "from-red-400 via-pink-500 to-rose-600",
      shadowColor: "shadow-red-500/30",
      bgPattern: "from-red-900/20 to-pink-900/40",
      iconColor: "text-red-300",
      particles: [
        { delay: 0.1, size: "w-2 h-2", color: "bg-red-400" },
        { delay: 0.6, size: "w-1.5 h-1.5", color: "bg-pink-400" },
        { delay: 1.1, size: "w-1 h-1", color: "bg-rose-400" }
      ]
    },
    {
      icon: Heart,
      title: "Bonds of Friendship",
      description: "The unbreakable bonds formed between demon slayers as they face impossible odds together, supporting each other through darkness.",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      shadowColor: "shadow-green-500/30",
      bgPattern: "from-green-900/20 to-emerald-900/40",
      iconColor: "text-green-300",
      particles: [
        { delay: 0.3, size: "w-2 h-2", color: "bg-green-400" },
        { delay: 0.8, size: "w-1.5 h-1.5", color: "bg-emerald-400" },
        { delay: 1.3, size: "w-1 h-1", color: "bg-teal-400" }
      ]
    },
    {
      icon: Shield,
      title: "Total Concentration",
      description: "Advanced breathing techniques that allow slayers to maintain their enhanced state constantly, dramatically increasing their combat effectiveness.",
      gradient: "from-purple-400 via-violet-500 to-indigo-600",
      shadowColor: "shadow-purple-500/30",
      bgPattern: "from-purple-900/20 to-violet-900/40",
      iconColor: "text-purple-300",
      particles: [
        { delay: 0.4, size: "w-2 h-2", color: "bg-purple-400" },
        { delay: 0.9, size: "w-1.5 h-1.5", color: "bg-violet-400" },
        { delay: 1.4, size: "w-1 h-1", color: "bg-indigo-400" }
      ]
    },
    {
      icon: Star,
      title: "The Hashira",
      description: "The nine strongest demon slayers who serve as the pillars of the Corps, each mastering a unique breathing style to its fullest potential.",
      gradient: "from-orange-400 via-amber-500 to-yellow-600",
      shadowColor: "shadow-orange-500/30",
      bgPattern: "from-orange-900/20 to-amber-900/40",
      iconColor: "text-orange-300",
      particles: [
        { delay: 0.5, size: "w-2 h-2", color: "bg-orange-400" },
        { delay: 1.0, size: "w-1.5 h-1.5", color: "bg-amber-400" },
        { delay: 1.5, size: "w-1 h-1", color: "bg-yellow-400" }
      ]
    }
  ];

  return (
    <section id="about" className="relative py-32 px-4 min-h-screen overflow-hidden">
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            {/* Decorative elements around title */}
            <div className="flex items-center justify-center mb-6 space-x-8">
              <Flame className="h-8 w-8 text-red-400 animate-pulse" />
              <Wind className="h-6 w-6 text-blue-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
              <Moon className="h-7 w-7 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
              <Sun className="h-9 w-9 text-yellow-400 animate-bounce" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <h2 className="text-7xl md:text-9xl font-black mb-6 relative">
              <span className="bg-gradient-to-r from-red-400 via-orange-500 via-yellow-400 via-green-400 via-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                ABOUT DEMON SLAYER
              </span>
              {/* Glowing shadow effect */}
              <span className="absolute inset-0 text-7xl md:text-9xl font-black blur-md bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent opacity-30 -z-10" />
              {/* Animated underline */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-red-500 via-orange-500 via-yellow-500 to-transparent rounded-full animate-pulse" />
            </h2>
          </div>
          
          <p className="text-2xl md:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-medium mb-8">
            Enter the world of <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text font-bold">Demon Slayer</span>, where brave warriors wield breathing techniques 
            to battle demons that threaten humanity. Follow the journey of courage, friendship, 
            and determination in this epic tale of good versus evil.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl border-2 border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${feature.shadowColor} shadow-2xl hover:shadow-3xl`}
              >
              
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-80`} />
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.bgPattern}`} />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/50 to-black/70" />
                
                {/* Particle effects */}
                <div className="absolute inset-0 overflow-hidden">
                  {feature.particles.map((particle, pIndex) => (
                    <div
                      key={pIndex}
                      className={`absolute ${particle.size} ${particle.color} rounded-full opacity-60 animate-ping`}
                      style={{
                        top: `${20 + pIndex * 25}%`,
                        left: `${15 + pIndex * 30}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: '3s'
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon with glow effect */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <Icon className={`h-16 w-16 ${feature.iconColor} transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`} />
                      <div className={`absolute inset-0 h-16 w-16 ${feature.iconColor} blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:via-gray-200 group-hover:to-white transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-200 leading-relaxed text-center flex-grow font-medium group-hover:text-gray-100 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                
                {/* Animated border on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/50 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="text-center ">
          <div 
            className="relative bg-gradient-to-br from-red-900/20 via-orange-900/30 to-yellow-900/20 backdrop-blur-xl rounded-3xl p-12 lg:p-16 border-2 border-red-400/20 overflow-hidden shadow-2xl"
          >
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/60 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 animate-pulse" />
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="flex justify-center space-x-4 mb-6">
                  <Sword className="h-12 w-12 text-red-400 animate-pulse" />
                  <Flame className="h-14 w-14 text-orange-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
                  <Sword className="h-12 w-12 text-red-400 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black mb-6 relative">
                  <span className="text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text">
                    "Even if I die, I'll protect them with my last breath!"
                  </span>
                  <div className="absolute inset-0 text-4xl md:text-6xl font-black blur-sm bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent opacity-40 -z-10" />
                </h3>
              </div>
              
              <p className="text-gray-300 text-xl lg:text-2xl font-bold">
                - The unwavering spirit of the <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">Demon Slayer Corps</span>
              </p>
            </div>
            
            {/* Decorative floating elements */}
            <div className="absolute top-6 left-6">
              <Star className="h-6 w-6 text-yellow-400/60 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <div className="absolute top-8 right-8">
              <Heart className="h-5 w-5 text-red-400/60 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="absolute bottom-6 left-8">
              <Shield className="h-7 w-7 text-blue-400/60 animate-bounce" style={{ animationDelay: '2s' }} />
            </div>
            <div className="absolute bottom-8 right-6">
              <Zap className="h-6 w-6 text-yellow-400/60 animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;