'use client'

import { useEffect, useRef } from 'react'

const advantages = [
  { num: '01', label: 'Equipement Premium', desc: 'Panneaux solaires Tier 1 avec garantie performance de 25 ans et onduleurs hybrides de pointe.' },
  { num: '02', label: 'Equipe Certifiee', desc: 'Installation effectuee par des techniciens agrees et formes aux dernieres normes de securite.' },
  { num: '03', label: 'Etude Sur Mesure', desc: 'Dimensionnement precis de votre systeme base sur une analyse approfondie de vos besoins reels.' },
  { num: '04', label: 'Retour sur Investissement', desc: 'Jusqu&apos;a 100% d&apos;economies sur votre facture electrique avec un amortissement rapide garanti.' },
  { num: '05', label: 'SAV Reactif', desc: 'Intervention sous 48h partout au Maroc avec gestion complete de la maintenance preventive.' },
  { num: '06', label: 'Impact Ecologique', desc: 'Reduction immediate de votre empreinte carbone pour contribuer activement au developpement durable.' },
]

export function AdvantagesSection() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-scale, .reveal-left').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="avantages" ref={ref} style={{ background: '#F9FAF8', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background dot pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(245,166,35,0.15) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div className="gold-tag reveal" style={{ marginBottom: '20px', display: 'inline-flex' }}>Pourquoi Nous Choisir</div>
          <h2 className="section-heading reveal delay-100" style={{ color: '#1A2E22' }}>
            La Qualite Sans <span className="text-gradient">Compromis</span>
          </h2>
          <p className="section-sub reveal delay-200" style={{ margin: '0 auto' }}>
            Un accompagnement d&apos;excellence pour garantir la reussite et la durabilite de votre projet solaire.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {advantages.map((a, i) => (
            <div
              key={i}
              className={`glass-card reveal delay-${((i % 3) + 1) * 100}`}
              style={{
                padding: '32px',
                borderTop: '3px solid transparent',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderTop = '3px solid #F5A623')}
              onMouseLeave={e => (e.currentTarget.style.borderTop = '3px solid transparent')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{
                  width: '50px', height: '50px',
                  background: 'rgba(245,166,35,0.12)',
                  borderRadius: '14px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0,
                }}>
                  <div style={{ width: '4px', height: '24px', background: '#F5A623', borderRadius: '2px' }} />
                </div>
                <div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#F5A623', fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{a.num}</div>
                  <div style={{ fontSize: '13px', color: '#1A2E22', fontWeight: 600, marginTop: '2px' }}>{a.label}</div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#6B8A72', lineHeight: '1.7', margin: 0 }}>{a.desc}</p>
            </div>
          ))}
        </div>

        <div
          className="reveal delay-400"
          style={{
            marginTop: '60px',
            borderRadius: '24px',
            padding: '60px 48px',
            background: 'linear-gradient(135deg, rgba(245,166,35,0.06) 0%, rgba(26,110,255,0.03) 100%)',
            border: '1px solid rgba(245,166,35,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#1A2E22', fontFamily: 'Playfair Display, serif', marginBottom: '8px' }}>
              Pret a passer a l&apos;energie solaire ?
            </h3>
            <p style={{ color: '#4B6354', fontSize: '16px', margin: 0 }}>
              Consultation gratuite, devis personnalise sous 24h, installation rapide.
            </p>
          </div>
          <button
            className="btn-gold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Commencer Maintenant
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
