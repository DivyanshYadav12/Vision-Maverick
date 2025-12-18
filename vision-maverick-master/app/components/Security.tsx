'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, FileCheck, Globe, Users } from 'lucide-react'

const Security = () => {
  const features = [
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security protocols',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Lock,
      title: 'Local Data Residency',
      description: 'Control your data location',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Users,
      title: 'Role‑based Access',
      description: 'Granular permission controls',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Eye,
      title: 'Audit Logs',
      description: 'Complete activity tracking',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FileCheck,
      title: 'GDPR‑aware Telemetry',
      description: 'Privacy-first approach',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'PII Minimisation',
      description: 'Minimal personal data collection',
      color: 'from-green-500 to-emerald-500',
    },
  ]

  const compliance = [
    'SOC 2 Type II',
    'ISO 27001',
    'GDPR Compliant',
    'CCPA Ready',
  ]

  return (
    <section id="security" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Enterprise Security
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Security You Can <span className="text-gradient">Trust</span>
          </h2>
          <p className="text-gray-400">
            Built with security and compliance at its core, meeting the highest 
            standards of financial technology
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl gradient-border bg-muted/20 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${feature.color}`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-primary/20">
            <h4 className="text-center text-xl font-semibold mb-6">
              Industry Compliance
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {compliance.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors"
                >
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        

        {/* Additional Security Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 p-4 rounded-xl bg-muted/30">
            <Lock className="h-5 w-5 text-primary" />
            <span className="text-sm text-gray-400">
              Secrets management • End‑to‑end encryption • Regular security audits
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Security