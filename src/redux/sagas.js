import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCEEDED,
  LOGIN_USER_FAILED,
  REGISTER_USER,
  REGISTER_USER_SUCCEEDED,
  REGISTER_USER_FAILED,
  CONFIRM_USER,
  CONFIRM_USER_SUCCEEDED,
  CONFIRM_USER_FAILED,
  USER_SEND_PASSWORD_RESET_EMAIL,
  sendPasswordResetEmail
} from './user/actions';
import { login, register, confirmUser as cu } from '../services/LoginService';

function* loginUser(action) {
  try {
    const user = yield call(login, action.payload.email, action.payload.password);
    yield put({ type: LOGIN_USER_SUCCEEDED, payload: { user } });
  } catch (e) {
    console.log(e);

    yield put({ type: LOGIN_USER_FAILED, error: e });
  }
}

function* registerUser(action) {
  try {
    const user = yield call(register, action.payload.user);
    yield put({ type: REGISTER_USER_SUCCEEDED, payload: { user } });
  } catch (e) {
    console.log(e);

    yield put({ type: REGISTER_USER_FAILED, error: e });
  }
}

function* confirmUser(action) {
  try {
    const user = yield call(cu, action.payload);
    yield put({ type: CONFIRM_USER_SUCCEEDED });
  } catch (e) {
    console.log(e);

    yield put({ type: CONFIRM_USER_FAILED, error: e });
  }
}

function* sendResetEmail(action) {
  try {
    const user = yield call(sendPasswordResetEmail, action.payload);
    // yield put({ type: CONFIRM_USER_SUCCEEDED });
  } catch (e) {
    console.log(e);

    // yield put({ type: CONFIRM_USER_FAILED, error: e });
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(REGISTER_USER, registerUser);
  yield takeEvery(CONFIRM_USER, confirmUser);
  yield takeEvery(USER_SEND_PASSWORD_RESET_EMAIL, sendResetEmail);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
// }

export default mySaga;
