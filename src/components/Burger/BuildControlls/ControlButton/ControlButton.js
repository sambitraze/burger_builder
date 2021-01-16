import React from 'react';
import './ControlButton.css'
const controlButton = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.label}</div>
            <button className="BuildControl Less">Less</button>
            <button className="BuildControl More">More</button>
        </div>
    );
}
export default controlButton;