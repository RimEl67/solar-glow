'use client'

import { useLanguage } from '@/context/LanguageContext'
import { SubpageHero } from '@/components/SubpageHero'
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
  ShieldCheck,
  Search,
  Filter,
  Tag,
  CheckCircle
} from 'lucide-react'

import { useState, useMemo } from 'react'
import { allProducts, type Product } from '@/data/products'

export default function ProductsPage() {
  const { t, isRTL } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>('Tous les produits')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    'Tous les produits',
    'Panneaux Solaires',
    'Onduleurs Hybrides',
    'Batteries',
    'Pompes Solaires',
    'Projecteurs',
    'Chauffe-eau',
    'Kits Solaires'
  ]

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p: Product) => {
      const matchesCategory = activeCategory === 'Tous les produits' || p.category === activeCategory
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <main>
      <SubpageHero 
        title={t('nav_products')} 
        subtitle={isRTL ? 'اكتشف مجموعتنا الواسعة من المنتجات الشمسية عالية الجودة من أفضل العلامات التجارية العالمية.' : 'Découvrez notre large gamme de produits solaires haute performance issus des meilleures marques mondiales.'}
        bgImage="/hero-bg.jpg"
      />

      {/* Main Content Area */}
      <section style={{ padding: '60px 0', background: '#F9F9F9', minHeight: '100vh' }}>
        <div className="container-xl" style={{ display: 'flex', gap: '32px', flexDirection: isRTL ? 'row-reverse' : 'row', alignItems: 'flex-start' }}>
          
          {/* Sidebar */}
          <div style={{ flex: '0 0 280px', background: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid #EAEAEA', position: 'sticky', top: '100px' }} className="hidden lg:block">
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '24px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif' }}>
              {isRTL ? 'الفئات' : 'Catégories'}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: activeCategory === cat ? '#F0FDF4' : 'transparent',
                    color: activeCategory === cat ? '#166534' : '#666',
                    border: 'none',
                    textAlign: isRTL ? 'right' : 'left',
                    fontWeight: activeCategory === cat ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    flexDirection: isRTL ? 'row-reverse' : 'row',
                    fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
                  }}
                  onMouseEnter={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.background = '#F8F8F8'
                      e.currentTarget.style.color = '#333'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCategory !== cat) {
                      e.currentTarget.style.background = 'transparent'
                      e.currentTarget.style.color = '#666'
                    }
                  }}
                >
                  {cat}
                  {activeCategory === cat && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#166534' }} />}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Search Bar for Grid */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '16px', flexDirection: isRTL ? 'row-reverse' : 'row' }}>
              <div style={{ position: 'relative', flex: '1 1 300px' }}>
                <Search size={20} style={{ position: 'absolute', [isRTL ? 'right' : 'left']: '20px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isRTL ? 'ابحث عن منتج...' : 'Rechercher un produit...'}
                  style={{ width: '100%', padding: '16px 56px', borderRadius: '16px', border: '1px solid #EAEAEA', fontSize: '15px', outline: 'none', textAlign: isRTL ? 'right' : 'left', background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}
                />
              </div>
              <div style={{ fontSize: '14px', color: '#666', fontWeight: 600 }}>
                {filteredProducts.length} {isRTL ? 'منتجات' : 'produits'}
              </div>
            </div>

            {/* Products Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
              {filteredProducts.map((product: Product, i: number) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{ 
                    background: '#fff', 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    border: '1px solid #EAEAEA', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '100%',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.03)'
                  }}
                >
                  {/* Image Area */}
                  <div style={{ position: 'relative', height: '260px', width: '100%', background: '#F8F9F7' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '16px', right: '16px', background: '#fff', color: '#166534', padding: '6px 14px', borderRadius: '8px', fontWeight: 800, fontSize: '12px', letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                      {product.badge ? product.badge.toUpperCase() : product.category.toUpperCase()}
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#1A1A1A', marginBottom: '16px', fontFamily: isRTL ? 'Cairo, sans-serif' : 'Sora, sans-serif', textAlign: isRTL ? 'right' : 'left' }}>
                      {product.title}
                    </h3>
                    
                    {/* Sub details */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', color: '#666', fontSize: '13px', fontWeight: 600, flexDirection: isRTL ? 'row-reverse' : 'row' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Tag size={16} color="#999" /> {product.category}
                      </div>
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#D9D9D9' }} />
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <CheckCircle size={16} color="#166534" /> {isRTL ? 'متوفر' : 'En Stock'}
                      </div>
                    </div>
                    
                    <div style={{ flexGrow: 1 }} />
                    
                    {/* Button */}
                    <button 
                      style={{ 
                        width: '100%', 
                        padding: '16px', 
                        background: '#F5F5F5', 
                        color: '#333', 
                        border: 'none', 
                        borderRadius: '12px', 
                        fontWeight: 700, 
                        fontSize: '15px', 
                        cursor: 'pointer', 
                        transition: 'background 0.3s, color 0.3s',
                        fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit'
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = '#2E7D32'
                        e.currentTarget.style.color = '#fff'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = '#F5F5F5'
                        e.currentTarget.style.color = '#333'
                      }}
                    >
                      {isRTL ? 'التفاصيل' : 'Voir les détails'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div style={{ padding: '60px 0', textAlign: 'center', color: '#999', fontSize: '18px', fontWeight: 600, fontFamily: isRTL ? 'Cairo, sans-serif' : 'inherit' }}>
                {isRTL ? 'لا توجد منتجات تطابق بحثك.' : 'Aucun produit ne correspond à votre recherche.'}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
