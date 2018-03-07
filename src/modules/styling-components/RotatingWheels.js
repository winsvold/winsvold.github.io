import React from 'react';
import ReactSVG from 'react-svg';
import Wheel from '../../img/wheel.svg'
import "./rotating-wheel.css"

function RotatingWheel(props) {
    return (
        <div className="rotate-wrapper">
            <div className="rotate">
                <ReactSVG path={Wheel}/>
            </div>
        </div>
    );
}

export default RotatingWheel;