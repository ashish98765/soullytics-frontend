// src/app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0B0F14",
        color: "#E5E7EB",
        padding: "80px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ fontSize: 42, fontWeight: 700, marginBottom: 16 }}>
          Replace guesswork with signals.
        </h1>
        <p style={{ fontSize: 18, color: "#9CA3AF", maxWidth: 700 }}>
          Soullytics replaces emotional calls, Slack debates and spreadsheet chaos
          with one cold decision engine.
        </p>

        <div style={{ marginTop: 32 }}>
          <Link
            href="/login"
            style={{
              padding: "12px 20px",
              background: "#2563EB",
              borderRadius: 8,
              color: "#fff",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Get started
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ maxWidth: 1100, margin: "100px auto 0" }}>
        <h2 style={{ fontSize: 28, marginBottom: 32 }}>
          Three steps. Zero emotion.
        </h2>

        <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          <Card
            title="Ingest signals"
            text="CPA, CTR, CVR, spend velocity, volatility — not vanity metrics."
          />
          <Card
            title="Evaluate reality"
            text="Statistical stability, momentum and risk. No stories. Just probabilities."
          />
          <Card
            title="Output decision"
            text="RUN, SCALE, PAUSE or KILL — with a confidence score."
          />
        </div>
      </section>

      {/* WHY */}
      <section style={{ maxWidth: 1100, margin: "100px auto 0" }}>
        <h2 style={{ fontSize: 28, marginBottom: 24 }}>
          Built to say no.
        </h2>
        <p style={{ color: "#9CA3AF", maxWidth: 700 }}>
          Soullytics is not here to make you feel good.
          It’s here to stop you from lying to yourself.
        </p>
      </section>

      {/* FOOTER CTA */}
      <section style={{ maxWidth: 1100, margin: "120px auto 0" }}>
        <Link
          href="/login"
          style={{
            padding: "14px 24px",
            background: "#111827",
            border: "1px solid #1F2937",
            borderRadius: 10,
            color: "#E5E7EB",
            textDecoration: "none",
          }}
        >
          People who respect reality → Login
        </Link>
      </section>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        background: "#0F1623",
        border: "1px solid #1F2937",
        borderRadius: 12,
        padding: 20,
      }}
    >
      <h3 style={{ marginBottom: 8 }}>{title}</h3>
      <p style={{ color: "#9CA3AF", fontSize: 14 }}>{text}</p>
    </div>
  );
}
