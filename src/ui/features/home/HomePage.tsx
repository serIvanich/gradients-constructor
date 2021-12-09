import React from "react";
import {ColorsGradient} from "../gradient/ColorsGradient";
import s from './HomePage.module.css'

export const HomePage: React.FC = () => {

    return (
        <div className={s.containerHome}>
            <div className={s.buttonAddGradient}>
                <button>add new gradient</button>
            </div>
            <div className={s.infoContainer}>

            </div>
        <div className={s.containerGradient}>


            <ColorsGradient/>
            <ColorsGradient/>
            <ColorsGradient/>
            <ColorsGradient/>

        </div>
        </div>
    )
}