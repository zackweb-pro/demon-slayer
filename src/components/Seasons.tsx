import React from 'react';
import { Play, Calendar, Users, Sword } from 'lucide-react';

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
      image: "https://images.pexels.com/photos/7862492/pexels-photo-7862492.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      summary: "Tanjiro Kamado's family is slaughtered by demons, with only his sister Nezuko surviving but transformed into a demon. He joins the Demon Slayer Corps to find a cure for Nezuko and avenge his family. Along the way, he meets Zenitsu and Inosuke, forming an unbreakable bond.",
      highlights: [
        "Tanjiro's tragic backstory and motivation",
        "Introduction to Water Breathing techniques",
        "Meeting Zenitsu and Inosuke",
        "Final Selection and becoming a Demon Slayer"
      ],
      color: "from-blue-600 to-cyan-700"
    },
    {
      id: 2,
      title: "Season 2: Entertainment District Arc",
      episodes: 11,
      year: "2021",
      image: "https://images.pexels.com/photos/7862495/pexels-photo-7862495.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      summary: "The trio infiltrates the Entertainment District alongside the Sound Hashira Tengen Uzui to investigate demon activity. They face off against Upper Moon Six demons Daki and Gyutaro in an intense battle that pushes everyone to their limits.",
      highlights: [
        "Tengen Uzui's flashy fighting style",
        "Zenitsu's Thunder Breathing mastery",
        "Tanjiro's Hinokami Kagura awakening",
        "Epic battle against Upper Moon Six"
      ],
      color: "from-purple-600 to-pink-700"
    },
    {
      id: 3,
      title: "Season 3: Swordsmith Village Arc",
      episodes: 11,
      year: "2023",
      image: "https://images.pexels.com/photos/7862498/pexels-photo-7862498.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      summary: "Tanjiro visits the Swordsmith Village to get his sword repaired and encounters Upper Moon Four and Five demons. The Mist Hashira Muichiro and Love Hashira Mitsuri join the battle in this action-packed arc that reveals more about the demon hierarchy.",
      highlights: [
        "Introduction to Mist and Love Hashira",
        "Upper Moon Four Hantengu's multiple forms",
        "Upper Moon Five Gyokko's twisted artistry",
        "Nezuko's sunlight immunity revelation"
      ],
      color: "from-green-600 to-teal-700"
    },
    {
      id: 4,
      title: "Season 4: Hashira Training Arc",
      episodes: 8,
      year: "2024",
      image: "https://images.pexels.com/photos/7862501/pexels-photo-7862501.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      summary: "The Demon Slayer Corps prepares for the final battle against Muzan. All Hashira train the lower-ranked slayers, including Tanjiro, Zenitsu, and Inosuke, to strengthen them for the upcoming war. Each Hashira's unique training methods push the protagonists beyond their limits.",
      highlights: [
        "Intensive training with all nine Hashira",
        "Character development and backstories",
        "Preparation for the final confrontation",
        "Strengthening bonds between characters"
      ],
      color: "from-red-600 to-orange-700"
    }
  ];

  return (
    <section id="seasons" className="relative py-20 px-4 min-h-screen">
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/20 to-transparent"
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl"
            style={{ 
              transform: `translateY(${scrollY * 0.1}px)`,
              textShadow: '0 0 30px rgba(255, 100, 100, 0.5)'
            }}
          >
            SEASON GUIDE
          </h2>
          <p 
            className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            Catch up on the epic journey through all seasons of Demon Slayer
          </p>
        </div>

        <div className="space-y-12">
          {seasons.map((season, index) => (
            <div 
              key={season.id}
              className={`group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
              style={{ 
                transform: `translateY(${scrollY * 0.02}px)`,
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Season image */}
              <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
                <img 
                  src={season.image}
                  alt={season.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-2xl transform hover:scale-110 transition-all duration-300">
                    <Play className="h-8 w-8 ml-1" />
                  </button>
                </div>
              </div>

              {/* Season content */}
              <div className={`lg:w-1/2 p-8 bg-gradient-to-br ${season.color} relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/80" />
                <div className="relative z-10">
                  {/* Season header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                        {season.id}
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-white">{season.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-300 text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{season.year}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Play className="h-4 w-4" />
                            <span>{season.episodes} Episodes</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Season summary */}
                  <p className="text-gray-200 leading-relaxed mb-6">
                    {season.summary}
                  </p>

                  {/* Key highlights */}
                  <div>
                    <h4 className="text-yellow-300 font-bold mb-3 flex items-center">
                      <Sword className="h-5 w-5 mr-2" />
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {season.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-gray-300 text-sm">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Watch button */}
                  <div className="mt-6">
                    <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-lg">
                      Watch Season {season.id}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seasons;