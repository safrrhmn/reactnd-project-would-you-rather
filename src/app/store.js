import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { users, authedUser, questions, createPoll } from "./reducers";
import { LOG_OUT } from "./actions";

const reducers = {
  users,
  authedUser,
  questions,
  createPollSuccess: createPoll,
};
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const appReducer = combineReducers(reducers);

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const configureStore = () =>
  createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
