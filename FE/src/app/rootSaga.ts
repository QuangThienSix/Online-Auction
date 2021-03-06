import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/countSaga';
import dashboardSagardSaga from 'features/dashboard/dashboardSaga';
import homeSaga from 'features/home/homeSaga';
import roleSaga from 'features/roles/roleSaga';
import productsSaga from 'features/seller/productsSaga';
import socketSaga from 'features/socket/socketSaga';
import usersSaga from 'features/users/usersSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    authSaga(),
    counterSaga(),
    dashboardSagardSaga(),
    usersSaga(),
    roleSaga(),
    socketSaga(),
    homeSaga(),
    productsSaga()
  ]);
}
