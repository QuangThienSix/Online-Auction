import productApi from "api/productApi";
import { ListResponse } from "models";
import { Product } from "models/product";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { homeActions } from "./homeSlice";


function* fethproductTop5Ratting() {
    const { data }: ListResponse<Product> = yield call(productApi.getAll, {
        _page: 1,
        _limit: 5,
    });
    yield put(homeActions.setProductTopList(data));
}
function* fethproductTop5Price() {
    const { data }: ListResponse<Product> = yield call(productApi.getAllPrice, {
        _page: 1,
        _limit: 5,
    });
    yield put(homeActions.setProductTop5PriceList(data));
}

function* fetchProdcutsList() {
    try {

        yield all([
            call(fethproductTop5Ratting),
            call(fethproductTop5Price),

        ]);
        yield put(homeActions.productSuccess());
    } catch (error) {
        console.log('Failed to fetch dashboard data', error);
        yield put(homeActions.productFailed());
    }
}


export default function* homeSaga() {
    yield takeLatest(homeActions.product.type, fetchProdcutsList);

}