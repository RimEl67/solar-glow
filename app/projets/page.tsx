'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SubpageHero } from '@/components/SubpageHero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar, Camera } from 'lucide-react'

const projects = [
  {
    title: { fr: 'Ferme Solaire Industrielle', ar: 'مزرعة شمسية صناعية' },
    location: { fr: 'Benguerir', ar: 'بن جرير' },
    type: { fr: 'Industriel', ar: 'صناعي' },
    date: '2023',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: { fr: 'Pompage Solaire Agricole', ar: 'الضخ الشمسي الزراعي' },
    location: { fr: 'Dakhla', ar: 'الداخلة' },
    type: { fr: 'Agricole', ar: 'زراعي' },
    date: '2024',
    img: '/pompage.png',
  },
  {
    title: { fr: 'Villa Résidentielle Autonome', ar: 'فيلا سكنية مستقلة' },
    location: { fr: 'Rabat', ar: 'الرباط' },
    type: { fr: 'Résidentiel', ar: 'سكني' },
    date: '2023',
    img: 'https://gosolar.ma/wp-content/uploads/2023/12/Nos-solutions-gosolar-maroc.jpg',
  },
  {
    title: { fr: 'Toiture Solaire Logistique', ar: 'سقف شمسي لوجستي' },
    location: { fr: 'Casablanca', ar: 'الدار البيضاء' },
    type: { fr: 'Industriel', ar: 'صناعي' },
    date: '2022',
    img: 'https://dome-solar.com/wp-content/uploads/Almaden-Morocco-toiture-bitumineuse-fabrication-panneaux-solaires-photovolta%C3%AFques.jpg',
  },
  {
    title: { fr: 'Système Solaire Village Isolé', ar: 'نظام شمسي لقرية معزولة' },
    location: { fr: 'Azilal', ar: 'أزيلال' },
    type: { fr: 'Social', ar: 'اجتماعي' },
    date: '2023',
    img: 'https://industries.ma/wp-content/uploads/2021/09/CENTRALE-PHOTOVOLTAIQUE.jpeg',
  },
  {
    title: { fr: 'Hôtel Éco-Responsable', ar: 'فندق صديق للبيئة' },
    location: { fr: 'Ouarzazate', ar: 'ورزازات' },
    type: { fr: 'Tertiaire', ar: 'خدماتي' },
    date: '2024',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
  },
]

export default function ProjectsPage() {
  const { t, isRTL, language } = useLanguage()

  return (
    <main>
      <SubpageHero
        title={t('nav_projects')}
        subtitle={isRTL ? 'إنجازاتنا في جميع أنحاء المملكة، من الفيلات السكنية إلى المزارع الصناعية.' : 'Nos réalisations partout dans le Royaume, des villas résidentielles aux fermes industrielles.'}
        bgImage="/project-farm.jpg"
      />

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container-xl">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '20px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <div>
              <h2 style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '32px', fontWeight: 800, color: '#1A1A1A', marginBottom: '8px' }}>
                {isRTL ? 'معرض المشاريع' : 'Galerie de Projets'}
              </h2>
              <p style={{ color: '#777', fontWeight: 500 }}>{projects.length} {isRTL ? 'مشروع منجز بنجاح' : 'Projets réalisés avec succès'}</p>
            </div>
            {/* Filter Placeholder */}
            <div style={{ display: 'flex', gap: '8px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              {[isRTL ? 'الكل' : 'Tous', 'Industriel', 'Agricole', 'Résidentiel'].map((f, i) => (
                <button key={i} style={{ padding: '8px 20px', borderRadius: '12px', border: i === 0 ? 'none' : '1px solid #EAEAEA', background: i === 0 ? '#2E7D32' : '#fff', color: i === 0 ? '#fff' : '#555', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>{f}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '30px' }}>
            {projects.map((p, i) => {
              const title = language === 'ar' ? p.title.ar : p.title.fr
              const loc = language === 'ar' ? p.location.ar : p.location.fr
              const type = language === 'ar' ? p.type.ar : p.type.fr

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    borderRadius: '24px',
                    overflow: 'hidden',
                    background: '#fff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                    border: '1px solid #EAEAEA'
                  }}
                  className="group"
                >
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                    <Image src={p.img} alt={title} fill style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} className="group-hover:scale-110" />
                    <div style={{ position: 'absolute', top: '20px', [isRTL ? 'left' : 'right']: '20px', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(5px)', padding: '6px 14px', borderRadius: '10px', fontSize: '12px', fontWeight: 800, color: '#2E7D32', textTransform: 'uppercase' }}>
                      {type}
                    </div>
                  </div>
                  <div style={{ padding: '30px', textAlign: isRTL ? 'right' : 'left' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '16px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif' }}>{title}</h3>
                    <div style={{ display: 'flex', gap: '20px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#777', fontSize: '14px' }}>
                        <MapPin size={16} />
                        <span>{loc}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#777', fontSize: '14px' }}>
                        <Calendar size={16} />
                        <span>{p.date}</span>
                      </div>
                    </div>
                    <button style={{
                      marginTop: '24px', width: '100%', padding: '12px', borderRadius: '12px', background: '#F5F5F5', border: 'none', color: '#555', fontWeight: 700, fontSize: '14px', cursor: 'pointer', transition: 'all 0.2s'
                    }} className="group-hover:bg-[#2E7D32] group-hover:text-white">
                      {isRTL ? 'مشاهدة التفاصيل' : 'Voir les détails'}
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Callout */}
      <section style={{ padding: '100px 0', background: '#f8f9f7', textAlign: 'center' }}>
        <div className="container-xl">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#E8F5E9', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px' }}>
              <Camera size={40} />
            </div>
            <h2 style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '32px', fontWeight: 800, color: '#1A1A1A', marginBottom: '20px' }}>
              {isRTL ? 'هل لديك مشروع شمس؟' : 'Vous avez un projet solaire ?'}
            </h2>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: 1.6, marginBottom: '40px' }}>
              {isRTL
                ? 'انضم إلى آلاف العملاء الراضين الذين يثقون في SolarGlow لتحويل طاقتهم.'
                : 'Rejoignez les milliers de clients satisfaits qui font confiance à SolarGlow pour leur transformation énergétique.'}
            </p>
            <button style={{ padding: '16px 40px', background: '#2E7D32', color: '#fff', borderRadius: '12px', border: 'none', fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 10px 20px rgba(46,125,50,0.2)' }}>
              {isRTL ? 'تواصل معنا الآن' : 'Contactez-nous aujourd\'hui'}
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
