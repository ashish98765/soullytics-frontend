// src/app/page.tsx

import { mockDecision } from "./lib/mockDecision";

export default function DashboardPage() {
  const { finalDecision, confidence, message } = mockDecision;

  const decisionColor =
    finalDecision === "RUN"
      ? "text-green-500"
      : finalDecision === "PAUSE"
      ? "text-yellow-500"
      : "text-red-500";

  return (
    <main className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Soullytics Dashboard</h1>

      {/* Decision Status */}
      <div className="mb-4">
        <span className="text-sm text-gray-400">Final Decision</span>
        <div className={`text-3xl font-bold ${decisionColor}`}>
          {finalDecision}
        </div>
      </div>

      {/* Confidence */}
      <div className="mb-4">
        <span className="text-sm text-gray-400">Confidence</span>
        <div className="text-2xl font-semibold">
          {confidence}%
        </div>
      </div>

      {/* Message */}
      <div className="bg-gray-800 p-4 rounded">
        <span className="text-sm text-gray-400">System Message</span>
        <p className="mt-1">{message}</p>
      </div>
    </main>
  );
}
