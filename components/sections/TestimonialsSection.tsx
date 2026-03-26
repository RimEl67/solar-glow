'use client'

import { useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function TestimonialsSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  const testimonials = [
    {
      name: isRTL ? 'يوسف العلوي' : 'Youssef Alaoui',
      company: isRTL ? 'علاوي بروموسيون العقارية' : 'Alaoui Promotion Immobilière',
      location: isRTL ? 'مراكش' : 'Marrakech',
      time: isRTL ? 'قبل شهرين' : 'il y a 2 mois',
      text: isRTL 
        ? "لقد وضعنا ثقتنا في SolarGlow لتجهيز إقامتنا المكونة من 24 فيلا في مراكش. عمل جاد، احترام للمواعيد ومواكبة إدارية كاملة. المشترون سعداء بالقيمة المضافة للطاقة."
        : "Nous avons confié à SolarGlow l'équipement solaire de notre résidence de 24 villas à Marrakech. Travail sérieux, délais tenus et accompagnement administratif complet. Les acquéreurs sont ravis de la valeur ajoutée énergétique.",
      stars: 5,
      color: '#2E7D32'
    },
    {
      name: isRTL ? 'حميد الشعيبي' : 'Hamid Chraibi',
      company: isRTL ? 'الشعيبي وشركاؤه - الترويج' : 'Chraibi & Associés — Promotion',
      location: isRTL ? 'الدار البيضاء' : 'Casablanca',
      time: isRTL ? 'قبل شهر' : 'il y a 1 mois',
      text: isRTL
        ? "تعاون في برنامج مكون من 60 شقة في الدار البيضاء. أدارت SolarGlow الهندسة المناخية والسباكة الحرارية بالكامل. تنسيق مثالي مع صاحب المشروع، صفر عيوب."
        : "Collaboration sur un programme de 60 appartements à Casablanca. SolarGlow a géré l'intégralité du génie climatique et de la plomberie thermodynamique. Coordination parfaite avec notre maître d'œuvre, zéro défaut.",
      stars: 5,
      color: '#E91E63'
    },
    {
      name: isRTL ? 'خالد الوزاني' : 'Khalid Ouazzani',
      company: isRTL ? 'الوزاني العقارية' : 'Ouazzani Immobilier',
      location: isRTL ? 'أكادير' : 'Agadir',
      time: isRTL ? 'قبل شهرين' : 'il y a 2 mois',
      text: isRTL
        ? "محطة كهروضوئية بقدرة 48 كيلوواط تم تركيبها على مبنى مكاتبنا. تتيح لنا المراقبة في الوقت الفعلي متابعة الإنتاج يومياً. SolarGlow تكلفت بجميع الإجراءات. شريك ممتاز."
        : "Centrale photovoltaïque de 48 kWc installée sur notre immeuble de bureaux. Le monitoring en temps réel nous permet de suivre la production au quotidien. SolarGlow a pris en charge toutes les démarches. Excellent partenaire.",
      stars: 5,
      color: '#2196F3'
    },
    {
      name: isRTL ? 'عمر الفاسي' : 'Omar El Fassi',
      company: isRTL ? 'الفاسي للتطوير' : 'El Fassi Développement',
      location: isRTL ? 'الرباط' : 'Rabat',
      time: isRTL ? 'قبل 3 أشهر' : 'il y a 3 mois',
      text: isRTL
        ? "متابعة الموقع مضمونة من قبل SolarGlow في تجزئتنا في تمارة. محاور مخلص من مديرية الهندسة المدنية إلى الاستقبال، تم احترام المواعيد والجودة في الموعد. سنعمل معاً مرة أخرى."
        : "Suivi de chantier assuré par SolarGlow sur notre lotissement de Témara. Un interlocuteur dédié du DCE à la réception, délais respectés et qualité au rendez-vous. Nous travaillerons à nouveau ensemble sur notre prochain programme.",
      stars: 5,
      color: '#FF5722'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-up').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="temoignages" ref={ref} style={{ background: '#FFFFFF', padding: '120px 0', overflow: 'hidden' }}>
      <div className="container-xl">
        {/* Top Section with Large Typography */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isRTL ? 'row-reverse' : 'row',
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          marginBottom: '80px',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: '300px', textAlign: isRTL ? 'right' : 'left' }}>
            <div className="section-tag reveal" style={{ marginBottom: '24px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? 'الشهادات' : 'TÉMOIGNAGES'}
            </div>
            <h2 className="reveal delay-100" style={{ 
              fontSize: 'clamp(40px, 8vw, 90px)', 
              fontWeight: 900, 
              lineHeight: 0.9, 
              color: '#000', 
              textTransform: 'uppercase',
              letterSpacing: '-2px',
              fontFamily: 'Sora, sans-serif',
              margin: 0
            }}>
              {isRTL ? 'هم يثقون بنا' : 'ILS NOUS FONT CONFIANCE'}
            </h2>
          </div>
          
          <div className="reveal delay-200" style={{ flex: 1, minWidth: '300px', textAlign: isRTL ? 'right' : 'left' }}>
            <p style={{ 
              fontSize: '18px', 
              color: '#444', 
              lineHeight: 1.6, 
              maxWidth: '500px',
              marginTop: '40px',
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit',
              [isRTL ? 'marginRight' : 'marginLeft']: 'auto'
            }}>
              {isRTL 
                ? "SolarGlow هي شركة جادة تركز على العلاقة مع عملائها. تقترح تدخلات كاملة، موثوقة ومستدامة." 
                : "SolarGlow est une entreprise sérieuse qui met l'accent sur la relation avec ses clients. Elle propose des interventions complètes, fiables et durables."}
              <br /><br />
              {isRTL
                ? "بفضل الالتزام المحلي وتعدد المهارات، يرافقكم فريقنا في كل مرحلة من مشروعكم للتحول الطاقي."
                : "Grâce à un engagement local et à la polyvalence de ses compétences, notre équipe vous accompagne à chaque étape de votre projet de transition énergétique."}
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          direction: isRTL ? 'rtl' : 'ltr'
        }}>
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`reveal-up delay-${(i + 1) * 100}`}
              style={{
                background: '#F9F9F9',
                borderRadius: '20px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'transform 0.3s ease, background 0.3s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: t.color,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 700,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  {t.name.charAt(0)}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#000', lineHeight: 1.2 }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{t.company} — {t.location}</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>{t.time}</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, star) => (
                  <span key={star} style={{ color: '#FFB800', fontSize: '14px' }}>★</span>
                ))}
              </div>

              <div style={{ 
                height: '1px', 
                background: '#E0E0E0', 
                width: '40px', 
                marginBottom: '16px' 
              }} />

              <p style={{ 
                fontSize: '14px', 
                color: '#333', 
                lineHeight: 1.6, 
                margin: 0,
                fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
              }}>
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
