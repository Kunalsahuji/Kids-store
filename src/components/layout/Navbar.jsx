import { useEffect, useRef, useState } from 'react'
import { categoryTree, mainNavigation } from '../../data/navigation'
import { BrandLogo } from '../ui/BrandLogo'
import { Icon } from '../ui/Icon'

export function Navbar({ onOpenMenu }) {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState(categoryTree[0])
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDesktopMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-[#fffaf5]">
      <div>
        <div className="container-shell py-3" ref={dropdownRef}>
          <div className="flex items-center gap-2 md:hidden">
            <button className="grid h-9 w-9 place-items-center rounded-full text-ink" type="button" onClick={onOpenMenu} aria-label="Open menu">
              <Icon name="menu" className="h-5 w-5" />
            </button>
            <BrandLogo size="nav" showMark={false} showSuffix={false} className="shrink-0" />
            <div className="relative min-w-0 flex-1">
              <input className="h-10 w-full rounded-full border-2 border-[#8a8a8a] bg-[#fffaf5] pl-4 pr-12 text-[14px] text-ink outline-none placeholder:text-[#7a7a7a]" placeholder="Search" type="search" />
              <button className="absolute right-[2px] top-[2px] grid h-9 w-9 place-items-center rounded-full bg-orange text-white" type="button" aria-label="Search">
                <Icon name="search" className="h-4.5 w-4.5" />
              </button>
            </div>
            <button className="grid h-8 w-8 place-items-center rounded-full border border-[#d7d7d7] bg-white" type="button" aria-label="India">
              <Icon name="region" className="h-4 w-4" />
            </button>
            <button className="grid h-8 w-8 place-items-center text-[#2d2d2d]" type="button" aria-label="Profile">
              <Icon name="user" className="h-5 w-5" />
            </button>
            <button className="grid h-8 w-8 place-items-center text-[#2d2d2d]" type="button" aria-label="Cart">
              <Icon name="bag" className="h-5 w-5" />
            </button>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <BrandLogo size="nav" showMark={false} showSuffix={false} className="shrink-0" />

            <button
              className="items-center gap-2 text-[16px] font-semibold text-[#2d2d2d] md:flex"
              type="button"
              onClick={() => setIsDesktopMenuOpen((open) => !open)}
            >
              <Icon name="menu" className="h-4 w-4" />
              <span>Categories</span>
            </button>

            <div className="relative min-w-0 flex-1 max-w-[890px]">
              <input className="h-12 w-full rounded-full border-2 border-[#2d2d2d] bg-[#fffaf5] pl-5 pr-14 text-[15px] text-ink outline-none placeholder:text-[#747474]" placeholder="Search for anything" type="search" />
              <button className="absolute right-[3px] top-[3px] grid h-10 w-10 place-items-center rounded-full bg-orange text-white" type="button" aria-label="Search">
                <Icon name="search" className="h-5 w-5" />
              </button>
            </div>

            <button className="text-[15px] font-semibold text-[#2d2d2d] lg:block" type="button">
              Sign in
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full text-[#2d2d2d] hover:bg-black/5 lg:grid" type="button" aria-label="Region">
              <Icon name="region" className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full text-[#2d2d2d] hover:bg-black/5 md:grid" type="button" aria-label="Wishlist">
              <Icon name="heart" className="h-5 w-5" />
            </button>
            <button className="grid h-10 w-10 place-items-center rounded-full text-[#2d2d2d] hover:bg-black/5 md:grid" type="button" aria-label="Cart">
              <Icon name="bag" className="h-5 w-5" />
            </button>
          </div>

          <nav className="mt-3 hidden items-center justify-center gap-8 md:flex">
            {mainNavigation.map((item, index) => (
              <a key={item.label} className="flex items-center gap-2 text-[15px] font-semibold text-[#2d2d2d]" href={item.href}>
                {index === 0 ? <Icon name="gift" className="h-4 w-4" /> : null}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {isDesktopMenuOpen ? (
            <>
              <div className="fixed inset-0 top-[112px] z-30 hidden bg-black/25 md:block" onClick={() => setIsDesktopMenuOpen(false)} />
              <div className="absolute left-[72px] top-[60px] z-40 hidden w-[330px] overflow-hidden rounded-[18px] border border-[#d9d9d9] bg-white shadow-[0_20px_45px_rgba(34,34,34,0.18)] md:block">
                <div className="max-h-[575px] overflow-y-auto py-2">
                  {categoryTree.map((category) => (
                    <button
                      key={category.label}
                      className={`flex w-full items-center justify-between px-4 py-3 text-left text-[18px] ${activeCategory.label === category.label ? 'bg-[#f7f7f7] text-ink shadow-[inset_0_2px_0_#6f8cff,inset_0_-2px_0_#6f8cff]' : 'text-ink hover:bg-[#f7f7f7]'}`}
                      type="button"
                      onMouseEnter={() => setActiveCategory(category)}
                      onFocus={() => setActiveCategory(category)}
                    >
                      <span>{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </header>
  )
}
