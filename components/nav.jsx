const { useState, useEffect } = React;

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
        <img
          src={RES("logo", "assets/logo.jpg")}
          alt="Cosmic Cards & Collectibles"
        />
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
      <a
        href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80"
        className="cta-pill"
      >
        Browse Our Inventory
        <span className="cta-arrow">→</span>
      </a>
    </header>
  );
}

Object.assign(window, { Nav });
