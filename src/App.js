import React, { Component } from 'react';
import './App.css';

// Import Components
import RecipeListContainer from './components/Recipe/RecipeListContainer';
import UserSelectContainer from './components/UserEntry/UserSelectContainer';
import UserInputContainer from './components/UserEntry/UserInputContainer';
import UserSubmitContainer from './components/UserEntry/UserSubmitContainer';

import { store } from './store/store';
import { addIngredient, addQuantifier, addQuantity, storeUserIngredient } from './store/actions/action_creators';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleUserQuantifierSelection = this.handleUserQuantifierSelection.bind(this);
    this.handleUserIngredientSelection = this.handleUserIngredientSelection.bind(this);
    this.handleUserIngredientInput = this.handleUserIngredientInput.bind(this);
    this.handleUserIngredientSubmit = this.handleUserIngredientSubmit.bind(this);
  }

  handleUserQuantifierSelection(value) {
    addIngredientToStore(value);
  }
  handleUserIngredientSelection(value) {
    addQuantifierToStore(value);
  }
  handleUserIngredientInput(value) {
    addQuantityToStore(value);
  }
  handleUserIngredientSubmit() {
    storeUserIngredients();
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
          <UserInputContainer
            handleInput={this.handleUserIngredientInput}
          ></UserInputContainer>
          <UserSubmitContainer
            handleClick={this.handleUserIngredientSubmit}
            text={'Add Ingredient'}
          ></UserSubmitContainer>
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
function addQuantityToStore(value) {
  store.dispatch(addQuantity(value));
}
function storeUserIngredients() {
  store.dispatch(storeUserIngredient());
}
export default App;
