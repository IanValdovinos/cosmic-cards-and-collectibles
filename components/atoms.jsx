const RES = (id, path) => (window.__resources && window.__resources[id]) || path;

function Star({ size = 18, color = "#5ED4E8", style }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} style={style} aria-hidden="true">
      <path
        d="M12 1.5 L14.6 8.9 L22.5 9.5 L16.3 14.6 L18.4 22.3 L12 17.9 L5.6 22.3 L7.7 14.6 L1.5 9.5 L9.4 8.9 Z"
        fill={color}
        stroke="#0b0418"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkle({ size = 12, color = "#fff", style }) {
  return (
    <svg viewBox="0 0 20 20" width={size} height={size} style={style} aria-hidden="true">
      <path d="M10 0 L11.5 8.5 L20 10 L11.5 11.5 L10 20 L8.5 11.5 L0 10 L8.5 8.5 Z" fill={color} />
    </svg>
  );
}

Object.assign(window, { RES, Star, Sparkle });
