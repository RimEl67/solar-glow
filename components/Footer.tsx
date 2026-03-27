'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t, isRTL } = useLanguage()
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const scrollTo = (id: string) => {
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  const categories = [
    t('cat_panneaux'), t('cat_onduleurs'), t('cat_batteries'),
    t('cat_kits'), t('cat_pompes'), t('cat_projecteurs'), t('cat_chauffe_eau'),
    t('cat_coffrets'),
  ]

  const links = {
    [isRTL ? 'الشركة' : 'Entreprise']: [
      { label: t('nav_about'), id: 'about' },
      { label: t('nav_projects'), id: 'projets' },
      { label: isRTL ? 'المدونة / الأخبار' : 'Blog / Actualités', id: 'blog' },
      { label: isRTL ? 'الأسئلة الشائعة' : 'FAQ', id: 'contact' },
      { label: t('nav_contact'), id: 'contact' },
    ],
    [isRTL ? 'قانوني' : 'Legal']: [
      { label: isRTL ? 'شروط الاستخدام' : "Conditions d'utilisation", id: '' },
      { label: isRTL ? 'سياسة الخصوصية' : 'Politique de confidentialité', id: '' },
      { label: isRTL ? 'إشعار قانوني' : 'Mentions légales', id: '' },
      { label: isRTL ? 'سياسة الارجاع' : 'Politique de retour', id: '' },
    ],
  }

  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #E8E8E8', padding: '60px 0 40px' }}>
      <div className="container-xl">
        <div className="footer-grid" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>

          {/* Brand & Contact */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '40px', height: '40px',
                background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '20px',
              }}>
                <div style={{ width: '20px', height: '20px', background: '#fff', borderRadius: '50%' }} />
              </div>
              <div style={{ fontFamily: 'Sora, sans-serif', fontSize: '18px', fontWeight: 800, color: '#1A1A1A' }}>
                Solar<span style={{ color: '#2E7D32' }}>Glow</span>
              </div>
            </div>

            <p style={{
              fontSize: '13px',
              color: '#666',
              lineHeight: 1.6,
              margin: 0,
              textAlign: isRTL ? 'right' : 'left',
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
            }}>
              {t('footer_desc')}
            </p>
          </div>

          {/* Quick links */}
          <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <div className="footer-col-title" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit', fontSize: '14px', fontWeight: 800, color: '#000', marginBottom: '16px' }}>
              {isRTL ? 'الفئات' : 'Catégories'}
            </div>
            {categories.slice(0, 5).map((cat) => (
              <button key={cat} className="footer-link" onClick={() => scrollTo('produits')} style={{ display: 'block', background: 'none', border: 'none', padding: '4px 0', fontSize: '13px', color: '#666', cursor: 'pointer', textAlign: isRTL ? 'right' : 'left', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Company */}
          <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <div className="footer-col-title" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit', fontSize: '14px', fontWeight: 800, color: '#000', marginBottom: '16px' }}>
              {isRTL ? 'الشركة' : 'Entreprise'}
            </div>
            {links[isRTL ? 'الشركة' : 'Entreprise'].map((item) => (
              <button key={item.label} className="footer-link" onClick={() => scrollTo(item.id)} style={{ display: 'block', background: 'none', border: 'none', padding: '4px 0', fontSize: '13px', color: '#666', cursor: 'pointer', textAlign: isRTL ? 'right' : 'left', fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <div className="footer-col-title" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit', fontSize: '14px', fontWeight: 800, color: '#000', marginBottom: '16px' }}>
              Contact
            </div>
            <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>{isRTL ? 'سيدي معروف، الدار البيضاء' : ''}</div>
              <div style={{ fontWeight: 700, color: '#2E7D32' }}>+212 6 61 28 91 88</div>
              <div>contact@solarglow.com</div>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div style={{ borderTop: '1px solid #E8E8E8', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <p style={{ fontSize: '13px', color: '#999', margin: 0, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
            © {year} {t('footer_rights')} {isRTL ? '— الدار البيضاء، المغرب' : '—  Maroc'}
          </p>
          <p style={{ fontSize: '13px', color: '#999', margin: 0, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
            {isRTL ? 'الشمس في خدمتكم، 24 ساعة في اليوم' : 'Le soleil à votre service, 24h/24'}
          </p>
        </div>
      </div>
    </footer>
  )
}
