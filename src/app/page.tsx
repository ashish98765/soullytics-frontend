"use client";

export default function LandingPage() {
  const isMobile =
    typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B0F14",
        color: "#E5E7EB",
        padding: isMobile ? "40px 20px" : "60px 24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200 }}>

        {/* ================= HERO ================= */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 32 : 64,
            alignItems: "center",
          }}
        >
          {/* LEFT */}
          <div>
            <h1
              style={{
                fontSize: isMobile ? 32 : 48,
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              Cold, unemotional decisions for paid growth.
            </h1>

            <p
              style={{
                fontSize: isMobile ? 16 : 18,
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

            <div
              style={{
                marginTop: 12,
                fontSize: 13,
                color: "#6B7280",
              }}
            >
              Limited beta. No spam.
            </div>
          </div>

          {/* RIGHT – DECISION CARD */}
          <div
            style={{
              background: "#0F1623",
              border: "1px solid #1F2937",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <div style={{ fontSize: 13, color: "#9CA3AF" }}>
              Current Decision
            </div>

            <div
              style={{
                fontSize: 36,
                fontWeight: 800,
                color: "#22C55E",
                margin: "12px 0",
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
              Confidence: <b style={{ color: "#E5E7EB" }}>87%</b>
            </div>

            <div
              style={{
                background: "#0B1220",
                padding: 16,
                borderRadius: 10,
                fontSize: 14,
                color: "#D1D5DB",
                lineHeight: 1.6,
              }}
            >
              Performance signals indicate stable CPA, improving CTR and
              conversion momentum. Scaling is statistically justified.
            </div>
          </div>
        </section>

        {/* ================= WHO USES ================= */}
        <section
          style={{
            marginTop: isMobile ? 80 : 140,
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
            Built for teams who spend real money
          </div>

          <h2
            style={{
              fontSize: isMobile ? 28 : 36,
              fontWeight: 800,
              marginBottom: 40,
            }}
          >
            Who uses Soullytics
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {[
              {
                title: "Founders",
                desc: "Stop guessing. Know exactly when to scale or kill ads.",
              },
              {
                title: "Performance Marketers",
                desc: "Defend decisions with data, not gut feelings.",
              },
              {
                title: "Growth Teams",
                desc: "Align spend with signals across channels.",
              },
              {
                title: "Agencies",
                desc: "Show clients cold, defensible decisions.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#0F1623",
                  border: "1px solid #1F2937",
                  borderRadius: 14,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "#9CA3AF",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section
          style={{
            marginTop: isMobile ? 80 : 140,
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
              fontSize: isMobile ? 28 : 36,
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
                title: "Ingest Signals",
                desc: "Reads CPA, CTR, CVR, spend velocity and volatility — not vanity metrics.",
              },
              {
                step: "STEP 02",
                title: "Evaluate Reality",
                desc: "Checks statistical stability, momentum and risk. No stories. Just probabilities.",
              },
              {
                step: "STEP 03",
                title: "Output Decision",
                desc: "One answer: RUN, SCALE, PAUSE or KILL — with a confidence score.",
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
                <div
                  style={{
                    fontSize: 14,
                    color: "#9CA3AF",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FOOTER MESSAGE ================= */}
        <section
          style={{
            marginTop: isMobile ? 80 : 140,
            textAlign: "center",
            color: "#9CA3AF",
            fontSize: 16,
            maxWidth: 720,
            marginInline: "auto",
          }}
        >
          Soullytics is not here to make you feel good. <br />
          It’s here to stop you from lying to yourself.
        </section>
      </div>
    </main>
  );
}
