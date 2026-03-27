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
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            style={{ marginBottom: '40px' }}
          >
            <div style={{
              width: '80px', height: '80px',
              background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
              borderRadius: '20px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 10px 30px rgba(46,125,50,0.2)'
            }}>
              <div style={{ width: '40px', height: '40px', border: '5px solid #fff', borderRadius: '50%' }} />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ 
                fontFamily: 'Sora, sans-serif', 
                fontSize: '28px', 
                fontWeight: 900, 
                color: '#1A1A1A', 
                marginBottom: '40px',
                letterSpacing: '-1px'
            }}
          >
            Solar<span style={{ color: '#2E7D32' }}>Glow</span>
          </motion.div>

          {/* Progress Bar Container */}
          <div style={{ 
            width: '240px', 
            height: '4px', 
            background: '#F0F0F0', 
            borderRadius: '4px', 
            overflow: 'hidden',
            position: 'relative'
          }}>
            {/* Active Progress */}
            <motion.div 
               animate={{ width: `${progress}%` }}
               transition={{ duration: 0.5, ease: "easeOut" }}
               style={{ 
                 height: '100%', 
                 background: '#2E7D32',
                 borderRadius: '4px'
               }}
            />
          </div>

          {/* Loading Text */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ 
              fontSize: '12px', 
              color: '#999', 
              fontWeight: 700, 
              marginTop: '16px', 
              textTransform: 'uppercase', 
              letterSpacing: '2px' 
            }}
          >
             {progress < 100 ? 'Chargement...' : 'Prêt'}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
