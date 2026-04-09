import { useState } from 'react'
import { BrandLogo } from '../ui/BrandLogo'
import { Icon } from '../ui/Icon'

export function Footer() {
  const [openSection, setOpenSection] = useState(null)

  const footerSections = [
    {
      id: 'shop',
      title: 'Shop',
      links: ['Gift cards', 'Toyove Registry', 'Sitemap', 'Toyove blog', 'Toyove United Kingdom', 'Toyove Germany', 'Toyove Canada']
    },
    {
      id: 'sell',
      title: 'Sell',
      links: ['Sell on Toyove', 'Teams', 'Forums', 'Affiliates & Creators']
    },
    {
      id: 'about',
      title: 'About',
      links: ['Toyove India, Inc.', 'Policies', 'Investors', 'Careers', 'Press', 'Impact', 'Legal imprint']
    },
    {
      id: 'help',
      title: 'Help',
      links: ['Help Centre', 'Privacy settings']
    }
  ]

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id)
  }

  return (
    <footer className="bg-footer-bg text-white mt-12 pb-10">
      <div className="container-shell pt-10">
        
        {/* 1. Renewable Notice (Screenshot 1 Exact) */}
        <div className="flex flex-col items-center justify-center text-center px-4 mb-10">
          <Icon name="region" className="h-10 w-10 mb-3 opacity-80" />
          <a href="#" className="text-[14px] font-medium border-b border-white/20 pb-0.5 hover:border-white transition-colors">
            Toyove India is powered by 100% renewable electricity.
          </a>
        </div>

        {/* 2. Mobile Accordions (Desktop: 4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8 border-t border-white/10 md:border-none">
          {footerSections.map((section) => (
            <div key={section.id} className="border-b border-white/10 md:border-none">
              <button 
                onClick={() => toggleSection(section.id)}
                className="w-full py-5 px-4 flex items-center justify-between text-[16px] font-bold md:cursor-default md:pointer-events-none md:p-0 md:mb-5"
              >
                <span>{section.title}</span>
                <Icon 
                  name="chevronDown" 
                  className={`h-4 w-4 transition-transform md:hidden ${openSection === section.id ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <ul className={`overflow-hidden transition-all duration-300 ${openSection === section.id ? 'max-h-[400px] pb-6 px-4' : 'max-h-0 md:max-h-none'} md:space-y-3`}>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[14px] text-white/70 hover:text-white block py-2 md:py-0">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3. Social & App Block (Screenshot 1 Exact) */}
        <div className="mt-12 flex flex-col items-center gap-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-8">
            <Icon name="instagram" className="h-6 w-6 opacity-80" />
            <Icon name="facebook" className="h-6 w-6 opacity-80" />
            <Icon name="pinterest" className="h-6 w-6 opacity-80" />
            <Icon name="youtube" className="h-6 w-6 opacity-80" />
          </div>

          <div className="flex flex-col items-center gap-4">
             <BrandLogo size="nav" showSuffix={false} className="grayscale invert opacity-80" />
             <button className="h-10 px-6 rounded-full bg-[#463a5a] text-[14px] font-bold text-white hover:bg-white/10 transition">
                Download the Toyove App
             </button>
          </div>
        </div>

        {/* 4. Bottom Legal Strip */}
        <div className="mt-12 text-center text-[12px] font-medium text-white/60 px-4 space-y-4">
          <div className="flex items-center justify-center gap-2 text-white">
             <Icon name="region" className="h-4 w-4" />
             <span>India | English (IN) | ₹ (INR)</span>
          </div>
          <p>© 2026 Toyove India, Inc.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-80">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Interest-based ads</a>
            <a href="#">Local Shops</a>
            <a href="#">Regions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
