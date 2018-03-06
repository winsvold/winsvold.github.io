import React, {Component} from 'react';
import './App.css';
import './less/modern.css'
import ReactSVG from 'react-svg';
import Wheel from './img/wheel.svg'
import Showcase from "./modules/Showcase";
import circleGameJpg from "./img/circlegame.jpg";
import hackerTyperPic from "./img/matrixscreen.png";
import ReactGA from "react-ga";

class App extends Component {
    constructor(props) {
        ReactGA.initialize('UA-114223488-1');
        ReactGA.pageview('Github Homepage');
        super(props);
    }

    render() {
        const header =
            <header className="App-header">
                <h1 className="App-title">Daniel Winsvold</h1>
            </header>;

        const mainContent =
            <section className="main-content">
                <Showcase
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
                <Showcase
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
            </section>;

        const footer =
            <footer className="footer">
                <h4>winsvold@github</h4>
            </footer>;

        const rotatingWheel =
            <div className="rotate-wrapper">
                <div className="rotate">
                    <ReactSVG path={Wheel}/>
                </div>
            </div>;

        const bubbles = (
            <div className="bubble-wrapper">
                <div className="bubble"/>
                <div className="bubble"/>
                <div className="bubble"/>
                <div className="bubble"/>
                <div className="bubble"/>
                <div className="bubble"/>
            </div>
        );
        return (
            <div className="bubble-concept">
                <div className="App">
                    {bubbles}
                    {header}
                    {mainContent}
                    {footer}
                </div>
                {rotatingWheel}
            </div>
        );
    }
}

export default App;
