// src/app/page.tsx

export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
        }}
      >
        {/* LEFT — COPY */}
        <div>
          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Cold, Unemotional Decisions for Paid Growth.
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#9CA3AF",
              marginBottom: 32,
              maxWidth: 520,
            }}
          >
            Soullytics tells you when to <b>RUN</b>, <b>SCALE</b>,{" "}
            <b>PAUSE</b> or <b>KILL</b> ads — using signals, not hope.
          </p>

          <button
            style={{
              background: "#ffffff",
              color: "#000000",
              padding: "14px 26px",
              fontSize: 16,
              fontWeight: 700,
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
            }}
          >
            Request Early Access
          </button>

          <p
            style={{
              marginTop: 12,
              fontSize: 13,
              color: "#6B7280",
            }}
          >
            Limited beta. No spam.
          </p>
        </div>

        {/* RIGHT — DECISION CARD */}
        <div
          style={{
            background: "#0f1623",
            borderRadius: 14,
            padding: 28,
            border: "1px solid #1f2937",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#9CA3AF",
              marginBottom: 8,
            }}
          >
            Current Decision
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#22c55e",
              marginBottom: 12,
            }}
          >
            RUN
          </div>

          <div
            style={{
              fontSize: 14,
              color: "#9CA3AF",
              marginBottom: 20,
            }}
          >
            Confidence: <b style={{ color: "#E5E7EB" }}>87%</b>
          </div>

          <div
            style={{
              background: "#0b1220",
              padding: 16,
              borderRadius: 10,
              fontSize: 14,
              lineHeight: 1.6,
              color: "#D1D5DB",
            }}
          >
            Performance signals indicate stable CPA, improving CTR and
            conversion momentum. Scaling is statistically justified.
          </div>
        </div>
      </div>
    </main>
  );
}
