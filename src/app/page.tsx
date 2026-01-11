import Topbar from "./topbar";

export default function Page() {
  return (
    <>
      <Topbar />

      <main
        style={{
          padding: 24,
          maxWidth: 900,
        }}
      >
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Soullytics Dashboard
        </h1>

        <p style={{ color: "#9CA3AF", marginBottom: 32 }}>
          Frontend is running successfully.
        </p>

        <div
          style={{
            background: "#111827",
            padding: 24,
            borderRadius: 12,
            border: "1px solid #1f2937",
          }}
        >
          <div style={{ fontSize: 13, color: "#9CA3AF" }}>
            System Status
          </div>
          <div style={{ marginTop: 8, fontSize: 16 }}>
            All systems operational. Ready to scale.
          </div>
        </div>
      </main>
    </>
  );
}
