'use client'

export default function CTA() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/20 text-white/60 text-xs sm:text-sm font-medium mb-6 sm:mb-8">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          FUTURE OF CREATIVITY
        </span>
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          Start Creating Today
        </h2>
        
        <p className="text-base sm:text-lg lg:text-xl text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Join thousands of creators using AI to bring their imagination to life
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm sm:text-base">
            Get Started Free
          </button>
          <button className="px-6 sm:px-8 py-3 sm:py-4 border border-blue-400/50 text-blue-100 font-semibold rounded-full hover:bg-blue-500/10 hover:border-blue-400 transition-colors text-sm sm:text-base">
            View Pricing
          </button>
        </div>

        {/* Features */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Unlimited</div>
            <div className="text-white/60 text-sm sm:text-base">Generations per month</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">4K+</div>
            <div className="text-white/60 text-sm sm:text-base">Resolution output</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/60 text-sm sm:text-base">Priority support</div>
          </div>
        </div>
      </div>
    </section>
  )
}