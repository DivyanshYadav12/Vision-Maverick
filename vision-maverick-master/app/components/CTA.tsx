'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, FileCode, Rocket, Target } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-cyan-900/5 to-emerald-900/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Rocket className="h-4 w-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Build Trading Intelligence?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward‑thinking teams using AI‑driven trading intelligence 
              to transform research into routed trades—faster, safer, and with an auditable trail.
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-3"
            >
              <span>Request Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 gradient-border text-gray-300 rounded-xl font-semibold text-lg hover:text-white transition-all"
            >
              <span className="flex items-center justify-center gap-3">
                <FileCode className="h-5 w-5" />
                View Documentation
              </span>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 max-w-md mx-auto"
          >
            <MessageSquare className="h-6 w-6 text-primary" />
            <div className="text-left">
              <div className="font-semibold">Questions about integration?</div>
              <div className="text-sm text-gray-400">
                Email us at{' '}
                <span className="text-primary">contact@visionmaverick.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6"
          >
            {[
              { label: 'API Reference', href: '#' },
              { label: 'Quick Start Guide', href: '#' },
              { label: 'Security Whitepaper', href: '#' },
              { label: 'Case Studies', href: '#' },
            ].map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm text-gray-400 hover:text-white transition-all"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA