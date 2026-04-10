import { featuredProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'

export function ShopFeaturedSection({ onSelectProduct }) {
  const shopProducts = featuredProducts.slice(0, 6)
  
  return (
    <section className="container-shell pt-4 pb-2 px-3">
      {/* Simple Etsy Header (Match Recently Viewed) */}
      <h2 className="text-[17px] md:text-[22px] font-bold text-ink mb-4">
        More from madlywish
      </h2>

      {/* 6-Card Dense Grid */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-6 md:grid-cols-3 lg:grid-cols-6">
        {shopProducts.map((product) => (
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
