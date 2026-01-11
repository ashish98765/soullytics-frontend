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
          maxWidth: 720,
          width: "100%",
        }}
      >
        {/* HERO */}
        <h1
          style={{
            fontSize: 42,
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
            maxWidth: 620,
          }}
        >
          Soullytics tells you when to <b>RUN</b>, <b>SCALE</b>, <b>PAUSE</b> or{" "}
          <b>KILL</b> ads — using signals, not hope.
        </p>

        {/* CTA */}
        <button
          style={{
            background: "#ffffff",
            color: "#000000",
            padding: "14px 24px",
            fontSize: 16,
            fontWeight: 700,
            borderRadius: 8,
            border: "none",
            cursor: "pointer",
          }}
        >
          Request Early Access
        </button>

        {/* SUB NOTE */}
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
    </main>
  );
}
