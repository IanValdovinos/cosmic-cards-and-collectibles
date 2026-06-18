const { useState } = React;

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
          <a href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80" className="cta-ghost">
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

Object.assign(window, { TCGSection });
