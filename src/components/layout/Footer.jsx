import { useState } from 'react'
import { footerColumns } from '../../data/storefront'
import { Icon } from '../ui/Icon'

export function Footer() {
  const [openSection, setOpenSection] = useState('Help')
  const mobileSections = [
    { title: 'Shop', links: ['Toys', 'Clothing', 'Nursery decor'] },
    { title: 'Sell', links: ['Start selling', 'Seller handbook'] },
    { title: 'About', links: ['Company', 'Careers'] },
    { title: 'Help', links: ['Help Centre', 'Privacy settings'] },
  ]

  return (
    <footer id="footer" className="mt-10">
      <div className="bg-[#2f183b] text-white">
        <div className="container-shell px-0 md:px-2">
          <div className="border-b border-white/10 px-4 py-4 text-center text-sm underline decoration-white/40 underline-offset-2 md:hidden">
            Easty is powered by thoughtful design for children&apos;s marketplaces.
          </div>

          <div className="px-4 py-5 md:hidden">
            {mobileSections.map((section) => {
              const isOpen = openSection === section.title

              return (
                <div key={section.title} className="border-b border-white/10 py-1">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left text-[28px] font-semibold"
                    type="button"
                    onClick={() => setOpenSection(isOpen ? '' : section.title)}
                  >
                    <span className="text-[18px]">{section.title}</span>
                    <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
                  </button>
                  {isOpen ? (
                    <div className="space-y-3 pb-4 text-[16px] text-white/82">
                      {section.links.map((link) => (
                        <a key={link} className="block" href="#">
                          {link}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}

            <div className="mt-8 flex items-center justify-center gap-6">
              {['instagram', 'facebook', 'pinterest', 'youtube'].map((name) => (
                <a key={name} href="#" aria-label={name}>
                  <Icon name={name} className="h-6 w-6 text-white" />
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="rounded-lg bg-orange px-4 py-3 font-[var(--font-display)] text-3xl">E</div>
              <button className="rounded-full bg-[#6b7692] px-5 py-3 text-sm font-semibold text-white" type="button">
                Download the Easty App
              </button>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-white/82">
              <p>India | English (IN) | ₹ (INR)</p>
              <p className="mt-4">© 2026 Easty, Inc.</p>
              <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 underline underline-offset-2">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy</a>
                <a href="#">Local Shops</a>
                <a href="#">Regions</a>
              </div>
            </div>
          </div>

          <div className="hidden gap-12 px-2 py-10 md:grid md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="font-[var(--font-display)] text-[38px] text-orange">Easty</p>
              <h2 className="mt-4 max-w-xl font-[var(--font-display)] text-4xl leading-tight">
                A children&apos;s marketplace inspired by Etsy&apos;s familiar browsing experience.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-white/76">
                Built around toy, clothing, nursery, and birthday categories with a marketplace-first shopping flow.
              </p>
              <div className="mt-6 flex gap-5">
                {['instagram', 'facebook', 'pinterest', 'youtube'].map((name) => (
                  <a key={name} href="#" aria-label={name}>
                    <Icon name={name} className="h-6 w-6 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-base font-semibold text-white">{column.title}</h3>
                  <div className="mt-4 space-y-3 text-sm text-white/76">
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
