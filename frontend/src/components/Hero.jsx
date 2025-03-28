import React from 'react'

const Hero = () => {
  return (
    <div>
    <div className="container mx-auto px-6 pt-20 pb-12">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-purple-500/30 rounded-full text-yellow-300 mb-6">
            Revolutionary Trading Platform
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Why Break When You Can{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-purple-300 to-yellow-300 text-transparent bg-clip-text">
              Trade?
            </span>
          </h1>
          <p className="text-white/80 text-lg mb-8">
            Join the next generation of traders who are breaking free from traditional constraints. Trade smarter, faster, and with more confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-medium hover:bg-white/90">
              Start Trading Now →
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10">
              View Markets →
            </button>
          </div>
        </div>

        {/* FD Investment Section */}
        <div className="bg-white backdrop-blur-lg rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 mb-4">
              The right time to invest in FDs is <span className="text-purple-300">now</span>
            </h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-purple-700 text-lg mb-6">
              Secure your FD rates now before they drop
            </p>
            <button className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Invest now to lock-in FD rates
            </button>
          </div>

          <div className="relative mt-12 pt-8">
            {/* Graph Points */}
            <div className="absolute right-4 top-0 text-purple-300 text-right">
              <div className="text-2xl font-bold flex items-center gap-2">
                NOW <span className="inline-block">✨</span>
              </div>
              <div className="text-4xl font-bold">9.10%</div>
            </div>
            
            {/* Graph */}
            <div className="relative h-64 mt-8">
              <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                {/* Graph Background Gradient */}
                <defs>
                  <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.05" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ff69b4" />
                    <stop offset="50%" stopColor="#9f7aea" />
                    <stop offset="100%" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>

                {/* Background Area */}
                <path
                  d="M0,100 C50,80 100,120 150,90 S200,140 250,110 S300,60 350,30 S400,10 400,10 V200 H0 Z"
                  fill="url(#backgroundGradient)"
                />
                
                {/* Grid Lines */}
                <g className="opacity-20">
                  {[...Array(10)].map((_, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 20}
                      x2="400"
                      y2={i * 20}
                      stroke="white"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                  ))}
                </g>
                
                {/* Main Graph Line */}
                <path
                  d="M0,100 C50,80 100,120 150,90 S200,140 250,110 S300,60 350,30 S400,10 400,10"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                />
                
                {/* Data Points */}
                <circle cx="0" cy="100" r="4" fill="url(#lineGradient)" />
                <circle cx="150" cy="90" r="4" fill="url(#lineGradient)" />
                <circle cx="250" cy="110" r="4" fill="url(#lineGradient)" />
                <circle cx="350" cy="30" r="4" fill="url(#lineGradient)" />
                <circle cx="400" cy="10" r="6" fill="url(#lineGradient)" className="animate-pulse" />
              </svg>
              
              {/* Years */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-white/60 mt-4">
                <span>2007</span>
                <span>2012</span>
                <span>2016</span>
                <span>2019</span>
                <span>NOW</span>
              </div>
            </div>
            
            {/* Graph Glow Effect */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
