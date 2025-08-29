export default function Gallery() {
  const images = [
    { prompt: "Futuristic city at sunset", style: "Cyberpunk" },
    { prompt: "Dragon in magical forest", style: "Fantasy Art" },
    { prompt: "Abstract cosmic explosion", style: "Digital Art" },
    { prompt: "Portrait in oil painting style", style: "Classical" },
    { prompt: "Underwater alien civilization", style: "Sci-Fi" },
    { prompt: "Neon Tokyo street at night", style: "Anime" },
  ]

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-purple-400 text-xs sm:text-sm font-bold uppercase tracking-wider">Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
            AI Generated <span className="gradient-text">Masterpieces</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Explore stunning images created by our community using advanced AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl">
              {/* Placeholder gradient */}
              <div className={`aspect-square bg-gradient-to-br ${
                index % 3 === 0 ? 'from-cyan-600 to-blue-700' :
                index % 3 === 1 ? 'from-purple-600 to-pink-700' :
                'from-blue-600 to-purple-700'
              }`}>
                {/* Overlay with image details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <p className="text-white font-bold text-sm sm:text-lg mb-2">{image.prompt}</p>
                    <span className="inline-block px-2 sm:px-3 py-1 bg-blue-500/30 backdrop-blur-sm rounded-full text-cyan-300 text-xs sm:text-sm">
                      {image.style}
                    </span>
                  </div>
                </div>
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover-glow hover:from-purple-500 hover:to-blue-500 transition-all duration-300 text-sm sm:text-base">
            View Full Gallery
          </button>
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-20 right-1/4 w-2 h-2 bg-cyan-400 rounded-full floating"></div>
      <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-purple-400 rounded-full floating" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full floating" style={{ animationDelay: '2s' }}></div>
    </section>
  )
}