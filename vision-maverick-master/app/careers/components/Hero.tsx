// app/careers/components/Hero.tsx
'use client'

export default function CareersHero() {
  const scrollToPositions = () => {
    const positionsSection = document.getElementById('open-positions');
    if (positionsSection) {
      positionsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 px-6 max-w-7xl mx-auto text-center">
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Build the Future of 
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Algorithmic Trading
            </span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Join our elite team of quants, engineers, and innovators who are 
          <span className="text-cyan-300 font-medium"> revolutionizing financial markets </span>
          with cutting-edge technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {/* Updated button with scroll functionality */}
          <button 
            onClick={scrollToPositions}
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 
                     hover:from-cyan-500 hover:to-emerald-500 hover:scale-105
                     text-white font-semibold rounded-xl transition-all duration-300 
                     shadow-xl hover:shadow-cyan-500/30 group cursor-pointer"
          >
            <span className="relative flex items-center justify-center gap-2">
              View Open Positions
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 bg-gray-900/50 backdrop-blur-sm border-2 border-cyan-500/30 
                         hover:border-cyan-500 hover:bg-cyan-500/10 hover:scale-105
                         text-cyan-400 font-semibold rounded-xl transition-all duration-300 group">
            <span className="relative flex items-center justify-center gap-2">
              Our Culture
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { 
              value: "15+", 
              label: "Open Positions", 
              description: "Across 6 departments",
              gradient: "from-cyan-500 to-cyan-600"
            },
            { 
              value: "$250K+", 
              label: "Average Salary", 
              description: "Top 1% compensation",
              gradient: "from-emerald-500 to-emerald-600"
            },
            { 
              value: "90%", 
              label: "Remote Team", 
              description: "Work from anywhere",
              gradient: "from-purple-500 to-purple-600"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 
                        hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10
                        transition-all duration-500 transform-gpu overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 
                              group-hover:scale-110 transition-transform duration-300 inline-block`}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-500/20 transition-all duration-700"></div>
            </div>
          ))}
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <div className="w-6 h-10 mx-auto border-2 border-cyan-500/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2"></div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Scroll to explore positions</p>
        </div>

        {/* Mobile hint */}
        <div className="mt-8 lg:hidden">
          <p className="text-sm text-gray-400">
            👆 Tap "View Open Positions" to jump to available roles
          </p>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-emerald-400/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 bg-purple-400/10 rounded-full animate-bounce"></div>
    </section>
  );
}