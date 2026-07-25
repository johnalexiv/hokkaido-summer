import { render, within } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Itinerary } from '../components/Itinerary.jsx'

// The Itinerary auto-opens and scrolls to the day matching the current date when
// today falls inside the trip window (Jul 17–31, 2026), and does nothing otherwise.
describe('Itinerary auto-scroll to today', () => {
  let scrollSpy

  beforeEach(() => {
    vi.useFakeTimers()
    scrollSpy = vi.fn()
    Element.prototype.scrollIntoView = scrollSpy
  })

  afterEach(() => {
    vi.useRealTimers()
    delete Element.prototype.scrollIntoView
  })

  function ariaOf(container, n) {
    const card = container.querySelector(`#day-${n}`)
    return within(card).getByRole('button').getAttribute('aria-expanded')
  }

  it('opens and scrolls to today when on-trip (Jul 25 → Day 9)', () => {
    vi.setSystemTime(new Date(2026, 6, 25))
    const { container } = render(<Itinerary />)

    expect(ariaOf(container, 9)).toBe('true')
    expect(ariaOf(container, 1)).toBe('false')

    vi.advanceTimersByTime(300) // let the scheduled scroll callbacks fire
    expect(scrollSpy).toHaveBeenCalled()
  })

  it('stays on Day 1 with no scroll when off-trip (Aug 5)', () => {
    vi.setSystemTime(new Date(2026, 7, 5))
    const { container } = render(<Itinerary />)

    expect(ariaOf(container, 1)).toBe('true')
    expect(ariaOf(container, 9)).toBe('false')

    vi.advanceTimersByTime(50)
    expect(scrollSpy).not.toHaveBeenCalled()
  })
})
