import React, { Component } from 'react';
import './App.css';

import IngredientsMain from './Ingredients/IngredientsMain';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="col-1">
          <IngredientsMain></IngredientsMain>
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

export default App;
