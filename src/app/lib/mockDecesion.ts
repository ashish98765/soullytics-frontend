export interface TraceItem {
  step: string;
  reason: string;
  weight: number;
}

export const mockDecision = {
  finalDecision: "RUN",
  confidence: 0.82,
  message: "Strong ROAS, stable CPA, scaling recommended",
  trace: [
    {
      step: "ROAS Check",
      reason: "ROAS > 2.5",
      weight: 0.4
    },
    {
      step: "CPA Stability",
      reason: "CPA variance < 10%",
      weight: 0.3
    },
    {
      step: "Spend Velocity",
      reason: "Spend increasing linearly",
      weight: 0.3
    }
  ]
};
