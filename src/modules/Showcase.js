import React from 'react';
import PT from 'prop-types';

function Showcase(props) {

    return (
        <a href={props.url} onClick={() => props.onClick()} className="showcase">
            <h4>{props.title}</h4>
            <div className="showcase-content" style={props.backgroundImg}>
                <p>{props.text}</p>
            </div>
        </a>
    );
}

Showcase.defaultProps = {
    text: '',
    backgroundImg: {},
    onClick: () => {}
};

Showcase.propTypes = {
    title: PT.string.isRequired,
    text: PT.string,
    backgroundImg: PT.object,
    url: PT.string,
    onClick: PT.func
};

export default Showcase;