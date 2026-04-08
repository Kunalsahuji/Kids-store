import { mainNavigation } from '../../data/navigation'
import { Icon } from '../ui/Icon'

export function Navbar({ onOpenMenu }) {
  return (
    <header className="sticky top-0 z-40 bg-[#fffaf5]">
      <div className="border-b border-line">
        <div className="container-shell py-3">
          <div className="flex items-center gap-3 md:gap-4">
            <button className="grid h-10 w-10 place-items-center rounded-full text-ink hover:bg-black/5" type="button" onClick={onOpenMenu} aria-label="Open menu">
              <Icon name="menu" className="h-5 w-5" />
            </button>

            <a href="#home" className="shrink-0 font-[var(--font-display)] text-[34px] leading-none text-orange md:text-[46px]">
              Etsy
            </a>

            <button className="hidden items-center gap-2 text-sm font-semibold text-ink md:flex" type="button" onClick={onOpenMenu}>
              <Icon name="menu" className="h-4 w-4" />
              <span>Categories</span>
            </button>

            <div className="relative min-w-0 flex-1">
              <input
                className="h-12 w-full rounded-full border-2 border-[#222222] bg-[#fffaf5] pl-5 pr-14 text-[15px] text-ink outline-none placeholder:text-muted"
                placeholder="Search for anything"
                type="search"
              />
              <button className="absolute right-[3px] top-[3px] grid h-10 w-10 place-items-center rounded-full bg-orange text-white" type="button" aria-label="Search">
                <Icon name="search" className="h-5 w-5" />
              </button>
            </div>

            <button className="hidden text-sm font-semibold text-ink lg:block" type="button">
              Sign in
            </button>
            <button className="hidden h-10 w-10 place-items-center rounded-full hover:bg-black/5 lg:grid" type="button" aria-label="Region">
              <Icon name="region" className="h-5 w-5" />
            </button>
            <button className="hidden h-10 w-10 place-items-center rounded-full hover:bg-black/5 md:grid" type="button" aria-label="Wishlist">
              <Icon name="heart" className="h-5 w-5" />
            </button>
            <button className="hidden h-10 w-10 place-items-center rounded-full hover:bg-black/5 md:grid" type="button" aria-label="Cart">
              <Icon name="bag" className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-4 hidden items-center justify-center gap-8 border-t border-line pt-4 md:flex">
            {mainNavigation.map((item, index) => (
              <a key={item.label} className="flex items-center gap-2 text-[15px] font-semibold text-ink" href={item.href}>
                {index === 0 ? <Icon name="gift" className="h-4 w-4" /> : null}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
