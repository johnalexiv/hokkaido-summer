// Activity `icon` maps to a Lucide component in App.jsx.
// Options: plane, car, bed, utensils, mountain, camera, beer, flower, hotSpring,
//          clock, star, waves, landmark, gift, ticket, map, sunrise, sparkles

export const TRIP_START = new Date(2026, 6, 17) // Jul 17 2026, local time, day n=1

// Returns the day number (1..days.length) matching today's local date, or null
// if today is outside the trip window. Compared at local-midnight granularity so
// device timezone / time-of-day don't matter — only the calendar date does.
export function getTodayDayNumber(now = new Date()) {
  const startMidnight = new Date(TRIP_START.getFullYear(), TRIP_START.getMonth(), TRIP_START.getDate())
  const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const dayIndex = Math.round((todayMidnight - startMidnight) / 86400000) + 1
  return dayIndex >= 1 && dayIndex <= days.length ? dayIndex : null
}

export const days = [
  {
    n: 1, date: 'Fri · Jul 17', dow: 'Friday', region: 'Niseko',
    title: 'Land CTS → Niseko',
    tagline: 'Overnight flight lands at 7:50am. Settle into the grounds; Mt. Yotei at dusk.',
    hotel: 'Park Hyatt Niseko Hanazono',
    activities: [
      { time: '7:50a',  title: 'Land at New Chitose (CTS)', icon: 'plane',    note: 'After two connections via SFO and HND. ANA arrives 7:50am.' },
      { time: '8:00a',  title: 'AVIS rental car pickup',     icon: 'car',      note: 'Pre-booked via Klook · pay at counter. Visit the Avis Budget counter on the 1st floor of the arrival terminal; shuttle bus (~15 min) runs to the off-airport location.' },
      { time: '10:30a', title: 'Arrive Park Hyatt Hanazono', icon: 'bed',      note: '~2 hr drive via Route 276 over Nakayama Pass. Early; hotel will store bags.' },
      { time: '11:00a', title: 'Walk the grounds, late brunch', icon: 'utensils', note: 'Mt. Yotei views from the terrace; hotel will store bags before check-in.' },
      { time: '7:00p',  title: 'Dinner at Park Hyatt',       icon: 'utensils', note: 'French, kaiseki, or teppanyaki in-hotel. Ease into the trip.' },
      { time: 'dusk',   title: 'Watch the sunset',           icon: 'camera',   note: 'Long summer sunset over Mt. Yotei from the hotel terrace.' }
    ],
    flag: { tone: 'indigo', label: 'Arrival — keep afternoon loose' }
  },
  {
    n: 2, date: 'Sat · Jul 18', dow: 'Saturday', region: 'Niseko',
    title: 'E-bike + Zipflight + Mountain Lights',
    tagline: 'Farmland ride and a picnic, the Hanazono zipline, then the art-installation walk after dark.',
    hotel: 'Park Hyatt Niseko Hanazono',
    activities: [
      { time: '7:30a',  title: 'Breakfast at hotel',           icon: 'utensils', note: 'Sashimi station, noodles, grilled salmon, eggs to order.' },
      { time: '10:00a', title: 'E-bike toward Kutchan town + picnic', icon: 'mountain', note: 'Rent at Niseko Sports Hanazono 308 Store · 4 min walk from hotel · same-day rental available. Flat farmland roads, unobstructed Mt. Yotei views. Pack a small picnic.' },
      { time: '2:00p',  title: 'Hanazono Zipflight',           icon: 'sparkles', note: 'Walk in or book up to 1 day ahead. hanazononiseko.com/en/summer/activities/zipline#booking' },
      { time: '6:30p',  title: 'Dinner in Hirafu Village',     icon: 'utensils', note: '~15 min drive. Izakaya, ramen, pizza all walkable. Suggestions: Otsukisama & Bar Moon, Ebisutei, Rin.' },
      { time: 'night',  title: 'Mountain Lights art installation', icon: 'star', note: 'After-dark illuminated art walk on the mountain.' }
    ],
    flag: { tone: 'moss', label: 'Zipflight — walk in or book 1 day ahead' }
  },
  {
    n: 3, date: 'Sun · Jul 19', dow: 'Sunday', region: 'Cape Kamui → Otaru',
    title: 'Shakotan Blue + Uni + Otaru',
    tagline: 'Cliffside walk above Japan\'s most vivid cobalt water; peak-season uni for lunch.',
    hotel: 'OMO5 Otaru by Hoshino Resorts',
    activities: [
      { time: '8:30a',  title: 'Breakfast at hotel',           icon: 'utensils', note: 'Last Park Hyatt breakfast before the coast drive.' },
      { time: '9:00a',  title: 'Checkout Park Hyatt',          icon: 'bed',      note: '' },
      { time: '9:30a',  title: 'Drive to Cape Kamui',          icon: 'car',      note: '~1.5–2 hrs via coastal Route 229.' },
      { time: '11:30a', title: 'Cape Kamui cliffside walk',    icon: 'mountain', note: '20-min narrow path · 80m sheer cliffs · Shakotan Blue water · sea stacks.' },
      { time: '1:00p',  title: 'Uni lunch at Shakotan port',   icon: 'utensils', note: 'July peak bafun uni. Restaurant list: kanko-shakotan.jp/en/food' },
      { time: '2:30p',  title: 'Drive to Otaru',               icon: 'car',      note: '~1.5 hrs. Arrive mid-afternoon.' },
      { time: '4:00p',  title: 'Check in OMO5 Otaru',          icon: 'bed',      note: 'Superior King near the canal.' },
      { time: '5:30p',  title: 'Otaru canal at golden hour',   icon: 'camera',   note: 'Long summer light on the warehouses.' },
      { time: '7:30p',  title: 'Stumble into a place for dinner', icon: 'utensils', note: 'Canal-side sushi or izakaya — no plan needed.' }
    ],
    flag: { tone: 'ember', label: '★★ Shakotan uni peak season' }
  },
  {
    n: 4, date: 'Mon · Jul 20', dow: 'Monday', region: 'Otaru',
    title: 'Glass + Snoopy + Music Boxes',
    tagline: 'Meiji-era glasswork, a dedicated Snoopy shop, and the 1902 music-box museum.',
    hotel: 'OMO5 Otaru by Hoshino Resorts',
    activities: [
      { time: '9:00a',  title: 'Otaru Taishou Glass Museum workshop', icon: 'sparkles', note: 'Walk-in · guests seen same-day in arrival order · open 9am–7pm · get there when doors open. Make your own piece. otaruglass.com' },
      { time: '10:30a', title: 'Coffee at Kitaichi Glass café',  icon: 'utensils', note: '167 oil lamps in the café · open 9am–5:30pm.' },
      { time: '11:30a', title: 'Snoopy Village — Canal Plaza 3F', icon: 'gift',    note: 'One of few Snoopy Town Shop locations in Japan.' },
      { time: '12:30p', title: 'Kaisen-don lunch',              icon: 'utensils',  note: 'Canal-side; peak uni + ikura season. Options: Yoichiya Uni Specialty, Yoshi, Sankaku Tei.' },
      { time: '2:00p',  title: 'Otaru Music Box Museum (Orgel-do)', icon: 'landmark', note: '1902 building · hundreds of music boxes.' },
      { time: '3:00p',  title: 'Kitaichi Glass Building No. 3',  icon: 'sparkles', note: 'Historic warehouse of glassware · good afternoon light.' },
      { time: '4:00p',  title: 'Otaru Milk Plant',              icon: 'sparkles', note: 'Popular spot for milk ice cream.' },
      { time: '4:30p',  title: 'Stamp stop — Otaru Station + Canal info', icon: 'ticket', note: '📮 Eki-stamp at みどりの窓口 · canal tourist info stamp.' },
      { time: '7:30p',  title: 'Dinner & dessert — canal-side izakaya', icon: 'utensils', note: '' }
    ],
    flag: { tone: 'indigo', label: 'Glass workshop — walk-in, arrive at 9am open' }
  },
  {
    n: 5, date: 'Tue · Jul 21', dow: 'Tuesday', region: 'Otaru → Sapporo',
    title: 'Transfer to Sapporo',
    tagline: 'Short 45-min transfer. Long afternoon and evening to settle into the city.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '12:30p', title: 'Drive Otaru → Sapporo',         icon: 'car',      note: '~45 min via Route 5. Shortest transfer of the trip.' },
      { time: '2:00p',  title: 'Check in Hotel Sosei — MGallery', icon: 'bed',    note: '1 King · 4 nights.' },
      { time: '3:00p',  title: 'Odori Park stroll',             icon: 'flower',   note: 'Long city-center greenbelt; 15 min walk from the hotel.' },
      { time: '4:00p',  title: 'TV Tower exterior / Susukino',  icon: 'landmark', note: 'Don\'t bother with the TV Tower observation deck — Mt. Moiwa is better.' },
      { time: '6:30p',  title: 'Dinner — stumble upon a place', icon: 'utensils', note: 'Ease in — ramen and soup curry days ahead.' }
    ]
  },
  {
    n: 6, date: 'Wed · Jul 22', dow: 'Wednesday', region: 'Sapporo',
    title: 'Chocolate + Ghibli + Tanuki Koji',
    tagline: 'ROYCE\' Cacao Town, character shops along Tanuki Koji, and a booked Italian dinner.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '11:00a', title: 'ROYCE\' Cacao & Chocolate Town', icon: 'gift',     note: '✅ Booked 11:00am · ~24 min drive · factory observation · exclusive products only here.' },
      { time: '2:30p',  title: 'Snoopy Town Shop',               icon: 'gift',     note: 'Central Sapporo character shop · same street as the Ghibli store.' },
      { time: '3:30p',  title: 'Ghibli Store',                   icon: 'gift',     note: 'Official Ghibli goods · same street as Tanuki Koji.' },
      { time: '4:30p',  title: 'Tanuki Koji arcade',            icon: 'map',      note: '7-block covered shopping street · 9 min walk from Odori Park · close to the Teatro di Massa reservation.' },
      { time: '6:00p',  title: 'Teatro di Massa — Italian',      icon: 'utensils', note: '✅ Booked 6:00pm. Italian dinner in the city.' }
    ],
    flag: { tone: 'moss', label: '✅ Teatro di Massa booked' }
  },
  {
    n: 7, date: 'Thu · Jul 23', dow: 'Thursday', region: 'Sapporo',
    title: 'Hill of the Buddha + Art Park',
    tagline: 'Tadao Ando\'s Buddha through July lavender, outdoor sculpture, and a booked yakitori dinner.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '9:30a',  title: 'Hill of the Buddha (Tadao Ando)', icon: 'landmark', note: 'Makomanai Takino · ~30 min drive · ¥500 · 9a–3p last entry · 150,000 lavender in July bloom.' },
      { time: '11:30a', title: 'Sapporo Art Park',               icon: 'landmark', note: 'Large outdoor sculpture collection; outdoor access free.' },
      { time: '4:30p',  title: 'Hokkaido University Botanical Garden', icon: 'flower', note: 'Quiet city-center green · small Ainu collection · 11 min walk from the dinner reservation.' },
      { time: '6:00p',  title: 'Mitsuki — yakitori',            icon: 'utensils', note: '✅ Booked 6:00pm. Marked as "GELATERIA La Giostra" on Google Maps — Mitsuki is next door with white curtains.' }
    ],
    flag: { tone: 'moss', label: '✅ Mitsuki booked · Hill of the Buddha closes 3pm' }
  },
  {
    n: 8, date: 'Fri · Jul 24', dow: 'Friday', region: 'Sapporo',
    title: 'Beer Garden + Genghis Khan',
    tagline: 'Odori Beer Garden opening day and the Beer Museum, capped with zangi, Genghis Khan, and grilled corn.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '9:30a',  title: 'Mount Moiwa ropeway',            icon: 'mountain', note: 'Whichever morning is clearer — city panorama.' },
      { time: '11:30a', title: 'Chitosetsuru Sake Museum',       icon: 'landmark', note: 'Free tastings of local Hokkaido sake · flexible — fit it in any day we have time.' },
      { time: '1:00p',  title: 'Shiroi Koibito Park',            icon: 'sparkles', note: 'Optional / maybe · ~18 min from hotel · biscuit factory + gardens.' },
      { time: '3:00p',  title: 'Odori Beer Garden — opening day', icon: 'beer',    note: 'Opens today · 9,000+ seats across 5 blocks · Sapporo, Kirin, Asahi, German Village.' },
      { time: '4:30p',  title: 'Zangi + Genghis Khan + grilled corn', icon: 'utensils', note: 'Festival food, slow pace, long afternoon into evening.' },
      { time: '6:30p',  title: 'Sapporo Beer Museum',            icon: 'landmark', note: 'Beer Garden and Museum share the Sapporo Factory grounds.' }
    ],
    flag: { tone: 'ember', label: '★★ Odori Beer Garden — opening day' }
  },
  {
    n: 9, date: 'Sat · Jul 25', dow: 'Saturday', region: 'Sapporo → Furano',
    title: 'Arrive Furano + Ningle Terrace',
    tagline: 'Transfer to the lavender valley; 15 artisan log cabins in the birch forest after dark.',
    hotel: 'Airbnb Shimogoryo (Furano)',
    activities: [
      { time: '9:00a',  title: 'Checkout · drive Sapporo → Furano', icon: 'car', note: '~2 hrs via Route 12/38.' },
      { time: '12:00p', title: 'Drop bags at Airbnb',             icon: 'bed',      note: 'Shimogoryo · 3 nights · shared with 2 others.' },
      { time: '1:00p',  title: 'Find somewhere to eat',           icon: 'utensils', note: 'Near the stay: Kitchen Farm F\'s Gate, Kitchen Café & Pizza, Soba-Ya Jurokumon, Kiyomizu, El Asador.' },
      { time: '6:30p',  title: 'Ningle Terrace at night',         icon: 'landmark', note: '5 min from the Airbnb · 15 artisan log cabins through birch forest · fairy lights after dark · lights on until 8:45pm.' }
    ],
    flag: { tone: 'indigo', label: 'Ningle Terrace lights on until 8:45pm' }
  },
  {
    n: 10, date: 'Sun · Jul 26', dow: 'Sunday', region: 'Furano',
    title: 'Farm Tomita + Shikisai no Oka',
    tagline: 'Lavender at peak in the morning; 30+ flower varieties and alpacas at Shikisai.',
    hotel: 'Airbnb Shimogoryo (Furano)',
    activities: [
      { time: '8:30a',  title: 'Farm Tomita in the morning',      icon: 'flower',   note: '★★ Opens 8:30am · ~20 min from the stay · lavender peak, plus poppies, marigolds, sunflowers · free entry.' },
      { time: '10:00a', title: 'Lavender soft serve',             icon: 'sparkles', note: 'At Farm Tomita.' },
      { time: '12:00p', title: 'Furano lunch',                    icon: 'utensils', note: 'Tomita Melon House or Furano Wine House.' },
      { time: '2:00p',  title: 'Shikisai no Oka — Hill of Colors', icon: 'flower',  note: '★ ~20 min from Farm Tomita · 30+ flower varieties in horizontal rows · panoramic rolling hills · Alpaca Farm on site.' },
      { time: '7:00p',  title: 'Furano dinner + melon dessert',   icon: 'utensils', note: 'Near Shikisai: Mugiiro no Oka udon, Maruhachi Satō Shōten, Yamaichi. Toward the Airbnb: Nepal Dining, Domaine Raison, Kaiten Sushi Topical.' }
    ],
    flag: { tone: 'ember', label: '★★ Lavender peak' }
  },
  {
    n: 11, date: 'Mon · Jul 27', dow: 'Monday', region: 'Biei',
    title: 'Patchwork Road + Blue Pond',
    tagline: 'Quilt-like crop hills, a hilltop observatory, and an accidental turquoise pond.',
    hotel: 'Airbnb Shimogoryo (Furano)',
    activities: [
      { time: '9:00a',  title: 'Biei Patchwork Road — self-drive', icon: 'car',    note: '★ Rolling hills with differentiated crop fields · ~45 min drive from the Airbnb.' },
      { time: '11:30a', title: 'Hokusei-no-oka Observatory Park', icon: 'flower',   note: 'Flower fields around a pyramid/triangle structure with panoramic views.' },
      { time: '12:30p', title: 'Lunch in Biei',                   icon: 'utensils', note: 'Plenty of options between Patchwork Road and the Blue Pond.' },
      { time: '2:30p',  title: 'Shirogane Blue Pond',             icon: 'waves',    note: '★★ ~25 min from Patchwork Road · vivid turquoise water · accidentally created by flood-control works · best in afternoon light.' },
      { time: '4:00p',  title: 'Blue Pond Café & Gifts',          icon: 'utensils', note: 'Popular for blue drinks and blue foods.' },
      { time: '7:30p',  title: 'Final Furano izakaya',            icon: 'utensils', note: 'Last night in the lavender valley.' }
    ]
  },
  {
    n: 12, date: 'Tue · Jul 28', dow: 'Tuesday', region: 'Lake Toya',
    title: 'Hikari no uta + Mt. Usu + Fireworks',
    tagline: 'Check into private open-air baths; fire mountain in the afternoon; 450 fireworks at 8:45pm.',
    hotel: 'Hikari no uta (Tsuruga Resort)',
    activities: [
      { time: '10:00a', title: 'Checkout · Furano → Lake Toya',   icon: 'car',      note: '~3 hr drive via Route 38/453. Final melon stop at roadside stand.' },
      { time: '1:00p',  title: 'Lunch on the road',               icon: 'utensils', note: 'Roadside melon + bento.' },
      { time: '2:30p',  title: 'Check in Hikari no uta',          icon: 'bed',      note: '★★ 48 rooms all with private open-air baths · 2 nights.' },
      { time: '3:30p',  title: 'Mt. Usu Ropeway',                 icon: 'mountain', note: '★★ Active volcano · last erupted 2000 · views of Lake Toya + Showa Shinzan lava dome.' },
      { time: '6:30p',  title: 'Kaiseki dinner in-resort',        icon: 'utensils', note: 'Hikari no uta offers French, kaiseki, or teppanyaki nightly — pick kaiseki tonight.' },
      { time: '8:45p',  title: 'Lake Toya fireworks (~20 min)',    icon: 'sparkles', note: '★★ ~450 fireworks · from private terrace · schedule at laketoya.com/event.' },
      { time: '9:30p',  title: 'Private open-air bath',            icon: 'hotSpring', note: '' }
    ],
    flag: { tone: 'ember', label: '★★ Fireworks from room terrace' }
  },
  {
    n: 13, date: 'Wed · Jul 29', dow: 'Wednesday', region: 'Lake Toya',
    title: 'Island Cruise + Sculpture Park',
    tagline: 'Nakajima Island deer; 58 outdoor sculptures along the lakeshore; fireworks again at 8:45pm.',
    hotel: 'Hikari no uta (Tsuruga Resort)',
    activities: [
      { time: '8:00a',  title: 'Breakfast + private bath',         icon: 'hotSpring', note: 'Slow start.' },
      { time: '10:00a', title: 'Nakajima Island boat cruise',     icon: 'waves',    note: '★ 4 sub-islands · sika deer roam freely · morning cruises 8:30am–4:30pm every 30 min · a night fireworks cruise also runs. toyakokisen.com/en' },
      { time: '12:30p', title: 'Lakeside lunch',                  icon: 'utensils', note: '' },
      { time: '2:00p',  title: 'Lake Toya Sculpture Park — 4km walk', icon: 'map',   note: '58 outdoor sculptures along the lake path.' },
      { time: '4:00p',  title: 'Glass café gla gla workshop',      icon: 'sparkles', note: 'Glass-making workshop by the lake. Optional.' },
      { time: '6:30p',  title: 'Teppanyaki dinner in-resort',      icon: 'utensils', note: 'Switch cuisine tonight — all Hokkaido ingredients.' },
      { time: '8:45p',  title: 'Lake Toya fireworks — different program', icon: 'sparkles', note: '★★ Night 2.' }
    ]
  },
  {
    n: 14, date: 'Thu · Jul 30', dow: 'Thursday', region: 'Noboribetsu',
    title: 'Hell Valley + Demon Fireworks',
    tagline: 'Active geothermal boardwalk; farm-to-table dinner; Oni-hanabi at 8pm from the crater rim.',
    hotel: 'Bourou Noguchi Noboribetsu',
    activities: [
      { time: '10:30a', title: 'Late checkout Hikari no uta',     icon: 'hotSpring', note: 'Final private open-air bath.' },
      { time: '12:00p', title: 'Drive to Noboribetsu',             icon: 'car',      note: '~50 min via Route 37.' },
      { time: '1:30p',  title: 'Jigokudani Hell Valley boardwalk', icon: 'mountain', note: '★ Free · 5 min drive from the hotel · active geothermal landscape · Oyunuma Pond (milky blue sulfuric lake).' },
      { time: '3:00p',  title: 'Check in Bourou Noguchi',          icon: 'bed',      note: '✅ 3pm check-in · Junior Suite 50m² · private hot-spring bath · pre-paid.' },
      { time: '4:00p',  title: 'Oyunumagawa natural footbath',     icon: 'hotSpring', note: 'Free · 5 min drive from Hell Valley · on the river fed by geothermal springs · bring a towel.' },
      { time: '6:30p',  title: 'Dinner — Amano Family Farm',       icon: 'utensils', note: '天野農場 · farm-to-table, local Hokkaido produce ★. Also nearby: Cowbell Restaurant.' },
      { time: '8:00p',  title: 'Demon Fireworks (Oni-hanabi)',     icon: 'sparkles', note: '✓✓ ★★ Thu/Fri only · from the Jigokudani rim · taiko drums.' },
      { time: 'late',   title: 'Private onsen under the stars',    icon: 'hotSpring', note: 'Direct Noboribetsu spring water.' }
    ],
    flag: { tone: 'ember', label: '✓✓ ★★ Oni-hanabi catchable Thursday' }
  },
  {
    n: 15, date: 'Fri · Jul 31', dow: 'Friday', region: 'CTS → Home',
    title: 'Ainu Museum + Fly Home',
    tagline: 'Upopoy morning, optional Shikotsu detour, then CTS → HND → LAX → home.',
    hotel: 'Overnight flights',
    activities: [
      { time: '9:00a',  title: 'Upopoy National Ainu Museum',     icon: 'landmark', note: '★★ 15 min from Bourou Noguchi · ¥1,200 · advance reservation · Japan\'s first national Ainu museum.' },
      { time: '11:00a', title: 'Checkout Bourou Noguchi',          icon: 'bed',      note: '' },
      { time: '12:30p', title: 'Optional detour: Lake Shikotsu',   icon: 'waves',    note: '~45 min from Noboribetsu · kayak, lakeshore walk, Marukoma boat-access bath.' },
      { time: '2:30p',  title: 'Stamp — Shikotsu-Toya NP',         icon: 'ticket',   note: '📮 National Park stamp.' },
      { time: '5:30p',  title: 'AVIS car return at CTS',           icon: 'car',      note: 'Drop by 6:00pm.' },
      { time: '6:30p',  title: 'CTS airport dinner',               icon: 'utensils', note: 'Lounge unavailable at the 21:40 departure — plan dinner pre-gate.' },
      { time: '9:40p',  title: 'ANA CTS → HND',                    icon: 'plane',    note: 'Arr 23:30 Terminal D.' },
      { time: '12:30a', title: 'ANA HND → LAX',                    icon: 'plane',    note: '⚠️ 60-min HND connection · single itinerary · go straight to international terminal.' },
      { time: '10:59p', title: 'United LAX → Home (Aug 1)',        icon: 'plane',    note: 'Arr 00:21 Aug 2.' }
    ],
    flag: { tone: 'indigo', label: '⚠️ 60-min Haneda connection' }
  }
]
