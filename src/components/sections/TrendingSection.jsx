import { trendingProducts } from '../../data/storefront'
import { ProductCarousel } from '../ui/ProductCarousel'

export function TrendingSection({ onSelectProduct }) {
  return (
    <section id="trending" className="section-pad pt-1">
      <div className="container-shell">
        <h2 className="mb-4 font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">Trending picks for toy stores</h2>
        <ProductCarousel products={trendingProducts} onSelectProduct={onSelectProduct} />
      </div>
    </section>
  )
}
