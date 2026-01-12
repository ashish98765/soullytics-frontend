export default function Page() {
  return (
    <main style={bg}>
      {/* ================= HERO ================= */}
      <section style={sectionTight}>
        <div style={eyebrow}>PAID MARKETING DECISION ENGINE</div>

        <h1 style={heroTitle}>
          Stop burning ad money.
          <br />
          <span style={{ color: "#4F7DFF" }}>Get a decision.</span>
        </h1>

        <p style={heroSub}>
          Soullytics analyzes live ads using a rule-based AI engine and tells you
          — without emotion — what to <b>RUN</b>, <b>SCALE</b>, <b>PAUSE</b> or{" "}
          <b>KILL</b>.
        </p>

        <div style={ctaRow}>
          <button style={ctaPrimary}>See a real decision</button>
          <button style={ctaSecondary}>Login</button>
        </div>
      </section>

      {/* ================= ENGINE ================= */}
      <section style={section}>
        <h2 style={h2}>How the Soullytics engine works</h2>

        <div style={grid3}>
          <EngineCard
            title="Signal ingestion"
            text="CTR, CPA, CVR, spend velocity, volatility, fatigue, platform bias, audience saturation."
          />
          <EngineCard
            title="Reality checks"
            text="Statistical stability, false-positive detection, momentum decay, risk thresholds."
          />
          <EngineCard
            title="Decision synthesis"
            text="40+ decision rules combine into a single cold outcome — no charts, no stories."
          />
        </div>
      </section>

      {/* ================= METRICS ================= */}
      <section style={sectionTight}>
        <h2 style={h2}>What Soullytics evaluates</h2>

        <div style={grid}>
          {[
            "Creative performance & fatigue",
            "Audience match & saturation",
            "Budget efficiency & burn rate",
            "Platform bias & volatility",
            "Scaling readiness & risk",
            "Capital protection logic",
          ].map((t) => (
            <div key={t} style={metricChip}>{t}</div>
          ))}
        </div>
      </section>

      {/* ================= FAILURES ================= */}
      <section style={section}>
        <h2 style={h2}>Why most teams lose money</h2>

        <div style={grid}>
          {[
            "Dashboards look green while cash keeps bleeding",
            "Early spikes are mistaken for real success",
            "Bad ads survive because killing feels scary",
            "Good ads die early due to human fear",
          ].map((text) => (
            <div key={text} style={diagnosticCard}>
              <div style={dangerBar} />
              <p style={diagnosticText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUTPUT ================= */}
      <section style={sectionTight}>
        <h2 style={h2}>Soullytics outputs only four decisions</h2>

        <div style={grid4}>
          <Decision label="RUN" color="#22C55E" />
          <Decision label="SCALE" color="#4F7DFF" />
          <Decision label="PAUSE" color="#FACC15" />
          <Decision label="KILL" color="#FF5A5A" />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section style={finalSection}>
        <h2 style={finalTitle}>
          Dashboards explain the past.
          <br />
          <span style={{ color: "#4F7DFF" }}>
            Soullytics decides the future.
          </span>
        </h2>

        <button style={{ ...ctaPrimary, marginTop: 24 }}>
          Run the engine
        </button>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function EngineCard({ title, text }: { title: string; text: string }) {
  return (
    <div style={engineCard}>
      <h3 style={engineTitle}>{title}</h3>
      <p style={engineText}>{text}</p>
    </div>
  );
}

function Decision({ label, color }: { label: string; color: string }) {
  return (
    <div style={{ ...decisionCard, borderColor: color, color }}>
      {label}
      <div style={decisionSub}>Clear, defensible decision</div>
    </div>
  );
}

/* ================= STYLES ================= */

const bg = {
  minHeight: "100vh",
  background:
    "radial-gradient(900px 500px at top left, #0B1A3A 0%, #060B18 50%, #02040A 100%)",
  color: "#EAF0FF",
  fontFamily: "Inter, system-ui, sans-serif",
};

const section = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "96px 16px",
};

const sectionTight = {
  ...section,
  padding: "72px 16px",
};

const finalSection = {
  ...section,
  textAlign: "center" as const,
  paddingBottom: 140,
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
  maxWidth: 560,
  color: "#A9B6E6",
  fontSize: 16,
  marginTop: 18,
};

const h2 = {
  fontSize: 30,
  fontWeight: 800,
  marginBottom: 28,
};

const finalTitle = {
  fontSize: 32,
  fontWeight: 900,
};

const ctaRow = {
  display: "flex",
  gap: 12,
  marginTop: 26,
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
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 18,
};

const grid3 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 20,
};

const grid4 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 18,
};

const engineCard = {
  background: "#050914",
  border: "1px solid #1E2A55",
  borderRadius: 16,
  padding: 24,
};

const engineTitle = {
  fontSize: 18,
  fontWeight: 700,
  marginBottom: 10,
};

const engineText = {
  fontSize: 14,
  color: "#A9B6E6",
};

const metricChip = {
  background: "#050914",
  border: "1px solid #1E2A55",
  borderRadius: 999,
  padding: "10px 14px",
  fontSize: 13,
  color: "#A9B6E6",
};

const diagnosticCard = {
  background: "#050914",
  border: "1px solid #1E2A55",
  borderRadius: 14,
  padding: 18,
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
  fontSize: 14,
  color: "#A9B6E6",
};

const decisionCard = {
  border: "1.5px solid",
  borderRadius: 16,
  padding: 26,
  textAlign: "center" as const,
  fontWeight: 800,
  fontSize: 20,
  background: "rgba(255,255,255,0.02)",
};

const decisionSub = {
  fontSize: 12,
  fontWeight: 500,
  marginTop: 8,
  color: "#A9B6E6",
};
