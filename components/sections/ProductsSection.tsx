'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { allProducts, type Product } from '@/data/products'

function ProductCard({ product }: { product: Product }) {
  const { isRTL } = useLanguage()
  const isNew = product.badge === 'Nouveau'

  return (
    <div className="product-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Image area */}
      <div className="product-card-img" style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {product.badge && (
          <span className={isNew ? 'badge-new' : 'badge-sale'} style={{ zIndex: 2 }}>
            {product.badge}
          </span>
        )}
        <img
          src={product.image}
          alt={product.title}
          style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
        />
      </div>

      {/* Body */}
      <div className="product-card-body" style={{ padding: '20px', textAlign: isRTL ? 'right' : 'left', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div className="product-card-title" style={{ marginBottom: '8px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#022b63', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>{product.title}</div>
        </div>
        <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.5, margin: 0, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
          {product.description}
        </p>
      </div>
    </div>
  )
}

export function ProductsSection() {
  const { t, isRTL } = useLanguage()
  const ref = useRef<HTMLElement>(null)

  const TABS = [t('cat_panneaux'), t('cat_onduleurs'), t('cat_batteries'), t('cat_projecteurs')]
  const INTERNAL_CATEGORIES = ['Panneaux Solaires', 'Onduleurs Hybrides', 'Batteries', 'Projecteurs']
  const [activeTab, setActiveTab] = useState(TABS[0])

  useEffect(() => {
    setActiveTab(TABS[0])
  }, [t('cat_panneaux')]) 

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
        }
      })
    }, { threshold: 0.05 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const activeCategoryString = INTERNAL_CATEGORIES[TABS.indexOf(activeTab)] || 'Panneaux Solaires'
  const tabProducts = allProducts.filter(p => p.category === activeCategoryString)

  return (
    <section id="produits" ref={ref} style={{ background: '#f8f8f8', padding: '72px 0' }}>
      <div className="container-xl">

        {/* ===== BEST SELLERS with TABS ===== */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            <div style={{ textAlign: isRTL ? 'right' : 'left' }}>
              <div className="section-tag reveal" style={{ color: '#d95015', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>{t('prod_tag')}</div>
              <h2 className="section-title-underline reveal delay-100" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif', color: '#022b63' }}>{t('prod_title')}</h2>
            </div>
            <a
              href="#"
              style={{ fontSize: '14px', color: '#d95015', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', flexDirection: isRTL ? 'row-reverse' : 'row' }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              {t('prod_more')} {isRTL ? '←' : '→'}
            </a>
          </div>

          {/* Tabs */}
          <div className="reveal delay-200" style={{ display: 'flex', gap: '10px', marginBottom: '28px', flexWrap: 'wrap', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
            {TABS.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="products-grid reveal delay-300">
            {tabProducts.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* ===== SÉLECTION SPÉCIALE ===== */}
        <div style={{ marginBottom: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="section-tag reveal" style={{ color: '#d95015', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>Offres Spéciales</div>
              <h2 className="section-title-underline reveal delay-100" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif', color: '#022b63' }}>Nos Préférés du Moment</h2>
            </div>
          </div>

          <div className="products-grid reveal delay-200" id="promotions">
            {allProducts.filter(p => p.badge === 'Offre').slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* ===== NEW PRODUCTS ===== */}
        <div id="nouveaux">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="section-tag reveal" style={{ color: '#d95015', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif' }}>Arrivages</div>
              <h2 className="section-title-underline reveal delay-100" style={{ fontFamily: isRTL ? 'Cairo, sans-serif' : 'Alexandria, sans-serif', color: '#022b63' }}>Nouveaux Produits</h2>
            </div>
            <a
              href="#"
              style={{ fontSize: '14px', color: '#d95015', fontWeight: 600, textDecoration: 'none' }}
            >
              Voir tout →
            </a>
          </div>

          <div className="products-grid reveal delay-200">
            {allProducts.filter(p => p.badge === 'Nouveau').slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p as Product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
