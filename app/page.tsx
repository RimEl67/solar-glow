import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ProductsSection } from '@/components/sections/ProductsSection'
import { CategoriesSection } from '@/components/sections/CategoriesSection'
import { CtaBannerSection } from '@/components/sections/CtaBannerSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main style={{ background: '#FFFFFF', overflowX: 'hidden' }}>
      <HeroSection />
      <StatsSection />
      <CategoriesSection />
      <ProductsSection />
      <CtaBannerSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
