import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {v4 as uuidv4} from 'uuid';

const gradients: GradientType[] = [
    {
        id: setId(),
        color1: '#e4a4a4',
        color2: '#f1aa11',
    },
    {
        id: setId(),
        color1: '#aa55cc',
        color2: '#11f1f1',
    },
    {
        id: setId(),
        color1: '#77a7aa',
        color2: '#b1b1b1',
    },
]


const slice = createSlice({

    name: 'gradients',
    initialState: gradients,
    reducers: {},


})

export const gradientsReducer = slice.reducer

export const actionGradients = slice.actions


function setId(): string {
    return uuidv4()
}

export type GradientType = {
    id: string
    color1: string
    color2: string

}

