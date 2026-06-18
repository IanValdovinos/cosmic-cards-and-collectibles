const { useState } = React;

function Services() {
  const [active, setActive] = useState(0);
  return (
    <section className="services" id="services" data-screen-label="02 Services">
      <div className="section-head">
        <div className="kicker"><Sparkle size={10} /> WHAT WE DO <Sparkle size={10} /></div>
        <h2 className="section-title">Three things, done right.</h2>
        <p className="section-sub">No appointment, no nonsense. Walk in with a card or a collection — walk out with what you came for.</p>
      </div>
      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <article
            key={s.title}
            className={`service-card ${active === i ? "active" : ""}`}
            onMouseEnter={() => setActive(i)}
          >
            <div className="service-numeral">0{i + 1}</div>
            <div className="service-word"><span className="chrome chrome-md">{s.word}</span></div>
            <div className="service-tag">{s.tag}</div>
            <p className="service-body">{s.body}</p>
            <ul className="service-points">
              {s.points.map(p => (
                <li key={p}><Star size={11} color={i === 1 ? "#FF4FA8" : "#5ED4E8"} /> {p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Services });
