const { useState } = React;

function TCGSection() {
  const [active, setActive] = useState(0);
  const tcg = TCGS[active];
  return (
    <section className="tcgs" id="tcgs" data-screen-label="03 TCGs">
      <div className="section-head">
        <div className="kicker"><Sparkle size={10} /> THE GAMES WE STOCK <Sparkle size={10} /></div>
        <h2 className="section-title">Every major TCG, deeply stocked.</h2>
        <p className="section-sub">Pick a game to see what we carry — then browse the live catalog for current singles, sealed product, and graded slabs.</p>
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
          <a href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80" className="cta-primary">
            Browse {tcg.name} inventory <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TCGSection });
