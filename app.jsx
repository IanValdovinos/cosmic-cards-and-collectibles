const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  shootingStars: "occasional",
}; /*EDITMODE-END*/

const SHOOT_PRESETS = {
  off: { count: 0, cycle: 7 },
  rare: { count: 2, cycle: 16 },
  occasional: { count: 3, cycle: 9 },
  frequent: { count: 5, cycle: 5 },
  meteor: { count: 8, cycle: 2.6 },
};

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const preset = SHOOT_PRESETS[t.shootingStars] || SHOOT_PRESETS.occasional;
  return (
    <div className="app">
      <Nav />
      <Hero shootCount={preset.count} shootCycle={preset.cycle} />
      <Services />
      <TCGSection />
      <Featured />
      <Visit />
      <InventoryCTA />
      <Footer />
      <TweaksPanel>
        <TweakSection label="Hero · Night sky" />
        <TweakSelect
          label="Shooting stars"
          value={t.shootingStars}
          options={[
            { value: "off", label: "Off" },
            { value: "rare", label: "Rare — every ~8s" },
            { value: "occasional", label: "Occasional — every ~3s" },
            { value: "frequent", label: "Frequent — every ~1s" },
            { value: "meteor", label: "Meteor shower" },
          ]}
          onChange={(v) => setTweak("shootingStars", v)}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
