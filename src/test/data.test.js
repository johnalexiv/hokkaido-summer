import { describe, it, expect } from 'vitest'
import { images, dayImages } from '../data/images.js'
import { days, getTodayDayNumber } from '../data/days.js'
import { accommodations } from '../data/accommodations.js'
import { trip } from '../data/trip.js'

describe('data integrity', () => {
  const imageValues = new Set(Object.values(images))

  it('every dayImages value maps to a defined images entry', () => {
    for (const [day, url] of Object.entries(dayImages)) {
      expect(typeof url, `dayImages[${day}]`).toBe('string')
      expect(imageValues.has(url), `dayImages[${day}] = ${url}`).toBe(true)
    }
  })

  it('every accommodation has a resolvable image', () => {
    for (const a of accommodations) {
      expect(typeof a.image, `${a.id}.image`).toBe('string')
      expect(imageValues.has(a.image), `${a.id}.image = ${a.image}`).toBe(true)
    }
  })

  it('dayImages covers every day in days[]', () => {
    for (const d of days) {
      expect(dayImages[d.n], `dayImages[${d.n}]`).toBeDefined()
    }
  })

  it('trip.js exposes fields consumed by Hero/Overview', () => {
    expect(typeof trip.estimatedCashTotal).toBe('number')
    expect(typeof trip.perPerson).toBe('number')
    expect(Array.isArray(trip.travelers)).toBe(true)
    expect(typeof trip.tagline).toBe('string')
  })

  it('days[] has 15 entries', () => {
    expect(days).toHaveLength(15)
  })

  it('accommodations[] has 6 entries', () => {
    expect(accommodations).toHaveLength(6)
  })
})

describe('getTodayDayNumber', () => {
  it('maps in-trip dates to their day number', () => {
    expect(getTodayDayNumber(new Date(2026, 6, 17))).toBe(1)
    expect(getTodayDayNumber(new Date(2026, 6, 25))).toBe(9)
    expect(getTodayDayNumber(new Date(2026, 6, 31))).toBe(15)
  })

  it('ignores time-of-day, matching on calendar date', () => {
    expect(getTodayDayNumber(new Date(2026, 6, 25, 23, 59))).toBe(9)
  })

  it('returns null outside the trip window', () => {
    expect(getTodayDayNumber(new Date(2026, 6, 16))).toBeNull()
    expect(getTodayDayNumber(new Date(2026, 7, 1))).toBeNull()
  })
})
