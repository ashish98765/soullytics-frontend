// src/app/app/components/DashboardCard.tsx

type Props = {
  title: string;
  value: string;
  sub?: string;
};

export default function DashboardCard({ title, value, sub }: Props) {
  return (
    <div
      className="card"
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <div
        style={{
          fontSize: 13,
          color: "#9CA3AF",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: 28,
          fontWeight: 800,
        }}
      >
        {value}
      </div>

      {sub && (
        <div
          style={{
            fontSize: 12,
            color: "#6B7280",
          }}
        >
          {sub}
        </div>
      )}
    </div>
  );
}
