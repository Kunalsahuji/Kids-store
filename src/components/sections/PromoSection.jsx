import { topGiftProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'

export function PromoSection() {
  return (
    <section id="top-gifts" className="section-pad pt-1">
      <div className="container-shell">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-muted">Gifts as special as they are</p>
            <h2 className="font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">Top gifts for kids and parents</h2>
          </div>
          <a className="hidden text-sm font-semibold text-ink md:block" href="#home">
            Get inspired
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
          {topGiftProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
