# Hokkaido Summer 2026

Two-week Hokkaido itinerary site — July 17–31, 2026.

Live: https://johnalexiv.github.io/hokkaido-summer/

## Stack

Vite + React 19, Tailwind, GSAP, Lucide icons. Vitest + React Testing Library for tests.

## Scripts

```
npm run dev      # local dev server (http://localhost:5173/hokkaido-summer/)
npm run build    # production build → dist/
npm run preview  # preview the production build
npm test         # run tests (vitest)
```

## Deploy

Pushes to `main` are built and deployed to GitHub Pages via `.github/workflows/deploy.yml`.

## Layout

- `src/components/` — section components (Hero, Overview, Itinerary, Stays, Flights, Bookings, Research, Footer, Nav)
- `src/data/` — trip data (days, accommodations, flights, bookings, research, images)
- `public/images/` — location photos served by Vite
