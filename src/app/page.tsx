// src/app/page.tsx

import AppShell from "@/components/layout/AppShell";
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
    <AppShell>
      <main className="p-6 text-white space-y-6">
        <h1 className="text-2xl font-bold">Soullytics Dashboard</h1>

        {/* Decision Status */}
        <div>
          <span className="text-sm text-gray-400">Final Decision</span>
          <div className={`text-3xl font-bold ${decisionColor}`}>
            {finalDecision}
          </div>
        </div>

        {/* Confidence */}
        <div>
          <span className="text-sm text-gray-400">Confidence</span>
          <div className="text-2xl font-semibold">
            {(confidence * 100).toFixed(1)}%
          </div>
        </div>

        {/* System Message */}
        <div className="bg-gray-800 p-4 rounded">
          <span className="text-sm text-gray-400">System Message</span>
          <p className="mt-1 text-gray-200">{message}</p>
        </div>
      </main>
    </AppShell>
  );
}
