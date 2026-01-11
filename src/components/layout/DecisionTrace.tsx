import { TraceItem } from "@/app/lib/mockTrace";

interface Props {
  trace: TraceItem[];
}

export default function DecisionTrace({ trace }: Props) {
  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4">
        Decision Trace
      </h2>

      <div className="space-y-3">
        {trace.map((item, index) => {
          const color =
            item.status === "PASS"
              ? "border-green-700 bg-green-900/30 text-green-300"
              : item.status === "WARNING"
              ? "border-yellow-700 bg-yellow-900/30 text-yellow-300"
              : "border-red-700 bg-red-900/30 text-red-300";

          return (
            <div
              key={index}
              className={`border rounded p-3 ${color}`}
            >
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm">
                  {item.engine}
                </span>
                <span className="text-xs font-semibold">
                  {item.status}
                </span>
              </div>

              <p className="text-sm mt-1">
                {item.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
      }
