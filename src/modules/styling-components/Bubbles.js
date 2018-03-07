import React from 'react';
import PT from 'prop-types';
import './bubbles.css'

function Bubbles(props) {
    let bubbles = [];
    for (let i=0; i < props.numberOfBubbles; i++){
        bubbles.push(<div className="bubble" id={`styling-bubble-${i}`} />);
    }
    return (
        <div className="bubble-wrapper">
            {bubbles}
        </div>
    )
}

Bubbles.defaultProps = {
    numberOfBubbles: 6
};

Bubbles.propTypes = {
    numberOfBubbles: PT.number
};

export default Bubbles;