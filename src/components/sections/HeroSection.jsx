import { heroBanner, heroSecondaryCard } from '../../data/storefront'

export function HeroSection() {
  const heroTitle = heroBanner.title.replace(' birthday ', '\nbirthday ')

  return (
    <section id="home" className="section-pad pb-1 pt-3 md:pt-4">
      <div className="container-shell">
        <article className="mx-auto overflow-hidden rounded-[14px] bg-[#d7e3f4] px-5 py-6 shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:hidden">
          <h1 className="whitespace-pre-line text-center font-[var(--font-display)] text-[34px] leading-[0.98] text-[#2f2a3b]">
            {heroTitle}
          </h1>
          <div className="mt-4 flex justify-center">
            <button className="inline-flex rounded-full bg-[#2f2a35] px-7 py-3 text-[15px] font-semibold text-white" type="button">
              {heroBanner.cta}
            </button>
          </div>
        </article>

        <div className="mx-auto hidden max-w-[1328px] gap-5 md:grid md:grid-cols-[1fr_400px] md:gap-[30px]">
          <article className="overflow-hidden rounded-[14px] bg-[#d7e3f4] shadow-[inset_0_0_0_1px_rgba(34,34,34,0.06)] md:h-[272px] md:grid md:grid-cols-[1.55fr_1fr]">
            <div className="flex h-full flex-col items-center justify-center px-6 py-7 md:px-12 md:py-0">
              <h1 className="max-w-[380px] whitespace-pre-line text-center font-[var(--font-display)] text-[34px] leading-[0.98] text-[#2f2a3b] md:text-[62px] md:leading-[0.92]">
                {heroTitle}
              </h1>
              <button className="mt-6 inline-flex rounded-full bg-[#2f2a35] px-7 py-3 text-[15px] font-semibold text-white" type="button">
                {heroBanner.cta}
              </button>
            </div>

            <div>
              <img className="h-full w-full object-cover object-center" src={heroBanner.imageUrl} alt={heroBanner.title} loading="eager" />
            </div>
          </article>

          <article className="relative h-[272px] overflow-hidden rounded-[14px]">
            <img className="h-full w-full object-cover" src={heroSecondaryCard.imageUrl} alt={heroSecondaryCard.title} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/24 to-black/8" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <h2 className="max-w-[320px] text-[24px] font-semibold leading-[1.12]">{heroSecondaryCard.title}</h2>
              <p className="mt-1 text-[18px] font-semibold">{heroSecondaryCard.subtitle}</p>
            </div>
          </article>
        </div>

        <div className="hide-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1 md:hidden">
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
