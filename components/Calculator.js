import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

    render = () => (
      <div className="grid container max-width-sm">
        <p value={0} className="result">0</p>
        <button name="AC" type="button" className="button">AC</button>
        <button name="+/-" type="button" className="button">+/-</button>
        <button name="%" type="button" className="button">%</button>
        <button name="/" type="button" className="operators">/</button>

        <button name="7" type="button" className="button">7</button>
        <button name="8" type="button" className="button">8</button>
        <button name="9" type="button" className="button">9</button>
        <button name="*" type="button" className="operators">*</button>

        <button name="4" type="button" className="button">4</button>
        <button name="5" type="button" className="button">5</button>
        <button name="6" type="button" className="button">6</button>
        <button name="-" type="button" className="operators">-</button>

        <button name="1" type="button" className="button">1</button>
        <button name="2" type="button" className="button">2</button>
        <button name="3" type="button" className="button">3</button>
        <button name="+" type="button" className="operators">+</button>

        <button name="0" type="button" id="zero" className="button">0</button>
        <button name="." type="button" className="button">.</button>
        <button name="=" type="button" className="operators">=</button>
      </div>
    );
}

export default Calculator;
