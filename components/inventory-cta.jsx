const { useState } = React;

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

Object.assign(window, { InventoryCTA });
