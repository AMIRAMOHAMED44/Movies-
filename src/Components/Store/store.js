import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./Slices/fav"
import productReducer from "./Slices/product"
export const store = configureStore(
    {
        reducer: {

            sliceFavMovie: favReducer,
            sliceProduct: productReducer

        }
    })