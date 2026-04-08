import { useRef, useState } from 'react'
import { Icon } from './Icon'
import { ProductCard } from './ProductCard'

export function ProductCarousel({ products, onSelectProduct, slidesPerViewDesktop = 5, className = '' }) {
  const [page, setPage] = useState(0)
  const mobileTrackRef = useRef(null)
  const pageSize = slidesPerViewDesktop
  const maxPage = Math.max(0, Math.ceil(products.length / pageSize) - 1)
  const visible = products.slice(page * pageSize, page * pageSize + pageSize)

  function scrollMobile(direction) {
    if (!mobileTrackRef.current) return
    mobileTrackRef.current.scrollBy({ left: direction * 280, behavior: 'smooth' })
  }

  return (
    <div className={`relative ${className}`}>
      {page > 0 ? (
        <button
          className="absolute left-[-8px] top-[32%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#2f2a35] text-white shadow-lg md:grid"
          type="button"
          onClick={() => setPage((current) => Math.max(0, current - 1))}
          aria-label="Previous products"
        >
          <Icon name="chevronLeft" className="h-5 w-5" />
        </button>
      ) : null}

      {page < maxPage ? (
        <button
          className="absolute right-[-8px] top-[32%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-[#2f2a35] text-white shadow-lg md:grid"
          type="button"
          onClick={() => setPage((current) => Math.min(maxPage, current + 1))}
          aria-label="Next products"
        >
          <Icon name="chevronRight" className="h-5 w-5" />
        </button>
      ) : null}

      <div className="overflow-hidden">
        <div ref={mobileTrackRef} className="grid auto-cols-[78%] grid-flow-col gap-4 overflow-x-auto scroll-smooth pb-2 md:hidden">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>

        <div className="mt-3 flex items-center justify-end gap-2 md:hidden">
          <button className="grid h-9 w-9 place-items-center rounded-full bg-[#2f2a35] text-white" type="button" onClick={() => scrollMobile(-1)} aria-label="Previous products">
            <Icon name="chevronLeft" className="h-4 w-4" />
          </button>
          <button className="grid h-9 w-9 place-items-center rounded-full bg-[#2f2a35] text-white" type="button" onClick={() => scrollMobile(1)} aria-label="Next products">
            <Icon name="chevronRight" className="h-4 w-4" />
          </button>
        </div>

        <div className="hidden grid-cols-5 gap-4 md:grid">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
          ))}
        </div>
      </div>
    </div>
  )
}
