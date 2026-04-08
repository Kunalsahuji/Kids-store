import { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { ProductVisual } from './ProductVisual'

export function ProductCard({ product, onSelect }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoaded(true), 250 + (product.id % 4) * 120)
    return () => window.clearTimeout(timeoutId)
  }, [product.id])

  if (!isLoaded) {
    return (
      <article className="space-y-3">
        <div className="skeleton aspect-[0.95] w-full rounded-xl" />
        <div className="skeleton h-4 w-5/6 rounded-md" />
        <div className="skeleton h-4 w-2/3 rounded-md" />
        <div className="skeleton h-5 w-1/2 rounded-md" />
      </article>
    )
  }

  return (
    <article className="group snap-start">
      <button className="w-full text-left" type="button" onClick={() => onSelect?.(product.id)} aria-label={product.name}>
        <div className="relative">
          <ProductVisual product={product} />
          <span className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm">
            <Icon name="heart" className="h-4 w-4" />
          </span>
        </div>
      </button>

      <div className="pt-2">
        <button className="text-left" type="button" onClick={() => onSelect?.(product.id)}>
          <h3 className="line-clamp-2 text-[15px] leading-5 text-ink">{product.name}</h3>
        </button>
        <div className="mt-1 flex items-center gap-1 text-[13px] text-ink">
          <span>{product.rating}</span>
          <Icon name="star" className="h-3.5 w-3.5" />
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1 text-[13px]">
          <span className="font-semibold text-[#258635]">{product.price}</span>
          {product.originalPrice ? <span className="text-muted line-through">{product.originalPrice}</span> : null}
          {product.discount ? <span className="font-medium text-muted">({product.discount})</span> : null}
        </div>
      </div>
    </article>
  )
}
