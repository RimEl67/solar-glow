'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

type FormData = { name: string; phone: string; service: string; message: string }

export function ContactSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const [form, setForm] = useState<FormData>({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    const whatsappNumber = '212661289188'
    const serviceMap: Record<string, string> = {
      'panneaux': isRTL ? 'ألواح شمسية' : 'Panneaux solaires',
      'pompage': isRTL ? 'ضخ مياه' : 'Pompage',
      'maintenance': isRTL ? 'صيانة' : 'Maintenance'
    }

    const message = `*Nouvelle Demande de Devis - SolarGlow*\n\n` +
      `*Nom:* ${form.name}\n` +
      `*Téléphone:* ${form.phone}\n` +
      `*Service:* ${serviceMap[form.service] || form.service}\n` +
      `*Message:* ${form.message}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
    setLoading(false)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid #E0E0E0',
    color: '#1A2E22',
    fontSize: '15px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '14px',
    color: '#d95015',
    fontWeight: 700,
    marginBottom: '8px',
    fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif',
  }

  const infos = [
    { title: isRTL ? 'هاتف' : 'Téléphone', text: '+212 522 00 00 00' },
    { title: 'Email', text: 'contact@solarglow.ma' },
    { title: isRTL ? 'ساعات العمل' : 'Horaires', text: isRTL ? 'الاثنين-الجمعة: 9 صباحاً-6 مساءً\nالسبت: 9 صباحاً-1 مساءً' : 'Lun–Ven: 9h–18h\nSam: 9h–13h' },
  ]

  return (
    <section id="contact" ref={ref} style={{ background: '#F9FAFB', padding: '100px 0', borderTop: '1px solid #EAEAEA' }}>
      <div className="container-xl">
        <div className="responsive-grid-2" style={{ gap: '60px', alignItems: 'start', direction: isRTL ? 'rtl' : 'ltr' }}>

          {/* Left Column: Form */}
          <div className="reveal-left" style={{ textAlign: isRTL ? 'right' : 'left' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                <div style={{ width: '64px', height: '64px', background: '#fdf5dd', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#8cc311', fontSize: '32px', fontWeight: 900 }}>✓</div>
                <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#022b63', marginBottom: '12px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>{isRTL ? 'تم إرسال الرسالة بنجاح' : 'Message envoyé avec succès'}</h3>
                <p style={{ color: '#6B8A72', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>{isRTL ? 'سيتصل بك فريقنا في أقرب وقت ممكن.' : 'Notre équipe vous contactera dans les plus brefs délais.'}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#022b63', marginBottom: '48px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>
                  {isRTL ? 'اطلب عرض سعر خاص بك' : 'Demandez votre Obtenir un devis'}
                </h2>

                <div className="form-grid" style={{ marginBottom: '32px', gridTemplateColumns: '1fr' }}>
                  <div>
                    <label style={labelStyle}>{isRTL ? 'الاسم الكامل *' : 'Nom complet *'}</label>
                    <input required style={inputStyle} placeholder={isRTL ? 'اسمك' : 'Votre nom'} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#d95015')}
                      onBlur={e => (e.target.style.borderColor = '#E0E0E0')} />
                  </div>
                </div>

                <div className="form-grid" style={{ marginBottom: '32px' }}>
                  <div>
                    <label style={labelStyle}>{isRTL ? 'الهاتف' : 'Téléphone'}</label>
                    <input type="tel" style={inputStyle} placeholder="+212 XX XXX XXXX" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#d95015')}
                      onBlur={e => (e.target.style.borderColor = '#E0E0E0')} />
                  </div>
                  <div>
                    <label style={labelStyle}>{isRTL ? 'الخدمة المطلوبة *' : 'Service souhaité *'}</label>
                    <select required style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', background: 'transparent url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%232E7D32%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E") no-repeat right 10px center / 10px 10px' }} value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      onFocus={e => (e.target.style.borderColor = '#d95015')}
                      onBlur={e => (e.target.style.borderColor = '#E0E0E0')}>
                      <option value="">{isRTL ? 'اختر...' : 'Sélectionnez...'}</option>
                      <option value="panneaux">{isRTL ? 'ألواح شمسية' : 'Panneaux solaires'}</option>
                      <option value="pompage">{isRTL ? 'ضخ مياه' : 'Pompage'}</option>
                      <option value="maintenance">{isRTL ? 'صيانة' : 'Maintenance'}</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <label style={labelStyle}>{isRTL ? 'رسالة *' : 'Message *'}</label>
                  <textarea required rows={1} style={{ ...inputStyle, resize: 'none' }} placeholder={isRTL ? 'صف مشروعك...' : 'Décrivez votre projet...'} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={e => (e.target.style.borderColor = '#d95015')}
                    onBlur={e => (e.target.style.borderColor = '#E0E0E0')} />
                </div>

                <div style={{ display: 'flex', justifyContent: isRTL ? 'flex-end' : 'flex-start' }}>
                  <button type="submit" disabled={loading} style={{
                    background: '#d95015', color: '#fff', padding: '16px 32px', borderRadius: '40px', border: 'none',
                    fontSize: '15px', fontWeight: 700, cursor: 'pointer', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif',
                    display: 'flex', alignItems: 'center', gap: '8px', opacity: loading ? 0.7 : 1, transition: 'all 0.3s'
                  }}>
                    {loading ? (
                      <><span style={{ width: '16px', height: '16px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.7s linear infinite' }} /> {isRTL ? 'جاري الإرسال...' : 'Envoi en cours...'}</>
                    ) : (
                      <>{isRTL ? 'إرسال' : 'Envoyer'}</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Info */}
          <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '40px', paddingTop: '20px' }}>
            {infos.map((info, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                <div style={{ width: '4px', height: '24px', background: '#F5A623', borderRadius: '2px', flexShrink: 0, marginTop: '2px' }} />
                <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#022b63', marginBottom: '6px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>{info.title}</div>
                  <div style={{ fontSize: '15px', color: '#6B8A72', whiteSpace: 'pre-line', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit', lineHeight: 1.5 }}>{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
