import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { ListParams, ListResponse, PaginationParams, Product } from 'models';

export interface ProductState {
  loading: boolean;
  list: Product[];
  filter: ListParams;
  pagination: PaginationParams;
}

const initialState: ProductState = {
  loading: false,
  list: [],
  filter: {
    _page: 1,
    _limit: 1,
  },
  pagination: {
    _page: 1,
    _limit: 1,
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
    fetchProductsListSuccess(state, action: PayloadAction<ListResponse<Product>>) {
      state.list = action.payload.data;
      state.pagination = action.payload.pagination;
      state.loading = false;
    },
    fetchProductsListFailed(state) {
      state.loading = false;
    },
    setFilter(state, action: PayloadAction<ListParams>) {
      state.filter = action.payload;
    },
    setFilterWithDebounce(state, action: PayloadAction<ListParams>) { },
  },
});

// Action

export const productsAction = productSlice.actions;
export const selectProductsList = (state: RootState) => state.product.list;
export const selectProductsLoading = (state: RootState) => state.product.loading;
export const selectProductsFilter = (state: RootState) => state.product.filter;
export const selectProductsPagination = (state: RootState) => state.product.pagination;


// Selecttors

// // Reducer
const productsReducer = productSlice.reducer;
export default productsReducer;
