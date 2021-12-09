import React from "react";
import s from './ColorsGradient.module.css'

export const ColorsGradient: React.FC = () => {
const gradientStyle = {

    background: 'linear-gradient(to right, #E040FB, #00BCD4)',
}

    return (
        <div>

            <div className={s.gradientContainer} style={gradientStyle}>


                   <div>startColor</div>
                   <div>
                       <button>delete</button>
                       <button>edit</button>
                   </div>
                   <div>endColor</div>



            </div>
        </div>
    )
}