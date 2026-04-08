import { CategorySection } from '../../components/sections/CategorySection'
import { FeaturedSection } from '../../components/sections/FeaturedSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { NewArrivalsSection } from '../../components/sections/NewArrivalsSection'
import { PromoSection } from '../../components/sections/PromoSection'
import { TrendingSection } from '../../components/sections/TrendingSection'

export function HomePage({ onSelectProduct }) {
  return (
    <main>
      <HeroSection />
      <CategorySection />
      <FeaturedSection onSelectProduct={onSelectProduct} />
      <PromoSection onSelectProduct={onSelectProduct} />
      <NewArrivalsSection onSelectProduct={onSelectProduct} />
      <TrendingSection onSelectProduct={onSelectProduct} />
    </main>
  )
}
