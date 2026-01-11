export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #111827 0%, #020617 60%)",
        color: "#E5E7EB",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 16px" }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.1 }}>
          Replace guesswork with signals.
        </h1>

        <p style={{ color: "#9CA3AF", maxWidth: 520, marginTop: 16 }}>
          Soullytics replaces emotional calls, Slack debates and spreadsheet chaos
          with one cold decision engine.
        </p>

        <button
          style={{
            marginTop: 28,
            background: "#2563EB",
            color: "#fff",
            border: "none",
            padding: "12px 18px",
            borderRadius: 10,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Get started
        </button>
      </section>

      {/* THREE STEPS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 100px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800 }}>Three steps. Zero emotion.</h2>
        <p style={{ color: "#9CA3AF", marginTop: 8 }}>
          No stories. No opinions. Just signals → decisions.
        </p>

        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {[
            ["Ingest signals", "CPA, CTR, CVR, velocity — not vanity metrics."],
            ["Evaluate reality", "Statistical stability, momentum and risk."],
            ["Output decision", "RUN, SCALE, PAUSE or KILL — with confidence."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                background: "#0F172A",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 14, marginTop: 8 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BUILT TO SAY NO */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800 }}>Built to say no.</h2>
        <p style={{ color: "#9CA3AF", maxWidth: 520, marginTop: 12 }}>
          Soullytics is not here to make you feel good.  
          It’s here to stop you from lying to yourself.
        </p>

        <button
          style={{
            marginTop: 24,
            background: "#0F172A",
            color: "#E5E7EB",
            border: "1px solid #1F2937",
            padding: "10px 16px",
            borderRadius: 10,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          People who respect reality → Login
        </button>
      </section>

      {/* BUILT FOR */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700 }}>
          Built for people who respect reality.
        </h2>

        <div
          style={{
            marginTop: 32,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {[
            ["Founders & Operators", "You want to know if this thing should live or die."],
            ["Performance Marketers", "Dashboards look okay, but your gut says something’s off."],
            ["Game & App Studios", "Kill bad bets early. Double down only when math agrees."],
            ["Agencies (Internal)", "Make recommendations you can defend without stories."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                background: "#0F172A",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3 style={{ fontWeight: 700 }}>{title}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 14, marginTop: 8 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
