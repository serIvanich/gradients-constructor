import {
    addNewGradient,
    changeColorsGradient,
    deleteGradient,
    gradientsReducer,
    GradientType
} from "./gradients-reducer";


let startState: Array<GradientType>

beforeEach(() => {
    startState = [
        {
            id: '1',
            color1: '#e4a4a4',
            color2: '#f1aa11',
        },
        {
            id: '2',
            color1: '#aa55cc',
            color2: '#11f1f1',
        },
        {
            id: '3',
            color1: '#77a7aa',
            color2: '#b1b1b1',
        },
    ]
})

test('correct values should be added to correct array', () => {
    const newGradient: GradientType = {
        id: '4',
        color1: '#fff',
        color2: '#111',
    }

    const endState = gradientsReducer(startState, addNewGradient({gradient: newGradient}))

    expect(endState.length).toBe(4);
    expect(endState[5]).toBeUndefined();
    expect(endState[3].color1).toBe('#fff');

})

test('gradient should be delete from state', () => {
    const id = '2'

    const endState = gradientsReducer(startState, deleteGradient({id}))

    expect(endState.length).toBe(2);
    expect(endState[5]).toBeUndefined();
    expect(endState[1].id).toBe('3');

})

test('gradient should be changed at state', () => {
    const id = '3'
    const newGradient = {
        id: '11',
        color1: '#111',
        color2: '#fff',
    }

    const endState = gradientsReducer(startState, changeColorsGradient({gradient:newGradient}))

    expect(endState.length).toBe(3);
    expect(endState[5]).toBeUndefined();
    expect(endState[2].id).toBe('11');

})
