import { useEffect, useRef, RefObject } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.1,
      ...options,
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return ref
}

export function useScrollAnimationElements(selector: string, options = {}) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(selector)
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-slide-up')
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        ...options,
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [selector, options])

  return containerRef
}
