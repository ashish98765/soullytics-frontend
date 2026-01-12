"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0B1220 0%, #020617 70%)",
        color: "#E5E7EB",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 16px" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ color: "#60A5FA", fontSize: 12, letterSpacing: 1 }}>
            PAID MARKETING DECISION ENGINE
          </div>

          <h1 style={{ fontSize: 44, fontWeight: 900, margin: "12px 0" }}>
            Stop burning ad money. <br />
            <span style={{ color: "#3B82F6" }}>Get a decision.</span>
          </h1>

          <p style={{ color: "#9CA3AF", maxWidth: 520, fontSize: 16 }}>
            Soullytics analyzes live ads using a cold, rule-based engine and
            tells you — without emotion — what to{" "}
            <b>RUN, SCALE, PAUSE or KILL.</b>
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button style={primaryBtn}>See a real decision</button>
            <button style={ghostBtn}>Login</button>
          </div>
        </motion.div>
      </section>

      {/* ================= REALITY TIMELINE ================= */}
      <section style={section}>
        <h2 style={h2}>What actually happens without Soullytics</h2>

        <div style={grid}>
          {[
            "Day 3: Dashboard looks green",
            "Day 7: Spend increases, confidence increases",
            "Day 12: Volatility spikes (ignored)",
            "Day 18: CPA drifts silently",
            "Day 26: Budget burned, answers missing",
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={dangerCard}
            >
              {t}
            </motion.div>
          ))}
        </div>

        <p style={muted}>
          Dashboards explain the past. They don’t stop losses.
        </p>
      </section>

      {/* ================= ENGINE STRIP ================= */}
      <section style={section}>
        <h2 style={h2}>What’s actually running under the hood</h2>

        <div style={engineStrip}>
          {[
            "Audience Saturation",
            "Creative Fatigue",
            "False-Positive Detection",
            "Burn Rate Logic",
            "Momentum Decay",
            "Platform Bias",
            "Capital Protection",
            "Human Override Risk",
            "Cold Start Immunity",
            "Decision Confidence Validator",
          ].map((e, i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15 }}
              style={engineTag}
            >
              {e}
            </motion.span>
          ))}
        </div>

        <p style={muted}>
          40+ independent rules collapse into one outcome. No charts. No stories.
        </p>
      </section>

      {/* ================= DECISIONS ================= */}
      <section style={section}>
        <h2 style={h2}>Soullytics outputs only four decisions</h2>

        <div style={grid}>
          <div style={{ ...decisionCard, borderColor: "#22C55E" }}>
            <h3 style={{ color: "#22C55E" }}>RUN</h3>
            <p>Reality agrees. Execute confidently.</p>
          </div>

          <div style={{ ...decisionCard, borderColor: "#3B82F6" }}>
            <h3 style={{ color: "#3B82F6" }}>SCALE</h3>
            <p>Signal strength supports growth.</p>
          </div>

          <div style={{ ...decisionCard, borderColor: "#FACC15" }}>
            <h3 style={{ color: "#FACC15" }}>PAUSE</h3>
            <p>Uncertainty detected. Wait.</p>
          </div>

          <div style={{ ...decisionCard, borderColor: "#EF4444" }}>
            <h3 style={{ color: "#EF4444" }}>KILL</h3>
            <p>Capital at risk. Cut immediately.</p>
          </div>
        </div>
      </section>

      {/* ================= 7 DAY CHANGE ================= */}
      <section style={section}>
        <h2 style={h2}>What changes in 7 days</h2>

        <div style={grid}>
          {[
            "You stop arguing with dashboards",
            "Bad ads die faster",
            "Confidence replaces hope",
            "Spend becomes intentional",
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={successCard}
            >
              {t}
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <h3 style={{ fontSize: 22 }}>
            Dashboards explain the past. <br />
            <span style={{ color: "#3B82F6" }}>
              Soullytics decides the future.
            </span>
          </h3>

          <button style={{ ...primaryBtn, marginTop: 24 }}>
            Run the engine
          </button>
        </div>
      </section>
    </main>
  );
}

/* ================= STYLES ================= */

const section = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "80px 16px",
};

const h2 = {
  fontSize: 28,
  fontWeight: 800,
  marginBottom: 32,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 20,
};

const muted = {
  color: "#9CA3AF",
  marginTop: 24,
  maxWidth: 520,
};

const primaryBtn = {
  background: "#2563EB",
  color: "#fff",
  border: "none",
  padding: "12px 18px",
  borderRadius: 10,
  fontWeight: 600,
  cursor: "pointer",
};

const ghostBtn = {
  background: "transparent",
  color: "#E5E7EB",
  border: "1px solid #1F2937",
  padding: "12px 18px",
  borderRadius: 10,
  cursor: "pointer",
};

const dangerCard = {
  background: "#0B1220",
  border: "1px solid #7F1D1D",
  borderRadius: 14,
  padding: 20,
  color: "#FCA5A5",
};

const successCard = {
  background: "#0B1220",
  border: "1px solid #14532D",
  borderRadius: 14,
  padding: 20,
  color: "#86EFAC",
};

const decisionCard = {
  background: "#020617",
  border: "2px solid",
  borderRadius: 16,
  padding: 24,
};

const engineStrip = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: 12,
};

const engineTag = {
  background: "#020617",
  border: "1px solid #1F2937",
  padding: "8px 12px",
  borderRadius: 999,
  fontSize: 13,
};
