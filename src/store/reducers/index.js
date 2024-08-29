import { combineReducers } from "redux";
import metricsReducer from "./MetricsReducer/index";
import commonReducer from "./CommonReducer/index";

const rootReducer = combineReducers({
  metricsReducer: metricsReducer,
  commonReducer: commonReducer,
});

export default rootReducer;
