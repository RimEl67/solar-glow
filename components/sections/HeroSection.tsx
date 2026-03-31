'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  const { t, isRTL } = useLanguage()
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)

  const slides = [
    {
      tag: t('hero_tag_4'),
      title: t('hero_title_4'),
      subtitle: t('hero_sub_4'),
      cta: t('hero_cta_4'),
      video: '/vid.mp4'
    },
    {
      tag: t('hero_tag_3'),
      title: t('hero_title_3'),
      subtitle: t('hero_sub_3'),
      cta: t('hero_cta_3'),
      video: '/vid1.mp4'
    }
  ]

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [slides.length])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [slides.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 0.5 // Adjust for speed
      })
    }, 40) // Roughly 8 seconds for a full cycle (100 / 0.5 * 40ms)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      background: '#000',
    }}>
      {/* Background Videos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'brightness(0.8) contrast(1.1)'
            }}
          >
            <source src={slides[current].video} type="video/mp4" />
          </video>
          {/* Overlay Gradient */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.6) 100%)',
          }} />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="container-xl" style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: '80px',
        textAlign: isRTL ? 'right' : 'left',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ maxWidth: '750px' }}
          >
            {/* Pill Tag */}
            <div style={{
              display: 'inline-flex',
              padding: '8px 20px',
              background: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '30px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              marginBottom: '24px',
              fontSize: '13px',
              fontWeight: 700,
              color: '#FFFFFF',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif'
            }}>
              {slides[current].tag}
            </div>

            {/* Title */}
            <h1 style={{
              fontSize: 'clamp(32px, 6vw, 64px)',
              lineHeight: 1.1,
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '24px',
              letterSpacing: '-1.5px',
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif'
            }}>
              {slides[current].title}
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: 'rgba(255,255,255,0.95)',
              marginBottom: '48px',
              maxWidth: '600px',
              lineHeight: 1.6,
              fontWeight: 500,
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
            }}>
              {slides[current].subtitle}
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '20px',
              flexDirection: isRTL ? 'row-reverse' : 'row',
              flexWrap: 'wrap'
            }}>
              <Link
                href="/produits"
                style={{
                  padding: '18px 36px',
                  background: '#FFFFFF',
                  color: '#1A1A1A',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
                className="hover:scale-105"
              >
                {slides[current].cta}
                {!isRTL && <ChevronRight size={18} />}
                {isRTL && <ChevronLeft size={18} />}
              </Link>

              <Link
                href="/contact"
                style={{
                  padding: '18px 36px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease'
                }}
                className="hover:bg-white hover:text-black"
              >
                {t('ui_devis')}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>



      {/* Progress Line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: '4px',
        width: `${progress}%`,
        background: '#d95015',
        zIndex: 30,
        transition: 'width 0.04s linear'
      }} />

      {/* Slide Indicators (Optional) */}
      <div style={{
        position: 'absolute',
        right: '40px',
        bottom: '80px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        zIndex: 20
      }}>
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => { setCurrent(i); setProgress(0); }}
            style={{
              width: '4px',
              height: i === current ? '40px' : '20px',
              background: i === current ? '#d95015' : 'rgba(255,255,255,0.3)',
              borderRadius: '2px',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          />
        ))}
      </div>
    </section>
  )
}
