export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at top left, #0B1A3A 0%, #060B18 45%, #02040A 100%)",
        color: "#EAF0FF",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section style={section}>
        <div style={eyebrow}>PAID MARKETING DECISION ENGINE</div>

        <h1 style={heroTitle}>
          Stop burning ad money.
          <br />
          <span style={{ color: "#4F7DFF" }}>Get a decision.</span>
        </h1>

        <p style={heroSub}>
          Soullytics judges ads <b>after they go live</b> and tells you —
          clearly and coldly — what to <b>RUN</b>, <b>SCALE</b>, <b>PAUSE</b> or{" "}
          <b>KILL</b>.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <button style={ctaPrimary}>See a real decision</button>
          <button style={ctaSecondary}>Login</button>
        </div>
      </section>

      {/* ================= WHY TEAMS LOSE ================= */}
      <section style={section}>
        <h2 style={h2}>Why most teams lose money</h2>

        <div style={grid}>
          {[
            "Dashboards look green while cash keeps bleeding",
            "Early spikes are mistaken for sustainable success",
            "Bad ads stay alive because no one wants to kill them",
            "Good ads die early due to fear, not data",
          ].map((text) => (
            <div key={text} style={diagnosticCard}>
              <div style={dangerBar} />
              <p style={diagnosticText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUTPUTS ================= */}
      <section style={section}>
        <h2 style={h2}>Soullytics gives only four outputs</h2>

        <div style={grid4}>
          <Decision label="RUN" color="#22C55E" />
          <Decision label="SCALE" color="#4F7DFF" />
          <Decision label="PAUSE" color="#FACC15" />
          <Decision label="KILL" color="#FF5A5A" />
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section style={{ ...section, textAlign: "center", paddingBottom: 160 }}>
        <h2 style={{ ...h2, marginBottom: 12 }}>
          Dashboards explain the past.
        </h2>
        <h2 style={{ ...h2, color: "#4F7DFF" }}>
          Soullytics decides the future.
        </h2>

        <button style={{ ...ctaPrimary, marginTop: 28 }}>
          Run the engine
        </button>
      </section>
    </main>
  );
}

/* ================= COMPONENT ================= */

function Decision({ label, color }: { label: string; color: string }) {
  return (
    <div
      style={{
        border: `1.5px solid ${color}`,
        borderRadius: 16,
        padding: 28,
        textAlign: "center",
        fontWeight: 800,
        fontSize: 20,
        color,
        background: "rgba(255,255,255,0.02)",
      }}
    >
      {label}
      <div style={{ fontSize: 12, fontWeight: 500, marginTop: 8, color: "#A9B6E6" }}>
        Clear, defensible decision
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const section = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "120px 16px",
};

const eyebrow = {
  color: "#7AA2FF",
  fontSize: 13,
  letterSpacing: 1,
};

const heroTitle = {
  fontSize: 44,
  fontWeight: 900,
  lineHeight: 1.1,
  marginTop: 12,
};

const heroSub = {
  maxWidth: 520,
  color: "#A9B6E6",
  fontSize: 16,
  marginTop: 20,
};

const h2 = {
  fontSize: 32,
  fontWeight: 800,
  marginBottom: 32,
};

const ctaPrimary = {
  background: "#4F7DFF",
  color: "#fff",
  border: "none",
  padding: "12px 20px",
  borderRadius: 10,
  fontWeight: 600,
  cursor: "pointer",
};

const ctaSecondary = {
  background: "transparent",
  color: "#EAF0FF",
  border: "1px solid #2A3A6A",
  padding: "12px 20px",
  borderRadius: 10,
  fontWeight: 600,
  cursor: "pointer",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
};

const grid4 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 20,
};

const diagnosticCard = {
  background: "#050914",
  border: "1px solid #1E2A55",
  borderRadius: 14,
  padding: 20,
  position: "relative" as const,
};

const dangerBar = {
  position: "absolute" as const,
  left: 0,
  top: 0,
  bottom: 0,
  width: 4,
  background: "linear-gradient(180deg, #FF5A5A, #7A1F1F)",
  borderRadius: "14px 0 0 14px",
};

const diagnosticText = {
  marginLeft: 12,
  color: "#A9B6E6",
  fontSize: 14,
};
