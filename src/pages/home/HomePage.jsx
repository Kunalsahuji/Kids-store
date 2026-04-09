import { HeroSection } from '../../components/sections/HeroSection'
import { TrendingSection } from '../../components/sections/TrendingSection'
import { ShopFeaturedSection } from '../../components/sections/ShopFeaturedSection'
import { FeaturedSection } from '../../components/sections/FeaturedSection'
import { CategorySection } from '../../components/sections/CategorySection'
import { PromoSection } from '../../components/sections/PromoSection'
import { NewsletterSection } from '../../components/sections/NewsletterSection'

export function HomePage({ onSelectProduct }) {
  return (
    <main className="bg-cream">
      {/* 1. Hero Block (Plan the best - fixed size) */}
      <HeroSection />

      {/* 2. Recently Viewed (6 cards - no titles) */}
      <TrendingSection onSelectProduct={onSelectProduct} />

      {/* 3. Shop Feature (More from madlywish) */}
      <ShopFeaturedSection onSelectProduct={onSelectProduct} />

      {/* 4. Our picks for you (6 cards - no titles) */}
      <FeaturedSection onSelectProduct={onSelectProduct} />

      {/* 5. Gifts as special as they are (Circle Bubbles - fixed hover) */}
      <CategorySection />

      {/* 6. Jump into featured interests (Peeking Cards Slider) */}
      <PromoSection />

      {/* 7. Promotional Blue Box */}
      <NewsletterSection />
      
      {/* Bottom Padding */}
      <div className="h-4 md:h-20" />
    </main>
  )
}
