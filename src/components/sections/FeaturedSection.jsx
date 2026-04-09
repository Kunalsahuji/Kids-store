import { featuredProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'

export function FeaturedSection({ onSelectProduct }) {
  // Take exactly 6 for a dense Etsy mobile grid (2x3)
  const displayProducts = featuredProducts.slice(0, 6)

  return (
    <section className="container-shell py-8 px-3">
      {/* Exact Header for Picks Section (Screenshot 1 & 3 Match) */}
      <div className="flex items-end justify-between mb-5">
        <h2 className="text-[18px] md:text-[22px] font-bold text-ink">
          Our picks for you
        </h2>
        <a href="#" className="text-[13px] md:text-[15px] font-bold underline underline-offset-4 decoration-black/20 hover:decoration-black">
          See more
        </a>
      </div>

      {/* Dense 2x3 Grid (6 Cards shown total) */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
        {displayProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onSelect={onSelectProduct} 
            showTitle={false}
          />
        ))}
      </div>
    </section>
  )
}
