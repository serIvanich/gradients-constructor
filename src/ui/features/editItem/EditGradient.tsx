import React from "react";
import {FormValuesType, SettingForm} from "../../../components/form/SettingForm";
import s from "./EditGradient.module.scss";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {GradientType} from "../../../bll/gradients-reducer";

export const EditGradient: React.FC = () => {

    const {id} = useParams()

    const gradients = useSelector<AppRootStateType, GradientType[]>(state => state.gradients)
    const gradient = gradients.find(i => i.id === id)
    const gradientValues = gradient?.color1 && gradient?.color2? {color1: gradient.color1, color2: gradient.color2} : {}
    console.log(id, gradient)
    const changeCallback = (values: FormValuesType) => {
        gradients.forEach(i => {

        })

    }

    return (
        <div className={s.containerApp}>

            <SettingForm changeCallback={changeCallback} values={gradientValues}/>
        </div>
    )
}

