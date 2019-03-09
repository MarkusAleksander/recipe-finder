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
            <div>
                <div className="field">
                    <label className="label">Select an Ingredient</label>
                    <div className="control">
                        <UserSelectContainer
                            handleSelection={addIngredient}
                            type="ingredients"></UserSelectContainer>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Select a Quantifier</label>
                    <div className="control">
                        <UserSelectContainer
                            className="control"
                            handleSelection={addQuantifier}
                            type="quantifiers"></UserSelectContainer>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Enter Amount</label>
                    <div className="control">
                        <UserInputContainer
                            handleInput={this.handleUserIngredientInput}
                            type="amount"
                        ></UserInputContainer>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <UserSubmitContainer
                            handleClick={this.handleUserIngredientSubmit}
                            text={'Add Ingredient'}
                        ></UserSubmitContainer>
                    </div>
                </div>
                <div className="content">
                    <UserIngredientListContainer></UserIngredientListContainer>
                </div>
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