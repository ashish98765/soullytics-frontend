export default function Sidebar() {
  return (
    <aside
      style={{
        width: 220,
        background: "#0B0F14",
        borderRight: "1px solid #1f2933",
        padding: 16,
        height: "100vh",
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 24 }}>
        Soullytics
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <NavItem label="Dashboard" />
        <NavItem label="Decisions" />
        <NavItem label="Traces" />
        <NavItem label="Settings" />
      </nav>
    </aside>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: 6,
        cursor: "pointer",
        color: "#cbd5e1",
      }}
    >
      {label}
    </div>
  );
}
