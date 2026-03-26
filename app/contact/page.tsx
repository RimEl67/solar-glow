'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SubpageHero } from '@/components/SubpageHero'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, Globe } from 'lucide-react'

export default function ContactPage() {
  const { t, isRTL } = useLanguage()

  return (
    <main>
      <SubpageHero
        title={t('nav_contact')}
        subtitle={isRTL ? 'نحن هنا للإجابة على جميع تساؤلاتكم. تواصلوا معنا للحصول على دراسة مجانية لمشروعكم.' : 'Nous sommes là pour répondre à toutes vos questions. Contactez-nous pour une étude gratuite de votre projet.'}
        bgImage="/about-engineer.jpg"
      />

      <section style={{ padding: '100px 0', background: '#fff' }}>
        <div className="container-xl">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '36px', fontWeight: 800, color: '#1A1A1A', marginBottom: '32px' }}>
                {isRTL ? 'معلومات الاتصال' : 'Coordonnées'}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#E8F5E9', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={24} />
                  </div>
                  <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                    <div style={{ fontSize: '14px', color: '#999', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>{isRTL ? 'الهاتف' : 'Téléphone'}</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A' }}>+212 6 61 28 91 88</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#E8F5E9', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={24} />
                  </div>
                  <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                    <div style={{ fontSize: '14px', color: '#999', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>Email</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A' }}>contact@solarglow.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#E8F5E9', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={24} />
                  </div>
                  <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                    <div style={{ fontSize: '14px', color: '#999', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>{isRTL ? 'العنوان' : 'Adresse'}</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A' }}>{isRTL ? 'مجمع الأعمال، الدار البيضاء، المغرب' : 'Business Center,  Maroc'}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#E8F5E9', color: '#2E7D32', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={24} />
                  </div>
                  <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                    <div style={{ fontSize: '14px', color: '#999', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>{isRTL ? 'ساعات العمل' : 'Horaires'}</div>
                    <div style={{ fontSize: '20px', fontWeight: 800, color: '#1A1A1A' }}>{isRTL ? 'الإثنين - الجمعة: 09:00 - 18:00' : 'Lun - Ven: 09:00 - 18:00'}</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '60px', padding: '30px', background: '#F9F9F9', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #EAEAEA', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#25D366', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageSquare size={24} />
                </div>
                <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <div style={{ fontWeight: 800, fontSize: '18px' }}>WhatsApp</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>{isRTL ? 'رد سريع في أقل من ساعة' : 'Réponse rapide en moins d\'une heure'}</div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ background: '#fff', padding: '50px', borderRadius: '32px', boxShadow: '0 20px 60px rgba(0,0,0,0.06)', border: '1px solid #F0F0F0' }}
            >
              <h2 style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '32px', fontWeight: 800, color: '#1A1A1A', marginBottom: '32px' }}>
                {isRTL ? 'أرسل لنا رسالة' : 'Envoyer un message'}
              </h2>

              <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <input type="text" placeholder={isRTL ? 'الاسم الكامل' : 'Nom Complet'} style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #EAEAEA', fontSize: '15px', outline: 'none', textAlign: isRTL ? 'right' : 'left' }} />
                  <input type="email" placeholder="Email" style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #EAEAEA', fontSize: '15px', outline: 'none', textAlign: isRTL ? 'right' : 'left' }} />
                </div>
                <input type="text" placeholder={isRTL ? 'الموضوع' : 'Sujet'} style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #EAEAEA', fontSize: '15px', outline: 'none', textAlign: isRTL ? 'right' : 'left' }} />
                <textarea rows={5} placeholder={isRTL ? 'رسالتك...' : 'Votre message...'} style={{ padding: '16px 20px', borderRadius: '12px', border: '1px solid #EAEAEA', fontSize: '15px', outline: 'none', textAlign: isRTL ? 'right' : 'left', resize: 'none' }}></textarea>

                <button style={{
                  background: '#2E7D32', color: '#fff', padding: '18px', borderRadius: '12px', border: 'none', fontSize: '16px', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginTop: '10px'
                }}>
                  {isRTL ? 'إرسال الرسالة' : 'Envoyer le message'} <Send size={20} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>


    </main>
  )
}
