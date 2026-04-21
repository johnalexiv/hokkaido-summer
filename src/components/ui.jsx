import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Plane, Car, BedDouble, Utensils, Mountain, Camera, Beer, Flower2,
  Thermometer, Clock, Star, Waves, Landmark, Gift, Ticket, Map,
  Sunrise, Sparkles
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'stays', label: 'Stays' },
  { id: 'flights', label: 'Flights' },
  { id: 'bookings', label: 'Bookings' },
  { id: 'research', label: 'Research' }
]

const iconMap = {
  plane: Plane, car: Car, bed: BedDouble, utensils: Utensils,
  mountain: Mountain, camera: Camera, beer: Beer, flower: Flower2,
  hotSpring: Thermometer, clock: Clock, star: Star, waves: Waves,
  landmark: Landmark, gift: Gift, ticket: Ticket, map: Map,
  sunrise: Sunrise, sparkles: Sparkles
}

export function ActivityIcon({ name, className = 'w-4 h-4' }) {
  const C = iconMap[name] || Clock
  return <C className={className} strokeWidth={1.5} />
}

export function useReveal(ref, opts = {}) {
  useEffect(() => {
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      gsap.set(ref.current.querySelectorAll('.reveal'), { opacity: 1, y: 0 })
      return
    }
    const ctx = gsap.context(() => {
      gsap.to(ref.current.querySelectorAll('.reveal'), {
        opacity: 1, y: 0,
        duration: 0.9,
        stagger: opts.stagger ?? 0.06,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: opts.start ?? 'top 85%',
          once: true
        }
      })
    }, ref)
    return () => ctx.revert()
  }, [ref])
}

export function SectionKicker({ label, title }) {
  return (
    <div className="reveal flex items-end justify-between gap-6 flex-wrap">
      <div>
        <div className="text-[0.7rem] tracking-[0.25em] uppercase text-smoke">Section {label}</div>
        <h2 className="mt-2 font-display text-3xl md:text-5xl text-ink leading-[0.95]">{title}</h2>
      </div>
    </div>
  )
}
