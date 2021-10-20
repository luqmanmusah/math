import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="calculator-body">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
