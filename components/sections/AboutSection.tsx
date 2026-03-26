'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export function AboutSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach((el) => {
            el.classList.add('visible')
          })
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const values = [
    { title: t('about_val_1_t'), desc: t('about_val_1_d') },
    { title: t('about_val_2_t'), desc: t('about_val_2_d') },
    { title: t('about_val_3_t'), desc: t('about_val_3_d') },
    { title: t('about_val_4_t'), desc: t('about_val_4_d') },
  ]

  return (
    <section id="about" ref={ref} style={{ background: '#FFFFFF', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative orb */}
      <div style={{ position: 'absolute', top: '-100px', [isRTL ? 'left' : 'right']: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-xl">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }} className="md:grid-cols-2 grid-cols-1">
          
          {/* Left: Images stacked */}
          <div className={isRTL ? 'reveal-right' : 'reveal-left'} style={{ position: 'relative', height: '580px' }}>
            {/* Main image */}
            <div style={{ position: 'absolute', top: 0, [isRTL ? 'right' : 'left']: 0, [isRTL ? 'left' : 'right']: '60px', height: '400px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}>
              <Image src="/about-engineer.jpg" alt="Ingénieur SolarGlow" fill style={{ objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, rgba(7,11,20,0.6) 100%)' }} />
            </div>
            {/* Second image */}
            <div style={{ position: 'absolute', bottom: 0, [isRTL ? 'left' : 'right']: 0, width: '280px', height: '240px', borderRadius: '16px', overflow: 'hidden', border: '3px solid #F5A623', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              <Image src="/about-install.jpg" alt="Installation Panneau Solaire" fill style={{ objectFit: 'cover' }} />
            </div>
            {/* Gold badge */}
            <div style={{
              position: 'absolute', top: '50%', [isRTL ? 'left' : 'right']: '40px',
              background: 'linear-gradient(135deg, #F5A623, #FFB84D)',
              color: '#071A0D',
              borderRadius: '16px',
              padding: '20px 24px',
              fontWeight: 800,
              textAlign: 'center',
              boxShadow: '0 8px 30px rgba(245,166,35,0.4)',
              zIndex: 10,
            }}>
              <div style={{ fontSize: '32px', lineHeight: 1 }}>{t('about_exp_val')}</div>
              <div style={{ fontSize: '12px', letterSpacing: '1px', marginTop: '4px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{t('about_exp_txt')}</div>
            </div>
          </div>

          {/* Right: Text */}
          <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <div className="gold-tag reveal" style={{ marginBottom: '20px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{t('about_tag')}</div>
            <h2 className="section-heading reveal delay-100" style={{ color: '#1A2E22', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', lineHeight: isRTL ? 1.4 : 1.2 }}>
              {t('about_title_1')}<br /><span className="text-gradient">{t('about_title_2')}</span><br />{t('about_title_3')}
            </h2>
            <div className="gold-line reveal delay-200" style={{ marginLeft: isRTL ? 'auto' : '0', marginRight: isRTL ? '0' : 'auto' }} />
            <p className="section-sub reveal delay-200" style={{ marginBottom: '32px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {t('about_sub')}
            </p>
            <p className="reveal delay-300" style={{ fontSize: '16px', color: '#4B6354', lineHeight: '1.7', marginBottom: '40px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {t('about_mission')}
            </p>

            {/* Values grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {values.map((v, i) => (
                <div key={i} className={`glass-card reveal delay-${(i + 2) * 100}`} style={{ padding: '20px', textAlign: isRTL ? 'right' : 'left' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1A2E22', marginBottom: '4px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{v.title}</div>
                  <div style={{ fontSize: '13px', color: '#6B8A72', lineHeight: '1.5', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{v.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '48px' }}>
              <Link
                href="/about"
                style={{
                  display: 'inline-block',
                  background: '#2E7D32',
                  color: '#fff',
                  padding: '16px 40px',
                  borderRadius: '12px',
                  fontWeight: 800,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(46,125,50,0.2)',
                  transition: 'all 0.3s ease',
                  fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif'
                }}
                className="hover:bg-[#1B5E20] hover:-translate-y-1"
              >
                {isRTL ? 'تعرف علينا أكثر' : 'En savoir plus sur nous'}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
