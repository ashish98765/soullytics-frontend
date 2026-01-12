"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% -10%, #1e3a8a22, transparent), radial-gradient(800px 500px at 80% 10%, #22c55e22, transparent), #020617",
        color: "#E5E7EB",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "120px 20px 80px" }}>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          style={{
            color: "#60A5FA",
            letterSpacing: 1,
            fontSize: 12,
            marginBottom: 16,
          }}
        >
          PAID MARKETING DECISION ENGINE
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 44,
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Stop burning ad money.
          <br />
          <span style={{ color: "#3B82F6" }}>Get a decision.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: "#9CA3AF",
            maxWidth: 560,
            fontSize: 16,
            marginBottom: 32,
          }}
        >
          Soullytics analyzes live ads using a cold, rule-based engine and tells you —
          without emotion — what to <b>RUN</b>, <b>SCALE</b>, <b>PAUSE</b> or <b>KILL</b>.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: "flex", gap: 12 }}
        >
          <button
            style={{
              background: "#2563EB",
              color: "#fff",
              padding: "12px 20px",
              borderRadius: 10,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            See a real decision
          </button>
          <button
            style={{
              background: "transparent",
              color: "#E5E7EB",
              padding: "12px 20px",
              borderRadius: 10,
              border: "1px solid #1F2937",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </motion.div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, marginBottom: 32 }}>
          How the Soullytics engine works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {[
            {
              title: "Signal ingestion",
              text: "CTR, CPA, CVR, spend velocity, volatility, fatigue, platform bias, audience saturation.",
            },
            {
              title: "Reality checks",
              text: "Statistical stability, false-positive detection, momentum decay, risk thresholds.",
            },
            {
              title: "Decision synthesis",
              text: "40+ decision rules collapse everything into one cold outcome. No charts. No stories.",
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -6 }}
              style={{
                background: "#020617",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <h3 style={{ fontSize: 18, marginBottom: 8 }}>{c.title}</h3>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHAT IT EVALUATES ================= */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 20px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24 }}>
          What Soullytics evaluates
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[
            "Creative performance & fatigue",
            "Audience match & saturation",
            "Budget efficiency & burn rate",
            "Platform bias & volatility",
            "Scaling readiness & risk",
            "Capital protection logic",
          ].map((t) => (
            <span
              key={t}
              style={{
                padding: "8px 14px",
                borderRadius: 999,
                background: "#020617",
                border: "1px solid #1F2937",
                color: "#9CA3AF",
                fontSize: 13,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ================= WHY TEAMS LOSE ================= */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 20px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 24 }}>
          Why most teams lose money
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {[
            "Dashboards look green while cash keeps bleeding",
            "Early spikes are mistaken for real success",
            "Bad ads survive because killing feels scary",
            "Good ads die early due to human fear",
          ].map((t) => (
            <div
              key={t}
              style={{
                background: "#020617",
                border: "1px solid #7f1d1d",
                borderLeft: "4px solid #ef4444",
                borderRadius: 14,
                padding: 20,
                color: "#FCA5A5",
                fontSize: 14,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ================= OUTPUTS ================= */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px" }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, marginBottom: 32 }}>
          Soullytics outputs only four decisions
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {[
            { t: "RUN", c: "#22c55e" },
            { t: "SCALE", c: "#3b82f6" },
            { t: "PAUSE", c: "#facc15" },
            { t: "KILL", c: "#ef4444" },
          ].map((d) => (
            <motion.div
              key={d.t}
              whileHover={{ scale: 1.04 }}
              style={{
                border: `1px solid ${d.c}`,
                borderRadius: 16,
                padding: 24,
                textAlign: "center",
              }}
            >
              <h3 style={{ color: d.c, fontSize: 20, marginBottom: 8 }}>
                {d.t}
              </h3>
              <p style={{ color: "#9CA3AF", fontSize: 14 }}>
                Clear, defensible decision.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px 120px",
        }}
      >
        <h2 style={{ fontSize: 30, fontWeight: 900, marginBottom: 16 }}>
          Dashboards explain the past.
          <br />
          <span style={{ color: "#3B82F6" }}>
            Soullytics decides the future.
          </span>
        </h2>
        <button
          style={{
            marginTop: 24,
            background: "#2563EB",
            color: "#fff",
            padding: "14px 26px",
            borderRadius: 12,
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
          }}
        >
          Run the engine
        </button>
      </section>
    </main>
  );
}
