// app/careers/page.tsx

'use client'

import { useState, useMemo } from 'react'
import CareersHero from './components/Hero'

type JobPosition = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  salary: string;
}

type ExpandedState = {
  [key: number]: boolean;
}

export default function CareersPage() {
  const [filters, setFilters] = useState({
    department: 'All',
    location: 'All',
    type: 'All',
    search: ''
  })

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [expandedJobs, setExpandedJobs] = useState<ExpandedState>({})

  const openPositions: JobPosition[] = [
    {
      id: 1,
      title: "Senior Quantitative Developer",
      department: "Trading & Research",
      location: "New York / Remote",
      type: "Full-time",
      description: "Build and optimize high-frequency trading algorithms using machine learning and statistical models.",
      requirements: ["PhD/MS in CS/Mathematics", "5+ years in quantitative finance", "Expert in Python/C++", "Experience with ML libraries"],
      salary: "$250,000 - $400,000"
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      department: "AI Research",
      location: "San Francisco / Remote",
      type: "Full-time",
      description: "Develop and deploy ML models for market prediction, signal generation, and risk assessment.",
      requirements: ["Strong background in deep learning", "Experience with PyTorch/TensorFlow", "Knowledge of financial markets", "3+ years ML experience"],
      salary: "$200,000 - $350,000"
    },
    {
      id: 3,
      title: "Frontend Engineer",
      department: "Platform Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Build responsive, high-performance trading interfaces using Next.js, React, and TypeScript.",
      requirements: ["3+ years React/Next.js", "TypeScript expertise", "Tailwind CSS", "WebSocket/real-time experience"],
      salary: "$150,000 - $250,000"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "London / Remote",
      type: "Full-time",
      description: "Maintain and scale our low-latency trading infrastructure with 99.99% uptime requirements.",
      requirements: ["AWS/GCP expertise", "Kubernetes/Docker", "CI/CD pipelines", "Monitoring/alerting systems"],
      salary: "$180,000 - $280,000"
    },
    {
      id: 5,
      title: "Security Engineer",
      department: "Security & Compliance",
      location: "Remote",
      type: "Full-time",
      description: "Ensure platform security, conduct audits, and maintain SOC 2/ISO 27001 compliance.",
      requirements: ["Cybersecurity background", "Financial regulations knowledge", "Penetration testing", "3+ years security experience"],
      salary: "$170,000 - $260,000"
    },
    {
      id: 6,
      title: "Product Manager",
      department: "Product",
      location: "New York",
      type: "Full-time",
      description: "Define product strategy and roadmap for our algorithmic trading platform.",
      requirements: ["5+ years fintech PM experience", "Quantitative background", "API product experience", "Strong analytics skills"],
      salary: "$200,000 - $300,000"
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Top-of-market salaries, equity packages, and performance bonuses"
    },
    {
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and co-working stipends"
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, vision, and mental health coverage"
    },
    {
      title: "Learning & Development",
      description: "$5,000 annual education budget and conference attendance"
    },
    {
      title: "Cutting-Edge Technology",
      description: "Latest hardware, software licenses, and cloud credits"
    },
    {
      title: "Team Retreats",
      description: "Quarterly offsites in global locations for collaboration"
    }
  ];

  // Extract unique filter options
  const departments = ['All', ...new Set(openPositions.map(job => job.department))];
  const locations = ['All', ...new Set(openPositions.map(job => job.location))];
  const types = ['All', ...new Set(openPositions.map(job => job.type))];

  // Filter jobs based on selected filters
  const filteredPositions = useMemo(() => {
    return openPositions.filter(position => {
      // Department filter
      if (filters.department !== 'All' && position.department !== filters.department) {
        return false;
      }
      
      // Location filter
      if (filters.location !== 'All' && position.location !== filters.location) {
        return false;
      }
      
      // Type filter
      if (filters.type !== 'All' && position.type !== filters.type) {
        return false;
      }
      
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const jobText = `
          ${position.title.toLowerCase()}
          ${position.department.toLowerCase()}
          ${position.description.toLowerCase()}
          ${position.requirements.join(' ').toLowerCase()}
        `;
        
        return jobText.includes(searchTerm);
      }
      
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      department: 'All',
      location: 'All',
      type: 'All',
      search: ''
    });
  };

  const toggleJobExpansion = (jobId: number) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  const hasActiveFilters = filters.department !== 'All' || 
                          filters.location !== 'All' || 
                          filters.type !== 'All' || 
                          filters.search !== '';

  const hasExpandedJobs = Object.values(expandedJobs).some(value => value);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <CareersHero />
      
      {/* Filter Toggle and Content Area */}
      <div id="open-positions" className="py-10 px-6 max-w-6xl mx-auto">
        {/* Top Bar with Filter Toggle and Results Count */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Open Positions
              <span className="text-cyan-400 ml-2">({filteredPositions.length})</span>
            </h2>
            <p className="text-gray-400 mt-1">
              {hasActiveFilters ? 'Filtered results' : 'All available positions'}
            </p>
          </div>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Filter Toggle Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2.5 bg-gray-800 hover:bg-gray-700 
                       text-gray-300 hover:text-white rounded-lg border border-gray-700 
                       transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              <span>{isFilterOpen ? 'Hide Filters' : 'Show Filters'}</span>
            </button>

            {/* Clear Filters Button */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-2.5 bg-cyan-900/30 hover:bg-cyan-900/50 
                         text-cyan-300 hover:text-cyan-200 rounded-lg border border-cyan-700/30 
                         transition-colors duration-300"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="mb-8 p-6 bg-gray-800/40 rounded-xl border border-gray-700 backdrop-blur-sm">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Filter Positions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Department Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Department
                </label>
                <div className="relative">
                  <select
                    value={filters.department}
                    onChange={(e) => handleFilterChange('department', e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 
                             rounded-lg text-white focus:outline-none focus:ring-2 
                             focus:ring-cyan-500 focus:border-transparent appearance-none"
                  >
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Location
                </label>
                <div className="relative">
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 
                             rounded-lg text-white focus:outline-none focus:ring-2 
                             focus:ring-emerald-500 focus:border-transparent appearance-none"
                  >
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Job Type
                </label>
                <div className="relative">
                  <select
                    value={filters.type}
                    onChange={(e) => handleFilterChange('type', e.target.value)}
                    className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 
                             rounded-lg text-white focus:outline-none focus:ring-2 
                             focus:ring-purple-500 focus:border-transparent appearance-none"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Search Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Search
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    placeholder="Search jobs..."
                    className="w-full px-4 py-2.5 bg-gray-900 border border-gray-700 
                             rounded-lg text-white placeholder-gray-500 focus:outline-none 
                             focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="mb-6 p-4 bg-gray-800/40 rounded-lg border border-gray-700 backdrop-blur-sm">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-400">Active filters:</span>
              {filters.department !== 'All' && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-cyan-900/30 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                  {filters.department}
                  <button
                    onClick={() => handleFilterChange('department', 'All')}
                    className="hover:text-white ml-1"
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.location !== 'All' && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-900/30 text-emerald-300 rounded-full text-sm border border-emerald-500/30">
                  {filters.location}
                  <button
                    onClick={() => handleFilterChange('location', 'All')}
                    className="hover:text-white ml-1"
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.type !== 'All' && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  {filters.type}
                  <button
                    onClick={() => handleFilterChange('type', 'All')}
                    className="hover:text-white ml-1"
                  >
                    ×
                  </button>
                </span>
              )}
              {filters.search && (
                <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600">
                  Search: "{filters.search}"
                  <button
                    onClick={() => handleFilterChange('search', '')}
                    className="hover:text-white ml-1"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        )}

        {/* No Results State */}
        {filteredPositions.length === 0 ? (
          <div className="bg-gray-800/40 rounded-xl border border-gray-700 p-12 text-center backdrop-blur-sm">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-3">No matching jobs found</h3>
            <p className="text-gray-500 mb-6">
              {hasActiveFilters 
                ? "Try adjusting your filters or search terms"
                : "No positions are currently available. Check back soon!"
              }
            </p>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          /* Compact Job Listings */
          <div className="space-y-4">
            {filteredPositions.map((position) => {
              const isExpanded = expandedJobs[position.id];
              
              return (
                <div 
                  key={position.id} 
                  className="bg-gray-800/40 rounded-xl border border-gray-700 
                            hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10
                            transition-all duration-300 overflow-hidden"
                >
                  {/* Compact Header */}
                  <div 
                    className="p-6 cursor-pointer flex items-center justify-between hover:bg-gray-800/20 transition-colors duration-300"
                    onClick={() => toggleJobExpansion(position.id)}
                  >
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="w-full">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-3">
                            <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors duration-300">
                              {position.title}
                            </h3>
                            <div className="flex items-center gap-2">
                              <span className="px-3 py-1 bg-gray-900/70 text-white rounded-full text-sm font-semibold">
                                {position.salary}
                              </span>
                              <button 
                                className="ml-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleJobExpansion(position.id);
                                }}
                              >
                                {isExpanded ? (
                                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                ) : (
                                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-gray-900/70 text-cyan-300 rounded-full text-sm">
                              {position.department}
                            </span>
                            <span className="px-3 py-1 bg-gray-900/70 text-emerald-300 rounded-full text-sm">
                              {position.location}
                            </span>
                            <span className="px-3 py-1 bg-gray-900/70 text-purple-300 rounded-full text-sm">
                              {position.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-gray-700 pt-6 animate-fadeIn">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-gray-100 mb-4 text-lg">Description</h4>
                          <p className="text-gray-300 mb-6">
                            {position.description}
                          </p>
                          
                          <h4 className="font-bold text-gray-100 mb-4 text-lg">Requirements</h4>
                          <ul className="space-y-3">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start">
                                <svg className="w-5 h-5 text-cyan-500 mt-0.5 mr-3 flex-shrink-0" 
                                     fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-300">
                                  {req}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
                          <h4 className="font-bold text-gray-100 mb-4 text-lg">Compensation & Benefits</h4>
                          <div className="space-y-4">
                            <div>
                              <p className="text-gray-400 text-sm mb-1">Annual Salary</p>
                              <p className="text-2xl font-bold text-emerald-400">{position.salary}</p>
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm mb-2">Additional Benefits</p>
                              <ul className="space-y-2">
                                <li className="flex items-center text-gray-300">
                                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  Equity package
                                </li>
                                <li className="flex items-center text-gray-300">
                                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  Performance bonuses
                                </li>
                                <li className="flex items-center text-gray-300">
                                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  Comprehensive healthcare
                                </li>
                                <li className="flex items-center text-gray-300">
                                  <svg className="w-4 h-4 text-emerald-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                  </svg>
                                  Remote work flexibility
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <button className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-600 to-emerald-600 
                                           hover:from-cyan-500 hover:to-emerald-500
                                           text-white font-semibold rounded-lg transition-all duration-300">
                            Apply for this Position
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900/80 to-black/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 hover:scale-105 transition-transform duration-300 inline-block cursor-default">
            Why Join Vision Maverick?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-8 bg-gray-800/40 rounded-xl border border-gray-700 
                          hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10
                          transition-all duration-500 transform-gpu group
                          hover:bg-gradient-to-br hover:from-gray-800/60 hover:to-gray-900/60"
              >
                <div className="text-3xl font-bold text-cyan-500 mb-4 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300 inline-block cursor-default">
            Ready to Build with Us?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto hover:text-gray-200 transition-colors duration-300">
            Transform financial markets with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-emerald-600 
                             hover:from-cyan-500 hover:to-emerald-500 hover:scale-105
                             text-white font-semibold rounded-lg transition-all duration-300 
                             shadow-lg hover:shadow-cyan-500/30
                             relative overflow-hidden group
                             before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:to-white/0
                             before:hover:from-white/10 before:hover:to-white/10
                             before:transition-all before:duration-300">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                View All Positions
              </span>
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-cyan-500 
                             hover:bg-cyan-500 hover:text-black hover:scale-105
                             text-cyan-400 font-semibold rounded-lg transition-all duration-300
                             relative overflow-hidden group
                             before:absolute before:inset-0 before:bg-cyan-500/0
                             before:hover:bg-cyan-500 before:transition-all before:duration-300">
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Join Talent Network
              </span>
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-8 hover:text-gray-300 transition-colors duration-300">
            Questions? Email us at <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
              careers@visionmaverick.com
            </span>
          </p>
        </div>
      </section>
    </div>
  );
}