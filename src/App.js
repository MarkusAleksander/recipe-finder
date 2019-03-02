import React, { Component } from 'react';
import './App.css';

// Import Components
import RecipeListContainer from './components/Recipe/RecipeListContainer';
import UserSelectContainer from './components/UserEntry/UserSelectContainer';

import { store } from './store/store';
import { addIngredient, addQuantifier } from './store/actions/action_creators';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleUserQuantifierSelection = this.handleUserQuantifierSelection.bind(this);
    this.handleUserIngredientSelection = this.handleUserIngredientSelection.bind(this);
  }

  handleUserQuantifierSelection(value) {
    addIngredientToStore(value);
  }
  handleUserIngredientSelection(value) {
    addQuantifierToStore(value);
  }

  render() {
    return (
      <div>
        <RecipeListContainer></RecipeListContainer>
        <div>
          <UserSelectContainer
            handleSelection={this.handleUserQuantifierSelection}
            type="recipeIngredients"></UserSelectContainer>
          <UserSelectContainer
            handleSelection={this.handleUserIngredientSelection}
            type="quantifiers"></UserSelectContainer>
        </div>
      </div>
    )
  }

}

function addIngredientToStore(item) {
  store.dispatch(addIngredient(item));
}
function addQuantifierToStore(item) {
  store.dispatch(addQuantifier(item));
}

export default App;
