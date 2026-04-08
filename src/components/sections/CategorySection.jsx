import { categoryChips, taxons } from '../../data/storefront'

export function CategorySection() {
  return (
    <section id="shop" className="section-pad pt-2">
      <div className="container-shell">
        <h2 className="text-[15px] font-semibold text-ink">Shop our most-loved categories</h2>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {categoryChips.map((chip) => (
            <button key={chip} className="shrink-0 rounded-full bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm ring-1 ring-black/8" type="button">
              {chip}
            </button>
          ))}
        </div>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {taxons.map((item) => (
            <div key={item.id} className={`${item.tone} rounded-xl px-4 py-5 text-center text-sm font-medium text-ink`}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
