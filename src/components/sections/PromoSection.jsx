import { topGiftProducts } from '../../data/storefront'
import { promoMosaic } from '../../data/storefront'
import { ProductCarousel } from '../ui/ProductCarousel'

export function PromoSection({ onSelectProduct }) {
  return (
    <section id="top-gifts" className="section-pad pt-1">
      <div className="container-shell">
        <h2 className="mb-4 font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">New ideas to explore</h2>
        <ProductCarousel products={topGiftProducts} onSelectProduct={onSelectProduct} />

        <div className="mt-10 grid gap-3 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          {promoMosaic.map((item, index) => (
            <article key={item.id} className={`${item.tone} min-h-[160px] rounded-[14px] px-6 py-6 ${index === 0 ? 'md:min-h-[210px]' : ''}`}>
              <h3 className={`max-w-[220px] font-[var(--font-display)] text-[#2c2c2c] ${index === 0 ? 'text-[34px] leading-[1.02]' : 'text-[24px] leading-[1.15]'}`}>{item.title}</h3>
              {item.cta ? (
                <button className="mt-4 rounded-full bg-[#2f2a35] px-5 py-2.5 text-sm font-semibold text-white" type="button">
                  {item.cta}
                </button>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
