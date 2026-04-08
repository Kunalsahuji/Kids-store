import { featuredProducts } from '../../data/storefront'
import { ProductCarousel } from '../ui/ProductCarousel'

export function FeaturedSection({ onSelectProduct }) {
  return (
    <section id="featured" className="section-pad pt-3">
      <div className="container-shell">
        <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
          <div className="rounded-xl bg-white p-8 text-center shadow-[inset_0_0_0_1px_rgba(34,34,34,0.08)]">
            <h2 className="font-[var(--font-display)] text-[40px] leading-[0.95] text-[#2c2c2c]">“Children&apos;s Store Themes”</h2>
            <a className="mt-2 block text-[28px] font-medium text-ink" href="#collections">
              View all
            </a>
            <p className="mt-2 text-sm text-muted">Curated based on your views</p>
            <div className="mx-auto mt-4 h-20 w-16 overflow-hidden rounded-lg shadow-sm">
              <img className="h-full w-full object-cover" src={featuredProducts[0].imageUrl} alt="Children store themes" loading="lazy" />
            </div>
          </div>

          <div>
            <h2 className="mb-6 font-[var(--font-display)] text-[30px] leading-none text-ink md:text-[44px]">Start with your picks</h2>
            <ProductCarousel products={featuredProducts} onSelectProduct={onSelectProduct} />
          </div>
        </div>
      </div>
    </section>
  )
}
