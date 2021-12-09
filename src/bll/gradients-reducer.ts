import {createSlice, PayloadAction} from "@reduxjs/toolkit"



const slice = createSlice({

    name: 'gradients',
    initialState: [] as Array<GradientType>,
    reducers: {


        },


})

export const gradientsReducer = slice.reducer

export const actionGradients = slice.actions


export type GradientType = {
    id: number
    startColor: string
    endColor: string

}

