import React, { Component } from 'react'

//import { connect } from 'react-redux';

// Import Components
import UserSelectContainer from './../UserEntry/UserSelectContainer';
import UserInputContainer from './../UserEntry/UserInputContainer';
import UserSubmitContainer from './../UserEntry/UserSubmitContainer';
import UserIngredientListContainer from './../UserEntry/UserIngredientListContainer';

import { store } from './../../store/store';
import { addIngredient, addQuantifier, addAmount, storeUserIngredient } from './../../store/actions/action_creators';

class UserBlock extends Component {

    constructor(props) {
        super(props);

        this.handleUserIngredientInput = this.handleUserIngredientInput.bind(this);
        this.handleUserIngredientSubmit = this.handleUserIngredientSubmit.bind(this);
    }

    handleUserIngredientInput(value) {
        addAmountToStore(value);
    }
    handleUserIngredientSubmit() {
        storeUserIngredients();
    }

    render() {
        return (
            <div className="col">
                <UserSelectContainer
                    handleSelection={addIngredient}
                    type="ingredients"></UserSelectContainer>
                <UserSelectContainer
                    handleSelection={addQuantifier}
                    type="quantifiers"></UserSelectContainer>
                <UserInputContainer
                    handleInput={this.handleUserIngredientInput}
                    type="amount"
                ></UserInputContainer>
                <UserSubmitContainer
                    handleClick={this.handleUserIngredientSubmit}
                    text={'Add Ingredient'}
                ></UserSubmitContainer>
                <UserIngredientListContainer></UserIngredientListContainer>
            </div>
        )
    }
}

function addAmountToStore(value) {
    store.dispatch(addAmount(value));
}
function storeUserIngredients() {
    store.dispatch(storeUserIngredient());
}

export default UserBlock;