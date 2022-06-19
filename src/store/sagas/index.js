import { all } from "redux-saga/effects";
import userSaga from "./userSaga";

export const tasks = [...userSaga];

const rootSaga = function* rootSaga() {
  yield all(tasks);
};

export default rootSaga;
