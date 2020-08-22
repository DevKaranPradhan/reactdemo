import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import projectWatcherSaga from "./projectSaga";

export default function* rootSaga() {
  yield all([userSaga(), projectWatcherSaga()]);
}
