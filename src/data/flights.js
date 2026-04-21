export const outbound = [
  {
    n: 1,
    date: 'Wed · Jul 15',
    airline: 'United',
    from: { code: 'HOME', city: 'Home' },
    to:   { code: 'SFO', city: 'San Francisco' },
    dep: '21:10', arr: '22:52',
    terminal: 'Terminal 3',
    class: null,
    connection: null
  },
  {
    n: 2,
    date: 'Thu · Jul 16',
    airline: 'ANA',
    from: { code: 'SFO', city: 'San Francisco' },
    to:   { code: 'HND', city: 'Tokyo Haneda' },
    dep: '01:40', arr: '04:25 (Jul 17 JST)',
    terminal: 'Terminal I',
    class: 'Economy',
    connection: { label: '2h 48min at SFO', tone: 'ok' }
  },
  {
    n: 3,
    date: 'Fri · Jul 17',
    airline: 'ANA',
    from: { code: 'HND', city: 'Tokyo Haneda' },
    to:   { code: 'CTS', city: 'Sapporo' },
    dep: '06:20', arr: '07:50',
    terminal: 'Terminal 2',
    class: 'Economy',
    connection: { label: '1h 55min at Haneda', tone: 'ok' }
  }
]

export const returning = [
  {
    n: 4,
    date: 'Fri · Jul 31',
    airline: 'ANA',
    from: { code: 'CTS', city: 'Sapporo' },
    to:   { code: 'HND', city: 'Tokyo Haneda' },
    dep: '21:40', arr: '23:30',
    terminal: 'Terminal D',
    class: 'Economy'
  },
  {
    n: 5,
    date: 'Sat · Aug 1',
    airline: 'ANA',
    from: { code: 'HND', city: 'Tokyo Haneda' },
    to:   { code: 'LAX', city: 'Los Angeles' },
    dep: '00:30', arr: '19:10',
    terminal: 'Terminal 2',
    class: 'Economy',
    connection: { label: '60 min at Haneda — tight', tone: 'warn' }
  },
  {
    n: 6,
    date: 'Sat · Aug 1',
    airline: 'United',
    from: { code: 'LAX', city: 'Los Angeles' },
    to:   { code: 'HOME', city: 'Home' },
    dep: '22:59', arr: '00:21 (Aug 2)',
    terminal: 'Terminal 7',
    class: null
  }
]

export const carRental = {
  company: 'AVIS',
  location: 'CTS New Chitose Airport',
  pickup: 'Jul 17 · 8:00am',
  dropoff: 'Jul 31 · 6:00pm',
  paidAt: 'pay at counter'
}
