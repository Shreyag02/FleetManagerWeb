import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import channelSaga from "./channelSaga";

export const tasks = [...userSaga, ...channelSaga];

const rootSaga = function* rootSaga() {
  yield all(tasks);
};

export default rootSaga;
