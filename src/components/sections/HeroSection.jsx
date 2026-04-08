import { heroBanner } from '../../data/storefront'

export function HeroSection() {
  return (
    <section id="home" className="section-pad pb-1 pt-3 md:pt-0">
      <div className="container-shell">
        <div className="mx-auto max-w-[1160px] rounded-[14px] bg-[#d7e3f4] px-6 py-7 text-center shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:max-w-[980px] md:px-10 md:py-10">
          <h1 className="mx-auto max-w-xl font-[var(--font-display)] text-[34px] leading-[1.02] text-[#2c2c2c] md:text-[56px]">{heroBanner.title}</h1>
          <button className="mt-5 rounded-full bg-[#2f2a35] px-6 py-3 text-sm font-semibold text-white" type="button">
            {heroBanner.cta}
          </button>
        </div>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1 md:hidden">
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
