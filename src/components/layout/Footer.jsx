import { useState } from 'react'
import { brand } from '../../data/brand'
import { footerColumns } from '../../data/storefront'
import { BrandLogo } from '../ui/BrandLogo'
import { Icon } from '../ui/Icon'

export function Footer() {
  const [openSection, setOpenSection] = useState('Help')
  const mobileSections = footerColumns
  const legalLinks = ['Terms of Use', 'Privacy', 'Interest-based ads', 'Local Shops', 'Regions']

  return (
    <footer id="footer" className="mt-10">
      <div className="bg-[#d7cfe5] px-4 py-9 md:py-10">
        <div className="mx-auto max-w-[1280px] text-center">
          <p className="text-[18px] font-semibold text-[#2f2a35] md:text-[20px]">{brand.newsletterCopy}</p>
          <form className="mx-auto mt-6 flex w-full max-w-[920px] items-center rounded-full border border-[#8f8699] bg-[#d7cfe5] px-4 py-2 md:px-6">
            <input
              className="h-10 flex-1 bg-transparent px-2 text-[16px] text-ink outline-none placeholder:text-[#6f6878]"
              placeholder="Enter your email"
              type="email"
            />
            <button className="shrink-0 rounded-full px-3 py-2 text-[17px] font-semibold text-[#2f2a35]" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-[#2f183b] text-white">
        <div className="border-b border-white/12 px-4 py-6 text-center">
          <a className="inline-flex items-center gap-3 text-[18px] font-semibold text-white underline decoration-white/45 underline-offset-4" href="#">
            <Icon name="region" className="h-6 w-6" />
            {brand.poweredByCopy}
          </a>
        </div>

        <div className="container-shell px-0 md:px-2">
          <div className="px-4 py-5 md:hidden">
            {mobileSections.map((section) => {
              const isOpen = openSection === section.title

              return (
                <div key={section.title} className="border-b border-white/10 py-1">
                  <button
                    className="flex w-full items-center justify-between py-4 text-left text-[17px] font-semibold"
                    type="button"
                    onClick={() => setOpenSection(isOpen ? '' : section.title)}
                  >
                    <span>{section.title}</span>
                    <span className={`text-sm transition-transform ${isOpen ? 'rotate-180' : ''}`}>v</span>
                  </button>
                  {isOpen ? (
                    <div className="space-y-2 pb-4 text-[15px] text-white/84">
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

            <div className="mt-8 flex items-center justify-center gap-5">
              {['instagram', 'facebook', 'pinterest', 'youtube'].map((name) => (
                <a key={name} href="#" aria-label={name}>
                  <Icon name={name} className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <BrandLogo size="sm" showSuffix={false} />
              <button className="rounded-full bg-[#6b7692] px-5 py-3 text-sm font-semibold text-white" type="button">
                {brand.appDownloadLabel}
              </button>
            </div>

            <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-white/84">
              <p className="inline-flex items-center gap-2">
                <Icon name="region" className="h-4 w-4" /> India | English (IN) | ₹ (INR)
              </p>
              <p className="mt-4">{brand.copyright}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-2 underline underline-offset-2">
                {legalLinks.map((link) => (
                  <a key={link} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-tablet-only px-2 py-12">
            <div className="mx-auto grid max-w-[1080px] grid-cols-4 gap-8">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[20px] font-semibold leading-none text-white">{column.title}</h3>
                  <div className="mt-4 space-y-3 text-[15px] leading-[1.4] text-white/84">
                    {column.links.map((link) => (
                      <a key={link} className="block" href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                  {column.title === 'Help' ? (
                    <div className="mt-8 flex items-center gap-6">
                      {['instagram', 'facebook', 'pinterest', 'youtube'].map((name) => (
                        <a key={name} href="#" aria-label={name}>
                          <Icon name={name} className="h-6 w-6 text-white" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              <BrandLogo size="md" />
              <button className="rounded-full bg-[#6b7692] px-6 py-3 text-[17px] font-semibold text-white" type="button">
                {brand.appDownloadLabel}
              </button>
            </div>

            <div className="mt-10 border-t border-white/10 pt-5 text-sm text-white/86">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="inline-flex items-center gap-2 text-[14px]">
                  <Icon name="region" className="h-4 w-4" />
                  India | English (IN) | ₹ (INR)
                </p>
                <p className="text-[14px]">{brand.copyright}</p>
                <div className="flex flex-wrap items-center gap-4 text-[14px] underline underline-offset-2">
                  {legalLinks.map((link) => (
                    <a key={link} href="#">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-desktop-only items-start gap-8 px-2 py-12">
            <div className="flex basis-[38%] flex-col items-center justify-center">
              <BrandLogo size="md" />
              <button className="mt-6 rounded-full bg-[#6b7692] px-6 py-3 text-[17px] font-semibold text-white" type="button">
                {brand.appDownloadLabel}
              </button>
            </div>

            <div className="grid basis-[62%] grid-cols-4 gap-8 lg:gap-10">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-[20px] font-semibold leading-none text-white">{column.title}</h3>
                  <div className="mt-4 space-y-3 text-[15px] leading-[1.4] text-white/84">
                    {column.links.map((link) => (
                      <a key={link} className="block" href="#">
                        {link}
                      </a>
                    ))}
                  </div>
                  {column.title === 'Help' ? (
                    <div className="mt-8 flex items-center gap-6">
                      {['instagram', 'facebook', 'pinterest', 'youtube'].map((name) => (
                        <a key={name} href="#" aria-label={name}>
                          <Icon name={name} className="h-6 w-6 text-white" />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="footer-desktop-only border-t border-white/10 px-2 py-5 text-sm text-white/86 flex-wrap items-center justify-between gap-4">
            <p className="inline-flex items-center gap-2 text-[14px]">
              <Icon name="region" className="h-4 w-4" />
              India | English (IN) | ₹ (INR)
            </p>
            <p className="text-[14px]">{brand.copyright}</p>
            <div className="flex flex-wrap items-center gap-4 text-[14px] underline underline-offset-2">
              {legalLinks.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
