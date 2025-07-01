import React from 'react';
import { Play, Calendar, Users, Sword, Star, Flame, Zap } from 'lucide-react';
import season1 from '../assets/season1.jpeg';
import season2 from '../assets/season2.jpeg';
import season3 from '../assets/season3.jpeg';
import season4 from '../assets/season4.jpeg';

interface SeasonsProps {
  scrollY: number;
}

const Seasons: React.FC<SeasonsProps> = ({ scrollY }) => {
  const seasons = [
    {
      id: 1,
      title: "Season 1: Unwavering Resolve",
      episodes: 26,
      year: "2019",
      image: season1,
      summary: "Tanjiro Kamado's family is slaughtered by demons, with only his sister Nezuko surviving but transformed into a demon. He joins the Demon Slayer Corps to find a cure for Nezuko and avenge his family. Along the way, he meets Zenitsu and Inosuke, forming an unbreakable bond.",
      highlights: [
        "Tanjiro's tragic backstory and motivation",
        "Introduction to Water Breathing techniques",
        "Meeting Zenitsu and Inosuke",
        "Final Selection and becoming a Demon Slayer"
      ],
      color: "from-blue-600 via-cyan-600 to-teal-700",
      accent: "from-blue-400 to-cyan-400",
      icon: Flame,
      rating: 9.2
    },
    {
      id: 2,
      title: "Season 2: Entertainment District Arc",
      episodes: 11,
      year: "2021",
      image: season2,
      summary: "The trio infiltrates the Entertainment District alongside the Sound Hashira Tengen Uzui to investigate demon activity. They face off against Upper Moon Six demons Daki and Gyutaro in an intense battle that pushes everyone to their limits.",
      highlights: [
        "Tengen Uzui's flashy fighting style",
        "Zenitsu's Thunder Breathing mastery",
        "Tanjiro's Hinokami Kagura awakening",
        "Epic battle against Upper Moon Six"
      ],
      color: "from-purple-600 via-fuchsia-600 to-pink-700",
      accent: "from-purple-400 to-pink-400",
      icon: Zap,
      rating: 9.5
    },
    {
      id: 3,
      title: "Season 3: Swordsmith Village Arc",
      episodes: 11,
      year: "2023",
      image: season3,
      summary: "Tanjiro visits the Swordsmith Village to get his sword repaired and encounters Upper Moon Four and Five demons. The Mist Hashira Muichiro and Love Hashira Mitsuri join the battle in this action-packed arc that reveals more about the demon hierarchy.",
      highlights: [
        "Introduction to Mist and Love Hashira",
        "Upper Moon Four Hantengu's multiple forms",
        "Upper Moon Five Gyokko's twisted artistry",
        "Nezuko's sunlight immunity revelation"
      ],
      color: "from-emerald-600 via-green-600 to-teal-700",
      accent: "from-emerald-400 to-green-400",
      icon: Star,
      rating: 9.1
    },
    {
      id: 4,
      title: "Season 4: Hashira Training Arc",
      episodes: 8,
      year: "2024",
      image: season4,
      summary: "The Demon Slayer Corps prepares for the final battle against Muzan. All Hashira train the lower-ranked slayers, including Tanjiro, Zenitsu, and Inosuke, to strengthen them for the upcoming war. Each Hashira's unique training methods push the protagonists beyond their limits.",
      highlights: [
        "Intensive training with all nine Hashira",
        "Character development and backstories",
        "Preparation for the final confrontation",
        "Strengthening bonds between characters"
      ],
      color: "from-red-600 via-orange-600 to-amber-700",
      accent: "from-red-400 to-orange-400",
      icon: Sword,
      rating: 8.9
    }
  ];

  return (
    <section id="seasons" className="relative py-24 px-4 min-h-screen ">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 via-orange-900/5 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.03}px) rotate(${scrollY * 0.01}deg)` }}
        />
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div 
          className="absolute bottom-0 -left-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div 
            className="inline-block mb-8"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h2 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-red-400 via-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent relative">
              SEASON GUIDE
              <div className="absolute inset-0 text-7xl md:text-9xl font-black blur-sm bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent opacity-50 -z-10" />
            </h2>
            <div className="h-2 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full opacity-60" />
          </div>
          <p 
            className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            Experience the epic journey through every breathtaking arc of Demon Slayer
          </p>
        </div>

        {/* Seasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {seasons.map((season, index) => {
            const Icon = season.icon;
            return (
              <div 
                key={season.id}
                className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-105 hover:-rotate-1 hover:shadow-red-500/20"
                style={{ 
                  transform: `translateY(${scrollY * (0.02 + index * 0.01)}px)`,
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${season.color} opacity-90`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                
                {/* Season Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={season.image}
                    alt={season.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Image Overlay Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${season.color} mix-blend-overlay opacity-60`} />
                  
                  {/* Floating Season Number */}
                  <div className="absolute top-6 left-6">
                    <div className={`bg-gradient-to-r ${season.accent} text-black rounded-2xl px-6 py-3 shadow-xl transform rotate-3 group-hover:rotate-0 transition-transform duration-300`}>
                      <span className="text-2xl font-black">S{season.id}</span>
                    </div>
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6">
                    <div className="bg-black/70 backdrop-blur-sm rounded-xl px-3 py-2 flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-bold text-sm">{season.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="relative p-8 space-y-6">
                  {/* Title and Meta */}
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <Icon className={`h-6 w-6 bg-gradient-to-r ${season.accent} bg-clip-text text-transparent`} />
                      <h3 className="text-2xl lg:text-3xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                        {season.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-gray-300">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold">{season.year}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Play className="h-4 w-4 text-gray-400" />
                        <span className="font-semibold">{season.episodes} Episodes</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-gray-200 leading-relaxed text-lg font-medium">
                    {season.summary}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className={`text-transparent bg-gradient-to-r ${season.accent} bg-clip-text font-black text-lg mb-4 flex items-center`}>
                      <Sword className="h-5 w-5 mr-3 text-yellow-400" />
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {season.highlights.map((highlight, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-start space-x-3 text-gray-300 group-hover:text-white transition-colors duration-300"
                        >
                          <div 
                            className={`w-3 h-3 bg-gradient-to-r ${season.accent} rounded-full flex-shrink-0 mt-1.5 shadow-lg`} 
                          />
                          <span className="font-medium leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Animated border on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${season.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} 
                       style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-transparent rounded-3xl" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default Seasons;