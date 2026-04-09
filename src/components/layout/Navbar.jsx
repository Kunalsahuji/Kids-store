import { BrandLogo } from '../ui/BrandLogo'
import { Icon } from '../ui/Icon'

export function Navbar({ onOpenMenu }) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#FAF8F5] px-3 py-2">
      <div className="flex items-center justify-between gap-2 max-w-[1400px] mx-auto">
        
        {/* Left: Mobile Menu */}
        <button onClick={onOpenMenu} className="p-1 hover:bg-black/5 rounded-full">
          <Icon name="menu" className="h-6 w-6" />
        </button>

        {/* Center-Left: Logo (Toyove India Exact) */}
        <div className="flex-shrink-0 -mb-0.5">
          <span className="text-[25px] font-bold tracking-tight text-orange font-serif-display">Toyove</span>
        </div>

        {/* Center-Right: Pill Search (Condensed Mobile Spec) */}
        <div className="relative flex-1 group mx-1">
          <div className="flex h-9 w-full items-center rounded-full border border-black/20 bg-[#f4f4f4] px-3 transition focus-within:bg-white focus-within:border-black/40">
            <span className="text-[14px] text-muted flex-1 truncate">Search</span>
            <div className="h-7 w-7 rounded-full bg-orange grid place-items-center text-white scale-90">
              <Icon name="search" className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Right: Utility Trio */}
        <div className="flex items-center gap-1.5 lg:gap-3">
          <button className="h-6 w-6 grid place-items-center rounded-full border border-black/5 bg-slate-50 text-[10px] items-center justify-center p-0.5" aria-label="Region">
             <Icon name="region" className="h-full w-full" />
          </button>
          <button className="p-1" aria-label="User">
            <Icon name="user" className="h-6 w-6" />
          </button>
          <button className="p-1 relative" aria-label="Cart">
            <Icon name="bag" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
