// app/leadership/components/Hero.tsx
'use client'

export default function LeadershipHero() {
  const scrollToLeaders = () => {
    const leadersSection = document.getElementById('leadership-team');
    if (leadersSection) {
      leadersSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-purple-900/20">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>
      
      <div className="relative z-10 px-6 max-w-7xl mx-auto text-center">        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
          Meet the Minds
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Shaping Finance
            </span>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Led by visionaries who have 
          <span className="text-purple-300 font-medium"> redefined quantitative finance</span>, 
          our leadership team brings decades of experience from Wall Street, Silicon Valley, and academia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {/* Updated button with scroll functionality */}
          <button 
            onClick={scrollToLeaders}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 
                     hover:from-purple-500 hover:to-pink-500 hover:scale-105
                     text-white font-semibold rounded-xl transition-all duration-300 
                     shadow-xl hover:shadow-purple-500/30 group cursor-pointer"
          >
            <span className="relative flex items-center justify-center gap-2">
              Meet Our Leaders
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
          <button className="px-8 py-4 bg-gray-900/50 backdrop-blur-sm border-2 border-purple-500/30 
                         hover:border-purple-500 hover:bg-purple-500/10 hover:scale-105
                         text-purple-400 font-semibold rounded-xl transition-all duration-300 group">
            <span className="relative flex items-center justify-center gap-2">
              Our Vision
              <svg className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Leadership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { 
              value: "25+", 
              label: "Years Experience", 
              icon: "🎯",
              color: "purple"
            },
            { 
              value: "PhD", 
              label: "Average Education", 
              icon: "🎓",
              color: "cyan"
            },
            { 
              value: "$10B+", 
              label: "Assets Managed", 
              icon: "📈",
              color: "emerald"
            },
            { 
              value: "15", 
              label: "Patents Filed", 
              icon: "💡",
              color: "pink"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 
                        hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10
                        transition-all duration-500 transform-gpu"
            >
              <div className="relative z-10">
                <div className={`text-3xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
              </div>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-3/4 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Quote */}
        <div className="mt-16 max-w-3xl mx-auto p-8 bg-gradient-to-r from-gray-900/50 to-purple-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
          <svg className="w-10 h-10 text-purple-500/50 mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          <p className="text-xl italic text-gray-300 mb-4">
            "We don't predict the future – we build it with algorithms that learn, adapt, and outperform."
          </p>
          <div className="text-purple-400 font-medium">— Vision Maverick Leadership</div>
        </div>

        {/* Scroll hint for mobile */}
        <div className="mt-12 lg:hidden">
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm text-gray-400 mt-2">Tap above to meet our leaders</p>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-32 w-5 h-5 bg-cyan-400/20 rounded-full animate-pulse delay-300"></div>
    </section>
  );
}