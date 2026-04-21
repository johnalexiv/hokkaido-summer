import { useRef } from 'react'
import { Plane, Car, Clock, AlertTriangle } from 'lucide-react'
import { SectionKicker, useReveal } from './ui.jsx'
import { outbound, returning, carRental } from '../data/flights.js'

function FlightLeg({ leg }) {
  const tone = leg.connection?.tone === 'warn'
  return (
    <div className="reveal paper-card p-4 md:p-5">
      <div className="flex items-center justify-between text-xs text-smoke">
        <div className="flex items-center gap-2 tabular-nums">
          <span className="font-medium text-ink">{leg.airline}</span>
          <span className="text-ash">·</span>
          <span>{leg.date}</span>
        </div>
        {leg.class && <span className="chip">{leg.class}</span>}
      </div>

      <div className="mt-3 grid grid-cols-[auto_1fr_auto] gap-3 md:gap-5 items-center">
        <div className="text-right">
          <div className="font-display text-xl md:text-2xl text-ink leading-none tabular-nums">{leg.from.code}</div>
          <div className="text-[0.7rem] text-smoke mt-1">{leg.from.city}</div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-smoke">
            <div className="h-px w-4 md:w-8 bg-stone" />
            <Plane className="w-3.5 h-3.5" strokeWidth={1.5} />
            <div className="h-px w-4 md:w-8 bg-stone" />
          </div>
          <div className="text-[0.65rem] text-smoke tabular-nums">{leg.dep} → {leg.arr}</div>
        </div>
        <div>
          <div className="font-display text-xl md:text-2xl text-ink leading-none tabular-nums">{leg.to.code}</div>
          <div className="text-[0.7rem] text-smoke mt-1">{leg.to.city}</div>
        </div>
      </div>

      {leg.terminal && (
        <div className="mt-4 pt-3 border-t border-stone/70 text-xs text-smoke">
          <span className="text-[0.65rem] uppercase tracking-wider">Terminal</span>
          <div className="mt-0.5 text-ink">{leg.terminal}</div>
        </div>
      )}

      {leg.connection && (
        <div className={`mt-3 flex items-center gap-2 text-xs ${tone ? 'text-ember' : 'text-smoke'}`}>
          {tone ? <AlertTriangle className="w-3.5 h-3.5" strokeWidth={1.5} /> : <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />}
          <span>{leg.connection.label}</span>
        </div>
      )}

      {leg.note && <div className="mt-2 text-xs text-smoke leading-relaxed">{leg.note}</div>}
    </div>
  )
}

export function Flights() {
  const ref = useRef(null)
  useReveal(ref, { stagger: 0.05 })

  return (
    <section id="flights" ref={ref} className="hairline bg-paper">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionKicker label="04" title="Flights & transport" />

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="reveal font-display text-xl md:text-2xl text-ink mb-6 flex items-center gap-3">
              <span className="text-smoke text-sm">→</span> Outbound · Jul 15 – 17
            </h3>
            <div className="space-y-3">
              {outbound.map(l => <FlightLeg key={l.n} leg={l} />)}
            </div>
          </div>

          <div>
            <h3 className="reveal font-display text-xl md:text-2xl text-ink mb-6 flex items-center gap-3">
              <span className="text-smoke text-sm">←</span> Return · Jul 31 – Aug 2
            </h3>
            <div className="space-y-3">
              {returning.map(l => <FlightLeg key={l.n} leg={l} />)}
            </div>
          </div>
        </div>

        <div className="reveal mt-12 md:mt-16 paper-card p-5 md:p-7 grid md:grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-sm bg-bone border border-stone flex items-center justify-center">
              <Car className="w-5 h-5 text-ink" strokeWidth={1.5} />
            </div>
            <div>
              <div className="text-[0.7rem] uppercase tracking-wider text-smoke">Rental car</div>
              <div className="font-display text-lg text-ink leading-tight">{carRental.company} · {carRental.location}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-[0.65rem] uppercase tracking-wider text-smoke">Pickup</div>
              <div className="text-ink mt-0.5">{carRental.pickup}</div>
            </div>
            <div>
              <div className="text-[0.65rem] uppercase tracking-wider text-smoke">Dropoff</div>
              <div className="text-ink mt-0.5">{carRental.dropoff}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[0.65rem] uppercase tracking-wider text-smoke">Payment</div>
            <div className="text-[0.8rem] text-ink mt-0.5">{carRental.paidAt}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
