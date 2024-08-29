import { SET_METRICS_DATA } from "./types";

export const setMetricsData = (data) => ({
  type: SET_METRICS_DATA,
  payload: data,
});
