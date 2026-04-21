import { useRef, useState } from 'react'
import { BedDouble, ChevronDown } from 'lucide-react'
import { SectionKicker, useReveal, ActivityIcon } from './ui.jsx'
import { days } from '../data/days.js'
import { dayImages } from '../data/images.js'

function DayCard({ day, open, onToggle }) {
  return (
    <article className="reveal paper-card overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left grid grid-cols-[92px_1fr_auto] md:grid-cols-[120px_1fr_auto] gap-4 md:gap-6 items-center p-4 md:p-5"
      >
        <div className="relative aspect-square overflow-hidden rounded-sm bg-stone">
          <img src={dayImages[day.n]} alt={day.region} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-tr from-ink/40 to-transparent" />
          <div className="absolute bottom-1.5 left-2 text-paper font-display text-lg leading-none">D{day.n}</div>
        </div>
        <div className="min-w-0">
          <div className="flex items-center gap-2 text-xs text-smoke uppercase tracking-wider">
            <span>{day.date}</span>
            <span className="text-ash">·</span>
            <span className="truncate">{day.region}</span>
          </div>
          <h3 className="mt-1 font-display text-lg md:text-xl text-ink leading-snug truncate">{day.title}</h3>
          <p className="mt-1 text-sm text-smoke leading-snug line-clamp-2 md:line-clamp-1">{day.tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          {day.flag && !open && (
            <span className={`hidden md:inline-flex chip chip-${day.flag.tone}`}>
              {day.flag.label}
            </span>
          )}
          <ChevronDown
            className={`w-5 h-5 text-smoke transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            strokeWidth={1.5}
          />
        </div>
      </button>

      <div className={`row-collapse ${open ? 'open' : ''}`}>
        <div>
          <div className="border-t border-stone px-4 md:px-5 py-5 md:py-6 bg-bone/50">
            {day.flag && (
              <div className="mb-4 md:hidden">
                <span className={`chip chip-${day.flag.tone}`}>{day.flag.label}</span>
              </div>
            )}
            <ul className="space-y-3 md:space-y-4">
              {day.activities.map((a, i) => (
                <li key={i} className="grid grid-cols-[60px_18px_1fr] md:grid-cols-[80px_22px_1fr] gap-3 md:gap-5 items-start">
                  <span className="pt-0.5 text-xs md:text-sm text-smoke tabular-nums tracking-tight">{a.time}</span>
                  <span className="pt-1 text-smoke">
                    <ActivityIcon name={a.icon} className="w-4 h-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-sm md:text-base text-ink leading-snug">{a.title}</div>
                    {a.note && <div className="mt-0.5 text-xs md:text-sm text-smoke leading-relaxed">{a.note}</div>}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-stone/70 flex items-center gap-2 text-xs text-smoke">
              <BedDouble className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Tonight: </span>
              <span className="text-ink">{day.hotel}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function Itinerary() {
  const ref = useRef(null)
  useReveal(ref, { stagger: 0.04 })
  const [openDay, setOpenDay] = useState(1)

  return (
    <section id="itinerary" ref={ref} className="hairline bg-paper">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <SectionKicker label="02" title="Day by day" />
        <p className="reveal mt-4 max-w-xl text-smoke leading-relaxed">
          Fifteen days of real waypoints — times, notes, and the hotel at the end of each. Tap any day to expand.
        </p>
        <div className="mt-10 md:mt-14 space-y-3">
          {days.map(d => (
            <DayCard
              key={d.n}
              day={d}
              open={openDay === d.n}
              onToggle={() => setOpenDay(openDay === d.n ? null : d.n)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
