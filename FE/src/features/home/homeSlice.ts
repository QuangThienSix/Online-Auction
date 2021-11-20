import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Product } from "models/product";


export interface HomeState {
    logging?: boolean;
    errormessage: string;
    product?: Product;
    productTopList: Product[];
    productTop5PriceList: Product[];
    productTop5AlmostExpired: Product[];
}

const initialState: HomeState = {
    logging: false,
    errormessage: '',
    product: undefined,
    productTopList: [],
    productTop5PriceList: [],
    productTop5AlmostExpired: [],
};



const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        product(state) {
            state.logging = true;
        },
        productSuccess(state) {
            state.logging = false;
        },

        productFailed(state) {
            state.logging = false;
        },
        setProductTopList(state, action: PayloadAction<Product[]>) {
            state.productTopList = action.payload;
        },
        setProductTop5PriceList(state, action: PayloadAction<Product[]>) {
            state.productTop5PriceList = action.payload;
        },
        setProductTop5AlmostExpired(state, action: PayloadAction<Product[]>) {
            state.productTop5AlmostExpired = action.payload;
        },
    }
})

// Action
export const homeActions = homeSlice.actions;



export const selecttorsProductTop = (state: RootState) => state.home.productTopList;
export const selecttorsProduct5PriceTop = (state: RootState) => state.home.productTop5PriceList;
export const selectProductTop5AlmostExpired = (state: RootState) => state.home.productTop5AlmostExpired;
// Reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;

