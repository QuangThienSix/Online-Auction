import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationParams, Product } from 'models';

export interface ProductState {
  loading: boolean;
  loadingAll: boolean;
  list: Product[];
  listSearch: Product[];
  listALL: Product[];
  listProductSelling: Product[];
  listProductSold: Product[];
  filter: ListParams;
  pagination: PaginationParams;
  filterAll: ListParams;
  paginationALl: PaginationParams;
}

const initialState: ProductState = {
  loading: false,
  loadingAll: false,
  list: [],
  listSearch: [],
  listALL: [],
  listProductSelling: [],
  listProductSold: [],
  filter: {
    _page: 1,
    _limit: 1,
  },
  pagination: {
    _page: 1,
    _limit: 1,
    _totalRows: 1,
  },
  filterAll: {
    _page: 1,
    _limit: 5,
  },
  paginationALl: {
    _page: 1,
    _limit: 5,
    _totalRows: 1,
  },
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductsList(state, action: PayloadAction<ListParams>) {
      state.loading = true;
    },
    fetchProductsListSearch(state, action: PayloadAction<ListParams>) {
    },
    fetchProductsListSearchSuccess(state, action: PayloadAction<ListParams>) {
      state.listSearch = action.payload.data;
    },
    fetchProductsListSearchFailed(state) {
    },
    fetchProductSoldSearch(state, action: PayloadAction<ListParams>) {
    },
    fetchProductSoldSearchSuccess(state, action: PayloadAction<ListParams>) {
      state.listProductSold = action.payload.data;
    },
    fetchProductSoldSearchFailed(state) {
    },
    fetchlistProductSelling(state, action: PayloadAction<ListParams>) {
    },
    fetchlistProductSellingSuccess(state, action: PayloadAction<ListParams>) {
      state.listProductSelling = action.payload.data;
    },
    fetchlistProductSellingFailed(state) {
    },
    fetchProductsAllList(state, action: PayloadAction<ListParams>) {
      state.loadingAll = true;
    },
    fetchProductsListSuccess(state, action: PayloadAction<ListResponse<Product>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchProductsAllListSuccess(state, action: PayloadAction<ListResponse<Product>>) {
      state.listALL = action.payload.data;
      state.paginationALl = action.payload.pagination;
      state.loadingAll = false;
    },
    fetchProductsListFailed(state) {
      state.loading = false;
    },
    fetchProductsAllListFailed(state) {
      state.loadingAll = false;
    },
    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },
    setFilterAll(state, action: PayloadAction<ListParams>) {
      state.filterAll = action.payload;
    },
    setFilterWithDebounce(state, action: PayloadAction<ListParams>) { },
  },
});

// Action

export const productsAction = productSlice.actions;
export const selectProductsList = (state: RootState) => state.product.list;
export const selectProductsListSearch = (state: RootState) => state.product.listSearch;
export const selectProductSelling = (state: RootState) => state.product.listProductSelling;
export const selectProductSold = (state: RootState) => state.product.listProductSold;
export const selectProductsAllList = (state: RootState) => state.product.listALL;
export const selectProductsLoading = (state: RootState) => state.product.loading;
export const selectProductsFilter = (state: RootState) => state.product.filter;
export const selectProductsFilterAll = (state: RootState) => state.product.filterAll;
export const selectProductsPagination = (state: RootState) => state.product.pagination;
export const selectProductsPaginationAll = (state: RootState) => state.product.paginationALl;


// Selecttors

// // Reducer
const productsReducer = productSlice.reducer;
export default productsReducer;
