// app/components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import {Github, Linkedin, MessageSquare } from 'lucide-react'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  // Define functional links with actual routes
  const links = {
    Product: [
      { name: 'Platform', href: '/platform' },
      { name: 'Features', href: '/features' },
      { name: 'API Docs', href: '/api-docs' },
      { name: 'Pricing', href: '/pricing' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' }, // This will link to your careers page
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'Documentation', href: '/docs' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Community', href: '/community' },
      { name: 'Support', href: '/support' },
    ],
    Legal: [
      { name: 'Privacy', href: '/privacy' },
      { name: 'Terms', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ],
  }

  const socials = [
    { icon: FaXTwitter, label: 'Twitter', href: 'https://twitter.com/visionmaverick' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/visionmaverick' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/company/visionmaverick' },
    { icon: MessageSquare, label: 'Discord', href: 'https://discord.gg/visionmaverick' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/svg/logo.png"
                  alt="Vision Maverick Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                  priority={false}
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Vision Maverick
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Building the future of algorithmic trading with cutting-edge AI and quantitative research.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 
                             flex items-center justify-center transition-colors duration-300
                             hover:scale-110 group"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-6 text-gray-200">{category}</h3>
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300
                               hover:translate-x-1 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vision Maverick. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Vision Maverick is a registered trademark. All trading involves risk.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Contact: <a href="mailto:contact@visionmaverick.com" className="text-cyan-400 hover:text-cyan-300">
              contact@visionmaverick.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer