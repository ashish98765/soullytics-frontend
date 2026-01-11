export const mockDecision = {
  finalDecision: "RUN",
  confidence: 0.87,
  engines: [
    { name: "ObjectiveClarity", score: 0.9 },
    { name: "BudgetReality", score: 0.82 },
    { name: "AudienceTemperature", score: 0.78 }
  ],
  timestamp: new Date().toISOString()
};
