import React, {Component} from 'react';
import './App.css';
import './less/bubble-concept.css'
import './less/spinning-wheel-design.css'
import ReactGA from "react-ga";
import RotatingWheel from "./modules/styling-components/RotatingWheels";
import Bubbles from "./modules/styling-components/Bubbles";
import AppLinks from "./modules/AppLinks";
import {DesignConcepts} from "./design-concepts";

const styleConcept = Math.random() < 0.5 ? DesignConcepts.BUBBLES : DesignConcepts.SPINNINGWHEEL;

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
                {styleConcept === DesignConcepts.BUBBLES ? <Bubbles/> : ''}
                <AppLinks />
            </section>;

        const footer =
            <footer className="footer">
                <h4>winsvold@github</h4>
            </footer>;

        const cls = `App ${styleConcept}`;
        return (
            <div className={cls}>
                {header}
                {mainContent}
                {footer}
                {styleConcept === DesignConcepts.SPINNINGWHEEL ? <RotatingWheel /> : ''}
            </div>
        );
    }
}

export default App;
