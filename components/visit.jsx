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
          <a href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80" className="cta-primary">
            Browse Our Inventory
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Visit });
