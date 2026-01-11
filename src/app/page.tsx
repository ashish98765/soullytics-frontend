export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="section hero">
        <h1>Replace guesswork with signals.</h1>
        <p>
          Soullytics replaces emotional calls, Slack debates and spreadsheet
          chaos with one cold decision engine.
        </p>
        <button className="primary">Get started</button>
      </section>

      {/* THREE STEPS */}
      <section className="section">
        <h2>Three steps. Zero emotion.</h2>
        <p className="muted">
          No stories. No opinions. Just signals → decisions.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>Ingest signals</h3>
            <p>
              CPA, CTR, CVR, spend velocity, volatility — not vanity metrics.
            </p>
          </div>

          <div className="card">
            <h3>Evaluate reality</h3>
            <p>
              Statistical stability, momentum and risk. No stories. Just
              probabilities.
            </p>
          </div>

          <div className="card">
            <h3>Output decision</h3>
            <p>
              RUN, SCALE, PAUSE or KILL — with a confidence score you can defend.
            </p>
          </div>
        </div>
      </section>

      {/* BUILT TO SAY NO */}
      <section className="section">
        <h2>Built to say no.</h2>
        <p>
          Soullytics is not here to make you feel good.
          <br />
          It’s here to stop you from lying to yourself.
        </p>

        <button className="secondary">
          People who respect reality — Login
        </button>
      </section>

      {/* WHY SOULLYTICS */}
      <section className="section">
        <div className="muted" style={{ textTransform: "uppercase", fontSize: 13 }}>
          Why Soullytics
        </div>

        <h2>Built to say no.</h2>

        <div className="grid-3">
          <div className="card">
            <h3>The old way</h3>
            <ul className="muted">
              <li>Dashboards that describe the past</li>
              <li>Agencies selling optimism</li>
              <li>Gut decisions under pressure</li>
              <li>Scaling because “it feels right”</li>
              <li>Killing winners too early</li>
              <li>Letting losers burn cash</li>
            </ul>
          </div>

          <div className="card">
            <h3>The Soullytics way</h3>
            <ul className="muted">
              <li>Decisions, not charts</li>
              <li>No emotional attachment</li>
              <li>Statistical confidence</li>
              <li>Clear RUN / SCALE / PAUSE / KILL</li>
              <li>Protects capital first</li>
              <li>Scales only when reality agrees</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BUILT FOR */}
      <section className="section">
        <h2>Built for people who respect reality.</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Founders & Operators</h3>
            <p>
              You don’t want motivation.
              <br />
              You want to know if this thing should live or die.
            </p>
          </div>

          <div className="card">
            <h3>Performance Marketers</h3>
            <p>
              Dashboards look “okay”.
              <br />
              But your gut says something is off.
            </p>
          </div>

          <div className="card">
            <h3>Game & App Studios</h3>
            <p>
              Kill bad bets early.
              <br />
              Double down only when the math agrees.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
