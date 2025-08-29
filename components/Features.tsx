import Image from 'next/image'

const features = [
  {
    title: 'Neural Style Transfer',
    description: 'Apply artistic styles from famous paintings to your images instantly.',
    icon: 'paint-brush',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Text to Image',
    description: 'Transform descriptive text into stunning, photorealistic images.',
    icon: 'sparkles',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Image Enhancement',
    description: 'Upscale and enhance image quality with AI-powered algorithms.',
    icon: 'rocket',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Smart Editing',
    description: 'Remove objects, change backgrounds, and edit with precision.',
    icon: 'wrench',
    gradient: 'from-pink-500 to-red-600',
  },
  {
    title: 'Real-time Generation',
    description: 'Generate images in seconds with our optimized AI pipeline.',
    icon: 'fire-logo',
    gradient: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'Custom Models',
    description: 'Train custom AI models for your specific style and needs.',
    icon: '🧠',
    gradient: 'from-green-500 to-teal-600',
  },
]

export default function Features() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950/50 to-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-wider">Features</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
            AI-Powered <span className="gradient-text">Capabilities</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Experience the future of image generation with our advanced AI features designed for creators, designers, and innovators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                   style={{
                     background: `linear-gradient(135deg, ${feature.gradient.replace('from-', '').replace('to-', '').split(' ')[0]}, ${feature.gradient.replace('from-', '').replace('to-', '').split(' ')[2]})`
                   }}></div>
              
              <div className="relative p-6 sm:p-8 bg-black/40 backdrop-blur-sm border border-blue-500/20 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {feature.icon === 'fire-logo' ? (
                    <div className="w-8 h-8">
                      <Image 
                        src="/fire-logo.png" 
                        alt="Fire Logo" 
                        width={32} 
                        height={32}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8">
                      {feature.icon === 'paint-brush' && (
                        <svg className="w-full h-full text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                      {feature.icon === 'sparkles' && (
                        <svg className="w-full h-full text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                      {feature.icon === 'rocket' && (
                        <svg className="w-full h-full text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.2.055-.3.08a15.03 15.03 0 01-4.859-1.495" />
                        </svg>
                      )}
                      {feature.icon === 'wrench' && (
                        <svg className="w-full h-full text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276a4.5 4.5 0 01-.602 4.852z" />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-4 sm:mb-6">
                  {feature.description}
                </p>
                
                <div className="flex items-center text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 -translate-x-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10 translate-x-1/2"></div>
    </section>
  )
}