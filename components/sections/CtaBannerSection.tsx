'use client'

import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

export function CtaBannerSection() {
  const { t, isRTL } = useLanguage()

  const stats = [
    { label: isRTL ? 'طاقة نظيفة' : 'D\'ÉNERGIE PROPRE', value: '100%' },
    { label: isRTL ? 'توفير في الفواتير' : 'ÉCO. SUR FACTURE', value: '-40%' },
    { label: isRTL ? 'ضمان المنتج' : 'GARANTIE PRODUIT', value: '25 ' + (isRTL ? 'سنة' : 'ANS') },
  ]

  return (
    <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
      <div className="container-xl">
        <div className="cta-banner" style={{
          padding: 'clamp(32px, 6vw, 64px)',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          background: '#F9FAFB',
          border: '1px solid #EAEAEA',
          boxShadow: '0 20px 40px rgba(0,0,0,0.02)'
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute', [isRTL ? 'left' : 'right']: '-60px', top: '-60px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'rgba(217,80,21,0.05)', pointerEvents: 'none',
          }} />
          
          <div className="responsive-grid-2" style={{ gap: '48px', direction: isRTL ? 'rtl' : 'ltr' }}>
            {/* Left Content */}
            <div style={{ textAlign: isRTL ? 'right' : 'left', position: 'relative', zIndex: 2 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#fdf5dd', borderRadius: '50px',
                padding: '8px 20px', fontSize: '12px', color: '#d95015',
                fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                marginBottom: '24px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif'
              }}>
                {t('cta_tag')}
              </div>
              <h2 style={{
                fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 800,
                color: '#022b63',
                marginBottom: '20px',
                lineHeight: 1.15,
                letterSpacing: '-1px'
              }}>
                {t('cta_title')}
              </h2>
              <p style={{ color: '#666', fontSize: '18px', maxWidth: '520px', lineHeight: 1.65, marginBottom: '40px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {t('cta_sub')}
              </p>

              {/* Stats Grid */}
              <div style={{
                display: 'flex',
                gap: 'clamp(24px, 5vw, 48px)',
                marginBottom: '48px',
                flexWrap: 'wrap',
                flexDirection: isRTL ? 'row-reverse' : 'row',
                justifyContent: isRTL ? 'flex-end' : 'flex-start'
              }}>
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div style={{ color: '#d95015', fontSize: '28px', fontWeight: 800 }}>{stat.value}</div>
                    <div style={{ color: '#999', fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', marginTop: '4px', textTransform: 'uppercase' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap',
                flexDirection: isRTL ? 'row-reverse' : 'row',
                justifyContent: isRTL ? 'flex-end' : 'flex-start'
              }}>
                <Link
                  href="/produits"
                  style={{
                    background: '#d95015', color: '#fff',
                    border: 'none', borderRadius: '12px',
                    padding: '18px 36px',
                    fontSize: '15px', fontWeight: 800,
                    textDecoration: 'none',
                    fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 10px 25px rgba(217,80,21,0.2)',
                    transition: 'all 0.3s'
                  }}
                  className="hover:-translate-y-1 hover:shadow-lg"
                >
                  {t('cta_btn_1')} {isRTL ? '←' : '→'}
                </Link>
                <Link
                  href="/contact"
                  style={{
                    background: 'transparent', color: '#022b63',
                    border: '2px solid #022b63',
                    borderRadius: '12px', padding: '16px 36px',
                    fontSize: '15px', fontWeight: 700,
                    textDecoration: 'none',
                    fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s'
                  }}
                  className="hover:bg-[#022b63] hover:text-white"
                >
                  {t('cta_btn_2')}
                </Link>
              </div>
            </div>

            {/* Right Content: Video */}
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <video
                src="/vid1.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                padding: '10px',
                background: 'rgba(255,255,255,0.2)',
                borderRadius: '50%',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.3)'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}