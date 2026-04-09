import { useEffect, useEffectEvent, useRef, useState } from 'react'
import { Icon } from './Icon'
import { ProductCard } from './ProductCard'

export function ProductCarousel({ products, onSelectProduct, slidesPerViewDesktop = 5, className = '' }) {
  const trackRef = useRef(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [isExpandedMobile, setIsExpandedMobile] = useState(false)

  const desktopColumn = `calc((100% - ${(slidesPerViewDesktop - 1) * 16}px) / ${slidesPerViewDesktop})`
  const mobileInitialCount = Math.min(products.length, Math.max(6, Math.floor(products.length * 0.6)))
  const mobileProducts = isExpandedMobile ? products : products.slice(0, mobileInitialCount)
  const canShowMoreMobile = products.length > mobileInitialCount && !isExpandedMobile

  const syncControls = useEffectEvent(() => {
    const track = trackRef.current
    if (!track) return

    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth - 2)
    setCanPrev(track.scrollLeft > 2)
    setCanNext(track.scrollLeft < maxScroll)
  })

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    syncControls()

    track.addEventListener('scroll', syncControls, { passive: true })
    window.addEventListener('resize', syncControls)

    return () => {
      track.removeEventListener('scroll', syncControls)
      window.removeEventListener('resize', syncControls)
    }
  }, [products.length, slidesPerViewDesktop])

  function move(direction) {
    const track = trackRef.current
    if (!track) return

    const firstCard = track.querySelector('[data-carousel-card]')
    if (!firstCard) return

    const gap = 16
    const step = firstCard.getBoundingClientRect().width + gap
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className}`}>
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5">
          {mobileProducts.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>

        {canShowMoreMobile ? (
          <div className="mt-5 flex justify-center">
            <button
              className="rounded-full border border-line bg-[#FAF8F5] px-5 py-2 text-sm font-semibold text-ink"
              type="button"
              onClick={() => setIsExpandedMobile(true)}
            >
              Show more
            </button>
          </div>
        ) : null}
      </div>

      <div className="relative hidden overflow-hidden md:block md:px-14">
        <div
          ref={trackRef}
          className="hide-scrollbar grid grid-flow-col gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory md:auto-cols-[var(--desktop-col)]"
          style={{ '--desktop-col': desktopColumn }}
        >
          {products.map((product) => (
            <div key={product.id} data-carousel-card>
              <ProductCard product={product} onSelect={onSelectProduct} />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`absolute left-2 top-[37%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#2f2a35] text-white shadow-lg md:grid ${canPrev ? 'opacity-100' : 'pointer-events-none opacity-35'}`}
        type="button"
        onClick={() => move(-1)}
        aria-label="Previous products"
      >
        <Icon name="chevronLeft" className="h-5 w-5" />
      </button>

      <button
        className={`absolute right-2 top-[37%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#2f2a35] text-white shadow-lg md:grid ${canNext ? 'opacity-100' : 'pointer-events-none opacity-35'}`}
        type="button"
        onClick={() => move(1)}
        aria-label="Next products"
      >
        <Icon name="chevronRight" className="h-5 w-5" />
      </button>
    </div>
  )
}
