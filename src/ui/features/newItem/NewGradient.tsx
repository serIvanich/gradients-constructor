import React from "react";
import s from './NewGradient.module.scss'
import {FormValuesType, SettingForm} from "../../../components/form/SettingForm";
import {useActions} from "../../../utils/redux-utils";
import {addNewGradient} from "../../../bll/gradients-reducer";
import {useAppDispatch} from "../../../bll/store";
import {v4 as uuidv4} from "uuid";

export const NewGradient: React.FC = () => {

    const dispatch = useAppDispatch()

    const changeCallback = (values: FormValuesType) => {
        console.log(values)
        const newGradient = {...values, id: setId()}
        dispatch(addNewGradient({gradient: newGradient}))
    }
    function setId(): string {
        return uuidv4()
    }

    return (
        <div className={s.containerApp}>

            <SettingForm changeCallback={changeCallback}/>
        </div>
    )
}

