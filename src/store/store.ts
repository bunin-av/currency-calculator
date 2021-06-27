import {configureStore} from "@reduxjs/toolkit";
import currenciesSlice from "./currency-reducer";

const reducer = {
    currencies: currenciesSlice
}

export const store = configureStore({reducer})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//@ts-ignore
window.store = store
