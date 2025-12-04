'use client'

import { useEffect, useRef, useState } from 'react'

interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  priority?: boolean
}

export function LazyVideo({ src, poster, className = '', priority = false }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(priority)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before visible
        threshold: 0
      }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <video
      ref={videoRef}
      autoPlay={isVisible}
      muted
      loop
      playsInline
      preload={priority ? 'auto' : 'none'}
      poster={poster}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}
      onLoadedData={() => setIsLoaded(true)}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  )
}
