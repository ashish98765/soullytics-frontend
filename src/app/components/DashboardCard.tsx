export default function DashboardCard({
  title,
  value,
  color,
}: {
  title: string;
  value: string | number;
  color?: string;
}) {
  return (
    <div
      style={{
        background: "#0F172A",
        border: "1px solid #1f2933",
        borderRadius: 12,
        padding: 20,
        minWidth: 200,
      }}
    >
      <div style={{ fontSize: 12, color: "#94a3b8", marginBottom: 6 }}>
        {title}
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
          color: color || "#E5E7EB",
        }}
      >
        {value}
      </div>
    </div>
  );
}
