import React from "react";
import {FormValuesType, SettingForm} from "../../../components/form/SettingForm";
import s from "../newItem/NewGradient.module.scss";

export const EditGradient: React.FC = () => {


    const changeCallback = (values: FormValuesType) => {
        console.log(values)

    }

    return (
        <div className={s.containerApp}>

            <SettingForm changeCallback={changeCallback}/>
        </div>
    )
}

