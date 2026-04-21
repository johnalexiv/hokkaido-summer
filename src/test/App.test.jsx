import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App.jsx'
import { NAV_SECTIONS } from '../components/ui.jsx'

describe('App', () => {
  it('renders without throwing', () => {
    expect(() => render(<App />)).not.toThrow()
  })

  it('renders a container for every NAV_SECTIONS id', () => {
    const { container } = render(<App />)
    for (const { id } of NAV_SECTIONS) {
      expect(container.querySelector(`#${id}`)).not.toBeNull()
    }
  })
})
