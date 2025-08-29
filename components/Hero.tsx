'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-block">
          <span className="px-4 py-2 rounded-full bg-black/50 border border-blue-500/30 text-cyan-400 text-sm font-semibold backdrop-blur-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Powered by Advanced AI Models
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6">
          <span className="gradient-text text-glow">Generate</span>
          <br />
          <span className="text-white">
            Stunning Images
          </span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-400">with Vibe Engine</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
          Transform your ideas into breathtaking visuals instantly. Our cutting-edge AI technology brings your imagination to life.
        </p>

        {/* Input and button section */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto mb-8 px-4">
          <input
            type="text"
            placeholder="Describe your image"
            className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-black/40 border border-blue-500/30 rounded-full text-white placeholder-slate-500 backdrop-blur-sm focus:outline-none focus:border-cyan-400 transition-all text-sm sm:text-base"
          />
          <button className="px-6 sm:px-10 py-3 text-white font-medium rounded-full border border-white/30 hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base whitespace-nowrap">
            Generate Now
          </button>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center text-xs sm:text-sm text-slate-400 px-4">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full pulse-glow"></span>
            Unlimited Generations
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full pulse-glow"></span>
            4K Resolution
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-400 rounded-full pulse-glow"></span>
            Multiple Styles
          </span>
        </div>

      </div>
    </section>
  )
}