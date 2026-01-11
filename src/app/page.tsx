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
        <h1
          style={{
            fontSize: 48,
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 18,
          }}
        >
          Stop burning ad money.
          <br />
          Get a decision.
        </h1>

        <p
          style={{
            maxWidth: 620,
            fontSize: 18,
            color: "#9CA3AF",
            marginBottom: 28,
          }}
        >
          Soullytics is a decision engine for paid marketing.
          <br />
          It tells you — clearly and coldly — whether to RUN, SCALE, PAUSE or
          KILL an ad.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <button
            style={{
              background: "#2563EB",
              color: "#fff",
              border: "none",
              padding: "14px 20px",
              borderRadius: 10,
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
              padding: "14px 20px",
              borderRadius: 10,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>

        <p style={{ marginTop: 22, color: "#6B7280", fontSize: 13 }}>
          Used after ads are live • No creatives • No opinions • No motivation
        </p>
      </section>

      {/* ================= PAIN ================= */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 16px 120px",
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 32 }}>
          Most teams lose money because they refuse to kill ads.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          {[
            "Dashboards show green, cash still bleeds",
            "Early spikes get mistaken for success",
            "Bad ads stay alive because of hope",
            "Good ads get killed because of fear",
            "Decisions depend on who shouts louder",
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
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 16px 120px",
        }}
      >
        <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 16 }}>
          How Soullytics works
        </h2>

        <p style={{ color: "#9CA3AF", marginBottom: 40, maxWidth: 680 }}>
          Soullytics doesn’t create ads.
          <br />
          It judges ads — using signals, risk models and cold probability.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              h: "1. Ingest reality",
              d: "CPA, CVR, spend velocity, variance, trend stability.",
            },
            {
              h: "2. Detect illusion",
              d: "Separates real performance from noise and early luck.",
            },
            {
              h: "3. Score risk",
              d: "Measures capital danger before scaling destroys you.",
            },
            {
              h: "4. Output decision",
              d: "RUN • SCALE • PAUSE • KILL — no ambiguity.",
            },
          ].map((x) => (
            <div
              key={x.h}
              style={{
                background:
                  "linear-gradient(180deg, #0F172A 0%, #0B1220 100%)",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 26,
              }}
            >
              <h3 style={{ marginBottom: 8 }}>{x.h}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>{x.d}</p>
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
        <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 24 }}>
          The only outputs that matter
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {[
            ["RUN", "Safe to continue. No scaling yet."],
            ["SCALE", "Statistically proven. Increase spend."],
            ["PAUSE", "Data unclear. Wait."],
            ["KILL", "Capital at risk. Stop now."],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{
                background: "#020617",
                border: "1px solid #1F2937",
                borderRadius: 14,
                padding: 22,
              }}
            >
              <h3 style={{ fontSize: 18 }}>{t}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 13 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO IT IS FOR ================= */}
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 16px 140px",
        }}
      >
        <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 32 }}>
          Built for people who respect reality.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 22,
          }}
        >
          {[
            [
              "Founders",
              "You need to know when to kill ideas before they kill your runway.",
            ],
            [
              "Performance marketers",
              "You’re tired of defending decisions with vibes.",
            ],
            [
              "App & game studios",
              "Early kill saves millions. Late kill destroys studios.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{
                background: "#0B1220",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 26,
              }}
            >
              <h3 style={{ marginBottom: 10 }}>{t}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        style={{
          textAlign: "center",
          paddingBottom: 120,
        }}
      >
        <h2 style={{ fontSize: 34, fontWeight: 800, marginBottom: 18 }}>
          If you want comfort, use dashboards.
        </h2>
        <p style={{ color: "#9CA3AF", marginBottom: 28 }}>
          If you want truth, run Soullytics.
        </p>

        <button
          style={{
            background: "#2563EB",
            color: "#fff",
            border: "none",
            padding: "16px 26px",
            borderRadius: 12,
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
