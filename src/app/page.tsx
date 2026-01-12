import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-indigo-500/30 text-indigo-400 text-sm">
          Ads Operating System
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Stop Guessing Ads.<br />
          <span className="text-indigo-400">
            Make Decisions With Proof.
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
          Soullytics connects to your Google Ads and Meta Ads,
          analyzes real performance data, predicts risk,
          and tells you exactly when to <b>RUN</b>, <b>PAUSE</b>,
          <b>STOP</b>, or <b>SCALE</b> — with clear reasons
          and money impact.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition font-medium">
            Analyze Your Ads
          </button>
          <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition">
            See How It Works
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          2 ads free · No credit card required
        </p>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="bg-[#0F1424] py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Ads Fail Because Decisions Are Emotional
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Most advertisers scale ads because of temporary spikes,
              pause ads too early out of fear,
              or keep burning money hoping things will improve.
              <br /><br />
              Dashboards show numbers.
              They don’t tell you what decision to take.
            </p>
          </div>

          <div className="bg-[#0B0F1A] border border-white/10 rounded-xl p-6">
            <ul className="space-y-4 text-gray-300">
              <li>• “CTR is high but sales are low”</li>
              <li>• “ROAS looks good but CPA is unstable”</li>
              <li>• “Should I increase budget or wait?”</li>
              <li>• “Am I burning money without realizing it?”</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Soullytics Is Not Another Dashboard
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-16">
            Soullytics is a decision system.
            It does the thinking for you and tells you
            what action actually makes sense —
            before your budget gets damaged.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <Feature
              title="Decision First"
              desc="RUN, PAUSE, STOP or SCALE — not just charts and metrics."
            />
            <Feature
              title="Reason & Risk"
              desc="Every decision comes with clear reasons and future risk."
            />
            <Feature
              title="Money Advice"
              desc="Know whether to increase budget, reduce it, or hold."
            />
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#0F1424] py-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-16">
            How Soullytics Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <Step number="1" text="Connect Google Ads or Meta Ads" />
            <Step number="2" text="Soullytics analyzes real metrics" />
            <Step number="3" text="Predicts risk & future outcome" />
            <Step number="4" text="Gives a clear decision with reasons" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Stop Losing Money To Guesswork
        </h2>
        <p className="text-gray-400 mb-10">
          Let Soullytics tell you what decision actually makes sense.
        </p>

        <button className="px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-medium text-lg">
          Analyze 2 Ads Free
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Soullytics. All rights reserved.
      </footer>
    </main>
  );
}

/* ====== COMPONENTS ====== */

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border border-white/10 rounded-xl p-6 bg-[#0B0F1A]">
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-indigo-500 text-white font-semibold">
        {number}
      </div>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}
