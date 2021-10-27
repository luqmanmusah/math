import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Navbar from './Navbar';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (

      <>
        <Navbar />
        <Switch>
          <div>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/calculator">
              <div className="calculator-body">
                <p>
                  {' Lets do some Maths!' }
                </p>
                <Calculator />
              </div>
            </Route>
            <Route path="/Quotes">
              <Quotes />
            </Route>
          </div>
        </Switch>
      </>
    );
  }
}

export default App;
