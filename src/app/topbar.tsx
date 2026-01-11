export default function Topbar() {
  return (
    <div
      style={{
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        borderBottom: "1px solid #1f2937",
        background: "#0B0F14",
      }}
    >
      {/* Left */}
      <div style={{ fontWeight: 700, fontSize: 18 }}>
        Soullytics
      </div>

      {/* Center */}
      <div style={{ fontSize: 14, color: "#9CA3AF" }}>
        Decision:{" "}
        <span style={{ color: "#22C55E", fontWeight: 600 }}>
          RUN
        </span>
      </div>

      {/* Right */}
      <div style={{ fontSize: 14, color: "#9CA3AF" }}>
        Confidence:{" "}
        <span style={{ color: "#E5E7EB", fontWeight: 600 }}>
          87%
        </span>
      </div>
    </div>
  );
}
