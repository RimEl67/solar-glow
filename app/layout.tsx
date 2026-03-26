import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2E7D32',
}

export const metadata: Metadata = {
  title: 'SolarGlow | Énergie Solaire Maroc — Panneaux Solaires & Pompage',
  description:
    'SolarGlow, votre spécialiste en énergie solaire au Maroc. Vente et installation de panneaux solaires, onduleurs, batteries, pompes et kits solaires à prix compétitifs.',
  keywords: [
    'panneaux solaires Maroc',
    'énergie solaire ',
    'pompage solaire',
    'onduleur solaire',
    'batterie lithium',
    'SolarGlow',
    'kit solaire',
  ],
  authors: [{ name: 'SolarGlow' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'SolarGlow | Énergie Solaire Maroc',
    description: 'Vente et installation de panneaux solaires, onduleurs, batteries et kits solaires au Maroc.',
  },
}

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { LanguageProvider } from '@/context/LanguageContext'

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Sora:wght@600;700;800;900&family=Cairo:wght@400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
