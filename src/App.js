import React, { Component } from 'react';
import './App.css';

import IngredientInput from './Ingredients/IngredientInput';
import IngredientList from './Ingredients/IngredientList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <IngredientInput></IngredientInput>
        <IngredientList></IngredientList>
      </div>
    );
  }
}

export default App;
