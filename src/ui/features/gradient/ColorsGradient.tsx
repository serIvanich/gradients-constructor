import React from "react";

export const ColorsGradient: React.FC = () => {
const gradientStyle = {
    width: 350,
    height: 70,
    border: 'solid 2px purple',
    background: 'linear-gradient(to right, #E040FB, #00BCD4)',
}

    return (
        <div>
            <div style={gradientStyle}></div>
        </div>
    )
}