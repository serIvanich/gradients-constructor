import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const slice = createSlice({

    name: 'gradients',
    initialState: [] as Array<GradientType>,
    reducers: {
        setColorsGradient(state, action: PayloadAction<{ gradient: GradientType }>) {
            let index:number = state.findIndex(i => i.id === action.payload.gradient.id)
            index < 0? state.push(action.payload.gradient) 
                  : state.splice(index, 1, action.payload.gradient)
        },
        deleteGradient(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex(i => i.id === action.payload.id)
            state.splice(index, 1)
        },
        
    },
})

export const gradientsReducer = slice.reducer

export const {setColorsGradient, deleteGradient, } = slice.actions


export type GradientType = {
    id: string
    color1: string
    color2: string

}

