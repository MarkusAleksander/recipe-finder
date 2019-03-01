import React, { Component } from 'react';
import UserSelect from './UserSelect';

import { store } from '../../store/store';
import { addIngredient } from '../../store/actions/action_creators';

class UserSelectContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            ingredients: []
        }

        this.handleSelection = this.handleSelection.bind(this);
    }

    componentDidMount() {
        this.setState({
            ingredients: getIngredients()
        });
    }

    handleSelection(e) {
        let ingredient = e.target.value;
        addIngredientToStore(ingredient);
    }

    render() {

        // const selectBox = <UserSelect ingredients={this.state.ingredients}></UserSelect>;
        // const ingredients = this.state.ingredients;

        return (
            <div>
                {this.state.ingredients.length ? <UserSelect handleSelection={this.handleSelection} ingredients={this.state.ingredients}></UserSelect> : <p>No Ingredients To Select</p>}
            </div>
        )

    }
}

function getIngredients() {
    return store.getState().recipeIngredients;
}
function addIngredientToStore(ingredient) {
    store.dispatch(addIngredient(ingredient));
}

export default UserSelectContainer;