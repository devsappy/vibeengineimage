'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [delayedPosition, setDelayedPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  const requestRef = useRef<number>()

  useEffect(() => {
    setIsMounted(true)
    setIsHidden(false)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      const target = e.target as HTMLElement
      
      // Check if hovering over any interactive element
      const isInteractive = 
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.closest('input') !== null ||
        target.closest('textarea') !== null ||
        target.closest('.generate-btn') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      
      setIsPointer(isInteractive)
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMounted])

  // Smooth delayed tracking for the wave image
  useEffect(() => {
    const updateDelayedPosition = () => {
      setDelayedPosition(prev => {
        const dx = position.x - prev.x
        const dy = position.y - prev.y
        // Smooth easing - adjust the 0.1 value to change delay (lower = more delay)
        return {
          x: prev.x + dx * 0.1,
          y: prev.y + dy * 0.1
        }
      })
      requestRef.current = requestAnimationFrame(updateDelayedPosition)
    }
    
    requestRef.current = requestAnimationFrame(updateDelayedPosition)
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [position])

  if (!isMounted || isHidden) return null

  return (
    <>
      {/* White ball cursor (replaces default cursor) */}
      <div
        className="custom-cursor-ball"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.3 : 1})`,
        }}
      />
      
      {/* Vibe Engine Wave with delayed tracking - hidden on interactive elements */}
      <div
        className="custom-cursor-wave"
        style={{
          left: `${delayedPosition.x}px`,
          top: `${delayedPosition.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 0 : 1})`,
          opacity: isPointer ? 0 : 0.7,
        }}
      >
        <Image 
          src="/Vibe Engine Wave (1).png" 
          alt="Vibe Engine Wave" 
          width={60} 
          height={60}
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
    </>
  )
}