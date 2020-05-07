import {
  LOAD_USER_SUCCESS,
  LOAD_AUTHED_USER,
  LOG_OUT,
  LOAD_QSN_SUCCESS,
  CREATE_POLL_SUCCESS,
} from "./actions";

export const users = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export const questions = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_QSN_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export const authedUser = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_AUTHED_USER: {
      return payload;
    }
    case LOG_OUT: {
      console.log(state);
      state = undefined;
      console.log(state);
      return null;
    }
    default:
      return state;
  }
};

export const createPoll = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_POLL_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};
