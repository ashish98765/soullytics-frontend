"use client";

import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B0F14",
        color: "#E5E7EB",
        padding: isMobile ? "40px 16px" : "80px 24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* LEFT — HERO */}
        <div>
          <h1
            style={{
              fontSize: isMobile ? 34 : 48,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Cold, unemotional decisions for paid growth.
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "#9CA3AF",
              maxWidth: 520,
              marginBottom: 32,
              lineHeight: 1.7,
            }}
          >
            Soullytics tells you when to <b>RUN</b>, <b>SCALE</b>,{" "}
            <b>PAUSE</b> or <b>KILL</b> ads — using signals, not hope.
          </p>

          <button
            style={{
              background: "#FFFFFF",
              color: "#0B0F14",
              padding: "14px 28px",
              fontSize: 16,
              fontWeight: 700,
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
            }}
          >
            Request Early Access
          </button>

          <p
            style={{
              marginTop: 12,
              fontSize: 13,
              color: "#6B7280",
            }}
          >
            Limited beta. No spam.
          </p>
        </div>

        {/* RIGHT — DECISION CARD */}
        <div
          style={{
            background: "#0F1623",
            borderRadius: 16,
            padding: 28,
            border: "1px solid #1F2937",
          }}
        >
          <div
            style={{
              fontSize: 13,
              color: "#9CA3AF",
              marginBottom: 8,
            }}
          >
            Current decision
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 800,
              color: "#22C55E",
              marginBottom: 12,
            }}
          >
            RUN
          </div>

          <div
            style={{
              fontSize: 14,
              color: "#9CA3AF",
              marginBottom: 20,
            }}
          >
            Confidence:{" "}
            <b style={{ color: "#E5E7EB" }}>87%</b>
          </div>

          <div
            style={{
              background: "#0B1220",
              padding: 16,
              borderRadius: 10,
              fontSize: 14,
              lineHeight: 1.6,
              color: "#D1D5DB",
            }}
          >
            Performance signals indicate stable CPA, improving CTR and
            conversion momentum. Scaling is statistically justified.
          </div>
        </div>
      </div>

      {/* BELOW SECTIONS */}
      <section
        style={{
          marginTop: 140,
          maxWidth: 1200,
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 13,
            letterSpacing: 1,
            color: "#6B7280",
            marginBottom: 12,
            textTransform: "uppercase",
          }}
        >
          How it works
        </div>

        <h2
          style={{
            fontSize: 36,
            fontWeight: 800,
            marginBottom: 48,
          }}
        >
          Three steps. Zero emotion.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {[
            {
              step: "STEP 01",
              title: "Ingest signals",
              desc:
                "Reads CPA, CTR, CVR, spend velocity, volatility and trend direction — not vanity metrics.",
            },
            {
              step: "STEP 02",
              title: "Evaluate reality",
              desc:
                "Checks statistical stability, momentum and risk. No stories. No hope. Just probabilities.",
            },
            {
              step: "STEP 03",
              title: "Output decision",
              desc:
                "One answer: RUN, SCALE, PAUSE or KILL — with a confidence score you can defend.",
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                background: "#0F1623",
                border: "1px solid #1F2937",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "#6B7280",
                  marginBottom: 8,
                }}
              >
                {item.step}
              </div>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  marginBottom: 12,
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#9CA3AF",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
