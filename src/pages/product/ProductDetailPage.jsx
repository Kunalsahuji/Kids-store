import { useState } from 'react'
import { brand } from '../../data/brand'
import { detailRecommendations } from '../../data/storefront'
import { ProductCarousel } from '../../components/ui/ProductCarousel'
import { ProductVisual } from '../../components/ui/ProductVisual'
import { Icon } from '../../components/ui/Icon'

export function ProductDetailPage({ product, onSelectProduct }) {
  const [activeMedia, setActiveMedia] = useState(0)

  return (
    <main className="pb-20 bg-[#FAF8F5]">
      <section className="pt-4 md:pt-8 container-shell">
        {/* 1. Breadcrumbs (Etsy Style) */}
        <nav className="mb-6 flex items-center gap-2 text-[13px] text-muted overflow-hidden whitespace-nowrap">
          <a href="#home" className="hover:underline">Home</a>
          <Icon name="chevronRight" className="h-2.5 w-2.5 opacity-40 shrink-0" />
          <a href="#" className="hover:underline">Toys & Games</a>
          <Icon name="chevronRight" className="h-2.5 w-2.5 opacity-40 shrink-0" />
          <span className="truncate">{product.name}</span>
        </nav>

        {/* 2. Main Detail Layout (Desktop: 2 Columns with Sticky Right) */}
        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          
          {/* LEFT: Image Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row md:items-start lg:gap-6">
            {/* Thumbnails (Desktop side / Mobile bottom) */}
            <div className="hide-scrollbar flex gap-3 overflow-x-auto md:w-16 md:flex-col md:overflow-visible lg:w-20">
              {product.media.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveMedia(index)}
                  className={`relative aspect-square w-16 overflow-hidden rounded-lg border-2 transition-all md:w-full ${activeMedia === index ? 'border-ink' : 'border-transparent hover:border-black/20'}`}
                >
                  <img src={item.imageUrl || product.imageUrl} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Stage Image */}
            <div className="relative flex-1 group overflow-hidden rounded-2xl bg-cream border border-black/5">
              <img 
                src={product.media[activeMedia]?.imageUrl || product.imageUrl} 
                className="w-full aspect-square object-cover transition-transform duration-700 hover:scale-110"
                alt={product.name}
              />
              {/* Wishlist button over main image */}
               <button className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-[#FAF8F5] text-ink shadow-lg transition hover:scale-105 active:scale-95">
                <Icon name="heart" className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* RIGHT: Purchasing Panel (Sticky on Desktop) */}
          <aside className="lg:sticky lg:top-32 h-fit space-y-6">
            <div>
              <p className="text-[14px] font-bold text-sale-green mb-1">{product.stockNote || 'Bestseller'}</p>
              <h1 className="font-serif-display text-[24px] md:text-[32px] leading-tight text-ink mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                 <span className="text-[14px] font-bold underline decoration-ink/30 cursor-pointer">{product.seller}</span>
                 <div className="flex text-ink">
                   {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-3.5 w-3.5" />)}
                 </div>
                 <span className="text-[13px] text-muted">(45,671)</span>
              </div>
            </div>

            <div className="py-4 border-t border-b border-border-subtle">
               <div className="flex items-center gap-3">
                  <span className="text-[32px] font-bold text-ink">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[18px] text-muted line-through pt-1.5">{product.originalPrice}</span>
                  )}
                  {product.discount && (
                    <span className="bg-sale-green/10 text-sale-green px-2 py-0.5 rounded text-[14px] font-bold mt-1.5">{product.discount}</span>
                  )}
               </div>
               <p className="text-[12px] text-muted mt-1 uppercase tracking-wider font-bold">Local taxes included (where applicable)</p>
            </div>

            <div className="space-y-3">
               <button className="w-full h-12 rounded-full bg-ink text-white font-bold text-[16px] transition hover:bg-ink/90 active:scale-[0.98]">
                  Add to cart
               </button>
               <div className="flex items-center justify-center gap-2 p-3 text-[14px] font-medium text-ink bg-black/5 rounded-xl">
                  <Icon name="region" className="h-6 w-6" />
                  <span>Free delivery to India</span>
               </div>
            </div>

            {/* Accordion Blocks */}
            <div className="space-y-4 pt-4">
               {['Item details', 'Description', 'Delivery and return policies'].map((title) => (
                 <details key={title} className="group border-b border-border-subtle pb-4" open={title === 'Description'}>
                    <summary className="flex items-center justify-between font-bold text-[16px] cursor-pointer list-none">
                       {title}
                       <Icon name="chevronDown" className="h-4 w-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="pt-4 text-[15px] leading-6 text-muted pr-4">
                       {title === 'Description' ? product.description : `Detailed ${title} content goes here as per the Toyove store standards for quality toys and baby nursery items.`}
                    </div>
                 </details>
               ))}
            </div>
          </aside>
        </div>

        {/* 3. Bottom Sections */}
        <div className="mt-20 pt-20 border-t border-border-subtle">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-serif-display text-[28px] md:text-[34px]">More from this shop</h2>
            <button className="text-[15px] font-bold underline underline-offset-4">Explore more</button>
          </div>
          <ProductCarousel products={detailRecommendations} onSelectProduct={onSelectProduct} slidesPerViewDesktop={4} />
        </div>
      </section>
    </main>
  )
}
