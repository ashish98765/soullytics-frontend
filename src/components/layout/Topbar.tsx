import DecisionBanner from "./DecisionBanner";
import { mockDecision } from "@/app/lib/mockDecision";

export default function Topbar() {
  const { finalDecision, message } = mockDecision;

  return (
    <div>
      <DecisionBanner decision={finalDecision} message={message} />

      <header className="h-14 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-6">
        <div className="text-sm text-zinc-400">
          Soullytics • Decision Intelligence OS
        </div>

        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-zinc-800" />
        </div>
      </header>
    </div>
  );
}
