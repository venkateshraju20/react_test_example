import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import commentsReducers from "reducers/comments";

const rootReducers = combineReducers({
  comments: commentsReducers,
});
export const store = createStore(rootReducers, applyMiddleware(reduxPromise));
