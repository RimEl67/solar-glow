'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '@/context/LanguageContext'
import { Menu, X, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

export function Navbar() {
  const { language, setLanguage, t, isRTL } = useLanguage()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isHomePage = pathname === '/'

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

  // Define colors based on scroll state
  const navBg = scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'
  const navColor = scrolled ? '#1A1A1A' : '#FFFFFF'
  const navShadow = scrolled ? '0 10px 30px rgba(0,0,0,0.08)' : 'none'
  const logoFilter = scrolled ? 'none' : 'none' // We'll keep color logo or use invert if needed. 
  // Let's use white logo when transparent if it's on the homepage hero or sub-heroes (most subheroes are dark).
  const useInvertedLogo = !scrolled

  return (
    <>
      {/* Main Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: navBg,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #EAEAEA' : 'none',
        boxShadow: navShadow,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div className="container-xl" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: scrolled ? '8px 16px' : '16px 24px',
          transition: 'all 0.3s ease'
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <img
              src="/logo.png"
              alt="SolarGlow"
              style={{
                height: scrolled ? '55px' : '75px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease'
              }}
            />
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
                  fontWeight: 700,
                  color: navColor,
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                  fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif'
                }}
                className={scrolled ? "hover:text-[#d95015] hover:bg-[#fdf5dd]" : "hover:text-white/80 hover:bg-white/10"}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Language Switcher */}
            <div style={{
              display: 'flex',
              background: scrolled ? '#F5F5F5' : 'rgba(255,255,255,0.1)',
              borderRadius: '30px',
              padding: '4px',
              border: scrolled ? '1px solid #EAEAEA' : '1px solid rgba(255,255,255,0.2)',
              backdropFilter: scrolled ? 'none' : 'blur(4px)',
              transition: 'all 0.3s ease'
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
                  color: language === 'fr' ? '#d95015' : (scrolled ? '#777' : '#fff'),
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
                  color: language === 'ar' ? '#d95015' : (scrolled ? '#777' : '#fff'),
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
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: navColor }}
              className="lg:hidden"
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              style={{
                background: '#d95015',
                color: '#FFFFFF',
                padding: scrolled ? '10px 20px' : '12px 24px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(217,80,21,0.2)',
                transition: 'all 0.3s ease'
              }}
              className="hidden md:block hover:bg-[#bf4612] hover:-translate-y-0.5"
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
                    className="hover:bg-[#fdf5dd] hover:text-[#d95015]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    background: '#d95015',
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
