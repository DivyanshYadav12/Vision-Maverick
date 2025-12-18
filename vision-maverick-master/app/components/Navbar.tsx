'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation' // ADD THIS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname() // GET CURRENT PAGE
  const router = useRouter() // FOR NAVIGATION

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: 'Platform', href: '#platform' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'For Builders', href: '#builders' },
    { label: 'Security', href: '#security' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Careers', href: '/careers' },
  ]

  // SMART NAVIGATION HANDLER
  const handleNavigation = (href: string) => {
    const isHashLink = href.startsWith('#')
    
    if (isHashLink) {
      if (pathname === '/') {
        // On homepage: scroll to section
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        // On other pages: go to homepage THEN scroll
        router.push(`/${href}`)
      }
    } else {
      // Regular page link
      router.push(href)
    }
    setIsOpen(false) // Close mobile menu
  }

  const renderMenuItem = (item: { label: string, href: string }, index: number) => {
    const isHashLink = item.href.startsWith('#')
    
    if (isHashLink) {
      return (
        <motion.button
          key={item.label}
          onClick={() => handleNavigation(item.href)}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm text-gray-300 hover:text-primary transition-colors relative group cursor-pointer"
        >
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
        </motion.button>
      )
    } else {
      return (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={item.href}
            className="text-sm text-gray-300 hover:text-primary transition-colors relative group"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
        </motion.div>
      )
    }
  }

  const renderMobileMenuItem = (item: { label: string, href: string }) => {
    const isHashLink = item.href.startsWith('#')
    
    if (isHashLink) {
      return (
        <button
          key={item.label}
          onClick={() => handleNavigation(item.href)}
          className="block py-2 text-gray-300 hover:text-primary transition-colors text-left w-full"
        >
          {item.label}
        </button>
      )
    } else {
      return (
        <Link
          key={item.label}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="block py-2 text-gray-300 hover:text-primary transition-colors"
        >
          {item.label}
        </Link>
      )
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
          >
            <Link href="/">
              <div className="w-[180px] h-[40px] relative">
                <Image
                  src="/svg/vision-maverick-logo.svg"
                  alt="Vision Maverick"
                  width={180}
                  height={40}
                  className="w-full h-full"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => renderMenuItem(item, index))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-muted/50"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-muted/95 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => renderMobileMenuItem(item))}
              <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar