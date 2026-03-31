'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  image: string
  details?: string
  type?: string
  location?: string
  date?: string
  category?: string
}

export function Modal({ isOpen, onClose, title, image, details, type, location, date, category }: ModalProps) {
  const { isRTL } = useLanguage()

  if (!isOpen) return null

  const handleWhatsApp = () => {
    const whatsappNumber = '212661289188'
    const message = `Bonjour SolarGlow, je suis intéressé par : *${title}*. Pourriez-vous me donner plus de détails ?`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div key="modal-overlay" style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'absolute', inset: 0, background: 'rgba(2, 43, 99, 0.4)', backdropFilter: 'blur(8px)' }}
          />

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              position: 'relative',
              background: '#fff',
              width: '100%',
              maxWidth: '600px',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.9)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#022b63'
              }}
            >
              <X size={20} />
            </button>

            {/* Image Section */}
            <div style={{ position: 'relative', height: '300px', width: '100%', overflow: 'hidden' }}>
              <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {type && (
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#d95015', color: '#fff', padding: '6px 16px', borderRadius: '40px', fontSize: '13px', fontWeight: 700, fontFamily: 'Alexandria, sans-serif' }}>
                  {type}
                </div>
              )}
            </div>

            {/* Content Section */}
            <div style={{ padding: '40px', textAlign: isRTL ? 'right' : 'left' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#022b63', marginBottom: '16px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>
                {title}
              </h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '24px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                {location && <div style={{ fontSize: '14px', color: '#666', fontWeight: 600 }}>📍 {location}</div>}
                {date && <div style={{ fontSize: '14px', color: '#666', fontWeight: 600 }}>📅 {date}</div>}
                {category && <div style={{ fontSize: '14px', color: '#666', fontWeight: 600 }}>🏷️ {category}</div>}
              </div>

              {details && (
                <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '32px', fontSize: '15px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                  {details}
                </p>
              )}

              {/* Action Button */}
              <button
                onClick={handleWhatsApp}
                style={{
                  width: '100%',
                  padding: '18px',
                  background: '#d95015',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '16px',
                  fontSize: '16px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  transition: 'all 0.3s',
                  fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif'
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = '#bf4612')}
                onMouseOut={(e) => (e.currentTarget.style.background = '#d95015')}
              >
                <MessageSquare size={20} />
                {isRTL ? 'تواصل معنا على واتساب' : 'Contactez-nous sur WhatsApp'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
