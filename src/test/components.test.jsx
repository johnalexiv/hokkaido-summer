import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '../components/Hero.jsx'
import { Overview } from '../components/Overview.jsx'
import { Itinerary } from '../components/Itinerary.jsx'
import { Stays } from '../components/Stays.jsx'
import { Flights } from '../components/Flights.jsx'
import { Bookings } from '../components/Bookings.jsx'
import { Research } from '../components/Research.jsx'
import { Footer } from '../components/Footer.jsx'
import { Nav } from '../components/Nav.jsx'

const sections = [
  ['Hero', Hero],
  ['Overview', Overview],
  ['Itinerary', Itinerary],
  ['Stays', Stays],
  ['Flights', Flights],
  ['Bookings', Bookings],
  ['Research', Research],
  ['Footer', Footer]
]

describe('section components render', () => {
  for (const [name, Component] of sections) {
    it(`${name} renders without throwing`, () => {
      expect(() => render(<Component />)).not.toThrow()
    })
  }

  it('Nav renders with an active id', () => {
    expect(() => render(<Nav active="overview" />)).not.toThrow()
  })
})
