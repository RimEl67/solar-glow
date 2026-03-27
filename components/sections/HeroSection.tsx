'use client'

import { useEffect, useState, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function HeroSection() {
  const { t, isRTL } = useLanguage()
  const [current, setCurrent] = useState(0)

  const slides = [
    {
      id: 0,
      tag: t('hero_tag_1'),
      title: t('hero_title_1'),
      subtitle: t('hero_sub_1'),
      cta: t('hero_cta_1'),
      bg: '#1B5E20',
      video: '/vid.mp4'
    },
    {
      id: 1,
      tag: t('hero_tag_2'),
      title: t('hero_title_2'),
      subtitle: t('hero_sub_2'),
      cta: t('hero_cta_2'),
      bg: '#004D40',
      video: '/vid1.mp4'
    },
    {
      id: 2,
      tag: t('hero_tag_3'),
      title: t('hero_title_3'),
      subtitle: t('hero_sub_3'),
      cta: t('hero_cta_3'),
      bg: '#0D47A1',
      video: '/vid.mp4'
    },
    {
      id: 3,
      tag: t('hero_tag_4'),
      title: t('hero_tag_4'),
      subtitle: t('hero_sub_1'),
      cta: t('hero_cta_1'),
      bg: '#4A148C',
      video: '/vid1.mp4'
    },
  ]

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length)
  }, [slides.length])

  useEffect(() => {
    const timer = setInterval(next, 7000)
    return () => clearInterval(timer)
  }, [next])

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length)

  const slide = slides[current]

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        maxHeight: '1080px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', // Center for all screens to simplify
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* Background Videos with Cross-fade */}
      {slides.map((s, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: index === current ? 1 : 0,
            pointerEvents: 'none'
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          >
            <source src={s.video} type="video/mp4" />
          </video>
          {/* Overlay for individual slide colors if needed */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 100%)`,
          }} />
        </motion.div>
      ))}

      {/* Persistent UI Elements above videos */}
      
      {/* Background decoration (Pattern) */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)',
        pointerEvents: 'none'
      }} />

      {/* Decorative circles */}
      <div style={{ position: 'absolute', [isRTL ? 'left' : 'right']: '-80px', top: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.03)', zIndex: 1 }} />
      <div style={{ position: 'absolute', [isRTL ? 'left' : 'right']: '80px', bottom: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 1 }} />

      {/* Content */}
      <div className="container-xl" style={{ 
        position: 'relative', 
        zIndex: 10, 
        width: '100%',
        display: 'flex',
        justifyContent: isRTL ? 'flex-end' : 'flex-start',
        padding: '0 20px'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ 
              maxWidth: '720px', 
              textAlign: isRTL ? 'right' : 'left',
              margin: isRTL ? '0 0 0 auto' : '0'
            }}
            className="mobile-content-center"
          >
            {/* Tag */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(255,255,255,0.12)',
              borderRadius: '50px', padding: '6px 16px',
              fontSize: '12px', color: '#fff', fontWeight: 600,
              marginBottom: '24px',
              border: '1px solid rgba(255,255,255,0.2)',
              flexDirection: isRTL ? 'row-reverse' : 'row',
              letterSpacing: '0.5px',
              textTransform: 'uppercase'
            }}>
              {slide.tag}
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif',
              fontSize: 'clamp(34px, 7vw, 64px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: isRTL ? 1.3 : 1.05,
              marginBottom: '20px',
              letterSpacing: '-1.5px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(15px, 2.5vw, 20px)',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.6,
              marginBottom: '40px',
              maxWidth: '560px',
              marginLeft: isRTL ? 'auto' : '0',
              marginRight: isRTL ? '0' : 'auto',
              textShadow: '0 1px 5px rgba(0,0,0,0.2)'
            }}
            className="hero-subtitle-mobile"
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <Link
                href="/produits"
                style={{
                  background: '#fff', color: '#1B4D2E',
                  border: 'none', borderRadius: '12px',
                  padding: '16px 32px',
                  fontSize: '15px', fontWeight: 800,
                  cursor: 'pointer', fontFamily: isRTL ? 'Cairo, sans-serif' : 'DM Sans, sans-serif',
                  transition: 'all 0.3s ease',
                  display: 'flex', alignItems: 'center', gap: '10px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  flexDirection: isRTL ? 'row-reverse' : 'row',
                  textDecoration: 'none'
                }}
                className="w-full sm:w-auto justify-center"
              >
                {slide.cta} {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
              </Link>
              <Link
                href="/contact"
                style={{
                  background: 'rgba(255,255,255,0.08)', color: '#fff',
                  border: '1px solid rgba(255,255,255,0.25)',
                  borderRadius: '12px',
                  padding: '16px 32px',
                  fontSize: '15px', fontWeight: 700,
                  cursor: 'pointer', fontFamily: isRTL ? 'Cairo, sans-serif' : 'DM Sans, sans-serif',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(12px)',
                  textDecoration: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
                className="w-full sm:w-auto"
              >
                {t('ui_devis')}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '10px', zIndex: 20,
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? '36px' : '10px',
              height: '10px',
              borderRadius: '50px',
              background: i === current ? '#fff' : 'rgba(255,255,255,0.3)',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', padding: 0,
            }}
          />
        ))}
      </div>

      {/* Arrow controls - Desktop only */}
      <button
        onClick={prev}
        className="hidden md:flex"
        style={{
          position: 'absolute', left: '32px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '50%', width: '56px', height: '56px',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#fff', zIndex: 20,
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)', e.currentTarget.style.borderColor = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)', e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={next}
        className="hidden md:flex"
        style={{
          position: 'absolute', right: '32px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '50%', width: '56px', height: '56px',
          alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', color: '#fff', zIndex: 20,
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)', e.currentTarget.style.borderColor = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)', e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
      >
        <ChevronRight size={28} />
      </button>
    </section>
  )
}
