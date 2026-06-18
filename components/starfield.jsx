function Starfield({ count = 80, big = 0, shooting = 0, shootCycle = 7 }) {
  const stars = React.useMemo(
    () => Array.from({ length: count }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 0.4 + Math.random() * 1.6,
      delay: Math.random() * 6,
      dur: 3 + Math.random() * 5
    })),
    [count]
  );
  const bigStars = React.useMemo(
    () => Array.from({ length: big }, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 8 + Math.random() * 14,
      color: ["#5ED4E8", "#FF4FA8", "#fff", "#fff"][Math.floor(Math.random() * 4)],
      delay: Math.random() * 5,
      dur: 4 + Math.random() * 4
    })),
    [big]
  );
  const shoots = React.useMemo(
    () => Array.from({ length: shooting }, (_, i) => ({
      top: 5 + Math.random() * 60,
      left: -10 + Math.random() * 70,
      delay: (shootCycle / Math.max(shooting, 1)) * i + Math.random() * 1.5,
      dur: shootCycle * (0.9 + Math.random() * 0.2),
      angle: -18 + Math.random() * 14,
      len: 180 + Math.random() * 220
    })),
    [shooting, shootCycle]
  );
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((st, i) => (
        <div
          key={`d${i}`}
          className="star-dot"
          style={{
            left: `${st.x}%`,
            top: `${st.y}%`,
            width: `${st.s}px`,
            height: `${st.s}px`,
            animationDelay: `${st.delay}s`,
            animationDuration: `${st.dur}s`
          }}
        />
      ))}
      {bigStars.map((b, i) => (
        <div
          key={`b${i}`}
          className="star-glyph"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.dur}s`
          }}
        >
          <Sparkle size={b.s} color={b.color} />
        </div>
      ))}
      {shoots.map((sh, i) => (
        <div
          key={`s${i}`}
          className="shooting-star"
          style={{
            top: `${sh.top}%`,
            left: `${sh.left}%`,
            animationDelay: `${sh.delay}s`,
            animationDuration: `${sh.dur}s`,
            transform: `rotate(${sh.angle}deg)`,
            "--shoot-len": `${sh.len}px`
          }}
        >
          <span className="shooting-head" />
          <span className="shooting-tail" />
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Starfield });
