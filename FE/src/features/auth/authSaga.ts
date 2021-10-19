import { call, fork, take } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import userApi from 'api/usersApi';
import { push } from 'connected-react-router';
import { ListResponses, Users } from 'models';
import { put } from 'redux-saga/effects';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    const response: ListResponses<Users> = yield call(userApi.postLogin, payload);
    console.log(response);
    localStorage.setItem('x-access-token', response.data.accessToken);
    localStorage.setItem('x-refresh-token', response.data.refreshToken);
    yield put(authActions.loginSuccess(response.data));
    //   redirest to admin page
    yield put(push('/admin'));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message));
  }
}

function* handleLogout() {
  localStorage.removeItem('x-access-token');
  localStorage.removeItem('x-refresh-token');

  yield put(push('/login'));
  //   redirest to login page
}

function* watchLogimFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take([
        authActions.login.type,
        authActions.register.type,
        authActions.verify.type,
      ]);
      if (action.type === authActions.login.type) {
        yield fork(handleLogin, action.payload);
      }
      if (action.type === authActions.register.type) {
        yield fork(handleRegister, action.payload);
      }
      if (action.type === authActions.verify.type) {
        yield fork(handleVerify, action.payload);
      }
    }

    yield take([
      authActions.logout.type,
      authActions.loginFailed.type,
      authActions.registerFailed.type,
      authActions.verifyFailed.type,
      authActions.registerSuccess.type,
      authActions.verifySuccess.type,
    ]);
    yield call(handleLogout);
  }
}
function* handleRegister(payload: LoginPayload) {
  try {
    const response: ListResponses<Users> = yield call(userApi.postsignup, payload);
    yield put(authActions.registerSuccess(response.data));
    yield put(push(`/verify/${response.data.email}`));
  } catch (error: any) {
    yield put(authActions.registerFailed(error));
  }
}
function* handleVerify(payload: LoginPayload) {
  try {
    const response: ListResponses<Users> = yield call(userApi.postverify, payload);
    yield put(authActions.verifySuccess(response.data));
    yield put(push('/login'));
  } catch (error: any) {
    yield put(authActions.verifyFailed(error));
  }
}
export default function* authSaga() {
  yield fork(watchLogimFlow);
}
