import { HeroSection } from '../../components/sections/HeroSection'
import { FeaturedSection } from '../../components/sections/FeaturedSection'
import { PromoSection } from '../../components/sections/PromoSection'
import { TrendingSection } from '../../components/sections/TrendingSection'
import { CategorySection } from '../../components/sections/CategorySection'
import { NewsletterSection } from '../../components/sections/NewsletterSection'

export function HomePage({ onSelectProduct }) {
  return (
    <main className="bg-white">
      {/* 1. Hero Block (Plan the best - fixed size) */}
      <HeroSection />

      {/* 2. Recently Viewed (6 cards - fixed density) */}
      <TrendingSection onSelectProduct={onSelectProduct} />

      {/* 3. Our picks for you (Order picks for you - exact 2-column grid) */}
      <FeaturedSection onSelectProduct={onSelectProduct} />

      {/* 4. Gifts as special as they are (Circle Bubbles - fixed photos) */}
      <CategorySection />

      {/* 5. Jump into featured interests (Carousel) */}
      <PromoSection onSelectProduct={onSelectProduct} />

      {/* 6. Promotional Blue Box */}
      <NewsletterSection />
      
      {/* Bottom Padding */}
      <div className="h-4 md:h-20" />
    </main>
  )
}
