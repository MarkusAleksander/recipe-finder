import React, { Component } from 'react';
import './App.css';

import IngredientsMain from './Ingredients/IngredientsMain';
import RecipeMain from './Recipes/RecipeMain';
import SearchModes from './Recipes/SearchModes';

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
      }],
      search_modes: [
        {
          'mode': 'all'
        },
        {
          'mode': 'exact'
        },
        {
          'mode': 'fuzzy'
        }
      ],
      search_mode: null
    }

    this.updateSearchMode = this.updateSearchMode.bind(this);
  }

  updateSearchMode(m) {
    this.setState({ search_mode: m });
  }

  render() {
    return (
      <div className="App">
        <div className="col-1">
          <IngredientsMain></IngredientsMain>
        </div>
        <div className="col-1">
          <SearchModes modes={this.state.search_modes} updateMode={this.updateSearchMode}></SearchModes>
          <RecipeMain search_mode={this.state.search_mode} recipes={this.state.recipe_list}></RecipeMain>
        </div>
      </div>
    );
  }
}

export default App;
