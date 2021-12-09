import thunk from 'redux-thunk';
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {gradientsReducer} from "./gradients-reducer";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    gradients: gradientsReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})


// @ts-ignore
window.store = store;


//redux common types
export type RootReducerType = typeof rootReducer

export const useAppDispatch = () => useDispatch<AppDispatchType>()
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<RootReducerType>
export type AppDispatchType = typeof store.dispatch