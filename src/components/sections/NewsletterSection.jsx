export function NewsletterSection() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <div className="overflow-hidden rounded-xl bg-[#f3ece3] px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-medium text-muted">Local finds? Kids marketplace has it.</p>
              <h3 className="mt-4 max-w-xl font-[var(--font-display)] text-4xl leading-tight text-ink md:text-5xl">
                Discover shops for toys, kids clothes, nursery decor, and personalised gifts.
              </h3>
            </div>
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                className="h-12 rounded-full border border-line bg-white px-5 text-sm text-ink outline-none placeholder:text-muted"
                placeholder="Search makers or categories"
                type="email"
              />
              <button className="h-12 rounded-full bg-orange px-7 text-sm font-semibold text-white" type="submit">
                Shop from local makers
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
