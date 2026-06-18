const TCGS = [
  {
    id: "pokemon",
    name: "Pokémon TCG",
    tagline: "From Base Set to Surging Sparks",
    blurb: "Vintage WOTC singles, modern Scarlet & Violet boosters, graded slabs, Japanese promos, and sealed booster boxes — we keep the showcase stocked.",
    palette: { bg: "linear-gradient(160deg,#1a2b4a,#0a1226)", art: "linear-gradient(145deg,#ffd86b,#ff7a3d 60%,#c93a1f)", mono: "#fff8d6", badge: "linear-gradient(90deg,#ffb84d,#ff5e3a)", glyph: "P" }
  },
  {
    id: "magic",
    name: "Magic: The Gathering",
    tagline: "Modern, Commander, and the deep vintage well",
    blurb: "Reserved-list staples, the latest Standard cracks, foil commanders, and binders full of singles for every format from Pauper to Vintage.",
    palette: { bg: "linear-gradient(160deg,#2a1640,#0f0820)", art: "linear-gradient(145deg,#a987f0,#5f3fb5 60%,#2a1a6b)", mono: "#e8dcff", badge: "linear-gradient(90deg,#a987f0,#5f3fb5)", glyph: "M" }
  },
  {
    id: "onepiece",
    name: "One Piece Card Game",
    tagline: "Crews, Captains, and OP-set chase rares",
    blurb: "Bandai's hit TCG, fully stocked. Starter decks, booster boxes from OP-01 through the latest drop, and a wall of single chase rares behind the counter.",
    palette: { bg: "linear-gradient(160deg,#3a0d18,#10050a)", art: "linear-gradient(145deg,#ff6b8a,#d9234f 60%,#6b0e22)", mono: "#ffe0e7", badge: "linear-gradient(90deg,#ff6b8a,#d9234f)", glyph: "OP" }
  },
  {
    id: "yugioh",
    name: "Yu-Gi-Oh!",
    tagline: "From Blue-Eyes vintage to modern meta",
    blurb: "Unlimited LOB through the newest Battle Pack. 1st Edition holos, Ghost Rares, Starlight Rares, and a rotating case of graded slabs.",
    palette: { bg: "linear-gradient(160deg,#3a1a0c,#100604)", art: "linear-gradient(145deg,#ffb86b,#d97a1d 60%,#5e2f08)", mono: "#fff0d6", badge: "linear-gradient(90deg,#ffb86b,#d97a1d)", glyph: "Y" }
  },
  {
    id: "lorcana",
    name: "Disney Lorcana",
    tagline: "The newcomer everyone's chasing",
    blurb: "All sets in stock from Chapter 1 onward, including enchanted variants and the latest preview drops. Binder-fresh and case-fresh both.",
    palette: { bg: "linear-gradient(160deg,#0e2e3a,#04141a)", art: "linear-gradient(145deg,#7be0d6,#1f99a8 60%,#0a3a48)", mono: "#dffaf5", badge: "linear-gradient(90deg,#7be0d6,#1f99a8)", glyph: "L" }
  },
  {
    id: "more",
    name: "Digimon · Flesh & Blood · More",
    tagline: "Plus everything else worth collecting",
    blurb: "Digimon, Flesh & Blood, Star Wars Unlimited, Final Fantasy, Weiss Schwarz, Dragon Ball Super. If you don't see it on the wall, ask — we probably have it in the back.",
    palette: { bg: "linear-gradient(160deg,#1c0b3a,#070219)", art: "linear-gradient(145deg,#ff8ad6,#9b3fdf 60%,#3a0e6b)", mono: "#f5dfff", badge: "linear-gradient(90deg,#ff8ad6,#9b3fdf)", glyph: "✦" }
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

Object.assign(window, { TCGS, SERVICES });
