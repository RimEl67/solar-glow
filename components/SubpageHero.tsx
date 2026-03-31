'use client'

import { useLanguage } from '@/context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { useEffect, useState } from 'react'

interface SubpageHeroProps {
  title: string
  subtitle?: string
  bgImage?: string
  videoSrc?: string
  phrases?: string[]
}

const DEFAULT_PHRASES: Record<string, string[]> = {
  'À Propos': [
    'Plus de 10 ans d\'expertise solaire',
    'Leader au Maroc',
    'Énergie propre & durable',
    'Une équipe passionnée',
  ],
  'من نحن': [
    'أكثر من 10 سنوات خبرة',
    'الرائد في المغرب',
    'طاقة نظيفة ومستدامة',
    'فريق متخصص',
  ],
  'Contact': [
    'Nous sommes à votre écoute',
    'Étude gratuite de votre projet',
    'Réponse en moins d\'une heure',
    'Experts disponibles 24/7',
  ],
  'اتصل بنا': [
    'نحن هنا للمساعدة',
    'دراسة مجانية لمشروعك',
    'رد في أقل من ساعة',
    'خبراء متاحون 24/7',
  ],
  'Produits': [
    'Qualité certifiée internationale',
    'Les meilleures marques mondiales',
    'Performant & fiable',
    'Solutions sur mesure',
  ],
  'المنتجات': [
    'جودة معتمدة دولياً',
    'أفضل العلامات التجارية',
    'أداء عالٍ وموثوق',
    'حلول مخصصة لكل احتياج',
  ],
}

export function SubpageHero({
  title,
  subtitle,
  bgImage = '/hero-bg.jpg',
  videoSrc,
  phrases,
}: SubpageHeroProps) {
  const { isRTL } = useLanguage()
  const [phraseIndex, setPhraseIndex] = useState(0)

  const activePhrases = phrases ?? DEFAULT_PHRASES[title] ?? []

  useEffect(() => {
    if (activePhrases.length === 0) return
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % activePhrases.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [activePhrases.length])

  return (
    <section
      style={{
        position: 'relative',
        height: '520px', // Increased height to maintain visual balance with padding
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#000',
        paddingTop: '80px'
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0.52,
          zIndex: 0,
        }}
      >
        <source src="/vid1.mp4" type="video/mp4" />
        {videoSrc && <source src={videoSrc} type="video/mp4" />}
      </video>

      {/* Image fallback */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.35,
          zIndex: 0,
        }}
      />

      {/* Dark gradient - stronger on left so text pops */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(100deg, rgba(0,25,8,0.88) 0%, rgba(0,30,10,0.70) 45%, rgba(0,0,0,0.28) 100%)',
          zIndex: 1,
        }}
      />

      {/* Subtle green glow */}
      <motion.div
        animate={{ opacity: [0.12, 0.28, 0.12], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '-100px',
          right: isRTL ? 'auto' : '-60px',
          left: isRTL ? '-60px' : 'auto',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #4CAF50 0%, transparent 68%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── Content - indented from edge ── */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingLeft: isRTL ? '0' : 'clamp(48px, 8vw, 120px)',
          paddingRight: isRTL ? 'clamp(48px, 8vw, 120px)' : '0',
        }}
      >
        <div
          style={{
            maxWidth: '720px',
            textAlign: isRTL ? 'right' : 'left',
            marginLeft: isRTL ? 'auto' : '0',
            marginRight: isRTL ? '0' : 'auto',
          }}
        >
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'rgba(255,255,255,0.60)',
              fontSize: '13px',
              marginBottom: '22px',
              flexDirection: isRTL ? 'row-reverse' : 'row',
              justifyContent: isRTL ? 'flex-end' : 'flex-start',
            }}
          >
            <Link
              href="/"
              style={{
                color: 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                textDecoration: 'none',
              }}
              className="hover:text-white transition-colors"
            >
              <Home size={13} />
              <span>{isRTL ? 'الرئيسية' : 'Accueil'}</span>
            </Link>
            <ChevronRight
              size={13}
              style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }}
            />
            <span style={{ color: '#66BB6A', fontWeight: 600 }}>{title}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            style={{
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif',
              fontSize: 'clamp(38px, 6vw, 66px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.05,
              marginBottom: '18px',
              letterSpacing: '-2px',
            }}
          >
            {title}
          </motion.h1>

          {/* ── Animated cycling phrase ── */}
          {activePhrases.length > 0 && (
            <div
              style={{
                height: '36px',
                overflow: 'hidden',
                marginBottom: subtitle ? '20px' : '0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: isRTL ? 'flex-end' : 'flex-start',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 24, filter: 'blur(5px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -24, filter: 'blur(5px)' }}
                  transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                  }}
                >
                  {/* Animated accent line that draws in */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.38, delay: 0.18, ease: 'easeOut' }}
                    style={{
                      display: 'inline-block',
                      height: '2.5px',
                      width: '32px',
                      background: 'linear-gradient(90deg, #4CAF50, #A5D6A7)',
                      borderRadius: '2px',
                      flexShrink: 0,
                      transformOrigin: isRTL ? 'right center' : 'left center',
                    }}
                  />
                  <span
                    style={{
                      fontSize: 'clamp(14px, 2vw, 19px)',
                      fontWeight: 700,
                      color: '#A5D6A7',
                      letterSpacing: '0.3px',
                      fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {activePhrases[phraseIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: 'clamp(15px, 1.8vw, 18px)',
                color: 'rgba(255,255,255,0.78)',
                maxWidth: '560px',
                lineHeight: 1.7,
                fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit',
                marginLeft: isRTL ? 'auto' : '0',
                fontWeight: 500,
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '90px',
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.45))',
          zIndex: 2,
        }}
      />
    </section>
  )
}