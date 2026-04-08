import { exploreProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'

export function NewArrivalsSection() {
  return (
    <section id="collections" className="section-pad pt-1">
      <div className="container-shell">
        <h2 className="mb-4 font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">New ideas to explore</h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
          {exploreProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
