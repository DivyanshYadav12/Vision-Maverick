// app/leadership/page.tsx
'use client'

import Link from 'next/link'
import LeadershipHero from './components/Hero'

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: "Vinodkumar Shetty",
      role: "Director of Strategy and Market Development",
      description: "An innovative leader responsible for analysing market trends and crafting actionable strategies.",
      expertise: ["Algorithmic Trading", "Machine Learning", "Quantitative Finance"],
      background: "15+ years in financial markets, PhD in Computational Finance"
    },
    {
      name: "Neha Priyadershini",
      role: "Director of Marketing",
      description: "As Director of Marketing, she leads the development and execution of marketing initiatives, elevating brand presence.",
      expertise: ["High-Frequency Systems", "AI/ML Infrastructure", "Cloud Architecture"],
      background: "Built trading systems handling 1M+ transactions/sec"
    },
    {
      name: "Pooja Yadav",
      role: "Director of Human Resources",
      description: "An accomplished HR leader responsible for shaping and executing people strategies.",
      expertise: ["Statistical Arbitrage", "Portfolio Optimization", "Risk Modeling"],
      background: "Published 20+ papers on algorithmic trading strategies"
    },
    {
      name: "Suman Yadav",
      role: "Director of Administration",
      description: "As Director of Administration, she oversees daily operations, manages administrative staff, and ensures efficient workflows throughout the organisation.",
      expertise: ["Regulatory Compliance", "Enterprise Risk", "Audit Systems"],
      background: "15 years at FINRA and major investment banks"
    },
  ];

  const companyStats = [
    { value: "10+", label: "Years Industry Experience (Avg)", color: "cyan" },
    { value: "25+", label: "Patents in Trading Technology", color: "emerald" },
    { value: "99.9%", label: "Platform Uptime Record", color: "purple" },
    { value: "< 1ms", label: "Team-optimized Execution", color: "cyan" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-purple-900/10 text-white">
      {/* Use the imported LeadershipHero component */}
      <LeadershipHero />
      
      {/* Leadership Grid - Fixed height consistency */}
      <section
        id="leadership-team"
        className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {leadershipTeam.map((person, index) => (
            <div 
              key={index} 
              className="bg-gray-800/60 rounded-xl border border-gray-700 
                        hover:border-cyan-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20
                        transition-all duration-500 transform-gpu group overflow-hidden relative
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-500/0 before:via-emerald-500/0 before:to-purple-500/0
                        before:hover:from-cyan-500/5 before:hover:via-emerald-500/5 before:hover:to-purple-500/5
                        before:transition-all before:duration-500 before:-z-10 backdrop-blur-sm
                        flex flex-col h-full"
            >
              <div className="p-8 relative z-10 flex-grow">
                {/* Avatar Circle */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full 
                              bg-gradient-to-r from-cyan-500 to-emerald-500 
                              flex items-center justify-center shadow-lg
                              group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-cyan-500/50
                              group-hover:from-cyan-400 group-hover:to-emerald-400
                              transition-all duration-500 transform-gpu">
                  <span className="text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {getInitials(person.name)}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-center mb-2 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-cyan-400 font-semibold text-center mb-6 group-hover:text-emerald-300 transition-colors duration-300">
                  {person.role}
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 min-h-[72px]">
                  {person.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-gray-100 mb-3 group-hover:text-white transition-colors duration-300">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {person.expertise.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gray-900/70 text-cyan-300 rounded-full text-sm font-medium border border-gray-700
                                 group-hover:bg-cyan-900/50 group-hover:scale-105 group-hover:text-white
                                 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 mt-auto">
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {person.background}
                  </p>
                </div>
              </div>
              
              {/* Contact Button - Now at consistent height */}
              <div className="px-8 py-6 bg-gray-900/50 border-t border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 mt-auto">
                <button className="w-full py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 
                                 hover:from-cyan-500 hover:to-emerald-500 hover:scale-105
                                 text-white font-semibold rounded-lg transition-all duration-300 
                                 group-hover:shadow-xl group-hover:shadow-cyan-500/30
                                 relative overflow-hidden
                                 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:to-white/0
                                 before:hover:from-white/10 before:hover:to-white/10
                                 before:transition-all before:duration-300">
                  <span className="relative z-10">
                    Contact {getFirstName(person.name)}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/80 to-black/80">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 hover:scale-105 transition-transform duration-300 inline-block cursor-default">
            Leadership Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div 
                key={index} 
                className="p-8 bg-gray-800/40 rounded-xl border border-gray-700 
                          hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10
                          transition-all duration-500 transform-gpu group backdrop-blur-sm"
              >
                <div className={`text-4xl md:text-5xl font-bold text-${stat.color}-400 mb-3 
                               group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 hover:scale-105 transition-transform duration-300 inline-block cursor-default">
          Our Leadership Philosophy
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Innovation First",
              description: "Continuously pushing boundaries in AI and quantitative research to maintain our competitive edge in fast-evolving markets."
            },
            {
              number: "02",
              title: "Risk-Aware Growth",
              description: "Building sustainable technology with enterprise-grade security and compliance as foundational principles, not afterthoughts."
            },
            {
              number: "03", 
              title: "Team Excellence",
              description: "Cultivating a culture of continuous learning, collaboration, and excellence where the best minds can thrive and innovate."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="p-8 bg-gray-800/40 rounded-xl border border-gray-700 
                        hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10
                        transition-all duration-500 transform-gpu group
                        hover:bg-gradient-to-br hover:from-gray-800/60 hover:to-gray-900/60 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-cyan-500 mb-4 
                             group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
                {item.number}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Culture Section */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 hover:scale-105 transition-transform duration-300 inline-block cursor-default">
            Leadership Culture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Strategic Vision",
                description: "Setting clear direction while adapting to market dynamics"
              },
              {
                icon: "🤝",
                title: "Collaborative Leadership",
                description: "Empowering teams while maintaining accountability"
              },
              {
                icon: "🚀",
                title: "Future-Focused",
                description: "Anticipating trends and investing in innovation"
              }
            ].map((culture, index) => (
              <div 
                key={index}
                className="p-8 bg-gray-800/40 rounded-xl border border-gray-700 
                          hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10
                          transition-all duration-500 transform-gpu group backdrop-blur-sm"
              >
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {culture.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {culture.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {culture.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300 inline-block cursor-default">
            Join Our Vision
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Work with industry leaders to build the future of algorithmic trading.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/careers"
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 
                       hover:from-cyan-500 hover:to-emerald-500 hover:scale-105
                       text-white font-semibold rounded-lg transition-all duration-300 
                       shadow-lg hover:shadow-cyan-500/30
                       relative overflow-hidden group
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:to-white/0
                       before:hover:from-white/10 before:hover:to-white/10
                       before:transition-all before:duration-300 block text-center"
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                View Open Positions
              </span>
            </Link>
            
            <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 
                             hover:bg-cyan-500 hover:text-black hover:scale-105
                             text-cyan-400 font-semibold rounded-lg transition-all duration-300
                             relative overflow-hidden group
                             before:absolute before:inset-0 before:bg-cyan-500/0
                             before:hover:bg-cyan-500 before:transition-all before:duration-300">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Contact Leadership
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// Helper functions
function getInitials(fullName: string): string {
  const names = fullName.split(' ');
  
  if (names.length === 1) {
    return fullName.substring(0, 2).toUpperCase();
  } else if (names.length === 2) {
    return (names[0][0] + names[1][0]).toUpperCase();
  } else {
    return (names[0][0] + names[names.length - 1][0]).toUpperCase();
  }
}

function getFirstName(fullName: string): string {
  return fullName.split(' ')[0];
}