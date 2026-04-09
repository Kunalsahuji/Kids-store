import { testimonials } from '../../data/storefront'
import { SectionHeading } from '../ui/SectionHeading'

export function TestimonialSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Parents love"
          title="Social proof and reassurance blocks keep the storefront credible."
          body="These panels help break up product-heavy sections and make the page feel more complete, just like a premium theme demo."
          align="center"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article key={item.id} className="card-panel bg-[#FAF8F5] p-7 md:p-8">
              <div className="mb-5 flex gap-1 text-orange">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <p className="font-[var(--font-display)] text-3xl leading-tight text-ink">{item.quote}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-muted">{item.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
