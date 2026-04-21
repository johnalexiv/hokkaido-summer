import { useRef } from 'react'
import { Check, CircleDashed } from 'lucide-react'
import { SectionKicker, useReveal } from './ui.jsx'
import { checklist } from '../data/bookings.js'

export function Bookings() {
  const ref = useRef(null)
  useReveal(ref, { stagger: 0.05 })

  return (
    <section id="bookings" ref={ref} className="hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionKicker label="05" title="Booking checklist" />

        <div className="mt-10 md:mt-14 max-w-3xl">
          <ul className="paper-card divide-y divide-stone">
            {checklist.map((c, i) => (
              <li key={i} className="reveal grid grid-cols-[28px_1fr_auto] gap-4 items-center p-4 md:px-5">
                <span className={c.status === 'booked' ? 'text-moss' : 'text-smoke'}>
                  {c.status === 'booked'
                    ? <Check className="w-5 h-5" strokeWidth={2} />
                    : <CircleDashed className="w-5 h-5" strokeWidth={1.5} />}
                </span>
                <div className="min-w-0">
                  <div className="text-ink text-sm md:text-base">{c.item}</div>
                  <div className="text-xs text-smoke mt-0.5">{c.when} · {c.via}</div>
                </div>
                <span className={`chip ${c.status === 'booked' ? 'chip-moss' : 'chip-accent'}`}>
                  {c.status === 'booked' ? 'Booked' : 'Pending'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
