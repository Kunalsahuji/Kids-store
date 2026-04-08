import { CategorySection } from '../../components/sections/CategorySection'
import { FeaturedSection } from '../../components/sections/FeaturedSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { NewsletterSection } from '../../components/sections/NewsletterSection'
import { NewArrivalsSection } from '../../components/sections/NewArrivalsSection'
import { PromoSection } from '../../components/sections/PromoSection'

export function HomePage({ onSelectProduct }) {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedSection onSelectProduct={onSelectProduct} />
      <PromoSection onSelectProduct={onSelectProduct} />
      <NewArrivalsSection onSelectProduct={onSelectProduct} />
      <NewsletterSection />
    </main>
  )
}
