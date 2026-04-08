import { topGiftProducts } from '../../data/storefront'
import { promoMosaic } from '../../data/storefront'
import { ProductCarousel } from '../ui/ProductCarousel'

export function PromoSection({ onSelectProduct }) {
  return (
    <section id="top-gifts" className="section-pad pt-1">
      <div className="container-shell">
        <h2 className="mb-4 font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">New ideas to explore</h2>
        <ProductCarousel products={topGiftProducts} onSelectProduct={onSelectProduct} />

        <div className="mt-10 grid gap-3 md:grid-cols-[1.15fr_0.9fr_0.9fr]">
          {promoMosaic.map((item, index) => (
            <article
              key={item.id}
              className={`group relative min-h-[190px] overflow-hidden rounded-[14px] ${item.tone} ${index === 0 ? 'md:min-h-[250px]' : 'md:min-h-[230px]'}`}
            >
              <img className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]" src={item.imageUrl} alt={item.title} loading="lazy" />
              <div className={`absolute inset-0 ${index === 0 ? 'bg-gradient-to-r from-black/35 via-black/15 to-transparent' : 'bg-gradient-to-t from-black/65 via-black/18 to-black/8'}`} />
              <div className={`absolute ${index === 0 ? 'left-5 top-5 max-w-[230px] md:left-6 md:top-6' : 'bottom-5 left-5 right-5'}`}>
                <h3 className={`${index === 0 ? 'font-[var(--font-display)] text-[32px] leading-[1.02] text-white md:text-[38px]' : 'text-[24px] font-semibold leading-[1.12] text-white'}`}>
                  {item.title}
                </h3>
                {item.cta ? (
                  <button className="mt-4 rounded-full bg-[#2f2a35] px-5 py-2.5 text-sm font-semibold text-white" type="button">
                    {item.cta}
                  </button>
                ) : null}
                {item.subtitle ? <p className="mt-2 text-[18px] font-semibold text-white">{item.subtitle}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
