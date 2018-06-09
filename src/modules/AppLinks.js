import React from 'react';
import AppLink from "./AppLink";
import circleGameJpg from "../img/circlegame.png";
import hackerTyperPic from "../img/matrixscreen.png";
import inflammatoryPic from "../img/iflammatoryessays.png";
import ReactGA from "react-ga";

function AppLinks() {
  return (
    <div className="applinks-container">
      <AppLink
        text="Take control over a potent circle and crash it hard into a evil singularity."
        title={'CircleGame'}
        backgroundImg={{backgroundImage: `url(${circleGameJpg})`}}
        url={"https://winsvold.github.io/circlegame/"}
        onClick={() => {
          ReactGA.event({
            category: 'Link',
            action: 'Go to CircleGame'
          });
        }}
      />
      <AppLink
        text="Bring out your inner hacker and show everyone what a fearsome cyber-terrorist you are."
        title={'HackerTyper'}
        backgroundImg={{backgroundImage: `url(${hackerTyperPic})`}}
        url={"https://winsvold.github.io/hackertyper/"}
        onClick={() => {
          ReactGA.event({
            category: 'Link',
            action: 'Go to HackerTyper'
          });
        }}
      />
      <AppLink
        text="A homage to Jenny Holzer and her ’15 Inflammatory Essays’. Originally presented anonymously on the streets of New York City"
        title={'Inflammatory Essays'}
        backgroundImg={{backgroundImage: `url(${inflammatoryPic})`}}
        url={"https://winsvold.github.io/inflammatory-essays"}
        onClick={() => {
          ReactGA.event({
            category: 'Link',
            action: 'Go to Inflammatory Essays'
          });
        }}
      />
    </div>
  );
}

export default AppLinks;
