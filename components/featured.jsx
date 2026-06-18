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
        <a href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80" className="cta-primary big">
          Browse Our Inventory
          <span className="cta-arrow">→</span>
        </a>
        <span className="featured-note">Online catalog updated daily · in-store stock is the source of truth</span>
      </div>
    </section>
  );
}

Object.assign(window, { Featured });
