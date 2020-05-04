export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const loadUserSuccess = (users) => ({
  type: LOAD_USER_SUCCESS,
  payload: users,
});

export const LOAD_QSN_SUCCESS = "LOAD_QSN_SUCCESS";
export const loadQsnSuccess = (qsn) => ({
  type: LOAD_QSN_SUCCESS,
  payload: qsn,
});

export const LOAD_AUTHED_USER = "LOAD_AUTHED_USER";
export const loadAuthedUser = (authedUser) => ({
  type: LOAD_AUTHED_USER,
  payload: { authedUser },
});

export const LOG_OUT = "LOG_OUT";
export const logOutUser = () => ({
  type: LOG_OUT,
});

export const CREATE_POLL_SUCCESS = "CREATE_POLL_SUCCESS";
export const createPoll = (question) => ({
  type: CREATE_POLL_SUCCESS,
  payload: { question },
});
