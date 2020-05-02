import { LOAD_USER_SUCCESS, LOAD_AUTHED_USER } from "./actions";

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

export const authedUser = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_AUTHED_USER: {
      return payload;
    }
    default:
      return state;
  }
};
