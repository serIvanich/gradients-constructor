import {
    setColorsGradient,
    deleteGradient,
    gradientsReducer,
    GradientType
} from "./gradients-reducer";


let startState: Array<GradientType>

beforeEach(() => {
    startState = [
        {
            id: '1',
            color1: '#e4a',
            color2: '#f1a',
        },
        {
            id: '2',
            color1: '#aa5',
            color2: '#11f',
        },
        {
            id: '3',
            color1: '#77a',
            color2: '#b1b',
        },
    ]
})

test('correct values should be added to correct array', () => {
    const newGradient: GradientType = {
        id: '4',
        color1: '#fff',
        color2: '#111',
    }

    const endState = gradientsReducer(startState, setColorsGradient({gradient:newGradient}))

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
    
    const newGradient = {
        id: '1',
        color1: '#111',
        color2: '#fff',
    }

    const endState = gradientsReducer(startState, setColorsGradient({gradient:newGradient}))

    expect(endState.length).toBe(3);
    expect(endState[5]).toBeUndefined();
    expect(endState[2].id).toBe('3');

})
