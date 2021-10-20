import React from 'react';
import calculate from '../logic/calculate';
import Result from './results';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      next: null,
      total: null
    };
    this.Handler = this.Handler.bind(this);
  }
  Handler(event) {
    const { name } = event.target;
    this.setState((state) => calculate(state, name));
  }
    render() {
      const { next, total } = this.state;
      return (

     

      <div className="grid container max-width-sm">
        <Resul className="result" result={ next || ( total|| '0') }/>
        <button onClick={this.Handler} name="AC" type="button" className="button">AC</button>
        <button onClick={this.Handler} name="+/-" type="button" className="button">+/-</button>
        <button onClick={this.Handler} name="%" type="button" className="button">%</button>
        <button onClick={this.Handler} name="/" type="button" className="operators">÷</button>

        <button onClick={this.Handler} name="7" type="button" className="button">7</button>
        <button onClick={this.Handler} name="8" type="button" className="button">8</button>
        <button onClick={this.Handler} name="9" type="button" className="button">9</button>
        <button onClick={this.Handler} name="*" type="button" className="operators">×</button>

        <button onClick={this.Handler} name="4" type="button" className="button">4</button>
        <button onClick={this.Handler} name="5" type="button" className="button">5</button>
        <button onClick={this.Handler} name="6" type="button" className="button">6</button>
        <button onClick={this.Handler} name="-" type="button" className="operators">-</button>

        <button onClick={this.Handler} name="1" type="button" className="button">1</button>
        <button onClick={this.Handler} name="2" type="button" className="button">2</button>
        <button onClick={this.Handler} name="3" type="button" className="button">3</button>
        <button onClick={this.Handler} name="+" type="button" className="operators">+</button>

        <button onClick={this.Handler} name="0" type="button" id="zero" className="button">0</button>
        <button onClick={this.Handler} name="." type="button" className="button">.</button>
        <button onClick={this.Handler} name="=" type="button" className="operators">=</button>
      </div>
    );
    
  }
}

export default Calculator;
