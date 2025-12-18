import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vision Maverick — Algorithmic Intelligence for Trading',
  description: 'Pioneering the next evolution in market intelligence with algorithmic trading, generative AI, and machine learning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background antialiased`}>
        {/* Background effects */}
        <div className="fixed inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.02] pointer-events-none" />
        <div className="fixed inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
        
        {/* Navbar - Now included on every page */}
        <Navbar />
        
        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>
        
        <Analytics />
      </body>
    </html>
  )
}