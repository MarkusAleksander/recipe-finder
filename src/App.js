import React, { Component } from 'react';
import './App.css';

import IngredientInput from './Ingredients/IngredientInput';
import IngredientList from './Ingredients/IngredientList';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(i) {
    let t = this.state.items;
    t.push(i);
    this.setState({ items: t });
  }

  render() {
    return (
      <div className="App">
        <IngredientInput handleSubmit={this.handleSubmit} ></IngredientInput>
        <IngredientList items={this.state.items}></IngredientList>
      </div>
    );
  }
}

export default App;
