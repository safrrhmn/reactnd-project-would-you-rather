export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const loadUserSuccess = (users) => ({
  type: LOAD_USER_SUCCESS,
  payload: users,
});
export const LOAD_AUTHED_USER = "LOAD_AUTHED_USER";
export const loadAuthedUser = (authedUser) => ({
  type: LOAD_AUTHED_USER,
  payload: { authedUser},
});
