'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function ServicesSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  const services = [
    {
      title: t('serv_1_t'),
      desc: t('serv_1_d'),
      features: isRTL 
        ? ['أداء عالي للبلورات الأحادية', 'ضمان 25 سنة على المنتج', 'استيراد مباشر من المصنع']
        : ['Monocristallin haute performance', 'Garantie 25 ans produit', 'Import direct fabricants'],
    },
    {
      title: t('serv_2_t'),
      desc: t('serv_2_d'),
      features: isRTL
        ? ['هجين، متصل، منفصل', 'بطاريات ليثيوم وجل', 'مراقبة في الوقت الحقيقي']
        : ['Hybride, On-grid, Off-grid', 'Batteries Lithium & Gel', 'Monitoring en temps réel'],
    },
    {
      title: t('serv_3_t'),
      desc: t('serv_3_d'),
      features: isRTL
        ? ['الري الزراعي', 'مياه الشرب', 'صفر تكلفة طاقة']
        : ['Irrigation agricole', 'Eau potable', 'Zéro coût d\'énergie'],
    },
    {
      title: t('serv_4_t'),
      desc: t('serv_4_d'),
      features: isRTL
        ? ['مجموعة سكنية', 'مجموعة للمقاولات والمشاريع الكبيرة', 'مجموعة ضخ شمسي']
        : ['Kit résidentiel', 'Kit PME / Grandes villas', 'Kit pompage solaire'],
    },
    {
      title: t('serv_5_t'),
      desc: t('serv_5_d'),
      features: isRTL
        ? ['كشافات 200 واط إلى 500 واط', 'أعمدة إنارة شمسي', 'إضاءة داخلية']
        : ['Projecteurs 200W à 500W', 'Lampadaires solaires', 'Éclairage intérieur'],
    },
    {
      title: t('serv_6_t'),
      desc: t('serv_6_d'),
      features: isRTL
        ? ['فنيون معتمدون', 'التشغيل مدرج', 'دعم فني 6 أيام في الأسبوع']
        : ['Techniciens certifiés', 'Mise en service incluse', 'Support technique 6j/7'],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.05 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} style={{ background: '#fff', padding: '72px 0' }}>
      <div className="container-xl">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '12px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <div className="section-tag reveal" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{t('serv_tag')}</div>
            <h2 className="section-title-underline reveal delay-100" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{t('serv_title')}</h2>
          </div>
          <p className="reveal delay-200" style={{ fontSize: '15px', color: '#666', maxWidth: '400px', lineHeight: 1.6, textAlign: isRTL ? 'right' : 'left', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
            {t('serv_sub')}
          </p>
        </div>

        <div
          className="reveal delay-200 grid md:grid-cols-3 sm:grid-cols-1"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}
        >
          {services.map((s, i) => (
            <div key={i} className="service-card" style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <div style={{
                width: '52px', height: '52px',
                background: '#E8F5E9',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '24px',
                marginBottom: '16px',
                marginLeft: isRTL ? 'auto' : '0',
                marginRight: isRTL ? '0' : 'auto'
              }}>
                <div style={{ width: '20px', height: '2px', background: '#2E7D32', borderRadius: '2px' }} />
              </div>
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif' }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, marginBottom: '16px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{s.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {s.features.map((f, fi) => (
                  <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#555', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                    <span style={{ color: '#2E7D32', fontWeight: 800, fontSize: '15px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/services" style={{ textDecoration: 'none' }}>
                <div style={{ marginTop: '20px', fontSize: '13px', fontWeight: 700, color: '#2E7D32', display: 'flex', alignItems: 'center', gap: '4px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  {t('serv_more')} {isRTL ? '←' : '→'}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
