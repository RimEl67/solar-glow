'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

import { usePathname } from 'next/navigation'

interface LoadingContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  progress: number
  setProgress: (progress: number) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  // If not on home page, we don't necessarily need to wait for videos
  useEffect(() => {
    if (pathname !== '/' && pathname !== '/ar') {
      setIsLoading(false)
    }
  }, [pathname])

  // Safety timeout: dismiss loader after 5 seconds if something fails
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading, progress, setProgress }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider')
  }
  return context
}
