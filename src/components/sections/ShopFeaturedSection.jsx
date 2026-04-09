import { featuredProducts } from '../../data/storefront'
import { ProductCard } from '../ui/ProductCard'
import { Icon } from '../ui/Icon'

export function ShopFeaturedSection({ onSelectProduct }) {
  const shopProducts = featuredProducts.slice(0, 6)
  
  return (
    <section className="container-shell py-10 px-4">
      {/* Shop Header (Exact Etsy Mobile Match) */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border border-black/5">
            <img 
              src="https://i.etsystatic.com/isla/860e18/5209812466/isla_75x75.5209812466_gatj.jpg" 
              alt="Shop Logo" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[17px] font-bold text-ink leading-tight flex items-center gap-1.5">
              More from madlywish
              <Icon name="heart" className="h-3.5 w-3.5 opacity-40" />
            </h2>
          </div>
        </div>
        <button className="h-8 w-8 rounded-full border border-black/10 grid place-items-center bg-white shadow-sm">
           <Icon name="arrowRight" className="h-4 w-4" />
        </button>
      </div>

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
