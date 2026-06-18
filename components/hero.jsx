const { useState } = React;

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
            <a href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80" className="cta-primary">
              Browse Our Inventory
              <span className="cta-arrow">→</span>
            </a>
            <a href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80" className="cta-secondary">Visit the shop</a>
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

Object.assign(window, { Hero });
