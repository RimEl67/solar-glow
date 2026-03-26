'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SubpageHero } from '@/components/SubpageHero'
import { motion } from 'framer-motion'
import { ShieldCheck, Target, Users, Award } from 'lucide-react'

export default function AboutPage() {
  const { t, isRTL } = useLanguage()


  return (
    <main>
      <SubpageHero
        title={t('nav_about')}
        subtitle={isRTL ? 'رائد في حلول الطاقة الشمسية في المغرب بخبرة تزيد عن 10 سنوات.' : 'Leader des solutions solaires au Maroc avec plus de 10 ans d\'expertise.'}
        bgImage="/about-engineer.jpg"
      />

      {/* Mission & Vision */}
      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div className="container-xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div style={{
                display: 'inline-block', padding: '6px 16px', background: 'rgba(46,125,50,0.1)', color: '#2E7D32', borderRadius: '50px', fontSize: '13px', fontWeight: 700, marginBottom: '20px', letterSpacing: '1px'
              }}>
                {isRTL ? 'مهمتنا' : 'NOTRE MISSION'}
              </div>
              <h2 style={{
                fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '36px', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px', lineHeight: 1.2
              }}>
                {isRTL ? 'تسريع الانتقال الطاقي في المغرب' : 'Accélérer la transition énergétique au Maroc'}
              </h2>
              <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>
                {isRTL
                  ? 'منذ تأسيسها، تلتزم SolarGlow بتوفير حلول طاقة نظيفة ومستدامة وعالية الأداء. نحن نرافق عملائنا في تحولهم الطاقي من خلال تقديم خبرة تقنية لا مثيل لها ومنتجات من أفضل العلامات التجارية العالمية.'
                  : 'Depuis notre création, SolarGlow s\'engage à fournir des solutions d\'énergie propre, durable et performante. Nous accompagnons nos clients dans leur transition énergétique en offrant une expertise technique inégalée et des produits issus des meilleures marques mondiales.'}
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
            >
              <img src="/about-install.jpg" alt="Installation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', background: '#F8F9F7' }}>
        <div className="container-xl">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '32px', fontWeight: 800, color: '#1A1A1A' }}>
              {isRTL ? 'لماذا تختار SolarGlow؟' : 'Pourquoi choisir SolarGlow ?'}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              {
                title: isRTL ? 'الخبرة التقنية' : 'Expertise Technique',
                desc: isRTL ? 'فريق من المهندسين المتخصصين لدراسة مشاريعكم.' : 'Une équipe d\'ingénieurs spécialisés pour l\'étude de vos projets.',
                icon: <Cpu size={32} />
              },
              {
                title: isRTL ? 'جودة متميزة' : 'Qualité Premium',
                desc: isRTL ? 'نحن نستخدم فقط المكونات المعتمدة دولياً.' : 'Nous n\'utilisons que des composants certifiés internationalement.',
                icon: <Award size={32} />
              },
              {
                title: isRTL ? 'دعم مستمر' : 'Accompagnement',
                desc: isRTL ? 'خدمة ما بعد البيع متاحة 24/7 لضمان استمرارية طاقتكم.' : 'Service après-vente disponible 24/7 pour assurer votre énergie.',
                icon: <Users size={32} />
              }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: '#fff', padding: '40px', borderRadius: '20px', border: '1px solid #EAEAEA', textAlign: 'center' }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#E8F5E9', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '16px' }}>{v.title}</h3>
                <p style={{ color: '#777', lineHeight: 1.6 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function Cpu(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}
