import {
  SET_USERS_DATA,
  SET_REV_DATA,
  SET_REV_SOURCE,
  SET_TOP_STREAMS,
  SET_STREAMING_DATA,
} from "./types";

const initialState = {
  usersData: [],
  revData: [],
  revSourceSelected: null,
  topStreams: [],
  streamingData: [],
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS_DATA:
      return {
        ...state,
        usersData: action.payload,
      };
    case SET_REV_DATA:
      return {
        ...state,
        revData: action.payload,
      };
    case SET_REV_SOURCE:
      return {
        ...state,
        revSourceSelected: action.payload,
      };
    case SET_TOP_STREAMS:
      return {
        ...state,
        topStreams: action.payload,
      };
    case SET_STREAMING_DATA:
      return {
        ...state,
        streamingData: action.payload,
      };
    default:
      return state;
  }
};

export default commonReducer;
