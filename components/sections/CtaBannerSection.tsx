'use client'

import { useLanguage } from '@/context/LanguageContext'

export function CtaBannerSection() {
  const { t, isRTL } = useLanguage()
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const stats = [
    { label: isRTL ? 'طاقة نظيفة' : 'D\'ÉNERGIE PROPRE', value: '100%' },
    { label: isRTL ? 'توفير في الفواتير' : 'ÉCO. SUR FACTURE', value: '-40%' },
    { label: isRTL ? 'ضمان المنتج' : 'GARANTIE PRODUIT', value: '25 ' + (isRTL ? 'سنة' : 'ANS') },
  ]

  return (
    <section style={{ padding: '40px 0 80px', background: '#F8F8F8' }}>
      <div className="container-xl">
        <div className="cta-banner" style={{
          padding: '64px',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Background decoration */}
          <div style={{
            position: 'absolute', [isRTL ? 'left' : 'right']: '-60px', top: '-60px',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', [isRTL ? 'left' : 'right']: '100px', bottom: '-40px',
            width: '200px', height: '200px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.04)', pointerEvents: 'none',
          }} />

          <div className="responsive-grid-2" style={{ gap: '48px', direction: isRTL ? 'rtl' : 'ltr' }}>
            {/* Left Content */}
            <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: 'rgba(255,255,255,0.15)', borderRadius: '50px',
                padding: '6px 16px', fontSize: '11px', color: '#fff',
                fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase',
                marginBottom: '20px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
              }}>
                {t('cta_tag')}
              </div>
              <h2 style={{
                fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif',
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: 800,
                color: '#fff',
                marginBottom: '16px',
                lineHeight: 1.1,
              }}>
                {t('cta_title')}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '17px', maxWidth: '520px', lineHeight: 1.6, marginBottom: '32px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {t('cta_sub')}
              </p>

              {/* Stats Grid */}
              <div style={{
                display: 'flex',
                gap: '32px',
                marginBottom: '40px',
                flexDirection: isRTL ? 'row-reverse' : 'row',
                justifyContent: isRTL ? 'flex-end' : 'flex-start'
              }}>
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div style={{ color: '#fff', fontSize: '24px', fontWeight: 800 }}>{stat.value}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.5px', marginTop: '4px' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              <div style={{
                display: 'flex',
                gap: '16px',
                flexDirection: isRTL ? 'row-reverse' : 'row',
                justifyContent: isRTL ? 'flex-end' : 'flex-start'
              }}>
                <button
                  onClick={() => scrollTo('produits')}
                  style={{
                    background: '#fff', color: '#2E7D32',
                    border: 'none', borderRadius: '12px',
                    padding: '18px 36px',
                    fontSize: '15px', fontWeight: 800,
                    cursor: 'pointer', fontFamily: isRTL ? 'Cairo, sans-serif' : 'DM Sans, sans-serif',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                    transition: 'all 0.2s',
                  }}
                  className="hover:scale-105 active:scale-95"
                >
                  {t('cta_btn_1')} {isRTL ? '←' : '→'}
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  style={{
                    background: 'transparent', color: '#fff',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '12px', padding: '16px 36px',
                    fontSize: '15px', fontWeight: 700,
                    cursor: 'pointer', fontFamily: isRTL ? 'Cairo, sans-serif' : 'DM Sans, sans-serif',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                  }}
                  className="hover:bg-white/10 hover:border-white"
                >
                  {t('cta_btn_2')}
                </button>
              </div>
            </div>

            {/* Right Content: Video */}
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              aspectRatio: '16/10',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <video
                src="/vid1.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              {/* Video overlays placeholder like in example */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                padding: '8px',
                background: 'rgba(0,0,0,0.4)',
                borderRadius: '50%',
                backdropFilter: 'blur(4px)',
                color: '#fff'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}