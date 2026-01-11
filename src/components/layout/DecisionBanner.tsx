type Decision = "RUN" | "PAUSE" | "DO_NOT_RUN";

interface Props {
  decision: Decision;
  message: string;
}

export default function DecisionBanner({ decision, message }: Props) {
  const styles =
    decision === "RUN"
      ? "bg-green-900/40 text-green-300 border-green-700"
      : decision === "PAUSE"
      ? "bg-yellow-900/40 text-yellow-300 border-yellow-700"
      : "bg-red-900/40 text-red-300 border-red-700";

  return (
    <div className={`border-b px-6 py-2 text-sm ${styles}`}>
      <strong>{decision}</strong> — {message}
    </div>
  );
}
