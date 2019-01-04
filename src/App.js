import React, { Component } from 'react';
import './App.css';

// Import Components
import IngredientsMain from './components/IngredientInput/IngredientsInputMain';
import SearchModes from './Recipes/SearchModes';
import RecipeMain from './Recipes/RecipeMain';

// Import localData
import recipeList from './localData/recipe_list';
import searchModes from './localData/search_modes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      // List of recipes
      recipe_list: recipeList,
      // List of search modes
      search_modes: searchModes,
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
          {/* Pass list of modes and callback for updating current mode */}
          <SearchModes modes={this.state.search_modes} updateMode={this.updateSearchMode}></SearchModes>
          {/* pass user entered ingredients, user selected mode and recipe lists */}
          <RecipeMain ingredients={this.state.user_ingredients} modes={this.state.search_modes} search_mode={this.state.user_search_mode} recipes={this.state.recipe_list}></RecipeMain>
        </div>
      </div>
    );
  }
}

export default App;
