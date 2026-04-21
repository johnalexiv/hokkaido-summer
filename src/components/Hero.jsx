import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { trip } from '../data/trip.js'
import { images } from '../data/images.js'

export function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !titleRef.current) return
    const lines = titleRef.current.querySelectorAll('.hero-line')
    gsap.set(lines, { y: 80, opacity: 0 })
    gsap.to(lines, {
      y: 0, opacity: 1,
      duration: 1.2, stagger: 0.12, ease: 'power4.out', delay: 0.2
    })
    gsap.from('.hero-meta', { y: 16, opacity: 0, duration: 0.8, delay: 1.0, ease: 'power3.out' })
    gsap.from('.hero-img', { scale: 1.08, duration: 2.4, ease: 'power3.out' })
  }, [])

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images.capeKamui}
          alt="Cape Kamui cliffs and sea, Shakotan Peninsula"
          className="hero-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/45 to-ink/85" />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-10 py-20 flex flex-col justify-between [text-shadow:0_1px_3px_rgb(0_0_0/0.35)]">
        <div className="flex items-center justify-between text-paper text-xs tracking-[0.18em] uppercase">
          <span>Jul 17 — Jul 31 · 2026</span>
          <span className="hidden md:inline">{trip.travelers.join(' + ')}</span>
        </div>

        <div>
          <div ref={titleRef} className="font-display text-paper leading-[0.92] tracking-tight [text-shadow:0_2px_18px_rgb(0_0_0/0.45)]">
            <div className="overflow-hidden">
              <div className="hero-line text-[clamp(2.2rem,6vw,4.2rem)] font-light">北海道の夏</div>
            </div>
            <div className="overflow-hidden mt-1 md:mt-2">
              <div className="hero-line text-[clamp(3rem,9vw,6.5rem)] font-semibold">Hokkaido</div>
            </div>
            <div className="overflow-hidden">
              <div className="hero-line text-[clamp(3rem,9vw,6.5rem)] font-semibold">Summer 2026</div>
            </div>
          </div>

          <p className="hero-meta mt-6 md:mt-8 max-w-xl text-paper text-base md:text-lg leading-relaxed">
            {trip.tagline}
          </p>

          <div className="hero-meta mt-8 flex flex-wrap gap-6 text-paper text-sm">
            <HeroStat label="Nights" value="14" />
            <Divider />
            <HeroStat label="Regions" value="6" />
            <Divider />
            <HeroStat label="Stays" value="6 booked" />
            <Divider />
            <HeroStat label="Travelers" value={trip.travelers.join(' · ')} />
          </div>
        </div>

        <a href="#overview" className="hero-meta inline-flex items-center gap-2 text-paper text-xs tracking-widest uppercase self-start hover:text-paper/80 transition-colors">
          <span className="w-8 h-px bg-paper/70" />
          Scroll
        </a>
      </div>
    </section>
  )
}

function HeroStat({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-[0.65rem] tracking-[0.2em] uppercase text-paper/80">{label}</span>
      <span className="text-base md:text-lg text-paper font-medium">{value}</span>
    </div>
  )
}

function Divider() {
  return <span className="hidden md:block w-px h-8 bg-paper/40 self-center" />
}
