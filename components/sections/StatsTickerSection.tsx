'use client'

import { useEffect, useRef } from 'react'

const tickerItems = [
  'ENERGIE SOLAIRE',
  'PANNEAUX SOLAIRES',
  'POMPAGE SOLAIRE',
  'INSTALLATION PROFESSIONNELLE',
  'ENERGIE RENOUVELABLE',
  'ETUDE DE PROJETS',
  'MAINTENANCE SAV',
  'MADE IN MOROCCO',
  'ZERO EMISSION CO2',
  'GARANTIE 25 ANS',
]

const stats = [
  { num: '2 000+', label: 'PROJETS REALISES' },
  { num: '50 MW', label: 'PUISSANCE INSTALLEE' },
  { num: '99 %', label: 'CLIENTS SATISFAITS' },
  { num: '15 ans', label: "D'EXPERIENCE" },
]

export function StatsTickerSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-scale').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} style={{ background: '#071A0D', position: 'relative', overflow: 'hidden' }}>

      {/* ===== SCROLLING TICKER ===== */}
      <div style={{
        borderTop: '1px solid rgba(245,166,35,0.2)',
        borderBottom: '1px solid rgba(245,166,35,0.2)',
        background: 'rgba(245,166,35,0.04)',
        overflow: 'hidden',
        padding: '14px 0',
        position: 'relative',
      }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, #071A0D, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, #071A0D, transparent)', zIndex: 2, pointerEvents: 'none' }} />

        <div style={{
          display: 'flex',
          animation: 'ticker 30s linear infinite',
          width: 'max-content',
        }}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '0 24px', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2.5px', color: '#C5D9CB', textTransform: 'uppercase' }}>{item}</span>
              <span style={{ color: '#F5A623', fontSize: '10px' }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== STATS BAR ===== */}
      <div style={{ background: '#FFFFFF', padding: '0' }}>
        {/* Top gold accent line */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #F5A623, transparent)' }} />

        <div className="container-xl reveal stats-bar-container">
          <div className="stats-ticker-grid">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`stats-ticker-item reveal-scale delay-${(i + 1) * 100}`}
                style={{
                  borderRight: i < stats.length - 1 ? '1px solid #E8EDE9' : 'none',
                }}
              >
                <div className="stats-ticker-num" style={{
                  color: i % 2 === 0 ? '#0B2215' : '#F5A623',
                }}>
                  {s.num}
                </div>
                <div className="stats-ticker-label">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, rgba(245,166,35,0.3), transparent)' }} />
      </div>

    </section>
  )
}
