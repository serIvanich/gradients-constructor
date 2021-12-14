import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const slice = createSlice({

    name: 'gradients',
    initialState: [] as Array<GradientType>,
    reducers: {
        addNewGradient(state, action: PayloadAction<{ gradient: GradientType }>) {
            state.push(action.payload.gradient)
        },
        deleteGradient(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex(i => i.id === action.payload.id)
            state.splice(index, 1)
        },
        changeColorsGradient(state, action: PayloadAction<{ gradient: GradientType }>) {
            const index = state.findIndex(i => i.id === action.payload.gradient.id)
            state.splice(index, 1, action.payload.gradient)
        },
    },
})

export const gradientsReducer = slice.reducer

export const {addNewGradient, deleteGradient, changeColorsGradient} = slice.actions


export type GradientType = {
    id: string
    color1: string
    color2: string

}

