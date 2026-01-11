export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(1200px 600px at top, #0F1623, #0B0F14)",
        color: "#E5E7EB",
        padding: "120px 20px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* HERO HEADLINE */}
        <h1
          style={{
            fontSize: 44,
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}
        >
          Replace guesswork with signals.
        </h1>

        {/* SUBHEAD */}
        <p
          style={{
            fontSize: 18,
            color: "#9CA3AF",
            maxWidth: 720,
            lineHeight: 1.6,
            marginBottom: 36,
          }}
        >
          Soullytics replaces emotional calls, Slack debates and spreadsheet chaos
          with one cold decision engine.
        </p>

        {/* CTA */}
        <button
          style={{
            background: "#2563EB",
            color: "#FFFFFF",
            border: "none",
            borderRadius: 10,
            padding: "14px 22px",
            fontSize: 15,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get started
        </button>
      </div>
    </main>
  );
}
