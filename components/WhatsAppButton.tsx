'use client'

import { useState, useEffect } from 'react'

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <a
      href="https://wa.me/212661289188"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '60px',
        height: '60px',
        background: '#25D366',
        color: '#fff',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '30px',
        boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)',
        zIndex: 9999,
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        transform: visible ? 'scale(1)' : 'scale(0)',
        opacity: visible ? 1 : 0,
        textDecoration: 'none',
      }}
      className="whatsapp-float"
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'
        e.currentTarget.style.boxShadow = '0 15px 30px rgba(37, 211, 102, 0.4)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1) translateY(0)'
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.3)'
      }}
    >
      <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.24-.579-.48-.5-.67-.51-.19-.01-.408-.01-.622-.01-.214 0-.564.08-.853.394-.29.314-1.106 1.083-1.106 2.641 0 1.558 1.134 3.064 1.293 3.262.158.198 2.228 3.402 5.398 4.763.754.324 1.343.517 1.804.663.757.24 1.446.207 1.99.125.607-.09 1.758-.718 2.008-1.411.25-.694.25-1.288.175-1.411-.075-.124-.275-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10s4.477-10 10-10 10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    </a>
  )
}
