'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations } from '../constants_translations'

type Language = 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    if (language === 'ar') {
        document.body.style.fontFamily = "'Sora', 'Cairo', sans-serif"
    } else {
        document.body.style.fontFamily = "'Sora', sans-serif"
    }
  }, [language])

  const t = (key: string) => {
    return translations[language][key] || key
  }

  const isRTL = language === 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div className={isRTL ? 'rtl-mode' : 'ltr-mode'}>
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
