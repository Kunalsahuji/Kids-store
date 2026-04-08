import { browseCategories } from '../../data/navigation'
import { Icon } from '../ui/Icon'
import { useState } from 'react'

export function MobileSidebar({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(null)

  function handleClose() {
    setActiveCategory(null)
    onClose()
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 md:hidden ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={handleClose}
      />
      <aside
        className={`fixed inset-x-0 bottom-0 z-50 max-h-[calc(100vh-56px)] min-h-[72vh] overflow-hidden rounded-t-[18px] bg-white shadow-2xl transition-transform duration-300 md:hidden ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
      >
        {activeCategory ? (
          <>
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <button className="grid h-10 w-10 place-items-center text-ink" type="button" onClick={() => setActiveCategory(null)} aria-label="Back">
                <Icon name="chevronLeft" className="h-5 w-5" />
              </button>
              <div className="text-center">
                <h2 className="text-[16px] font-semibold text-ink">{activeCategory.label}</h2>
                <a className="mt-1 block text-[14px] text-muted" href={activeCategory.href}>
                  View all
                </a>
              </div>
              <button className="grid h-10 w-10 place-items-center text-ink" type="button" onClick={handleClose} aria-label="Close menu">
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto px-4 py-2">
              {activeCategory.children.map((item) => (
                <a key={item} className="block py-4 text-[17px] text-ink" href={activeCategory.href} onClick={handleClose}>
                  {item}
                </a>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <span className="w-10" />
              <h2 className="text-[16px] font-semibold text-ink">Browse Categories</h2>
              <button className="grid h-10 w-10 place-items-center text-ink" type="button" onClick={handleClose} aria-label="Close menu">
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-4">
              {browseCategories.map((item) => (
                <button
                  key={item.label}
                  className="flex w-full items-center justify-between py-4 text-left text-[18px] font-medium text-ink"
                  type="button"
                  onClick={() => (item.children?.length ? setActiveCategory(item) : handleClose())}
                >
                  <span>{item.label}</span>
                  <Icon name="chevronRight" className="h-4 w-4" />
                </button>
              ))}
            </div>
          </>
        )}
      </aside>
    </>
  )
}
