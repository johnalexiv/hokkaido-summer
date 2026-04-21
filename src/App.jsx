import { useEffect, useState } from 'react'
import { NAV_SECTIONS } from './components/ui.jsx'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { Overview } from './components/Overview.jsx'
import { Itinerary } from './components/Itinerary.jsx'
import { Stays } from './components/Stays.jsx'
import { Flights } from './components/Flights.jsx'
import { Bookings } from './components/Bookings.jsx'
import { Research } from './components/Research.jsx'
import { Footer } from './components/Footer.jsx'

export default function App() {
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const sections = NAV_SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean)
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <Nav active={active} />
      <main className="relative z-10">
        <Hero />
        <Overview />
        <Itinerary />
        <Stays />
        <Flights />
        <Bookings />
        <Research />
        <Footer />
      </main>
    </>
  )
}
