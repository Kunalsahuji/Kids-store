import { heroBanner } from '../../data/storefront'

export function HeroSection() {
  return (
    <section id="home" className="section-pad pb-2 pt-4">
      <div className="container-shell">
        <div className="rounded-2xl bg-[#d7e3f4] px-6 py-8 text-center shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:px-10 md:py-10">
          <h1 className="mx-auto max-w-xl font-[var(--font-display)] text-4xl leading-[1.05] text-[#2c2c2c] md:text-[56px]">{heroBanner.title}</h1>
          <button className="mt-6 rounded-full bg-[#2f2a35] px-6 py-3 text-sm font-semibold text-white" type="button">
            {heroBanner.cta}
          </button>
        </div>
        <div className="mt-5 flex gap-3 overflow-x-auto pb-1">
          {['Toys', 'Clothing', 'Nursery', 'Birthday decor', 'Learning', 'Personalised'].map((item) => (
            <button key={item} className="shrink-0 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink" type="button">
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
