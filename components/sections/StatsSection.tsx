'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { motion, useInView, animate } from 'framer-motion'

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.floor(v))
      })
    }
  }, [isInView, value])

  return <span ref={ref}>{displayValue}</span>
}

export function StatsSection() {
  const { isRTL } = useLanguage()

  const statsClass = {
    fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif',
  }

  const numberStyle: React.CSSProperties = {
    fontSize: '56px',
    fontWeight: 700,
    color: '#08331E', // Very dark green from screenshot
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    flexDirection: isRTL ? 'row-reverse' : 'row'
  }

  const symbolStyle: React.CSSProperties = {
    color: '#C19A5B', // Muted gold from screenshot
    fontSize: '32px',
    fontWeight: 600,
    marginTop: '6px'
  }

  const textStyle: React.CSSProperties = {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '1.5px',
    color: '#9E9E9E',
    marginTop: '12px',
    textTransform: 'uppercase',
    textAlign: 'center'
  }

  const dividerStyle: React.CSSProperties = {
    width: '1px',
    height: '60px',
    background: '#EAEAEA',
    margin: '0 24px',
  }

  const dotStyle: React.CSSProperties = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '1px solid #08331E',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 40px',
  }

  return (
    <section style={{ background: '#F8F9F7', padding: '80px 0 0' }}>
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            background: 'transparent',
            padding: '40px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            flexDirection: isRTL ? 'row-reverse' : 'row'
          }}
        >
          {/* Item 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ ...numberStyle, ...statsClass }}>
              <AnimatedNumber value={15} /> <span style={{ ...symbolStyle, ...statsClass }}>+</span>
            </div>
            <div style={{ ...textStyle, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? 'ميجاواط مثبتة' : 'MW INSTALLÉS'}
            </div>
          </div>

          <div style={dividerStyle} className="hidden md:block" />

          {/* Item 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ ...numberStyle, ...statsClass }}>
              <AnimatedNumber value={2500} /> <span style={{ ...symbolStyle, ...statsClass }}>+</span>
            </div>
            <div style={{ ...textStyle, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? 'طن CO2 تم تجنبه' : 'TONNES CO2 ÉVITÉES'}
            </div>
          </div>

          {/* Decorative Dot */}
          <div style={dotStyle} className="hidden lg:flex">
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#08331E' }} />
          </div>

          <div style={dividerStyle} className="hidden md:block lg:hidden" />

          {/* Item 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ ...numberStyle, ...statsClass }}>
              <AnimatedNumber value={197} /> <span style={{ ...symbolStyle, ...statsClass }}>+</span>
            </div>
            <div style={{ ...textStyle, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? 'مشروع منجز' : 'PROJETS RÉALISÉS'}
            </div>
          </div>

          <div style={dividerStyle} className="hidden md:block" />

          {/* Item 4 */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ ...numberStyle, ...statsClass }}>
              <AnimatedNumber value={8} /> <span style={{ ...symbolStyle, ...statsClass, marginTop: '12px', fontSize: '24px' }}>{isRTL ? 'سنوات' : 'ans'}</span>
            </div>
            <div style={{ ...textStyle, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
              {isRTL ? 'من الخبرة' : "D'EXPÉRIENCE"}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
