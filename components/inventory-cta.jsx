const { useState } = React;

function InventoryCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section
      className="inv-cta"
      id="inventory"
      data-screen-label="06 Inventory CTA"
    >
      <div className="inv-aurora" />
      <Starfield count={60} />
      <div className="inv-inner">
        <div className="kicker">
          <Sparkle size={10} /> THE WHOLE GALAXY, ONE CLICK AWAY{" "}
          <Sparkle size={10} />
        </div>
        <h2 className="big-title">
          <span className="chrome">Browse our</span>
          <span className="chrome">Inventory.</span>
        </h2>
        <p className="inv-sub">
          10,000+ singles, sealed product, and graded slabs — searchable,
          sortable, and updated daily. New chase rares pinned to the top.
        </p>
        <a
          href="https://foilbinder.com/shop/9aa9dc99-9c7d-4eb0-83c0-be5a7a689a80"
          className="cta-primary huge"
        >
          Browse Our Inventory
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  );
}

Object.assign(window, { InventoryCTA });
