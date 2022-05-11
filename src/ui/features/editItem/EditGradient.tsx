import React from "react";
import {FormValuesType, SettingForm} from "../../form/SettingForm";
import s from "./EditGradient.module.scss";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "../../../bll/store";
import {changeColorsGradient, GradientType} from "../../../bll/gradients-reducer";

export const EditGradient: React.FC = React.memo(() => {

    let {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const gradients = useSelector<AppRootStateType, GradientType[]>(state => state.gradients)

    let gradient: GradientType [] = gradients ? gradients.filter(i => i.id === id) : []
    let gradientValues
        if (gradient.length) {
            gradientValues = {
                color1: gradient[0].color1,
                color2: gradient[0].color2
            }
    }

    const changeCallback = (values: FormValuesType) => {
        const newGradient = {
            id: gradient[0].id,
            color1: values.color1,
            color2: values.color2,
        }
        dispatch(changeColorsGradient({gradient: newGradient}))
        navigate('/')
    }

    return (
        <div className={s.containerEdit}>
            <div className={s.text}>please change colors of gradient or push <Link to={'/'}><b>this</b></Link> for go out</div>
            <SettingForm changeCallback={changeCallback} values={gradientValues}/>
        </div>
    )
})

