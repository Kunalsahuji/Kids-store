import { useState } from 'react'
import { detailRecommendations } from '../../data/storefront'
import { ProductCarousel } from '../../components/ui/ProductCarousel'
import { ProductVisual } from '../../components/ui/ProductVisual'
import { Icon } from '../../components/ui/Icon'

export function ProductDetailPage({ product, onSelectProduct }) {
  const [activeMedia, setActiveMedia] = useState(0)

  return (
    <main className="pb-10">
      <section className="section-pad pb-4 pt-3">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[88px_1.15fr_0.85fr]">
            <div className="hidden gap-3 lg:grid">
              {product.media.map((media, index) => (
                <button
                  key={media.id}
                  className={`overflow-hidden rounded-lg border ${activeMedia === index ? 'border-[#2d2d2d]' : 'border-[#e5e5e5]'}`}
                  type="button"
                  onClick={() => setActiveMedia(index)}
                >
                  <ProductVisual product={product} mediaIndex={index} />
                </button>
              ))}
            </div>

            <div>
              <div className="relative overflow-hidden rounded-xl bg-white">
                <button
                  className="absolute left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#2f2a35] text-white shadow-sm lg:hidden"
                  type="button"
                  onClick={() => setActiveMedia((current) => (current === 0 ? product.media.length - 1 : current - 1))}
                  aria-label="Previous image"
                >
                  <Icon name="chevronLeft" className="h-4 w-4" />
                </button>
                <button
                  className="absolute right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-[#2f2a35] text-white shadow-sm lg:hidden"
                  type="button"
                  onClick={() => setActiveMedia((current) => (current === product.media.length - 1 ? 0 : current + 1))}
                  aria-label="Next image"
                >
                  <Icon name="chevronRight" className="h-4 w-4" />
                </button>
                <ProductVisual product={product} mediaIndex={activeMedia} detail />
                <button className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm" type="button" aria-label="Share">
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
                <button className="absolute right-16 top-3 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm" type="button" aria-label="Save">
                  <Icon name="heart" className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-4 flex gap-2 overflow-x-auto lg:hidden">
                {product.media.map((media, index) => (
                  <button
                    key={media.id}
                    className={`h-2.5 w-2.5 rounded-full ${activeMedia === index ? 'bg-[#2d2d2d]' : 'bg-[#c9c9c9]'}`}
                    type="button"
                    onClick={() => setActiveMedia(index)}
                    aria-label={`Show image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-sm font-semibold text-[#d23f57]">{product.stockNote}</p>
                <div className="mt-2 flex flex-wrap items-end gap-2">
                  <span className="text-[34px] font-semibold text-ink">{product.price}</span>
                  {product.originalPrice ? <span className="text-xl text-muted line-through">{product.originalPrice}</span> : null}
                </div>
                {product.discount ? <p className="mt-1 text-sm font-semibold text-[#258635]">{product.discount} • Sale ends soon</p> : null}
                <p className="mt-2 text-sm text-muted">GST Included</p>
              </div>

              <div>
                <h1 className="text-[22px] leading-8 text-ink">{product.name}</h1>
                <p className="mt-3 text-sm font-semibold text-ink">{product.seller} <span className="font-normal text-muted">★★★★★</span></p>
              </div>

              <button className="h-12 w-full rounded-full bg-[#2f2a35] text-sm font-semibold text-white" type="button">
                Add to cart
              </button>

              <div className="space-y-4 rounded-xl border border-[#ece7df] bg-white px-5 py-4">
                <div>
                  <h2 className="text-sm font-semibold text-ink">Item details</h2>
                  <div className="mt-3 space-y-2 text-sm text-muted">
                    {product.badges.map((badge) => (
                      <p key={badge}>{badge}</p>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-ink">Description</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{product.description}</p>
                </div>

                <div>
                  <h2 className="text-sm font-semibold text-ink">Delivery</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">{product.delivery}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-[#ece7df] bg-white px-5 py-6">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[#f0dbc9] font-semibold text-ink">E</div>
              <div>
                <p className="font-semibold text-ink">Elhasan Khan</p>
                <p className="text-sm text-muted">Owner of {product.seller}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              This layout is inspired by Etsy-style digital product pages, so we populated this detail view with realistic information and a responsive product gallery for your children marketplace experience.
            </p>
          </div>

          <div className="mt-10">
            <h2 className="mb-4 font-[var(--font-display)] text-[28px] text-ink md:text-[34px]">More from this shop</h2>
            <ProductCarousel products={detailRecommendations} onSelectProduct={onSelectProduct} slidesPerViewDesktop={4} />
          </div>
        </div>
      </section>
    </main>
  )
}
