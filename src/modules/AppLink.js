import React from 'react';
import PT from 'prop-types';

function AppLink(props) {

    return (
        <a href={props.url} onClick={() => props.onClick()} className="app-link">
            <div className="app-link-content" style={props.backgroundImg}>
                <p>{props.text}</p>
            </div>
            <h4>{props.title}</h4>
        </a>
    );
}

AppLink.defaultProps = {
    text: '',
    backgroundImg: {},
    onClick: () => {}
};

AppLink.propTypes = {
    title: PT.string.isRequired,
    text: PT.string,
    backgroundImg: PT.object,
    url: PT.string,
    onClick: PT.func
};

export default AppLink;