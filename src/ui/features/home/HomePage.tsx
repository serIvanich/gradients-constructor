import React from "react";
import {ColorsGradient} from "../gradient/ColorsGradient";
import s from './HomePage.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../bll/store";
import {GradientType} from "../../../bll/gradients-reducer";

export const HomePage: React.FC = () => {

    const gradients = useSelector<AppRootStateType, GradientType[]>(state => state.gradients)

    return (
        <div className={s.containerHome}>
            <div className={s.buttonAddGradient}>
                <button>add new gradient</button>
            </div>
            <div className={s.infoContainer}>
                 colors gradient :  <b>{gradients.length}</b>
            </div>
            <div className={s.containerGradient}>

                {
                    gradients.length ? gradients.map((item, ind) => (<ColorsGradient key={ind} gradient={item}/>))
                        : 'you do not have gradient'
                }

            </div>
        </div>
    )
}