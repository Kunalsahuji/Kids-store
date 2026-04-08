import { brand } from '../../data/brand'

const sizeMap = {
  nav: { mark: 'h-0 w-0', text: 'text-[21px] sm:text-[22px]', gap: 'gap-0' },
  sm: { mark: 'h-8 w-8', text: 'text-[24px]', gap: 'gap-2' },
  md: { mark: 'h-10 w-10', text: 'text-[32px]', gap: 'gap-2.5' },
  lg: { mark: 'h-12 w-12', text: 'text-[40px]', gap: 'gap-3' },
}

export function ToyoveMark({ className = '' }) {
  return (
    <svg aria-hidden="true" className={`shrink-0 ${className}`} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="40" height="40" rx="12" fill="#f1641e" />
      <path d="M14 15h20v4h-8v16h-4V19h-8v-4Z" fill="#fff" />
      <circle cx="16.5" cy="31.5" r="2.4" fill="#dcead6" />
      <circle cx="24" cy="31.5" r="2.4" fill="#d7e3f4" />
      <circle cx="31.5" cy="31.5" r="2.4" fill="#f7efe7" />
      <path d="M31.9 9.2 33.2 12l3 .5-2.2 2.1.5 3-2.6-1.4-2.6 1.4.5-3-2.2-2.1 3-.5 1.3-2.8Z" fill="#fff" />
    </svg>
  )
}

export function BrandLogo({
  href = '#home',
  className = '',
  size = 'md',
  withWordmark = true,
  showMark = true,
  showSuffix = true,
}) {
  const config = sizeMap[size] ?? sizeMap.md

  return (
    <a aria-label={brand.name} className={`inline-flex items-center ${showMark ? config.gap : 'gap-0'} ${className}`} href={href}>
      {showMark ? <ToyoveMark className={config.mark} /> : null}
      {withWordmark ? (
        <span className={`inline-flex items-end gap-1 font-[var(--font-display)] leading-none tracking-[-0.03em] text-[#f1641e] ${config.text}`}>
          <span>{brand.shortName}</span>
          {showSuffix ? (
            <span className="hidden sm:inline text-[0.48em] font-semibold uppercase tracking-[0.26em] text-[#6f6878]">
              India
            </span>
          ) : null}
        </span>
      ) : null}
    </a>
  )
}
