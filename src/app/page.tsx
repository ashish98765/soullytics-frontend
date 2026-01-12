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
          "radial-gradient(circle at top, #0b1b3a 0%, #05070f 60%)",
        color: "#E6ECFF",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* ================= HERO ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 16px" }}>
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div style={{ color: "#6AA6FF", fontSize: 12, letterSpacing: 1.2 }}>
            PAID MARKETING DECISION ENGINE
          </div>

          <h1 style={{ fontSize: 46, fontWeight: 900, margin: "12px 0" }}>
            Stop burning ad money.
            <br />
            <span style={{ color: "#6AA6FF" }}>Get a decision.</span>
          </h1>

          <p style={{ color: "#9AA6C9", maxWidth: 520, fontSize: 16 }}>
            Your dashboards show numbers.  
            <br />
            <b>Soullytics shows reality.</b>
          </p>

          <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
            <button
              style={{
                background: "#3B82F6",
                color: "#fff",
                border: "none",
                padding: "14px 20px",
                borderRadius: 10,
                fontWeight: 600,
              }}
            >
              See a real decision
            </button>
            <button
              style={{
                background: "transparent",
                color: "#E6ECFF",
                border: "1px solid #1F2A44",
                padding: "14px 20px",
                borderRadius: 10,
              }}
            >
              Login
            </button>
          </div>
        </motion.div>
      </section>

      {/* ================= WHY TEAMS LOSE ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          style={{ fontSize: 28, marginBottom: 32 }}
        >
          Why most teams lose money
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {[
            "Dashboards look green while cash keeps bleeding",
            "Early spikes get mistaken for real success",
            "Bad ads survive because killing feels scary",
            "Good ads die early due to human fear",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              style={{
                background: "#0A1224",
                border: "1px solid #2B3A5F",
                borderRadius: 14,
                padding: 22,
                color: "#B8C2E6",
              }}
            >
              {text}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= ENGINE ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          style={{ fontSize: 28, marginBottom: 40 }}
        >
          How the Soullytics engine works
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {[
            {
              title: "Signal ingestion",
              desc: "CTR, CPA, CVR, spend velocity, volatility, fatigue, platform bias.",
            },
            {
              title: "Reality checks",
              desc: "False-positive detection, momentum decay, risk thresholds.",
            },
            {
              title: "Decision synthesis",
              desc: "40+ rules collapse chaos into one cold outcome.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              style={{
                background: "#0F162D",
                border: "1px solid #1F2A44",
                borderRadius: 16,
                padding: 26,
              }}
            >
              <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "#9AA6C9", fontSize: 14 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= OUTPUT ================= */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 120px" }}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          style={{ fontSize: 28, marginBottom: 32 }}
        >
          Soullytics outputs only four decisions
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {[
            { label: "RUN", color: "#22C55E" },
            { label: "SCALE", color: "#3B82F6" },
            { label: "PAUSE", color: "#FACC15" },
            { label: "KILL", color: "#EF4444" },
          ].map((d) => (
            <motion.div
              key={d.label}
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              style={{
                border: `1px solid ${d.color}`,
                borderRadius: 16,
                padding: 26,
                textAlign: "center",
              }}
            >
              <div style={{ color: d.color, fontWeight: 800 }}>{d.label}</div>
              <div style={{ fontSize: 13, color: "#9AA6C9", marginTop: 8 }}>
                Clear, defensible decision
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section style={{ textAlign: "center", paddingBottom: 120 }}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          style={{ fontSize: 32 }}
        >
          Dashboards explain the past.
          <br />
          <span style={{ color: "#6AA6FF" }}>Soullytics decides the future.</span>
        </motion.h2>

        <button
          style={{
            marginTop: 28,
            background: "#3B82F6",
            color: "#fff",
            border: "none",
            padding: "14px 22px",
            borderRadius: 12,
            fontWeight: 700,
          }}
        >
          Run the engine
        </button>
      </section>
    </main>
  );
}
