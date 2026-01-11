// src/app/lib/mockDecision.ts

export const mockDecision = {
  finalDecision: "RUN", // RUN | PAUSE | DO_NOT_RUN
  confidence: 87,
  stats: {
    enginesEvaluated: 40,
    warnings: 3,
    criticalFails: 0,
  },
  message: "System stable. Risk acceptable. Ads cleared to run.",
  timestamp: new Date().toISOString(),
};
