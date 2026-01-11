// src/app/page.tsx
import { mockDecision } from "./lib/mockDecision";

export default function DashboardPage() {
  const { finalDecision, confidence, message } = mockDecision;

  const decisionColor =
    finalDecision === "RUN"
      ? "#22c55e"
      : finalDecision === "PAUSE"
      ? "#f59e0b"
      : "#ef4444";

  return (
    <main style={{ maxWidth: 720 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>
        Soullytics Dashboard
      </h1>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "#9ca3af" }}>Final Decision</div>
        <div style={{ fontSize: 36, fontWeight: 800, color: decisionColor }}>
          {finalDecision}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 13, color: "#9ca3af" }}>Confidence</div>
        <div style={{ fontSize: 24 }}>{confidence}%</div>
      </div>

      <div
        style={{
          background: "#111827",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <div style={{ fontSize: 13, color: "#9ca3af" }}>
          System Message
        </div>
        <p style={{ marginTop: 8 }}>{message}</p>
      </div>
    </main>
  );
}
