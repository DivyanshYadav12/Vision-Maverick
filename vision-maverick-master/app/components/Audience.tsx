'use client'

import { motion } from 'framer-motion'
import { Users, Building2, Code2, BrainCircuit, Wrench, Zap, LucideIcon } from 'lucide-react'

// Define the type for audience items
type AudienceItem = {
  icon: LucideIcon;
  label: string;
};

// Define the type for each audience
type AudienceType = {
  title: string;
  icon: LucideIcon;
  color: string;
  features?: string[];
  items?: AudienceItem[];
};

const Audience = () => {
  const audiences: AudienceType[] = [
    {
      title: 'Built for Builders',
      icon: Wrench,
      color: 'from-cyan-500 to-blue-500',
      features: [
        'API & webhooks integration',
        'Machine Learning model registry',
        'Multi‑broker connectivity',
        'Custom execution stacks',
      ],
    },
    {
      title: 'Who it\'s for',
      icon: Users,
      color: 'from-emerald-500 to-green-500',
      items: [
        { icon: BrainCircuit, label: 'Quant traders' },
        { icon: Building2, label: 'Systematic research teams' },
        { icon: Zap, label: 'Crypto options strategists' },
        { icon: Code2, label: 'Fintechs prototyping execution stacks' },
      ],
    },
  ]

  return (
    <section id="builders" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              {/* Card */}
              <div className="h-full p-8 rounded-2xl gradient-border bg-muted/20 backdrop-blur-sm">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${audience.color}`}>
                    <audience.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {audience.title}
                  </h3>
                </div>

                {/* Content - Now with proper type checking */}
                {audience.title === 'Built for Builders' && audience.features ? (
                  <ul className="space-y-4">
                    {audience.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/item"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                ) : audience.items ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {audience.items.map((item, idx) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group/item"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-primary" />
                          <span className="text-gray-300 group-hover/item:text-white transition-colors">
                            {item.label}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : null}

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <button className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-primary font-medium hover:from-cyan-500/30 hover:to-emerald-500/30 transition-all">
                    Explore {audience.title === 'Built for Builders' ? 'Documentation' : 'Use Cases'}
                  </button>
                </motion.div>
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Audience