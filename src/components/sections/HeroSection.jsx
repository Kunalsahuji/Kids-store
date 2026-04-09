export function HeroSection() {
  return (
    <section className="px-3 pt-3 pb-0 container-shell">
      {/* Ultra-Shallow Etsy Hero (Eliminating all extra top/bottom padding) */}
      <article className="relative overflow-hidden rounded-2xl bg-[#d7e3f4] flex flex-col justify-center text-center py-4 px-4 h-auto">
        <h1 className="font-serif-display text-[26px] md:text-[34px] leading-[1.05] text-ink mb-2 tracking-tight">
          Plan the best<br />birthday ever
        </h1>
        <div className="flex justify-center">
          <button className="h-8 px-5 rounded-full bg-ink text-white text-[13px] font-bold transition hover:opacity-90 active:scale-95">
            Explore our guide
          </button>
        </div>
      </article>
    </section>
  )
}
