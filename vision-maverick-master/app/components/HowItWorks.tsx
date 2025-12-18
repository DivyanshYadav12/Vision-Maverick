'use client'

import { motion } from 'framer-motion'
import { Code, Server, Rocket, ArrowRight, Cpu } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Generate Signals',
      description: 'Develop strategies and ML models in QuantConnect',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      delay: 0,
    },
    {
      step: '02',
      title: 'Ingest & Score',
      description: 'Process through our control plane via REST/webhooks',
      icon: Server,
      color: 'from-purple-500 to-pink-500',
      delay: 0.2,
    },
    {
      step: '03',
      title: 'Execute with Guardrails',
      description: 'Route to brokerage venues with risk controls',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      delay: 0.4,
    },
  ]

  return (
    <section id="how-it-works" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Cpu className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Integrated Workflow
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-gray-400">
            A seamless, end‑to‑end process from signal generation to execution
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
            {steps.map((stepItem, index) => (
              <motion.div
                key={stepItem.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stepItem.delay }}
                className="relative"
              >
                {/* Step Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  {/* Card */}
                  <div className="p-8 rounded-2xl gradient-border bg-muted/30 backdrop-blur-sm">
                    {/* Step Number */}
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${stepItem.color} mb-6`}>
                      <span className="text-white font-bold">{stepItem.step}</span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <stepItem.icon className="h-8 w-8 text-gray-300" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {stepItem.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {stepItem.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {index === 0 && ['Strategies', 'ML Models', 'Backtesting'].map((item) => (
                        <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                          {item}
                        </li>
                      ))}
                      {index === 1 && ['REST API', 'Webhooks', 'Real‑time'].map((item) => (
                        <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                          {item}
                        </li>
                      ))}
                      {index === 2 && ['Risk Controls', 'Multi‑venue', 'Audit Trail'].map((item) => (
                        <li key={item} className="text-sm text-gray-500 flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight className="h-8 w-8 text-primary" />
                      </motion.div>
                    </div>
                  )}

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stepItem.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-300 -z-10`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-primary/20">
            <p className="text-gray-300">
              Complete trading ecosystem designed for institutional‑grade 
              performance and reliability
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks