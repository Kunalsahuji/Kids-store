const paths = {
  menu: (
    <path
      d="M4 7.5h16M4 12h16M4 16.5h16"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  ),
  close: (
    <path
      d="m6 6 12 12M18 6 6 18"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.8"
    />
  ),
  chevronRight: (
    <path
      d="m10 7 5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  chevronLeft: (
    <path
      d="m14 7-5 5 5 5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  chevronDown: (
    <path
      d="m7 10 5 5 5-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  gift: (
    <>
      <path d="M5 10h14v9H5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10v9M5 13h14" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10H8.8A2.4 2.4 0 1 1 11 6.1L12 7m0 3h3.2A2.4 2.4 0 1 0 13 6.1L12 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m15 15 4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </>
  ),
  heart: (
    <path
      d="M12 18.2 5.8 12a4.3 4.3 0 0 1 6.1-6.1L12 6.1l.1-.2A4.3 4.3 0 1 1 18.2 12L12 18.2Z"
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  bag: (
    <>
      <path
        d="M4.5 6.8h2.3l1.6 8h8.2l2-5.9H8.4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <circle cx="10.3" cy="18.2" r="1.2" fill="currentColor" />
      <circle cx="16.4" cy="18.2" r="1.2" fill="currentColor" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.4" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M5.5 19a6.5 6.5 0 0 1 13 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </>
  ),
  arrow: (
    <path
      d="M5 12h14m-6-6 6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  star: <path d="m12 4 2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5L4.8 9.3l5-.7L12 4Z" fill="currentColor" />,
  blocks: (
    <>
      <rect x="4.5" y="12.2" width="6" height="6" rx="1.2" fill="currentColor" />
      <rect x="9" y="5.8" width="6.5" height="6.5" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14.2" y="12.2" width="5.3" height="5.3" rx="1.2" fill="currentColor" opacity="0.72" />
    </>
  ),
  store: (
    <>
      <path d="M5 9.2h14l-1 2.7a2 2 0 0 1-1.9 1.3H8a2 2 0 0 1-1.9-1.3L5 9.2Z" fill="currentColor" />
      <path d="M6.5 13.2h11V19H6.5z" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.8 6h6.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </>
  ),
  bear: (
    <>
      <circle cx="8" cy="8" r="2.2" fill="currentColor" />
      <circle cx="16" cy="8" r="2.2" fill="currentColor" />
      <circle cx="12" cy="13" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="10" cy="12.2" r="0.8" fill="currentColor" />
      <circle cx="14" cy="12.2" r="0.8" fill="currentColor" />
      <path d="M12 13.4v1.4" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </>
  ),
  rocket: (
    <>
      <path
        d="M12 4.5c2.7 1.8 4.2 5.3 3.6 8.5-3.2.6-6.7-.9-8.5-3.6 1-2.6 2.3-4 4.9-4.9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12.7" cy="9.3" r="1.3" fill="currentColor" />
      <path d="M8.3 14.8 6 18m9.7-3.2 2.3 3.2M8.2 13l-2.9.5M18.7 13l-2.9.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </>
  ),
  home: (
    <>
      <path d="M4.8 10.4 12 5l7.2 5.4V19H4.8z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M9.3 19v-5.2h5.4V19" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </>
  ),
  region: (
    <>
      <circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 12h16.4M12 3.8a13 13 0 0 1 0 16.4M12 3.8a13 13 0 0 0 0 16.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </>
  ),
  instagram: (
    <>
      <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" />
    </>
  ),
  facebook: (
    <path d="M13.2 19v-6.1h2.1l.5-2.7h-2.6V8.7c0-.8.3-1.4 1.5-1.4H16V5c-.5-.1-1.1-.2-1.9-.2-2 0-3.3 1.2-3.3 3.5v1.9H8.5v2.7h2.3V19h2.4Z" fill="currentColor" />
  ),
  pinterest: (
    <path d="M12 4.8c-3.7 0-5.6 2.7-5.6 5 0 1.4.5 2.7 1.7 3.2.2.1.3 0 .4-.2l.3-1.1c.1-.2 0-.3-.1-.5-.3-.4-.5-1-.5-1.8 0-2.3 1.7-4.4 4.6-4.4 2.5 0 3.9 1.5 3.9 3.6 0 2.7-1.2 5-2.9 5-.9 0-1.6-.7-1.3-1.7.2-1.2.8-2.4.8-3.2 0-.7-.4-1.4-1.2-1.4-1 0-1.8 1-1.8 2.5 0 .9.3 1.5.3 1.5l-1.2 5c-.3 1.2 0 2.6 0 2.7 0 .1.1.1.2.1.1 0 1-.9 1.4-1.8.1-.3.7-2.7.7-2.7.4.8 1.4 1.4 2.5 1.4 3.3 0 5.5-3 5.5-7 0-2.9-2.5-5.5-6.2-5.5Z" fill="currentColor" />
  ),
  youtube: (
    <>
      <path d="M19.5 8.2c-.2-.9-.9-1.6-1.8-1.8C16.1 6 12 6 12 6s-4.1 0-5.7.4c-.9.2-1.6.9-1.8 1.8C4 9.8 4 12 4 12s0 2.2.5 3.8c.2.9.9 1.6 1.8 1.8C7.9 18 12 18 12 18s4.1 0 5.7-.4c.9-.2 1.6-.9 1.8-1.8.5-1.6.5-3.8.5-3.8s0-2.2-.5-3.8Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m10.3 14.3 4.4-2.3-4.4-2.3v4.6Z" fill="currentColor" />
    </>
  ),
}

export function Icon({ name, className = 'h-5 w-5' }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {paths[name]}
    </svg>
  )
}
