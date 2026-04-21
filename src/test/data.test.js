import { describe, it, expect } from 'vitest'
import { images, dayImages } from '../data/images.js'
import { days } from '../data/days.js'
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
