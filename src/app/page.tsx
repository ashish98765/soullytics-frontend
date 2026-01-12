export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at top left, #0B1A3A 0%, #060B18 40%, #02040A 100%)",
        color: "#EAF0FF",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 16px 80px" }}>
        <div style={{ color: "#7AA2FF", fontSize: 13, letterSpacing: 1 }}>
          PAID MARKETING DECISION ENGINE
        </div>

        <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, marginTop: 12 }}>
          Stop burning ad money.
          <br />
          <span style={{ color: "#4F7DFF" }}>Get a decision.</span>
        </h1>

        <p style={{ maxWidth: 520, color: "#A9B6E6", fontSize: 16, marginTop: 20 }}>
          Soullytics watches your ads after they go live and tells you — clearly
          and coldly — what to <b>RUN</b>, <b>SCALE</b>, <b>PAUSE</b> or <b>KILL</b>.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
          <button style={ctaPrimary}>See a real decision</button>
          <button style={ctaSecondary}>Login</button>
        </div>
      </section>

      {/* ================= DECISION DEMO ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <h2 style={h2}>This is what Soullytics actually does</h2>

        <div style={decisionCard}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div style={label}>Campaign</div>
              <div style={value}>META_US_CREATIVE_07</div>
            </div>
            <div>
              <div style={label}>Confidence</div>
              <div style={{ ...value, color: "#FF5A5A" }}>91%</div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={label}>Decision</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#FF5A5A" }}>
              ❌ KILL
            </div>
          </div>

          <ul style={reasonList}>
            <li>CPA volatility exceeded recovery threshold</li>
            <li>Creative fatigue detected on day 4</li>
            <li>No statistically valid rebound probability</li>
          </ul>

          <div style={footnote}>No charts. No opinions. Just a decision.</div>
        </div>
      </section>

      {/* ================= WHY TEAMS LOSE ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <h2 style={h2}>Why most teams lose money</h2>

        <div style={grid3}>
          {[
            "Dashboards look green while cash still bleeds",
            "Early spikes get mistaken for success",
            "Bad ads stay alive because of hope",
            "Good ads die because of fear",
          ].map((t) => (
            <div key={t} style={problemCard}>
              ❌ {t}
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUTPUTS ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <h2 style={h2}>Soullytics gives only four outputs</h2>

        <div style={grid4}>
          <div style={{ ...outputCard, borderColor: "#22C55E", color: "#22C55E" }}>
            RUN
          </div>
          <div style={{ ...outputCard, borderColor: "#4F7DFF", color: "#4F7DFF" }}>
            SCALE
          </div>
          <div style={{ ...outputCard, borderColor: "#FACC15", color: "#FACC15" }}>
            PAUSE
          </div>
          <div style={{ ...outputCard, borderColor: "#FF5A5A", color: "#FF5A5A" }}>
            KILL
          </div>
        </div>
      </section>

      {/* ================= ENGINE DEPTH ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <h2 style={h2}>This is not a dashboard. It’s a system.</h2>

        <div style={grid3}>
          {[
            "Budget Reality Engine",
            "Creative Fatigue Detection",
            "Signal Quality Validator",
            "Capital Protection Layer",
            "Human Override Risk Check",
            "Decision Confidence Validator",
          ].map((e) => (
            <div key={e} style={engineCard}>
              {e}
            </div>
          ))}
        </div>
      </section>

      {/* ================= EXCLUSION ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 160px" }}>
        <h2 style={h2}>Soullytics is not for everyone</h2>

        <div style={grid2}>
          <div style={exclusionCard}>
            <b>Not for you if:</b>
            <ul>
              <li>You want motivation</li>
              <li>You trust gut feelings</li>
              <li>You hate killing ideas</li>
            </ul>
          </div>

          <div style={inclusionCard}>
            <b>For you if:</b>
            <ul>
              <li>You respect math over ego</li>
              <li>You kill fast to win bigger</li>
              <li>You treat ads like capital allocation</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 60 }}>
          <button style={ctaPrimary}>Run the engine</button>
        </div>
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

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

const h2 = {
  fontSize: 32,
  fontWeight: 800,
  marginBottom: 32,
};

const decisionCard = {
  background: "linear-gradient(180deg, #0B1228, #050914)",
  border: "1px solid #1E2A55",
  borderRadius: 16,
  padding: 28,
  maxWidth: 520,
};

const label = { fontSize: 12, color: "#8FA2E8" };
const value = { fontSize: 14, fontWeight: 600 };

const reasonList = {
  marginTop: 16,
  paddingLeft: 18,
  color: "#A9B6E6",
  fontSize: 14,
};

const footnote = {
  marginTop: 16,
  fontSize: 12,
  color: "#6F7DB8",
};

const grid3 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 20,
};

const grid4 = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 20,
};

const grid2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,
};

const problemCard = {
  background: "#050914",
  border: "1px solid #1E2A55",
  borderRadius: 14,
  padding: 18,
  color: "#A9B6E6",
};

const outputCard = {
  border: "2px solid",
  borderRadius: 16,
  padding: 32,
  textAlign: "center" as const,
  fontSize: 20,
  fontWeight: 800,
};

const engineCard = {
  background: "#050914",
  border: "1px solid #1E2A55",
  borderRadius: 14,
  padding: 20,
  fontWeight: 600,
};

const exclusionCard = {
  background: "#12060A",
  border: "1px solid #402028",
  borderRadius: 16,
  padding: 24,
};

const inclusionCard = {
  background: "#06120B",
  border: "1px solid #1E4030",
  borderRadius: 16,
  padding: 24,
};
