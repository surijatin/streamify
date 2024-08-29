import { SET_METRICS_DATA } from "./types";

const initialState = {
  metricsData: {},
};

const metricsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_METRICS_DATA:
      return {
        ...state,
        metricsData: action.payload,
      };
    default:
      return state;
  }
};

export default metricsReducer;
