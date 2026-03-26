'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SubpageHero } from '@/components/SubpageHero'
import { motion } from 'framer-motion'
import { Settings, Wrench, BarChart3, ShieldCheck, Zap, Droplets } from 'lucide-react'

export default function ServicesPage() {
  const { t, isRTL } = useLanguage()

  const services = [
    {
      title: isRTL ? 'دراسة تقنية و استشارة' : 'Étude Technique & Conseil',
      desc: isRTL ? 'تحليل احتياجاتكم واقتراح الحلول الأكثر كفاءة وملاءمة لموقعكم لضمان أقصى قدر من التوفير.' : 'Analyse de vos besoins et proposition des solutions les plus efficaces adaptées à votre site pour garantir un maximum d\'économies.',
      icon: <BarChart3 size={40} />,
      features: [isRTL ? 'محاكاة الإنتاج' : 'Simulation de production', isRTL ? 'تحليل العائد على الاستثمار' : 'Analyse ROI', isRTL ? 'دراسة الجدوى' : 'Étude de faisabilité']
    },
    {
      title: isRTL ? 'تركيب احترافي' : 'Installation Professionnelle',
      desc: isRTL ? 'فريق من الفنيين المؤهلين لتركيب معداتكم وفقاً للمعايير الدولية الأكثر صرامة لضمان الأمان والأداء.' : 'Une équipe de techniciens qualifiés pour l\'installation de vos équipements selon les normes internationales les plus strictes pour garantir sécurité et performance.',
      icon: <Settings size={40} />,
      features: [isRTL ? 'تركيب مفتاح في اليد' : 'Installation clé en main', isRTL ? 'احترام المعايير الصارمة' : 'Respect des normes strictes', isRTL ? 'معدات معتمدة' : 'Matériel certifié']
    },
    {
      title: isRTL ? 'صيانة و متابعة' : 'Maintenance & Suivi',
      desc: isRTL ? 'نحن نضمن طول عمر نظامكم من خلال عقد صيانة وقائي وعلاجي ومراقبة عن بعد في الوقت الفعلي.' : 'Nous assurons la longévité de votre installation avec un contrat de maintenance préventive et curative et un monitoring à distance en temps réel.',
      icon: <Wrench size={40} />,
      features: [isRTL ? 'مراقبة عن بعد' : 'Monitoring à distance', isRTL ? 'تدخل سريع' : 'Intervention rapide', isRTL ? 'تحسين الأداء' : 'Optimisation de performance']
    }
  ]

  return (
    <main>
      <SubpageHero 
        title={t('nav_services')} 
        subtitle={isRTL ? 'خبرة فنية شاملة لمشاريعكم الشمسية، من الدراسة إلى الصيانة.' : 'Une expertise technique complète pour vos projets solaires, de l\'étude à la maintenance.'}
        videoSrc="/vid1.mp4"
      />

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container-xl">
          <div style={{ maxWidth: '800px', margin: '0 auto 80px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '40px', fontWeight: 800, color: '#1A1A1A', marginBottom: '24px' }}>
              {isRTL ? 'حلولنا الشاملة' : 'Nos Solutions de Bout en Bout'}
            </h2>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: 1.6 }}>
              {isRTL 
                ? 'نحن نوفر حلولاً طاقية مخصصة تلبي أعلى متطلبات الجودة والكفاءة.' 
                : 'Nous fournissons des solutions énergétiques sur mesure répondant aux plus hautes exigences de qualité et d\'efficacité.'}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ 
                  background: '#F9FAF9', 
                  borderRadius: '32px', 
                  padding: '50px 40px',
                  border: '1px solid #EAEAEA',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                className="hover:border-[#2E7D32] hover:shadow-2xl hover:bg-white group"
              >
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '24px', background: '#fff', color: '#2E7D32',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px',
                  boxShadow: '0 8px 20px rgba(0,0,0,0.05)', transition: 'all 0.3s ease'
                }} className="group-hover:bg-[#2E7D32] group-hover:text-white">
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '20px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif' }}>{service.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '32px', fontSize: '15px' }}>{service.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 600, color: '#444', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                      <Zap size={16} className="text-[#2E7D32]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Banner */}
      <section style={{ padding: '80px 0', background: '#2E7D32', color: '#fff', borderRadius: '40px', margin: '0 24px 100px', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container-xl" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px', flexWrap: 'wrap', flexDirection: isRTL ? 'row-reverse' : 'row', textAlign: isRTL ? 'right' : 'left' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '20px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif' }}>
                {isRTL ? 'فريق هندسي متخصص' : 'Une Ingénierie de Précision'}
              </h2>
              <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: 1.6 }}>
                {isRTL 
                  ? 'يستخدم مهندسونا أحدث أدوات المحاكاة والدراسة لتقديم حلول طاقية تتسم بالدقة والفعالية.' 
                  : 'Nos ingénieurs utilisent les derniers outils de simulation et d\'étude pour fournir des solutions énergétiques précises et efficaces.'}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ padding: '24px 48px', background: '#fff', color: '#2E7D32', borderRadius: '16px', fontWeight: 800, fontSize: '18px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            >
              {isRTL ? 'اطلب دراسة مجانية' : 'Demander une étude'}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
