import React from "react";
import {FormValuesType, SettingForm} from "../../../components/form/SettingForm";
import s from "./EditGradient.module.scss";

export const EditGradient: React.FC = () => {


    const changeCallback = (values: FormValuesType) => {
        console.log(values)

    }
debugger
    return (
        <div className={s.containerApp}>

            <SettingForm changeCallback={changeCallback}/>
        </div>
    )
}

