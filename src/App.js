import React, { Component } from 'react';
import './App.css';

import IngredientsMain from './Ingredients/IngredientsMain';
import RecipeMain from './Recipes/RecipeMain';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      recipe_list: [{
        'title': 'Pasta Bolognese',
        'instruction': 'Lorem Ipsum',
        'ingredients': ['pasta', 'tomatoes', 'oregano']
      }, {
        'title': 'Goulash',
        'instruction': 'Lorem Ipsum',
        'ingredients': ['beef', 'tomatoes']
      }]
    }
  }

  render() {
    return (
      <div className="App">
        <div className="col-1">
          <IngredientsMain></IngredientsMain>
        </div>
        <div className="col-1">
          <RecipeMain recipes={this.state.recipe_list}></RecipeMain>
        </div>
      </div>
    );
  }
}

export default App;
