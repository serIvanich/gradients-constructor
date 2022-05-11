import React from "react";
import s from './Gradient.module.scss'
import {GradientType} from "../../../bll/gradients-reducer";
import {useNavigate} from "react-router-dom";
// import styled, { ThemeProvider } from 'styled-components';

export const Gradient: React.FC<GradientPropsType> = ({gradient, removeGradient}) => {

    const navigate = useNavigate()

    const {color1, color2} = gradient
    const styleButton1 = {
        backgroundColor: color2,
        color: color2,
        borderColor: color1,
    }
    const styleButton2 = {
        backgroundColor: color1,
        color: color1,
        borderColor: color2,
    }

    const gradientStyle = {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
    }
    const clickDelete = () => {
        removeGradient(gradient.id)
    }
    const clickEdit = () => {
        navigate(`edit/${gradient.id}`)
    }

    // const TextColor = styled.div`
    //     backgroundColor: invert(${color2}),
    //     color: invert(${color1}),
    //     borderColor: ${color1},
    // `

    return (
        <div>
            <div className={s.gradientContainer} style={gradientStyle}>
                <div style={{color: color1}}><span>{color1}</span></div>
                <div className={s.buttonBlock}>
                    <button style={styleButton1} onClick={clickDelete}><span>delete</span></button>
                    <button style={styleButton2} onClick={clickEdit}><span>edit</span></button>
                </div>
                <div style={{color: color2}}><span>{color2}</span></div>
            </div>
        </div>
    )
}

//types

type GradientPropsType = {
    gradient: GradientType
    removeGradient: (id: string) => void
}
