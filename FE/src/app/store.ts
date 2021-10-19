import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from 'features/auth/authSlice';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from 'utils';
import dashboardReducer from 'features/dashboard/dashboardSlice';

const rootReducer = combineReducers({
  router: connectRouter(history),
  counter: counterReducer,
  auth: authReducer,
  dashboard: dashboardReducer,
});

const SagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(SagaMiddleware, routerMiddleware(history)),
  // ,
  // immutablecheck: false,
});

SagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
