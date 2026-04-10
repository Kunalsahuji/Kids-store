import { HeroSection } from '../../components/sections/HeroSection'
import { TrendingSection } from '../../components/sections/TrendingSection'
import { ShopFeaturedSection } from '../../components/sections/ShopFeaturedSection'
import { FeaturedSection } from '../../components/sections/FeaturedSection'
import { CategorySection } from '../../components/sections/CategorySection'
import { PromoSection } from '../../components/sections/PromoSection'
import { NewsletterSection } from '../../components/sections/NewsletterSection'
import { AboutSection } from '../../components/sections/AboutSection'

export function HomePage({ onSelectProduct }) {
  return (
    <main className="bg-cream">
      {/* 1. Hero Block (Plan the best) */}
      <HeroSection />

      {/* 2. Recently Viewed (6 cards - no titles) */}
      <TrendingSection onSelectProduct={onSelectProduct} />

      {/* 3. Our picks for you (6 cards - no titles) */}
      <FeaturedSection onSelectProduct={onSelectProduct} />

      {/* 4. Shop Feature (More from madlywish) */}
      <ShopFeaturedSection onSelectProduct={onSelectProduct} />

      {/* 5. Gifts as special as they are (Circle Bubbles) */}
      <CategorySection />

      {/* 6. Jump into featured interests (Peeking Cards Slider) */}
      <PromoSection />

      {/* 7. Promotional Blue Box (Email Newsletter) */}
      <NewsletterSection />

      {/* 8. Informational SEO Block (What is Toyove India?) */}
      <AboutSection />
      
      {/* Bottom Padding */}
      <div className="h-4 md:h-12" />
    </main>
  )
}
