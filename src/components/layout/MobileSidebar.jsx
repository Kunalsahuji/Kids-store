import { browseCategories } from '../../data/navigation'
import { Icon } from '../ui/Icon'

export function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-[#26415e]/30 transition-opacity duration-300 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
      <aside className={`fixed left-0 top-0 z-50 h-full w-full max-w-[390px] bg-white shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 className="mx-auto text-xl font-semibold text-ink">Browse Categories</h2>
          <button className="grid h-10 w-10 place-items-center text-ink" type="button" onClick={onClose} aria-label="Close menu">
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="px-5 py-4">
          {browseCategories.map((item) => (
            <a
              key={item.label}
              className="flex items-center justify-between border-b border-[#efefef] py-4 text-[18px] font-medium text-ink"
              href={item.href}
              onClick={onClose}
            >
              <span>{item.label}</span>
              <Icon name="chevronRight" className="h-4 w-4" />
            </a>
          ))}
        </div>
      </aside>
    </>
  )
}
