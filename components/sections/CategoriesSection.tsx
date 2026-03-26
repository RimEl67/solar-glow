'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Zap, 
  Battery, 
  Droplets, 
  Box, 
  Lightbulb, 
  Thermometer, 
  Cpu, 
  Wrench, 
  Settings, 
  Activity, 
  ShieldCheck 
} from 'lucide-react'

export function CategoriesSection() {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.1 })
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const categories = [
    { label: t('cat_panneaux'), count: 10, icon: <Sun size={32} /> },
    { label: t('cat_onduleurs'), count: 57, icon: <Zap size={32} /> },
    { label: t('cat_batteries'), count: 17, icon: <Battery size={32} /> },
    { label: t('cat_pompes'), count: 56, icon: <Droplets size={32} /> },
    { label: t('cat_kits'), count: 6, icon: <Box size={32} /> },
    { label: t('cat_projecteurs'), count: 8, icon: <Lightbulb size={32} /> },
    { label: t('cat_chauffe_eau'), count: 11, icon: <Thermometer size={32} /> },
    { label: t('cat_coffrets'), count: 9, icon: <Cpu size={32} /> },
    { label: t('cat_support'), count: 1, icon: <Wrench size={32} /> },
    { label: t('cat_materiels'), count: 13, icon: <Settings size={32} /> },
    { label: t('cat_variateurs'), count: 9, icon: <Activity size={32} /> },
    { label: t('cat_ups'), count: 5, icon: <ShieldCheck size={32} /> },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section ref={sectionRef} style={{ background: '#F8F9F7', padding: '100px 0', overflow: 'hidden' }}>
      <div className="container-xl">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px', flexWrap: 'wrap', gap: '16px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <div className="section-tag reveal">
              {isRTL ? 'كتالوج كامل' : 'CATALOGUE COMPLET'}
            </div>
            <h2 className="section-title-underline reveal delay-100" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {t('cat_title')}
            </h2>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '24px',
          }}
        >
          {categories.map((cat, i) => (
            <Link
              key={i}
              href="/produits"
              style={{ textDecoration: 'none' }}
              className="group"
            >
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #F0F0F0',
                  borderRadius: '16px',
                  padding: '32px 20px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.015)'
                }}
                className="hover:border-[#2E7D32] hover:shadow-lg"
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(46,125,50,0.04)',
                  color: '#2E7D32',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  transition: 'all 0.3s ease'
                }}
                className="group-hover:bg-[#2E7D32] group-hover:text-white"
                >
                  <div style={{ transform: 'scale(0.85)' }}>
                    {cat.icon}
                  </div>
                </div>
                
                <h3 style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: '#1A1A1A',
                  margin: '0 0 6px',
                  textAlign: 'center',
                  fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif'
                }}>
                  {cat.label}
                </h3>
                
                <span style={{
                  fontSize: '12px',
                  color: '#999999',
                  fontWeight: 500,
                  fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
                }}>
                  {cat.count} {t('cat_items')}
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
