'use client'

import { motion } from 'framer-motion'
import { Cpu, Zap, Brain, Shield, BarChart3, Network, Gauge, Lock } from 'lucide-react'

const Features = () => {
const features = [
  {
    category: 'Identification Engine',
    icon: Brain,
    color: 'from-cyan-500 to-blue-500',
    items: [
      'Multi‑indicator, RL agents & deep learning predictors',
      'Ensemble scoring with adaptive weights & half‑life decay',
      'ML/RL stacks: PyTorch, TensorFlow, XGBoost, scikit‑learn',
      'QC‑first workflows with QuantConnect/LEAN compatibility',
    ],
  },
  {
    category: 'Execution Router',
    icon: Zap,
    color: 'from-emerald-500 to-green-500',
    items: [
      'Real‑time signals across all asset classes',
      'Intelligent routing with venue adapters',
      'Idempotent orders & safe retries',
      'Sub‑second execution with full audit trail',
    ],
  },
  {
    category: 'Risk & Controls',
    icon: Shield,
    color: 'from-purple-500 to-pink-500',
    items: [
      'Pre‑trade checks & exposure caps',
      'Kill switch & circuit breakers',
      'Per‑strategy daily loss limits',
      'Enterprise‑grade risk management',
    ],
  },
  {
    category: 'API & Integration',
    icon: Gauge,
    color: 'from-orange-500 to-red-500',
    items: [
      'REST APIs & HMAC‑signed webhooks',
      'Machine Learning model registry',
      'Multi‑broker connectivity',
      'GDPR‑aware telemetry & PII minimisation',
    ],
  },
]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="platform" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Platform Capabilities
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gradient">Comprehensive</span> Trading Ecosystem
          </h2>
          <p className="text-gray-400">
            Built with cutting‑edge technology to deliver unprecedented 
            market intelligence and execution capabilities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.category}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl group-hover:from-white/10 transition-all duration-300" />
              
              {/* Card Content */}
              <div className="relative p-6 rounded-2xl gradient-border h-full">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.category}
                </h3>

                {/* Feature List */}
                <ul className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + itemIndex * 0.1 }}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="group-hover:text-gray-300 transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-primary/20">
            <Network className="h-6 w-6 text-primary" />
            <span className="text-gray-300">
              All components work together seamlessly in a unified platform
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features