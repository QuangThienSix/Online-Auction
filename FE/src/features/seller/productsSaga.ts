import { call, debounce, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { ListParams, ListResponse, Product } from 'models';
import { productsAction } from './productsSlice';

function* fetchStudentList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Product> = yield call(productApi.getAllBySeller, action.payload);
    yield put(productsAction.fetchProductsListSuccess(response));
  } catch (error) {
    console.log('Failed to fetch student list', error);
    yield put(productsAction.fetchProductsListFailed());
  }
}
function* fetchStudentAllList(action: PayloadAction<ListParams>) {
  try {
    const response: ListResponse<Product> = yield call(productApi.getAllBy, action.payload);
    yield put(productsAction.fetchProductsAllListSuccess(response));
  } catch (error) {
    console.log('Failed to fetch student list', error);
    yield put(productsAction.fetchProductsAllListFailed());
  }
}


function* handleSearchDebounce(action: PayloadAction<ListParams>) {
  yield put(productsAction.setFilter(action.payload));
}

export default function* productsSaga() {
  yield takeLatest(productsAction.fetchProductsList, fetchStudentList);
  yield takeLatest(productsAction.fetchProductsAllList, fetchStudentAllList);

  yield debounce(500, productsAction.setFilterWithDebounce.type, handleSearchDebounce);
}
