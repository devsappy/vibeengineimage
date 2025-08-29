'use client'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/5 backdrop-blur-xl backdrop-saturate-150 border-b border-white/10' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-bold text-white">VibeEngine.ai</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a href="#features" className="px-3 lg:px-5 py-2 text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm lg:text-base">Features</a>
            <a href="#gallery" className="px-3 lg:px-5 py-2 text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm lg:text-base">Gallery</a>
            <a href="#pricing" className="px-3 lg:px-5 py-2 text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm lg:text-base">Pricing</a>
            <a href="#about" className="px-3 lg:px-5 py-2 text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm lg:text-base">About</a>
            <button className="px-4 lg:px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover-glow text-sm lg:text-base">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className={`px-4 pt-3 pb-4 space-y-3 transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/5 backdrop-blur-xl backdrop-saturate-150' 
              : 'bg-black/20 backdrop-blur-sm'
          }`}>
            <a href="#features" className="block px-4 py-2 text-center text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm">Features</a>
            <a href="#gallery" className="block px-4 py-2 text-center text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm">Gallery</a>
            <a href="#pricing" className="block px-4 py-2 text-center text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm">Pricing</a>
            <a href="#about" className="block px-4 py-2 text-center text-slate-300 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-200 text-sm">About</a>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold text-sm">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}