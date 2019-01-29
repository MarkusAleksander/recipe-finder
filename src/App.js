import React, { Component } from 'react';
import './App.css';

// Import Components
import IngredientsMain from './components/IngredientInput/IngredientsInputMain';
import SearchOptions from './components/Search/SearchOptions';
import RecipeMain from './components/Recipes/RecipeMain';
import ServingInput from './components/ServingInput/ServingInput';

import searchModes from './components/Search/search_modes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      // Currently selected search mode
      user_search_mode: null,
      // Currentl selected ingredients
      user_ingredients: [],
      // Total number of servings to make for
      servingSize: 1
    }

    this.updateSearchMode = this.updateSearchMode.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.updateServings = this.updateServings.bind(this);
  }

  updateSearchMode(m) {
    // Update user selected Mode
    this.setState({ user_search_mode: m });
  }

  updateIngredients(i) {
    // Update user entered ingredients
    this.setState({ user_ingredients: i });
  }

  updateServings(i) {
    this.setState({ servingSize: i });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="col">
            <ServingInput updateServings={this.updateServings} servingSize={this.state.servingSize}></ServingInput>
            {/* Pass callback for updating ingredients */}
            <IngredientsMain updateIngredients={this.updateIngredients}></IngredientsMain>
            {/* pass user entered ingredients, user selected mode and recipe lists */}
            <SearchOptions onUpdate={this.updateSearchMode} options={searchModes}></SearchOptions>
          </div>
          <div className="col">
            {this.state.user_search_mode != null &&
              <RecipeMain ingredients={this.state.user_ingredients} searchModes={searchModes} searchMode={this.state.user_search_mode} servingSize={this.state.servingSize}></RecipeMain>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
