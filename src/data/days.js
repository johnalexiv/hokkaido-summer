// Activity `icon` maps to a Lucide component in App.jsx.
// Options: plane, car, bed, utensils, mountain, camera, beer, flower, hotSpring,
//          clock, star, waves, landmark, gift, ticket, map, sunrise, sparkles

export const days = [
  {
    n: 1, date: 'Fri · Jul 17', dow: 'Friday', region: 'Niseko',
    title: 'Land CTS → Niseko',
    tagline: 'Overnight flight lands at 7:50am. Easy afternoon; Mt. Yotei at dusk.',
    hotel: 'Park Hyatt Niseko Hanazono',
    activities: [
      { time: '7:50a',  title: 'Land at New Chitose (CTS)', icon: 'plane',    note: 'After two connections via SFO and HND. ANA arrives 7:50am.' },
      { time: '8:00a',  title: 'AVIS rental car pickup',     icon: 'car',      note: 'Pre-booked · pay at counter.' },
      { time: '10:30a', title: 'Arrive Park Hyatt Hanazono', icon: 'bed',      note: '~2 hr drive via Route 276 over Nakayama Pass. Early; hotel will store bags.' },
      { time: '11:00a', title: 'Explore grounds, late brunch', icon: 'utensils', note: 'Mt. Yotei views from the terrace; pool/spa available pre-check-in.' },
      { time: '1–4p',   title: 'E-bike toward Kutchan town', icon: 'mountain', note: 'Flat farmland roads, unobstructed Mt. Yotei views. Skip if too tired.' },
      { time: '4–5p',   title: 'Optional: Zipline MACH3',    icon: 'sparkles', note: '1.7km, up to 110 km/h, 3-min ride. Book at concierge.' },
      { time: '7:00p',  title: 'Dinner in Hirafu Village',   icon: 'utensils', note: '~15 min drive. Izakaya, ramen, pizza all walkable.' },
      { time: 'dusk',   title: 'Mt. Yotei from hotel terrace', icon: 'camera', note: 'Long summer sunset — evening light is the best of the day.' }
    ],
    flag: { tone: 'indigo', label: 'Arrival — keep afternoon loose' }
  },
  {
    n: 2, date: 'Sat · Jul 18', dow: 'Saturday', region: 'Niseko',
    title: 'Niseko Full Day — Rafting',
    tagline: 'Shiribetsu River rafting in the morning; hotel dinner to close the Niseko leg.',
    hotel: 'Park Hyatt Niseko Hanazono',
    activities: [
      { time: '7:30a',  title: 'Breakfast at hotel',           icon: 'utensils', note: 'Sashimi station, noodles, grilled salmon, eggs to order.' },
      { time: '8:30a',  title: 'Drive to rafting operator',   icon: 'car',      note: '~15 min drive. Pack dry bag for phone/wallet.' },
      { time: '9a–12p', title: 'Shiribetsu River rafting',    icon: 'waves',    note: '¥6,500/pp · ~3 hrs · wetsuits provided · Niseko\'s top summer activity.' },
      { time: '1–4p',   title: 'Hotel pool / Twin Peaks Bike Park / Zipline', icon: 'mountain', note: 'Or hotel spa and terrace — your call.' },
      { time: '4–6p',   title: 'Spa, onsen, or terrace',       icon: 'hotSpring', note: 'Last afternoon at Park Hyatt — slow it down.' },
      { time: '7:00p',  title: 'Park Hyatt dinner — teppanyaki', icon: 'utensils', note: 'French, kaiseki, or teppanyaki. Reserve at check-in.' },
      { time: 'late',   title: 'Night view of Mt. Yotei',      icon: 'camera',    note: 'Final night in Niseko.' }
    ],
    flag: { tone: 'moss', label: 'Book rafting morning slot in advance' }
  },
  {
    n: 3, date: 'Sun · Jul 19', dow: 'Sunday', region: 'Cape Kamui → Otaru',
    title: 'Shakotan Blue + Uni + Otaru',
    tagline: 'Cliffside walk above Japan\'s most vivid cobalt water; peak-season uni for lunch.',
    hotel: 'OMO5 Otaru by Hoshino Resorts',
    activities: [
      { time: '9:00a',  title: 'Checkout Park Hyatt',          icon: 'bed',      note: '' },
      { time: '9:30a',  title: 'Drive to Cape Kamui',          icon: 'car',      note: '~1.5–2 hrs via coastal Route 229.' },
      { time: '11:30a', title: 'Cape Kamui cliffside walk',    icon: 'mountain', note: '20-min narrow path · 80m sheer cliffs · Shakotan Blue water · sea stacks.' },
      { time: '1:00p',  title: 'Uni lunch at Shakotan port',   icon: 'utensils', note: 'July peak bafun uni — same quality as Rishiri without the flight.' },
      { time: '2:30p',  title: 'Drive to Otaru',               icon: 'car',      note: '~1.5 hrs. Arrive mid-afternoon.' },
      { time: '4:00p',  title: 'Check in OMO5 Otaru',          icon: 'bed',      note: 'Superior King near the canal.' },
      { time: '5:30p',  title: 'Otaru canal at golden hour',   icon: 'camera',   note: 'Long summer light on the warehouses.' },
      { time: '6:30p',  title: 'Kita no Aisu soft serve',      icon: 'sparkles', note: 'Open since 1978.' },
      { time: '7:30p',  title: 'Canal-side sushi or izakaya',  icon: 'utensils', note: '' }
    ],
    flag: { tone: 'ember', label: '★★ Shakotan uni peak season' }
  },
  {
    n: 4, date: 'Mon · Jul 20', dow: 'Monday', region: 'Otaru',
    title: 'Glass + Snoopy + Music Boxes',
    tagline: 'Meiji-era glasswork, a dedicated Snoopy shop, and the 1902 music-box museum.',
    hotel: 'OMO5 Otaru by Hoshino Resorts',
    activities: [
      { time: '9:30a',  title: 'Otaru Taishou Glass Museum workshop', icon: 'sparkles', note: '1-1-8 Hanazono · book 1–2 mo ahead · 60–90 min · make your own piece.' },
      { time: '11:30a', title: 'Snoopy Village — Canal Plaza 3F', icon: 'gift',    note: 'One of few Snoopy Town Shop locations in Japan.' },
      { time: '12:30p', title: 'Kaisen-don lunch',              icon: 'utensils',  note: 'Canal-side; peak uni + ikura season.' },
      { time: '2:00p',  title: 'Otaru Music Box Museum (Orgel-do)', icon: 'landmark', note: '1902 building · hundreds of music boxes.' },
      { time: '3:00p',  title: 'Kitaichi Glass Building No. 3', icon: 'camera',   note: '167 oil lamps in the café — good light around 3–4pm.' },
      { time: '4:30p',  title: 'Stamp stop — Otaru Station + Canal info', icon: 'ticket', note: '📮 Eki-stamp at みどりの窓口 · canal tourist info stamp.' },
      { time: '6:00p',  title: 'Canal walk at golden hour',     icon: 'camera',   note: '' },
      { time: '7:30p',  title: 'Canal-side izakaya dinner',     icon: 'utensils', note: '' }
    ],
    flag: { tone: 'indigo', label: 'Workshop — book 1–2 months ahead' }
  },
  {
    n: 5, date: 'Tue · Jul 21', dow: 'Tuesday', region: 'Otaru → Sapporo',
    title: 'Transfer to Sapporo',
    tagline: 'Short 40-min transfer. Long afternoon and evening to settle into the city.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '10:00a', title: 'Coffee at Kitaichi Glass café', icon: 'utensils', note: 'Morning light through the oil lamps.' },
      { time: '11:00a', title: 'Final Otaru canal walk',        icon: 'camera',   note: '' },
      { time: '12:30p', title: 'Drive Otaru → Sapporo',         icon: 'car',      note: '~40 min via Route 5. Shortest transfer of the trip.' },
      { time: '2:00p',  title: 'Check in Hotel Sosei — MGallery', icon: 'bed',    note: '1 King · 4 nights.' },
      { time: '3:00p',  title: 'Odori Park stroll',             icon: 'flower',   note: 'Long city-center greenbelt; pre-beer-garden calm.' },
      { time: '4:00p',  title: 'TV Tower exterior / Susukino',  icon: 'landmark', note: 'Don\'t bother with the TV Tower observation deck — Mt. Moiwa is better.' },
      { time: '6:00p',  title: 'Tanuki Koji arcade',            icon: 'map',      note: '7-block covered shopping street; all-weather.' },
      { time: '7:30p',  title: 'Light dinner',                   icon: 'utensils', note: 'Ease in — ramen and soup curry days ahead.' }
    ]
  },
  {
    n: 6, date: 'Wed · Jul 22', dow: 'Wednesday', region: 'Sapporo',
    title: 'Hill of the Buddha + Moerenuma + Ramen',
    tagline: 'Tadao Ando\'s 13.5m Buddha through 150,000 lavender plants. Noguchi\'s landscape park.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '9:00a',  title: 'Drive to Makomanai Takino',      icon: 'car',      note: '~15 min south of central Sapporo.' },
      { time: '9:30a',  title: 'Hill of the Buddha (Tadao Ando)', icon: 'landmark', note: '¥500 · 9a–3p last entry · 150,000 lavender in July bloom around the mound.' },
      { time: '11:00a', title: 'Moerenuma Park (Isamu Noguchi)',  icon: 'mountain', note: 'Glass pyramid · Play Mountain · Sea Fountain · 30 min from Hill of the Buddha.' },
      { time: '1:00p',  title: 'Nijo Market kaisen-don lunch',    icon: 'utensils', note: 'Peak sweet shrimp + uni in July.' },
      { time: '3:00p',  title: 'Sapporo Art Park',                icon: 'landmark', note: 'Large outdoor sculpture collection; outdoor access free.' },
      { time: '6:00p',  title: 'Ramen Yokocho — miso ramen',      icon: 'utensils', note: 'Narrow postwar alley · Sapporo-style miso with corn + butter.' },
      { time: '8:00p',  title: 'Stamp stop — Sapporo Station',    icon: 'ticket',   note: '📮 Eki-stamp at みどりの窓口.' }
    ],
    flag: { tone: 'moss', label: 'Hill of the Buddha closes 3pm' }
  },
  {
    n: 7, date: 'Thu · Jul 23', dow: 'Thursday', region: 'Sapporo',
    title: 'Beer Garden Opening Day',
    tagline: 'Odori Park Summer Festival — opening day of Japan\'s largest outdoor beer event.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '9:30a',  title: 'Mount Moiwa ropeway',            icon: 'mountain', note: 'Panoramic city views · quieter than the TV Tower.' },
      { time: '11:30a', title: 'Hokkaido University stroll',     icon: 'flower',   note: 'Large elm-lined paths · free. Ginkgo row is for autumn — plenty of green in July.' },
      { time: '1:00p',  title: 'Light lunch near Odori',         icon: 'utensils', note: 'Save the appetite.' },
      { time: '3:00p',  title: 'Sapporo Odori Beer Garden — OPENING DAY', icon: 'beer',  note: 'Opens Jul 23 · 9,000+ seats across 5 blocks · Sapporo, Kirin, Asahi, German Village.' },
      { time: '4:30p',  title: 'Zangi + Genghis Khan + grilled corn', icon: 'utensils', note: 'Festival food, slow pace, long afternoon into evening.' },
      { time: '8:00p',  title: 'Susukino stroll back to hotel',   icon: 'map',     note: 'No driving tonight.' }
    ],
    flag: { tone: 'ember', label: '✓✓ ★★ Opening day' }
  },
  {
    n: 8, date: 'Fri · Jul 24', dow: 'Friday', region: 'Sapporo',
    title: 'Chocolate + Sake + Soup Curry',
    tagline: 'Shiroi Koibito factory, ROYCE\' Cacao Town, and the definitive Sapporo soup curry.',
    hotel: 'Hotel Sosei Sapporo — MGallery',
    activities: [
      { time: '9:30a',  title: 'Shiroi Koibito Park',            icon: 'sparkles', note: '¥800 · biscuit factory tour + cookie workshop · English-friendly · gardens + pond.' },
      { time: '12:00p', title: 'ROYCE\' Cacao & Chocolate Town', icon: 'gift',     note: 'Reserve ahead · factory observation · exclusive products only here.' },
      { time: '2:00p',  title: 'Chitosetsuru Sake Museum',       icon: 'landmark', note: 'Free tastings of local Hokkaido sake.' },
      { time: '3:30p',  title: 'Hokkaido University Botanical Garden', icon: 'flower', note: 'Quiet city-center green · small Ainu collection.' },
      { time: '6:30p',  title: 'Soup curry dinner — Garaku',     icon: 'utensils', note: 'Spice-forward thin broth · chicken leg classic. Aiiro is also top-tier.' },
      { time: '8:30p',  title: 'Stamp stop — Sapporo Beer Museum', icon: 'ticket', note: '📮 Free · quick stop.' }
    ]
  },
  {
    n: 9, date: 'Sat · Jul 25', dow: 'Saturday', region: 'Sapporo → Furano',
    title: 'Lavender + Ningle Terrace',
    tagline: 'Farm Tomita at peak bloom; 15 artisan log cabins in the birch forest after dark.',
    hotel: 'Airbnb Shimogoryo (Furano)',
    activities: [
      { time: '9:00a',  title: 'Checkout · drive Sapporo → Furano', icon: 'car', note: '~2 hrs via Route 12/38.' },
      { time: '12:00p', title: 'Drop bags at Airbnb',             icon: 'bed',      note: 'Shimogoryo · 3 nights · shared with 2 others.' },
      { time: '1:30p',  title: 'Farm Tomita — afternoon',         icon: 'flower',   note: '★★ Peak lavender · also poppies, marigolds, sunflowers · free entry · less crowded than dawn.' },
      { time: '3:30p',  title: 'Lavender soft serve',             icon: 'sparkles', note: 'Farm Tomita gift shop.' },
      { time: '4:30p',  title: 'Stamp stop — Farm Tomita notebook', icon: 'ticket', note: '📮 Decades-old notebook stamp tradition · ask at gift shop.' },
      { time: '6:30p',  title: 'Ningle Terrace',                  icon: 'landmark', note: '15 artisan log cabins through birch forest · fairy lights after dark · open to 8:45pm.' },
      { time: '8:00p',  title: 'Furano izakaya dinner',           icon: 'utensils', note: 'Melon + Furano cheese for dessert.' }
    ],
    flag: { tone: 'ember', label: '★★ Lavender peak' }
  },
  {
    n: 10, date: 'Sun · Jul 26', dow: 'Sunday', region: 'Furano',
    title: 'Dawn Lavender + Shikisai no Oka',
    tagline: 'Be at Farm Tomita before the tour buses; 30+ flower varieties at Shikisai.',
    hotel: 'Airbnb Shimogoryo (Furano)',
    activities: [
      { time: '6:30a',  title: 'Farm Tomita at dawn',             icon: 'sunrise',  note: '★★ Best light, no buses · lavender peak.' },
      { time: '9:30a',  title: 'Lavender East (Kamifurano)',      icon: 'flower',   note: 'One of Japan\'s largest lavender fields · far less crowded than Tomita.' },
      { time: '12:00p', title: 'Furano lunch — melon + wheat',    icon: 'utensils', note: 'Tomita Melon House or Biei Wheat winery restaurant.' },
      { time: '2:00p',  title: 'Shikisai no Oka — Hill of Colors', icon: 'flower',  note: '★ 30+ flower varieties in horizontal rows · panoramic rolling hills.' },
      { time: '3:30p',  title: 'Stamp stop — Shikisai no Oka',    icon: 'ticket',   note: '📮 Attraction stamp.' },
      { time: '7:00p',  title: 'Furano izakaya + melon dessert',  icon: 'utensils', note: '' }
    ],
    flag: { tone: 'indigo', label: 'Hinode Park illumination missed (~Jul 12–21)' }
  },
  {
    n: 11, date: 'Mon · Jul 27', dow: 'Monday', region: 'Biei',
    title: 'Patchwork Road + Blue Pond',
    tagline: 'Quilt-like crop hills, lone trees made famous by 1970s ads, and an accidental turquoise pond.',
    hotel: 'Airbnb Shimogoryo (Furano)',
    activities: [
      { time: '9:00a',  title: 'Biei Patchwork Road — self-drive', icon: 'car',    note: '★ Rolling hills with differentiated crop fields.' },
      { time: '9:30a',  title: 'Ken and Mary Tree (ケンとメリーの木)', icon: 'camera', note: 'Lone poplar · made famous by a 1972 Nissan ad campaign.' },
      { time: '10:15a', title: 'Seven Stars Tree (セブンスターの木)', icon: 'camera', note: 'Isolated oak on a hillcrest.' },
      { time: '11:00a', title: 'Christmas Tree (クリスマスツリーの木)', icon: 'camera', note: 'Perfectly shaped spruce in open farmland.' },
      { time: '12:00p', title: 'Lunch at Biei',                   icon: 'utensils', note: 'Tomita Melon House or Biei Wheat winery.' },
      { time: '1:30p',  title: 'Stamp stop — Biei Station',       icon: 'ticket',   note: '📮 Eki-stamp at みどりの窓口.' },
      { time: '2:30p',  title: 'Shirogane Blue Pond',             icon: 'waves',    note: '★★ Vivid turquoise water · accidentally created by flood-control works · best in afternoon light.' },
      { time: '5:00p',  title: 'Furano Winery — free tasting',    icon: 'sparkles', note: 'Optional on the drive back.' },
      { time: '7:30p',  title: 'Final Furano izakaya',            icon: 'utensils', note: 'Last night in the lavender valley.' }
    ]
  },
  {
    n: 12, date: 'Tue · Jul 28', dow: 'Tuesday', region: 'Lake Toya',
    title: 'Hikari no uta + Mt. Usu + Fireworks',
    tagline: 'Check into private open-air baths; fire mountain in the afternoon; 450 fireworks at 8:45pm.',
    hotel: 'Hikari no uta (Tsuruga Resort)',
    activities: [
      { time: '10:00a', title: 'Checkout · Furano → Lake Toya',   icon: 'car',      note: '~2–2.5 hrs via Route 38/453. Final melon stop at roadside stand.' },
      { time: '1:00p',  title: 'Roadside melon + bento',          icon: 'utensils', note: '' },
      { time: '2:30p',  title: 'Check in Hikari no uta',          icon: 'bed',      note: '★★ 48 rooms all with private open-air baths · 2 nights.' },
      { time: '3:30p',  title: 'Mt. Usu Ropeway',                 icon: 'mountain', note: '★★ Active volcano · last erupted 2000 · views of Lake Toya + Showa Shinzan lava dome.' },
      { time: '6:30p',  title: 'Kaiseki dinner in-resort',        icon: 'utensils', note: 'Hikari no uta offers French, kaiseki, or teppanyaki nightly — pick kaiseki tonight.' },
      { time: '8:30p',  title: 'Stamp — Lake Toya visitor center', icon: 'ticket',  note: '📮 National Park stamp.' },
      { time: '8:45p',  title: 'Lake Toya fireworks (~20 min)',    icon: 'sparkles', note: '★★ ~450 fireworks · from private terrace.' },
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
      { time: '10:00a', title: 'Nakajima Island boat cruise',     icon: 'waves',    note: '★ 40-min round trip · 4 sub-islands · sika deer roam freely.' },
      { time: '12:30p', title: 'Lakeside lunch',                  icon: 'utensils', note: '' },
      { time: '2:00p',  title: 'Lake Toya Sculpture Park — 4km walk', icon: 'map',   note: '58 outdoor sculptures along the lake path.' },
      { time: '4:00p',  title: 'Glass crafting workshop',          icon: 'sparkles', note: 'At the lake activities center. Optional.' },
      { time: '6:30p',  title: 'Teppanyaki dinner in-resort',      icon: 'utensils', note: 'Switch cuisine tonight — all Hokkaido ingredients.' },
      { time: '8:45p',  title: 'Lake Toya fireworks — different program', icon: 'sparkles', note: '★★ Night 2.' }
    ]
  },
  {
    n: 14, date: 'Thu · Jul 30', dow: 'Thursday', region: 'Noboribetsu',
    title: 'Hell Valley + Demon Fireworks',
    tagline: 'Active geothermal boardwalk; farm-to-table dinner; Oni-hanabi at 8:30pm from the crater rim.',
    hotel: 'Bourou Noguchi Noboribetsu',
    activities: [
      { time: '10:30a', title: 'Late checkout Hikari no uta',     icon: 'hotSpring', note: 'Final private open-air bath.' },
      { time: '12:00p', title: 'Drive to Noboribetsu',             icon: 'car',      note: '~45 min via Route 37.' },
      { time: '1:30p',  title: 'Jigokudani Hell Valley boardwalk', icon: 'mountain', note: '★ Free · active geothermal landscape · Oyunuma Pond (milky blue sulfuric lake).' },
      { time: '3:00p',  title: 'Oyunumagawa natural footbath',     icon: 'hotSpring', note: 'Free · on the river fed by geothermal springs · bring a towel.' },
      { time: '4:30p',  title: 'Check in Bourou Noguchi',          icon: 'bed',      note: '✅ Junior Suite 50m² · private hot-spring bath · pre-paid.' },
      { time: '6:30p',  title: 'Amano Family Farm — farm-to-table dinner', icon: 'utensils', note: '天野農場 · local Hokkaido produce ★.' },
      { time: '8:30p',  title: 'Demon Fireworks (Oni-hanabi)',     icon: 'sparkles', note: '✓✓ ★★ Thu/Fri only · from the Jigokudani rim · taiko drums.' },
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
