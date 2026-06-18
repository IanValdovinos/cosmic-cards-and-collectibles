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

Object.assign(window, { Footer });
