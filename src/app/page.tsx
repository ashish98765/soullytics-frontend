// src/app/page.tsx

import AppShell from "../components/layout/AppShell";

export default function DashboardPage() {
  const finalDecision = "RUN";
  const confidence = 87;
  const message = "All systems operational. Ready to scale.";

  const decisionColor =
    finalDecision === "RUN"
      ? "green"
      : finalDecision === "PAUSE"
      ? "orange"
      : "red";

  return (
    <AppShell>
      <h1 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Soullytics Dashboard
      </h1>

      <div style={{ marginBottom: 20 }}>
        <div style={{ color: "#999", fontSize: 14 }}>Final Decision</div>
        <div style={{ fontSize: 32, fontWeight: "bold", color: decisionColor }}>
          {finalDecision}
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <div style={{ color: "#999", fontSize: 14 }}>Confidence</div>
        <div style={{ fontSize: 24 }}>{confidence}%</div>
      </div>

      <div style={{ background: "#111", padding: 16, borderRadius: 8 }}>
        <div style={{ color: "#999", fontSize: 14 }}>System Message</div>
        <p style={{ marginTop: 8 }}>{message}</p>
      </div>
    </AppShell>
  );
}
