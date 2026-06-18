const TCGS = [
  {
    id: "pokemon",
    name: "Pokémon TCG",
    tagline: "From Base Set to Surging Sparks",
    blurb: "Vintage WOTC singles, modern Scarlet & Violet boosters, graded slabs, Japanese promos, and sealed booster boxes — we keep the showcase stocked.",
    palette: { bg: "linear-gradient(160deg,#1a2b4a,#0a1226)", art: "linear-gradient(145deg,#ffd86b,#ff7a3d 60%,#c93a1f)", mono: "#fff8d6", badge: "linear-gradient(90deg,#ffb84d,#ff5e3a)", glyph: "P" },
    cards: [
      { title: "Charizard EX — Surging Sparks", sub: "Ultra Rare · NM", badge: "RAW", price: "189" },
      { title: "Mew V — Holo Foil", sub: "Vintage · LP", badge: "GRADED 9", price: "420" },
      { title: "Pikachu Illustrator Promo", sub: "Anniversary", badge: "SEALED", price: "75" },
      { title: "Booster Box — Paradox Rift", sub: "36 packs", badge: "BOX", price: "139" },
      { title: "Lugia Neo Genesis 1st Ed", sub: "Vintage · NM", badge: "GRADED 8", price: "640" }
    ]
  },
  {
    id: "magic",
    name: "Magic: The Gathering",
    tagline: "Modern, Commander, and the deep vintage well",
    blurb: "Reserved-list staples, the latest Standard cracks, foil commanders, and binders full of singles for every format from Pauper to Vintage.",
    palette: { bg: "linear-gradient(160deg,#2a1640,#0f0820)", art: "linear-gradient(145deg,#a987f0,#5f3fb5 60%,#2a1a6b)", mono: "#e8dcff", badge: "linear-gradient(90deg,#a987f0,#5f3fb5)", glyph: "M" },
    cards: [
      { title: "Sheoldred, the Apocalypse", sub: "Mythic · NM Foil", badge: "RAW", price: "78" },
      { title: "Force of Will", sub: "Eternal Masters", badge: "PLAYED", price: "92" },
      { title: "Commander Precon Bundle", sub: "Set of 4", badge: "SEALED", price: "160" },
      { title: "Liliana of the Veil", sub: "Innistrad · NM", badge: "GRADED 9", price: "210" },
      { title: "Foil Mox Opal", sub: "Modern Masters", badge: "RAW", price: "330" }
    ]
  },
  {
    id: "onepiece",
    name: "One Piece Card Game",
    tagline: "Crews, Captains, and OP-set chase rares",
    blurb: "Bandai's hit TCG, fully stocked. Starter decks, booster boxes from OP-01 through the latest drop, and a wall of single chase rares behind the counter.",
    palette: { bg: "linear-gradient(160deg,#3a0d18,#10050a)", art: "linear-gradient(145deg,#ff6b8a,#d9234f 60%,#6b0e22)", mono: "#ffe0e7", badge: "linear-gradient(90deg,#ff6b8a,#d9234f)", glyph: "OP" },
    cards: [
      { title: "Straw Hat Captain — Parallel", sub: "OP-04 · NM", badge: "RAW", price: "145" },
      { title: "Romance Dawn Booster Box", sub: "OP-01 · Sealed", badge: "SEALED", price: "260" },
      { title: "Pirate Empress Alt Art", sub: "Manga Rare", badge: "GRADED 10", price: "510" },
      { title: "Starter Deck — Red", sub: "ST-01", badge: "DECK", price: "18" },
      { title: "Twin Champions Box Set", sub: "Promo Bundle", badge: "SEALED", price: "85" }
    ]
  },
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    tagline: "From Blue-Eyes vintage to modern meta",
    blurb: "Unlimited LOB through the newest Battle Pack. 1st Edition holos, Ghost Rares, Starlight Rares, and a rotating case of graded slabs.",
    palette: { bg: "linear-gradient(160deg,#3a1a0c,#100604)", art: "linear-gradient(145deg,#ffb86b,#d97a1d 60%,#5e2f08)", mono: "#fff0d6", badge: "linear-gradient(90deg,#ffb86b,#d97a1d)", glyph: "Y" },
    cards: [
      { title: "Blue-Eyes White Dragon", sub: "LOB Unlimited", badge: "GRADED 8", price: "245" },
      { title: "Ash Blossom Starlight", sub: "Modern Meta", badge: "RAW", price: "180" },
      { title: "Dark Magician Girl Promo", sub: "Anniversary", badge: "FOIL", price: "60" },
      { title: "Legendary Tin 2025", sub: "Holiday Sealed", badge: "SEALED", price: "32" },
      { title: "Exodia the Forbidden", sub: "Full Set · NM", badge: "RAW", price: "350" }
    ]
  },
  {
    id: "lorcana",
    name: "Disney Lorcana",
    tagline: "The newcomer everyone's chasing",
    blurb: "All sets in stock from Chapter 1 onward, including enchanted variants and the latest preview drops. Binder-fresh and case-fresh both.",
    palette: { bg: "linear-gradient(160deg,#0e2e3a,#04141a)", art: "linear-gradient(145deg,#7be0d6,#1f99a8 60%,#0a3a48)", mono: "#dffaf5", badge: "linear-gradient(90deg,#7be0d6,#1f99a8)", glyph: "L" },
    cards: [
      { title: "Enchanted Princess Promo", sub: "Ch.3 · NM", badge: "ENCHANTED", price: "320" },
      { title: "Chapter 1 Booster Box", sub: "Sealed Wave 1", badge: "SEALED", price: "210" },
      { title: "Foil Hero Series", sub: "Set of 6", badge: "RAW", price: "95" },
      { title: "Starter Deck — Amber", sub: "Beginner Friendly", badge: "DECK", price: "18" },
      { title: "Legendary Songbook", sub: "Ch.4 Chase", badge: "GRADED 9", price: "140" }
    ]
  },
  {
    id: "more",
    name: "Digimon · Flesh & Blood · More",
    tagline: "Plus everything else worth collecting",
    blurb: "Digimon, Flesh & Blood, Star Wars Unlimited, Final Fantasy, Weiss Schwarz, Dragon Ball Super. If you don't see it on the wall, ask — we probably have it in the back.",
    palette: { bg: "linear-gradient(160deg,#1c0b3a,#070219)", art: "linear-gradient(145deg,#ff8ad6,#9b3fdf 60%,#3a0e6b)", mono: "#f5dfff", badge: "linear-gradient(90deg,#ff8ad6,#9b3fdf)", glyph: "✦" },
    cards: [
      { title: "Digimon BT-15 Booster", sub: "Sealed Box", badge: "SEALED", price: "115" },
      { title: "Flesh & Blood — Cold Foil", sub: "Heavy Hitters", badge: "RAW", price: "240" },
      { title: "Star Wars Unlimited Box", sub: "Shadows of the Galaxy", badge: "SEALED", price: "135" },
      { title: "Dragon Ball Super Promo", sub: "Tournament Pack", badge: "FOIL", price: "45" },
      { title: "Final Fantasy Opus Lot", sub: "Bundle of 50", badge: "BUNDLE", price: "60" }
    ]
  }
];

const SERVICES = [
  {
    title: "Buy",
    word: "Buy",
    tag: "Walk out with the chase.",
    body: "Walk in and browse 10,000+ singles in our binders, plus a rotating case of graded slabs and sealed product fresh from distribution.",
    points: ["Singles from $0.25 to $5,000+", "Graded slabs (PSA, BGS, CGC)", "Sealed boxes, cases & precons"]
  },
  {
    title: "Sell",
    word: "Sell",
    tag: "Get a real offer in minutes.",
    body: "Bring your collection — bulk, binders, or one prized card. We quote on the spot using live market comps and pay cash or store credit.",
    points: ["Cash or +30% store credit", "No-appointment bulk buys", "Collection appraisals welcome"]
  },
  {
    title: "Trade",
    word: "Trade",
    tag: "Swap up to that grail.",
    body: "Trade what's not sparking joy for something that does. We'll work out fair value across TCGs — turn a stack of commons into a chase rare.",
    points: ["Cross-TCG trades welcome", "Value matching on the spot", "Trade-up bonuses on bundles"]
  }
];

const FEATURED = [
  { title: "Charizard EX — Surging Sparks", sub: "Ultra Rare · NM", badge: "RAW", price: "189", palette: TCGS[0].palette },
  { title: "Sheoldred, the Apocalypse", sub: "Mythic · NM Foil", badge: "RAW", price: "78", palette: TCGS[1].palette },
  { title: "Pirate Empress Alt Art", sub: "Manga Rare", badge: "GRADED 10", price: "510", palette: TCGS[2].palette },
  { title: "Blue-Eyes White Dragon", sub: "LOB Unlimited", badge: "GRADED 8", price: "245", palette: TCGS[3].palette },
  { title: "Enchanted Princess Promo", sub: "Ch.3 · NM", badge: "ENCHANTED", price: "320", palette: TCGS[4].palette },
  { title: "Cold Foil — Heavy Hitters", sub: "Flesh & Blood", badge: "RAW", price: "240", palette: TCGS[5].palette }
];

Object.assign(window, { TCGS, SERVICES, FEATURED });
