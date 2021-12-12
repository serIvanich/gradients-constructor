import React from "react";
import s from './ColorsGradient.module.scss'
import {GradientType} from "../../../bll/gradients-reducer";
import {useNavigate} from "react-router-dom";

export const ColorsGradient: React.FC<ColorsGradientPropsType> = ({gradient, removeGradient}) => {
    const navigate = useNavigate()

    const {color1, color2} = gradient

    const gradientStyle = {
        background: `linear-gradient(to right, ${color1}, ${color2})`,
    }
    const clickDelete = () => {
        removeGradient(gradient.id)
    }
    const clickEdit = () => {
        navigate(`edit/${gradient.id}`)
    }

    return (
        <div>

            <div className={s.gradientContainer} style={gradientStyle}>


                <div style={{color: color2}}>{color1}</div>
                <div className={s.buttonBlock}>
                    <button style={{backgroundColor: color2}} onClick={clickDelete}>delete</button>
                    <button style={{backgroundColor: color1}} onClick={clickEdit}>edit</button>
                </div>
                <div style={{color: color1}}>{color2}</div>

            </div>
        </div>
    )
}

//types

type ColorsGradientPropsType = {
    gradient: GradientType
    removeGradient: (id: string) => void
}
