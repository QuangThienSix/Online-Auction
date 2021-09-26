import authSaga from 'features/auth/authSaga';
import counterSaga from 'features/counter/countSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([authSaga(), counterSaga()]);
}
