'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useLanguage } from '@/context/LanguageContext'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projectData = [
  {
    fr: { title: 'Ferme Solaire Industrielle', location: 'Marrakech', desc: 'Installation au sol pour alimentation industrielle.' },
    ar: { title: 'مزرعة شمسية صناعية', location: 'مراكش', desc: 'تركيب أرضي للطاقة الصناعية.' },
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800',
  },
  {
    fr: { title: 'Pompage Solaire Agricole', location: 'Agadir', desc: 'Système d\'irrigation pour 200 hectares.' },
    ar: { title: 'الضخ الشمسي الزراعي', location: 'أكادير', desc: 'نظام ري لمساحة 200 هكتار.' },
    img: 'https://magriser.eleven.ma/uploads/pages/f05cae77-573f-4186-811c-54bbf6c55468.jpg',
  },
  {
    fr: { title: 'Villa Résidentielle Premium', location: 'Casablanca', desc: 'Installation avec monitoring en temps réel.' },
    ar: { title: 'فيلا سكنية فاخرة', location: 'الدار البيضاء', desc: 'تركيب مع نظام مراقبة في الوقت الفعلي.' },
    img: 'https://dualsun.com/wp-content/uploads/2018/08/photos-installation-panneaux-solaires-hybrides-dualsun-alleins-2.png',
  },
  {
    fr: { title: 'Centre Commercial Solaire', location: 'Tanger', desc: 'Autoconsommation pour centre commercial.' },
    ar: { title: 'مركز تجاري شمسي', location: 'طنجة', desc: 'الاستهلاك الذاتي لمركز تجاري.' },
    img: 'https://industries.ma/wp-content/uploads/2016/08/noor.jpg',
  },
]

export function ProjectsSection() {
  const { t, isRTL, language } = useLanguage()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    direction: isRTL ? 'rtl' : 'ltr',
    align: 'start',
    slidesToScroll: 1
  }, [Autoplay({ delay: 5000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="projets" style={{ background: '#fff', padding: '100px 0' }}>
      <div className="container-xl">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '64px', gap: '24px', flexWrap: 'wrap', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
          <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
            <h2 style={{
              fontSize: '36px',
              fontWeight: 700,
              color: '#1A1A1A',
              marginBottom: '12px',
              fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif'
            }}>
              {t('nav_projects')}
            </h2>
            <div style={{
              width: '60px',
              height: '4px',
              background: '#d95015',
              borderRadius: '2px',
              marginLeft: isRTL ? 'auto' : '0',
              marginRight: isRTL ? '0' : 'auto'
            }} />
          </div>

          {/* Nav Buttons */}
          <div style={{ display: 'flex', gap: '12px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <button
              onClick={scrollPrev}
              style={{
                width: '48px', height: '48px',
                borderRadius: '50%',
                border: '1px solid #E8E8E8',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#333',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#d95015'
                e.currentTarget.style.color = '#d95015'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E8E8E8'
                e.currentTarget.style.color = '#333'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              style={{
                width: '48px', height: '48px',
                borderRadius: '50%',
                border: '1px solid #E8E8E8',
                background: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#333',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#d95015'
                e.currentTarget.style.color = '#d95015'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E8E8E8'
                e.currentTarget.style.color = '#333'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="embla" style={{ overflow: 'hidden' }} ref={emblaRef}>
          <div className="embla__container" style={{ display: 'flex', touchAction: 'pan-y', marginLeft: '-24px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            {projectData.map((p, i) => {
              const content = language === 'ar' ? p.ar : p.fr
              return (
                <div key={i} className="embla__slide md:flex-[0_0_33.333%] sm:flex-[0_0_50%] flex-[0_0_100%] transition-transform duration-300 hover:scale-[1.02] pl-6">
                  <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-lg">
                    <Image src={p.img} alt={content.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6" style={{ textAlign: isRTL ? 'right' : 'left' }}>
                      <h3 className="text-white text-lg font-semibold mb-1" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                        {content.title}
                      </h3>
                      <p className="text-white/80 text-sm font-normal" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                        {content.location}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '40px'
        }}>
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              style={{
                width: i === selectedIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: i === selectedIndex ? '#d95015' : '#D1D1D1',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <Link
            href="/projets"
            style={{
              padding: '14px 40px',
              background: '#d95015',
              color: '#fff',
              borderRadius: '12px',
              fontWeight: 800,
              fontSize: '15px',
              textDecoration: 'none',
               boxShadow: '0 8px 20px rgba(217,80,21,0.2)',
               transition: 'all 0.3s ease',
               fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif'
             }}
             className="hover:bg-[#bf4612] hover:-translate-y-1"
          >
            {isRTL ? 'عرض جميع المشاريع' : 'Voir tous nos projets'}
          </Link>
        </div>
      </div>
    </section>
  )
}
