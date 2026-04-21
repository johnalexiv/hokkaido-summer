const base = import.meta.env.BASE_URL

export const images = {
  niseko:       `${base}images/niseko.jpg`,
  otaru:        `${base}images/otaru.jpg`,
  sapporo:      `${base}images/sapporo.jpg`,
  furano:       `${base}images/furano.jpg`,
  lakeToya:     `${base}images/lake-toya.jpg`,
  noboribetsu:  `${base}images/noboribetsu.jpg`,
  capeKamui:    `${base}images/cape-kamui.jpg`,
  bieiBluePond: `${base}images/biei-blue-pond.jpg`,
  lakeShikotsu: `${base}images/lake-shikotsu.jpg`
}

export const dayImages = {
  1: images.niseko,
  2: images.niseko,
  3: images.capeKamui,
  4: images.otaru,
  5: images.sapporo,
  6: images.sapporo,
  7: images.sapporo,
  8: images.sapporo,
  9: images.furano,
  10: images.furano,
  11: images.bieiBluePond,
  12: images.lakeToya,
  13: images.lakeToya,
  14: images.noboribetsu,
  15: images.lakeShikotsu
}
