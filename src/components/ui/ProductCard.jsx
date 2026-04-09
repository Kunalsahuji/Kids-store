import { Icon } from './Icon'

export function ProductCard({ product, onSelect, showTitle = true }) {
  if (!product) return null

  return (
    <article className="group cursor-pointer select-none" onClick={() => onSelect?.(product.id)}>
      {/* 1. Image with Top-Right Wishlist */}
      <div className="relative aspect-[4/3] md:aspect-square overflow-hidden rounded-xl bg-white border border-black/5">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        
        {/* Wishlist Button */}
        <button 
          className="absolute right-2 top-2 z-10 grid h-8 w-8 place-items-center rounded-full bg-white text-ink shadow-sm transition-transform hover:scale-105 active:scale-95"
          onClick={(e) => {
            e.stopPropagation()
          }}
          aria-label="Save to favorites"
        >
          <Icon name="heart" className="h-4 w-4" />
        </button>

        {/* OFFER ribbon */}
        {product.discount && (
           <div className="absolute left-[-15px] top-[10px] z-10 -rotate-45 bg-[#ff4b2b] px-6 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider shadow-sm">
             OFFER
           </div>
        )}
      </div>

      {/* 2. Product Info (Conditional Title) */}
      <div className="pt-1.5">
        {showTitle && (
          <h3 className="line-clamp-2 text-[13px] md:text-[15px] leading-snug text-ink mb-1">
            {product.name}
          </h3>
        )}
        
        {/* 3. Pricing Row (Tightened for mobile) */}
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-[14px] md:text-[16px] font-bold text-ink">
            {product.price}
          </span>
          {product.originalPrice && (
            <div className="flex items-center gap-1 text-[11px] md:text-[13px] text-muted">
              <span className="line-through">{product.originalPrice}</span>
              <span className="hidden sm:inline">({product.discount})</span>
            </div>
          )}
        </div>

        {/* 4. Green Badge */}
        <div className="mt-0.5">
           <span className="inline-block rounded-full bg-sale-green/10 px-1.5 py-0.5 text-[10px] font-bold text-sale-green">
             FREE delivery
           </span>
        </div>
      </div>
    </article>
  )
}
