function Featured() {
  return (
    <section className="featured" id="featured" data-screen-label="04 Featured">
      <div className="section-head">
        <div className="kicker"><Sparkle size={10} /> FRESH IN THE CASE <Sparkle size={10} /></div>
        <h2 className="section-title">New chase cards land every week.</h2>
        <p className="section-sub">Our case turns over fast — vintage holos, modern alt-arts, graded slabs, and sealed product fresh from distribution. Because stock changes daily, the full, up-to-the-minute selection lives in our online catalog.</p>
      </div>
      <div className="featured-placeholder">
        <p>
          Browse 10,000+ trading card singles across Pokémon, Magic: The Gathering,
          One Piece, Yu-Gi-Oh!, Disney Lorcana, and more — searchable, sortable, and
          updated daily. Looking for a specific card or grade? Search the catalog or
          stop by the shop and we'll pull it from the case.
        </p>
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
