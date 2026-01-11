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
      {/* ================= HERO SECTION ================= */}
      <section
        style={{
          maxWidth: 1100,
          marginInline: "auto",
          padding: "120px 16px 80px",
        }}
      >
        <h1
          style={{
            fontSize: 40,
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
          marginInline: "auto",
          padding: "0 16px 80px",
        }}
      >
        <h2
          style={{
            fontSize: 28,
            fontWeight: 800,
            marginBottom: 8,
          }}
        >
          Three steps. Zero emotion.
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            marginBottom: 32,
            fontSize: 15,
          }}
        >
          No stories. No opinions. Just signals → decisions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {/* CARD 1 */}
          <div
            style={{
              background: "#0F1623",
              border: "1px solid #1F2937",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>
              Ingest signals
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: 14 }}>
              CPA, CTR, CVR, spend velocity, volatility — not vanity metrics.
            </p>
          </div>

          {/* CARD 2 */}
          <div
            style={{
              background: "#0F1623",
              border: "1px solid #1F2937",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>
              Evaluate reality
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: 14 }}>
              Statistical stability, momentum and risk. No stories. Just probabilities.
            </p>
          </div>

          {/* CARD 3 */}
          <div
            style={{
              background: "#0F1623",
              border: "1px solid #1F2937",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <h3 style={{ fontSize: 18, marginBottom: 8 }}>
              Output decision
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: 14 }}>
              RUN, SCALE, PAUSE or KILL — with a confidence score you can defend.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BUILT TO SAY NO ================= */}
      <section
        style={{
          maxWidth: 1100,
          marginInline: "auto",
          padding: "0 16px 120px",
        }}
      >
        <h2
          style={{
            fontSize: 26,
            fontWeight: 800,
            marginBottom: 12,
          }}
        >
          Built to say no.
        </h2>

        <p
          style={{
            color: "#9CA3AF",
            maxWidth: 520,
            fontSize: 15,
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
    marginInline: "auto",
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

  <h2
    style={{
      fontSize: 36,
      fontWeight: 800,
      marginBottom: 48,
    }}
  >
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
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#9CA3AF",
          marginBottom: 16,
        }}
      >
        The old way
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 12,
          color: "#9CA3AF",
          fontSize: 15,
        }}
      >
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
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#E5E7EB",
          marginBottom: 16,
        }}
      >
        The Soullytics way
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 12,
          fontSize: 15,
        }}
      >
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
      fontSize: 15,
      maxWidth: 720,
    }}
  >
    Soullytics is not here to make you feel good.
    <br />
    It’s here to stop you from lying to yourself.
  </p>
</section>
    </main>
  );
}
