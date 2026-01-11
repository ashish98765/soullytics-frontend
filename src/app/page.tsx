export default function LandingPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B0F14",
        color: "#E5E7EB",
        padding: "60px 24px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
      >
        {/* LEFT — HERO */}
        <div>
          <h1
            style={{
              fontSize: 48,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Cold, Unemotional Decisions for Paid Growth.
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
              color: "#000000",
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
            Current Decision
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
            Confidence: <b style={{ color: "#E5E7EB" }}>87%</b>
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

      {/* SECTION — WHO IT’S FOR */}
      <section
        style={{
          marginTop: 140,
          maxWidth: 1200,
          marginInline: "auto",
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
          Built for teams who spend real money
        </div>

        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 40,
          }}
        >
          Who uses Soullytics
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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

      {/* SECTION — WHAT IT REPLACES */}
      <section
        style={{
          marginTop: 140,
          maxWidth: 900,
          marginInline: "auto",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: 32,
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          Replace guesswork with signals
        </h2>

        <p
          style={{
            fontSize: 18,
            color: "#9CA3AF",
            maxWidth: 640,
            marginInline: "auto",
            lineHeight: 1.7,
          }}
        >
          Soullytics replaces emotional calls, Slack debates and spreadsheet
          chaos with one cold decision engine.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 20,
            textAlign: "left",
          }}
        >
          {[
            "“Let’s wait one more day”",
            "“I feel this campaign might work”",
            "“CTR looks okay but…”",
            "Endless dashboards with no answer",
          ].map((text) => (
            <div
              key={text}
              style={{
                background: "#0B1220",
                borderRadius: 12,
                padding: 16,
                fontSize: 14,
                color: "#D1D5DB",
              }}
            >
              ❌ {text}
            </div>
          ))}
        </div>
      </section>
      {/* SECTION — HOW IT WORKS */}
<section
  style={{
    marginTop: 140,
    maxWidth: 1100,
    marginInline: "auto",
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
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 28,
    }}
  >
    {/* STEP 1 */}
    <div
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
        STEP 01
      </div>

      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Ingest Signals
      </div>

      <p
        style={{
          fontSize: 14,
          color: "#9CA3AF",
          lineHeight: 1.6,
        }}
      >
        Soullytics continuously reads CPA, CTR, CVR, spend velocity, volatility
        and trend direction — not vanity metrics.
      </p>
    </div>

    {/* STEP 2 */}
    <div
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
        STEP 02
      </div>

      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Evaluate Reality
      </div>

      <p
        style={{
          fontSize: 14,
          color: "#9CA3AF",
          lineHeight: 1.6,
        }}
      >
        The engine checks statistical stability, momentum and risk. No stories.
        No hope. Just probabilities.
      </p>
    </div>

    {/* STEP 3 */}
    <div
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
        STEP 03
      </div>

      <div
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Output Decision
      </div>

      <p
        style={{
          fontSize: 14,
          color: "#9CA3AF",
          lineHeight: 1.6,
        }}
      >
        One answer: <b>RUN</b>, <b>SCALE</b>, <b>PAUSE</b> or <b>KILL</b> — with a
        confidence score you can defend.
      </p>
    </div>
  </div>
</section>
      {/* SECTION — WHY SOULLYTICS IS DIFFERENT */}
<section
  style={{
    marginTop: 140,
    maxWidth: 1100,
    marginInline: "auto",
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
    Why Soullytics
  </div>

  <h2
    style={{
      fontSize: 36,
      fontWeight: 800,
      marginBottom: 56,
    }}
  >
    Built to say no.
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 32,
    }}
  >
    {/* LEFT — OLD WORLD */}
    <div
      style={{
        background: "#0B1220",
        border: "1px solid #1F2937",
        borderRadius: 16,
        padding: 28,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          marginBottom: 16,
          color: "#9CA3AF",
        }}
      >
        The old way
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 14,
          fontSize: 15,
          color: "#9CA3AF",
        }}
      >
        <li>• Dashboards that describe the past</li>
        <li>• Agencies selling optimism</li>
        <li>• Gut decisions under pressure</li>
        <li>• Scaling because “it feels right”</li>
        <li>• Killing winners too early</li>
        <li>• Letting losers burn cash</li>
      </ul>
    </div>

    {/* RIGHT — SOULLYTICS */}
    <div
      style={{
        background: "linear-gradient(180deg, #0F1623, #0B1220)",
        border: "1px solid #1F2937",
        borderRadius: 16,
        padding: 28,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          marginBottom: 16,
        }}
      >
        The Soullytics way
      </div>

      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gap: 14,
          fontSize: 15,
        }}
      >
        <li>• Decisions, not charts</li>
        <li>• No emotional attachment</li>
        <li>• Statistical confidence scores</li>
        <li>• Clear RUN / SCALE / PAUSE / KILL</li>
        <li>• Protects capital first</li>
        <li>• Scales only when reality agrees</li>
      </ul>
    </div>
  </div>

  <div
    style={{
      marginTop: 48,
      fontSize: 16,
      color: "#9CA3AF",
      maxWidth: 720,
    }}
  >
    Soullytics is not here to make you feel good.
    <br />
    It’s here to stop you from lying to yourself.
  </div>
</section>
    </main>
  );
}
