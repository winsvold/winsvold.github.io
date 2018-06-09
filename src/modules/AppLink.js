import React from 'react';
import PT from 'prop-types';

function AppLink(props) {

    return (
        <a href={props.url} onClick={() => props.onClick()} className="app-link">
            <div className="app-link-img" style={props.backgroundImg} />
            <div className="app-link-tekst"><p>{props.text}</p></div>
            <div className="app-link-title"><h4>{props.title}</h4></div>
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