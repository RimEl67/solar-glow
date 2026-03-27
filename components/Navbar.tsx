'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { Menu, X, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Navbar() {
  const { language, setLanguage, t, isRTL } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t('nav_home'), href: '/' },
    { label: t('nav_products'), href: '/produits' },
    { label: t('nav_about'), href: '/about' },
    { label: t('nav_services'), href: '/services' },
    { label: t('nav_projects'), href: '/projets' },
    { label: t('nav_contact'), href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>


      {/* Main Navbar */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : '#FFFFFF',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: '1px solid #EAEAEA',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.05)' : 'none',
        transition: 'all 0.3s ease'
      }}>
        <div className="container-xl" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: scrolled ? '12px 16px' : '16px 24px',
          transition: 'padding 0.3s ease'
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <div style={{
              width: '38px', height: '38px',
              background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
              borderRadius: '10px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(46,125,50,0.2)',
              flexShrink: 0
            }}>
              <div style={{ width: '18px', height: '18px', border: '2.5px solid #fff', borderRadius: '50%' }} />
            </div>
            <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <div style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', fontSize: '20px', fontWeight: 900, color: '#1A1A1A', letterSpacing: '-0.5px', lineHeight: 1 }}>
                Solar<span style={{ color: '#2E7D32' }}>Glow</span>
              </div>
              <div style={{ fontSize: '9px', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '2px' }}>
                {isRTL ? 'حلول الطاقة' : 'Solutions Énergie'}
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div style={{ gap: '4px', alignItems: 'center' }} className="hidden lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  padding: '8px 18px',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#333333',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
                }}
                className="hover:text-[#2E7D32] hover:bg-[#F1F8E9]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Language Switcher */}
            <div style={{
              display: 'flex',
              background: '#F5F5F5',
              borderRadius: '30px',
              padding: '4px',
              border: '1px solid #EAEAEA'
            }}>
              <button
                onClick={() => setLanguage('fr')}
                style={{
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  background: language === 'fr' ? '#FFFFFF' : 'transparent',
                  color: language === 'fr' ? '#2E7D32' : '#777',
                  boxShadow: language === 'fr' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('ar')}
                style={{
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 700,
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  background: language === 'ar' ? '#FFFFFF' : 'transparent',
                  color: language === 'ar' ? '#2E7D32' : '#777',
                  boxShadow: language === 'ar' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                  transition: 'all 0.3s ease',
                  fontFamily: 'Cairo, sans-serif'
                }}
              >
                عربي
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1A1A1A' }}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              style={{
                background: '#2E7D32',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(46,125,50,0.2)',
                transition: 'all 0.3s ease'
              }}
              className="hidden md:block hover:bg-[#1B5E20] hover:-translate-y-0.5"
            >
              {t('ui_devis')}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: '#FFFFFF',
                borderTop: '1px solid #EAEAEA',
                overflow: 'hidden'
              }}
              className="lg:hidden"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '20px' }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      textDecoration: 'none',
                      padding: '12px 20px',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#333333',
                      borderRadius: '8px',
                      textAlign: isRTL ? 'right' : 'left',
                      fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
                    }}
                    className="hover:bg-[#F1F8E9] hover:text-[#2E7D32]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    background: '#2E7D32',
                    color: '#FFFFFF',
                    padding: '16px',
                    borderRadius: '12px',
                    textAlign: 'center',
                    fontWeight: 700,
                    marginTop: '16px',
                    textDecoration: 'none'
                  }}
                >
                  {t('ui_devis')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
