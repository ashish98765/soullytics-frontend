// src/app/app/page.tsx

import DashboardCard from "./components/DashboardCard";

export default function DashboardPage() {
  return (
    <div
      style={{
        display: "grid",
        gap: 32,
      }}
    >
      {/* HEADER */}
      <div>
        <h1
          style={{
            fontSize: 28,
            marginBottom: 6,
          }}
        >
          Dashboard
        </h1>

        <p
          style={{
            color: "#9CA3AF",
            fontSize: 14,
          }}
        >
          High-level view of your paid growth system.
        </p>
      </div>

      {/* KPI CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20,
        }}
      >
        <DashboardCard
          title="Spend"
          value="$12,480"
          sub="Last 7 days"
        />
        <DashboardCard
          title="CTR"
          value="2.34%"
          sub="Stable"
        />
        <DashboardCard
          title="CPA"
          value="$18.90"
          sub="Improving"
        />
        <DashboardCard
          title="Conversions"
          value="658"
          sub="+12%"
        />
      </div>

      {/* CURRENT DECISION */}
      <div
        className="card"
        style={{
          padding: 24,
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 24,
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <div
            style={{
              fontSize: 13,
              color: "#9CA3AF",
              marginBottom: 6,
            }}
          >
            Current System Decision
          </div>

          <div
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#22C55E",
            }}
          >
            RUN
          </div>

          <div
            style={{
              marginTop: 6,
              fontSize: 14,
              color: "#9CA3AF",
            }}
          >
            Confidence:{" "}
            <b style={{ color: "#E5E7EB" }}>87%</b>
          </div>
        </div>

        {/* RIGHT */}
        <div
          style={{
            maxWidth: 420,
            fontSize: 14,
            lineHeight: 1.6,
            color: "#D1D5DB",
          }}
        >
          Performance signals indicate stable CPA, improving CTR and
          consistent conversion momentum. Scaling is statistically
          justified under current conditions.
        </div>
      </div>
    </div>
  );
}
