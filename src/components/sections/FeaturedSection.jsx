import { featuredProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'

export function FeaturedSection() {
  return (
    <section id="featured" className="section-pad">
      <div className="container-shell">
        <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
          <div className="rounded-xl bg-white p-6 text-center shadow-[inset_0_0_0_1px_rgba(34,34,34,0.08)]">
            <h2 className="font-[var(--font-display)] text-[40px] leading-[0.95] text-[#2c2c2c]">“Children&apos;s Store Themes”</h2>
            <a className="mt-2 block text-[28px] font-medium text-ink" href="#collections">
              View all
            </a>
            <p className="mt-2 text-sm text-muted">Curated based on your views</p>
            <div className="mx-auto mt-4 h-20 w-16 rounded-lg bg-gradient-to-br from-[#bbf3ee] to-[#fff] shadow-sm" />
          </div>

          <div>
            <h2 className="mb-4 font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">Take a break - browse your picks</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
