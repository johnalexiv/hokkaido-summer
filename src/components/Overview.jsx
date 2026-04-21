import { useRef } from 'react'
import { SectionKicker, useReveal } from './ui.jsx'
import { trip } from '../data/trip.js'

export function Overview() {
  const ref = useRef(null)
  useReveal(ref)

  const tiles = [
    { label: 'Days',     value: '15', sub: 'Jul 17 → 31' },
    { label: 'Regions',  value: '6',  sub: 'Niseko · Otaru · Sapporo · Furano · Lake Toya · Noboribetsu' },
    { label: 'Stays',    value: '6',  sub: 'All booked' },
    { label: 'Flights',  value: '6',  sub: '3 legs each way · ANA + UA' },
    { label: 'Budget',   value: `≈ $${trip.estimatedCashTotal.toLocaleString()}`, sub: `per person ≈ $${trip.perPerson.toLocaleString()}` }
  ]

  const routeRows = [
    ['Jul 17–19', 'Niseko', 'Park Hyatt Hanazono · rafting · Mt. Yotei'],
    ['Jul 19–21', 'Otaru',  'Glassblowing · canal at dusk · uni'],
    ['Jul 21–25', 'Sapporo', 'Beer Garden opening · Hill of the Buddha · ramen'],
    ['Jul 25–28', 'Furano', 'Lavender at peak · Blue Pond · patchwork road'],
    ['Jul 28–30', 'Lake Toya', 'Private open-air bath · nightly fireworks'],
    ['Jul 30',    'Noboribetsu', 'Hell Valley · Oni-hanabi Thursday'],
    ['Jul 31',    'CTS → Home', 'Upopoy Ainu Museum · fly home']
  ]

  return (
    <section id="overview" ref={ref} className="hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionKicker label="01" title="At a glance" />

        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-5 gap-px bg-stone border border-stone">
          {tiles.map(t => (
            <div key={t.label} className="reveal bg-paper px-5 py-6 md:px-7 md:py-8 flex flex-col justify-between min-h-[140px]">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-smoke">{t.label}</span>
              <div className="mt-3">
                <div className="font-display text-3xl md:text-4xl text-ink leading-none">{t.value}</div>
                <div className="mt-2 text-xs text-smoke leading-relaxed">{t.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 md:mt-14 grid md:grid-cols-[2fr_3fr] gap-8 md:gap-14 items-start">
          <div>
            <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">The route</h3>
            <p className="mt-4 text-smoke leading-relaxed max-w-prose">
              Niseko-first western loop. Land CTS July 17, fly home July 31. Eastern Hokkaido deferred in favor of
              Cape Kamui, Otaru, four days in Sapporo timed to beer garden opening, the Furano lavender window,
              and two nights on Lake Toya before a final night in Noboribetsu for Oni-hanabi on Thursday.
            </p>
          </div>
          <ol className="space-y-1 text-sm">
            {routeRows.map(([when, where, what]) => (
              <li key={when} className="flex gap-4 py-2 border-b border-stone/70 last:border-b-0">
                <span className="w-24 shrink-0 text-xs uppercase tracking-wider text-smoke">{when}</span>
                <span className="w-28 shrink-0 text-ink font-medium">{where}</span>
                <span className="text-smoke">{what}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
