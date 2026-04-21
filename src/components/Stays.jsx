import { useRef } from 'react'
import { Check } from 'lucide-react'
import { SectionKicker, useReveal } from './ui.jsx'
import { accommodations } from '../data/accommodations.js'

export function Stays() {
  const ref = useRef(null)
  useReveal(ref, { stagger: 0.08 })

  return (
    <section id="stays" ref={ref} className="hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionKicker label="03" title="Stays" />
        <p className="reveal mt-4 max-w-xl text-smoke leading-relaxed">
          Six accommodations across the route. All booked.
        </p>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {accommodations.map(a => (
            <article key={a.id} className="reveal paper-card overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                <img src={a.image} alt={a.region} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="chip chip-moss"><Check className="w-3 h-3" strokeWidth={2}/> Booked</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-paper">
                  <div className="text-[0.65rem] tracking-[0.2em] uppercase opacity-80">{a.region}</div>
                  <div className="font-display text-xl leading-tight">{a.name}</div>
                </div>
              </div>

              <div className="p-5 md:p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-baseline justify-between gap-2 text-sm">
                  <span className="text-ink">{a.dates}</span>
                  <span className="text-smoke">{a.nights} night{a.nights > 1 ? 's' : ''}</span>
                </div>

                <p className="text-sm text-smoke leading-relaxed">{a.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {a.amenities.slice(0, 4).map(am => (
                    <span key={am} className="chip">{am}</span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-stone/70 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="text-smoke uppercase tracking-wider text-[0.65rem]">Cost</div>
                    <div className="text-ink mt-0.5 text-[0.8rem]">{a.costNote}</div>
                  </div>
                  <div>
                    <div className="text-smoke uppercase tracking-wider text-[0.65rem]">Via</div>
                    <div className="text-ink mt-0.5 text-[0.8rem] truncate">{a.platform}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
