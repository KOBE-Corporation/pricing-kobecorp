import { useState, useEffect } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: 'high' | 'low' | 'auto'
  className?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = 'auto',
  className = '',
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  const fetchPriority = priority === 'high' ? 'high' : priority === 'low' ? 'low' : undefined
  const loading = priority === 'high' ? 'eager' : priority === 'low' ? 'lazy' : undefined
  const decoding = priority === 'high' ? 'sync' : 'async'

  useEffect(() => {
    if (priority === 'high' && src) {
      const img = new Image()
      img.onload = () => setIsLoaded(true)
      img.onerror = () => setError(true)
      img.src = src
    }
  }, [src, priority])

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      className={`${className} ${!isLoaded && !error ? 'opacity-0 bg-neutral-100' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={() => setIsLoaded(true)}
      onError={() => setError(true)}
      {...props}
    />
  )
}
