import { put, takeLatest, call, take, cancelled } from "redux-saga/effects";

import {
  signupWithEmailAndPassword,
  loginWithEmailAndPassword,
  logout,
  myVehicles,
} from "../../../services/firebase/firebase.func";
import {
  emailSignUpFetch,
  emailSignUpFailure,
  emailSignUpSuccess,
  emailLogInFetch,
  emailLogInSuccess,
  emailLogInFailure,
  userLogoutFetch,
  userLogoutFailure,
  userLogoutSuccess,
  getManagerVehiclesFetch,
  getManagerVehiclesSuccess,
  getManagerVehiclesFailure,
} from "../../reducers/userReducer";

function* emailSignup({ payload }) {
  try {
    const data = yield signupWithEmailAndPassword(payload);

    yield put(emailSignUpSuccess(data));
  } catch (error) {
    yield put(emailSignUpFailure(error));
  }
}

function* emailLogIn({ payload }) {
  try {
    const data = yield loginWithEmailAndPassword(payload);
    yield put(emailLogInSuccess(data));
  } catch (error) {
    yield put(emailLogInFailure(error));
  }
}

function* logoutSaga() {
  try {
    yield logout();
    yield put(userLogoutSuccess());
  } catch (error) {
    yield put(userLogoutFailure(error));
  }
}

function* getMyVehicles({ payload }) {
  try {
    const vehiclesData = yield call(myVehicles, payload);

    try {
      while (true) {
        const updatedVehiclesData = yield take(vehiclesData);
        yield put(getManagerVehiclesSuccess(updatedVehiclesData));
      }
    } finally {
      if (yield cancelled()) {
        vehiclesData.close();
      }
    }
  } catch (error) {
    yield put(getManagerVehiclesFailure(error));
  }
}

const userSaga = [
  takeLatest(emailSignUpFetch, emailSignup),
  takeLatest(emailLogInFetch, emailLogIn),
  takeLatest(userLogoutFetch, logoutSaga),
  takeLatest(getManagerVehiclesFetch, getMyVehicles),
];

export default userSaga;
