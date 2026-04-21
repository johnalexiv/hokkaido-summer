import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionKicker, useReveal } from './ui.jsx'
import { research } from '../data/research.js'

function ResearchBlock({ r, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <article className="reveal paper-card overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
      >
        <div className="min-w-0">
          <div className="font-display text-lg md:text-xl text-ink leading-tight">{r.title}</div>
          <div className="mt-1 text-sm text-smoke">{r.lede}</div>
        </div>
        <ChevronDown className={`w-5 h-5 text-smoke transition-transform duration-300 shrink-0 ${open ? 'rotate-180' : ''}`} strokeWidth={1.5} />
      </button>
      <div className={`row-collapse ${open ? 'open' : ''}`}>
        <div>
          <div className="px-5 md:px-6 pb-6 pt-2 border-t border-stone space-y-6 bg-bone/60">
            {r.blocks.map((b, i) => (
              <div key={i}>
                <div className="text-[0.7rem] uppercase tracking-[0.18em] text-smoke mb-2">{b.h}</div>
                <ul className="space-y-1.5">
                  {b.items.map((it, j) => (
                    <li key={j} className="text-sm text-ink leading-relaxed flex gap-3">
                      <span className="text-ash shrink-0 mt-1.5">—</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export function Research() {
  const ref = useRef(null)
  useReveal(ref, { stagger: 0.05 })

  return (
    <section id="research" ref={ref} className="hairline bg-paper">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionKicker label="06" title="Research" />
        <p className="reveal mt-4 max-w-xl text-smoke leading-relaxed">
          Working notes on season, food, regions, hidden gems, credit-card perks, and what lines up for the
          Jul 17–31 window.
        </p>

        <div className="mt-10 md:mt-14 space-y-3">
          {research.map((r, i) => (
            <ResearchBlock key={r.id} r={r} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}
