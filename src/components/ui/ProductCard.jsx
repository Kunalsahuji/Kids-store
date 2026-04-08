import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function ProductCard({ product }) {
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
    <article className="group">
      <div className={`relative aspect-[0.95] overflow-hidden rounded-xl bg-gradient-to-br ${product.tint}`}>
        <button className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow-sm" type="button" aria-label={`Save ${product.name}`}>
          <Icon name="heart" className="h-4 w-4" />
        </button>
        <div className="flex h-full items-center justify-center p-5">
          <div className="relative h-[78%] w-[78%] rounded-lg bg-white/70 shadow-sm">
            <div className="absolute inset-x-[12%] top-[12%] h-[24%] rounded-md bg-white/90" />
            <div className="absolute inset-x-[10%] top-[39%] h-[36%] rounded-md bg-[rgba(255,255,255,0.78)]" />
            <div className="absolute left-[18%] top-[46%] h-10 w-10 rounded-full bg-[rgba(241,100,30,0.28)]" />
            <div className="absolute right-[18%] top-[46%] h-10 w-10 rounded-full bg-[rgba(140,176,222,0.38)]" />
            <div className="absolute bottom-[12%] left-[12%] h-[10%] w-[76%] rounded-md bg-white/90" />
          </div>
        </div>
      </div>

      <div className="pt-2">
        <h3 className="line-clamp-2 text-[15px] leading-5 text-ink">{product.name}</h3>
        <div className="mt-1 flex items-center gap-1 text-[13px] text-ink">
          <span>{product.rating}</span>
          <Icon name="star" className="h-3.5 w-3.5 text-ink" />
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
