import { trendingProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'

export function TrendingSection({ onSelectProduct }) {
  // Take exactly 6 for the Etsy grid layout
  const displayProducts = trendingProducts.slice(0, 6)

  return (
    <section className="container-shell pt-4 pb-2 px-3">
      {/* Exact Etsy Heading (Sans-serif) */}
      <h2 className="text-[17px] md:text-[22px] font-bold text-ink mb-4">
        Recently viewed
      </h2>

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
