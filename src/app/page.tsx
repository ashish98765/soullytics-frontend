export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05070F] text-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-24 text-center">
        <span className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500/40 text-blue-400 text-sm">
          Ads Operating System
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Stop Guessing Ads.<br />
          <span className="text-blue-400">Make Decisions With Proof.</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Soullytics connects to your Google Ads and Meta Ads,
          analyzes real performance data, predicts risk,
          and tells you exactly when to <b>RUN</b>, <b>PAUSE</b>,
          <b>STOP</b>, or <b>SCALE</b>.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-medium">
            Analyze Your Ads
          </button>
          <button className="px-6 py-3 rounded-lg border border-white/30">
            See How It Works
          </button>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          2 ads free · No credit card required
        </p>
      </section>

      {/* PROBLEM */}
      <section className="bg-[#0A0E1A] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-white">
              Ads Fail Because Decisions Are Emotional
            </h2>
            <p className="text-gray-300">
              Dashboards show numbers.  
              They don’t tell you what decision to take.
            </p>
          </div>

          <div className="bg-[#05070F] border border-white/15 rounded-xl p-6 text-gray-200">
            <ul className="space-y-3">
              <li>• CTR high, sales low</li>
              <li>• ROAS unstable</li>
              <li>• Budget burn without clarity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Stop Losing Money To Guesswork
        </h2>
        <p className="text-gray-300 mb-8">
          Let Soullytics tell you what decision actually makes sense.
        </p>

        <button className="px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 font-medium text-lg">
          Analyze 2 Ads Free
        </button>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Soullytics
      </footer>
    </main>
  );
}
