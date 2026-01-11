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
