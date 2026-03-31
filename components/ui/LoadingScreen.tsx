'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLoading } from '@/context/LoadingContext'

export function LoadingScreen() {
  const { isLoading, progress } = useLoading()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
            transition={{ 
              duration: 1.5,
              times: [0, 0.6, 1],
              ease: "easeOut"
            }}
            style={{ marginBottom: '60px' }}
          >
            <motion.img 
              src="/logo.png" 
              alt="SolarGlow" 
              style={{ 
                height: '100px', 
                width: 'auto', 
                objectFit: 'contain'
              }}
              animate={{
                filter: [
                  'drop-shadow(0 0 0px rgba(217,80,21,0))',
                  'drop-shadow(0 0 20px rgba(217,80,21,0.2))',
                  'drop-shadow(0 0 0px rgba(217,80,21,0))'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Percentage Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ 
              fontSize: '14px', 
              fontWeight: 800, 
              color: '#d95015', 
              marginBottom: '12px',
              fontFamily: 'Alexandria, sans-serif'
            }}
          >
            {Math.floor(progress)}%
          </motion.div>

          {/* Progress Bar Container */}
          <div style={{ 
            width: 'min(280px, 80%)', 
            height: '2px', 
            background: '#F5F5F5', 
            borderRadius: '10px', 
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Active Progress */}
            <motion.div 
               animate={{ width: `${progress}%` }}
               transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ 
                  height: '100%', 
                  background: 'linear-gradient(90deg, #022b63, #d95015)',
                  borderRadius: '10px'
                }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
