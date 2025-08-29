'use client'
import { useEffect, useState } from 'react'

export default function Loading() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-shift"></div>

      {/* Main loader container */}
      <div className="relative">
        {/* Orbiting particles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loading-orbit">
            <div className="orbit-particle orbit-particle-1"></div>
            <div className="orbit-particle orbit-particle-2"></div>
            <div className="orbit-particle orbit-particle-3"></div>
          </div>
        </div>

        {/* Center logo/text */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Hexagon loader */}
          <div className="hexagon-loader">
            <div className="hexagon-outer">
              <div className="hexagon-inner"></div>
            </div>
          </div>

          {/* Brand name */}
          <h1 className="mt-8 text-3xl font-bold">
            <span className="loading-text-gradient">VIBE ENGINE</span>
          </h1>

          {/* Loading text */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-cyan-400 text-sm font-medium">Initializing</span>
            <div className="flex gap-1">
              <span className="loading-dot">.</span>
              <span className="loading-dot" style={{ animationDelay: '0.2s' }}>.</span>
              <span className="loading-dot" style={{ animationDelay: '0.4s' }}>.</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-8 w-64">
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full loading-progress"></div>
            </div>
          </div>

          {/* Loading percentage */}
          <div className="mt-4 text-xs text-slate-500 font-mono">
            <span className="loading-percentage">0</span>%
          </div>
        </div>

        {/* Outer ring animation */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="loading-ring loading-ring-1"></div>
          <div className="loading-ring loading-ring-2"></div>
          <div className="loading-ring loading-ring-3"></div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8">
        <div className="corner-decoration">
          <div className="corner-line corner-line-horizontal"></div>
          <div className="corner-line corner-line-vertical"></div>
        </div>
      </div>
      <div className="absolute top-8 right-8">
        <div className="corner-decoration corner-decoration-flip-x">
          <div className="corner-line corner-line-horizontal"></div>
          <div className="corner-line corner-line-vertical"></div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="corner-decoration corner-decoration-flip-y">
          <div className="corner-line corner-line-horizontal"></div>
          <div className="corner-line corner-line-vertical"></div>
        </div>
      </div>
      <div className="absolute bottom-8 right-8">
        <div className="corner-decoration corner-decoration-flip-xy">
          <div className="corner-line corner-line-horizontal"></div>
          <div className="corner-line corner-line-vertical"></div>
        </div>
      </div>
    </div>
  )
}