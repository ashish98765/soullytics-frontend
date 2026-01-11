import { TraceItem } from "../../app/lib/mockDecision";

interface Props {
  trace: TraceItem[];
}

export default function DecisionTrace({ trace }: Props) {
  return (
    <div className="bg-gray-900 p-4 rounded mt-6">
      <h3 className="text-lg font-semibold mb-3 text-white">
        Decision Trace
      </h3>

      <ul className="space-y-2">
        {trace.map((item, idx) => (
          <li
            key={idx}
            className="border border-gray-700 p-3 rounded"
          >
            <div className="flex justify-between">
              <span className="font-medium text-white">
                {item.step}
              </span>
              <span className="text-gray-400">
                Weight: {item.weight}
              </span>
            </div>

            <p className="text-sm text-gray-400 mt-1">
              {item.reason}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
