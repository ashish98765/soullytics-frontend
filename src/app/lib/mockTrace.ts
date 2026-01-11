export type EngineStatus = "PASS" | "WARNING" | "FAIL";

export interface TraceItem {
  engine: string;
  status: EngineStatus;
  message: string;
}

export const mockTrace: TraceItem[] = [
  {
    engine: "AdsCode01_ObjectiveClarity",
    status: "PASS",
    message: "Campaign objective clearly defined."
  },
  {
    engine: "AdsCode04_AudienceTemperature",
    status: "WARNING",
    message: "Audience showing early signs of saturation."
  },
  {
    engine: "AdsCode13_CreativeFatigue",
    status: "FAIL",
    message: "Creative repetition detected. Performance decay likely."
  },
  {
    engine: "AdsCode18_StopLoss",
    status: "PASS",
    message: "Spend within acceptable loss threshold."
  }
];
