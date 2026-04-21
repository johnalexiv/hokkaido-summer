import { NAV_SECTIONS } from './ui.jsx'

export function Nav({ active }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 backdrop-blur-md bg-bone/75 border-b border-stone">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-3 flex items-center gap-3 md:gap-6 overflow-x-auto">
        <a href="#top" className="font-display text-sm md:text-base font-semibold tracking-tight shrink-0 text-ink">
          北海道 · Hokkaido
        </a>
        <div className="flex gap-1.5 md:gap-2 ml-auto">
          {NAV_SECTIONS.map(s => (
            <a key={s.id} href={`#${s.id}`} className={`pill ${active === s.id ? 'active' : ''}`}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
