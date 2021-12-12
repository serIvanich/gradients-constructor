import React from "react";
import s from './NewGradient.module.scss'
import {FormValuesType, SettingForm} from "../../../components/form/SettingForm";

export const NewGradient: React.FC = () => {


    const changeCallback = (values: FormValuesType) => {
        console.log(values)

    }

    return (
        <div className={s.containerApp}>

            <SettingForm changeCallback={changeCallback}/>
        </div>
    )
}

