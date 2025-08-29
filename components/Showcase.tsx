'use client'
import Image from 'next/image'

const showcaseItems = [
  {
    id: 1,
    title: 'Surreal Dreamscape',
    category: 'Abstract Art',
    image: '/image.png'
  },
  {
    id: 2,
    title: 'Cyberpunk Metropolis',
    category: 'Futuristic',
    image: '/image(1).png'
  },
  {
    id: 3,
    title: 'Enchanted Forest',
    category: 'Fantasy',
    image: '/image(2).png'
  },
  {
    id: 4,
    title: 'Cosmic Journey',
    category: 'Space Art',
    image: '/image(3).png'
  },
  {
    id: 5,
    title: 'Ancient Temple',
    category: 'Architecture',
    image: '/image(4).png'
  },
  {
    id: 6,
    title: 'Digital Portrait',
    category: 'Portrait',
    image: '/image(5).png'
  }
]

export default function Showcase() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Showcase Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Generated Masterpieces
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Explore stunning visuals created by our advanced AI engine
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="showcase-card"
            >
              <div className="relative h-[300px] sm:h-[350px] lg:h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/20 transition-colors group">
                {/* Image */}
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <span className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}