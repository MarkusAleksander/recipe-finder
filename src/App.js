import React, { Component } from 'react';
import './App.css';

// Import Components
import IngredientsMain from './components/IngredientInput/IngredientsInputMain';
import SearchOptions from './components/Search/SearchOptions';
import RecipeMain from './components/Recipes/RecipeMain';

import searchModes from './components/Search/search_modes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Currently selected search mode
      user_search_mode: null,
      // Currentl selected ingredients
      user_ingredients: []
    }

    this.updateSearchMode = this.updateSearchMode.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  updateSearchMode(m) {
    // Update user selected Mode
    this.setState({ user_search_mode: m });
  }

  updateIngredients(i) {
    // Update user entered ingredients
    this.setState({ user_ingredients: i });
  }

  render() {
    return (
      <div className="App">
        <div className="col-1">
          {/* Pass callback for updating ingredients */}
          <IngredientsMain updateIngredients={this.updateIngredients}></IngredientsMain>
        </div>
        <div className="col-1">
          {/* pass user entered ingredients, user selected mode and recipe lists */}
          <SearchOptions onUpdate={this.updateSearchMode} options={searchModes}></SearchOptions>
          {this.state.user_search_mode != null &&
            <RecipeMain ingredients={this.state.user_ingredients} searchModes={searchModes} searchMode={this.state.user_search_mode}></RecipeMain>
          }
        </div>
      </div >
    );
  }
}

export default App;
