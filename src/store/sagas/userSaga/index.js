import {
  put,
  takeLatest,
  // call, take, cancelled
} from "redux-saga/effects";
import // signupWithEmailAndPassword,
// loginWithEmailAndPassword,
// logout,
// firebaseUsers,
"../../../services/firebase/firebase-service";
import { getUsers } from "../../../services/twilio/twilio-service";
import {
  // emailSignUpFetch,
  // emailSignUpFailure,
  // emailSignUpSuccess,
  // emailLogInFetch,
  // emailLogInSuccess,
  // emailLogInFailure,
  // userLogoutFetch,
  // userLogoutFailure,
  // userLogoutSuccess,
  getChatUsersFailure,
  getChatUsersSuccess,
  getChatUsersFetch,
} from "../../reducers/userReducer";

// function* emailSignup({ payload }) {
//   try {
//     const data = yield signupWithEmailAndPassword(payload);

//     yield put(emailSignUpSuccess(data));
//   } catch (error) {
//     yield put(emailSignUpFailure(error));
//   }
// }

// function* emailLogIn({ payload }) {
//   try {
//     const data = yield loginWithEmailAndPassword(payload);
//     yield put(emailLogInSuccess(data));
//   } catch (error) {
//     yield put(emailLogInFailure(error));
//   }
// }

// function* logoutSaga() {
//   try {
//     yield logout();
//     yield put(userLogoutSuccess());
//   } catch (error) {
//     yield put(userLogoutFailure(error));
//   }
// }

// function* getChatUsers({ payload }) {
//   try {
//     const chatUsers = yield call(firebaseUsers, payload);

//     try {
//       while (true) {
//         const updatedUsers = yield take(chatUsers);
//         yield put(getChatUsersSuccess(updatedUsers));
//       }
//     } finally {
//       if (yield cancelled()) {
//         chatUsers.close();
//       }
//     }
//   } catch (error) {
//     yield put(getChatUsersFailure(error));
//   }
// }

function* getChatUsers() {
  try {
    const chatUsers = yield getUsers();

    yield put(getChatUsersSuccess(chatUsers));
  } catch (error) {
    yield put(getChatUsersFailure(error));
  }
}

const userSaga = [
  // takeLatest(emailSignUpFetch, emailSignup),
  // takeLatest(emailLogInFetch, emailLogIn),
  // takeLatest(userLogoutFetch, logoutSaga),
  takeLatest(getChatUsersFetch, getChatUsers),
];

export default userSaga;
