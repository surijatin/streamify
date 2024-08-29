import {
  SET_USERS_DATA,
  SET_REV_DATA,
  SET_REV_SOURCE,
  SET_TOP_STREAMS,
  SET_STREAMING_DATA,
} from "./types";

export const setUsersData = (data) => ({
  type: SET_USERS_DATA,
  payload: data,
});

export const setRevData = (data) => ({
  type: SET_REV_DATA,
  payload: data,
});

export const setRevSource = (data) => ({
  type: SET_REV_SOURCE,
  payload: data,
});

export const setTopStreams = (data) => ({
  type: SET_TOP_STREAMS,
  payload: data,
});

export const setStreamingData = (data) => ({
  type: SET_STREAMING_DATA,
  payload: data,
});
