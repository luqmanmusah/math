import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Result from './results';

const Calculator = () => {
  const [state, setState] = useState({
    next: null,
    total: null,
  });
  const Handler = (event) => {
    const { name } = event.target;
    setState((prevState) => calculate({ ...prevState }, name));
  };
  const { next, total } = state;
  return (
    <div className="grid container max-width-sm">
      <Result className="result" result={next || (total || '0')} />
      <button onClick={(event) => { Handler(event); }} name="AC" type="button" className="button">AC</button>
      <button onClick={(event) => { Handler(event); }} name="+/-" type="button" className="button">+/-</button>
      <button onClick={(event) => { Handler(event); }} name="%" type="button" className="button">%</button>
      <button onClick={(event) => { Handler(event); }} name="÷" type="button" className="operators">÷</button>

      <button onClick={(event) => { Handler(event); }} name="7" type="button" className="button">7</button>
      <button onClick={(event) => { Handler(event); }} name="8" type="button" className="button">8</button>
      <button onClick={(event) => { Handler(event); }} name="9" type="button" className="button">9</button>
      <button onClick={(event) => { Handler(event); }} name="x" type="button" className="operators">X</button>

      <button onClick={(event) => { Handler(event); }} name="4" type="button" className="button">4</button>
      <button onClick={(event) => { Handler(event); }} name="5" type="button" className="button">5</button>
      <button onClick={(event) => { Handler(event); }} name="6" type="button" className="button">6</button>
      <button onClick={(event) => { Handler(event); }} name="-" type="button" className="operators">-</button>

      <button onClick={(event) => { Handler(event); }} name="1" type="button" className="button">1</button>
      <button onClick={(event) => { Handler(event); }} name="2" type="button" className="button">2</button>
      <button onClick={(event) => { Handler(event); }} name="3" type="button" className="button">3</button>
      <button onClick={(event) => { Handler(event); }} name="+" type="button" className="operators">+</button>

      <button onClick={(event) => { Handler(event); }} name="0" type="button" id="zero" className="button">0</button>
      <button onClick={(event) => { Handler(event); }} name="." type="button" className="button">.</button>
      <button onClick={(event) => { Handler(event); }} name="=" type="button" className="operators">=</button>
    </div>
  );
};

export default Calculator;
