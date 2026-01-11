import DashboardCard from "./components/DashboardCard";
import { mockDecision } from "./lib/mockDecision";

export default function DashboardPage() {
  const { finalDecision, confidence, message } = mockDecision;

  const decisionColor =
    finalDecision === "RUN"
      ? "#22c55e"
      : finalDecision === "PAUSE"
      ? "#facc15"
      : "#ef4444";

  return (
    <main style={{ maxWidth: 1200 }}>
      <h1 style={{ fontSize: 32, fontWeight: 800, marginBottom: 24 }}>
        Soullytics Dashboard
      </h1>

      {/* TOP METRICS */}
      <div style={{ display: "flex", gap: 16, marginBottom: 32 }}>
        <DashboardCard
          title="Final Decision"
          value={finalDecision}
          color={decisionColor}
        />
        <DashboardCard
          title="Confidence"
          value={`${confidence}%`}
          color="#38bdf8"
        />
        <DashboardCard title="System Status" value="Operational" color="#22c55e" />
        <DashboardCard title="Last Update" value="Just now" />
      </div>

      {/* MESSAGE */}
      <div
        style={{
          background: "#0F172A",
          border: "1px solid #1f2933",
          borderRadius: 12,
          padding: 20,
        }}
      >
        <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>
          System Message
        </div>
        <div style={{ fontSize: 16 }}>{message}</div>
      </div>
    </main>
  );
}
