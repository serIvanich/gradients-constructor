import thunk from 'redux-thunk';
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {gradientsReducer} from "./gradients-reducer";

const rootReducer = combineReducers({
    gradients: gradientsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})


// @ts-ignore
window.store = store;
