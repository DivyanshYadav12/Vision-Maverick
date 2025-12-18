'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu, Zap, Brain, TrendingUp, BarChart3, LineChart, Sparkles } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  // Free trading chart images from Unsplash (no copyright)
  const tradingImages = [
    'https://images.unsplash.com/photo-1642790553124-4c56d74c5a65?q=80&w=2070&auto=format&fit=crop', // Trading charts
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop', // Stock market
    'https://images.unsplash.com/photo-1613243555978-636c48dc653c?q=80&w=2070&auto=format&fit=crop', // Data visualization
  ]

  const tradingCharts = [
    { Icon: TrendingUp, delay: 0, position: 'top-1/4 left-[10%]', size: 'h-16 w-16' },
    { Icon: BarChart3, delay: 0.3, position: 'top-[15%] right-[15%]', size: 'h-14 w-14' },
    { Icon: LineChart, delay: 0.6, position: 'bottom-1/3 left-[20%]', size: 'h-20 w-20' },
    { Icon: Sparkles, delay: 0.9, position: 'bottom-1/4 right-[10%]', size: 'h-12 w-12' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Trading Background - Free Images with Animation */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-background to-gray-950" />
        
        {/* Multiple Trading Images with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main Trading Chart Image */}
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img
              src="https://images.unsplash.com/photo-1642790553124-4c56d74c5a65?q=80&w=2070"
              alt="Trading charts"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          {/* Animated Data Visualization Overlay */}
          <div className="absolute inset-0 bg-grid-pattern bg-[size:80px_80px] opacity-[0.02]" />
          
          {/* Animated Lines (Trading Chart Simulation) */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                style={{
                  top: `${15 + i * 10}%`,
                  left: '-100%',
                  width: '200%',
                  filter: 'blur(1px)',
                }}
                animate={{
                  x: ['0%', '100%'],
                }}
                transition={{
                  duration: 15 + i * 3,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * 0.8,
                }}
              />
            ))}
          </div>

          {/* Floating Data Points */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              >
                <div className="relative">
                  <div className="h-2 w-2 rounded-full bg-primary/60" />
                  <div className="absolute inset-0 h-2 w-2 rounded-full bg-primary/30 animate-ping" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Circuit Board Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                d="M0,20 Q25,15 50,20 T100,20"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,40 Q30,35 60,40 T100,40"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,60 Q35,55 70,60 T100,60"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0,80 Q40,75 80,80 T100,80"
                stroke="currentColor"
                strokeWidth="0.5"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />
      </div>

      {/* Animated Trading Icons */}
      <div className="absolute inset-0 z-0">
        {tradingCharts.map(({ Icon, delay, position, size }) => (
          <motion.div
            key={position}
            className={`absolute ${position}`}
            animate={{
              y: [0, -25, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">
              <Icon className={`${size} text-primary/20`} />
              <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Numbers Floating */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-primary/10"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 8}px`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear",
            }}
          >
            {Math.floor(Math.random() * 10000).toString()}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge with Animation */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-primary/30 mb-12 backdrop-blur-lg"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-3 w-3 rounded-full bg-primary"
            />
            <span className="text-sm font-semibold text-primary">
              🚀 Pioneering Next-Gen Market Intelligence
            </span>
            <Sparkles className="h-4 w-4 text-primary animate-pulse" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-8 leading-tight"
          >
            <span className="block text-gray-200 mb-4">Intelligence</span>
            <span className="block relative">
              <span className="text-gradient bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Beyond
              </span>{' '}
              <span className="text-white relative inline-block">
                Algorithms
                <motion.div
                  className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 1.5 }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            variants={itemVariants}
            className="relative mb-12"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5 rounded-3xl blur-xl" />
            <p className="text-xl text-gray-300 leading-relaxed relative bg-background/50 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <span className="text-primary font-semibold">Vision Maverick</span> fuses multi‑strategy research in Python—indicators, ML, and RL—with a production‑grade router for <span className="text-cyan-300 font-medium">algorithmic trading</span>,{' '}
              <span className="text-teal-300 font-medium">risk‑aware execution</span>, Our mission is simple: help you go from{' '}
              <span className="text-emerald-300 font-medium">research to routed trades</span> faster, safer, and with an auditable trail We're building systems that think, learn, and adapt to give traders an unprecedented edge in global markets.
            </p>
          </motion.div>

          {/* Highlight Card */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <div className="inline-flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-emerald-500/10 border border-primary/20 backdrop-blur-lg max-w-2xl mx-auto">
              <Zap className="h-6 w-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
              <p className="text-lg text-gray-300 text-left">
                <span className="font-semibold text-white">We're not just automating trades</span> — 
                we're building intelligent systems that <span className="text-primary">think, learn, and adapt</span> 
                to give traders an unprecedented edge in global markets.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold text-lg flex items-center gap-3 overflow-hidden"
            >
              <span className="relative z-10">Start Building Today</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-white/10 blur-xl group-hover:blur-2xl transition-all" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-10 py-5 gradient-border text-gray-300 rounded-xl font-semibold text-lg hover:text-white transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Explore Platform</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </motion.div>

          {/* Live Performance Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { 
                value: '99.9%', 
                label: 'System Uptime', 
                desc: 'Guaranteed reliability',
                color: 'from-cyan-500 to-blue-500'
              },
              { 
                value: '< 1ms', 
                label: 'Execution Latency', 
                desc: 'Real-time trading',
                color: 'from-teal-500 to-green-500'
              },
              { 
                value: '24/7', 
                label: 'AI Monitoring', 
                desc: 'Continuous analysis',
                color: 'from-emerald-500 to-lime-500'
              },
              { 
                value: 'Enterprise', 
                label: 'Security Grade', 
                desc: 'Bank-level protection',
                color: 'from-purple-500 to-pink-500'
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 rounded-2xl gradient-border bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all group"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-200 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Live Market Feed */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="inline-block p-4 rounded-2xl bg-gradient-to-r from-gray-900/50 to-background/50 border border-white/10 backdrop-blur-lg"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-green-400">LIVE</span>
              </div>
              <div className="text-sm text-gray-300">
                Processing <span className="text-primary font-semibold">25,000+</span> trades/sec • 
                Analyzing <span className="text-primary font-semibold">150TB</span> market data • 
                <span className="text-emerald-400 ml-2"> ▲ 2.4%</span> today
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-gray-400 font-medium tracking-wider">EXPLORE PLATFORM</span>
          <div className="relative">
            <div className="h-12 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4">
              <div className="h-4 w-4 border-2 border-primary/50 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero