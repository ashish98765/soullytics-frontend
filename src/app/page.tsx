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
      {/* ================= HERO ================= */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "120px 16px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 42,
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Replace guesswork with signals.
        </h1>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: 16,
            maxWidth: 520,
            marginBottom: 28,
          }}
        >
          Soullytics replaces emotional calls, Slack debates and spreadsheet
          chaos with one cold decision engine.
        </p>

        <button
          style={{
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

      {/* ================= THREE STEPS ================= */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px 100px",
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
          Three steps. Zero emotion.
        </h2>
        <p style={{ color: "#9CA3AF", marginBottom: 32 }}>
          No stories. No opinions. Just signals → decisions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              title: "Ingest signals",
              text:
                "CPA, CTR, CVR, spend velocity, volatility — not vanity metrics.",
            },
            {
              title: "Evaluate reality",
              text:
                "Statistical stability, momentum and risk. No stories. Just probabilities.",
            },
            {
              title: "Output decision",
              text:
                "RUN, SCALE, PAUSE or KILL — with a confidence score you can defend.",
            },
          ].map((c) => (
            <div
              key={c.title}
              style={{
                background: "#0B1220",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= BUILT TO SAY NO ================= */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px 120px",
        }}
      >
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 12 }}>
          Built to say no.
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            maxWidth: 520,
            marginBottom: 24,
          }}
        >
          Soullytics is not here to make you feel good.
          <br />
          It’s here to stop you from lying to yourself.
        </p>

        <button
          style={{
            background: "#0F1623",
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

      {/* ================= WHY SOULLYTICS ================= */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px 120px",
        }}
      >
        <div
          style={{
            fontSize: 13,
            letterSpacing: 1,
            color: "#6B7280",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Why Soullytics
        </div>

        <h2 style={{ fontSize: 36, fontWeight: 800, marginBottom: 48 }}>
          Built to say no.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          {/* OLD WAY */}
          <div
            style={{
              background: "#0B1220",
              border: "1px solid #1F2937",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <h4 style={{ color: "#9CA3AF", marginBottom: 16 }}>The old way</h4>
            <ul style={{ color: "#9CA3AF", lineHeight: 1.8 }}>
              <li>Dashboards that describe the past</li>
              <li>Agencies selling optimism</li>
              <li>Gut decisions under pressure</li>
              <li>Scaling because “it feels right”</li>
              <li>Killing winners too early</li>
              <li>Letting losers burn cash</li>
            </ul>
          </div>

          {/* SOULLYTICS WAY */}
          <div
            style={{
              background:
                "linear-gradient(180deg, #0F172A 0%, #0B1220 100%)",
              border: "1px solid #1F2937",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <h4 style={{ marginBottom: 16 }}>The Soullytics way</h4>
            <ul style={{ lineHeight: 1.8 }}>
              <li>Decisions, not charts</li>
              <li>No emotional attachment</li>
              <li>Statistical confidence</li>
              <li>Clear RUN / SCALE / PAUSE / KILL</li>
              <li>Protects capital first</li>
              <li>Scales only when reality agrees</li>
            </ul>
          </div>
        </div>

        <p
          style={{
            marginTop: 48,
            color: "#9CA3AF",
            maxWidth: 720,
          }}
        >
          Soullytics is not here to make you feel good.
          <br />
          It’s here to stop you from lying to yourself.
        </p>
      </section>

      {/* ================= BUILT FOR ================= */}
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 16px 120px",
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 32 }}>
          Built for people who respect reality.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              title: "Founders & Operators",
              text:
                "You don’t want motivation. You want to know if this thing should live or die.",
            },
            {
              title: "Performance Marketers",
              text:
                "Dashboards look okay. But your gut says something is off.",
            },
            {
              title: "Game & App Studios",
              text:
                "Kill bad bets early. Double down only when the math agrees.",
            },
            {
              title: "Agencies (Internal Use)",
              text:
                "Make recommendations you can defend — without stories or hope.",
            },
          ].map((c) => (
            <div
              key={c.title}
              style={{
                background: "#0B1220",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3 style={{ marginBottom: 8 }}>{c.title}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
