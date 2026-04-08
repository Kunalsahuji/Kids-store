import { exploreProducts } from '../../data/storefront'
import { ProductCarousel } from '../ui/ProductCarousel'

export function NewArrivalsSection({ onSelectProduct }) {
  return (
    <section id="collections" className="section-pad pt-1">
      <div className="container-shell">
        <h2 className="mb-4 font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">More ideas to explore</h2>
        <ProductCarousel products={exploreProducts} onSelectProduct={onSelectProduct} />
      </div>
    </section>
  )
}
