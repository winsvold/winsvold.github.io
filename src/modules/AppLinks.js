import React from 'react';
import AppLink from "./AppLink";
import circleGameJpg from "../img/circlegame.jpg";
import hackerTyperPic from "../img/matrixscreen.png";
import ReactGA from "react-ga";

function AppLinks() {
    return (
        <div className="applinks-container">
            <AppLink
                title={'CircleGame'}
                backgroundImg={{backgroundImage: `url(${circleGameJpg})`}}
                url={"https://winsvold.github.io/circlegame/index.html"}
                onClick={() => {
                    ReactGA.event({
                        category: 'Link',
                        action: 'Go to CircleGame'
                    });
                }}
            />
            <AppLink
                title={'HackerTyper'}
                backgroundImg={{backgroundImage: `url(${hackerTyperPic})`}}
                url={"https://winsvold.github.io/hackertyper/index.html"}
                onClick={() => {
                    ReactGA.event({
                        category: 'Link',
                        action: 'Go to HackerTyper'
                    });
                }}
            />
        </div>
    );
}

export default AppLinks;
