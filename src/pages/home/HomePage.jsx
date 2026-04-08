import { useState } from 'react'
import { AnnouncementBar } from '../../components/layout/AnnouncementBar'
import { Footer } from '../../components/layout/Footer'
import { MobileSidebar } from '../../components/layout/MobileSidebar'
import { Navbar } from '../../components/layout/Navbar'
import { CategorySection } from '../../components/sections/CategorySection'
import { FeaturedSection } from '../../components/sections/FeaturedSection'
import { HeroSection } from '../../components/sections/HeroSection'
import { NewsletterSection } from '../../components/sections/NewsletterSection'
import { NewArrivalsSection } from '../../components/sections/NewArrivalsSection'
import { PromoSection } from '../../components/sections/PromoSection'

export function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="page-shell">
      <AnnouncementBar />
      <Navbar onOpenMenu={() => setIsSidebarOpen(true)} />
      <MobileSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main>
        <HeroSection />
        <CategorySection />
        <FeaturedSection />
        <PromoSection />
        <NewArrivalsSection />
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  )
}
