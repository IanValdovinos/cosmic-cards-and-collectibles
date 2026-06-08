// Card placeholder components — abstract holographic cards, no trade-dress recreation
const { useState, useEffect, useRef, useMemo } = React;

function HoloCard({ palette, title, sub, badge, price, idx = 0, foil = false }) {
  const [g, setG] = useState({ x: 50, y: 50 });
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setG({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };
  const handleLeave = () => setG({ x: 50, y: 50 });

  const tilt = `perspective(900px) rotateY(${(g.x - 50) / 8}deg) rotateX(${-(g.y - 50) / 8}deg)`;

  return (
    <div
      className="holo-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: tilt }}
    >
      <div className="holo-card-inner" style={{ background: palette.bg }}>
        <div className="holo-card-art" style={{ background: palette.art }}>
          <div className="holo-card-monogram" style={{ color: palette.mono }}>{palette.glyph}</div>
          <div className="holo-card-noise" />
        </div>
        <div className="holo-card-meta">
          <div className="holo-card-title">{title}</div>
          <div className="holo-card-sub">{sub}</div>
        </div>
        <div className="holo-card-bottom">
          <span className="holo-card-badge" style={{ background: palette.badge }}>{badge}</span>
          <span className="holo-card-price">${price}</span>
        </div>
        {foil && (
          <div
            className="holo-card-foil"
            style={{
              background: `radial-gradient(circle at ${g.x}% ${g.y}%, rgba(255,255,255,0.55), rgba(255,79,168,0.25) 30%, rgba(94,212,232,0.25) 55%, transparent 75%)`
            }}
          />
        )}
        <div
          className="holo-card-shine"
          style={{
            background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) ${50 + (g.x - 50) / 4}%, transparent 60%)`
          }}
        />
        <div className="holo-card-sparkle" style={{ left: `${20 + idx * 7}%`, top: `${30 + (idx % 3) * 12}%` }}>✦</div>
      </div>
    </div>
  );
}

function MarqueeCards({ cards, palette }) {
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...cards, ...cards].map((c, i) => (
          <HoloCard key={i} {...c} palette={palette} idx={i} foil={i % 3 === 0} />
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { HoloCard, MarqueeCards });
