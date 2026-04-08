import { footerColumns } from '../../data/storefront'

export function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-white pt-10">
      <div className="container-shell">
        <div className="px-0 py-8 md:px-2">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="font-[var(--font-display)] text-[34px] text-orange">Etsy</p>
              <h2 className="mt-4 max-w-xl font-[var(--font-display)] text-3xl leading-tight text-ink md:text-4xl">
                A children&apos;s marketplace inspired by Etsy&apos;s familiar browsing experience.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                Built around toy, clothing, nursery, and birthday categories with a marketplace-first shopping flow.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-base font-semibold text-ink">{column.title}</h3>
                  <div className="mt-4 space-y-3 text-sm text-muted">
                    {column.links.map((link) => (
                      <a key={link} href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
