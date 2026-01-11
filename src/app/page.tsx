// src/app/page.tsx

export default function DashboardPage() {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Soullytics Decision Dashboard
      </h1>

      <p style={{ marginTop: "8px", color: "#9ca3af" }}>
        Cold, emotionless intelligence for ads & capital decisions
      </p>

      {/* Decision Card */}
      <div
        style={{
          marginTop: "32px",
          padding: "24px",
          borderRadius: "12px",
          background: "#111827",
          border: "1px solid #1f2937",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "12px" }}>
          Final Decision
        </h2>

        <div style={{ fontSize: "36px", fontWeight: "bold", color: "#22c55e" }}>
          RUN
        </div>

        <p style={{ marginTop: "8px", color: "#9ca3af" }}>
          System confidence: <strong>87%</strong>
        </p>
      </div>

      {/* Stats */}
      <div
        style={{
          marginTop: "24px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        <StatBox title="Engines Evaluated" value="40" />
        <StatBox title="Warnings Raised" value="3" />
        <StatBox title="Critical Fails" value="0" />
      </div>
    </div>
  );
}

function StatBox({ title, value }: { title: string; value: string }) {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "10px",
        background: "#020617",
        border: "1px solid #1f2937",
      }}
    >
      <div style={{ fontSize: "14px", color: "#9ca3af" }}>{title}</div>
      <div style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</div>
    </div>
  );
          }
