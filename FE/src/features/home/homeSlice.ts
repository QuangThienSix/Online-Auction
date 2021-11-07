import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
import { Product } from "models/product";


export interface HomeState {
    logging?: boolean;
    errormessage: string;
    product?: Product;
    productTopList: Product[];
}

const initialState: HomeState = {
    logging: false,
    errormessage: '',
    product: undefined,
    productTopList: [],
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
    }
})

// Action
export const homeActions = homeSlice.actions;



export const selecttorsProductTop = (state: RootState) => state.home.productTopList;
// Reducer
const homeReducer = homeSlice.reducer;
export default homeReducer;

