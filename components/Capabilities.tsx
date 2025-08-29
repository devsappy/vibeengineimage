'use client'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

const capabilities = [
  {
    title: 'Neural Style Transfer',
    description: 'Apply artistic styles from famous paintings to your images with advanced AI algorithms that preserve detail while transforming aesthetics.',
    icon: 'paint-brush',
    gradient: 'from-blue-400 to-blue-600',
    features: ['Multiple art styles', 'Real-time preview', 'HD output']
  },
  {
    title: 'Text to Image',
    description: 'Transform descriptive text into stunning, photorealistic images using state-of-the-art diffusion models and neural networks.',
    icon: 'sparkles',
    gradient: 'from-blue-500 to-blue-600',
    features: ['Natural language input', 'Style customization', 'Batch generation']
  },
  {
    title: 'Image Enhancement',
    description: 'Upscale and enhance image quality with AI-powered algorithms that add detail and clarity to low-resolution images.',
    icon: 'arrow-trending-up',
    gradient: 'from-blue-400 to-blue-500',
    features: ['4K upscaling', 'Noise reduction', 'Color correction']
  },
  {
    title: 'Smart Editing',
    description: 'Remove objects, change backgrounds, and edit with precision using intelligent selection and content-aware fill.',
    icon: 'wrench-screwdriver',
    gradient: 'from-blue-500 to-blue-700',
    features: ['Object removal', 'Background replacement', 'Smart selection']
  },
  {
    title: 'Real-time Generation',
    description: 'Generate images in seconds with our optimized AI pipeline that delivers results faster than ever before.',
    icon: 'fire-logo',
    gradient: 'from-blue-300 to-blue-500',
    features: ['Lightning fast', 'Queue priority', 'Live preview']
  },
  {
    title: 'Custom Models',
    description: 'Train custom AI models for your specific style and needs with our advanced fine-tuning capabilities.',
    icon: 'cpu-chip',
    gradient: 'from-blue-600 to-blue-800',
    features: ['Style training', 'Personal datasets', 'Model versioning']
  },
  {
    title: 'Batch Processing',
    description: 'Process hundreds of images simultaneously with consistent quality and style across your entire collection.',
    icon: 'cube-transparent',
    gradient: 'from-blue-500 to-blue-600',
    features: ['Bulk upload', 'Parallel processing', 'Export formats']
  }
]

export default function Capabilities() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const scrollWidth = scrollRef.current.scrollWidth
      const clientWidth = scrollRef.current.clientWidth
      
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      
      // Calculate active index based on scroll position
      const cardWidth = 400 // approximate card width
      const newIndex = Math.round(scrollLeft / cardWidth)
      setActiveIndex(newIndex)
    }
  }

  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 400
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400
      const currentScroll = scrollRef.current.scrollLeft
      scrollRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll)
      return () => scrollElement.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <div className="inline-block mb-8">
              <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold uppercase tracking-wider backdrop-blur-sm">
                <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Capabilities
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
              Powerful AI <span className="holographic-text-capabilities">Features</span>
            </h2>
            <p className="text-base text-slate-300/80 max-w-2xl mx-auto">
              Next-generation AI tools to transform your creative workflow
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all ${
              canScrollLeft ? 'opacity-100 hover:bg-white/20' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className={`absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all ${
              canScrollRight ? 'opacity-100 hover:bg-white/20' : 'opacity-50 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8 py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="flex-none w-[380px] snap-center"
              >
                <div className="group relative h-full capability-card-futuristic">
                  {/* Multi-layer glow effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700">
                    <div 
                      className="absolute inset-0 rounded-3xl blur-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${capability.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${capability.gradient.replace('from-', '').replace('to-', '').split(' ')[2]})`
                      }}
                    />
                    <div 
                      className="absolute inset-4 rounded-3xl blur-xl opacity-60"
                      style={{
                        background: `linear-gradient(135deg, ${capability.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${capability.gradient.replace('from-', '').replace('to-', '').split(' ')[2]})`
                      }}
                    />
                  </div>
                  
                  {/* Holographic border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Card */}
                  <div className="relative h-full p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl group-hover:bg-white/10 group-hover:border-blue-500/30 transition-all duration-500 group-hover:transform group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                    {/* Icon and Title Row */}
                    <div className="flex items-center gap-4 mb-6">
                      {/* Icon with enhanced glow */}
                      <div className="relative flex-shrink-0">
                        {capability.icon === 'fire-logo' ? (
                          <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
                            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-600 p-2 flex items-center justify-center shadow-lg shadow-blue-500/30">
                              <Image 
                                src="/fire-logo.png" 
                                alt="Fire Logo" 
                                width={32} 
                                height={32}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="relative">
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${capability.gradient} blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500`}></div>
                            <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-r ${capability.gradient} flex items-center justify-center shadow-lg`}>
                              {capability.icon === 'paint-brush' && (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                              )}
                              {capability.icon === 'sparkles' && (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                              )}
                              {capability.icon === 'arrow-trending-up' && (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>
                              )}
                              {capability.icon === 'wrench-screwdriver' && (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 3.096l-.102.104m-1.438 1.489l-5.898-5.897a8.25 8.25 0 0111.668 0l-5.77 5.897z" />
                                </svg>
                              )}
                              {capability.icon === 'cpu-chip' && (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
                                </svg>
                              )}
                              {capability.icon === 'cube-transparent' && (
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7.5l-2.25-1.313M21 7.5v6.75m0-6.75l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v6.75m9 3l2.25-1.313M12 21.75V15m0 6.75l-2.25-1.313m0-7.125L12 9.75m0 0L4.5 5.25m7.5 4.5l7.5-4.5m-7.5 4.5V3m0 6.75L19.5 5.25" />
                                </svg>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent group-hover:filter group-hover:drop-shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-500`}>
                        {capability.title}
                      </h3>
                    </div>
                    <p className="text-slate-300/70 mb-6 leading-relaxed group-hover:text-slate-200/80 transition-colors duration-500">
                      {capability.description}
                    </p>

                    {/* Features list with glow */}
                    <ul className="space-y-2 mb-6">
                      {capability.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-500">
                          <svg className="w-4 h-4 mr-2 text-blue-400 group-hover:text-blue-300 transition-all duration-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn more link with glow animation */}
                    <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-all duration-500">
                      <span>Learn more</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {capabilities.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 h-2 bg-blue-400 rounded-full' 
                    : 'w-2 h-2 bg-white/30 rounded-full hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}