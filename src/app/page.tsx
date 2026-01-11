export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0F172A 0%, #020617 65%)",
        color: "#E5E7EB",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "140px 16px 90px",
        }}
      >
        <span
          style={{
            color: "#2563EB",
            fontWeight: 700,
            letterSpacing: 1,
            fontSize: 13,
            textTransform: "uppercase",
          }}
        >
          Paid Marketing Decision Engine
        </span>

        <h1
          style={{
            fontSize: 48,
            fontWeight: 900,
            lineHeight: 1.05,
            marginTop: 16,
            marginBottom: 18,
          }}
        >
          Stop burning ad money.
          <br />
          <span style={{ color: "#2563EB" }}>Get a decision.</span>
        </h1>

        <p
          style={{
            maxWidth: 620,
            fontSize: 18,
            color: "#9CA3AF",
            marginBottom: 32,
          }}
        >
          Soullytics judges your ads after they go live.
          <br />
          It tells you — clearly and coldly — what to{" "}
          <span style={{ color: "#22C55E" }}>RUN</span>,{" "}
          <span style={{ color: "#22C55E" }}>SCALE</span>,{" "}
          <span style={{ color: "#FACC15" }}>PAUSE</span> or{" "}
          <span style={{ color: "#EF4444" }}>KILL</span>.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button
            style={{
              background: "#2563EB",
              color: "#fff",
              border: "none",
              padding: "14px 22px",
              borderRadius: 12,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            See a real decision
          </button>

          <button
            style={{
              background: "#0B1220",
              color: "#E5E7EB",
              border: "1px solid #1F2937",
              padding: "14px 22px",
              borderRadius: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </section>

      {/* ================= PAIN ================= */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 16px 120px",
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 28 }}>
          Why most teams lose money
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          {[
            "Dashboards look green, cash still bleeds",
            "Early spikes get mistaken for success",
            "Bad ads stay alive because of hope",
            "Good ads die because of fear",
          ].map((t) => (
            <div
              key={t}
              style={{
                background: "#0B1220",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 24,
                color: "#9CA3AF",
              }}
            >
              <span style={{ color: "#EF4444", fontWeight: 700 }}>✕</span> {t}
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUTPUT ================= */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 16px 120px",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 24 }}>
          Soullytics gives only four outputs
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {[
            ["RUN", "#22C55E"],
            ["SCALE", "#22C55E"],
            ["PAUSE", "#FACC15"],
            ["KILL", "#EF4444"],
          ].map(([t, c]) => (
            <div
              key={t}
              style={{
                background: "#020617",
                border: `1px solid ${c}`,
                borderRadius: 14,
                padding: 22,
              }}
            >
              <h3 style={{ fontSize: 20, color: c }}>{t}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 13 }}>
                Clear, defensible decision.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section style={{ textAlign: "center", paddingBottom: 120 }}>
        <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 18 }}>
          Dashboards explain the past.
          <br />
          <span style={{ color: "#2563EB" }}>Soullytics decides the future.</span>
        </h2>

        <button
          style={{
            background: "#2563EB",
            color: "#fff",
            border: "none",
            padding: "16px 30px",
            borderRadius: 14,
            fontWeight: 800,
            cursor: "pointer",
            fontSize: 16,
          }}
        >
          Run the engine
        </button>
      </section>
    </main>
  );
}
