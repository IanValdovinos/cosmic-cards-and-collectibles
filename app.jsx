const { useState, useEffect, useRef } = React;

// Resolves an asset to its inlined blob URL when running as a standalone
// bundle (window.__resources), otherwise falls back to the on-disk path.
const RES = (id, path) => (window.__resources && window.__resources[id]) || path;

// ---------- DATA ----------
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

// ---------- TINY UI ATOMS ----------
function Star({ size = 18, color = "#5ED4E8", style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} aria-hidden="true">
      <path
        d="M12 1.5 L14.6 8.9 L22.5 9.5 L16.3 14.6 L18.4 22.3 L12 17.9 L5.6 22.3 L7.7 14.6 L1.5 9.5 L9.4 8.9 Z"
        fill={color}
        stroke="#0b0418"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle({ size = 12, color = "#fff", style }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} style={style} aria-hidden="true">
      <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" fill={color} />
    </svg>
  );
}

// ---------- STARFIELD ----------
function Starfield({ count = 80, big = 0, shooting = 0, shootCycle = 7 }) {
  const stars = React.useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 0.4 + Math.random() * 1.6,
      delay: Math.random() * 6,
      dur: 3 + Math.random() * 5
    })),
    [count]
  );
  const bigStars = React.useMemo(
    () => Array.from({ length: big }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 8 + Math.random() * 14,
      color: ["#5ED4E8", "#FF4FA8", "#fff", "#fff"][Math.floor(Math.random() * 4)],
      delay: Math.random() * 5,
      dur: 4 + Math.random() * 4
    })),
    [big]
  );
  const shoots = React.useMemo(
    () => Array.from({ length: shooting }, (_, i) => ({
      top: 5 + Math.random() * 60,
      left: -10 + Math.random() * 70,
      // stagger the first appearance across the whole cycle so they don't all fire at once
      delay: (shootCycle / Math.max(shooting, 1)) * i + Math.random() * 1.5,
      dur: shootCycle * (0.9 + Math.random() * 0.2),
      angle: -18 + Math.random() * 14,
      len: 180 + Math.random() * 220
    })),
    [shooting, shootCycle]
  );
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((st, i) => (
        <div
          key={`d${i}`}
          className="star-dot"
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: `${st.s}px`,
            height: `${st.s}px`,
            animationDelay: `${st.delay}s`,
            animationDuration: `${st.dur}s`
          }}
        />
      ))}
      {bigStars.map((b, i) => (
        <div
          key={`b${i}`}
          className="star-glyph"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`
          }}
        >
          <Sparkle size={b.s} color={b.color} />
        </div>
      ))}
      {shoots.map((sh, i) => (
        <div
          key={`s${i}`}
          className="shooting-star"
          style={{
            top: `${sh.top}%`,
            left: `${sh.left}%`,
            animationDelay: `${sh.delay}s`,
            animationDuration: `${sh.dur}s`,
            transform: `rotate(${sh.angle}deg)`,
            "--shoot-len": `${sh.len}px`
          }}
        >
          <span className="shooting-head" />
          <span className="shooting-tail" />
        </div>
      ))}
    </div>
  );
}

// ---------- NAV ----------
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <a href="#top" className="nav-brand">
        <img src={RES("logo", "assets/logo.jpg")} alt="Cosmic Cards & Collectibles" />
        <span>
          <strong>COSMIC</strong>
          <em>Cards &amp; Collectibles</em>
        </span>
      </a>
      <nav className="nav-links">
        <a href="#services">Buy · Sell · Trade</a>
        <a href="#tcgs">TCGs</a>
        <a href="#featured">Featured</a>
        <a href="#visit">Visit</a>
      </nav>
      <a href="#inventory" className="cta-pill">
        Browse Our Inventory
        <span className="cta-arrow">→</span>
      </a>
    </header>
  );
}

// ---------- HERO BANNER ----------
const BANNER_CARDS = [
  { id: "cardTera", src: "assets/card-charizard-tera.jpg", alt: "Charizard ex Tera — Pokémon", cls: "bc-1" },
  { id: "cardLumra", src: "assets/card-lumra.jpg", alt: "Lumra, Bellow of the Woods — Magic: The Gathering", cls: "bc-2" },
  { id: "cardOnering", src: "assets/card-onering.jpg", alt: "The One Ring — Magic: The Gathering", cls: "bc-3" },
  { id: "cardGold", src: "assets/card-charizard-gold.jpg", alt: "Mega Charizard X ex — Gold", cls: "bc-4" },
  { id: "cardGandalf", src: "assets/card-gandalf.jpg", alt: "Gandalf, Friend of the Shire — Magic: The Gathering", cls: "bc-5" }
];

function Hero({ shootCount = 4, shootCycle = 7 }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - r.left) / r.width - 0.5) * 2,
      y: ((e.clientY - r.top) / r.height - 0.5) * 2
    });
  };
  const onLeave = () => setMouse({ x: 0, y: 0 });
  return (
    <section className="hero" id="top" data-screen-label="01 Hero" onMouseMove={onMove} onMouseLeave={onLeave}>
      <Starfield count={140} big={14} shooting={shootCount} shootCycle={shootCycle} />
      <div className="hero-aurora" />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <Star size={14} />
            <span>BUY · SELL · TRADE — SINCE 2019</span>
            <Star size={14} />
          </div>
          <h1 className="hero-title">
            <span className="chrome">Your gateway</span>
            <span className="chrome">to the galaxy</span>
            <span className="chrome chrome-sm">of trading cards.</span>
          </h1>
          <p className="hero-sub">
            Pokémon, Magic: The Gathering, One Piece, Yu-Gi-Oh!, Lorcana and more — all under one neon-lit roof. 10,000+ singles in the case, sealed product fresh from distro, and a fair offer on whatever you bring through the door.
          </p>
          <div className="hero-cta-row">
            <a href="#inventory" className="cta-primary">
              Browse Our Inventory
              <span className="cta-arrow">→</span>
            </a>
            <a href="#visit" className="cta-secondary">Visit the shop</a>
          </div>
          <div className="hero-stats">
            <div><strong>10K+</strong><span>singles in stock</span></div>
            <div><strong>6+</strong><span>TCGs carried</span></div>
            <div><strong>4.9★</strong><span>Google reviews</span></div>
          </div>
        </div>
        <div className="banner-cards">
          <div className="banner-cards-glow" />
          {BANNER_CARDS.map((c, i) => (
            <div
              key={c.src}
              className={`banner-card ${c.cls}`}
              style={{
                transform: `translate(${mouse.x * (4 + i * 2)}px, ${mouse.y * (4 + i * 2)}px)`
              }}
            >
              <div className="banner-card-inner">
                <img src={RES(c.id, c.src)} alt={c.alt} />
                <div className="banner-card-foil" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-script">
        <span>Buy</span>
        <span className="dot">·</span>
        <span>Sell</span>
        <span className="dot">·</span>
        <span>Trade</span>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
function Services() {
  const [active, setActive] = useState(0);
  return (
    <section className="services" id="services" data-screen-label="02 Services">
      <div className="section-head">
        <div className="kicker"><Sparkle size={10} /> WHAT WE DO <Sparkle size={10} /></div>
        <h2 className="section-title">Three things, done right.</h2>
        <p className="section-sub">No appointment, no nonsense. Walk in with a card or a collection — walk out with what you came for.</p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className={`service-card ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            <div className="service-numeral">0{i + 1}</div>
            <div className="service-word"><span className="chrome chrome-md">{s.word}</span></div>
            <div className="service-tag">{s.tag}</div>
            <p className="service-body">{s.body}</p>
            <ul className="service-points">
              {s.points.map(p => (
                <li key={p}><Star size={11} color={i === 1 ? "#FF4FA8" : "#5ED4E8"} /> {p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

// ---------- TCG TABS ----------
function TCGSection() {
  const [active, setActive] = useState(0);
  const tcg = TCGS[active];
  return (
    <section className="tcgs" id="tcgs" data-screen-label="03 TCGs">
      <div className="section-head">
        <div className="kicker"><Sparkle size={10} /> THE GAMES WE STOCK <Sparkle size={10} /></div>
        <h2 className="section-title">Every major TCG, deeply stocked.</h2>
        <p className="section-sub">Tap a game to see what's hot in the case this week.</p>
      </div>
      <div className="tcg-tabs">
        {TCGS.map((t, i) => (
          <button
            key={t.id}
            className={`tcg-tab ${active === i ? "active" : ""}`}
            onClick={() => setActive(i)}
            style={active === i ? { background: t.palette.badge } : {}}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="tcg-panel">
        <div className="tcg-panel-left">
          <h3>{tcg.name}</h3>
          <div className="tcg-tagline">{tcg.tagline}</div>
          <p>{tcg.blurb}</p>
          <a href="#inventory" className="cta-ghost">
            Browse {tcg.name} inventory <span className="cta-arrow">→</span>
          </a>
          <div className="tcg-stats">
            <div><strong>{2000 + active * 340}+</strong><span>singles</span></div>
            <div><strong>{12 - active}</strong><span>sealed SKUs</span></div>
            <div><strong>{40 + active * 11}</strong><span>graded slabs</span></div>
          </div>
        </div>
        <div className="tcg-panel-right">
          {tcg.cards.slice(0, 4).map((c, i) => (
            <HoloCard key={i} {...c} palette={tcg.palette} idx={i} foil={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- FEATURED MARQUEE ----------
function Featured() {
  return (
    <section className="featured" id="featured" data-screen-label="04 Featured">
      <div className="section-head">
        <div className="kicker"><Sparkle size={10} /> FRESH IN THE CASE <Sparkle size={10} /></div>
        <h2 className="section-title">This week's chase cards.</h2>
        <p className="section-sub">Hover any card to see the foil shift. These move fast — first come, first served.</p>
      </div>
      <div className="featured-row">
        {FEATURED.map((c, i) => (
          <HoloCard key={i} {...c} idx={i} foil />
        ))}
      </div>
      <div className="featured-cta">
        <a href="#inventory" className="cta-primary big">
          Browse Our Inventory
          <span className="cta-arrow">→</span>
        </a>
        <span className="featured-note">Online catalog updated daily · in-store stock is the source of truth</span>
      </div>
    </section>
  );
}

// ---------- VISIT ----------
function Visit() {
  return (
    <section className="visit" id="visit" data-screen-label="05 Visit">
      <div className="visit-grid">
        <div className="visit-photo">
          <img src={RES("storefront", "assets/storefront.jpg")} alt="Cosmic Cards & Collectibles storefront" />
          <div className="visit-photo-tag">
            <Star size={12} /> THE SHOP
          </div>
        </div>
        <div className="visit-copy">
          <div className="kicker"><Sparkle size={10} /> COME SAY HI <Sparkle size={10} /></div>
          <h2 className="section-title">An actual physical store, with an iridescent floor.</h2>
          <p className="visit-body">
            We're inside Galaxy Mall — look for the neon sign and the marbled floor. Funko shelves on the left, the singles counter dead ahead, sealed product on the right. Stop in to play, browse, or just chat about the hobby.
          </p>
          <div className="visit-info">
            <div className="info-block">
              <div className="info-label">Address</div>
              <div className="info-value">2845 Galaxy Mall Blvd<br />Suite 142 · Centerville, OH</div>
            </div>
            <div className="info-block">
              <div className="info-label">Hours</div>
              <div className="info-value">
                Mon–Thu · 11a – 8p<br />
                Fri–Sat · 11a – 10p<br />
                Sun · 12p – 6p
              </div>
            </div>
            <div className="info-block">
              <div className="info-label">Friday Night Magic</div>
              <div className="info-value">7p Modern · 9p Commander<br />$5 entry · prize wall</div>
            </div>
            <div className="info-block">
              <div className="info-label">Pokémon League</div>
              <div className="info-value">Sat 1p · all ages<br />Free play · prize packs</div>
            </div>
          </div>
          <a href="#inventory" className="cta-primary">
            Browse Our Inventory
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// ---------- INVENTORY CTA + NEWSLETTER ----------
function InventoryCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="inv-cta" id="inventory" data-screen-label="06 Inventory CTA">
      <div className="inv-aurora" />
      <Starfield count={60} />
      <div className="inv-inner">
        <div className="kicker"><Sparkle size={10} /> THE WHOLE GALAXY, ONE CLICK AWAY <Sparkle size={10} /></div>
        <h2 className="big-title">
          <span className="chrome">Browse our</span>
          <span className="chrome">Inventory.</span>
        </h2>
        <p className="inv-sub">10,000+ singles, sealed product, and graded slabs — searchable, sortable, and updated daily. New chase rares pinned to the top.</p>
        <a href="#" className="cta-primary huge">
          Browse Our Inventory
          <span className="cta-arrow">→</span>
        </a>
        <form
          className="newsletter"
          onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }}
        >
          <label>Or get the drop-day email — new sets, restocks, and chase listings.</label>
          <div className="newsletter-row">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@galaxy.mail"
              disabled={submitted}
            />
            <button type="submit" disabled={submitted}>
              {submitted ? "✓ You're in" : "Join the list"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={RES("logo", "assets/logo.jpg")} alt="" />
          <div>
            <strong>COSMIC</strong>
            <em>Cards &amp; Collectibles</em>
            <span className="footer-tag">Buy · Sell · Trade</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Shop</h4>
          <a href="#tcgs">Pokémon</a>
          <a href="#tcgs">Magic: The Gathering</a>
          <a href="#tcgs">One Piece</a>
          <a href="#tcgs">Yu-Gi-Oh!</a>
          <a href="#tcgs">Lorcana</a>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <a href="#services">Buying collections</a>
          <a href="#services">Trade-ins</a>
          <a href="#services">Appraisals</a>
          <a href="#services">Grading submissions</a>
        </div>
        <div className="footer-col">
          <h4>Visit</h4>
          <a href="#visit">Galaxy Mall · Suite 142</a>
          <a href="#visit">Hours &amp; events</a>
          <a href="#visit">Friday Night Magic</a>
          <a href="#visit">Pokémon League</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Cosmic Cards &amp; Collectibles</span>
        <span className="footer-mini">All TCG names are trademarks of their respective publishers. Cosmic is an independent retailer.</span>
      </div>
    </footer>
  );
}

// ---------- APP ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "shootingStars": "occasional"
}/*EDITMODE-END*/;

// maps the friendly cadence to { count, cycle(sec) }
const SHOOT_PRESETS = {
  off:        { count: 0, cycle: 7 },
  rare:       { count: 2, cycle: 16 },
  occasional: { count: 3, cycle: 9 },
  frequent:   { count: 5, cycle: 5 },
  meteor:     { count: 8, cycle: 2.6 }
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const preset = SHOOT_PRESETS[t.shootingStars] || SHOOT_PRESETS.occasional;
  return (
    <div className="app">
      <Nav />
      <Hero shootCount={preset.count} shootCycle={preset.cycle} />
      <Services />
      <TCGSection />
      <Featured />
      <Visit />
      <InventoryCTA />
      <Footer />
      <TweaksPanel>
        <TweakSection label="Hero · Night sky" />
        <TweakSelect
          label="Shooting stars"
          value={t.shootingStars}
          options={[
            { value: "off", label: "Off" },
            { value: "rare", label: "Rare — every ~8s" },
            { value: "occasional", label: "Occasional — every ~3s" },
            { value: "frequent", label: "Frequent — every ~1s" },
            { value: "meteor", label: "Meteor shower" }
          ]}
          onChange={(v) => setTweak("shootingStars", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
