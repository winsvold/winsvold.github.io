import React, {Component} from 'react';
import './App.css';
import './less/bubble-concept.css';
import './less/spinning-wheel-design.css';
import './less/modern.css';
import RotatingWheel from "./modules/styling-components/RotatingWheels";
import Bubbles from "./modules/styling-components/Bubbles";
import AppLinks from "./modules/AppLinks";
import {DesignConcepts} from "./design-concepts";
import Cookies from 'js-cookie';

function getStyleConcept() {
  const prevStyle = Cookies.get('style-concept');
  switch (prevStyle) {
    case DesignConcepts.BUBBLES:
      return DesignConcepts.SPINNINGWHEEL;
    case DesignConcepts.SPINNINGWHEEL:
      return DesignConcepts.BUBBLES;
    default:
      return Math.random() < 0.5
        ? DesignConcepts.BUBBLES
        : DesignConcepts.SPINNINGWHEEL;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    const styleConcept = getStyleConcept();
    Cookies.set('style-concept', styleConcept);
    this.state = {
      styleConcept: styleConcept
    };
  }

  render() {
    const header =
      <header className="App-header">
        <h1 className="App-title">Daniel Winsvold</h1>
      </header>;

    const mainContent =
      <section className="main-content">
        {this.state.styleConcept === DesignConcepts.BUBBLES ? <Bubbles/> : ''}
        <AppLinks/>
      </section>;

    const footer =
      <footer className="footer">
        <h4>winsvold@github</h4>
      </footer>;

    const cls = `App ${this.state.styleConcept}`;
    return (
      <div className={cls}>
        {header}
        {mainContent}
        {footer}
        {this.state.styleConcept === DesignConcepts.SPINNINGWHEEL ? <RotatingWheel/> : ''}
      </div>
    );
  }
}

export default App;
