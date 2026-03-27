'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const miniStats = [
  { num: '14', label: 'TYPES DE PANNEAUX' },
  { num: '< 48h', label: 'DELAI DE DEVIS' },
  { num: '24/7', label: 'SUPPORT CLIENT' },
]

export function TechDemoSection() {
  const { isRTL } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const [playing, setPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.15 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <section id="tech-demo" ref={ref} style={{ background: '#0B2215', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* BG grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(245,166,35,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', top: '-150px', left: '-100px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(74,222,128,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <div className="responsive-grid-2" style={{ gap: '72px', direction: isRTL ? 'rtl' : 'ltr' }}>

          {/* LEFT: Text content */}
          <div>
            {/* Tag */}
            <div className="reveal" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              color: '#F5A623', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
              marginBottom: '24px',
            }}>
              <div style={{ width: '30px', height: '2px', background: '#F5A623' }} />
              NOTRE TECHNOLOGIE EN ACTION
            </div>

            {/* Headline */}
            <h2 className="reveal delay-100" style={{
              
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '8px',
            }}>
              Voyez notre<br />
              <em style={{
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #4ADE80, #22C55E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Solaire</em> en Action
            </h2>

            {/* Divider */}
            <div className="reveal delay-200" style={{ width: '50px', height: '3px', background: '#F5A623', margin: '20px 0 24px', borderRadius: '2px' }} />

            <p className="reveal delay-200" style={{ fontSize: '16px', color: '#8DAF96', lineHeight: '1.8', marginBottom: '36px', maxWidth: '440px' }}>
              De l&apos;etude en amont a l&apos;installation finale et au suivi maintenance &mdash; tout notre savoir-faire a portee de main, pour votre projet solaire.
            </p>

            {/* Mini stats row */}
            <div className="reveal delay-300" style={{ display: 'flex', gap: '40px', marginBottom: '40px' }}>
              {miniStats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: '28px', fontWeight: 900, color: '#F5A623', lineHeight: 1 }}>{s.num}</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '1.5px', color: '#6B8A72', marginTop: '4px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              className="btn-gold reveal delay-400"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              DEMANDER UNE DEMO
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* RIGHT: Video player */}
          <div className="reveal-right delay-100">
            <div style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(74,222,128,0.15)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,222,128,0.1)',
            }}>
              {/* Corner brackets */}
              <div style={{ position: 'absolute', top: '12px', left: '12px', width: '20px', height: '20px', borderTop: '2px solid #F5A623', borderLeft: '2px solid #F5A623', zIndex: 5 }} />
              <div style={{ position: 'absolute', top: '12px', right: '12px', width: '20px', height: '20px', borderTop: '2px solid #F5A623', borderRight: '2px solid #F5A623', zIndex: 5 }} />
              <div style={{ position: 'absolute', bottom: '12px', left: '12px', width: '20px', height: '20px', borderBottom: '2px solid #F5A623', borderLeft: '2px solid #F5A623', zIndex: 5 }} />
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '20px', height: '20px', borderBottom: '2px solid #F5A623', borderRight: '2px solid #F5A623', zIndex: 5 }} />

              {/* Video */}
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
              >
                <source src="/vid.mp4" type="video/mp4" />
              </video>

              {/* Play/Pause overlay button */}
              <button
                onClick={togglePlay}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '44px',
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px',
                  zIndex: 10,
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,166,35,0.8)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.6)')}
              >
                {playing ? 'PAUSE' : 'PLAY'}
              </button>

              {/* Bottom status bar */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(7,26,13,0.95), transparent)',
                padding: '24px 20px 16px',
                display: 'flex', alignItems: 'center', gap: '8px',
                zIndex: 5,
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px #4ADE80', animation: 'glowPulse 1.5s ease-in-out infinite' }} />
                <span style={{ fontSize: '12px', color: '#C5D9CB', letterSpacing: '1px' }}>INSTALLATION EN COURS — RABAT, MAROC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
